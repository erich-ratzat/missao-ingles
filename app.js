// Missão Inglês — motor das lições (voz, microfone, cenas) e as duas missões.

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const app = document.getElementById('app');
const el = id => document.getElementById(id);

// tradução das falas em inglês (aparece embaixo da legenda)
const TR = {
  L03:'Piloto Lucas! Precisamos de você! Construa uma nave!', L15:'Uau! Sua nave está pronta, piloto!',
  L20:'Você conseguiu, Lucas! A base está salva. Você é um piloto de verdade!',
  LN_great:'Muito bem!', LN_awesome:'Incrível, piloto!', LN_perfect:'Isso! Perfeito!', LN_shot:'Belo tiro!',
  LN_color:'Escolha uma cor: vermelho, azul ou verde.', W_nova_countdown:'Três... dois... um... Já!',
  H04:'Ei, campeão! Você está pronto?', H06:'Ótimo! Agora escolha sua camisa.', H08:'Pegue a bola!',
  H14:'Tudo bem, campeão! Você consegue!', H17:'Você ganhou! Você é campeão!',
  HC_great:'Muito bem!', HC_yes:'Isso! Perfeito!', HC_awesome:'Incrível!', HC_again:'De novo! Chuta!',
  HC_color:'Vermelho, azul ou amarelo?', HC_saygoal:'Gol! Fala! Gol!',
};
const WHO = {nova:['Capitã Nova', ART.nova], bip:['Bip', ART.bip], coach:['Coach Max', ART.coach], narr:['Narrador', ART.narr]};
const SPEAKS_EN = new Set(['nova', 'coach']);

// palavras que a criança fala, com o que o reconhecedor costuma "ouvir" quando uma criança brasileira fala
const WORDS = {
  wing:   {pt:'asa',      ok:['wing','wings','win','when','wink','ring','ween','swing','wean','winged','wind','wig','being','we']},
  rocket: {pt:'foguete',  ok:['rocket','rockets','racket','rocky','pocket','rock','rocked','rockit','rock it','raquet','rokit']},
  laser:  {pt:'laser',    ok:['laser','lasers','lazer','leisure','razor','loser','lacer','lazy','lady','layser','laces']},
  light:  {pt:'luz',      ok:['light','lights','lite','like','right','life','line','night','white','lie','alright','lied','lied','lies']},
  red:    {pt:'vermelho', ok:['red','read','rad','wed','bread','ret','rat','ready','rent','rhett','reds']},
  blue:   {pt:'azul',     ok:['blue','blew','blu','glue','bloom','boo','blues','below','blow','blur','plu']},
  green:  {pt:'verde',    ok:['green','greens','grin','queen','cream','grain','greet','gree','grease','screen']},
  yellow: {pt:'amarelo',  ok:['yellow','hello','jello','yell','yello','yelo','hallo','fellow','mellow','yellows','ello']},
  up:     {pt:'para cima'}, down:{pt:'para baixo'},
  fire:   {pt:'fogo! (atirar)', ok:['fire','fair','fired','far','five','file','fight','hire','fly','fires','fyre','tire','fry','fireball','fi','fine','fried']},
  yes:    {pt:'sim',      ok:['yes','yeah','yep','yas','jess','chess','guess','yet','ya','yah','yup','yess','is','ok','okay']},
  ball:   {pt:'bola',     ok:['ball','balls','bowl','bol','boll','bull','paul','all','bow','bo','bald','both','bol','fall','tall','wall','doll']},
  kick:   {pt:'chutar',   ok:['kick','kicked','kicks','kid','keep','quick','kit','chic','click','kiki','kicking','kiss','cake','sick','kik','pick']},
  goal:   {pt:'gol',      ok:['goal','goals','gol','go','gold','call','cool','bowl','gall','girl','goo','ghoul','cole','coal','gone','golf','good']},
  countdown:{pt:'três, dois, um, já!', ok:['go','one','two','three','tree','free','to','too','won','goal','gol','1','2','3']},
};
const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
function matchKey(t, map){
  const words = t.split(' ');
  for (const k in map) if (map[k].some(v => v.includes(' ') ? t.includes(v) : words.includes(v))) return k;
  return null;
}

