// Arte em SVG: personagens e cenários das duas lições.
// Cada cena usa viewBox 0 0 800 450. Retratos usam viewBox 0 0 100 100.

// gerador pseudoaleatório fixo, para estrelas e torcida saírem sempre iguais
function rng(seed){ return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }

const ART = {};

// ---------------- retratos (caixa de diálogo) ----------------
ART.nova = `<svg viewBox="0 0 100 100" aria-hidden="true">
  <circle cx="50" cy="50" r="50" fill="#1D2B53"/>
  <path d="M14 100 C16 76 84 76 86 100 Z" fill="#F07A22"/>
  <path d="M38 79 L50 90 L62 79" fill="none" stroke="#FFE3C4" stroke-width="3"/>
  <path d="M70 86 l2.4 5 5.4.6 -4 3.6 1.1 5.3 -4.9 -2.7 -4.9 2.7 1.1 -5.3 -4 -3.6 5.4 -.6 Z" fill="#FFD23F"/>
  <rect x="43" y="66" width="14" height="14" fill="#E3A77D"/>
  <path d="M27 50 C24 18 76 16 73 50 C75 64 70 72 66 74 L66 52 C60 44 44 40 34 46 L34 74 C29 72 25 64 27 50 Z" fill="#3B2418"/>
  <ellipse cx="50" cy="52" rx="19" ry="22" fill="#E9B48A"/>
  <path d="M31 46 C34 30 66 28 69 44 C62 36 46 34 31 46 Z" fill="#3B2418"/>
  <path d="M38 45 q4 -3 8 0 M54 45 q4 -3 8 0" stroke="#3B2418" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <circle cx="42" cy="52" r="2.8" fill="#1A1A1A"/><circle cx="58" cy="52" r="2.8" fill="#1A1A1A"/>
  <circle cx="43" cy="51" r=".9" fill="#fff"/><circle cx="59" cy="51" r=".9" fill="#fff"/>
  <ellipse cx="38" cy="60" rx="4" ry="2.4" fill="#F28C8C" opacity=".55"/><ellipse cx="62" cy="60" rx="4" ry="2.4" fill="#F28C8C" opacity=".55"/>
  <path d="M43 63 q7 6 14 0" stroke="#8A3B2A" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <path d="M29 50 C28 24 72 24 71 50" fill="none" stroke="#2B2F3A" stroke-width="4"/>
  <circle cx="29" cy="53" r="6.5" fill="#2B2F3A"/><circle cx="29" cy="53" r="3" fill="#5FD3F3"/>
  <path d="M30 58 Q34 68 42 67" fill="none" stroke="#2B2F3A" stroke-width="2.5"/><circle cx="43" cy="67" r="2.4" fill="#2B2F3A"/>
</svg>`;

ART.bip = `<svg viewBox="0 0 100 110" aria-hidden="true" class="bip">
  <line x1="50" y1="20" x2="50" y2="7" stroke="#16485A" stroke-width="3"/>
  <circle cx="50" cy="6" r="5" fill="#FF4D4D" class="blink"/>
  <rect x="7" y="38" width="9" height="20" rx="3" fill="#F5A524" stroke="#16485A" stroke-width="2"/>
  <rect x="84" y="38" width="9" height="20" rx="3" fill="#F5A524" stroke="#16485A" stroke-width="2"/>
  <rect x="15" y="18" width="70" height="60" rx="20" fill="#3EC6E0" stroke="#16485A" stroke-width="3"/>
  <path d="M22 30 Q30 22 44 22" stroke="#fff" stroke-width="4" fill="none" opacity=".5" stroke-linecap="round"/>
  <rect x="24" y="30" width="52" height="34" rx="11" fill="#0B1B2B"/>
  <circle cx="50" cy="47" r="12" fill="#7DF9FF"/>
  <g class="pupil"><circle cx="52" cy="47" r="5.5" fill="#0B1B2B"/><circle cx="54" cy="45" r="1.8" fill="#fff"/></g>
  <circle cx="30" cy="70" r="2.5" fill="#F5A524"/><circle cx="70" cy="70" r="2.5" fill="#F5A524"/>
  <path d="M38 78 L62 78 L56 88 L44 88 Z" fill="#2A7F93" stroke="#16485A" stroke-width="2"/>
  <path d="M44 88 Q50 108 56 88 Z" fill="#FFB020" class="flame"/>
  <path d="M47 88 Q50 98 53 88 Z" fill="#FFF2A8" class="flame"/>
</svg>`;

