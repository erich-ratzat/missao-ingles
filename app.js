// Missão Inglês — motor das lições (voz, microfone, correção, cenas) e as duas missões.
// Cada palavra nova segue o mesmo caminho: ouvir no meio da história, repetir, reconhecer e,
// mais tarde, lembrar sozinho. Erro de pronúncia recebe dica específica, nunca é aceito.

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const app = document.getElementById('app');
const el = id => document.getElementById(id);

// tradução das falas em inglês (aparece embaixo da legenda)
const TR = {
  V01:'Ha ha ha! Eu sou o Lorde Vortex! Sua base é minha!', V02:'Você não vai fugir de mim! Ha ha ha!', V03:'Nããão! Eu vou voltar!',
  L04:'Piloto Lucas! Precisamos de você! Construa uma nave!', L16:'Uau! Sua nave está pronta, piloto!',
  L25:'Você conseguiu, Lucas! A base está salva. Você é um piloto de verdade!',
  LN_color:'Escolha uma cor: vermelho, azul ou verde.', LN_count:'Três... dois... um...', LN_countgo:'Três... dois... um... Já!',
  LN_touch_wing:'Toque na asa!', LN_touch_rocket:'Toque no foguete!', LN_touch_laser:'Toque no laser!', LN_touch_light:'Toque na luz!',
  LN_yes:'Isso!', LN_check:'Todos os sistemas prontos!',
  LN_q_light:'Está escuro! Do que a gente precisa?', LN_q_laser:'Drones! O que a gente usa?',
  LN_q_wing:'Nossa asa quebrou! Conserte!', LN_q_rocket:'Piloto! Força total! Agora!',
  E_wing:'Isso! Asas grandes!', E_rocket:'Um foguete rápido!', E_laser:'Um laser! Piu, piu!', E_light:'Luz! Agora dá pra ver!', E_go:'Vai, vai, vai!',
  E2_light:'Luz! Estou vendo os drones!', E2_laser:'Piu, piu! Belo tiro!', E2_wing:'A asa está boa! Bom trabalho!', E2_rocket:'Força total!',
  E_ship_red:'Uma nave vermelha! Legal!', E_ship_blue:'Uma nave azul! Legal!', E_ship_green:'Uma nave verde! Legal!',
  H04:'Ei, campeão! Você está pronto?', H06:'Agora escolha sua camisa! Vermelha, azul ou amarela?', H09:'Pegue a bola!',
  T01:'Eu sou o Big Tony! Hoje não tem gol!', T02:'O quê? Não!', T03:'Rá! A bola é minha!', T04:'Tá bom... belo chute, campeão.',
  HC_run:'Corre! Corre!', HC_kick:'Chuta!', HC_goal:'Gol! Belo chute!', HC_where:'Onde? Vermelho, azul ou amarelo?',
  HC_okay:'Tudo bem, campeão! Você consegue!', HC_ready:'Campeão! Você está pronto?', HC_yes:'Isso!',
  E_yes:'Isso! Vamos jogar!', E_shoes:'Chuteiras legais! Pés rápidos!', E_ball:'Isso! A bola! Vamos lá!', E2_yes:'Isso! Você consegue!',
  E_goal:'Gol! Você é campeão!', E_shirt_red:'Uma camisa vermelha! Legal!', E_shirt_blue:'Uma camisa azul! Legal!', E_shirt_yellow:'Uma camisa amarela! Legal!',
};
const WHO = {nova:['Capitã Nova', ART.nova], vortex:['Lorde Vortex', ART.vortex], bip:['Bip', ART.bip],
  coach:['Coach Max', ART.coach], tony:['Big Tony', ART.tony], narr:['Narrador', ART.narr]};
const SPEAKS_EN = new Set(['nova', 'vortex', 'coach', 'tony']);

// ---------------- reconhecimento: só a palavra certa vale ----------------
const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const has = (t, list) => { const ws = t.split(' '); return (list || []).some(v => v.includes(' ') ? t.includes(v) : ws.includes(v)); };
// alts = o que o reconhecedor ouviu, da hipótese mais provável para a menos provável.
// Vale a 1ª hipótese. Se ela for uma palavra parecida conhecida (white no lugar de light), é erro, com dica.
// Só quando a 1ª hipótese é ruído sem sentido é que olhamos a 2ª e a 3ª.
function evaluate(alts, words){
  const a0 = alts[0] || '';
  for (const w of words) if (has(a0, VOCAB[w].ok)) return {key:w};
  for (const w of words) { const g = (VOCAB[w].near || []).findIndex(l => has(a0, l)); if (g >= 0) return {key:null, near:{w, g}}; }
  for (const t of alts.slice(1, 3)) for (const w of words) if (has(t, VOCAB[w].ok)) return {key:w};
  return {key:null};
}