// ---------------- progresso ----------------
const KEY = 'missao-ingles-mvp';
let SAVE = {lucas:{plays:0, best:0, last:null, streak:0}, henrique:{plays:0, best:0, last:null, streak:0}};
try { const d = JSON.parse(localStorage.getItem(KEY) || 'null'); if (d) Object.assign(SAVE, d); } catch (e) {}
const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(SAVE)); } catch (e) {} };
const today = () => new Date().toLocaleDateString('sv');
function recordWin(kid, stars){
  const s = SAVE[kid], t = today();
  if (s.last !== t) { const d = s.last ? Math.round((new Date(t) - new Date(s.last)) / 864e5) : 99; s.streak = d <= 2 ? s.streak + 1 : 1; s.last = t; }
  s.plays++; s.best = Math.max(s.best, stars); persist();
}

// ---------------- jogo em andamento / cancelamento ----------------
let G = null;                       // {id, kid, stars, max, noMic}
const CANCEL = new Error('cancel');
const check = id => { if (!G || G.id !== id) throw CANCEL; };
// posiciona sem animar (a transição só vale para os movimentos seguintes)
function place(node, tf){ node.style.transition = 'none'; node.style.transform = tf; node.getBoundingClientRect(); node.style.transition = ''; }
const wait = ms => { const id = G.id; return new Promise(r => setTimeout(r, ms)).then(() => check(id)); };

// ---------------- som: falas gravadas ----------------
const voice = new Audio(); voice.preload = 'auto';
function play(key){
  const id = G && G.id;
  return new Promise(res => {
    let done = false; const fin = () => { if (!done) { done = true; clearTimeout(t); res(); } };
    voice.onended = fin; voice.onerror = fin;
    voice.src = 'audio/' + key + '.mp3';
    const p = voice.play(); if (p && p.catch) p.catch(fin);
    const t = setTimeout(fin, 15000);
  }).then(() => check(id));
}
function preload(prefix){ Object.keys(LINES).filter(k => k.startsWith(prefix)).forEach(k => fetch('audio/' + k + '.mp3').catch(() => {})); }

// ---------------- som: efeitos sintetizados ----------------
let ac;
function actx(){ if (!ac) ac = new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === 'suspended') ac.resume(); return ac; }
function tone(freq, dur, type = 'square', vol = .1, to){
  try { const c = actx(), o = c.createOscillator(), g = c.createGain(), t = c.currentTime;
    o.type = type; o.frequency.setValueAtTime(freq, t); if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur + .02); } catch (e) {}
}
function noise(dur, vol, f1, f2, q = .8){
  try { const c = actx(), n = c.sampleRate * dur, b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain(), t = c.currentTime;
    s.buffer = b; f.type = 'bandpass'; f.Q.value = q; f.frequency.setValueAtTime(f1, t); f.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(.001, t); g.gain.exponentialRampToValueAtTime(vol, t + dur * .2); g.gain.exponentialRampToValueAtTime(.001, t + dur);
    s.connect(f); f.connect(g); g.connect(c.destination); s.start(t); } catch (e) {}
}
const later = (ms, fn) => setTimeout(fn, ms);
const SFX = {
  good(){ [660, 880, 1320].forEach((f, i) => later(i * 90, () => tone(f, .16, 'triangle', .14))); },
  star(){ tone(1200, .12, 'triangle', .12, 2000); },
  bad(){ tone(260, .28, 'sawtooth', .07, 170); },
  build(){ tone(300, .08, 'square', .08, 700); later(90, () => tone(700, .1, 'square', .08, 1400)); later(220, () => tone(1046, .25, 'triangle', .12)); },
  alarm(){ for (let i = 0; i < 4; i++) later(i * 520, () => tone(880, .3, 'square', .05, 600)); },
  launch(){ noise(1.8, .5, 200, 2400); tone(90, 1.6, 'sawtooth', .08, 400); },
  laser(){ tone(1600, .3, 'sawtooth', .09, 180); },
  boom(){ noise(.8, .7, 900, 60, .5); tone(80, .5, 'sine', .3, 30); },
  whistle(){ for (let i = 0; i < 3; i++) later(i * 70, () => tone(2900 + (i % 2) * 200, .09, 'sine', .12)); later(260, () => tone(2900, .45, 'sine', .12, 2700)); },
  kick(){ tone(140, .14, 'sine', .5, 50); noise(.1, .3, 3000, 1500); },
  crowd(v = .25, d = 2.5){ noise(d, v, 700, 500, .4); noise(d, v * .7, 1500, 1100, .5); },
  roar(){ SFX.crowd(.6, 3.5); later(300, () => SFX.crowd(.5, 3)); },
  save(){ tone(110, .2, 'sine', .4, 60); noise(.3, .25, 800, 300); SFX.crowd(.2, 1.5); },
};