ART.coach = `<svg viewBox="0 0 100 100" aria-hidden="true">
  <circle cx="50" cy="50" r="50" fill="#FFC93C"/>
  <path d="M12 100 C14 74 86 74 88 100 Z" fill="#1E3A8A"/>
  <path d="M30 80 L26 100 M70 80 L74 100" stroke="#fff" stroke-width="3"/>
  <path d="M40 76 L50 90 L60 76" fill="#fff"/>
  <rect x="43" y="64" width="14" height="14" fill="#B97A4B"/>
  <ellipse cx="50" cy="51" rx="20" ry="22" fill="#C68B59"/>
  <ellipse cx="30" cy="54" rx="4" ry="6" fill="#B97A4B"/><ellipse cx="70" cy="54" rx="4" ry="6" fill="#B97A4B"/>
  <path d="M28 42 C28 22 72 22 72 42 Z" fill="#D7263D"/>
  <path d="M50 42 C64 42 82 43 86 47 C80 49 64 47 50 46 Z" fill="#A61B2E"/>
  <rect x="28" y="40" width="44" height="5" rx="2" fill="#A61B2E"/>
  <circle cx="50" cy="28" r="3" fill="#fff"/>
  <path d="M39 49 h7 M54 49 h7" stroke="#4A2C17" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="42.5" cy="54" r="2.6" fill="#1A1A1A"/><circle cx="57.5" cy="54" r="2.6" fill="#1A1A1A"/>
  <path d="M38 64 C44 60 56 60 62 64 C58 67 42 67 38 64 Z" fill="#4A2C17"/>
  <path d="M44 67 q6 5 12 0" stroke="#7A2E1F" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M36 76 Q50 92 64 76" fill="none" stroke="#E5484D" stroke-width="2"/>
  <rect x="54" y="84" width="13" height="7" rx="3" fill="#C9D1DE" stroke="#7B8496" stroke-width="1.5"/>
</svg>`;

ART.narr = `<svg viewBox="0 0 100 100" aria-hidden="true">
  <circle cx="50" cy="50" r="50" fill="#139150"/>
  <rect x="38" y="70" width="24" height="7" rx="3" fill="#0B4D2B"/>
  <rect x="47" y="60" width="6" height="14" fill="#0B4D2B"/>
  <path d="M30 46 Q30 66 50 66 Q70 66 70 46" fill="none" stroke="#fff" stroke-width="4"/>
  <rect x="36" y="16" width="28" height="44" rx="14" fill="#E8EEF5" stroke="#0B4D2B" stroke-width="3"/>
  <path d="M38 28 h24 M37 36 h26 M37 44 h26 M38 52 h24" stroke="#9AA7B8" stroke-width="2"/>
  <path d="M74 30 q6 8 0 16 M80 24 q10 14 0 28" stroke="#FFD23F" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`;