// ---------------- progresso ----------------
const KEY = 'missao-ingles-mvp';
let SAVE = {lucas:{plays:0, best:0, last:null, streak:0}, henrique:{plays:0, best:0, last:null, streak:0}};
try { const d = JSON.parse(localStorage.getItem(KEY) || 'null'); if (d) Object.assign(SAVE, d); } catch (e) {}
for (const k in SAVE) SAVE[k].words = SAVE[k].words || {};
const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(SAVE)); } catch (e) {} };
const today = () => new Date().toLocaleDateString('sv');
function recordWin(kid, stars){
  const s = SAVE[kid], t = today();
  if (s.last !== t) { const d = s.last ? Math.round((new Date(t) - new Date(s.last)) / 864e5) : 99; s.streak = d <= 2 ? s.streak + 1 : 1; s.last = t; }
  s.plays++; s.best = Math.max(s.best, stars); persist();
}
// por palavra: quantas vezes saiu de primeira, quantas com correção e quantas precisou de ajuda
function stat(w, how){
  const s = SAVE[G.kid].words[w] = SAVE[G.kid].words[w] || {first:0, fixed:0, help:0};
  s[how]++; s.last = today(); persist();
  G.result[w] = how === 'help' ? 'help' : (G.result[w] === 'help' ? 'help' : 'ok');
}

