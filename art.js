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
  <rect x="15" y="18" width="70" height="60" rx="20" style="fill:var(--bip,#3EC6E0)" stroke="#16485A" stroke-width="3"/>
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

ART.vortex = `<svg viewBox="0 0 100 100" aria-hidden="true">
  <circle cx="50" cy="50" r="50" fill="#2A0E3F"/>
  <path d="M8 100 C12 70 88 70 92 100 Z" fill="#4B1670"/>
  <path d="M22 56 C20 20 80 20 78 56 L80 86 L62 77 L50 90 L38 77 L20 86 Z" fill="#141018" stroke="#8E4DFF" stroke-width="3"/>
  <path d="M50 14 L55 40 L45 40 Z" fill="#8E4DFF"/>
  <path d="M29 49 L46 54 L44 61 L29 57 Z M71 49 L54 54 L56 61 L71 57 Z" fill="#FF3B3B" class="blink"/>
  <path d="M41 69 h18 M42 74 h16 M44 79 h12" stroke="#8E4DFF" stroke-width="2.5"/>
</svg>`;

ART.tony = `<svg viewBox="0 0 100 100" aria-hidden="true">
  <circle cx="50" cy="50" r="50" fill="#1F2937"/>
  <path d="M8 100 C10 70 90 70 92 100 Z" fill="#4B5563"/>
  <path d="M42 96 L54 76 L58 96 Z" fill="#9CA3AF"/>
  <rect x="41" y="64" width="18" height="14" fill="#B97A4B"/>
  <ellipse cx="50" cy="50" rx="23" ry="24" fill="#C68B59"/>
  <rect x="27" y="22" width="46" height="15" rx="5" fill="#1B1B1B"/>
  <path d="M34 42 L46 47 M66 42 L54 47" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"/>
  <circle cx="41" cy="52" r="2.8" fill="#111"/><circle cx="59" cy="52" r="2.8" fill="#111"/>
  <path d="M40 67 q10 -6 20 0" stroke="#5A2A1A" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="27" cy="54" rx="4" ry="6" fill="#B97A4B"/><ellipse cx="73" cy="54" rx="4" ry="6" fill="#B97A4B"/>
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
  <g id="holov" class="holo holov"><rect x="24" y="30" width="190" height="150" rx="14" fill="#FF3B3B" opacity=".14" stroke="#FF3B3B" stroke-width="3"/>
    <g transform="translate(64 44) scale(1.1)" opacity=".92">${ART.vortex.replace(/<svg[^>]*>/, '').replace('</svg>', '')}</g>
    <text x="119" y="170" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="15" fill="#FF6B6B" letter-spacing="1.5">LORDE VORTEX</text></g>
  <g id="ship" class="ship" transform="translate(450 270) scale(.78)">${shipSVG()}</g>
  <g id="bipf" class="bip-float" transform="translate(70 250)"><g transform="scale(1.2)">${ART.bip.replace(/<svg[^>]*>/, '').replace('</svg>', '')}</g></g>
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
  <polygon id="tbeam" class="tbeam" points="0,0 0,0 0,0" fill="#B57BFF"/>
  <g id="mother" class="mother" transform="translate(1100 80)"><g class="mother-art">
    <ellipse cx="0" cy="0" rx="150" ry="40" fill="#2A1546" stroke="#8E4DFF" stroke-width="6"/>
    <ellipse cx="0" cy="-26" rx="62" ry="38" fill="#4B1670" stroke="#8E4DFF" stroke-width="5"/>
    <circle cx="0" cy="-28" r="15" fill="#FF3B3B" class="blink"/><circle cx="0" cy="-28" r="6" fill="#FFE0E0"/>
    ${[-110, -66, -22, 22, 66, 110].map(x => `<circle cx="${x}" cy="10" r="7" fill="#FFD23F" class="blink"/>`).join('')}</g></g>
  <g id="rock" class="rock" transform="translate(1000 225)"><g class="rock-art">
    <path d="M-40 -10 L-22 -36 L10 -40 L36 -20 L40 12 L20 36 L-14 38 L-38 20 Z" fill="#6B5B4E" stroke="#3A2F28" stroke-width="4"/>
    <circle cx="-10" cy="-8" r="9" fill="#54473D"/><circle cx="14" cy="14" r="6" fill="#54473D"/><circle cx="-18" cy="18" r="4" fill="#54473D"/></g></g>
  <g id="drone" class="drone" transform="translate(900 140)">${ART.drone}</g>
  <g id="drone2" class="drone" transform="translate(900 140)">${ART.drone}</g>
  <g id="drone3" class="drone" transform="translate(900 140)">${ART.drone}</g>
  <g id="boom" class="boom" transform="translate(-200 -200)">${Array.from({length: 10}, (_, i) => `<circle class="spark" r="${8 + (i % 3) * 5}" fill="${['#FFE066', '#FF8A1F', '#FF4D4D'][i % 3]}" style="--a:${i * 36}deg"/>`).join('')}</g>
  <g id="fship" class="fship" transform="translate(170 225) scale(.45)"><g class="fship-in">${shipSVG(['rocket', 'wing', 'laser', 'light'])}</g></g>
</svg>`;

// ---------------- Henrique: futebol ----------------
const BALL = `<circle r="16" fill="#fff" stroke="#11151F" stroke-width="2.5"/>
  <path d="M0 -6 L6 -2 L4 5 L-4 5 L-6 -2 Z" fill="#11151F"/>
  <path d="M0 -6 L0 -15 M6 -2 L14 -6 M4 5 L9 13 M-4 5 L-9 13 M-6 -2 L-14 -6" stroke="#11151F" stroke-width="2"/>`;

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
  <g transform="translate(205 306)"><g id="shoes" class="item">
    ${[-26, 22].map(x => `<g transform="translate(${x} 0)"><path d="M-24 0 L-24 -18 Q-16 -26 -4 -20 L8 -10 Q22 -8 24 0 L24 4 L-24 4 Z" fill="var(--shirt)" stroke="#11151F" stroke-width="3"/>
      <path d="M-14 -16 l8 4 M-10 -20 l8 4" stroke="#fff" stroke-width="2.5"/><path d="M-20 4 v5 M-8 4 v5 M6 4 v5 M18 4 v5" stroke="#11151F" stroke-width="4"/></g>`).join('')}</g></g>
  <g transform="translate(470 296) scale(1.4)"><g id="lball" class="item">${BALL}</g></g>
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