// ---------------- tela de jogo ----------------
function shell(kid, title, icons){
  document.body.className = kid;
  app.innerHTML = `
    <div class="hud"><button class="x" id="quit" aria-label="Sair">✕</button>
      <div class="title">${title}</div>
      <div class="track" id="track">${icons.map(i => `<i>${i}</i>`).join('')}</div>
      <div class="stars" id="stars">⭐ 0</div></div>
    <div class="scene" id="scene"></div>
    <div class="panel">
      <div class="say"><div class="face" id="face"></div>
        <div class="grow"><div class="who" id="who"></div><div class="txt" id="txt"></div><div class="tr" id="tr"></div></div>
        <button class="rep" id="rep" aria-label="Ouvir de novo">🔁</button></div>
      <div class="act" id="act"></div>
    </div>`;
  el('quit').onclick = () => { G = null; voice.pause(); home(); };
  el('rep').onclick = () => { try { voice.currentTime = 0; voice.play(); } catch (e) {} };
}
const setScene = html => { el('scene').innerHTML = html; };
const act = html => { el('act').innerHTML = html; };
function track(i){ const t = el('track').children[i]; if (t) t.classList.add('on'); }
function addStar(){
  G.stars++; const s = el('stars'); s.textContent = '⭐ ' + G.stars; s.classList.remove('bump'); void s.offsetWidth; s.classList.add('bump'); SFX.star();
}
async function line(key){
  const L = LINES[key], [name, face] = WHO[L.who], en = SPEAKS_EN.has(L.who);
  const tr = TR[key] || (key.startsWith('W_') ? (WORDS[key.split('_')[2]] || {}).pt || '' : '');
  el('face').innerHTML = face; el('face').classList.add('talking');
  el('who').textContent = name;
  el('txt').textContent = L.text; el('txt').className = 'txt' + (en ? ' en' : '');
  el('tr').textContent = en ? tr : '';
  try { await play(key); } finally { const f = el('face'); if (f) f.classList.remove('talking'); }
}
function confetti(n = 60){
  const sc = el('scene'), cols = ['#FFD23F', '#E5484D', '#2F7CF6', '#2DBE6C', '#fff', '#FF8A1F'];
  for (let i = 0; i < n; i++) { const c = document.createElement('i'); c.className = 'confetti';
    c.style.left = Math.random() * 100 + '%'; c.style.background = cols[i % cols.length];
    c.style.animationDelay = Math.random() * .8 + 's'; c.style.animationDuration = 1.6 + Math.random() * 1.4 + 's';
    sc.appendChild(c); setTimeout(() => c.remove(), 4000); }
}

// ---------------- microfone ----------------
const micMode = () => (SR && !G.noMic) ? 'voice' : 'tap';
function micButton(){ return micMode() === 'voice' ? '<button class="mic" id="mic" disabled aria-label="Falar">🎤</button>' : '<button class="mic fallback" id="mic" disabled>🗣️ Falei!</button>'; }
function recognize(map, btn, onHeard){
  return new Promise(res => {
    const r = new SR(); r.lang = 'en-US'; r.interimResults = true; r.maxAlternatives = 5; r.continuous = false;
    let done = false, heard = '';
    btn && btn.classList.add('listening'); onHeard && onHeard('Ouvindo...');
    const fin = key => { if (done) return; done = true; clearTimeout(t); try { r.abort(); } catch (e) {}
      btn && btn.classList.remove('listening'); onHeard && onHeard(heard ? `Ouvi: “${heard}”` : ''); res({ok:!!key, key, heard}); };
    r.onresult = e => { for (let i = 0; i < e.results.length; i++) for (let j = 0; j < e.results[i].length; j++) {
      const t = norm(e.results[i][j].transcript); if (!t) continue; if (j === 0) heard = t;
      const k = matchKey(t, map); if (k) return fin(k); } };
    r.onerror = e => { if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { if (G) G.noMic = true; heard = ''; } fin(null); };
    r.onend = () => fin(null);
    const t = setTimeout(() => fin(null), 7000);
    try { r.start(); } catch (e) { fin(null); }
  });
}
// espera a criança apertar o microfone e falar; o reconhecimento começa dentro do toque (exigência do iPad)
function waitMic(map){
  const id = G.id;
  return new Promise(res => {
    const b = el('mic'); b.disabled = false; b.classList.add('ready');
    b.onclick = () => { b.onclick = null; b.disabled = true; b.classList.remove('ready'); voice.pause();
      if (micMode() === 'tap') return res({ok:true, key:Object.keys(map)[0], heard:'', tap:true});
      recognize(map, b, t => { const h = el('heard'); if (h) h.textContent = t; }).then(res); };
  }).then(r => { check(id); return r; });
}