// ---------------- jogo em andamento / cancelamento ----------------
let G = null;                       // {id, kid, stars, max, noMic, T (professor), H (ajudante), P (prefixo das falas do ajudante)}
const CANCEL = new Error('cancel');
const check = id => { if (!G || G.id !== id) throw CANCEL; };
// posiciona sem animar (a transição só vale para os movimentos seguintes)
function place(node, tf){ node.style.transition = 'none'; node.style.transform = tf; node.getBoundingClientRect(); node.style.transition = ''; }
const wait = ms => { const id = G.id; return new Promise(r => setTimeout(r, ms)).then(() => check(id)); };
const restart = (node, cls) => { node.classList.remove(cls); void node.getBoundingClientRect(); node.classList.add(cls); };

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
function preload(prefixes){ Object.keys(LINES).filter(k => prefixes.some(p => k.startsWith(p))).forEach(k => fetch('audio/' + k + '.mp3').catch(() => {})); }

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
  bad(){ tone(330, .16, 'triangle', .08, 250); later(170, () => tone(250, .22, 'triangle', .08, 200)); },
  tap(){ tone(900, .06, 'triangle', .08); },
  build(){ tone(300, .08, 'square', .08, 700); later(90, () => tone(700, .1, 'square', .08, 1400)); later(220, () => tone(1046, .25, 'triangle', .12)); },
  alarm(){ for (let i = 0; i < 4; i++) later(i * 520, () => tone(880, .3, 'square', .05, 600)); },
  villain(){ tone(70, 1.4, 'sawtooth', .12, 45); tone(105, 1.4, 'sawtooth', .06, 70); },
  launch(){ noise(1.8, .5, 200, 2400); tone(90, 1.6, 'sawtooth', .08, 400); },
  whoosh(){ noise(.9, .35, 400, 3000); },
  laser(){ tone(1600, .3, 'sawtooth', .09, 180); },
  enemy(){ tone(500, .35, 'sawtooth', .08, 90); },
  boom(){ noise(.8, .7, 900, 60, .5); tone(80, .5, 'sine', .3, 30); },
  dark(){ tone(400, .6, 'sine', .15, 60); },
  beam(){ tone(220, 2.5, 'sine', .07, 240); tone(330, 2.5, 'sine', .04, 300); },
  whistle(){ for (let i = 0; i < 3; i++) later(i * 70, () => tone(2900 + (i % 2) * 200, .09, 'sine', .12)); later(260, () => tone(2900, .45, 'sine', .12, 2700)); },
  kick(){ tone(140, .14, 'sine', .5, 50); noise(.1, .3, 3000, 1500); },
  crowd(v = .25, d = 2.5){ noise(d, v, 700, 500, .4); noise(d, v * .7, 1500, 1100, .5); },
  roar(){ SFX.crowd(.6, 3.5); later(300, () => SFX.crowd(.5, 3)); },
  groan(){ noise(1.6, .3, 500, 250, .4); },
  save(){ tone(110, .2, 'sine', .4, 60); noise(.3, .25, 800, 300); SFX.groan(); },
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
  G.stars++; const s = el('stars'); s.textContent = '⭐ ' + G.stars; restart(s, 'bump'); SFX.star();
}
function trOf(key){
  if (TR[key]) return TR[key];
  const m = key.match(/^[WS]_[a-z]+_([a-z]+)$/); return m && VOCAB[m[1]] ? VOCAB[m[1]].pt : '';
}
async function line(key){
  const L = LINES[key], [name, face] = WHO[L.who], en = SPEAKS_EN.has(L.who);
  el('face').innerHTML = face; el('face').classList.add('talking');
  el('who').textContent = name;
  el('txt').textContent = L.text; el('txt').className = 'txt' + (en ? ' en' : '');
  el('tr').textContent = en ? trOf(key) : '';
  try { await play(key); } finally { const f = el('face'); if (f) f.classList.remove('talking'); }
}
function confetti(n = 60){
  const sc = el('scene'), cols = ['#FFD23F', '#E5484D', '#2F7CF6', '#2DBE6C', '#fff', '#FF8A1F'];
  for (let i = 0; i < n; i++) { const c = document.createElement('i'); c.className = 'confetti';
    c.style.left = Math.random() * 100 + '%'; c.style.background = cols[i % cols.length];
    c.style.animationDelay = Math.random() * .8 + 's'; c.style.animationDuration = 1.6 + Math.random() * 1.4 + 's';
    sc.appendChild(c); setTimeout(() => c.remove(), 4000); }
}
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ---------------- microfone ----------------
const micMode = () => (SR && !G.noMic) ? 'voice' : 'tap';
function micButton(){ return micMode() === 'voice' ? '<button class="mic" id="mic" disabled aria-label="Falar">🎤</button>' : '<button class="mic fallback" id="mic" disabled>🗣️ Falei!</button>'; }
function recognize(words, btn, onHeard){
  return new Promise(res => {
    const r = new SR(); r.lang = 'en-US'; r.interimResults = true; r.maxAlternatives = 3; r.continuous = false;
    let done = false, interim = '';
    btn && btn.classList.add('listening'); onHeard && onHeard('Ouvindo...');
    const fin = alts => { if (done) return; done = true; clearTimeout(t); try { r.abort(); } catch (e) {}
      btn && btn.classList.remove('listening'); onHeard && onHeard('');
      alts = (alts || []).filter(Boolean);
      const v = evaluate(alts, words);
      res({ok:!!v.key, key:v.key, near:v.near, heard:alts[0] || ''}); };
    r.onresult = e => {
      const last = e.results[e.results.length - 1], alts = Array.from(last, a => norm(a.transcript));
      if (last.isFinal) return fin(alts);                 // decide só com o resultado final
      interim = alts[0] || interim; onHeard && interim && onHeard('…' + interim);
    };
    r.onerror = e => { if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { if (G) G.noMic = true; interim = ''; } fin(interim ? [interim] : []); };
    r.onend = () => fin(interim ? [interim] : []);
    const t = setTimeout(() => fin(interim ? [interim] : []), 7000);
    try { r.start(); } catch (e) { fin([]); }
  });
}
// espera a criança apertar o microfone e falar; o reconhecimento começa dentro do toque (exigência do iPad)
function waitMic(words){
  const id = G.id;
  return new Promise(res => {
    const b = el('mic'); b.disabled = false; b.classList.add('ready');
    b.onclick = () => { b.onclick = null; b.disabled = true; b.classList.remove('ready'); voice.pause();
      if (micMode() === 'tap') return res({ok:true, key:words[0], heard:'', tap:true});
      recognize(words, b, t => { const h = el('heard'); if (h) { h.textContent = t; h.className = 'heard'; } }).then(res); };
  }).then(r => { check(id); return r; });
}
function showHeard(r, w){
  const h = el('heard'); if (!h) return;
  if (!r.heard) { h.textContent = ''; return; }
  h.className = 'heard bad';
  h.innerHTML = `Ouvi <b>“${r.heard}”</b>` + (w ? ` · a palavra é <b>“${w}”</b>` : '');
}
const tipKey = (w, near) => `T_${G.H}_${w}_${near && near.w === w ? near.g : 0}`;