const playerSVG = (name, shirt) => PLAYER.replace('HENRIQUE', name).replace('var(--shirt)', shirt);
const PLAYER = `<g class="player-body">
  <rect x="-15" y="40" width="12" height="42" rx="5" fill="#E9B48A"/><rect x="3" y="40" width="12" height="42" rx="5" fill="#E9B48A"/>
  <rect x="-16" y="62" width="14" height="22" rx="4" fill="#fff"/><rect x="2" y="62" width="14" height="22" rx="4" fill="#fff"/>
  <path d="M-19 84 h17 v8 h-21 Z M2 84 h17 l4 8 h-21 Z" fill="#11151F"/>
  <path d="M-24 20 L24 20 L22 46 L-22 46 Z" fill="#11151F"/>
  <g transform="scale(.42) translate(0 -14)">${SHIRT.replace('>10<', '>10<')}</g>
  <text x="0" y="-26" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="9" fill="#fff">HENRIQUE</text>
  <circle cx="0" cy="-46" r="15" fill="#E9B48A"/><path d="M-15 -46 C-16 -66 16 -66 15 -46 C12 -52 -12 -52 -15 -46 Z" fill="#5A3A22"/>
  <path d="M-15 -48 C-15 -40 15 -40 15 -48 C14 -60 -14 -60 -15 -48 Z" fill="#5A3A22"/></g>`;

ART.stadium = (mates = false) => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
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
  <g id="targets" class="targets">${[['red', 305, 185, '#E5484D'], ['yellow', 400, 200, '#F5C400'], ['blue', 495, 185, '#2F7CF6']].map(([k, x, y, c]) => `<g class="target" data-t="${k}" transform="translate(${x} ${y})"><circle r="30" fill="${c}" opacity=".45"/><circle r="30" fill="none" stroke="${c}" stroke-width="6"/><circle r="9" fill="#fff"/></g>`).join('')}</g>
  ${mates ? `<g id="defender" class="player" transform="translate(-200 330)">${playerSVG('TUBARÕES', '#7C3AED')}</g>
  <g id="mate" class="player" transform="translate(-200 330)">${playerSVG('LUCAS', 'var(--shirt)')}</g>` : ''}
  <g id="ball" class="ball" transform="translate(400 392)"><g class="ball-spin">${BALL}</g></g>
  <g id="player" class="player" transform="translate(330 330)">${PLAYER}</g>