// a criança fala uma palavra; devolve true se acertou de primeira
async function speak(w, {model, helper, say = false, pre = null, lenient = false, reactions}){
  const W = WORDS[w], reacts = reactions || (helper === 'LB' ? ['LN_great', 'LN_awesome', 'LN_perfect'] : ['HC_great', 'HC_yes', 'HC_awesome']);
  const card = () => act(`<div class="word"><button class="ear" id="ear" aria-label="Ouvir">🔊</button>
      <div><div class="w">${w === 'countdown' ? '3, 2, 1, go!' : w}</div><div class="pt">${W.pt}</div></div></div>
    ${micButton()}<div class="heard" id="heard"></div>`);
  card(); el('ear').onclick = () => play(model).catch(() => {});
  if (pre) await line(pre);
  await line(model);
  if (say) await line(helper + '_say');
  for (let tries = 0; ; tries++) {
    if (G.noMic && el('mic') && !el('mic').classList.contains('fallback')) { card(); el('ear').onclick = () => play(model).catch(() => {}); }
    const r = await waitMic({[w]: W.ok});
    if (r.ok || (lenient && tries >= 1 && r.heard)) {
      SFX.good(); if (tries === 0) addStar();
      if (reacts.length) await line(reacts[Math.floor(Math.random() * reacts.length)]);
      act(''); return tries === 0;
    }
    SFX.bad();
    if (tries >= 2) { await line(helper + '_help'); act(''); return false; }
    await line(r.heard || G.noMic ? helper + '_retry' : helper + '_louder');
    await line(model);
  }
}

// a criança escolhe falando uma das opções (cores); tocar na cor só faz ouvir
async function speakChoice(opts, who, helper, lenient = false){
  const map = {}; for (const k in opts) map[k] = WORDS[k].ok;
  const draw = () => act(`${Object.entries(opts).map(([k, c]) => `<button class="choice" data-k="${k}" style="background:${c}">${k}</button>`).join('')}
    ${micButton()}<div class="heard" id="heard"></div>`);
  draw();
  const bindTaps = () => document.querySelectorAll('.choice').forEach(b => b.onclick = () => play(`W_${who}_${b.dataset.k}`).catch(() => {}));
  bindTaps();
  for (let tries = 0; ; tries++) {
    if (micMode() === 'tap') {           // sem microfone: tocar escolhe
      const id = G.id;
      const k = await new Promise(res => document.querySelectorAll('.choice').forEach(b => b.onclick = () => res(b.dataset.k)));
      check(id); await play(`W_${who}_${k}`); SFX.good(); addStar(); act(''); return k;
    }
    const r = await waitMic(map);
    if (r.ok || (lenient && tries >= 1 && r.heard)) {
      const k = r.key || Object.keys(opts)[0];
      SFX.good(); if (tries === 0) addStar();
      await line(`W_${who}_${k}`); act(''); return k;
    }
    SFX.bad();
    if (tries >= 2) { await line(helper + '_help'); act(''); return Object.keys(opts)[0]; }
    await line(r.heard ? helper + '_retry' : helper + '_louder');
    if (G.noMic) { draw(); bindTaps(); }
  }
}
function waitTap(selector){
  const id = G.id;
  return new Promise(res => document.querySelectorAll(selector).forEach(b => b.onclick = () => res(b))).then(b => { check(id); return b; });
}