// A criança fala uma palavra. Caminho de correção (nunca aceita palavra errada):
//   lembrar (só quando ela tinha que lembrar sozinha) → dica de pronúncia para o erro que ela cometeu
//   → bem devagar, com o jeito de falar escrito → o ajudante fala junto e a palavra vai para o treino de amanhã.
// "Não ouvi nada" não conta como erro (até duas vezes).
async function speak(w, {model = true, hide = !model, intro = [], say = false, expand, onOk} = {}){
  const T = G.T, P = G.P, V = VOCAB[w];
  let phon = false, heardMsg = null;
  const draw = () => {
    act(`<div class="word"><button class="ear" id="ear" aria-label="Ouvir">🔊</button>
        <div><div class="w">${hide ? V.icon + ' ?' : w}</div><div class="pt">${phon ? `fala assim: <b class="ph">${V.say}</b>` : hide ? 'lembra o nome em inglês?' : V.pt}</div></div></div>
      ${micButton()}<div class="heard" id="heard"></div>`);
    el('ear').onclick = () => { if (hide) { hide = false; draw(); } play(`W_${T}_${w}`).catch(() => {}); };
    if (heardMsg) showHeard(heardMsg, w);
  };
  draw();
  for (const k of intro) await line(k);
  if (model) await line(`W_${T}_${w}`);
  if (say) await line(P + '_say');
  const steps = (model ? [] : ['remember']).concat(['tip', 'slow', 'help']);
  let level = 0, silent = 0, fallback = micMode() === 'tap';
  for (;;) {
    if (micMode() === 'tap' && !fallback) { fallback = true; draw(); }
    const r = await waitMic([w]);
    if (r.ok) {
      SFX.good(); addStar(); stat(w, level ? 'fixed' : 'first');
      if (onOk) await onOk();
      if (level) await line(P + '_fixed');
      if (expand) await line(expand);
      act(''); return true;
    }
    if (!r.heard && micMode() === 'tap') continue;          // microfone bloqueado: vira botão "Falei!", sem contar erro
    if (!r.heard && silent < 2) { silent++; await line(P + '_louder'); continue; }
    SFX.bad(); heardMsg = r;
    let step = steps[level++];
    // lembrou a palavra, só pronunciou errado: vai direto para a dica de pronúncia
    if (step === 'remember' && r.near && r.near.w === w) { step = 'tip'; steps.splice(level, 1); }
    if (step === 'remember') { hide = false; draw(); await line(P + '_remember'); await line(`W_${T}_${w}`); }
    else if (step === 'tip') { hide = false; draw(); await line(tipKey(w, r.near)); await line(`W_${T}_${w}`); }
    else if (step === 'slow') { hide = false; phon = true; draw(); await line(P + '_slow'); await line(`S_${T}_${w}`); }
    else {
      stat(w, 'help'); await line(P + '_help'); await line(`W_${T}_${w}`);
      if (onOk) await onOk();
      act(''); return false;
    }
  }
}

// A criança escolhe falando uma das opções (cores). Tocar numa opção só faz ouvir.
async function speakChoice(opts, {list, expand, onOk} = {}){
  const T = G.T, P = G.P, keys = Object.keys(opts);
  let phon = false, heardMsg = null;
  const draw = () => {
    act(`${keys.map(k => `<button class="choice" data-k="${k}" style="background:${opts[k]}">${phon ? `<span class="ph">${VOCAB[k].say}</span>` : k}</button>`).join('')}
      ${micButton()}<div class="heard" id="heard"></div>`);
    document.querySelectorAll('.choice').forEach(b => b.onclick = () => play(`W_${T}_${b.dataset.k}`).catch(() => {}));
    if (heardMsg) showHeard(heardMsg);
  };
  draw();
  const done = async (k, how) => {
    SFX.good(); if (how !== 'help') addStar(); stat(k, how);
    if (onOk) await onOk(k);
    if (how === 'fixed') await line(P + '_fixed');
    await line(`W_${T}_${k}`);
    if (expand) await line(expand(k));
    act(''); return k;
  };
  let level = 0, silent = 0;
  for (;;) {
    if (micMode() === 'tap') {           // sem microfone: tocar escolhe
      draw(); const id = G.id;
      const k = await new Promise(res => document.querySelectorAll('.choice').forEach(b => b.onclick = () => res(b.dataset.k)));
      check(id); return done(k, 'first');
    }
    const r = await waitMic(keys);
    if (r.ok) return done(r.key, level ? 'fixed' : 'first');
    if (!r.heard && micMode() === 'tap') continue;
    if (!r.heard && silent < 2) { silent++; await line(P + '_louder'); continue; }
    SFX.bad(); heardMsg = r; level++;
    if (level === 1) {
      showHeard(r, r.near ? r.near.w : null);
      if (r.near) { await line(tipKey(r.near.w, r.near)); await line(`W_${T}_${r.near.w}`); }
      else { await line(P + '_close'); await line(list); }
    } else if (level === 2) {
      phon = true; draw(); await line(P + '_slow');
      for (const k of keys) await line(`W_${T}_${k}`);
    } else {
      const k = r.near ? r.near.w : keys[Math.floor(Math.random() * keys.length)];
      await line(P + '_help'); return done(k, 'help');
    }
  }
}
function waitTap(selector){
  const id = G.id;
  return new Promise(res => document.querySelectorAll(selector).forEach(b => b.onclick = () => res(b))).then(b => { check(id); return b; });
}
// Escutar e tocar: o professor fala, a criança toca no botão certo (sem palavra escrita)
async function listenTap(target, sayKey, wrongKey){
  await line(sayKey);
  for (;;) {
    const b = await waitTap('#act .arrow');
    if (b.dataset.k === target) { SFX.good(); b.classList.add('yes'); setTimeout(() => b.classList.remove('yes'), 500); return; }
    SFX.bad(); restart(b, 'no');
    await line(wrongKey); await line(sayKey);
  }
}
const tapButtons = list => act(list.map(([k, icon, label]) => `<button class="arrow" data-k="${k}" aria-label="${label}">${icon}</button>`).join(''));