</svg>`;

// ---------------- Lucas, Missão 2: planeta roxo ----------------
// Lucas de corpo inteiro (pés no 0,0, olhando para a direita), com espada e escudo que aparecem depois
const HERO = `<g class="hero-body">
  <g id="hshield" class="hshield" transform="translate(-34 -100)"><g class="shield-in">
    <ellipse rx="30" ry="40" fill="#5FD3F3" opacity=".35" stroke="#9EF0FF" stroke-width="5"/>
    <ellipse rx="16" ry="24" fill="none" stroke="#E6FDFF" stroke-width="3" opacity=".8"/></g></g>
  <rect x="-17" y="-62" width="14" height="58" rx="6" fill="#C65A12"/><rect x="3" y="-62" width="14" height="58" rx="6" fill="#C65A12"/>
  <path d="M-21 -8 h20 v9 h-24 Z M2 -8 h20 l5 9 h-25 Z" fill="#2B2F3A"/>
  <path d="M-27 -122 L27 -122 L25 -58 L-25 -58 Z" fill="#F07A22" stroke="#11151F" stroke-width="2.5"/>
  <rect x="-26" y="-70" width="52" height="9" fill="#2B2F3A"/><rect x="-6" y="-71" width="12" height="11" rx="2" fill="#FFD23F"/>
  <path d="M-10 -112 L0 -100 L10 -112" fill="none" stroke="#FFE3C4" stroke-width="3"/>
  <path d="M12 -106 l2 4 4.5.5 -3.3 3 1 4.4 -4.2 -2.3 -4.2 2.3 1 -4.4 -3.3 -3 4.5 -.5 Z" fill="#FFD23F"/>
  <path d="M-26 -116 Q-44 -96 -36 -88" fill="none" stroke="#F07A22" stroke-width="12" stroke-linecap="round"/>
  <g id="hsaber" class="hsaber" transform="translate(30 -98)"><g class="saber-in">
    <path d="M-6 -16 Q8 -10 4 6" fill="none" stroke="#F07A22" stroke-width="12" stroke-linecap="round"/>
    <g class="blade"><rect x="-8" y="-108" width="17" height="104" rx="8.5" style="fill:var(--saber)" opacity=".45" class="glow"/>
      <rect x="-4" y="-102" width="9" height="94" rx="4.5" style="fill:var(--saber)"/>
      <rect x="-1" y="-98" width="3" height="84" rx="1.5" fill="#fff" opacity=".75"/></g>
    <rect x="-5" y="-10" width="11" height="24" rx="3" fill="#9AA3B5" stroke="#2B2F3A" stroke-width="2"/></g></g>
  <circle cx="0" cy="-146" r="24" fill="#E9B48A"/>
  <path d="M-25 -148 C-28 -176 26 -178 25 -150 C18 -160 -8 -164 -25 -148 Z" fill="#5A3A22"/>
  <circle cx="6" cy="-146" r="3" fill="#1A1A1A"/><circle cx="17" cy="-146" r="3" fill="#1A1A1A"/>
  <path d="M5 -134 q7 5 13 0" stroke="#8A3B2A" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <text x="0" y="-80" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="11" fill="#fff">LUCAS</text></g>`;

// Lorde Vortex de corpo inteiro (pés no 0,0, olhando para a esquerda)
const VORTEX = `<g class="vortex-body">
  <path d="M-40 -176 L40 -176 L66 0 L-66 0 Z" fill="#4B1670" stroke="#8E4DFF" stroke-width="3"/>
  <rect x="-20" y="-64" width="16" height="62" rx="5" fill="#141018"/><rect x="4" y="-64" width="16" height="62" rx="5" fill="#141018"/>
  <rect x="-30" y="-178" width="60" height="118" rx="12" fill="#141018" stroke="#8E4DFF" stroke-width="3"/>
  <path d="M-16 -150 h32 M-14 -140 h28 M-12 -130 h24" stroke="#8E4DFF" stroke-width="3"/>
  <circle cx="0" cy="-108" r="8" fill="#FF3B3B" class="blink"/>
  <g id="vsaber" class="vsaber" transform="translate(-34 -120)"><g class="saber-in">
    <path d="M30 4 Q10 6 2 -4" fill="none" stroke="#141018" stroke-width="13" stroke-linecap="round"/>
    <rect x="-4" y="-100" width="9" height="94" rx="4.5" fill="#FF3B3B" opacity=".6" class="glow"/>
    <rect x="-2" y="-96" width="5" height="88" rx="2.5" fill="#FFE0E0"/>
    <rect x="-5" y="-8" width="11" height="22" rx="3" fill="#3A3F4B"/></g></g>
  <path d="M30 -166 Q52 -130 40 -112" fill="none" stroke="#141018" stroke-width="13" stroke-linecap="round"/>
  <path d="M-26 -186 C-28 -232 28 -232 26 -186 L28 -168 L-28 -168 Z" fill="#141018" stroke="#8E4DFF" stroke-width="3"/>
  <path d="M0 -236 L5 -214 L-5 -214 Z" fill="#8E4DFF"/>
  <path d="M-20 -200 L-4 -196 L-6 -190 L-20 -194 Z M12 -198 L22 -199 L21 -193 L11 -192 Z" fill="#FF3B3B" class="blink"/></g>`;

const CRYSTAL = `<g class="crystal-art"><ellipse cx="0" cy="0" rx="34" ry="34" fill="#7DF9FF" opacity=".0" class="aura"/>
  <path d="M0 -30 L18 -6 L10 26 L-10 26 L-18 -6 Z" class="gem" stroke="#11151F" stroke-width="2.5"/>
  <path d="M0 -30 L4 -6 L0 26 M-18 -6 H18" stroke="#fff" stroke-width="2" opacity=".5" fill="none"/></g>`;

ART.planet = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <defs><linearGradient id="psky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#12062B"/><stop offset="1" stop-color="#4A1D6E"/></linearGradient></defs>
  <rect width="800" height="450" fill="url(#psky)"/>
  ${stars(70, 21, 800, 260)}
  <circle cx="660" cy="80" r="42" fill="#C9B6FF" opacity=".85"/><circle cx="140" cy="60" r="18" fill="#FFB86B" opacity=".8"/>
  <path d="M0 300 Q120 250 260 290 T520 280 T800 290 V450 H0 Z" fill="#3B1D5A"/>
  <path d="M0 340 Q200 320 400 345 T800 335 V450 H0 Z" fill="#2A1242"/>
  <g fill="#1B0B2E">${[[90, 352, 22], [520, 362, 16], [740, 350, 26], [300, 372, 12]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r * 1.6}" ry="${r * .7}"/>`).join('')}</g>
  <g transform="translate(110 300) scale(.28)"><g>${shipSVG(['rocket', 'wing', 'laser', 'light'])}</g></g>
  <g id="bolt" class="bolt" transform="translate(900 300)"><circle r="16" fill="#B57BFF" opacity=".5"/><circle r="9" fill="#F3E8FF"/></g>
  <g id="vortexfig" class="fig" transform="translate(1000 400)">${VORTEX}</g>
  <g id="crystal" class="crystal dark" transform="translate(1000 280)">${CRYSTAL}</g>
  <g id="hero" class="fig" transform="translate(-150 400)">${HERO}</g>
  <g id="drone" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="drone2" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="drone3" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="boom" class="boom" transform="translate(-200 -200)">${Array.from({length: 10}, (_, i) => `<circle class="spark" r="${8 + (i % 3) * 5}" fill="${['#FFE066', '#FF8A1F', '#FF4D4D'][i % 3]}" style="--a:${i * 36}deg"/>`).join('')}</g>
</svg>`;

ART.saberBadge = `<svg viewBox="0 0 140 140" aria-hidden="true">
  <circle cx="70" cy="70" r="62" fill="#1D2B53" stroke="#FFD23F" stroke-width="6"/>
  <g transform="rotate(35 70 70)"><rect x="66" y="14" width="9" height="80" rx="4.5" fill="#5FD3F3"/><rect x="68" y="18" width="5" height="74" rx="2.5" fill="#fff"/><rect x="64" y="92" width="13" height="26" rx="3" fill="#9AA3B5" stroke="#2B2F3A" stroke-width="2"/></g>
  <g transform="rotate(-35 70 70)"><rect x="66" y="14" width="9" height="80" rx="4.5" fill="#FF5A5F"/><rect x="68" y="18" width="5" height="74" rx="2.5" fill="#fff"/><rect x="64" y="92" width="13" height="26" rx="3" fill="#9AA3B5" stroke="#2B2F3A" stroke-width="2"/></g>
  <path d="M70 52 l6 12 13 2 -9.5 9 2.3 13 -11.8 -6.3 -11.8 6.3 2.3 -13 -9.5 -9 13 -2 Z" fill="#FFD23F" stroke="#B98900" stroke-width="2"/>
</svg>`;

ART.medal = `<svg viewBox="0 0 140 150" aria-hidden="true">
  <path d="M40 0 L62 60 L78 60 L56 0 Z" fill="#2F7CF6"/><path d="M100 0 L78 60 L62 60 L84 0 Z" fill="#E5484D"/>
  <circle cx="70" cy="98" r="46" fill="url(#gold2)" stroke="#9A6A00" stroke-width="4"/>
  <circle cx="70" cy="98" r="33" fill="none" stroke="#FFF1A6" stroke-width="3" opacity=".7"/>
  <g transform="translate(70 98) scale(1.5)">${BALL}</g>
  <defs><radialGradient id="gold2" cx=".35" cy=".3"><stop offset="0" stop-color="#FFF1A6"/><stop offset=".6" stop-color="#F5B700"/><stop offset="1" stop-color="#B07800"/></radialGradient></defs>
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

