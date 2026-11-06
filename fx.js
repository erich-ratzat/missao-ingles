// Efeitos de luz por cima da cena: faíscas, explosões, cometas, viagem na velocidade da luz, tremor e clarão.
// Desenha num canvas com as mesmas coordenadas das cenas (800x450, cortado como o SVG com "slice").
// Cada setScene monta um canvas novo; trocar de cena apaga tudo o que estava rodando.
const FX = (() => {
  let cv = null, g = null, k = 1, ox = 0, oy = 0, raf = 0, prev = 0;
  const parts = [], loops = new Set(), pend = new Set(), sprites = {};
  const rand = (a, b) => a + Math.random() * (b - a);
  // bolinha de luz com brilho em volta, desenhada uma vez por cor (cores sempre #RRGGBB)
  function sprite(color){
    if (sprites[color]) return sprites[color];
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'), gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, '#ffffff'); gr.addColorStop(.2, color); gr.addColorStop(.5, color + '55'); gr.addColorStop(1, color + '00');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    return sprites[color] = c;
  }
  const dot = (color, x, y, s) => g.drawImage(sprite(color), x - s * 2, y - s * 2, s * 4, s * 4);
  function fit(){
    if (!cv) return;
    const r = cv.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.max(1, Math.round(r.width * d)); cv.height = Math.max(1, Math.round(r.height * d));
    k = Math.max(cv.width / 800, cv.height / 450); ox = (cv.width - 800 * k) / 2; oy = (cv.height - 450 * k) / 2;
  }
  window.addEventListener('resize', fit);
  function clear(){ parts.length = 0; loops.clear(); pend.forEach(r => r()); pend.clear(); }
  function mount(scene){ clear(); cv = document.createElement('canvas'); cv.className = 'fx'; scene.appendChild(cv); g = cv.getContext('2d'); fit(); }
  function run(){ if (!raf) { prev = performance.now(); raf = requestAnimationFrame(frame); } }
  // efeito com fim: a promessa resolve no fim, ao trocar de cena ou, por garantia, depois do tempo previsto
  function timed(ms, fn){
    return new Promise(res => {
      const done = () => { if (pend.delete(res)) res(); };
      pend.add(res); setTimeout(done, ms + 400);
      loops.add((dt, t) => { if (fn(dt, t) === false) { done(); return false; } }); run();
    });
  }
  function frame(t){
    const dt = Math.min(.05, (t - prev) / 1000); prev = t;
    if (!cv || !cv.isConnected) { clear(); raf = 0; return; }
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, cv.width, cv.height);
    g.setTransform(k, 0, 0, k, ox, oy); g.globalCompositeOperation = 'lighter';
    for (const f of loops) if (f(dt) === false) loops.delete(f);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i]; p.t += dt;
      if (p.t >= p.life) { parts.splice(i, 1); continue; }
      p.vx -= p.vx * p.drag * dt; p.vy -= p.vy * p.drag * dt; p.vy += p.grav * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      const a = 1 - p.t / p.life, s = p.size * (.4 + .6 * a);
      g.globalAlpha = a;
      if (p.streak) { g.strokeStyle = p.color; g.lineWidth = s * .7; g.lineCap = 'round';
        g.beginPath(); g.moveTo(p.x - p.vx * .06, p.y - p.vy * .06); g.lineTo(p.x, p.y); g.stroke(); }
      dot(p.color, p.x, p.y, s);
    }
    g.globalAlpha = 1;
    if (parts.length || loops.size) raf = requestAnimationFrame(frame);
    else { raf = 0; g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, cv.width, cv.height); }
  }

  // explosão de faíscas
  function burst(x, y, {n = 40, colors = ['#FFE066', '#FF8A1F', '#FFFFFF'], speed = 260, size = 5, life = 1.1, grav = 0, drag = 1.6, streak = true} = {}){
    if (!cv) return;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = speed * rand(.25, 1);
      parts.push({x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, t: 0, life: life * rand(.6, 1.1), size: size * rand(.6, 1.3),
        color: colors[i % colors.length], grav, drag, streak});
    }
    run();
  }
  // onda de choque: um anel que cresce e some
  function ring(x, y, {color = '#FFFFFF', r = 260, life = .7, width = 14} = {}){
    if (!cv) return;
    let t = 0;
    loops.add(dt => { t += dt; const p = t / life; if (p >= 1) return false;
      g.globalAlpha = 1 - p; g.strokeStyle = color; g.lineWidth = width * (1 - p) + 1;
      g.beginPath(); g.arc(x, y, r * (1 - Math.pow(1 - p, 3)), 0, 7); g.stroke(); g.globalAlpha = 1; });
    run();
  }
  // velocidade da luz: as estrelas saem do ponto de fuga e viram riscos (acelera e depois freia)
  function warp(ms = 2000, {cx = 640, cy = 225, colors = ['#FFFFFF', '#9EF0FF', '#C9B6FF']} = {}){
    if (!cv) return Promise.resolve();
    const S = Array.from({length: 240}, () => ({a: Math.random() * 7, d: rand(5, 800), v: rand(.6, 1.4), c: colors[Math.floor(Math.random() * colors.length)]}));
    let t = 0; const life = ms / 1000;
    return timed(ms, dt => {
      t += dt; if (t >= life) return false;
      const sp = Math.sin(Math.PI * t / life), speed = 1700 * sp + 40;
      g.lineCap = 'round';
      for (const s of S) {
        s.d += speed * s.v * dt * (.15 + s.d / 380);
        if (s.d > 950) { s.d = rand(2, 30); continue; }
        const tail = Math.min(s.d - 1, speed * s.v * .05 * (.15 + s.d / 380)), c = Math.cos(s.a), si = Math.sin(s.a);
        g.globalAlpha = Math.min(1, s.d / 160); g.strokeStyle = s.c; g.lineWidth = .8 + s.d / 260;
        g.beginPath(); g.moveTo(cx + c * (s.d - tail), cy + si * (s.d - tail)); g.lineTo(cx + c * s.d, cy + si * s.d); g.stroke();
      }
      g.globalAlpha = sp * .9; dot('#9EF0FF', cx, cy, 6 + 30 * sp); g.globalAlpha = 1;
    });
  }
  // luzinhas que giram até um ponto (máquina sugando, buraco negro). Devolve a função que desliga.
  function spiral(cx, cy, {color = '#FFE066', rate = 30, r = 320, squash = .6, hole = 5} = {}){
    if (!cv) return () => {};
    const P = []; let acc = 0, on = true;
    loops.add(dt => {
      if (!on && !P.length) return false;
      acc += dt * rate;
      while (on && acc >= 1) { acc--; P.push({a: Math.random() * 7, r: rand(r * .6, r), w: rand(1.2, 2.4)}); }
      for (let i = P.length - 1; i >= 0; i--) {
        const p = P[i]; p.r -= dt * (60 + 3000 / (p.r + 20)); p.a += dt * p.w * (1 + 60 / (p.r + 10));
        if (p.r < hole) { P.splice(i, 1); continue; }
        g.globalAlpha = Math.min(1, (p.r - hole) / 40); dot(color, cx + Math.cos(p.a) * p.r, cy + Math.sin(p.a) * p.r * squash, 2 + p.r / 90);
      }
      g.globalAlpha = 1;
    });
    run();
    return () => { on = false; };
  }
  // cometa: uma luz que vai de um ponto a outro deixando rastro de faíscas
  function comet(x0, y0, x1, y1, {ms = 900, color = '#FFE066', size = 10, arc = 0, linear = false} = {}){
    if (!cv) return Promise.resolve();
    let t = 0; const life = ms / 1000;
    return timed(ms, dt => {
      t += dt; const p = Math.min(1, t / life), e = linear ? p : p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      const x = x0 + (x1 - x0) * e, y = y0 + (y1 - y0) * e - arc * Math.sin(Math.PI * e);
      for (let i = 0; i < 3; i++) parts.push({x, y, vx: rand(-40, 40), vy: rand(-40, 40), t: 0, life: rand(.3, .6), size: size * .55, color, grav: 0, drag: 2, streak: false});
      dot(color, x, y, size); dot('#FFFFFF', x, y, size * .45);
      if (p >= 1) return false;
    });
  }
  // fogos de artifício por um tempo
  function fireworks(ms = 3000){
    if (!cv) return;
    const cols = [['#FFD23F', '#FFFFFF'], ['#5FD3F3', '#FFFFFF'], ['#FF5A5F', '#FFE066'], ['#B57BFF', '#FFFFFF'], ['#4BE38A', '#FFFFFF']];
    let t = 0, next = 0;
    loops.add(dt => { t += dt; if (t >= ms / 1000) return false;
      if (t >= next) { next = t + rand(.22, .45);
        burst(rand(120, 680), rand(50, 220), {n: 50, colors: cols[Math.floor(Math.random() * cols.length)], speed: 230, grav: 110, life: 1.5, drag: 1.3}); } });
    run();
  }
  // brilhinhos que nascem em volta de um ponto (estrela, presente). Devolve a função que desliga.
  function sparkle(x, y, {color = '#FFE066', r = 50, rate = 10} = {}){
    if (!cv) return () => {};
    let acc = 0, on = true;
    loops.add(dt => { if (!on) return false; acc += dt * rate;
      while (acc >= 1) { acc--; const a = Math.random() * 7, d = rand(r * .3, r);
        parts.push({x: x + Math.cos(a) * d, y: y + Math.sin(a) * d, vx: 0, vy: -20, t: 0, life: rand(.5, 1), size: rand(2, 4.5), color, grav: 0, drag: 0, streak: false}); } });
    run();
    return () => { on = false; };
  }
  // tremor e clarão mexem no HTML da cena, não no canvas
  function shake(){ const s = cv && cv.parentNode; if (!s) return; s.classList.remove('shake'); void s.offsetWidth; s.classList.add('shake'); }
  function flash(color = '#FFFFFF'){
    const s = cv && cv.parentNode; if (!s) return;
    const d = document.createElement('div'); d.className = 'flash'; d.style.background = color; s.appendChild(d); setTimeout(() => d.remove(), 900);
  }
  return {mount, clear, burst, ring, warp, spiral, comet, fireworks, sparkle, shake, flash};
})();