// ---------------- prêmio ----------------
function reward({badge, title, next, kid}){
  recordWin(kid, G.stars);
  const words = Object.keys(G.result), review = words.filter(w => G.result[w] === 'help');
  const div = document.createElement('div'); div.className = 'reward';
  div.innerHTML = `<div class="badge">${badge}</div><h2>${title}</h2>
    <div class="row"><span class="chip">⭐ ${G.stars} de ${G.max}</span><span class="chip">🔥 ${SAVE[kid].streak} ${SAVE[kid].streak === 1 ? 'dia' : 'dias'}</span></div>
    <div class="row">${words.map(w => `<span class="chip ${G.result[w]}">${G.result[w] === 'ok' ? '✅' : '🔁'} ${w}</span>`).join('')}</div>
    ${review.length ? `<div class="small-note">🔁 treinar amanhã: ${review.join(', ')}</div>` : ''}
    <div class="locked">🔒 ${next}</div><div class="row" id="rbtns"></div>`;
  app.appendChild(div); confetti(80);
}
function endButtons(kid){
  act(''); el('rbtns').innerHTML = `<button class="next" id="again">Jogar de novo</button><button class="next" id="home" style="background:#fff">Início</button>`;
  el('again').onclick = () => start(kid);
  el('home').onclick = () => { G = null; home(); };
}