// ---------------- Lucas, Missão 3: o castelo do Vortex ----------------
const BIP_INNER = () => ART.bip.replace(/<svg[^>]*>/, '').replace('</svg>', '');
const torch = (x, y, on = '') => `<g transform="translate(${x} ${y})"><rect x="-5" y="0" width="10" height="34" fill="#5A3A22"/><path d="M-12 0 h24 l-4 8 h-16 Z" fill="#7A7F8C"/>
  <g class="tflame ${on}"><circle cy="-14" r="30" fill="url(#flood)" opacity=".6"/><path d="M0 -32 Q13 -12 6 0 H-6 Q-13 -12 0 -32 Z" fill="#FF8A1F" class="flame"/><path d="M0 -20 Q6 -8 3 0 H-3 Q-6 -8 0 -20 Z" fill="#FFE066" class="flame"/></g></g>`;

ART.castle = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <defs><linearGradient id="nsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#060A1F"/><stop offset="1" stop-color="#2A1A55"/></linearGradient></defs>
  <rect width="800" height="450" fill="url(#nsky)"/>
  ${stars(80, 31, 800, 300)}
  <circle cx="680" cy="80" r="50" fill="#F4F1FF"/><circle cx="664" cy="68" r="9" fill="#D9D3F0"/><circle cx="696" cy="96" r="6" fill="#D9D3F0"/>
  <path d="M0 330 Q200 312 400 330 T800 324 V450 H0 Z" fill="#3A3550"/>
  <path d="M0 380 Q220 366 420 384 T800 376 V450 H0 Z" fill="#2A2640"/>
  <g transform="translate(80 336) scale(.24)"><g>${shipSVG(['rocket', 'wing', 'laser', 'light'])}</g></g>
  <g fill="#3B2F5C" stroke="#1A1230" stroke-width="4">
    <rect x="280" y="150" width="240" height="190"/>
    ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${284 + i * 40}" y="128" width="22" height="24"/>`).join('')}
    <rect x="228" y="92" width="70" height="248"/><rect x="502" y="92" width="70" height="248"/></g>
  <path d="M220 94 L263 18 L306 94 Z M494 94 L537 18 L580 94 Z" fill="#6B2FB5" stroke="#1A1230" stroke-width="4"/>
  <line x1="537" y1="18" x2="537" y2="-10" stroke="#9AA3B5" stroke-width="3"/><path d="M537 -10 L572 0 L537 10 Z" fill="#8E4DFF"/>
  <g fill="#B57BFF" class="glow">${[[252, 130], [526, 130], [252, 210], [526, 210]].map(([x, y]) => `<path d="M${x} ${y + 26} V${y + 8} Q${x} ${y} ${x + 11} ${y} Q${x + 22} ${y} ${x + 22} ${y + 8} V${y + 26} Z"/>`).join('')}</g>
  <path d="M335 340 V250 Q335 192 400 192 Q465 192 465 250 V340 Z" fill="#1A1230"/>
  <g id="door" class="door">
    <path class="inlight" d="M340 340 V252 Q340 198 400 198 Q460 198 460 252 V340 Z" fill="#FFD27A"/>
    <g class="leaf leaf-l"><path d="M340 340 V252 Q340 198 400 198 V340 Z" fill="#7A4A26" stroke="#3A220F" stroke-width="4"/><path d="M360 206 V340 M380 199 V340" stroke="#4A2D14" stroke-width="3"/></g>
    <g class="leaf leaf-r"><path d="M460 340 V252 Q460 198 400 198 V340 Z" fill="#7A4A26" stroke="#3A220F" stroke-width="4"/><path d="M440 206 V340 M420 199 V340" stroke="#4A2D14" stroke-width="3"/></g>
    <g class="rune"><circle cx="400" cy="275" r="22" fill="#8E4DFF" opacity=".55" class="glow"/><circle cx="400" cy="275" r="12" fill="none" stroke="#E2CCFF" stroke-width="3"/><path d="M400 266 V284 M391 275 H409" stroke="#E2CCFF" stroke-width="3"/></g></g>
  <g id="hero" class="fig" transform="translate(-150 420)">${HERO}</g>
</svg>`;

ART.hall = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <rect width="800" height="450" fill="#2A2045"/>
  <g fill="none" stroke="#1C1533" stroke-width="3">${Array.from({length: 8}, (_, r) => Array.from({length: 11}, (_, c) => `<rect x="${c * 80 - (r % 2) * 40}" y="${r * 42}" width="80" height="42"/>`).join('')).join('')}</g>
  <rect y="330" width="800" height="120" fill="#17112A"/>
  <g stroke="#241B3D" stroke-width="3">${[360, 395, 430].map(y => `<line x1="0" y1="${y}" x2="800" y2="${y}"/>`).join('')}</g>
  ${[90, 325, 475, 710].map(x => torch(x, 140)).join('')}
  ${[['one', '1', 250], ['two', '2', 400], ['three', '3', 550]].map(([k, n, x]) => `<g id="d-${k}" class="hdoor" transform="translate(${x} 330)">
    <path d="M-50 0 V-120 Q-50 -162 0 -162 Q50 -162 50 -120 V0 Z" fill="#0A0614" stroke="#120C22" stroke-width="5"/>
    <text id="in-${k}" y="-50" text-anchor="middle" font-size="60"></text>
    <g class="hleaf"><path d="M-45 0 V-118 Q-45 -156 0 -156 Q45 -156 45 -118 V0 Z" fill="#6B4423" stroke="#2E1A0B" stroke-width="4"/>
      <path d="M-22 -152 V0 M0 -156 V0 M22 -152 V0" stroke="#4A2D14" stroke-width="3"/><circle cx="32" cy="-60" r="5" fill="#FFD23F"/>
      <circle cy="-118" r="21" fill="#FFD23F" stroke="#9A6A00" stroke-width="3"/>
      <text y="-108" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="28" fill="#1E1400">${n}</text></g></g>`).join('')}
  <g id="hero" class="fig" transform="translate(-150 430)">${HERO}</g>
</svg>`;