// ---------------- Lucas: nave ----------------
const SHIP_PARTS = {
  rocket: `<rect x="-204" y="-22" width="64" height="44" rx="9" fill="#5B6478" stroke="#1B2232" stroke-width="3"/>
    <path d="M-204 -15 L-222 -24 L-222 24 L-204 15 Z" fill="#3A4152" stroke="#1B2232" stroke-width="3"/>
    <path d="M-190 -22 v44 M-170 -22 v44" stroke="#1B2232" stroke-width="2" opacity=".5"/>`,
  wing: `<path d="M-74 10 L44 10 L-12 96 L-116 104 Z" fill="var(--ship-dark)" stroke="#1B2232" stroke-width="3"/>
    <path d="M-74 -10 L34 -10 L-22 -84 L-116 -92 Z" fill="var(--ship-dark)" stroke="#1B2232" stroke-width="3"/>
    <path d="M-44 10 L-6 10 L-58 100 L-84 101 Z M-44 -10 L-10 -10 L-62 -88 L-86 -89 Z" fill="#fff" opacity=".22"/>`,
  laser: `<rect x="-24" y="88" width="126" height="9" rx="3" fill="#2B3142" stroke="#11151F" stroke-width="2"/>
    <rect x="98" y="86" width="16" height="13" rx="3" fill="#FF4D4D"/>
    <rect x="-34" y="-90" width="114" height="9" rx="3" fill="#2B3142" stroke="#11151F" stroke-width="2"/>
    <rect x="76" y="-92" width="16" height="13" rx="3" fill="#FF4D4D"/>`,
  light: `<path d="M184 -5 L360 -60 L360 60 L184 5 Z" fill="url(#beam)" opacity=".55"/>
    <circle cx="178" cy="0" r="24" fill="#FFF3A0" opacity=".35" class="glow"/>
    <circle cx="178" cy="0" r="8" fill="#FFF7C2"/>
    <circle cx="-110" cy="101" r="6" fill="#7CFF8A" class="blink"/><circle cx="-110" cy="-89" r="6" fill="#FF6B6B" class="blink"/>`,
};
const SHIP_BODY = `<path d="M-152 0 C-142 -40 40 -48 132 -17 Q176 -5 188 0 Q176 5 132 17 C40 48 -142 40 -152 0 Z" fill="var(--ship)" stroke="#1B2232" stroke-width="3"/>
  <path d="M-150 6 C-120 30 40 34 132 14" fill="none" stroke="#000" opacity=".16" stroke-width="12"/>
  <path d="M-60 -30 v60 M-10 -36 v72" stroke="#1B2232" stroke-width="2" opacity=".35"/>
  <circle cx="-110" cy="-6" r="3" fill="#1B2232" opacity=".4"/><circle cx="-110" cy="8" r="3" fill="#1B2232" opacity=".4"/>
  <path d="M20 -27 C42 -54 102 -48 130 -18 L28 -15 Z" fill="#9EE7FF" stroke="#1B2232" stroke-width="3"/>
  <path d="M46 -32 C60 -43 84 -42 98 -33" stroke="#fff" stroke-width="4" fill="none" opacity=".75" stroke-linecap="round"/>
  <text x="-80" y="10" font-family="Baloo 2, sans-serif" font-weight="800" font-size="26" fill="#fff" opacity=".85">L-1</text>`;
const ghost = s => `<g class="ghost">${s}</g>`;
function shipSVG(installed = []){
  const part = k => `<g id="p-${k}" class="part ${installed.includes(k) ? 'on' : ''}">${SHIP_PARTS[k]}</g>`;
  return `<g class="ship-ghosts">${ghost(SHIP_PARTS.rocket)}${ghost(SHIP_PARTS.wing)}${ghost(SHIP_PARTS.laser)}${ghost('<circle cx="178" cy="0" r="9"/>')}</g>
    ${part('rocket')}<g id="p-flame" class="flame-big"><path d="M-222 -16 Q-300 0 -222 16 Z" fill="#FF8A1F"/><path d="M-222 -9 Q-262 0 -222 9 Z" fill="#FFE066"/></g>
    ${part('wing')}${part('laser')}<g id="p-body">${SHIP_BODY}</g>${part('light')}`;
}

const DEFS = `<defs>
  <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1730"/><stop offset="1" stop-color="#1D2D55"/></linearGradient>
  <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26304A"/><stop offset="1" stop-color="#0D1220"/></linearGradient>
  <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFF7C2"/><stop offset="1" stop-color="#FFF7C2" stop-opacity="0"/></linearGradient>
  <radialGradient id="pad"><stop offset="0" stop-color="#5FD3F3" stop-opacity=".55"/><stop offset="1" stop-color="#5FD3F3" stop-opacity="0"/></radialGradient>
  <radialGradient id="redglow"><stop offset="0" stop-color="#FF3B3B" stop-opacity=".8"/><stop offset="1" stop-color="#FF3B3B" stop-opacity="0"/></radialGradient>
  <radialGradient id="planet" cx=".35" cy=".35"><stop offset="0" stop-color="#FFB86B"/><stop offset="1" stop-color="#C2410C"/></radialGradient>
  <linearGradient id="space" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050816"/><stop offset="1" stop-color="#1A1240"/></linearGradient>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#081634"/><stop offset="1" stop-color="#1D4384"/></linearGradient>
  <radialGradient id="flood"><stop offset="0" stop-color="#FFFBE0" stop-opacity=".9"/><stop offset="1" stop-color="#FFFBE0" stop-opacity="0"/></radialGradient>
  <radialGradient id="gold" cx=".35" cy=".3"><stop offset="0" stop-color="#FFF1A6"/><stop offset=".6" stop-color="#F5B700"/><stop offset="1" stop-color="#B07800"/></radialGradient>
</defs>`;