// ================= LUCAS · Esquadrão Estelar =================
async function lessonLucas(){
  shell('lucas', 'Esquadrão Estelar · Missão 1', ['✈️', '🚀', '⚡', '💡', '🎨', '🛸']);
  Object.assign(G, {T:'nova', H:'bip', P:'LB', max:10});
  setScene(ART.hangar());
  const sc = el('scene'), ship = el('ship');
  place(ship, 'translate(450px,270px) scale(.78)');

  // o vilão aparece
  sc.classList.add('alarm-on'); SFX.alarm();
  await line('L01'); await line('L02');
  el('holov').classList.add('show'); SFX.villain();
  await line('V01');
  el('holov').classList.remove('show');
  await line('L03');
  el('holo').classList.add('show');
  await line('L04'); await line('L05');
  sc.classList.remove('alarm-on');
  await line('L06');

  // 1. montar a nave: ouvir e repetir cada peça
  const parts = [['wing', 'L10'], ['rocket', 'L11'], ['laser', 'L12'], ['light', 'L13']];
  for (let i = 0; i < parts.length; i++) {
    const [w, intro] = parts[i];
    await speak(w, {intro:[intro], say:i === 0, expand:'E_' + w,
      onOk:async () => { el('p-' + w).classList.add('on'); SFX.build(); track(i); if (i === 0) await line('LB_part'); }});
  }

  // 2. teste dos sistemas: ouvir e tocar na peça
  await line('L14');
  const icons = {wing:['✈️', 'Asa'], rocket:['🚀', 'Foguete'], laser:['⚡', 'Laser'], light:['💡', 'Luz']};
  tapButtons(shuffle(Object.keys(icons)).map(k => [k, ...icons[k]]));
  for (const w of shuffle(Object.keys(icons))) {
    await listenTap(w, 'LN_touch_' + w, 'LB_wrong');
    restart(el('p-' + w), 'ping'); await line('LN_yes');
  }
  act(''); await line('LN_check');

  // 3. cor da nave
  await line('L15');
  const colors = {red:'#E5484D', blue:'#2F7CF6', green:'#2DBE6C'}, dark = {red:'#A82A2F', blue:'#1F4FA8', green:'#1B7E45'};
  const paint = k => { sc.style.setProperty('--ship', colors[k]); sc.style.setProperty('--ship-dark', dark[k]); };
  await line('LN_color');
  const c = await speakChoice(colors, {list:'LN_color', expand:k => 'E_ship_' + k, onOk:k => { paint(k); SFX.build(); track(4); }});
  await line('L16'); await line('L17');

  // 4. decolar
  await speak('go', {model:false, hide:false, intro:['LN_countgo', 'LB_say', 'LN_count'], expand:'E_go',
    onOk:async () => { ship.classList.add('flying', 'launch'); SFX.launch(); ship.style.transform = 'translate(1300px,120px) scale(.78)'; await wait(1300); }});

  setScene(ART.space()); paint(c);
  const fship = el('fship'), rock = el('rock'), beam = el('laserbeam'), boom = el('boom'), mother = el('mother'), tbeam = el('tbeam');
  const drones = [el('drone'), el('drone2'), el('drone3')];
  place(fship, 'translate(170px,225px) scale(.45)');
  drones.forEach(d => place(d, 'translate(950px,225px)'));

  // 5. asteroides: ouvir up/down e tocar na seta
  await line('L18');
  for (const dir of ['up', 'down', 'up']) {
    const ry = dir === 'up' ? 300 : 150;
    rock.style.transition = 'none'; rock.style.transform = `translate(1000px,${ry}px) scale(1.5)`; rock.getBoundingClientRect();
    rock.style.transition = 'transform 1.2s ease-out'; rock.style.transform = `translate(650px,${ry}px) scale(1.5)`;
    tapButtons([['up', '⬆️', 'Para cima'], ['down', '⬇️', 'Para baixo']]);
    await listenTap(dir, 'W_nova_' + dir, 'LB_wrong');
    act('');
    fship.style.transform = `translate(170px,${dir === 'up' ? 100 : 350}px) scale(.45)`;
    rock.style.transition = 'transform 1.1s linear'; rock.style.transform = `translate(-150px,${ry}px) scale(1.5) rotate(-200deg)`;
    SFX.whoosh(); await wait(1100);
    fship.style.transform = 'translate(170px,225px) scale(.45)'; await wait(500);
  }
  await line('L19');

  // 6. batalha: agora ele tem que LEMBRAR o nome de cada peça, sem ouvir antes
  drones.forEach((d, i) => place(d, `translate(${[560, 680, 560][i]}px,${[110, 225, 340][i]}px)`));
  sc.insertAdjacentHTML('beforeend', '<div class="darkness" id="dark"></div>');
  SFX.enemy(); SFX.dark();
  await line('L20'); await line('LN_q_light'); await line('L21');
  await speak('light', {model:false, expand:'E2_light', onOk:() => { el('dark').classList.add('off'); SFX.build(); }});

  await line('L22'); await line('LN_q_laser');
  await speak('laser', {model:false, expand:'E2_laser', onOk:async () => {
    const [b1, b2] = beam.querySelectorAll('line');
    for (const d of drones) {
      const [x, y] = d.style.transform.match(/-?[\d.]+/g).map(Number);
      [b1, b2].forEach(l => { l.setAttribute('x1', 260); l.setAttribute('y1', 225); l.setAttribute('x2', x - 30); l.setAttribute('y2', y); });
      restart(beam, 'fire'); SFX.laser(); await wait(250);
      boom.setAttribute('transform', `translate(${x} ${y})`); restart(boom, 'go'); SFX.boom();
      place(d, 'translate(950px,225px)'); await wait(350);
    }
  }});

  SFX.enemy(); await wait(200); SFX.boom();
  fship.classList.add('hit'); fship.querySelector('#p-wing').classList.add('broken');
  await line('L23'); await line('LN_q_wing');
  await speak('wing', {model:false, expand:'E2_wing', onOk:() => { fship.classList.remove('hit'); fship.querySelector('#p-wing').classList.remove('broken'); SFX.build(); }});

  // 7. o Vortex prende a nave com um raio; o foguete salva
  mother.style.transform = 'translate(610px,95px)'; SFX.villain(); await wait(1200);
  tbeam.setAttribute('points', '570,125 650,125 260,265 150,185'); tbeam.classList.add('on'); SFX.beam();
  fship.style.transform = 'translate(250px,200px) scale(.45)';
  await line('V02'); await line('L24'); await line('LN_q_rocket');
  await speak('rocket', {model:false, expand:'E2_rocket', onOk:async () => {
    tbeam.classList.remove('on'); fship.classList.add('fast'); SFX.launch();
    fship.style.transform = 'translate(1250px,260px) scale(.45)'; await wait(900);
  }});
  await line('V03');
  mother.style.transform = 'translate(1300px,-160px)'; track(5); await wait(900);
  place(fship, 'translate(-200px,225px) scale(.45)'); fship.classList.remove('fast');
  fship.style.transform = 'translate(300px,225px) scale(.45)';

  await line('L25');
  reward({kid:'lucas', badge:ART.wings, title:'Asas de Piloto!', next:'Missão 2: A espada de luz · amanhã'});
  await line('L26'); await line('L27');
  endButtons('lucas');
}