// labirinto visto de cima: 3x3 casas; a ficha do Lucas anda conforme as setas
ART.maze = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <rect width="800" height="450" fill="#120C22"/>
  <rect x="219" y="44" width="374" height="374" rx="22" fill="#1C1533" stroke="#3D3160" stroke-width="6"/>
  ${[0, 1, 2].map(r => [0, 1, 2].map(c => `<rect id="t${c}${r}" class="tile" x="${235 + c * 116}" y="${60 + r * 116}" width="110" height="110" rx="14"/>`).join('')).join('')}
  <text x="522" y="250" text-anchor="middle" font-size="58">🚪</text>
  ${torch(140, 200, 'on')}${torch(670, 200, 'on')}
  <g id="mtok" class="mtok" transform="translate(290 347)"><circle r="38" fill="#F07A22" stroke="#FFE3C4" stroke-width="5"/>
    <text y="14" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="40" fill="#fff">L</text></g>
</svg>`;

ART.throne = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}
  <defs><linearGradient id="tsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A0B2E"/><stop offset="1" stop-color="#3A1460"/></linearGradient></defs>
  <rect width="800" height="450" fill="url(#tsky)"/>
  <g fill="#2A1846" stroke="#170B29" stroke-width="4">${[40, 330, 760].map(x => `<rect x="${x - 22}" y="0" width="44" height="345"/>`).join('')}</g>
  <path d="M410 30 H490 V190 L450 168 L410 190 Z" fill="#6B2FB5" stroke="#170B29" stroke-width="4"/>
  <text x="450" y="128" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="62" fill="#E2CCFF">V</text>
  <path d="M690 345 V200 Q690 170 720 170 H770 V345 Z" fill="#4B1670" stroke="#8E4DFF" stroke-width="4"/>
  ${torch(190, 130, 'on')}${torch(560, 130, 'on')}
  <rect y="345" width="800" height="105" fill="#1B0F2E"/>
  <g stroke="#2A1846" stroke-width="3">${[375, 410].map(y => `<line x1="0" y1="${y}" x2="800" y2="${y}"/>`).join('')}</g>
  <ellipse cx="225" cy="405" rx="88" ry="26" fill="#8E4DFF" opacity=".3" class="glow"/><ellipse cx="225" cy="405" rx="76" ry="20" fill="#05020A"/>
  <line x1="640" y1="0" x2="640" y2="110" stroke="#6B6F80" stroke-width="5" stroke-dasharray="10 4"/>
  <g transform="translate(640 110)"><rect x="-58" y="0" width="116" height="124" rx="10" fill="#000" opacity=".3"/>
    <path d="M-58 0 H58 M-58 124 H58 M-58 0 V124 M58 0 V124" stroke="#9AA3B5" stroke-width="7"/></g>
  <g id="bipfree" class="bipfree" transform="translate(640 170)"><g class="bob"><g transform="scale(.8) translate(-50 -55)">${BIP_INNER()}</g></g></g>
  <g id="cagedoor" class="cagedoor" transform="translate(640 110)"><g class="cd-in">
    <path d="M-34 0 V124 M-11 0 V124 M11 0 V124 M34 0 V124" stroke="#9AA3B5" stroke-width="6"/>
    <rect x="-14" y="54" width="28" height="22" rx="4" fill="#8E4DFF" stroke="#E2CCFF" stroke-width="2"/></g></g>
  <g id="bolt" class="bolt" transform="translate(900 300)"><circle r="16" fill="#B57BFF" opacity=".5"/><circle r="9" fill="#F3E8FF"/></g>
  <g id="vortexfig" class="fig" transform="translate(1000 400)">${VORTEX}</g>
  <g id="hero" class="fig" transform="translate(-150 400)">${HERO}</g>
  <g id="drone" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="drone2" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="drone3" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="boom" class="boom" transform="translate(-200 -200)">${Array.from({length: 10}, (_, i) => `<circle class="spark" r="${8 + (i % 3) * 5}" fill="${['#FFE066', '#FF8A1F', '#FF4D4D'][i % 3]}" style="--a:${i * 36}deg"/>`).join('')}</g>
</svg>`;

ART.keyBadge = `<svg viewBox="0 0 140 140" aria-hidden="true">
  <circle cx="70" cy="70" r="62" fill="#2A1546" stroke="#FFD23F" stroke-width="6"/>
  <g transform="rotate(-40 70 70)" fill="#F5B700" stroke="#9A6A00" stroke-width="2">
    <path d="M70 18 a22 22 0 1 1 -0.1 0 Z M70 30 a10 10 0 1 0 0.1 0 Z" fill-rule="evenodd"/>
    <rect x="65" y="61" width="10" height="58"/><rect x="75" y="98" width="16" height="8"/><rect x="75" y="110" width="12" height="8"/></g>
  <path d="M104 30 l3 6 6.5 1 -4.7 4.5 1.1 6.5 -5.9 -3.1 -5.9 3.1 1.1 -6.5 -4.7 -4.5 6.5 -1 Z" fill="#FFF1A6"/>
</svg>`;

// ---------------- Lucas, Missão 4: as estrelas roubadas ----------------
// estrela de n pontas centrada em 0,0 (R = ponta, r = vão)
const starPath = (R, r, n = 5) => Array.from({length: n * 2}, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / n, d = i % 2 ? r : R;
  return `${i ? 'L' : 'M'}${(Math.cos(a) * d).toFixed(1)} ${(Math.sin(a) * d).toFixed(1)}`; }).join(' ') + ' Z';
