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
  // missão 2
  V04:'Ha ha ha! O Cristal de Luz é meu! Sua base ficou sem energia!', V05:'Você de novo? Vai pra casa, pilotinho!', V06:'Drones! Ataquem!',
  V07:'Meu cristal! Nããão!', V08:'Isso não acabou! Eu vou voltar!',
  L2_07:'Lucas, você precisa de uma espada. Pegue!', L2_17:'Você conseguiu, Lucas! Você é um cavaleiro do espaço!',
  LN2_color:'De que cor é a sua espada? Vermelha, azul ou verde?', LN2_left:'Esquerda!', LN2_right:'Direita!', LN2_sword:'Espada!', LN2_shield:'Escudo!',
  E_sword:'Uma espada! Zum, zum!', E_shield:'Um escudo! Você está protegido!', E2_shield:'Escudo ligado! Nada te acerta!',
  E2_sword:'Zum! Belo golpe!', E3_light:'Luz! O cristal voltou!',
  E_sword_red:'Uma espada vermelha! Demais!', E_sword_blue:'Uma espada azul! Demais!', E_sword_green:'Uma espada verde! Demais!',
  T05:'Campeão! Sábado não tem gol! Rá rá!', T06:'Hoje não tem gol, campeão!', T07:'O quê? De cabeça?', T08:'Tá bom, tá bom... Você é bom, campeão.',
  HC2_what:'O que é isso?', HC2_pass:'Passa! Passa a bola!', HC2_head:'Cabeça! Cabeça!', HC2_left:'Esquerda!', HC2_right:'Direita!',
  HC2_where:'Esquerda ou direita?', HC2_end:'Grande jogo, campeão! Você joga pro time!',
  E_pass:'Belo passe! Trabalho em equipe!', E_head:'Cabeça! Bela cabeçada!', E2_pass:'Isso! Bom passe!', E2_head:'Cabeçada! Gol!',
  LN_yes__2:'Ótimo!', LN_yes__3:'Demais!', LN_yes__4:'Bom trabalho!', HC_yes__2:'Ótimo!', HC_yes__3:'Boa!',
  E_sword_yellow:'Uma espada amarela! Demais!', E_sword_purple:'Uma espada roxa! Demais!',
  // missão 3
  L3_01:'Lucas! O Bip sumiu!', V09:'Ha ha ha! Seu robozinho está no meu castelo!', L3_07:'Esta é uma porta mágica. Fale: open!',
  V10:'Você de novo? Drones, peguem ele!', L3_18:'Você conseguiu, Lucas! Você salvou o Bip! Você é um herói!',
  LN3_door_one:'Porta número um!', LN3_door_two:'Porta número dois!', LN3_door_three:'Porta número três!',
  LN3_color:'De que cor é o Bip? Vermelho, azul, verde, amarelo ou roxo?',
  E_open:'Open! A porta abriu!', E2_open:'Open! O Bip está livre!', E_jump:'Pula! Belo pulo!', E4_light:'Luz! Olha o castelo!',
  E_bip_red:'Um robô vermelho! Amei!', E_bip_blue:'Um robô azul! Amei!', E_bip_green:'Um robô verde! Amei!',
  E_bip_yellow:'Um robô amarelo! Amei!', E_bip_purple:'Um robô roxo! Amei!',
  // missão 4 (as frases da história têm a tradução falada, na chave _pt)
  E_help:'Socorro! Isso! Obrigada, Lucas!', E_fly:'Voa, voa, voa! Iupiii!', E_stop:'Parou! Muito bem! A nave está segura.',
  LN4_fly:'Voa!', LN4_stop:'Para!', LN4_big:'Uma estrela grande!', LN4_small:'Uma estrela pequena!',
  LN4_n1:'Uma estrela!', LN4_n2:'Duas estrelas!', LN4_n3:'Três estrelas!', LN4_n4:'Quatro estrelas!',
  E2_help:'A gente ajuda! Segura firme, Lucas!', E5_light:'Luz! As estrelas estão livres!', E_thanks:'De nada, Lucas!',
  L4_26:'Você conseguiu, Lucas! Você salvou as estrelas! Você é um guardião das estrelas!', L4_29:'Tchau, Lucas! Até logo!',
};
const WHO = {nova:['Capitã Nova', ART.nova], vortex:['Lorde Vortex', ART.vortex], bip:['Bip', ART.bip],
  coach:['Coach Max', ART.coach], tony:['Big Tony', ART.tony], narr:['Narrador', ART.narr], lumi:['Lumi', ART.lumi]};
const SPEAKS_EN = new Set(['nova', 'vortex', 'coach', 'tony', 'lumi']);
// como a palavra aparece escrita (thanks → thank you)
const label = w => VOCAB[w].label || w;