// ================= HENRIQUE · A Grande Final =================
async function lessonHenrique(){
  shell('henrique', 'A Grande Final', ['👍', '👕', '👟', '⚽', '🥅', '🏆']);
  Object.assign(G, {T:'coach', H:'narr', P:'HN', max:9});
  setScene(ART.locker());
  const sc = el('scene');
  SFX.crowd(.12, 4);
  await line('H01'); await line('H02'); await line('H03');
  el('coachbig').classList.add('show');

  // 1. vestiário: sim, camisa, chuteiras, bola
  await speak('yes', {intro:['H04', 'H05'], say:true, expand:'E_yes', onOk:() => track(0)});
  await line('H06'); await line('H07');
  const colors = {red:'#E5484D', blue:'#2F7CF6', yellow:'#F5C400'};
  await speakChoice(colors, {list:'H06', expand:k => 'E_shirt_' + k, onOk:k => {
    sc.style.setProperty('--shirt', colors[k]); restart(el('shirt'), 'pop'); SFX.build(); track(1); }});
  const shirt = getComputedStyle(sc).getPropertyValue('--shirt');
  await speak('shoes', {intro:['H08'], expand:'E_shoes', onOk:() => { el('shoes').classList.add('on'); SFX.build(); track(2); }});
  await speak('ball', {intro:['H09', 'H10'], expand:'E_ball', onOk:() => { el('lball').classList.add('on'); SFX.kick(); track(3); }});

  // 2. o jogo: ouvir o Coach (run / kick) e tocar
  setScene(ART.stadium()); sc.style.setProperty('--shirt', shirt);
  const ball = el('ball'), keeper = el('keeper'), player = el('player'), targets = el('targets'), net = el('goal').querySelector('.net');
  sc.insertAdjacentHTML('beforeend', '<div class="overlay" style="align-items:flex-start;padding-top:10px"><span class="chip score" id="score">Henrique 0 x 0 Tubarões</span></div>');
  const score = t => { el('score').textContent = t; restart(el('score'), 'bump'); };
  place(player, 'translate(250px,360px) scale(.9)'); place(ball, 'translate(305px,412px) scale(.9)'); place(keeper, 'translate(400px,258px)');
  SFX.whistle(); SFX.roar();
  await line('H11');
  SFX.groan(); score('Henrique 0 x 1 Tubarões');
  await line('H12'); await line('H13');
  const steps = [['run', 'translate(300px,330px) scale(.85)', 'translate(355px,384px) scale(.85)'],
                 ['run', 'translate(340px,300px) scale(.8)', 'translate(392px,350px) scale(.8)']];
  for (const [cmd, pp, bp] of steps.concat([['kick']])) {
    tapButtons([['run', '🏃', 'Correr'], ['kick', '🦶', 'Chutar']]);
    await listenTap(cmd, 'HC_' + cmd, 'HN_wrong');
    act('');
    if (cmd === 'run') { player.style.transform = pp; ball.style.transform = bp; await wait(800); continue; }
    SFX.kick(); keeper.style.transform = 'translate(305px,250px) rotate(-70deg)'; ball.style.transform = 'translate(480px,185px) scale(.55)';
    await wait(750); restart(net, 'shake'); restart(el('crowd'), 'cheer'); SFX.roar(); confetti(40);
    score('Henrique 1 x 1 Tubarões');
  }
  await line('H14'); await line('HC_goal');
  SFX.whistle(); await line('H15');

  // 3. pênaltis contra o Big Tony: ele escolhe o canto FALANDO a cor (lembrar as cores)
  const resetPlay = () => { place(ball, 'translate(400px,392px)'); place(keeper, 'translate(400px,258px)'); place(player, 'translate(330px,330px)'); };
  resetPlay();
  await line('H16'); await line('T01'); await line('H17');
  const marks = [], showMarks = () => score('Pênaltis: ' + [0, 1, 2].map(i => marks[i] === undefined ? '⚪' : marks[i] ? '✅' : '❌').join(' '));
  showMarks();
  const pos = {red:[305, 185], yellow:[400, 200], blue:[495, 185]};
  document.querySelectorAll('#targets .target').forEach(t => t.onclick = () => play('W_coach_' + t.dataset.t).catch(() => {}));
  for (let p = 1; p <= 3; p++) {
    if (p === 3) { await line('H20'); await speak('yes', {model:false, intro:['HC_ready'], expand:'E2_yes'}); }
    targets.classList.add('show');
    await line('HC_where');
    const t = await speakChoice(colors, {list:'HC_where'});
    targets.classList.remove('show');
    const save = p === 2, [tx, ty] = pos[t];
    player.style.transform = 'translate(370px,345px)'; SFX.kick();
    const dive = save ? t : (t === 'red' ? 'blue' : t === 'blue' ? 'red' : ['red', 'blue'][p % 2]);
    const kx = {red:-95, yellow:0, blue:95}[dive], rot = {red:-70, yellow:0, blue:70}[dive];
    keeper.style.transform = `translate(${400 + kx}px,${dive === 'yellow' ? 240 : 250}px) rotate(${rot}deg)`;
    ball.style.transform = save ? `translate(${tx}px,${ty + 20}px) scale(.62)` : `translate(${tx}px,${ty}px) scale(.55)`;
    await wait(750);
    if (save) {
      SFX.save(); ball.style.transform = `translate(${tx > 400 ? 640 : 160}px,330px) scale(.8)`;
      marks.push(false); showMarks();
      await line('T03'); await line('H19'); await line('HC_okay');
    } else {
      restart(net, 'shake'); restart(el('crowd'), 'cheer'); SFX.roar(); confetti(40); marks.push(true); showMarks();
      if (p === 1) { track(4); await line('H18'); await line('HC_goal'); await line('T02'); }
      else {
        await line('H21');
        await speak('goal', {model:false, expand:'E_goal', onOk:() => { SFX.roar(); restart(el('crowd'), 'cheer'); confetti(60); }});
      }
    }
    await wait(500); resetPlay(); await wait(500);
  }
  await line('H22'); SFX.roar(); confetti(90); track(5);
  await line('T04');
  reward({kid:'henrique', badge:ART.trophy, title:'Craque da Final!', next:'Missão 2: Treino com o Coach Max · amanhã'});
  await line('H23');
  endButtons('henrique');
}