// estrelinha com rosto (a Lumi e a família dela)
const starFace = (fill = '#FFD84D', edge = '#FFB800') => `<path d="${starPath(40, 21)}" fill="${fill}" stroke="${edge}" stroke-width="7" stroke-linejoin="round"/>
  <path d="${starPath(26, 14)}" fill="#fff" opacity=".28"/>
  <ellipse cx="-8" cy="2" rx="3.8" ry="4.8" fill="#3A2400"/><ellipse cx="8" cy="2" rx="3.8" ry="4.8" fill="#3A2400"/>
  <circle cx="-7" cy="0" r="1.4" fill="#fff"/><circle cx="9" cy="0" r="1.4" fill="#fff"/>
  <ellipse cx="-15" cy="10" rx="4" ry="2.4" fill="#FF7A96" opacity=".7"/><ellipse cx="15" cy="10" rx="4" ry="2.4" fill="#FF7A96" opacity=".7"/>
  <path d="M-5 10 q5 5 10 0" stroke="#3A2400" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
const sparkle4 = (x, y, s, fill = '#fff') => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -10 Q1.5 -1.5 10 0 Q1.5 1.5 0 10 Q-1.5 1.5 -10 0 Q-1.5 -1.5 0 -10 Z" fill="${fill}"/>`;
const LUMI = `<g class="lumi-art"><circle r="66" fill="url(#lglow)" class="lglow"/>${starFace()}
  <g class="blink">${sparkle4(34, -34, .8)}${sparkle4(-36, 26, .55)}</g></g>`;

ART.lumi = `<svg viewBox="0 0 100 100" aria-hidden="true">
  <defs><radialGradient id="lumipg"><stop offset="0" stop-color="#6B4BD8"/><stop offset="1" stop-color="#1A1240"/></radialGradient></defs>
  <circle cx="50" cy="50" r="50" fill="url(#lumipg)"/>
  <g transform="translate(50 54) scale(.95)">${starFace()}</g>${sparkle4(80, 24, .7)}${sparkle4(20, 78, .5)}
</svg>`;

const M4DEFS = `<defs>
  <radialGradient id="lglow"><stop offset="0" stop-color="#FFF6B0" stop-opacity=".9"/><stop offset=".45" stop-color="#FFD84D" stop-opacity=".35"/><stop offset="1" stop-color="#FFD84D" stop-opacity="0"/></radialGradient>
  <radialGradient id="bhglow"><stop offset=".3" stop-color="#000" stop-opacity="0"/><stop offset=".42" stop-color="#FF9A3C" stop-opacity=".55"/><stop offset=".6" stop-color="#FF4D8D" stop-opacity=".25"/><stop offset="1" stop-color="#7A3CFF" stop-opacity="0"/></radialGradient>
  <linearGradient id="bhdisk" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF1C4"/><stop offset=".35" stop-color="#FF9A3C"/><stop offset=".7" stop-color="#FF4D8D"/><stop offset="1" stop-color="#7A3CFF"/></linearGradient>
  <radialGradient id="tankglow"><stop offset="0" stop-color="#FFF6B0" stop-opacity=".8"/><stop offset="1" stop-color="#5FD3F3" stop-opacity=".15"/></radialGradient>
  <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="haze" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="26"/></filter>
</defs>`;

// nuvens coloridas de nebulosa (desfocadas e paradas: o que mexe fica por cima)
function nebula(seed, cols, n = 7){
  const r = rng(seed);
  return `<g filter="url(#haze)">${Array.from({length: n}, (_, i) => { const x = (r() * 800).toFixed(0), y = (r() * 450).toFixed(0);
    return `<ellipse cx="${x}" cy="${y}" rx="${(110 + r() * 200).toFixed(0)}" ry="${(45 + r() * 90).toFixed(0)}" fill="${cols[i % cols.length]}" opacity="${(.22 + r() * .3).toFixed(2)}" transform="rotate(${(-30 + r() * 60).toFixed(0)} ${x} ${y})"/>`; }).join('')}</g>`;
}
// buraco negro: brilho, disco de luz girando (achatado) e a parte da frente do disco por cima do buraco
const blackHole = (x, y, s) => `<g id="bh" transform="translate(${x} ${y}) scale(${s})"><g class="bh-in">
  <circle r="190" fill="url(#bhglow)"/>
  <g transform="scale(1 .3)"><g class="bh-disk">
    <circle r="125" fill="none" stroke="url(#bhdisk)" stroke-width="64" opacity=".9"/>
    <circle r="132" fill="none" stroke="#FFF1C4" stroke-width="5" stroke-dasharray="40 60 12 80" opacity=".85"/>
    <circle r="104" fill="none" stroke="#FFD08A" stroke-width="4" stroke-dasharray="16 44" opacity=".8"/></g></g>
  <path d="M-74 -6 A74 70 0 0 1 74 -6" stroke="#FFC979" stroke-width="12" fill="none" opacity=".7" filter="url(#soft)"/>
  <circle r="64" fill="none" stroke="#FFE2A8" stroke-width="5" opacity=".9"/>
  <circle r="59" fill="#000"/>
  <path d="M-150 0 A150 42 0 0 0 150 0" fill="none" stroke="url(#bhdisk)" stroke-width="18" opacity=".95"/>
  <path d="M-128 4 A128 34 0 0 0 128 4" fill="none" stroke="#FFF1C4" stroke-width="3" stroke-dasharray="22 30" opacity=".7"/></g></g>`;

// céu de estrelas que podem sumir (cada uma vai sozinha até o ponto que puxa e depois volta)
function skyStars(n, seed){
  const r = rng(seed); let s = '';
  for (let i = 0; i < n; i++) { const x = r() * 800, y = r() * 300, big = r() < .15;
    s += `<circle class="sstar" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(big ? 2.4 + r() * 1.4 : .6 + r() * 1.4).toFixed(2)}" fill="${big ? '#FFF6D0' : '#fff'}" style="animation-delay:${(r() * 3).toFixed(2)}s"/>`; }
  return s;
}
const holoV = () => `<g id="holov" class="holo holov"><rect x="24" y="30" width="190" height="150" rx="14" fill="#FF3B3B" opacity=".14" stroke="#FF3B3B" stroke-width="3"/>
  <g transform="translate(64 44) scale(1.1)" opacity=".92">${ART.vortex.replace(/<svg[^>]*>/, '').replace('</svg>', '')}</g>
  <text x="119" y="170" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="15" fill="#FF6B6B" letter-spacing="1.5">LORDE VORTEX</text></g>`;