// ---------------- prêmio ----------------
function reward({badge, title, words, next, kid}){
  recordWin(kid, G.stars);
  const div = document.createElement('div'); div.className = 'reward';
  div.innerHTML = `<div class="badge">${badge}</div><h2>${title}</h2>
    <div class="row"><span class="chip">⭐ ${G.stars} de ${G.max}</span><span class="chip">🔥 ${SAVE[kid].streak} ${SAVE[kid].streak === 1 ? 'dia' : 'dias'}</span></div>
    <div class="row">${words.map(w => `<span class="chip">${w}</span>`).join('')}</div>
    <div class="locked">🔒 ${next}</div>`;
  el('scene').appendChild(div); confetti(80);
}
function endButtons(kid){
  act(`<button class="next" id="again">Jogar de novo</button><button class="next" id="home" style="background:#fff">Início</button>`);
  el('again').onclick = () => start(kid);
  el('home').onclick = () => { G = null; home(); };
}

// ================= LUCAS · Esquadrão Estelar =================
async function lessonLucas(){
  shell('lucas', 'Esquadrão Estelar · Missão 1', ['✈️', '🚀', '⚡', '💡', '🎨']);
  G.max = 12;
  setScene(ART.hangar());
  const sc = el('scene'), ship = el('ship');
  place(ship, 'translate(450px,270px) scale(.78)');
  sc.classList.add('alarm-on'); SFX.alarm();
  await line('L01'); await line('L02');
  el('holo').classList.add('show');
  await line('L03'); await line('L04');
  sc.classList.remove('alarm-on');
  await line('L05');

  const parts = [['wing', 'L10'], ['rocket', 'L11'], ['laser', 'L12'], ['light', 'L13']];
  for (let i = 0; i < parts.length; i++) {
    const [w, intro] = parts[i];
    await line(intro);
    await speak(w, {model:'W_nova_' + w, helper:'LB', say:i < 2});
    el('p-' + w).classList.add('on'); SFX.build(); track(i);
    if (i === 0) await line('LB_part');
  }
  await line('LN_color'); await line('L14');
  const colors = {red:'#E5484D', blue:'#2F7CF6', green:'#2DBE6C'}, dark = {red:'#A82A2F', blue:'#1F4FA8', green:'#1B7E45'};
  const c = await speakChoice(colors, 'nova', 'LB');
  sc.style.setProperty('--ship', colors[c]); sc.style.setProperty('--ship-dark', dark[c]);
  SFX.build(); track(4);
  await line('L15'); await line('L16');
  await speak('countdown', {model:'W_nova_countdown', helper:'LB'});

  ship.classList.add('flying', 'launch'); SFX.launch();
  ship.style.transform = 'translate(1300px,120px) scale(.78)';
  await wait(1500);

  setScene(ART.space());
  sc.style.setProperty('--ship', colors[c]); sc.style.setProperty('--ship-dark', dark[c]);
  const fship = el('fship'), drone = el('drone'), beam = el('laserbeam'), boom = el('boom');
  const lane = {up:130, down:320};
  place(fship, 'translate(170px,225px) scale(.45)');
  place(drone, 'translate(900px,225px)');
  await line('L17');
  const seq = ['up', 'down', 'up'];
  for (let i = 0; i < seq.length; i++) {
    const dir = seq[i], y = lane[dir];
    drone.style.transform = `translate(640px,${y}px)`;
    await wait(700);
    act(`<button class="arrow" data-d="up" aria-label="Para cima">⬆️</button><button class="arrow" data-d="down" aria-label="Para baixo">⬇️</button>`);
    let first = true;
    await line('W_nova_' + dir);
    for (;;) {
      const b = await waitTap('.arrow');
      if (b.dataset.d === dir) break;
      first = false; SFX.bad(); b.classList.add('no'); setTimeout(() => b.classList.remove('no'), 400);
      await line('LB_wrongdir'); await line('W_nova_' + dir);
    }
    SFX.good(); if (first) addStar();
    fship.style.transform = `translate(170px,${y}px) scale(.45)`;
    act(''); await wait(700);
    if (i === 0) await line('L18');
    await speak('fire', {model:'W_nova_fire', helper:'LB', reactions:[]});
    const [b1, b2] = beam.querySelectorAll('line');
    [b1, b2].forEach(l => { l.setAttribute('x1', 260); l.setAttribute('y1', y); l.setAttribute('x2', 620); l.setAttribute('y2', y); });
    beam.classList.remove('fire'); void beam.getBBox(); beam.classList.add('fire'); SFX.laser();
    await wait(300);
    boom.setAttribute('transform', `translate(640 ${y})`); boom.classList.remove('go'); void boom.getBBox(); boom.classList.add('go'); SFX.boom();
    place(drone, 'translate(900px,225px)');
    await line('LN_shot');
    if (i < seq.length - 1) await line('L19');
  }
  await line('L20');
  reward({kid:'lucas', badge:ART.wings, title:'Asas de Piloto!', words:['wing', 'rocket', 'laser', 'light', c, 'up', 'down', 'fire', 'go'],
    next:'Missão 2: A espada de luz · amanhã'});
  await line('L21'); await line('L22');
  endButtons('lucas');
}