function stars(n, seed, w = 800, h = 450){
  const r = rng(seed); let s = '';
  for (let i = 0; i < n; i++) s += `<circle cx="${(r() * w).toFixed(1)}" cy="${(r() * h).toFixed(1)}" r="${(r() * 1.6 + .4).toFixed(2)}" fill="#fff" opacity="${(r() * .6 + .4).toFixed(2)}"/>`;
  return s;
}

ART.hangar = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <rect width="800" height="450" fill="url(#wall)"/>
  <g stroke="#2A3C68" stroke-width="3">${[90, 180, 270, 380].map(x => `<line x1="${x}" y1="0" x2="${x}" y2="300"/>`).join('')}</g>
  <g><rect x="420" y="34" width="350" height="160" rx="18" fill="#04070F" stroke="#3A4B73" stroke-width="10"/>
    <clipPath id="win"><rect x="425" y="39" width="340" height="150" rx="14"/></clipPath>
    <g clip-path="url(#win)">${stars(70, 7, 800, 200)}<circle cx="700" cy="120" r="44" fill="url(#planet)"/>
      <ellipse cx="700" cy="120" rx="74" ry="14" fill="none" stroke="#FFD9A8" stroke-width="5" opacity=".8" transform="rotate(-16 700 120)"/></g>
    <line x1="595" y1="34" x2="595" y2="194" stroke="#3A4B73" stroke-width="8"/></g>
  <g class="alarm"><circle cx="300" cy="40" r="70" fill="url(#redglow)"/><rect x="286" y="20" width="28" height="22" rx="6" fill="#FF3B3B"/></g>
  <polygon points="0,300 800,300 800,450 0,450" fill="url(#floor)"/>
  <g stroke="#3A4766" stroke-width="2">${[-400, -200, 0, 200, 400, 600, 800, 1000, 1200].map(x => `<line x1="${400 + (x - 400) * .35}" y1="300" x2="${x}" y2="450"/>`).join('')}
    <line x1="0" y1="340" x2="800" y2="340"/><line x1="0" y1="395" x2="800" y2="395"/></g>
  <g>${Array.from({length: 20}, (_, i) => `<polygon points="${i * 42},296 ${i * 42 + 21},296 ${i * 42 + 9},306 ${i * 42 - 12},306" fill="#F5B700"/>`).join('')}</g>
  <ellipse cx="450" cy="370" rx="250" ry="34" fill="url(#pad)"/>
  <g id="holo" class="holo"><rect x="24" y="30" width="190" height="150" rx="14" fill="#5FD3F3" opacity=".14" stroke="#5FD3F3" stroke-width="3"/>
    <g transform="translate(64 44) scale(1.1)" opacity=".92">${ART.nova.replace('<svg viewBox="0 0 100 100" aria-hidden="true">', '').replace('</svg>', '')}</g>
    <text x="119" y="170" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="15" fill="#5FD3F3" letter-spacing="1.5">CAPITÃ NOVA</text></g>
  <g id="ship" class="ship" transform="translate(450 270) scale(.78)">${shipSVG()}</g>
  <g class="bip-float" transform="translate(70 250)"><g transform="scale(1.2)">${ART.bip.replace(/<svg[^>]*>/, '').replace('</svg>', '')}</g></g>