// constelação em forma de nave, que se desenha quando as estrelas voltam
const CONSTEL = [[250, 170], [330, 142], [440, 146], [520, 172], [440, 198], [330, 202], [250, 170]];
const CONSTEL_FIN = [[330, 142], [300, 108], [380, 144]];
const GIFT = `<g class="gift-in"><circle r="70" fill="url(#lglow)"/>${Array.from({length: 12}, (_, i) => `<rect x="-2" y="-64" width="4" height="22" rx="2" fill="#FFF1A6" opacity=".8" transform="rotate(${i * 30})"/>`).join('')}
  <path d="${starPath(34, 16)}" fill="#FFD84D" stroke="#FFF6D0" stroke-width="4" stroke-linejoin="round"/><path d="${starPath(18, 9)}" fill="#fff" opacity=".6"/></g>`;

// telhado da base, de noite
ART.roof = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}${M4DEFS}
  <defs><linearGradient id="rsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#03051A"/><stop offset=".6" stop-color="#1A1450"/><stop offset="1" stop-color="#4A2380"/></linearGradient></defs>
  <rect width="800" height="450" fill="url(#rsky)"/>
  <g filter="url(#haze)"><ellipse cx="420" cy="150" rx="520" ry="58" fill="#6B4BD8" opacity=".5" transform="rotate(-16 420 150)"/>
    <ellipse cx="400" cy="158" rx="360" ry="22" fill="#D9CCFF" opacity=".45" transform="rotate(-16 400 158)"/>
    <ellipse cx="590" cy="105" rx="150" ry="46" fill="#FF6FB5" opacity=".3"/><ellipse cx="170" cy="230" rx="160" ry="40" fill="#2F7CF6" opacity=".3"/></g>
  <g id="skystars">${skyStars(110, 61)}</g>
  <g id="constel" class="constel"><polyline points="${CONSTEL.map(p => p.join(',')).join(' ')}"/><polyline points="${CONSTEL_FIN.map(p => p.join(',')).join(' ')}"/>
    ${CONSTEL.slice(0, -1).concat(CONSTEL_FIN.slice(1, 2)).map(([x, y]) => `<g class="cdot">${sparkle4(x, y, 1.1, '#FFF6D0')}</g>`).join('')}</g>
  <g fill="#0B0A26">
    <path d="M0 340 V300 Q60 262 120 300 V340 Z"/><rect x="150" y="270" width="60" height="70"/><path d="M230 340 V290 Q300 240 370 290 V340 Z"/>
    <rect x="560" y="250" width="40" height="90"/><path d="M620 340 V296 Q690 256 760 296 V340 Z"/><rect x="760" y="280" width="40" height="60"/></g>
  <g stroke="#0B0A26" stroke-width="4"><line x1="180" y1="270" x2="180" y2="226"/><line x1="580" y1="250" x2="580" y2="200"/></g>
  <circle cx="180" cy="224" r="4" fill="#FF3B3B" class="blink"/><circle cx="580" cy="198" r="4" fill="#FF3B3B" class="blink"/>
  <g fill="#FFD27A" opacity=".85">${[[160, 285], [188, 285], [160, 310], [568, 266], [568, 292], [580, 318], [298, 300], [680, 300], [60, 312]].map(([x, y]) => `<rect x="${x}" y="${y}" width="12" height="9" rx="2"/>`).join('')}</g>
  <rect y="340" width="800" height="110" fill="#151236"/>
  <g stroke="#241F52" stroke-width="3">${[372, 404, 436].map(y => `<line x1="0" y1="${y}" x2="800" y2="${y}"/>`).join('')}</g>
  <line x1="0" y1="344" x2="800" y2="344" stroke="#2E2866" stroke-width="5"/>
  <g transform="translate(680 430)"><path d="M0 0 L-30 -70 M0 0 L30 -70 M0 0 V-70" stroke="#5B6478" stroke-width="6"/>
    <g transform="translate(0 -78) rotate(-32)"><rect x="-60" y="-14" width="120" height="28" rx="10" fill="#8A94A8" stroke="#1B2232" stroke-width="3"/>
      <rect x="54" y="-18" width="16" height="36" rx="5" fill="#5B6478" stroke="#1B2232" stroke-width="3"/><circle cx="70" cy="0" r="9" fill="#5FD3F3" opacity=".8"/></g></g>
  ${holoV()}
  <g id="gift" class="gift" transform="translate(400 268)">${GIFT}</g>
  <g id="hero" class="fig" transform="translate(260 430)">${HERO}</g>
  <g id="bipr" class="bip-float" transform="translate(80 236)"><g>${BIP_INNER()}</g></g>
  <g id="lumir" class="lumi-fig" transform="translate(520 300)"><g class="lumi-pop"><g class="lumi-in"><g transform="scale(.75)">${LUMI}</g></g></g></g>