// ---------------- início ----------------
let runSeq = 0;
function start(kid){
  actx();                                   // libera o som dentro do toque
  voice.src = 'audio/' + (kid === 'lucas' ? 'L01' : 'H01') + '.mp3'; voice.play().catch(() => {}); voice.pause();
  G = {id:++runSeq, kid, stars:0, max:0, noMic:false, result:{}};
  preload(kid === 'lucas' ? ['L', 'V', 'E_', 'E2_', 'W_nova', 'S_nova', 'T_bip'] : ['H', 'T0', 'E_', 'E2_', 'W_coach', 'S_coach', 'T_narr']);
  (kid === 'lucas' ? lessonLucas() : lessonHenrique()).catch(e => { if (e !== CANCEL) console.error(e); });
}

function home(){
  document.body.className = 'home';
  const status = k => { const s = SAVE[k]; return s.plays ? `🔥 ${s.streak} ${s.streak === 1 ? 'dia' : 'dias'} · ⭐ recorde ${s.best}` : 'Missão 1 esperando'; };
  app.innerHTML = `<div class="home-wrap">
    <h1>Missão Inglês</h1><p class="sub">Quem vai jogar hoje?</p>
    <div class="cards">
      <button class="kid l" id="k-lucas"><div class="art">${ART.space()}</div>
        <div class="info"><b>Lucas</b><span class="meta">Esquadrão Estelar · monte sua nave e enfrente o Lorde Vortex</span><span class="meta">${status('lucas')}</span><span class="go">Jogar ▶</span></div></button>
      <button class="kid h" id="k-henrique"><div class="art">${ART.stadium()}</div>
        <div class="info"><b>Henrique</b><span class="meta">A Grande Final · vença o Big Tony nos pênaltis</span><span class="meta">${status('henrique')}</span><span class="go">Jogar ▶</span></div></button>
    </div>
    <section class="parent"><h3>Para os pais: teste o microfone</h3>
      <p class="small">${SR ? 'Toque no botão e fale uma palavra em inglês (por exemplo: “ball”). O app mostra o que entendeu. No jogo, só vale a palavra certa: se a criança falar outra parecida, ela recebe uma dica de pronúncia e tenta de novo.'
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
    recognize([], null, t => el('mres').textContent = t).then(r => {
      b.disabled = false;
      el('mres').textContent = r.heard ? `Entendi: “${r.heard}” ✅` : 'Não ouvi nada. Confira se o navegador tem permissão para usar o microfone.';
    });
  };
}
home();