</svg>`;

ART.drone = `<g class="drone-art">
  <path d="M0 -46 L10 -30 L-10 -30 Z M0 46 L10 30 L-10 30 Z M-46 0 L-30 10 L-30 -10 Z M46 0 L30 10 L30 -10 Z" fill="#8E4DFF"/>
  <circle r="34" fill="#2A1546" stroke="#8E4DFF" stroke-width="5"/>
  <circle r="22" fill="url(#redglow)"/><circle r="12" fill="#FF3B3B"/><circle r="5" fill="#FFE0E0"/>
  <path d="M-16 -26 L0 -16 L16 -26" stroke="#8E4DFF" stroke-width="4" fill="none"/></g>`;

ART.space = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <rect width="800" height="450" fill="url(#space)"/>
  <g class="stars-far"><g>${stars(90, 3)}</g><g transform="translate(800 0)">${stars(90, 3)}</g></g>
  <circle cx="640" cy="90" r="60" fill="url(#planet)" opacity=".9"/>
  <g class="stars-near"><g>${stars(40, 11)}</g><g transform="translate(800 0)">${stars(40, 11)}</g></g>
  <g id="laserbeam" class="laserbeam"><line x1="0" y1="0" x2="0" y2="0" stroke="#FF5252" stroke-width="8" stroke-linecap="round"/><line x1="0" y1="0" x2="0" y2="0" stroke="#FFE0E0" stroke-width="3" stroke-linecap="round"/></g>
  <g id="drone" class="drone" transform="translate(900 140)">${ART.drone}</g>
  <g id="boom" class="boom" transform="translate(-200 -200)">${Array.from({length: 10}, (_, i) => `<circle class="spark" r="${8 + (i % 3) * 5}" fill="${['#FFE066', '#FF8A1F', '#FF4D4D'][i % 3]}" style="--a:${i * 36}deg"/>`).join('')}</g>
  <g id="fship" class="fship" transform="translate(170 225) scale(.45)">${shipSVG(['rocket', 'wing', 'laser', 'light'])}</g>
</svg>`;

// ---------------- Henrique: futebol ----------------
const SHIRT = `<path d="M-40 -52 L-14 -62 Q0 -50 14 -62 L40 -52 L62 -26 L44 -12 L37 -24 L37 52 L-37 52 L-37 -24 L-44 -12 L-62 -26 Z" fill="var(--shirt)" stroke="#11151F" stroke-width="3"/>
  <path d="M-14 -62 Q0 -50 14 -62" fill="none" stroke="#fff" stroke-width="4"/>
  <path d="M-37 30 h74" stroke="#fff" stroke-width="5" opacity=".6"/>
  <text x="0" y="16" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="44" fill="#fff">10</text>`;

ART.locker = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <rect width="800" height="450" fill="#1F3B57"/>
  <g>${Array.from({length: 9}, (_, i) => `<g transform="translate(${i * 92 - 10} 40)"><rect width="84" height="250" rx="6" fill="#2E5A82" stroke="#16324C" stroke-width="4"/>
    <path d="M18 24 h48 M18 34 h48 M18 44 h48" stroke="#16324C" stroke-width="4"/><circle cx="70" cy="130" r="5" fill="#C9D1DE"/></g>`).join('')}</g>
  <rect x="0" y="290" width="800" height="160" fill="#8B5E3C"/>
  <g stroke="#6F4A2E" stroke-width="3">${[320, 350, 380, 410, 440].map(y => `<line x1="0" y1="${y}" x2="800" y2="${y}"/>`).join('')}</g>
  <rect x="120" y="318" width="560" height="22" rx="6" fill="#C98A4B" stroke="#6F4A2E" stroke-width="3"/>
  <rect x="150" y="340" width="14" height="50" fill="#6F4A2E"/><rect x="636" y="340" width="14" height="50" fill="#6F4A2E"/>
  <g transform="translate(400 22)"><rect x="-130" y="0" width="260" height="44" rx="10" fill="#FFD23F" stroke="#B98900" stroke-width="4"/>
    <text x="0" y="33" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="30" fill="#17233A">GRANDE FINAL</text></g>
  <g transform="translate(330 170)"><path d="M-20 -78 Q0 -100 20 -78" fill="none" stroke="#C9D1DE" stroke-width="5"/><line x1="0" y1="-98" x2="0" y2="-110" stroke="#C9D1DE" stroke-width="5"/>
    <g id="shirt" class="shirt-pop">${SHIRT}</g></g>
  <g id="coachbig" class="coachbig" transform="translate(530 120) scale(1.9)">${ART.coach.replace(/<svg[^>]*>/, '').replace('</svg>', '').replace('<circle cx="50" cy="50" r="50" fill="#FFC93C"/>', '')}</g>