</svg>`;

// espaço fundo: nebulosa, buraco negro, meteoro e as bolhas com as estrelas presas
ART.deep = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}${M4DEFS}
  <rect width="800" height="450" fill="url(#space)"/>
  ${nebula(41, ['#8E4DFF', '#FF4D8D', '#2F7CF6', '#5FD3F3'])}
  <g class="stars-far"><g>${stars(110, 43)}</g><g transform="translate(800 0)">${stars(110, 43)}</g></g>
  ${blackHole(650, 200, .8)}
  <g class="stars-near"><g>${stars(40, 47)}</g><g transform="translate(800 0)">${stars(40, 47)}</g></g>
  <g id="bubbles"></g>
  <g id="meteor" class="meteor" transform="translate(900 -120)"><g class="rock-art">
    <path d="M-40 -10 L-22 -36 L10 -40 L36 -20 L40 12 L20 36 L-14 38 L-38 20 Z" fill="#7A5B4E" stroke="#3A2F28" stroke-width="4"/>
    <circle cx="-10" cy="-8" r="9" fill="#5E473D"/><circle cx="14" cy="14" r="6" fill="#5E473D"/></g></g>
  <g id="fship" class="fship" transform="translate(170 225) scale(.45)"><g class="fship-in">${shipSVG(['rocket', 'wing', 'laser', 'light'])}</g></g>
  <g id="lumid" class="lumi-fig on" transform="translate(110 110)"><g class="lumi-pop"><g class="lumi-in"><g transform="scale(.5)">${LUMI}</g></g></g></g>
</svg>`;
// bolha com uma estrela da família presa (big ou small)
const bubble = (id, size, x, y, fill, edge) => { const R = size === 'big' ? 62 : 34, s = size === 'big' ? .95 : .48;
  return `<g id="${id}" class="bubble ${size}" transform="translate(${x} ${y})"><g class="bub-in" style="animation-delay:${(x % 7) * .3}s">
    <g transform="scale(${s})">${starFace(fill, edge)}</g>
    <circle r="${R}" fill="#9EF0FF" fill-opacity=".12" stroke="#CFF8FF" stroke-width="3"/>
    <path d="M${-R * .6} ${-R * .45} A${R * .75} ${R * .75} 0 0 1 ${-R * .1} ${-R * .72}" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".75"/></g></g>`; };

// a máquina do Vortex, numa pedra perto do buraco negro
ART.machine = () => `<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" class="scene-svg">${DEFS}${M4DEFS}
  <rect width="800" height="450" fill="url(#space)"/>
  ${nebula(53, ['#FF4D8D', '#8E4DFF', '#FF8A1F'], 6)}
  ${stars(90, 57)}
  ${blackHole(130, 110, .62)}
  <path d="M0 360 Q120 328 260 350 T520 342 T800 352 V450 H0 Z" fill="#3A2F4A" stroke="#5B4A6B" stroke-width="3"/>
  <g fill="#2A2238">${[[90, 392, 34], [330, 410, 22], [700, 400, 30], [470, 430, 16]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r * 1.6}" ry="${r * .5}"/>`).join('')}</g>
  <g id="machine" class="machine"><g class="m-in">
    <path d="M512 160 L470 76 L690 76 L628 160 Z" fill="#3B2F5C" stroke="#8E4DFF" stroke-width="5"/>
    <path d="M486 88 H674" stroke="#B57BFF" stroke-width="4" opacity=".6"/>
    <rect x="500" y="150" width="140" height="160" rx="28" fill="#0E1A3A" stroke="#9EF0FF" stroke-width="5"/>
    <rect x="510" y="160" width="120" height="140" rx="22" fill="url(#tankglow)" class="tankglow"/>
    ${[[540, 200, '#FFD84D'], [600, 190, '#FF9AD5'], [570, 250, '#9EF0FF'], [532, 268, '#FFB86B'], [610, 262, '#C9B6FF'], [574, 196, '#FFFFFF']].map(([x, y, c], i) => `<path class="caught" style="animation-delay:${i * .25}s" transform="translate(${x} ${y})" d="${starPath(13, 6)}" fill="${c}"/>`).join('')}
    <path d="M520 168 Q514 220 522 280" stroke="#fff" stroke-width="5" fill="none" opacity=".35" stroke-linecap="round"/>
    <rect x="470" y="300" width="200" height="62" rx="12" fill="#2B2140" stroke="#8E4DFF" stroke-width="4"/>
    ${[495, 525, 555, 585, 615, 645].map((x, i) => `<circle cx="${x}" cy="346" r="6" fill="${['#FF3B3B', '#FFD23F', '#4BE38A'][i % 3]}" class="blink" style="animation-delay:${i * .2}s"/>`).join('')}
    <text x="570" y="334" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="26" fill="#E2CCFF">V</text>
    <g transform="translate(468 240)"><circle r="44" fill="#2B2140" stroke="#8E4DFF" stroke-width="5"/><circle r="32" fill="#05020A"/>
      <g class="mouth"><path d="M0 -28 A28 28 0 0 1 28 0 M0 28 A28 28 0 0 1 -28 0" stroke="#B57BFF" stroke-width="4" fill="none"/>
        <path d="M0 -16 A16 16 0 0 1 16 0 M0 16 A16 16 0 0 1 -16 0" stroke="#E2CCFF" stroke-width="3" fill="none"/></g></g></g></g>
  <g id="bolt" class="bolt" transform="translate(900 300)"><circle r="16" fill="#B57BFF" opacity=".5"/><circle r="9" fill="#F3E8FF"/></g>
  <g id="vortexfig" class="fig" transform="translate(1000 400)">${VORTEX}</g>
  <g id="hero" class="fig" transform="translate(-150 400)">${HERO}</g>
  <g id="lumim" class="lumi-fig on" transform="translate(-120 200)"><g class="lumi-pop"><g class="lumi-in"><g transform="scale(.55)">${LUMI}</g></g></g></g>
  <g id="drone" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="drone2" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="drone3" class="drone" transform="translate(950 120)">${ART.drone}</g>
  <g id="boom" class="boom" transform="translate(-200 -200)">${Array.from({length: 10}, (_, i) => `<circle class="spark" r="${8 + (i % 3) * 5}" fill="${['#FFE066', '#FF8A1F', '#FF4D4D'][i % 3]}" style="--a:${i * 36}deg"/>`).join('')}</g>
</svg>`;

ART.starBadge = `<svg viewBox="0 0 140 140" aria-hidden="true">
  <defs><radialGradient id="sbg"><stop offset="0" stop-color="#4A2C9E"/><stop offset="1" stop-color="#140C38"/></radialGradient></defs>
  <circle cx="70" cy="70" r="62" fill="url(#sbg)" stroke="#FFD23F" stroke-width="6"/>
  <g transform="translate(70 72)">${Array.from({length: 12}, (_, i) => `<rect x="-2" y="-58" width="4" height="16" rx="2" fill="#FFF1A6" opacity=".85" transform="rotate(${i * 30})"/>`).join('')}
    <g transform="scale(.95)">${starFace()}</g></g>
  ${sparkle4(108, 34, .9)}${sparkle4(30, 104, .6)}
</svg>`;