// ---------------- reconhecimento: só a palavra certa vale ----------------
const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const has = (t, list) => { const ws = t.split(' '); return (list || []).some(v => v.includes(' ') ? t.includes(v) : ws.includes(v)); };
// alts = tudo o que o reconhecedor ouviu (hipóteses finais e parciais), da mais provável para a menos provável.
// Criança fala diferente de adulto e o celular erra muito com ela, então vale se QUALQUER hipótese tiver:
// a palavra (ou um jeito aceito de escrever), uma letra de diferença, ou um "quase" (comeu um pedacinho).
// Só quando nada disso aparece é que a 1ª hipótese decide a dica (white no lugar de light).
const lev = (a, b) => { let p = Array.from({length:b.length + 1}, (_, j) => j);
  for (let i = 1; i <= a.length; i++) { const q = [i]; for (let j = 1; j <= b.length; j++) q[j] = Math.min(p[j] + 1, q[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = q; }
  return p[b.length]; };
const OK_OF = new Map(); for (const w in VOCAB) for (const o of VOCAB[w].ok || []) if (!OK_OF.has(o)) OK_OF.set(o, w);
const oneOff = (t, w) => t.split(' ').some(tok => !(OK_OF.has(tok) && OK_OF.get(tok) !== w) &&
  VOCAB[w].ok.some(o => o.length >= 4 && !o.includes(' ') && lev(tok, o) <= 1));
function evaluate(alts, words){
  const a0 = alts[0] || '';
  for (const t of alts) for (const w of words) if (has(t, VOCAB[w].ok)) return {key:w};
  for (const t of alts) for (const w of words) if (oneOff(t, w)) return {key:w};
  for (const t of alts) for (const w of words) if ((VOCAB[w].almost || []).some(g => has(t, VOCAB[w].near[g]))) return {key:w};
  for (const w of words) { const g = (VOCAB[w].near || []).findIndex(l => has(a0, l)); if (g >= 0) return {key:null, near:{w, g}}; }
  return {key:null};
}

// ---------------- progresso ----------------
const KEY = 'missao-ingles-mvp';
let SAVE = {lucas:{plays:0, best:0, last:null, streak:0}, henrique:{plays:0, best:0, last:null, streak:0}};
try { const d = JSON.parse(localStorage.getItem(KEY) || 'null'); if (d) Object.assign(SAVE, d); } catch (e) {}
for (const k in SAVE) { SAVE[k].words = SAVE[k].words || {}; if (SAVE[k].plays && !SAVE[k].m) SAVE[k].m = 1; }   // m = última missão vencida
const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(SAVE)); } catch (e) {} };
const today = () => new Date().toLocaleDateString('sv');
function recordWin(kid, stars){
  const s = SAVE[kid], t = today();
  if (s.last !== t) { const d = s.last ? Math.round((new Date(t) - new Date(s.last)) / 864e5) : 99; s.streak = d <= 2 ? s.streak + 1 : 1; s.last = t; }
  s.plays++; s.best = Math.max(s.best, stars); persist();
}
// por palavra: first = de primeira sozinho · fixed = depois de correção · peek = ouviu o 🔊 antes de lembrar
// tap = botão "Falei!" (sem microfone, não deu para conferir) · parent = o adulto confirmou · help = o ajudante falou junto
function stat(w, how){
  const s = SAVE[G.kid].words[w] = SAVE[G.kid].words[w] || {first:0, fixed:0, help:0};
  s[how] = (s[how] || 0) + 1; s.last = today(); s.lastHow = how; persist();
  G.result[w] = how === 'help' ? 'help' : (G.result[w] === 'help' ? 'help' : 'ok');
}
// revisão no começo da missão: primeiro as palavras que da última vez precisaram de ajuda
function pickReview(words, n){
  const weight = w => { const h = (SAVE[G.kid].words[w] || {}).lastHow; return (h === 'help' ? 4 : h && h !== 'first' ? 2 : 0) + Math.random(); };
  return words.map(w => [weight(w), w]).sort((a, b) => b[0] - a[0]).slice(0, n).map(x => x[1]);
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
  document.body.style.setProperty('--bip', PAINT[kid === 'lucas' && SAVE.lucas.bip] || '#3EC6E0');
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
const setScene = html => { el('scene').innerHTML = html; FX.mount(el('scene')); };
const act = html => { el('act').innerHTML = html; };
function track(i){ const t = el('track').children[i]; if (t) t.classList.add('on'); }
function addStar(){
  G.stars++; const s = el('stars'); s.textContent = '⭐ ' + G.stars; restart(s, 'bump'); SFX.star();
}
function trOf(key){
  if (TR[key]) return TR[key];
  if (LINES[key + '_pt']) return LINES[key + '_pt'].text;
  const m = key.match(/^[WS]_[a-z]+_([a-z]+)$/); return m && VOCAB[m[1]] ? VOCAB[m[1]].pt : '';
}
// falas que se repetem muito (Yes!, Escute de novo...) têm versões key__2, key__3: sorteia uma diferente da última
const lastVar = {};
function variant(key){
  const vs = [key]; for (let i = 2; LINES[key + '__' + i]; i++) vs.push(key + '__' + i);
  if (vs.length === 1) return key;
  const opts = vs.filter(k => k !== lastVar[key]); return lastVar[key] = opts[Math.floor(Math.random() * opts.length)];
}
async function line(key){
  key = variant(key);
  const L = LINES[key], [name, face] = WHO[L.who], en = SPEAKS_EN.has(L.who);
  el('face').innerHTML = face; el('face').classList.add('talking');
  el('who').textContent = name;
  el('txt').textContent = L.text; el('txt').className = 'txt' + (en ? ' en' : '');
  el('tr').textContent = en ? trOf(key) : '';
  try { await play(key); } finally { const f = el('face'); if (f) f.classList.remove('talking'); }
}
// "sanduíche": a frase em inglês, a tradução falada pelo Bip e (quando a frase ensina algo) o inglês de novo,
// para a criança ouvir o inglês já sabendo o que quer dizer
async function sandwich(key, again = false){ await line(key); await line(key + '_pt'); if (again) await line(key); }
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
// botão do adulto: aparece depois de uma tentativa que o celular não aceitou
const adultButton = on => on && micMode() === 'voice' ? '<button class="adult" id="adult" disabled>✓ Eu ouvi, pode continuar</button>' : '';
function recognize(words, btn, onHeard){
  return new Promise(res => {
    const r = new SR(); r.lang = 'en-US'; r.interimResults = true; r.maxAlternatives = 3; r.continuous = false;
    // o microfone fica amarelo até o celular começar a gravar; só então fica verde ("Fale agora!").
    // Quem fala antes disso perde o começo da palavra, e o celular entende outra coisa.
    let done = false, live = false, seen = [];
    btn && btn.classList.add('waiting'); onHeard && onHeard('Espere...');
    const go = () => { if (done || live) return; live = true;
      btn && btn.classList.replace('waiting', 'listening'); onHeard && onHeard('Fale agora!'); };
    const fin = alts => { if (done) return; done = true; clearTimeout(t); try { r.abort(); } catch (e) {}
      btn && btn.classList.remove('waiting', 'listening'); onHeard && onHeard('');
      alts = [...new Set((alts || []).concat(seen.slice().reverse()).filter(Boolean))];
      const v = evaluate(alts, words);
      res({ok:!!v.key, key:v.key, near:v.near, heard:alts[0] || ''}); };
    r.onaudiostart = go; setTimeout(go, 1000);
    r.onresult = e => {
      const last = e.results[e.results.length - 1], alts = Array.from(last, a => norm(a.transcript));
      if (last.isFinal) return fin(alts);                 // decide com o resultado final e o que apareceu no caminho
      if (alts[0]) { seen.push(alts[0]); onHeard && onHeard('…' + alts[0]); }
    };
    r.onerror = e => { if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { if (G) G.noMic = true; seen = []; } fin([]); };
    r.onend = () => fin([]);
    const t = setTimeout(() => fin([]), 7000);
    try { r.start(); } catch (e) { fin([]); }
  });
}
// espera a criança apertar o microfone e falar; o reconhecimento começa dentro do toque (exigência do iPad)
function waitMic(words){
  const id = G.id;
  return new Promise(res => {
    const b = el('mic'), a = el('adult');
    const take = () => { b.onclick = null; b.disabled = true; b.classList.remove('ready'); voice.pause();
      if (a) { a.onclick = null; a.disabled = true; } };
    b.disabled = false; b.classList.add('ready');
    if (a) { a.disabled = false; a.onclick = () => { take(); res({ok:true, key:words[0], heard:'', parent:true}); }; }
    b.onclick = () => { take();
      if (micMode() === 'tap') return res({ok:true, key:words[0], heard:'', tap:true});
      recognize(words, b, t => { const h = el('heard'); if (h) { h.textContent = t; h.className = 'heard'; } }).then(res); };
  }).then(r => { check(id); return r; });
}
function showHeard(r, w){
  const h = el('heard'); if (!h) return;
  if (!r.heard) { h.textContent = ''; return; }
  h.className = 'heard bad';
  h.innerHTML = `Ouvi <b>“${r.heard}”</b>` + (w ? ` · a palavra é <b>“${label(w)}”</b>` : '');
}
const tipKey = (w, near) => `T_${G.H}_${w}_${near && near.w === w ? near.g : 0}`;

// A criança fala uma palavra. Caminho de correção, no máximo três tentativas:
//   1ª: dica de pronúncia para o erro que ela cometeu (ou "lembra?", quando ela tinha que lembrar sozinha)
//   2ª: bem devagar, com o jeito de falar escrito → 3ª: o ajudante fala junto e a palavra vai para o treino de amanhã.
// "Não ouvi nada" não conta como erro (até duas vezes).
async function speak(w, {model = true, hide = !model, intro = [], say = false, expand, onOk} = {}){
  const T = G.T, P = G.P, V = VOCAB[w];
  let phon = false, heardMsg = null, peek = false, adult = false;
  const draw = () => {
    act(`<div class="word"><button class="ear" id="ear" aria-label="Ouvir">🔊</button>
        <div><div class="w" id="ww">${hide ? V.icon + ' ?' : label(w)}</div><div class="pt" id="wpt">${phon ? `fala assim: <b class="ph">${V.say}</b>` : hide ? 'lembra o nome em inglês?' : V.pt}</div></div></div>
      ${micButton()}<div class="heard" id="heard"></div>${adultButton(adult)}`);
    // mostrar a palavra sem redesenhar: o microfone pode estar esperando o toque
    el('ear').onclick = () => { if (hide) { hide = false; peek = true; el('ww').textContent = label(w); el('wpt').textContent = V.pt; } play(`W_${T}_${w}`).catch(() => {}); };
    if (heardMsg) showHeard(heardMsg, w);
  };
  draw();
  for (const k of intro) await line(k);
  if (model) await line(`W_${T}_${w}`);
  if (say) await line(P + '_say');
  const steps = [model ? 'tip' : 'remember', 'slow', 'help'];
  let level = 0, silent = 0, fallback = micMode() === 'tap';
  for (;;) {
    if (micMode() === 'tap' && !fallback) { fallback = true; draw(); }
    const r = await waitMic([w]);
    if (r.ok) {
      SFX.good(); addStar(); stat(w, r.parent ? 'parent' : r.tap ? 'tap' : level ? 'fixed' : peek && !model ? 'peek' : 'first');
      if (onOk) await onOk();
      if (level && !r.parent) await line(P + '_fixed');
      if (expand) await line(expand);
      act(''); return true;
    }
    if (!r.heard && micMode() === 'tap') continue;          // microfone bloqueado: vira botão "Falei!", sem contar erro
    if (!adult) { adult = true; draw(); }
    if (!r.heard && silent < 2) { silent++; await line(P + '_louder'); continue; }
    SFX.bad(); heardMsg = r;
    let step = steps[level++];
    // lembrou a palavra, só pronunciou errado: vai direto para a dica de pronúncia
    if (step === 'remember' && r.near && r.near.w === w) step = 'tip';
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

// A criança escolhe falando uma das opções (cores). Tocar numa opção faz ouvir o nome e já mostra a cor
// na cena (preview); falar confirma. Se o celular não entender duas vezes, ela escolhe tocando: nunca
// sai uma cor que ela não pediu.
async function speakChoice(opts, {list, expand, onOk, labels, preview} = {}){
  const T = G.T, P = G.P, keys = Object.keys(opts);
  let heardMsg = null, adult = false, picked = null, pickMsg = '';
  const draw = () => {
    act(`${keys.map(k => `<button class="choice${keys.length > 3 ? ' many' : ''}" data-k="${k}" style="background:${opts[k]}">${labels ? labels[k] + '<br>' + k : k}</button>`).join('')}
      ${picked ? `<div class="heard">${pickMsg}</div>` : micButton() + '<div class="heard" id="heard"></div>' + adultButton(adult)}`);
    document.querySelectorAll('.choice').forEach(b => b.onclick = () => {
      if (picked) return picked(b.dataset.k);
      document.querySelectorAll('.choice').forEach(x => x.classList.toggle('sel', x === b));
      if (preview) preview(b.dataset.k);
      play(`W_${T}_${b.dataset.k}`).catch(() => {});
    });
    if (heardMsg && !picked) showHeard(heardMsg);
  };
  draw();
  const done = async (k, how) => {
    if (preview) preview(k);
    SFX.good(); if (how !== 'help') addStar(); stat(k, how);
    if (onOk) await onOk(k);
    if (how === 'fixed') await line(P + '_fixed');
    await line(`W_${T}_${k}`);
    if (expand) await line(expand(k));
    act(''); return k;
  };
  // escolher tocando (sem microfone, o adulto confirmou ou o celular não entendeu)
  const pick = async (how, msg = '') => {
    const id = G.id, p = new Promise(res => picked = res); pickMsg = msg; draw();
    const k = await p; check(id); return done(k, how);
  };
  let level = 0, silent = 0;
  for (;;) {
    if (micMode() === 'tap') return pick('tap');
    const r = await waitMic(keys);
    if (r.parent) return pick('parent', 'Toque no que ele falou');
    if (r.ok) return done(r.key, level ? 'fixed' : 'first');
    if (!r.heard && micMode() === 'tap') continue;
    if (!adult) { adult = true; draw(); }
    if (!r.heard && silent < 2) { silent++; await line(P + '_louder'); continue; }
    SFX.bad(); heardMsg = r; level++;
    if (level === 1) {
      showHeard(r, r.near ? r.near.w : null);
      if (r.near) { await line(tipKey(r.near.w, r.near)); await line(`W_${T}_${r.near.w}`); }
      else { await line(P + '_close'); await line(list); }
    } else {
      await line(P + '_pick'); return pick('help', 'Toque no que você quer');
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
function reward({badge, title, next, kid, homeplay}){
  recordWin(kid, G.stars); SAVE[kid].m = Math.max(SAVE[kid].m || 0, G.m); persist();
  const words = Object.keys(G.result), review = words.filter(w => G.result[w] === 'help');
  const div = document.createElement('div'); div.className = 'reward';
  div.innerHTML = `<div class="badge">${badge}</div><h2>${title}</h2>
    <div class="row"><span class="chip">⭐ ${G.stars} de ${G.max}</span><span class="chip">🔥 ${SAVE[kid].streak} ${SAVE[kid].streak === 1 ? 'dia' : 'dias'}</span></div>
    <div class="row">${words.map(w => `<span class="chip ${G.result[w]}">${G.result[w] === 'ok' ? '✅' : '🔁'} ${label(w)}</span>`).join('')}</div>
    ${review.length ? `<div class="small-note">🔁 treinar amanhã: ${review.map(label).join(', ')}</div>` : ''}
    ${homeplay ? `<div class="homeplay">🏠 ${homeplay}</div>` : ''}
    <div class="locked">${next}</div><div class="row" id="rbtns"></div>`;
  app.appendChild(div); confetti(80);
}
function endButtons(kid){
  const m = G.m, more = LESSONS[kid][m];
  act(''); el('rbtns').innerHTML = (more ? `<button class="next" id="more">Missão ${m + 1} ▶</button>` : '')
    + `<button class="next" id="again"${more ? ' style="background:#fff"' : ''}>Jogar de novo</button><button class="next" id="home" style="background:#fff">Início</button>`;
  if (more) el('more').onclick = () => start(kid, m + 1);
  el('again').onclick = () => start(kid, m);
  el('home').onclick = () => { G = null; home(); };
}

// cores que o Lucas escolhe (nave, espada, Bip)
const PAINT = {red:'#E5484D', blue:'#2F7CF6', green:'#2DBE6C', yellow:'#F5C400', purple:'#8E4DFF'};
const PAINT_DARK = {red:'#A82A2F', blue:'#1F4FA8', green:'#1B7E45'};
const BLADE = {red:'#FF5A5F', blue:'#5FD3F3', green:'#4BE38A', yellow:'#FFE14D', purple:'#B57BFF'};
const paintShip = sc => { const k = SAVE.lucas.ship || 'blue'; sc.style.setProperty('--ship', PAINT[k]); sc.style.setProperty('--ship-dark', PAINT_DARK[k]); };
// os drones atiram, o escudo cresce e devolve cada tiro (onBoom: efeito extra em cada explosão)
async function reflectDrones(drones, heroX, onBoom){
  const bolt = el('bolt'), boom = el('boom'), shield = el('hshield');
  shield.classList.add('big'); SFX.build();
  for (const d of drones) {
    const [x, y] = d.style.transform.match(/-?[\d.]+/g).map(Number);
    place(bolt, `translate(${x}px,${y}px)`); bolt.style.transition = 'transform .4s linear';
    bolt.style.transform = `translate(${heroX + 20}px,300px)`; SFX.enemy(); await wait(450);
    restart(shield, 'flash'); bolt.style.transform = `translate(${x}px,${y}px)`; await wait(450);
    boom.setAttribute('transform', `translate(${x} ${y})`); restart(boom, 'go'); SFX.boom(); if (onBoom) onBoom(x, y);
    place(d, 'translate(950px,120px)'); place(bolt, 'translate(900px,300px)'); await wait(300);
  }
  shield.classList.remove('big');
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
  const c = await speakChoice(colors, {list:'LN_color', preview:paint, expand:k => 'E_ship_' + k, onOk:k => { paint(k); SAVE.lucas.ship = k; persist(); SFX.build(); track(4); }});
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
  reward({kid:'lucas', badge:ART.wings, title:'Asas de Piloto!', next:'🔓 Missão 2 liberada: A Espada de Luz'});
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
  await speakChoice(colors, {list:'H06', preview:k => sc.style.setProperty('--shirt', colors[k]), expand:k => 'E_shirt_' + k, onOk:k => {
    sc.style.setProperty('--shirt', colors[k]); SAVE.henrique.shirt = k; persist(); restart(el('shirt'), 'pop'); SFX.build(); track(1); }});
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
  reward({kid:'henrique', badge:ART.trophy, title:'Craque da Final!', next:'🔓 Missão 2 liberada: A Revanche'});
  await line('H23');
  endButtons('henrique');
}

// ================= LUCAS · Missão 2 · A Espada de Luz =================
// Revisão das peças (lembrar sozinho), duas palavras novas para falar (sword, shield),
// duas para entender e tocar (left, right) e uma batalha em que ele lembra tudo sem modelo.
async function lessonLucas2(){
  shell('lucas', 'Esquadrão Estelar · Missão 2', ['🔧', '🗡️', '🛡️', '↔️', '💎', '⭐']);
  Object.assign(G, {T:'nova', H:'bip', P:'LB', max:9});
  setScene(ART.hangar());
  const sc = el('scene'), ship = el('ship');
  paintShip(sc);
  place(ship, 'translate(450px,270px) scale(.78)');
  ['wing', 'rocket', 'laser', 'light'].forEach(k => el('p-' + k).classList.add('on'));

  sc.classList.add('alarm-on'); SFX.alarm();
  await line('L2_01');
  el('holov').classList.add('show'); SFX.villain();
  await line('V04');
  el('holov').classList.remove('show'); sc.classList.remove('alarm-on');
  await line('L2_02');

  // 1. vistoria: lembrar sozinho as peças que deram mais trabalho ontem
  await line('L2_03');
  for (const w of pickReview(['wing', 'rocket', 'laser', 'light'], 2)) {
    restart(el('p-' + w), 'ping');
    await speak(w, {model:false, expand:'E_' + w, onOk:() => { restart(el('p-' + w), 'ping'); SFX.build(); }});
  }
  track(0); await line('L2_04');
  await speak('go', {model:false, intro:['L2_05', 'LN_count'], expand:'E_go',
    onOk:async () => { ship.classList.add('flying', 'launch'); SFX.launch(); ship.style.transform = 'translate(1300px,120px) scale(.78)'; await wait(1300); }});

  // 2. planeta roxo: espada e escudo
  setScene(ART.planet());
  sc.style.setProperty('--saber', '#5FD3F3');
  const hero = el('hero'), hb = hero.querySelector('.hero-body'), saber = el('hsaber'), shield = el('hshield');
  const vx = el('vortexfig'), vsaber = el('vsaber'), crystal = el('crystal'), bolt = el('bolt');
  const drones = [el('drone'), el('drone2'), el('drone3')];
  hero.style.transform = 'translate(230px,400px)'; SFX.whoosh(); await wait(700);
  vx.style.transform = 'translate(620px,400px)'; crystal.style.transform = 'translate(665px,282px)'; SFX.villain();
  await line('L2_06'); await line('V05');
  await line('L2_07');
  await speak('sword', {intro:['L2_08'], say:true, expand:'E_sword', onOk:() => { saber.classList.add('on'); restart(saber, 'swing'); SFX.build(); track(1); }});
  await line('L2_09'); await line('LN2_color');
  const blade = k => { sc.style.setProperty('--saber', BLADE[k]); restart(saber, 'swing'); };
  await speakChoice(PAINT, {list:'LN2_color', preview:blade, expand:k => 'E_sword_' + k, onOk:k => { SAVE.lucas.saber = k; persist(); SFX.build(); }});
  await speak('shield', {intro:['L2_10'], expand:'E_shield', onOk:() => { shield.classList.add('on'); restart(shield, 'flash'); SFX.build(); track(2); }});

  // 3. desviar das bolas de energia: ouvir left/right e tocar na seta
  await line('L2_11');
  drones[0].style.transform = 'translate(700px,140px)'; await wait(700);
  for (const dir of shuffle(['left', 'right']).concat([Math.random() < .5 ? 'left' : 'right'])) {
    place(bolt, 'translate(680px,150px)');
    tapButtons([['left', '⬅️', 'Esquerda'], ['right', '➡️', 'Direita']]);
    await listenTap(dir, 'LN2_' + dir, 'LB_wrong');
    act('');
    hero.style.transform = `translate(${dir === 'left' ? 120 : 340}px,400px)`; restart(hb, 'hop');
    bolt.style.transform = 'translate(-100px,390px)'; SFX.enemy(); await wait(1000);
    hero.style.transform = 'translate(230px,400px)'; await wait(500);
  }
  place(bolt, 'translate(900px,300px)');
  await line('L2_12'); track(3);

  // 4. treino: ouvir sword/shield e tocar
  await line('L2_13');
  tapButtons([['sword', '🗡️', 'Espada'], ['shield', '🛡️', 'Escudo']]);
  for (const w of shuffle(['sword', 'shield'])) {
    await listenTap(w, 'LN2_' + w, 'LB_wrong');
    restart(w === 'sword' ? saber : shield, w === 'sword' ? 'swing' : 'flash'); SFX.tap();
    await line('LN_yes');
  }
  act('');

  // 5. batalha: lembrar shield, sword e light sem ouvir antes
  drones.forEach((d, i) => { d.style.transform = `translate(${[560, 690, 620][i]}px,${[110, 150, 210][i]}px)`; });
  SFX.villain(); await line('V06'); SFX.enemy();
  await line('L2_14');
  await speak('shield', {model:false, expand:'E2_shield', onOk:() => reflectDrones(drones, 230)});

  await line('L2_15');
  vx.style.transform = 'translate(430px,400px)'; crystal.style.transform = 'translate(475px,282px)'; await wait(700);
  restart(vsaber, 'swing'); SFX.laser();
  await speak('sword', {model:false, expand:'E2_sword', onOk:async () => {
    restart(saber, 'swing'); SFX.laser(); await wait(250);
    restart(vx.querySelector('.vortex-body'), 'hit'); SFX.boom();
    crystal.style.transform = 'translate(340px,350px)'; vx.style.transform = 'translate(640px,400px)'; await wait(800);
  }});
  await line('V07');
  await line('L2_16');
  await speak('light', {model:false, expand:'E3_light', onOk:() => { crystal.classList.replace('dark', 'lit'); SFX.build(); confetti(30); track(4); }});
  await line('V08');
  vx.style.transform = 'translate(1050px,300px)'; SFX.whoosh(); await wait(800);

  await line('L2_17'); track(5);
  reward({kid:'lucas', badge:ART.saberBadge, title:'Cavaleiro Estelar!', next:'🔓 Missão 3 liberada: O Castelo do Vortex',
    homeplay:'Brincadeira com o papai: ele fala <b>left</b> ou <b>right</b> e você pula pro lado certo. Depois troquem!'});
  await line('L2_18'); await line('L2_19');
  endButtons('lucas');
}

// ================= LUCAS · Missão 3 · O Castelo do Vortex =================
// Revisão curta (a peça que deu mais trabalho e o go), duas palavras novas para falar (open, jump),
// números e setas para entender e tocar, e o resgate do Bip, em que ele lembra shield, sword e open sozinho.
async function lessonLucas3(){
  shell('lucas', 'Esquadrão Estelar · Missão 3', ['🚪', '🔥', '🔢', '🧭', '🦘', '🤖']);
  Object.assign(G, {T:'nova', H:'bip', P:'LB', max:9});
  setScene(ART.hangar());
  const sc = el('scene'), ship = el('ship');
  paintShip(sc); sc.style.setProperty('--saber', BLADE[SAVE.lucas.saber || 'blue']);
  place(ship, 'translate(450px,270px) scale(.78)');
  ['wing', 'rocket', 'laser', 'light'].forEach(k => el('p-' + k).classList.add('on'));
  el('bipf').style.display = 'none';                       // o Bip foi levado: só fala pelo rádio
  // Lucas entra na cena com a espada e o escudo da missão 2
  const heroIn = (x, y) => { const h = el('hero'); el('hsaber').classList.add('on'); el('hshield').classList.add('on'); h.style.transform = `translate(${x}px,${y}px)`; return h; };

  sc.classList.add('alarm-on'); SFX.alarm();
  el('holo').classList.add('show'); await line('L3_01'); el('holo').classList.remove('show');
  await line('L3_02');
  el('holov').classList.add('show'); SFX.villain(); await line('V09');
  el('holov').classList.remove('show'); sc.classList.remove('alarm-on');
  await line('L3_03');

  // 1. revisão: a peça que deu mais trabalho pisca; ele lembra o nome e decola
  const [part] = pickReview(['wing', 'rocket', 'laser', 'light'], 1), pe = el('p-' + part);
  pe.classList.add('broken');
  await speak(part, {model:false, intro:['L3_04'], expand:'E_' + part, onOk:() => { pe.classList.remove('broken'); restart(pe, 'ping'); SFX.build(); }});
  await speak('go', {model:false, intro:['L3_05', 'LN_count'], expand:'E_go',
    onOk:async () => { ship.classList.add('flying', 'launch'); SFX.launch(); ship.style.transform = 'translate(1300px,120px) scale(.78)'; await wait(1300); }});

  // 2. a porta mágica: open
  setScene(ART.castle());
  let hero = heroIn(170, 420); SFX.whoosh(); await wait(800);
  await line('L3_06'); await line('L3_07');
  await speak('open', {intro:['L3_08'], say:true, expand:'E_open', onOk:async () => { el('door').classList.add('open'); SFX.build(); track(0); await wait(900); }});
  hero.style.transform = 'translate(400px,350px) scale(.5)'; await wait(800);

  // 3. o salão escuro: lembrar light, depois ouvir o número e tocar na porta
  setScene(ART.hall());
  hero = heroIn(110, 430);
  sc.insertAdjacentHTML('beforeend', '<div class="darkness" id="dark"></div>'); SFX.dark();
  await line('L3_09');
  await speak('light', {model:false, expand:'E4_light', onOk:() => { el('dark').classList.add('off'); sc.classList.add('lit'); SFX.build(); track(1); }});
  await line('L3_10');
  tapButtons([['one', '<b class="num">1</b>', 'Um'], ['two', '<b class="num">2</b>', 'Dois'], ['three', '<b class="num">3</b>', 'Três']]);
  const surprise = [['🦇', 'L3_bat'], ['👻', 'L3_ghost'], ['✨', 'L3_found']];
  for (const [i, k] of shuffle(['one', 'two', 'three']).entries()) {
    await listenTap(k, 'LN3_door_' + k, 'LB_wrong');
    el('in-' + k).textContent = surprise[i][0]; el('d-' + k).classList.add('open');
    el('act').querySelector(`[data-k="${k}"]`).disabled = true;
    i < 2 ? SFX.whoosh() : SFX.good();
    await line(surprise[i][1]);
  }
  act(''); track(2);

  // 4. o labirinto: ouvir up/down/left/right e tocar na seta
  setScene(ART.maze()); sc.classList.remove('lit');
  const tok = el('mtok'), at = (c, r) => { tok.style.transform = `translate(${290 + c * 116}px,${115 + r * 116}px)`; el(`t${c}${r}`).classList.add('lit'); };
  let c = 0, r = 2; at(c, r);
  await line('L3_11');
  tapButtons([['up', '⬆️', 'Para cima'], ['down', '⬇️', 'Para baixo'], ['left', '⬅️', 'Esquerda'], ['right', '➡️', 'Direita']]);
  const D = {up:[0, -1], down:[0, 1], left:[-1, 0], right:[1, 0]}, call = {up:'W_nova_up', down:'W_nova_down', left:'LN2_left', right:'LN2_right'};
  for (const d of ['up', 'right', 'down', 'right', 'up']) {
    await listenTap(d, call[d], 'LB_wrong');
    c += D[d][0]; r += D[d][1]; at(c, r); SFX.tap(); await wait(500);
  }
  act(''); SFX.good(); track(3);
  await line('L3_12');

  // 5. a sala do trono: jump (palavra nova), depois lembrar shield, sword e open sozinho
  setScene(ART.throne());
  hero = heroIn(110, 400);
  const hb = hero.querySelector('.hero-body'), vx = el('vortexfig'), vsaber = el('vsaber'), saber = el('hsaber');
  const drones = [el('drone'), el('drone2'), el('drone3')];
  vx.style.transform = 'translate(560px,400px)'; SFX.villain(); await wait(700);
  await speak('jump', {intro:['L3_13'], expand:'E_jump', onOk:async () => {
    hero.style.transform = 'translate(350px,400px)'; restart(hb, 'bighop'); SFX.whoosh(); await wait(900); track(4); }});

  await line('V10');
  drones.forEach((d, i) => { d.style.transform = `translate(${[460, 560, 500][i]}px,${[90, 150, 230][i]}px)`; }); SFX.enemy();
  await line('L3_14');
  await speak('shield', {model:false, expand:'E2_shield', onOk:() => reflectDrones(drones, 350)});

  await line('L3_15');
  vx.style.transform = 'translate(480px,400px)'; await wait(700);
  restart(vsaber, 'swing'); SFX.laser();
  await speak('sword', {model:false, expand:'E2_sword', onOk:async () => {
    restart(saber, 'swing'); SFX.laser(); await wait(250);
    restart(vx.querySelector('.vortex-body'), 'hit'); SFX.boom();
    vx.style.transform = 'translate(620px,400px)'; await wait(700);
  }});
  await line('V08');
  vx.style.transform = 'translate(1050px,300px)'; SFX.whoosh(); await wait(800);

  await line('L3_16');
  await speak('open', {model:false, expand:'E2_open', onOk:async () => {
    el('cagedoor').classList.add('open'); SFX.build(); await wait(700);
    el('bipfree').style.transform = 'translate(470px,200px)'; await wait(1000); confetti(30); track(5);
  }});

  // 6. Bip escolhe a cor nova: tocar já pinta, falar confirma
  await line('L3_17'); await line('LN3_color');
  const paintBip = k => document.body.style.setProperty('--bip', PAINT[k]);
  await speakChoice(PAINT, {list:'LN3_color', preview:paintBip, expand:k => 'E_bip_' + k,
    onOk:k => { SAVE.lucas.bip = k; persist(); restart(el('bipfree'), 'hop'); SFX.build(); }});

  await line('L3_18');
  reward({kid:'lucas', badge:ART.keyBadge, title:'Herói do Castelo!', next:'🔓 Missão 4 liberada: As Estrelas Roubadas',
    homeplay:'Brincadeira com o papai: ele fala <b>open</b> (você abre as mãos), <b>jump</b> (você pula) ou <b>one</b>, <b>two</b>, <b>three</b> (você mostra os dedos). Depois troquem!'});
  await line('L3_19'); await line('L3_20');
  endButtons('lucas');
}

// ================= LUCAS · Missão 4 · As Estrelas Roubadas =================
// Mais inglês, em frases curtas e devagar. A história vem em "sanduíche" (inglês, tradução falada pelo Bip e,
// nas frases que ensinam, o inglês de novo); frase que já apareceu volta só em inglês.
// Palavras novas para falar: help, fly, stop e, no final, thank you. Big e small só para entender e tocar.
// Lembrar sozinho: uma peça da nave, go, shield, help (de novo, mais tarde) e light.
// Cada palavra nova vem com um gesto (braços abertos no fly, mão pra frente no stop).
async function lessonLucas4(){
  shell('lucas', 'Esquadrão Estelar · Missão 4', ['🆘', '🕊️', '✋', '⭐', '💥', '🙏']);
  Object.assign(G, {T:'nova', H:'bip', P:'LB', max:9});
  const sc = el('scene');
  paintShip(sc); sc.style.setProperty('--saber', BLADE[SAVE.lucas.saber || 'blue']);
  const heroIn = (x, y) => { const h = el('hero'); el('hsaber').classList.add('on'); el('hshield').classList.add('on'); h.style.transform = `translate(${x}px,${y}px)`; return h; };
  const hopLumi = l => { const x = l.querySelector('.lumi-in'); restart(x, 'hop'); setTimeout(() => x.classList.remove('hop'), 1100); };
  // as estrelas do céu vão sumindo até o ponto que puxa (away) ou voltam de lá para o lugar
  const PULL = [730, 40];
  const pullStars = away => sc.querySelectorAll('.sstar').forEach((s, i) => {
    const tf = `translate(${PULL[0] - s.getAttribute('cx')}px,${PULL[1] - s.getAttribute('cy')}px) scale(0)`;
    if (away) { s.style.transitionDelay = i * 22 + 'ms'; s.style.transform = tf; }
    else { place(s, tf); s.style.transitionDelay = i * 18 + 'ms'; s.style.transform = ''; }
  });

  // 1. a noite em que as estrelas sumiram; cai uma estrelinha: a Lumi
  setScene(ART.roof());
  await line('L4_01');
  pullStars(true); SFX.dark(); SFX.beam();
  const stopPull = FX.spiral(...PULL, {color:'#C9B6FF', rate:40, r:260});
  await line('L4_02');
  el('holov').classList.add('show'); SFX.villain();
  await sandwich('V11'); await sandwich('V12');
  el('holov').classList.remove('show'); stopPull();
  await line('L4_03');
  SFX.whoosh(); await FX.comet(760, -20, 520, 300, {ms:1200, color:'#FFE066', size:14, arc:60});
  FX.flash('#FFF6B0'); FX.shake(); SFX.boom(); FX.burst(520, 300, {n:70, speed:320}); FX.ring(520, 300, {color:'#FFE066'});
  const lumi = el('lumir'); lumi.classList.add('on');
  await line('L4_04');
  await sandwich('L4_05');
  await sandwich('L4_06', true);
  await speak('help', {intro:['L4_07'], say:true, expand:'E_help', onOk:() => {
    hopLumi(lumi); FX.burst(520, 300, {n:40, colors:['#FFE066', '#FFFFFF']}); SFX.build(); track(0); }});
  await line('L4_08');

  // 2. revisão no hangar e decolagem na velocidade da luz
  setScene(ART.hangar());
  const ship = el('ship');
  place(ship, 'translate(450px,270px) scale(.78)');
  ['wing', 'rocket', 'laser', 'light'].forEach(k => el('p-' + k).classList.add('on'));
  sc.querySelector('svg').insertAdjacentHTML('beforeend', `<g class="lumi-fig on" transform="translate(250 130)"><g class="lumi-pop"><g class="lumi-in"><g transform="scale(.5)">${LUMI}</g></g></g></g>`);
  const [part] = pickReview(['wing', 'rocket', 'laser', 'light'], 1), pe = el('p-' + part);
  pe.classList.add('broken');
  await speak(part, {model:false, intro:['L4_09'], expand:'E_' + part, onOk:() => { pe.classList.remove('broken'); restart(pe, 'ping'); SFX.build(); }});
  await speak('go', {model:false, intro:['L4_10', 'LN_count'], expand:'E_go',
    onOk:async () => { ship.classList.add('flying', 'launch'); SFX.launch(); ship.style.transform = 'translate(1300px,120px) scale(.78)'; await wait(1100); }});

  // 3. espaço fundo: fly (palavra nova), o buraco negro puxa e stop (palavra nova)
  setScene(ART.deep());
  const fship = el('fship'), bh = el('bh');
  bh.classList.add('far');
  FX.flash('#BFF4FF'); SFX.whoosh(); await FX.warp(2600);
  await sandwich('L4_11', true);
  await speak('fly', {intro:['L4_12'], say:true, expand:'E_fly', onOk:async () => {
    SFX.whoosh(); bh.classList.remove('far'); await FX.warp(1600); track(1); }});
  FX.spiral(650, 200, {color:'#FFB86B', rate:14, r:220, squash:.35, hole:52});      // o buraco negro puxa poeira o tempo todo
  await line('L4_13');
  fship.classList.add('pulled'); fship.style.transform = 'translate(400px,215px) scale(.36)'; SFX.beam();
  await sandwich('L4_14', true);
  await speak('stop', {intro:['L4_15'], say:true, expand:'E_stop', onOk:async () => {
    fship.classList.remove('pulled'); fship.style.transform = 'translate(190px,225px) scale(.45)';
    FX.burst(250, 225, {n:40, colors:['#9EF0FF', '#FFFFFF'], speed:300}); SFX.whoosh(); await wait(800); track(2); }});

  // jogo da estátua: fly = a nave avança; stop = a nave para e o meteoro passa na frente
  await line('L4_16');
  tapButtons([['fly', '🚀', 'Voar'], ['stop', '✋', 'Parar']]);
  const meteor = el('meteor');
  for (const k of shuffle(['fly', 'fly', 'stop', 'stop', 'fly'])) {
    await listenTap(k, 'LN4_' + k, 'LB_wrong');
    if (k === 'fly') { SFX.whoosh(); await FX.warp(1100); continue; }
    place(meteor, 'translate(760px,-80px)'); meteor.classList.add('go'); meteor.style.transform = 'translate(330px,520px)';
    FX.comet(760, -80, 330, 520, {ms:1000, color:'#FF8A1F', size:16, linear:true}); SFX.whoosh();
    await wait(1100); meteor.classList.remove('go');
  }
  act(''); SFX.good();
  await line('L4_17');

  // 4. a família da Lumi presa em bolhas: ouvir big ou small e tocar
  const fam = [['big', 470, 140, '#FF9AD5', '#E0559A'], ['small', 380, 320, '#9EF0FF', '#3AA8C8'],
    ['big', 560, 320, '#C9B6FF', '#8E6BE0'], ['small', 620, 120, '#FFB86B', '#E07A22']];
  el('bubbles').innerHTML = fam.map(([s, x, y, f, e], i) => bubble('bub' + i, s, x, y, f, e)).join('');
  fam.forEach(([, x, y]) => FX.burst(x, y, {n:16, colors:['#CFF8FF', '#FFFFFF'], speed:120}));
  await sandwich('L4_18', true);
  await line('L4_19');
  tapButtons([['big', '<span class="bigstar">⭐</span>', 'Grande'], ['small', '<span class="smallstar">⭐</span>', 'Pequena']]);
  let saved = 0;
  for (const k of shuffle(['big', 'big', 'small', 'small'])) {
    await listenTap(k, 'LN4_' + k, 'LB_wrong');
    const i = fam.findIndex(([s], j) => s === k && !el('bub' + j).classList.contains('saved')), [, x, y, f] = fam[i];
    el('bub' + i).classList.add('saved'); SFX.build();
    FX.burst(x, y, {n:36, colors:[f, '#FFFFFF'], speed:240}); FX.ring(x, y, {color:'#CFF8FF', r:90, width:6});
    FX.comet(x, y, 110, 110, {ms:900, color:f, size:9});                // a estrela voa até a Lumi
    await line('LN4_n' + ++saved);
  }
  act(''); track(3);
  await line('L4_20');

  // 5. a máquina do Vortex: lembrar shield, help e light sozinho
  setScene(ART.machine());
  const hero = heroIn(150, 400), vx = el('vortexfig'), machine = el('machine'), lm = el('lumim');
  const drones = [el('drone'), el('drone2'), el('drone3')];
  FX.spiral(580, 80, {color:'#FFE066', rate:10, r:200, squash:.4});     // a máquina continua engolindo estrelas
  vx.style.transform = 'translate(720px,400px)'; SFX.villain(); await wait(700);
  await sandwich('V13');
  await line('V06');
  drones.forEach((d, i) => { d.style.transform = `translate(${[290, 380, 330][i]}px,${[110, 140, 215][i]}px)`; }); SFX.enemy();
  await line('L3_14');
  await speak('shield', {model:false, expand:'E2_shield', onOk:() => reflectDrones(drones, 150, (x, y) => {
    FX.burst(x, y, {n:50, speed:300}); FX.ring(x, y, {color:'#FF8A1F', r:110}); FX.shake(); })});

  machine.classList.add('on'); const pull = FX.spiral(468, 240, {color:'#B57BFF', rate:45, r:240, hole:30});
  hero.style.transition = 'transform 5s ease-in'; hero.style.transform = 'translate(330px,400px)'; SFX.beam();
  await line('L4_21');
  await speak('help', {model:false, expand:'E2_help', onOk:async () => {
    lm.style.transform = 'translate(250px,250px)';
    ['#FF9AD5', '#9EF0FF', '#C9B6FF', '#FFB86B'].forEach((c, i) => later(i * 150, () => FX.comet(-20, 80 + i * 60, 210 + i * 12, 290, {ms:800, color:c, size:9})));
    await wait(900); pull(); machine.classList.remove('on');
    hero.style.transition = ''; hero.style.transform = 'translate(150px,400px)'; SFX.whoosh(); await wait(800); }});

  await line('L4_22');
  await speak('light', {model:false, expand:'E5_light', onOk:async () => {
    machine.classList.add('overload'); SFX.beam();
    const glow = FX.sparkle(570, 230, {color:'#FFF6B0', r:90, rate:40}); await wait(1300); glow();
    FX.flash(); FX.shake(); SFX.boom(); later(250, SFX.boom);
    FX.burst(570, 230, {n:150, speed:560, size:7, life:1.6, colors:['#FFE066', '#FFFFFF', '#FF8A1F', '#B57BFF']});
    FX.ring(570, 230, {r:520, width:26}); FX.ring(570, 230, {color:'#FFE066', r:320, width:14, life:.9});
    machine.classList.add('gone');
    const cols = ['#FFE066', '#FFFFFF', '#FF9AD5', '#9EF0FF', '#C9B6FF', '#FFB86B'];
    for (let i = 0; i < 16; i++) later(150 + i * 80, () => FX.comet(570, 230, 40 + Math.random() * 720, -40, {ms:1200, color:cols[i % 6], size:8, arc:40}));
    await wait(1800); track(4); }});
  restart(vx.querySelector('.vortex-body'), 'hit');
  await sandwich('V14');
  vx.style.transform = 'translate(1050px,250px)'; SFX.whoosh(); await wait(800);

  // 6. as estrelas voltam para o céu; a Lumi dá um presente e ele agradece: thank you
  setScene(ART.roof());
  const lumi2 = el('lumir'); lumi2.classList.add('on');
  pullStars(false); SFX.beam(); FX.fireworks(4500);
  later(1800, () => { const c = el('constel'); if (c) c.classList.add('on'); });
  await wait(1200);
  await sandwich('L4_23', true);
  el('gift').classList.add('on'); SFX.build(); FX.sparkle(400, 268, {r:70, rate:8});
  await sandwich('L4_24');
  await speak('thanks', {intro:['L4_25'], say:true, expand:'E_thanks', onOk:() => {
    hopLumi(lumi2); FX.burst(400, 268, {n:60, speed:300}); SFX.build(); track(5); }});
  await line('L4_26');
  reward({kid:'lucas', badge:ART.starBadge, title:'Guardião das Estrelas!', next:'🔒 Missão 5 · em breve',
    homeplay:'Brincadeira de estátua com o papai: ele fala <b>fly</b> (você voa pela sala de braços abertos) e <b>stop</b> (você congela!). Depois troquem. E quando alguém te ajudar, fala <b>thank you</b>.'});
  await line('L4_27'); await line('L4_28'); await line('L4_29');
  endButtons('lucas');
}

// ================= HENRIQUE · Missão 2 · A Revanche =================
// Revisão da mochila (lembrar sozinho), duas palavras novas para falar (pass, head),
// duas para entender e tocar (left, right) e um jogo em que ele lembra tudo e escolhe o canto falando.
async function lessonHenrique2(){
  shell('henrique', 'A Revanche', ['🎒', '🤝', '🙆', '↔️', '⚽', '🏅']);
  Object.assign(G, {T:'coach', H:'narr', P:'HN', max:7});
  setScene(ART.locker());
  const sc = el('scene'), colors = {red:'#E5484D', blue:'#2F7CF6', yellow:'#F5C400'};
  sc.style.setProperty('--shirt', colors[SAVE.henrique.shirt || 'blue']);
  SFX.crowd(.12, 3);
  await line('H2_01'); await line('H2_02'); await line('T05');
  await line('H2_03');
  el('coachbig').classList.add('show');

  // 1. mochila: lembrar sozinho as palavras que deram mais trabalho ontem
  for (const w of pickReview(['shoes', 'ball', 'yes'], 2)) {
    if (w === 'yes') { await speak('yes', {model:false, intro:['HC_ready'], expand:'E2_yes'}); continue; }
    const item = el(w === 'shoes' ? 'shoes' : 'lball'); item.classList.add('on');
    await speak(w, {model:false, intro:['HC2_what'], expand:'E_' + w, onOk:() => { restart(item, 'on'); SFX.build(); }});
  }
  track(0); await line('H2_04');

  // 2. treino com o irmão: pass e head
  setScene(ART.stadium(true));
  const ball = el('ball'), keeper = el('keeper'), player = el('player'), mate = el('mate'), def = el('defender'), net = el('goal').querySelector('.net');
  const atFeet = () => { place(player, 'translate(250px,360px) scale(.9)'); place(ball, 'translate(305px,412px) scale(.9)'); };
  place(keeper, 'translate(400px,258px)'); atFeet(); SFX.whistle();
  mate.style.transform = 'translate(560px,350px) scale(.85)'; await wait(700);
  await line('H2_05');
  await speak('pass', {intro:['HC2_pass', 'H2_06'], expand:'E_pass', onOk:async () => {
    SFX.kick(); ball.style.transform = 'translate(605px,398px) scale(.85)'; await wait(700); track(1); }});
  await speak('head', {intro:['H2_07'], expand:'E_head', onOk:async () => {
    SFX.kick(); ball.style.transform = 'translate(262px,296px) scale(.8)'; await wait(700);
    restart(player.querySelector('.player-body'), 'hop'); keeper.style.transform = 'translate(470px,250px) rotate(70deg)';
    ball.style.transform = 'translate(330px,190px) scale(.55)'; await wait(600);
    restart(net, 'shake'); SFX.roar(); track(2); }});

  // 3. drible: ouvir left/right e tocar na seta
  place(keeper, 'translate(400px,258px)'); atFeet();
  def.style.transform = 'translate(330px,300px) scale(.8)'; await wait(700);
  await line('H2_08');
  for (const dir of shuffle(['left', 'right', 'left', 'right'])) {
    tapButtons([['left', '⬅️', 'Esquerda'], ['right', '➡️', 'Direita']]);
    await listenTap(dir, 'HC2_' + dir, 'HN_wrong');
    act('');
    const x = dir === 'left' ? 170 : 430;
    player.style.transform = `translate(${x}px,330px) scale(.88)`; ball.style.transform = `translate(${x + 50}px,384px) scale(.88)`; await wait(750);
    player.style.transform = 'translate(250px,360px) scale(.9)'; ball.style.transform = 'translate(305px,412px) scale(.9)'; await wait(600);
  }
  track(3);

  // 4. treino final: ouvir e tocar pass / head / kick
  await line('H2_09');
  tapButtons([['pass', '🤝', 'Passar'], ['head', '🙆', 'Cabecear'], ['kick', '🦶', 'Chutar']]);
  for (const c of shuffle(['pass', 'head', 'kick'])) { await listenTap(c, c === 'kick' ? 'HC_kick' : 'HC2_' + c, 'HN_wrong'); SFX.kick(); await line('HC_yes'); }
  act('');

  // 5. a revanche: lembrar pass e head sem ouvir antes, e escolher o canto falando left/right
  SFX.whistle(); SFX.roar();
  sc.insertAdjacentHTML('beforeend', '<div class="overlay" style="align-items:flex-start;padding-top:10px"><span class="chip score" id="score">Henrique 0 x 0 Tubarões</span></div>');
  const score = t => { el('score').textContent = t; restart(el('score'), 'bump'); };
  await line('H2_10'); await line('T06');
  atFeet(); def.style.transform = 'translate(340px,310px) scale(.85)'; mate.style.transform = 'translate(560px,350px) scale(.85)';
  await line('H2_11');
  await speak('pass', {model:false, expand:'E2_pass', onOk:async () => { SFX.kick(); ball.style.transform = 'translate(605px,398px) scale(.85)'; await wait(700); }});
  player.style.transform = 'translate(300px,320px) scale(.85)'; await wait(600);
  await line('H2_12');
  await speak('head', {model:false, expand:'E2_head', onOk:async () => {
    SFX.kick(); ball.style.transform = 'translate(310px,258px) scale(.75)'; await wait(700);
    restart(player.querySelector('.player-body'), 'hop'); keeper.style.transform = 'translate(305px,250px) rotate(-70deg)';
    ball.style.transform = 'translate(480px,190px) scale(.55)'; await wait(700);
    restart(net, 'shake'); restart(el('crowd'), 'cheer'); SFX.roar(); confetti(40); score('Henrique 1 x 0 Tubarões'); }});
  await line('H2_13'); await line('T07');

  place(keeper, 'translate(400px,258px)'); place(player, 'translate(330px,330px)'); place(ball, 'translate(400px,392px)');
  def.style.transform = 'translate(-200px,330px)';
  await line('H2_14'); await line('HC2_where');
  const side = await speakChoice({left:'#2F7CF6', right:'#E5484D'}, {list:'HC2_where', labels:{left:'⬅️', right:'➡️'}});
  player.style.transform = 'translate(370px,345px)'; SFX.kick();
  keeper.style.transform = side === 'left' ? 'translate(495px,250px) rotate(70deg)' : 'translate(305px,250px) rotate(-70deg)';
  ball.style.transform = side === 'left' ? 'translate(300px,185px) scale(.55)' : 'translate(500px,185px) scale(.55)';
  await wait(750);
  restart(net, 'shake'); restart(el('crowd'), 'cheer'); SFX.roar(); confetti(60); score('Henrique 2 x 0 Tubarões'); track(4);
  await line('H2_15'); await line('T08'); await line('HC2_end'); track(5);
  reward({kid:'henrique', badge:ART.medal, title:'Craque do Time!', next:'🔒 Missão 3 · em breve',
    homeplay:'Treino com o papai: com uma bolinha de meia, ele grita <b>pass</b>, <b>head</b>, <b>left</b> ou <b>right</b> e você faz. Depois troquem!'});
  await line('H2_16'); await line('H2_17');
  endButtons('henrique');
}

// ---------------- início ----------------
let runSeq = 0;
const LESSONS = {lucas:[lessonLucas, lessonLucas2, lessonLucas3, lessonLucas4], henrique:[lessonHenrique, lessonHenrique2]};
const MISSIONS = {lucas:['Missão 1 · A Nave', 'Missão 2 · A Espada de Luz', 'Missão 3 · O Castelo', 'Missão 4 · As Estrelas'], henrique:['Missão 1 · A Grande Final', 'Missão 2 · A Revanche']};
function start(kid, m = 1){
  actx();                                   // libera o som dentro do toque
  voice.src = 'audio/' + (kid === 'lucas' ? 'L01' : 'H01') + '.mp3'; voice.play().catch(() => {}); voice.pause();
  G = {id:++runSeq, kid, m, stars:0, max:0, noMic:false, result:{}};
  preload(kid === 'lucas' ? ['L', 'V', 'E_', 'E2_', 'E3_', 'E4_', 'E5_', 'W_nova', 'S_nova', 'T_bip'] : ['H', 'T0', 'E_', 'E2_', 'W_coach', 'S_coach', 'T_narr']);
  LESSONS[kid][m - 1]().catch(e => { if (e !== CANCEL) console.error(e); });
}

function home(){
  document.body.className = 'home';
  const status = k => { const s = SAVE[k]; return s.plays ? `🔥 ${s.streak} ${s.streak === 1 ? 'dia' : 'dias'} · ⭐ recorde ${s.best}` : 'Missão 1 esperando'; };
  // a missão seguinte abre quando a anterior é vencida; o botão principal é a mais nova aberta
  const btns = k => { const open = Math.min((SAVE[k].m || 0) + 1, LESSONS[k].length);
    return MISSIONS[k].map((t, i) => i + 1 > open ? `<button class="go alt" disabled>🔒 ${t}</button>`
      : `<button class="go${i + 1 === open ? '' : ' alt'}" data-kid="${k}" data-m="${i + 1}">▶ ${t}</button>`).reverse().join(''); };
  app.innerHTML = `<div class="home-wrap">
    <h1>Missão Inglês</h1><p class="sub">Quem vai jogar hoje?</p>
    <div class="cards">
      <div class="kid l" id="k-lucas"><div class="art">${ART.space()}</div>
        <div class="info"><b>Lucas</b><span class="meta">Esquadrão Estelar · enfrente o Lorde Vortex</span><span class="meta">${status('lucas')}</span><div class="btns">${btns('lucas')}</div></div></div>
      <div class="kid h" id="k-henrique"><div class="art">${ART.stadium()}</div>
        <div class="info"><b>Henrique</b><span class="meta">Futebol com o Coach Max · vença o Big Tony</span><span class="meta">${status('henrique')}</span><div class="btns">${btns('henrique')}</div></div></div>
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
  app.querySelectorAll('.btns [data-m]').forEach(b => b.onclick = () => start(b.dataset.kid, +b.dataset.m));
  if (SR) el('mtest').onclick = () => {
    const b = el('mtest'); b.disabled = true;
    recognize([], null, t => el('mres').textContent = t).then(r => {
      b.disabled = false;
      el('mres').textContent = r.heard ? `Entendi: “${r.heard}” ✅` : 'Não ouvi nada. Confira se o navegador tem permissão para usar o microfone.';
    });
  };
}
home();