</svg>`;

function crowd(){
  const r = rng(42), cols = ['#FFD23F', '#E5484D', '#2F7CF6', '#FFFFFF', '#2DBE6C', '#FF8A1F', '#FFD23F'];
  let s = '';
  for (let y = 108; y < 226; y += 10) { const inset = (226 - y) * .5;
    for (let x = inset; x < 800 - inset; x += 11) s += `<circle cx="${(x + r() * 4).toFixed(1)}" cy="${(y + r() * 3).toFixed(1)}" r="4.2" fill="${cols[Math.floor(r() * cols.length)]}"/>`; }
  return s;
}

const KEEPER = `<g class="keeper-body">
  <rect x="-13" y="-6" width="11" height="34" rx="4" fill="#1B2232"/><rect x="2" y="-6" width="11" height="34" rx="4" fill="#1B2232"/>
  <path d="M-24 -52 L24 -52 L26 -4 L-26 -4 Z" fill="#4B5563" stroke="#11151F" stroke-width="2.5"/>
  <path d="M-8 -36 L6 -46 L4 -30 Z" fill="#9CA3AF"/>
  <path d="M-24 -48 L-48 -78 M24 -48 L48 -78" stroke="#4B5563" stroke-width="11" stroke-linecap="round"/>
  <circle cx="-50" cy="-82" r="9" fill="#FF8A1F"/><circle cx="50" cy="-82" r="9" fill="#FF8A1F"/>
  <circle cx="0" cy="-66" r="14" fill="#C68B59"/><path d="M-14 -70 C-12 -86 12 -86 14 -70 C8 -76 -8 -76 -14 -70 Z" fill="#1B1B1B"/>
  <circle cx="-5" cy="-66" r="1.8" fill="#111"/><circle cx="5" cy="-66" r="1.8" fill="#111"/></g>`;

const BALL = `<circle r="16" fill="#fff" stroke="#11151F" stroke-width="2.5"/>
  <path d="M0 -6 L6 -2 L4 5 L-4 5 L-6 -2 Z" fill="#11151F"/>
  <path d="M0 -6 L0 -15 M6 -2 L14 -6 M4 5 L9 13 M-4 5 L-9 13 M-6 -2 L-14 -6" stroke="#11151F" stroke-width="2"/>`;

const PLAYER = `<g class="player-body">
  <rect x="-15" y="40" width="12" height="42" rx="5" fill="#E9B48A"/><rect x="3" y="40" width="12" height="42" rx="5" fill="#E9B48A"/>
  <rect x="-16" y="62" width="14" height="22" rx="4" fill="#fff"/><rect x="2" y="62" width="14" height="22" rx="4" fill="#fff"/>
  <path d="M-19 84 h17 v8 h-21 Z M2 84 h17 l4 8 h-21 Z" fill="#11151F"/>
  <path d="M-24 20 L24 20 L22 46 L-22 46 Z" fill="#11151F"/>
  <g transform="scale(.42) translate(0 -14)">${SHIRT.replace('>10<', '>10<')}</g>
  <text x="0" y="-26" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="9" fill="#fff">HENRIQUE</text>
  <circle cx="0" cy="-46" r="15" fill="#E9B48A"/><path d="M-15 -46 C-16 -66 16 -66 15 -46 C12 -52 -12 -52 -15 -46 Z" fill="#5A3A22"/>
  <path d="M-15 -48 C-15 -40 15 -40 15 -48 C14 -60 -14 -60 -15 -48 Z" fill="#5A3A22"/></g>`;

ART.stadium = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <rect width="800" height="450" fill="url(#sky)"/>
  ${stars(25, 5, 800, 100)}
  <g><circle cx="70" cy="40" r="110" fill="url(#flood)"/><circle cx="730" cy="40" r="110" fill="url(#flood)"/>
    <rect x="40" y="18" width="60" height="30" rx="5" fill="#E8EEF5"/><rect x="700" y="18" width="60" height="30" rx="5" fill="#E8EEF5"/></g>
  <polygon points="0,100 800,100 800,232 0,232" fill="#1A2238"/>
  <g id="crowd" class="crowd">${crowd()}</g>
  <g><rect x="0" y="230" width="800" height="20" fill="#0E1322"/>
    ${['#E5484D', '#2F7CF6', '#FFD23F', '#2DBE6C'].map((c, i) => `<rect x="${i * 200 + 10}" y="232" width="180" height="16" rx="3" fill="${c}"/><text x="${i * 200 + 100}" y="245" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="13" fill="#fff">MISSÃO INGLÊS</text>`).join('')}</g>
  <rect x="0" y="250" width="800" height="200" fill="#2A9A4C"/>
  <g fill="#248C43">${[0, 2, 4, 6].map(i => `<polygon points="${i * 115 - 60},250 ${(i + 1) * 115 - 60},250 ${(i + 1) * 160 - 240},450 ${i * 160 - 240},450"/>`).join('')}</g>
  <g fill="none" stroke="#fff" stroke-width="4" opacity=".85"><polygon points="170,262 630,262 720,420 80,420"/><polygon points="290,262 510,262 535,310 265,310"/></g>
  <ellipse cx="400" cy="395" rx="5" ry="3" fill="#fff"/>
  <g id="goal"><g class="net" stroke="#fff" stroke-width="1.5" opacity=".55">
      ${Array.from({length: 15}, (_, i) => `<line x1="${262 + i * 20}" y1="152" x2="${270 + i * 19}" y2="262"/>`).join('')}
      ${Array.from({length: 6}, (_, i) => `<line x1="258" y1="${158 + i * 20}" x2="542" y2="${158 + i * 20}"/>`).join('')}</g>
    <path d="M254 264 L254 148 L546 148 L546 264" fill="none" stroke="#fff" stroke-width="9" stroke-linejoin="round"/></g>
  <g id="keeper" class="keeper" transform="translate(400 258)">${KEEPER}</g>
  <g id="targets" class="targets">${[['left', 305, 185], ['mid', 400, 200], ['right', 495, 185]].map(([k, x, y]) => `<g class="target" data-t="${k}" transform="translate(${x} ${y})"><circle r="30" fill="#FFD23F" opacity=".35"/><circle r="30" fill="none" stroke="#FFD23F" stroke-width="5"/><circle r="8" fill="#FFD23F"/></g>`).join('')}</g>
  <g id="ball" class="ball" transform="translate(400 392)"><g class="ball-spin">${BALL}</g></g>
  <g id="player" class="player" transform="translate(330 330)">${PLAYER}</g>
</svg>`;