// ================= HENRIQUE · A Grande Final =================
async function lessonHenrique(){
  shell('henrique', 'A Grande Final', ['👕', '⚽', '🥅', '🏆']);
  G.max = 8;
  setScene(ART.locker());
  SFX.crowd(.12, 4);
  await line('H01'); await line('H02'); await line('H03');
  el('coachbig').classList.add('show');
  await line('H04'); await line('H05');
  await speak('yes', {model:'W_coach_yes', helper:'HN', say:true, lenient:true});
  await line('H06'); await line('HC_color'); await line('H07');
  const colors = {red:'#E5484D', blue:'#2F7CF6', yellow:'#F5C400'};
  const c = await speakChoice(colors, 'coach', 'HN', true);
  const sc = el('scene'); sc.style.setProperty('--shirt', colors[c]);
  const sh = el('shirt'); sh.classList.remove('pop'); void sh.getBBox(); sh.classList.add('pop'); SFX.build(); track(0);
  await wait(900);

  setScene(ART.stadium()); sc.style.setProperty('--shirt', colors[c]);
  const ball = el('ball'), keeper = el('keeper'), player = el('player'), targets = el('targets'), net = el('goal').querySelector('.net');
  const pos = {left:[305, 185], mid:[400, 200], right:[495, 185]};
  const resetPlay = () => { ball.style.transform = 'translate(400px,392px)'; keeper.style.transform = 'translate(400px,258px)'; player.style.transform = 'translate(330px,330px)'; };
  ball.classList.add('hidden');
  place(ball, 'translate(400px,392px)'); place(keeper, 'translate(400px,258px)'); place(player, 'translate(330px,330px)');
  sc.insertAdjacentHTML('beforeend', '<div class="overlay" style="align-items:flex-start;padding-top:10px"><span class="chip" id="score" style="background:rgba(0,0,0,.55)">⚽ Pênaltis: — — —</span></div>');
  SFX.roar();
  await line('H08'); await line('H09');
  await speak('ball', {model:'W_coach_ball', helper:'HN', lenient:true});
  place(ball, 'translate(-60px,420px)'); ball.classList.remove('hidden');
  ball.style.transform = 'translate(400px,392px)'; SFX.kick(); track(1);
  await wait(800);
  SFX.whistle(); await line('H10');

  const marks = [];
  const showScore = () => { el('score').textContent = '⚽ Pênaltis: ' + [0, 1, 2].map(i => marks[i] === undefined ? '—' : marks[i] ? '✅' : '❌').join(' '); };
  for (let p = 1; p <= 3; p++) {
    if (p === 1) await line('H11');
    if (p === 3) await line('H15');
    targets.classList.add('show'); act('<p class="hint">Toque num canto do gol 🎯</p>');
    const t = (await waitTap('#targets .target')).dataset.t;
    targets.classList.remove('show'); act('');
    const save = p === 2;
    await speak('kick', {model:'W_coach_kick', helper:'HN', pre:p === 2 ? 'HC_again' : null, lenient:true, reactions:[]});
    player.style.transform = 'translate(370px,345px)'; SFX.kick();
    const [tx, ty] = pos[t];
    const dive = save ? t : (t === 'left' ? 'right' : t === 'right' ? 'left' : ['left', 'right'][p % 2]);
    const kx = {left:-95, mid:0, right:95}[dive], rot = {left:-70, mid:0, right:70}[dive];
    keeper.style.transform = `translate(${400 + kx}px,${dive === 'mid' ? 240 : 250}px) rotate(${rot}deg)`;
    ball.style.transform = save ? `translate(${tx}px,${ty + 20}px) scale(.62)` : `translate(${tx}px,${ty}px) scale(.55)`;
    await wait(750);
    if (save) {
      SFX.save(); ball.style.transform = `translate(${tx > 400 ? 640 : 160}px,330px) scale(.8)`;
      marks.push(false); showScore();
      await line('H13'); await line('H14');
    } else {
      net.classList.remove('shake'); void net.getBBox(); net.classList.add('shake');
      el('crowd').classList.remove('cheer'); void el('crowd').getBBox(); el('crowd').classList.add('cheer');
      SFX.roar(); confetti(40); marks.push(true); showScore(); if (p === 1) track(2);
      if (p < 3) {
        await line('H12');
        await speak('goal', {model:'W_coach_goal', helper:'HN', pre:'HC_saygoal', lenient:true, reactions:['HC_yes']});
        SFX.roar(); el('crowd').classList.remove('cheer'); void el('crowd').getBBox(); el('crowd').classList.add('cheer');
      }
    }
    await wait(600); resetPlay(); await wait(700);
  }
  await line('H16'); SFX.roar(); confetti(90); track(3);
  await line('H17');
  reward({kid:'henrique', badge:ART.trophy, title:'Craque da Final!', words:['yes', c, 'ball', 'kick', 'goal'],
    next:'Missão 2: Treino com o Coach Max · amanhã'});
  await line('H18');
  endButtons('henrique');
}