ART.trophy = `<svg viewBox="0 0 120 140" aria-hidden="true">
  <path d="M26 20 C-4 20 4 62 34 60 M94 20 C124 20 116 62 86 60" fill="none" stroke="#F5B700" stroke-width="8"/>
  <path d="M24 12 H96 V40 C96 70 78 84 60 84 C42 84 24 70 24 40 Z" fill="url(#gold)" stroke="#9A6A00" stroke-width="3"/>
  <rect x="52" y="84" width="16" height="22" fill="#D99A00"/>
  <rect x="34" y="106" width="52" height="12" rx="3" fill="#F5B700" stroke="#9A6A00" stroke-width="3"/>
  <rect x="26" y="118" width="68" height="16" rx="3" fill="#5A3A22"/>
  <path d="M60 28 l5 10 11 1.6 -8 7.6 2 11 -10 -5.4 -10 5.4 2 -11 -8 -7.6 11 -1.6 Z" fill="#FFF1A6"/>
  <defs><radialGradient id="gold" cx=".35" cy=".3"><stop offset="0" stop-color="#FFF1A6"/><stop offset=".6" stop-color="#F5B700"/><stop offset="1" stop-color="#B07800"/></radialGradient></defs>
</svg>`;

ART.wings = `<svg viewBox="0 0 160 100" aria-hidden="true">
  <path d="M80 30 C60 10 20 8 4 18 C18 22 26 30 30 36 C18 36 10 42 6 50 C24 46 40 50 50 56 C42 60 38 66 36 74 C54 66 70 64 80 66 Z" fill="#FFD23F" stroke="#B98900" stroke-width="3"/>
  <path d="M80 30 C100 10 140 8 156 18 C142 22 134 30 130 36 C142 36 150 42 154 50 C136 46 120 50 110 56 C118 60 122 66 124 74 C106 66 90 64 80 66 Z" fill="#FFD23F" stroke="#B98900" stroke-width="3"/>
  <circle cx="80" cy="48" r="20" fill="#5B45E0" stroke="#FFD23F" stroke-width="5"/>
  <path d="M80 36 l4 8 9 1.3 -6.5 6.3 1.5 9 -8 -4.3 -8 4.3 1.5 -9 -6.5 -6.3 9 -1.3 Z" fill="#FFF1A6"/>
</svg>`;