// ---------------- início ----------------
let runSeq = 0;
function start(kid){
  actx();                                   // libera o som dentro do toque
  voice.src = 'audio/' + (kid === 'lucas' ? 'L01' : 'H01') + '.mp3'; voice.play().catch(() => {}); voice.pause();
  G = {id:++runSeq, kid, stars:0, max:0, noMic:false};
  preload(kid === 'lucas' ? 'L' : 'H'); preload('W_' + (kid === 'lucas' ? 'nova' : 'coach'));
  (kid === 'lucas' ? lessonLucas() : lessonHenrique()).catch(e => { if (e !== CANCEL) console.error(e); });
}

function home(){
  document.body.className = 'home';
  const status = k => { const s = SAVE[k]; return s.plays ? `🔥 ${s.streak} ${s.streak === 1 ? 'dia' : 'dias'} · ⭐ recorde ${s.best}` : 'Missão 1 esperando'; };
  app.innerHTML = `<div class="home-wrap">
    <h1>Missão Inglês</h1><p class="sub">Quem vai jogar hoje?</p>
    <div class="cards">
      <button class="kid l" id="k-lucas"><div class="art">${ART.space()}</div>
        <div class="info"><b>Lucas</b><span class="meta">Esquadrão Estelar · construa sua nave</span><span class="meta">${status('lucas')}</span><span class="go">Jogar ▶</span></div></button>
      <button class="kid h" id="k-henrique"><div class="art">${ART.stadium()}</div>
        <div class="info"><b>Henrique</b><span class="meta">A Grande Final · bata os pênaltis</span><span class="meta">${status('henrique')}</span><span class="go">Jogar ▶</span></div></button>
    </div>
    <section class="parent"><h3>Para os pais: teste o microfone</h3>
      <p class="small">${SR ? 'Toque no botão e fale uma palavra em inglês (por exemplo: “ball”). O app mostra o que entendeu.'
        : 'Este navegador não reconhece voz. No iPad, use o Safari (com Siri e Ditado ligados nos Ajustes). No Android, use o Chrome. Sem isso, o app troca o microfone por um botão “Falei!”.'}</p>
      ${SR ? '<button class="btn-sm" id="mtest">🎤 Testar microfone</button><div class="mictest" id="mres"></div>' : ''}
    </section></div>`;
  // arte de vitrine: nave pronta e jogo arrumado
  const ls = app.querySelector('#k-lucas .art'); ls.style.setProperty('--ship', '#2F7CF6'); ls.style.setProperty('--ship-dark', '#1F4FA8');
  place(ls.querySelector('#fship'), 'translate(260px,225px) scale(.6)');
  place(ls.querySelector('#drone'), 'translate(640px,150px)');
  app.querySelector('#k-henrique .art').style.setProperty('--shirt', '#F5C400');
  el('k-lucas').onclick = () => start('lucas');
  el('k-henrique').onclick = () => start('henrique');
  if (SR) el('mtest').onclick = () => {
    const b = el('mtest'); b.disabled = true;
    recognize({x:['__nunca__']}, null, t => el('mres').textContent = t).then(r => {
      b.disabled = false;
      el('mres').textContent = r.heard ? `Entendi: “${r.heard}” ✅` : 'Não ouvi nada. Confira se o navegador tem permissão para usar o microfone.';
    });
  };
}
home();
