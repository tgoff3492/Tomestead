/* Tomestead art: hand-drawn SVG objects for the shelves, the reading table and the trophies.
   Every piece is lit from the upper left, sits on a contact shadow, and gets unique
   gradient ids each time it's drawn (ids are written as @name and swapped on render). */
(() => {
  'use strict';
  const f = (n) => Math.round(n * 100) / 100;

  // ---------- helpers ----------
  function rng(seed) {
    let s = seed >>> 0;
    return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), 1 | t); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  // Catmull-Rom through points → cubic Bézier segments (no leading M)
  function curve(pts) {
    let d = '';
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
    }
    return d;
  }
  function closedCurve(pts) {
    const n = pts.length;
    let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
    }
    return d + 'Z';
  }
  // a turned (lathe) silhouette from a profile of [y, halfWidth], top to bottom
  function lathe(cx, prof) {
    const right = prof.map(([y, w]) => [cx + w, y]);
    const left = prof.slice().reverse().map(([y, w]) => [cx - w, y]);
    return `M${f(cx - prof[0][1])} ${f(prof[0][0])}L${f(right[0][0])} ${f(right[0][1])}${curve(right)}L${f(left[0][0])} ${f(left[0][1])}${curve(left)}Z`;
  }
  const lin = (id, stops, x2 = 1, y2 = 0, x1 = 0, y1 = 0) =>
    `<linearGradient id="@${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a != null ? ` stop-opacity="${a}"` : ''}/>`).join('')}</linearGradient>`;
  const rad = (id, stops, cx = .5, cy = .5, r = .5, fx, fy) =>
    `<radialGradient id="@${id}" cx="${cx}" cy="${cy}" r="${r}"${fx != null ? ` fx="${fx}" fy="${fy}"` : ''}>${stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a != null ? ` stop-opacity="${a}"` : ''}/>`).join('')}</radialGradient>`;
  const shadow = (cx, cy, rx, ry, a = .55) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#@shd)"/>` ;
  const shadowDef = (a = .6) => rad('shd', [[0, '#000', a], [.6, '#000', a * .45], [1, '#000', 0]]);

  const BRASS = [[0, '#3b2a0e'], [.1, '#7d5f26'], [.26, '#e3c77c'], [.36, '#f8e9b6'], [.48, '#c99e4c'], [.7, '#86642a'], [.88, '#5a4118'], [1, '#33240b']];
  const GOLD = [[0, '#4d3406'], [.14, '#a2731a'], [.3, '#efcd72'], [.4, '#fff3c2'], [.52, '#dcab3e'], [.74, '#996a12'], [1, '#432c04']];
  const IRON = [[0, '#121214'], [.22, '#3c3c42'], [.34, '#55555c'], [.5, '#2a2a2e'], [1, '#0e0e10']];
  const WALNUT = [[0, '#2a170b'], [.22, '#6e4526'], [.38, '#94653c'], [.55, '#6b4122'], [.85, '#3d2412'], [1, '#24140a']];
  const PORCELAIN = [[0, '#c9bfac'], [.16, '#fffdf8'], [.34, '#f8f3e9'], [.7, '#dfd5c2'], [1, '#9b8f7b']];

  const A = {};

  // ---------- candlestick ----------
  A.candle = {
    w: 60, h: 196, glow: { x: 30, y: 16 }, flame: true,
    svg: () => `<defs>${shadowDef()}${lin('br', BRASS)}${lin('wax', [[0, '#cfc2a6'], [.22, '#fbf5e5'], [.5, '#f1e7cf'], [1, '#b3a382']])}
      ${rad('fl', [[0, '#fffbe8'], [.35, '#ffe9a3'], [.7, '#ffb547'], [1, '#ff8a1c', 0]], .5, .62, .55)}
      ${rad('halo', [[0, '#ffd890', .55], [1, '#ffd890', 0]])}</defs>
      ${shadow(33, 194, 30, 3.6)}
      <circle cx="30" cy="17" r="22" fill="url(#@halo)"/>
      <path d="${lathe(30, [[176, 13], [181, 19], [186, 23.5], [190, 25], [194, 25]])}" fill="url(#@br)"/>
      <path d="${lathe(30, [[104, 5.6], [107, 6.6], [112, 6], [116, 8.6], [120, 8], [124, 4.4], [140, 3.6], [156, 4.4], [160, 8.4], [164, 7.4], [169, 9.4], [176, 13]])}" fill="url(#@br)"/>
      <path d="${lathe(30, [[97, 16.5], [99, 18], [101.5, 15.5], [104, 8]])}" fill="url(#@br)"/>
      <ellipse cx="30" cy="97.5" rx="16.5" ry="1.6" fill="#f6e3a4" opacity=".55"/>
      <path d="M25.4 35 Q30 31.8 34.6 35 L34.6 98 L25.4 98Z" fill="url(#@wax)"/>
      <path d="M33.6 34.4 C35.8 39 35.4 46 35 53 C34.8 56.4 32.9 56.2 33 52.8 L33.2 38Z" fill="#f7eedb"/>
      <path d="M26.2 35.6 C24.6 40 25 44 25.2 47 C25.4 49 26.8 49 26.8 46.8Z" fill="#efe4cb"/>
      <path d="M26 35 Q30 33 34 35" stroke="#fffaf0" stroke-width=".8" fill="none" opacity=".8"/>
      <path d="M30 34 Q30.6 30 30.1 26.6" stroke="#2a1a10" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <g class="flame"><path d="M30 4.5 C34.3 12.5 35.8 19.5 30.1 27.6 C24.4 19.5 25.8 12.5 30 4.5Z" fill="url(#@fl)"/>
      <ellipse cx="30.1" cy="21.5" rx="2.3" ry="5" fill="#fffef6" opacity=".9"/>
      <ellipse cx="30.1" cy="26.4" rx="2" ry="1.4" fill="#7fa6ff" opacity=".45"/></g>`,
  };

  // ---------- tea cup and saucer ----------
  A.teacup = {
    w: 112, h: 92, steam: true,
    svg: () => `<defs>${shadowDef(.5)}${lin('por', PORCELAIN)}${lin('sau', [[0, '#b9ad98'], [.2, '#f7f2e8'], [.6, '#e3dacb'], [1, '#8f846f']])}
      ${rad('tea', [[0, '#c27a37'], [.6, '#8a4a18'], [1, '#4d2408']], .45, .4, .6)}</defs>
      ${shadow(58, 90.5, 50, 3)}
      <path d="M5 82.5 Q10 89.6 30 90.4 L80 90.4 Q99 89.6 104 82.5Z" fill="url(#@sau)"/>
      <ellipse cx="54.5" cy="82.5" rx="49.5" ry="4.6" fill="#fbf8f1"/>
      <ellipse cx="54.5" cy="82.5" rx="49.5" ry="4.6" fill="none" stroke="#c9a64e" stroke-width=".9" opacity=".8"/>
      <ellipse cx="54.5" cy="82.8" rx="22" ry="2.4" fill="#d8cfbf"/>
      <path d="M84 50.5 C101 47.5 103 70 80 71.5" stroke="#cfc6b4" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M84 50.5 C101 47.5 103 70 80 71.5" stroke="#faf6ee" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M86.5 52 C96 51 98 62 92 66" stroke="#fff" stroke-width="1.1" fill="none" opacity=".9"/>
      <path d="${lathe(54.5, [[44, 31], [52, 30.6], [60, 28.6], [68, 24.6], [74, 19.6], [78, 15.4], [80.2, 13.2], [81.2, 14], [82.4, 15.6], [83, 15.6]])}" fill="url(#@por)"/>
      <path d="M24 47.4 L85 47.4 L84.6 52.6 L24.4 52.6Z" fill="#284b77" opacity=".92"/>
      <path d="M24 46.6 H85 M24.4 53.4 H84.6" stroke="#c9a64e" stroke-width=".8"/>
      <g fill="#2f5a8c" opacity=".75"><circle cx="54.5" cy="63" r="2.1"/><circle cx="50.5" cy="65.6" r="1.4"/><circle cx="58.4" cy="65.4" r="1.4"/><path d="M54.5 66 q-4 4 -9 3 q4-3 9-3Z M54.5 66 q4 4 9 3 q-4-3-9-3Z"/></g>
      <path d="M30 50 C29 60 32 70 40 76" stroke="#fff" stroke-width="2.2" fill="none" opacity=".55" stroke-linecap="round"/>
      <ellipse cx="54.5" cy="44" rx="31" ry="3.7" fill="url(#@tea)"/>
      <ellipse cx="54.5" cy="44" rx="31" ry="3.7" fill="none" stroke="#fffdf6" stroke-width="1.3"/>
      <path d="M24 44 A31 3.7 0 0 0 85 44" fill="none" stroke="#c9a64e" stroke-width=".7"/>
      <ellipse cx="46" cy="43.6" rx="7" ry="1" fill="#fff" opacity=".35"/>
      <g class="steam" fill="none" stroke="#fff" stroke-linecap="round" opacity=".28">
        <path d="M47 39 C40 31 53 25 46 16 C41 9 48 5 46 0" stroke-width="2.4"/>
        <path d="M60 38 C66 31 55 25 61 17 C65 11 59 7 61 2" stroke-width="1.8"/></g>`,
  };

  // ---------- coffee mug ----------
  A.mug = {
    w: 96, h: 96, steam: true,
    svg: () => `<defs>${shadowDef(.5)}${lin('gl', [[0, '#1b2b3a'], [.18, '#4f6f86'], [.32, '#7c9cb1'], [.55, '#3d5a70'], [1, '#13202b']])}
      ${lin('rim', [[0, '#a99a80'], [.3, '#eee3cc'], [1, '#8b7c62']])}${rad('cof', [[0, '#6b3a17'], [1, '#2a1306']], .4, .4, .7)}</defs>
      ${shadow(46, 94, 40, 3)}
      <path d="M70 40 C92 38 94 72 70 76" stroke="#1d2e3d" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M71 41.5 C88 40 89 70 71 73.5" stroke="#5f8098" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
      <path d="M12 30 L72 30 L72 86 Q72 93 64 93 L20 93 Q12 93 12 86Z" fill="url(#@gl)"/>
      <path d="M12 30 L72 30 L72 36.5 Q66 38.2 58 37 Q50 39.5 42 37.2 Q32 38.8 24 37 Q17 38.4 12 36.8Z" fill="url(#@rim)"/>
      <path d="M12 86 Q12 93 20 93 L64 93 Q72 93 72 86 L72 88 Q66 82 42 84 Q20 82 12 88Z" fill="#c9b796" opacity=".5"/>
      <g fill="#a9c3d3" opacity=".22">${Array.from({ length: 26 }, (_, i) => { const r = rng(91 + i); return `<circle cx="${f(15 + r() * 54)}" cy="${f(42 + r() * 46)}" r="${f(.5 + r() * .9)}"/>`; }).join('')}</g>
      <path d="M20 40 C19 56 20 72 24 86" stroke="#fff" stroke-width="2.6" fill="none" opacity=".3" stroke-linecap="round"/>
      <ellipse cx="42" cy="30" rx="30" ry="3.8" fill="url(#@cof)"/>
      <ellipse cx="42" cy="30" rx="30" ry="3.8" fill="none" stroke="#f3e8d0" stroke-width="1.4"/>
      <g class="steam" fill="none" stroke="#fff" stroke-linecap="round" opacity=".25">
        <path d="M36 25 C30 18 41 12 35 4 C32 0 36 -2 35 -4" stroke-width="2.4"/>
        <path d="M49 25 C55 18 45 12 51 5" stroke-width="1.8"/></g>`,
  };

  // ---------- desk globe ----------
  A.globe = {
    w: 132, h: 196,
    svg: () => {
      const cx = 62, cy = 74, R = 50;
      const tilt = -20;
      const lat = [-60, -30, 0, 30, 60].map(p => {
        const y = cy - R * Math.sin(p * Math.PI / 180), rx = R * Math.cos(p * Math.PI / 180);
        return `<ellipse cx="${cx}" cy="${f(y)}" rx="${f(rx)}" ry="${f(rx * .16)}"/>`;
      }).join('');
      const lon = [0, 30, 60].map(t => `<ellipse cx="${cx}" cy="${cy}" rx="${f(R * Math.cos(t * Math.PI / 180))}" ry="${R}"/>`).join('') + `<path d="M${cx} ${cy - R}V${cy + R}"/>`;
      const a = tilt * Math.PI / 180;
      const rot = (x, y) => [cx + x * Math.cos(a) - y * Math.sin(a), cy + x * Math.sin(a) + y * Math.cos(a)];
      const [bx, by] = rot(0, R + 7);
      const [tx, ty] = rot(0, -(R + 7));
      return `<defs>${shadowDef()}${rad('sea', [[0, '#f1e3b8'], [.55, '#d2b47c'], [1, '#8e6c38']], .36, .32, .8)}
        ${rad('shade', [[0, '#fff8e0', .4], [.4, '#fff8e0', 0], [.78, '#2a1808', .22], [1, '#160c03', .62]], .34, .3, .78)}
        ${lin('br', BRASS)}${lin('wd', WALNUT)}<clipPath id="@ball"><circle cx="${cx}" cy="${cy}" r="${R}"/></clipPath></defs>
        ${shadow(64, 194, 40, 4)}
        <path d="${lathe(62, [[150, 4], [156, 5.5], [160, 9], [164, 7], [168, 12], [176, 24], [184, 31], [190, 32], [194, 31]])}" fill="url(#@wd)"/>
        <path d="M58 148 Q${f(bx - 4)} ${f(by + 18)} ${f(bx)} ${f(by - 1)} L${f(bx + 4)} ${f(by)} Q${f(bx + 2)} ${f(by + 20)} 66 150Z" fill="url(#@br)"/>
        <g clip-path="url(#@ball)">
          <circle cx="${cx}" cy="${cy}" r="${R}" fill="url(#@sea)"/>
          <g transform="rotate(${tilt} ${cx} ${cy})">
            <g fill="#7a8b54" stroke="#4e3d20" stroke-width=".5" stroke-opacity=".6">
              <path d="M24 38 C34 28 52 26 62 32 C67 38 58 43 60 50 C62 56 54 60 50 64 C46 68 45 72 47 77 C40 75 35 69 32 61 C28 55 21 47 24 38Z"/>
              <path d="M47 77 C51 79 55 81 57 85 C54 86 50 84 47 80Z"/>
              <path d="M56 86 C65 84 74 90 76 98 C78 107 70 115 65 123 C61 127 58 121 58 114 C56 106 51 97 56 86Z" fill="#a9673a"/>
              <path d="M52 16 C59 12 68 15 65 22 C61 26 54 24 52 16Z" fill="#e9e1cc"/>
              <path d="M90 50 C97 44 106 45 111 50 C108 56 99 58 93 60Z"/>
              <path d="M90 66 C99 61 109 66 113 75 C115 86 108 97 101 103 C97 105 95 99 95 93 C93 87 87 83 88 76Z" fill="#b98a4a"/>
            </g>
            <g fill="none" stroke="#5a4320" stroke-width=".6" stroke-opacity=".38">${lat}${lon}</g>
          </g>
          <circle cx="${cx}" cy="${cy}" r="${R}" fill="url(#@shade)"/>
          <ellipse cx="44" cy="50" rx="11" ry="6" fill="#fff" opacity=".22" transform="rotate(-30 44 50)"/>
        </g>
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#3a2a12" stroke-opacity=".35"/>
        <g transform="rotate(${tilt} ${cx} ${cy})">
          <path d="M${cx} ${cy - R - 6} A${R + 6} ${R + 6} 0 0 1 ${cx} ${cy + R + 6}" fill="none" stroke="#5a4118" stroke-width="5.6"/>
          <path d="M${cx} ${cy - R - 6} A${R + 6} ${R + 6} 0 0 1 ${cx} ${cy + R + 6}" fill="none" stroke="#e2c579" stroke-width="3.4"/>
          <path d="M${cx} ${cy - R - 6} A${R + 6} ${R + 6} 0 0 1 ${cx + R + 6} ${cy}" fill="none" stroke="#fff3c4" stroke-width=".9" opacity=".7"/>
        </g>
        <circle cx="${f(tx)}" cy="${f(ty)}" r="3" fill="url(#@br)"/><circle cx="${f(bx)}" cy="${f(by)}" r="3" fill="url(#@br)"/>`;
    },
  };

  // ---------- stack of books lying flat ----------
  const BOOKCOL = [['#6E1F24', '#9a3a3c'], ['#1F3350', '#3a5a82'], ['#2F4A33', '#4f7354'], ['#5B2F4A', '#844a6c'], ['#9A4A25', '#c46a3e'], ['#3A3A3F', '#5c5c66']];
  function lyingSpine(id, x, y, w, h, c, seed) {
    const r = rng(seed);
    const band = (bx) => `<rect x="${f(bx)}" y="${f(y + 1)}" width="1.1" height="${f(h - 2)}" fill="#e2c574" opacity=".85"/><rect x="${f(bx + 3)}" y="${f(y + 1)}" width="1.1" height="${f(h - 2)}" fill="#e2c574" opacity=".85"/>`;
    return `${lin(id, [[0, c[1]], [.3, c[1]], [.55, c[0]], [1, '#000']], 0, 1)}`.replace(/<linearGradient/, '<linearGradient') +
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="url(#@${id})"/>
       <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${c[0]}" opacity=".35"/>
       <rect x="${x + 1}" y="${f(y + h * .18)}" width="${w - 2}" height="${f(h * .14)}" fill="#fff" opacity=".1"/>
       ${band(x + 9)}${band(x + w - 13)}
       <rect x="${f(x + w * .38)}" y="${f(y + h * .38)}" width="${f(w * .24)}" height="1.3" fill="#e2c574" opacity=".9"/>
       <rect x="${f(x + w * .43)}" y="${f(y + h * .6)}" width="${f(w * .14)}" height="1" fill="#e2c574" opacity=".75"/>
       <rect x="${x}" y="${y + h - 2}" width="${w}" height="2" rx="1" fill="#000" opacity=".35"/>
       <rect x="${x + (r() * 6 | 0)}" y="${y + h - 1}" width="${w - 6}" height="1" fill="#000" opacity=".4"/>`;
  }
  function lyingEdge(x, y, w, h, c) {
    const lines = Array.from({ length: Math.floor((h - 5) / 1.6) }, (_, i) => `<path d="M${x + 2} ${f(y + 3 + i * 1.6)}H${x + w - 2}"/>`).join('');
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" fill="${c[0]}"/>
      <rect x="${x + 2}" y="${y + 2.4}" width="${w - 4}" height="${h - 4.8}" fill="#eadfc4"/>
      <g stroke="#b9a882" stroke-width=".5" opacity=".7">${lines}</g>
      <rect x="${x + 2}" y="${y + 2.4}" width="${w - 4}" height="${f((h - 4.8) * .4)}" fill="#fff" opacity=".18"/>
      <rect x="${x}" y="${y + h - 1.6}" width="${w}" height="1.6" fill="#000" opacity=".4"/>`;
  }
  A.stack = {
    w: 176, h: 70, top: { y: 9, x0: 26, x1: 146 },
    svg: () => `<defs>${shadowDef()}</defs>${shadow(90, 69, 84, 3.2, .7)}
      ${lyingSpine('b1', 5, 46, 166, 24, BOOKCOL[0], 3)}
      ${lyingEdge(15, 27, 146, 19, BOOKCOL[2])}
      <g transform="rotate(-1.2 82 18)">${lyingSpine('b3', 10, 9, 144, 18, BOOKCOL[1], 7)}</g>`,
  };

  // ---------- sleeping cat ----------
  A.cat = {
    w: 232, h: 124, k: 1.15, breathe: true,
    svg: () => {
      const r = rng(17);
      const body = 'M22 118 C6 104 10 74 36 60 C62 46 104 41 134 47 C160 52 176 64 182 84 C185 96 184 108 180 118Z';
      // tabby markings: soft tapered bands that follow the curve of the back
      const bands = Array.from({ length: 9 }, (_, i) => {
        const t = .3 + i / 8 * .62, x = 30 + t * 140;
        const top = 66 - Math.sin(t * Math.PI) * 18 + (t < .2 ? (0.2 - t) * 40 : 0);
        const len = 18 + r() * 14, lean = 8 - t * 16;
        return `<path d="M${f(x)} ${f(top - 4)} C${f(x + lean * .3)} ${f(top + len * .4)} ${f(x + lean * .7)} ${f(top + len * .7)} ${f(x + lean)} ${f(top + len)}" stroke-width="${f(3 + r() * 3.4)}"/>`;
      }).join('');
      const haunch = [0, 1, 2].map(i => `<path d="M${f(30 + i * 4)} ${f(104 - i * 9)} A${f(30 + i * 9)} ${f(28 + i * 9)} 0 0 1 ${f(70 + i * 6)} ${f(70 - i * 9)}" stroke-width="${f(3 + r() * 2)}"/>`).join('');
      const fur = Array.from({ length: 150 }, () => {
        const x = 20 + r() * 160, y = 52 + r() * 62;
        const a = -1.2 + r() * .5, l = 3 + r() * 4;
        return `<path d="M${f(x)} ${f(y)} l${f(Math.cos(a) * l)} ${f(Math.sin(a) * l * -1)}" stroke="${r() > .5 ? '#ffe0b2' : '#7a3a12'}" opacity="${f(.12 + r() * .18)}"/>`;
      }).join('');
      return `<defs>${shadowDef(.6)}${rad('fur', [[0, '#f6c385'], [.4, '#dd9150'], [.78, '#b0652c'], [1, '#7d4017']], .4, .18, .95)}
        ${lin('ao', [[0, '#000', 0], [.6, '#000', 0], [1, '#2a1305', .55]], 0, 1)}
        ${rad('head', [[0, '#f8cb92'], [.55, '#de914c'], [1, '#a35a26']], .42, .3, .75)}
        ${lin('tail', [[0, '#c8783a'], [.5, '#e09a58'], [1, '#a65c25']], 0, 1)}
        <clipPath id="@bc"><path d="${body}"/></clipPath><filter id="@soft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.1"/></filter></defs>
        ${shadow(102, 120, 100, 5, .75)}
        <g class="breathe">
          <path d="${body}" fill="url(#@fur)"/>
          <g clip-path="url(#@bc)">
            <ellipse cx="66" cy="94" rx="48" ry="32" fill="#f7bf7c" opacity=".22"/>
            <g fill="none" stroke="#8f4a1a" opacity=".34" stroke-linecap="round" filter="url(#@soft)">${bands}${haunch}</g>
            <g stroke-width=".9" stroke-linecap="round">${fur}</g>
            <rect x="0" y="40" width="200" height="84" fill="url(#@ao)"/>
            <path d="M30 70 C50 54 92 47 128 50" stroke="#ffe3b8" stroke-width="3.4" fill="none" opacity=".35" stroke-linecap="round"/>
          </g>
        </g>
        <path d="M24 114 C30 123 70 124 112 121 C134 119 150 116 158 112 C162 110 166 112 163 116 C156 122 134 126 110 126 C70 128 34 126 22 120Z" fill="url(#@tail)"/>
        <g fill="none" stroke="#8a4517" opacity=".45" stroke-linecap="round" stroke-width="3"><path d="M52 121 v5"/><path d="M78 121 v5"/><path d="M104 120 v5"/><path d="M128 118 v5"/></g>
        <path d="M152 114 C158 111 164 110 164 114 C162 117 157 118 152 118Z" fill="#7a3d14" opacity=".7"/>
        <g>
          <path d="M170 76 C167 66 167 57 168 49 C175 54 181 60 186 66Z" fill="#c97b3c"/>
          <path d="M172 72 C170 65 170 59 171 54 C175 58 178 62 181 66Z" fill="#e2a294"/>
          <path d="M197 65 C203 59 209 54 216 49 C217 58 216 67 213 75Z" fill="#b8682f"/>
          <path d="M200 65 C204 61 208 58 212 55 C213 61 212 66 210 71Z" fill="#dd9a8a"/>
          <path d="M162 96 C160 78 173 65 190 65 C207 65 219 77 217 95 C215 109 203 116 190 116 C175 116 164 109 162 96Z" fill="url(#@head)"/>
          <g fill="none" stroke="#8a4517" stroke-linecap="round" opacity=".5">
            <path d="M183 70 L185 79" stroke-width="2.4"/><path d="M190 68 L190 78" stroke-width="2.4"/><path d="M197 70 L195 79" stroke-width="2.4"/>
            <path d="M165 92 L173 93" stroke-width="2"/><path d="M215 92 L207 93" stroke-width="2"/></g>
          <ellipse cx="190" cy="103" rx="13" ry="8.6" fill="#fbe7cc" opacity=".85"/>
          <path d="M174 90 Q180 94.4 186 90.4" stroke="#3a1c0a" stroke-width="1.7" fill="none" stroke-linecap="round"/>
          <path d="M194 90.4 Q200 94.4 206 90" stroke="#3a1c0a" stroke-width="1.7" fill="none" stroke-linecap="round"/>
          <path d="M187 98.6 L193 98.6 L190 102Z" fill="#c9776a"/>
          <path d="M190 102.2 q-2.6 3 -6 1.4 M190 102.2 q2.6 3 6 1.4" stroke="#5a2a14" stroke-width=".9" fill="none" stroke-linecap="round"/>
          <g stroke="#fff6e6" stroke-width=".6" opacity=".5" fill="none"><path d="M180 103 L160 100"/><path d="M180 105 L161 107"/><path d="M200 103 L220 100"/><path d="M200 105 L219 107"/></g>
          <path d="M166 84 C171 74 181 68 192 68" stroke="#ffe1b4" stroke-width="2" fill="none" opacity=".45" stroke-linecap="round"/>
        </g>
        <path d="M168 120 C166 114 172 111 180 112 C188 113 190 118 186 121 C180 123 172 123 168 120Z" fill="#f4dcbc"/>
        <g stroke="#b88a64" stroke-width=".8" opacity=".7"><path d="M174 116 v5 M179 116 v5 M184 117 v4"/></g>`;
    },
  };

  // ---------- trailing pothos ----------
  function leaf(x, y, ang, size, tone, seed) {
    const r = rng(seed);
    const l = size, w = size * .62;
    const greens = [['#2f5e2e', '#4f8a43'], ['#3a6d34', '#69a352'], ['#2a5228', '#4a7d3d'], ['#467a3a', '#86b765']];
    const g = greens[tone % greens.length];
    const id = `lf${seed}`;
    const vari = r() > .45 ? `<path d="M0 -2 C${f(w * .3)} ${f(-l * .35)} ${f(w * .15)} ${f(-l * .7)} 0 ${f(-l * .95)}" stroke="#d8e2a0" stroke-width="${f(l * .1)}" opacity=".35" fill="none"/>` : '';
    return { def: lin(id, [[0, g[0]], [1, g[1]]], 1, 0, 0, 1),
      el: `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(ang)})"><path d="M0 0 C${f(w)} ${f(-l * .1)} ${f(w * .95)} ${f(-l * .78)} 0 ${f(-l)} C${f(-w * .95)} ${f(-l * .78)} ${f(-w)} ${f(-l * .1)} 0 0Z" fill="url(#@${id})"/>${vari}<path d="M0 -1 L0 ${f(-l * .9)}" stroke="#20401c" stroke-width=".7" opacity=".55"/></g>` };
  }
  A.plant = {
    w: 150, h: 214, base: 150,
    svg: () => {
      const r = rng(42);
      const defs = [], back = [], front = [];
      // mound of leaves above the pot
      for (let i = 0; i < 22; i++) {
        const a = -170 + r() * 160, d = 14 + r() * 34;
        const x = 74 + Math.cos(a * Math.PI / 180) * d * 1.15, y = 92 + Math.sin(a * Math.PI / 180) * d * .9;
        const lv = leaf(x, y, a + 90 + (r() - .5) * 30, 15 + r() * 9, i % 4, 100 + i);
        defs.push(lv.def); (i < 11 ? back : front).push(lv.el);
      }
      // trailing vines over the edge of the shelf
      const vines = [
        [[104, 102], [118, 112], [124, 132], [126, 156], [123, 182], [126, 206]],
        [[46, 104], [34, 118], [30, 140], [33, 160], [29, 178]],
        [[96, 104], [104, 124], [106, 150], [101, 170]],
      ];
      const vinePaths = vines.map(v => `<path d="M${v[0][0]} ${v[0][1]}${curve(v)}" stroke="#3d5f2b" stroke-width="1.6" fill="none"/>`).join('');
      const vineLeaves = [];
      vines.forEach((v, vi) => v.slice(1).forEach((p, i) => {
        const side = (i % 2 ? 1 : -1);
        const lv = leaf(p[0] + side * 2, p[1], 180 + side * (40 + r() * 30), 12 + r() * 6, (vi + i) % 4, 300 + vi * 10 + i);
        defs.push(lv.def); vineLeaves.push(lv.el);
      }));
      return `<defs>${shadowDef()}${lin('pot', [[0, '#7a3c22'], [.18, '#c9774b'], [.36, '#d98c5c'], [.62, '#a55a34'], [1, '#5e2c16']])}
        ${lin('rim', [[0, '#8a4529'], [.22, '#e09a69'], [.4, '#eaa676'], [.7, '#b0623a'], [1, '#6a321b']])}${defs.join('')}</defs>
        ${shadow(76, 149.5, 42, 3.4)}
        ${back.join('')}
        <path d="M41 108 L111 108 L104 150 L48 150Z" fill="url(#@pot)"/>
        <path d="M41 108 L111 108 L110.4 112 L41.6 112Z" fill="#000" opacity=".25"/>
        <path d="M50 116 C49 128 50 140 53 148" stroke="#f2b68c" stroke-width="2.4" fill="none" opacity=".35" stroke-linecap="round"/>
        <rect x="37" y="96" width="78" height="13" rx="2.5" fill="url(#@rim)"/>
        <rect x="37" y="96" width="78" height="2.2" rx="1" fill="#f6c39b" opacity=".55"/>
        <ellipse cx="76" cy="97" rx="36" ry="2.6" fill="#2b1a10"/>
        ${front.join('')}${vinePaths}${vineLeaves.join('')}`;
    },
  };

  // ---------- lantern ----------
  A.lantern = {
    w: 84, h: 170, glow: { x: 42, y: 96 }, flame: true,
    svg: () => `<defs>${shadowDef()}${lin('ir', IRON)}${lin('irL', [[0, '#0d0d0f'], [1, '#2c2c31']])}${lin('br', BRASS)}
      ${rad('lit', [[0, '#ffe2a0', .75], [.55, '#ffb855', .32], [1, '#c4772a', .12]], .5, .6, .7)}
      ${rad('fl', [[0, '#fffbe8'], [.4, '#ffe9a3'], [.75, '#ffb547'], [1, '#ff8a1c', 0]], .5, .62, .55)}
      ${lin('wax', [[0, '#d9cdb2'], [.3, '#fbf5e5'], [1, '#bcae8e']])}</defs>
      ${shadow(44, 168, 38, 3.4)}
      <circle cx="42" cy="11" r="8" fill="none" stroke="url(#@ir)" stroke-width="3"/>
      <path d="M38 20 h8 v6 h-8z" fill="url(#@ir)"/>
      <path d="M8 48 L42 24 L42 50Z" fill="url(#@irL)"/><path d="M42 24 L76 48 L42 50Z" fill="url(#@ir)"/>
      <path d="M42 24 L76 48" stroke="#6a6a72" stroke-width=".8" opacity=".6"/>
      <rect x="9" y="48" width="66" height="7" fill="url(#@ir)"/><rect x="9" y="54" width="66" height="1.4" fill="url(#@br)"/>
      <rect x="15" y="55" width="19" height="78" fill="url(#@lit)" opacity=".8"/>
      <rect x="36" y="55" width="34" height="78" fill="url(#@lit)"/>
      <rect x="36" y="104" width="13" height="29" fill="url(#@wax)"/>
      <ellipse cx="42.5" cy="104" rx="6.5" ry="1.4" fill="#fffaf0"/>
      <path d="M42.5 103.5 v-4" stroke="#2a1a10" stroke-width="1"/>
      <g class="flame"><path d="M42.5 82 C45.6 88 46.6 93 42.6 99.6 C38.5 93 39.4 88 42.5 82Z" fill="url(#@fl)"/>
      <ellipse cx="42.6" cy="95" rx="1.6" ry="3.6" fill="#fff" opacity=".9"/></g>
      <path d="M40 57 L50 57 L38 131 L36 131Z" fill="#fff" opacity=".13"/><path d="M58 57 L62 57 L52 131 L50 131Z" fill="#fff" opacity=".08"/>
      <path d="M20 57 L24 57 L17 131 L16 131Z" fill="#fff" opacity=".07"/>
      <rect x="12" y="55" width="4" height="78" fill="url(#@irL)"/><rect x="33" y="55" width="4.4" height="78" fill="url(#@ir)"/><rect x="69" y="55" width="4" height="78" fill="url(#@ir)"/>
      <rect x="9" y="132" width="66" height="7" fill="url(#@ir)"/><rect x="9" y="132" width="66" height="1.4" fill="url(#@br)"/>
      <path d="M12 139 H72 L76 152 H8Z" fill="url(#@ir)"/>
      <rect x="5" y="152" width="74" height="12" rx="1.5" fill="url(#@ir)"/><rect x="5" y="152" width="74" height="1.5" fill="#6d6d74" opacity=".6"/>`,
  };

  // ---------- photo frame ----------
  A.frame = {
    w: 108, h: 138,
    svg: () => `<defs>${shadowDef()}${lin('sky', [[0, '#5d6f99'], [.45, '#c98e86'], [.8, '#f2c58d'], [1, '#f7dca6']], 0, 1)}
      ${lin('lake', [[0, '#e7bf8d'], [.4, '#9d8296'], [1, '#3d4560']], 0, 1)}${lin('gilt', GOLD, 1, 1)}</defs>
      ${shadow(56, 136.5, 50, 2.8)}
      <path d="M4 4 H104 L92 16 H16Z" fill="#8a5a33"/><path d="M4 4 L16 16 V122 L4 134Z" fill="#6e4426"/>
      <path d="M104 4 V134 L92 122 V16Z" fill="#3f2513"/><path d="M4 134 L16 122 H92 L104 134Z" fill="#2e1b0d"/>
      <path d="M4 4 H104 L92 16 H16Z" fill="#fff" opacity=".08"/>
      <path d="M5 5.4 H103" stroke="#c48d5a" stroke-width=".8" opacity=".7"/>
      <rect x="15" y="15" width="78" height="108" fill="none" stroke="url(#@gilt)" stroke-width="2.4"/>
      <rect x="17" y="17" width="74" height="104" fill="#efe6d3"/>
      <rect x="27" y="29" width="54" height="80" fill="url(#@sky)"/>
      <circle cx="62" cy="68" r="6" fill="#fff1c7" opacity=".85"/>
      <path d="M27 72 L36 60 L44 66 L54 52 L66 66 L74 58 L81 66 V78 H27Z" fill="#7b6a86" opacity=".9"/>
      <path d="M27 76 L38 68 L48 74 L60 66 L72 74 L81 70 V80 H27Z" fill="#4c445e"/>
      <rect x="27" y="80" width="54" height="29" fill="url(#@lake)"/>
      <g stroke="#f6d7a4" stroke-width=".6" opacity=".55"><path d="M54 84 H70 M50 88 H66 M56 92 H64 M48 97 H58"/></g>
      <path d="M27 80 L30 70 L33 80Z M31 80 L35 64 L39 80Z M72 80 L76 66 L80 80Z M77 80 L80 72 L81 80Z" fill="#23202b"/>
      <path d="M27 108.6 H81" stroke="#000" opacity=".18"/>
      <path d="M26.4 28.4 H81.6 V109.6" fill="none" stroke="#fff" stroke-width=".8" opacity=".7"/>
      <path d="M26.4 28.4 V109.6 H81.6" fill="none" stroke="#9f927a" stroke-width=".8"/>
      <path d="M17 17 L60 17 L17 76Z" fill="#fff" opacity=".1"/><path d="M68 17 L91 17 L91 30 L40 121 L17 121 L17 112Z" fill="#fff" opacity=".05"/>`,
  };

  // ---------- hourglass ----------
  A.hourglass = {
    w: 66, h: 126,
    svg: () => {
      const glass = lathe(33, [[15, 16], [19, 20], [30, 21], [42, 17], [52, 8.5], [58, 3.4], [62, 3.4], [68, 8.5], [78, 17], [90, 21], [101, 20], [107, 16]]);
      const post = (x, d) => `<path d="${lathe(x, [[14, 2.6], [17, 3.6], [22, 2.2], [56, 2.4], [60, 3.6], [64, 2.4], [98, 2.2], [103, 3.6], [107, 2.6]])}" fill="url(#@${d ? 'wdD' : 'wd'})"/>`;
      return `<defs>${shadowDef()}${lin('wd', WALNUT)}${lin('wdD', [[0, '#1d1007'], [.5, '#4a2d18'], [1, '#1a0e06']])}
        ${lin('sand', [[0, '#c9974a'], [.4, '#ecc47c'], [1, '#a7792f']])}</defs>
        ${shadow(34, 124, 31, 3)}
        ${post(33, true)}
        <path d="${glass}" fill="#dceeed" opacity=".16"/>
        <path d="M20 44 C26 48 40 48 46 44 L36.4 56 Q33 59.6 29.6 56Z" fill="url(#@sand)"/>
        <path d="M33 58 V97" stroke="#d9ac5e" stroke-width="1" opacity=".9"/>
        <path d="M14 106 C19 94 27 89 33 88 C39 89 47 94 52 106Z" fill="url(#@sand)"/>
        <path d="${glass}" fill="none" stroke="#f4fbfa" stroke-width=".9" opacity=".45"/>
        <path d="M17 24 C16 32 18 40 25 48" stroke="#fff" stroke-width="1.6" fill="none" opacity=".55" stroke-linecap="round"/>
        <path d="M17 96 C16 88 19 80 25 73" stroke="#fff" stroke-width="1.6" fill="none" opacity=".45" stroke-linecap="round"/>
        ${post(8)}${post(58)}
        <path d="${lathe(33, [[3, 27], [6, 30], [10, 30], [13, 28], [15, 24]])}" fill="url(#@wd)"/>
        <path d="${lathe(33, [[107, 24], [109, 28], [113, 30], [117, 30], [120, 27], [122, 22]])}" fill="url(#@wd)"/>
        <rect x="8" y="121" width="7" height="4" rx="1.5" fill="#2a170b"/><rect x="51" y="121" width="7" height="4" rx="1.5" fill="#2a170b"/>`;
    },
  };

  // ---------- succulent ----------
  A.succulent = {
    w: 88, h: 90,
    svg: () => {
      const r = rng(7);
      const defs = [], els = [];
      const ring = (n, len, from, to, rad0, tone, seedBase) => {
        for (let i = 0; i < n; i++) {
          const a = from + (to - from) * (n === 1 ? .5 : i / (n - 1)) + (r() - .5) * 8;
          const l = len * (.86 + r() * .22), w = l * .34;
          const id = `sl${seedBase + i}`;
          const base = tone ? ['#8eb39e', '#c9dccd'] : ['#6f9a84', '#a9c6b2'];
          defs.push(lin(id, [[0, base[0]], [.75, base[1]], [1, '#d792a4']], 0, 0, 0, 1));
          const x = 44 + Math.cos(a * Math.PI / 180) * rad0, y = 56 + Math.sin(a * Math.PI / 180) * rad0 * .55;
          els.push({ y, el: `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(a + 90)})"><path d="M0 0 C${f(w)} ${f(-l * .25)} ${f(w * 1.05)} ${f(-l * .78)} 0 ${f(-l)} C${f(-w * 1.05)} ${f(-l * .78)} ${f(-w)} ${f(-l * .25)} 0 0Z" fill="url(#@${id})"/><path d="M0 -2 L0 ${f(-l * .85)}" stroke="#fff" stroke-width="1" opacity=".22"/></g>` });
        }
      };
      ring(9, 25, -175, -5, 6, 0, 1);
      ring(4, 20, 160, 20, 4, 0, 20);
      ring(7, 19, -160, -20, 3, 1, 40);
      ring(5, 13, -150, -30, 1, 1, 60);
      els.sort((a, b) => a.y - b.y);
      const specks = Array.from({ length: 40 }, () => `<circle cx="${f(24 + r() * 40)}" cy="${f(58 + r() * 30)}" r="${f(.35 + r() * .55)}"/>`).join('');
      return `<defs>${shadowDef()}${lin('pot', [[0, '#a69c8a'], [.2, '#f1ebdf'], [.45, '#e9e2d4'], [1, '#8d8370']])}${defs.join('')}</defs>
        ${shadow(46, 88.5, 26, 2.6)}
        <path d="M22 58 H66 L63 84 Q62.4 88 58 88 H30 Q25.6 88 25 84Z" fill="url(#@pot)"/>
        <g fill="#5d5448" opacity=".5">${specks}</g>
        <path d="M27 62 C27 70 28 78 30 85" stroke="#fff" stroke-width="2" fill="none" opacity=".45" stroke-linecap="round"/>
        <ellipse cx="44" cy="58" rx="22" ry="2.6" fill="#3b2a1d"/>
        ${els.map(e => e.el).join('')}
        <ellipse cx="44" cy="55" rx="2.2" ry="1.6" fill="#cfe0d2"/>`;
    },
  };

  // ---------- amethyst geode ----------
  A.crystal = {
    w: 106, h: 90,
    svg: () => {
      const r = rng(23);
      const cx = 53, cy = 50, RX = 48, RY = 38;
      const blob = (k, j) => Array.from({ length: 16 }, (_, i) => { const a = i / 16 * Math.PI * 2; const jj = 1 + (rng(500 + i)() - .5) * j; return [cx + Math.cos(a) * RX * k * jj, cy + Math.sin(a) * RY * k * jj]; });
      const outer = blob(1, .16).map(([x, y]) => [x, Math.min(y, 88)]);
      const cav = blob(.72, .1);
      const pts = [];
      for (let i = 0; i < 90; i++) {
        const a = r() * Math.PI * 2, rr = Math.sqrt(.12 + r() * .88);
        const x = cx + Math.cos(a) * RX * .7 * rr, y = cy + Math.sin(a) * RY * .7 * rr;
        pts.push({ x, y, a, rr });
      }
      pts.sort((p, q) => q.rr - p.rr);
      const pal = ['#d7b8f0', '#b48ade', '#8d5fc4', '#6a3ea1', '#4c2479'];
      const facets = pts.map(p => {
        const dirx = cx - p.x, diry = cy - p.y, d = Math.hypot(dirx, diry) || 1;
        const ux = dirx / d, uy = diry / d, len = 6 + r() * 9, bw = 3 + r() * 3.5;
        const tipx = p.x + ux * len, tipy = p.y + uy * len;
        const lx = p.x - uy * bw, ly = p.y + ux * bw, rx2 = p.x + uy * bw, ry2 = p.y - ux * bw;
        const lightSide = (ux * -.6 + uy * -.8) > 0;
        const ci = Math.min(4, Math.max(0, Math.round((1 - p.rr) * 2 + (p.y - cy) / RY * 1.2 + 1.2 + (r() - .5))));
        const c1 = pal[Math.max(0, ci - 1)], c2 = pal[Math.min(4, ci + 1)];
        return `<path d="M${f(lx)} ${f(ly)} L${f(tipx)} ${f(tipy)} L${f(p.x)} ${f(p.y)}Z" fill="${lightSide ? c1 : c2}"/><path d="M${f(rx2)} ${f(ry2)} L${f(tipx)} ${f(tipy)} L${f(p.x)} ${f(p.y)}Z" fill="${lightSide ? c2 : c1}"/>` +
          (r() > .7 ? `<circle cx="${f(tipx)}" cy="${f(tipy)}" r=".8" fill="#fff" opacity=".8"/>` : '');
      }).join('');
      const specks = Array.from({ length: 60 }, () => { const a = r() * Math.PI * 2, rr = .78 + r() * .2; return `<circle cx="${f(cx + Math.cos(a) * RX * rr)}" cy="${f(Math.min(86, cy + Math.sin(a) * RY * rr))}" r="${f(.4 + r() * .8)}"/>`; }).join('');
      return `<defs>${shadowDef()}${rad('rock', [[0, '#9a9084'], [.6, '#6b6257'], [1, '#3a332b']], .35, .3, .8)}
        ${rad('cv', [[0, '#1c0c2a'], [.7, '#3d1d5c'], [1, '#6a4790']])}${rad('dk', [[0, '#14061f', .55], [.5, '#14061f', 0]])}
        <clipPath id="@cav"><path d="${closedCurve(cav)}"/></clipPath></defs>
        ${shadow(54, 88, 48, 3)}
        <path d="${closedCurve(outer)}" fill="url(#@rock)"/>
        <g fill="#2d2721" opacity=".45">${specks}</g>
        <path d="${closedCurve(blob(.84, .12))}" fill="#e5def0"/>
        <path d="${closedCurve(blob(.79, .1))}" fill="#a993c6"/>
        <path d="${closedCurve(cav)}" fill="url(#@cv)"/>
        <g clip-path="url(#@cav)">${facets}<ellipse cx="${cx + 4}" cy="${cy + 2}" rx="${RX * .4}" ry="${RY * .4}" fill="url(#@dk)"/></g>
        <path d="M14 40 C18 26 32 16 48 13" stroke="#fff" stroke-width="2" fill="none" opacity=".18" stroke-linecap="round"/>`;
    },
  };

  // ---------- mantel clock ----------
  A.clock = {
    w: 132, h: 110,
    svg: () => {
      const cx = 66, cy = 62;
      const ticks = Array.from({ length: 12 }, (_, i) => { const a = i * 30 * Math.PI / 180, r1 = i % 3 ? 16.4 : 14.8, r2 = 18.4; return `<path d="M${f(cx + Math.sin(a) * r1)} ${f(cy - Math.cos(a) * r1)}L${f(cx + Math.sin(a) * r2)} ${f(cy - Math.cos(a) * r2)}" stroke-width="${i % 3 ? .8 : 1.6}"/>`; }).join('');
      return `<defs>${shadowDef()}${lin('mah', [[0, '#3a120a'], [.18, '#7a2e16'], [.38, '#a8502a'], [.55, '#86391b'], [.8, '#56200f'], [1, '#2e0e06']])}
        ${lin('sheen', [[0, '#fff', .18], [.35, '#fff', 0]], 0, 1)}${lin('br', BRASS, 1, 1)}${rad('dial', [[0, '#fffaf0'], [.75, '#f2e6c9'], [1, '#d4bf92']], .45, .4, .6)}</defs>
        ${shadow(66, 108.5, 62, 3)}
        <path d="M10 98 L10 78 C10 63 27 59 40 53 C48 31 84 31 92 53 C105 59 122 63 122 78 L122 98Z" fill="url(#@mah)"/>
        <path d="M10 98 L10 78 C10 63 27 59 40 53 C48 31 84 31 92 53 C105 59 122 63 122 78 L122 98Z" fill="url(#@sheen)"/>
        <path d="M15 95 L15 78.6 C15 66.6 30 63 43 57 C50 38 82 38 89 57 C102 63 117 66.6 117 78.6 L117 95Z" fill="none" stroke="#e1bf78" stroke-width=".8" opacity=".55"/>
        <rect x="5" y="97" width="122" height="7" rx="1.5" fill="#4a1a0c"/><rect x="5" y="97" width="122" height="1.6" fill="#c0703f" opacity=".5"/>
        <ellipse cx="17" cy="106" rx="7" ry="3" fill="url(#@br)"/><ellipse cx="115" cy="106" rx="7" ry="3" fill="url(#@br)"/>
        <circle cx="${cx}" cy="${cy}" r="25" fill="url(#@br)"/><circle cx="${cx}" cy="${cy}" r="21.5" fill="#6b4c1c"/>
        <circle cx="${cx}" cy="${cy}" r="20.6" fill="url(#@dial)"/>
        <g stroke="#2a1e14">${ticks}</g>
        <path d="M${cx} ${cy} L${cx - 8.6} ${cy - 5}" stroke="#1d150e" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M${cx} ${cy} L${cx + 11} ${cy - 12}" stroke="#1d150e" stroke-width="1.3" stroke-linecap="round"/>
        <circle cx="${cx}" cy="${cy}" r="1.8" fill="url(#@br)"/>
        <path d="M${cx - 16} ${cy - 8} A18 18 0 0 1 ${cx + 4} ${cy - 18}" stroke="#fff" stroke-width="2.4" fill="none" opacity=".45" stroke-linecap="round"/>`;
    },
  };

  // ---------- banker's lamp (reading table) ----------
  A.lamp = {
    w: 176, h: 272, glow: { x: 88, y: 104 }, light: true,
    svg: () => `<defs>${shadowDef()}${lin('br', BRASS)}${lin('brV', BRASS, 1, 1)}
      ${lin('shade', [[0, '#3f8a62'], [.35, '#1f5a3c'], [1, '#0b2a1b']], 0, 1)}${lin('hl', [[0, '#fff', 0], [.2, '#fff', .45], [.42, '#fff', 0]])}
      ${lin('cone', [[0, '#ffe3a6', .16], [1, '#ffe3a6', 0]], 0, 1)}</defs>
      ${shadow(92, 270, 70, 5)}
      <path d="M22 104 L154 104 L176 270 L0 270Z" fill="url(#@cone)" opacity=".5"/>
      <path d="${lathe(88, [[226, 9], [234, 13], [240, 28], [248, 54], [256, 66], [264, 70], [270, 70]])}" fill="url(#@br)"/>
      <path d="M84 104 L92 104 L92 226 L84 226Z" fill="url(#@br)"/>
      <path d="${lathe(88, [[150, 5], [154, 8], [158, 5], [190, 5], [194, 8.4], [198, 5]])}" fill="url(#@br)"/>
      <path d="M52 101 C52 118 70 124 88 124 C106 124 124 118 124 101" stroke="url(#@brV)" stroke-width="3.4" fill="none"/>
      <path d="M134 104 V140" stroke="#c9a04f" stroke-width="1.2" stroke-dasharray="1.6 1.4"/><circle cx="134" cy="143" r="3.2" fill="url(#@br)"/>
      <path d="M14 98 C14 70 40 56 88 56 C136 56 162 70 162 98 L162 103 L14 103Z" fill="url(#@shade)"/>
      <path d="M14 98 C14 70 40 56 88 56 C136 56 162 70 162 98 L162 103 L14 103Z" fill="url(#@hl)"/>
      <path d="M30 76 C46 64 70 60 96 60" stroke="#c9f0d8" stroke-width="2.4" fill="none" opacity=".4" stroke-linecap="round"/>
      <rect x="12" y="98" width="152" height="6" rx="2" fill="url(#@br)"/>
      <ellipse cx="88" cy="104.5" rx="72" ry="2.4" fill="#fff4cf" opacity=".95"/>
      <path d="M10 92 Q10 104 18 104 L18 86 Q12 86 10 92Z M166 92 Q166 104 158 104 L158 86 Q164 86 166 92Z" fill="url(#@br)"/>`,
  };

  // ---------- reading glasses (lying on the table) ----------
  A.glasses = {
    w: 156, h: 62,
    svg: () => `<defs>${lin('tort', [[0, '#2c1608'], [.3, '#7a4416'], [.5, '#b07028'], [.7, '#5a2e0e'], [1, '#2a1406']], 1, 1)}
      ${lin('lens', [[0, '#fff', .38], [.4, '#fff', .06], [1, '#cfe3ea', .14]], 1, 1)}</defs>
      <g fill="#000" opacity=".28" transform="translate(5 7)"><ellipse cx="44" cy="36" rx="30" ry="16"/><ellipse cx="112" cy="36" rx="30" ry="16"/></g>
      <path d="M22 26 L4 16 M134 26 L152 12" stroke="url(#@tort)" stroke-width="3" stroke-linecap="round"/>
      <path d="M26 24 C60 10 96 10 132 20" stroke="url(#@tort)" stroke-width="2.6" fill="none"/>
      <ellipse cx="44" cy="35" rx="29" ry="15.5" fill="url(#@lens)"/><ellipse cx="112" cy="35" rx="29" ry="15.5" fill="url(#@lens)"/>
      <ellipse cx="44" cy="35" rx="29" ry="15.5" fill="none" stroke="url(#@tort)" stroke-width="4.2"/>
      <ellipse cx="112" cy="35" rx="29" ry="15.5" fill="none" stroke="url(#@tort)" stroke-width="4.2"/>
      <path d="M72 30 Q78 24 84 30" stroke="url(#@tort)" stroke-width="3.6" fill="none"/>
      <ellipse cx="34" cy="28" rx="9" ry="3" fill="#fff" opacity=".55" transform="rotate(-14 34 28)"/>
      <ellipse cx="102" cy="28" rx="9" ry="3" fill="#fff" opacity=".45" transform="rotate(-14 102 28)"/>`,
  };

  // ---------- ink and quill ----------
  A.inkwell = {
    w: 112, h: 200,
    svg: () => {
      const r = rng(5);
      const barbs = [];
      for (let i = 0; i < 46; i++) {
        const t = .12 + i / 46 * .82;
        const x = 52 + (100 - 52) * t + Math.sin(t * 3) * 4, y = 158 - (158 - 8) * t;
        const len = (t < .2 ? t * 70 : t > .9 ? (1 - t) * 120 : 14) * (.85 + r() * .3);
        barbs.push(`<path d="M${f(x)} ${f(y)} q${f(-len * .5)} ${f(len * .2)} ${f(-len)} ${f(len * .9)}" stroke="#efe8da" stroke-width="1.1" opacity="${f(.55 + r() * .4)}"/>`);
        barbs.push(`<path d="M${f(x)} ${f(y)} q${f(len * .3)} ${f(len * .3)} ${f(len * .7)} ${f(len * .8)}" stroke="#d9d0bf" stroke-width="1" opacity="${f(.45 + r() * .4)}"/>`);
      }
      return `<defs>${shadowDef()}${lin('gl', [[0, '#0d1418'], [.25, '#2b3a40'], [.4, '#4a5d63'], [.6, '#1c272b'], [1, '#080c0e']])}${lin('br', BRASS)}</defs>
        ${shadow(46, 198.5, 36, 3)}
        <path d="M14 162 L78 162 L82 196 Q82 198 78 198 L14 198 Q10 198 10 196Z" fill="url(#@gl)"/>
        <path d="M14 162 L36 162 L34 198 L12 198Z" fill="#fff" opacity=".07"/>
        <path d="M58 162 L78 162 L82 196 L60 198Z" fill="#000" opacity=".25"/>
        <rect x="30" y="150" width="32" height="13" rx="2" fill="url(#@br)"/>
        <ellipse cx="46" cy="150" rx="16" ry="2.4" fill="#0b0b0d"/>
        <path d="M20 168 C19 178 20 188 22 194" stroke="#fff" stroke-width="1.6" fill="none" opacity=".3" stroke-linecap="round"/>
        <g fill="none">${barbs.join('')}</g>
        <path d="M50 164 C66 120 86 64 101 6" stroke="#cdbf9e" stroke-width="1.6" fill="none"/>
        <path d="M50 164 C55 150 58 142 60 136" stroke="#3a3026" stroke-width="1.8" fill="none"/>`;
    },
  };

  // ---------- pocket watch ----------
  A.watch = {
    w: 128, h: 66,
    svg: () => {
      const links = Array.from({ length: 14 }, (_, i) => { const t = i / 13; const x = 62 + t * 58, y = 14 + Math.sin(t * 4) * 8 + t * 24; return `<ellipse cx="${f(x)}" cy="${f(y)}" rx="2.6" ry="1.6" fill="none" stroke="url(#@gd)" stroke-width="1.2" transform="rotate(${f(30 + i * 20)} ${f(x)} ${f(y)})"/>`; }).join('');
      const ticks = Array.from({ length: 12 }, (_, i) => { const a = i * 30 * Math.PI / 180; return `<path d="M${f(40 + Math.sin(a) * 15)} ${f(38 - Math.cos(a) * 9)}L${f(40 + Math.sin(a) * 17.4)} ${f(38 - Math.cos(a) * 10.4)}"/>`; }).join('');
      return `<defs>${lin('gd', GOLD, 1, 1)}${rad('dial', [[0, '#fffdf6'], [1, '#e6dcc6']], .4, .35, .7)}</defs>
        <ellipse cx="45" cy="44" rx="29" ry="18" fill="#000" opacity=".3"/>
        ${links}
        <ellipse cx="40" cy="38" rx="27" ry="17" fill="url(#@gd)"/>
        <ellipse cx="40" cy="38" rx="22" ry="13.4" fill="#7a5410"/>
        <ellipse cx="40" cy="38" rx="21" ry="12.8" fill="url(#@dial)"/>
        <g stroke="#2a1e14" stroke-width=".8">${ticks}</g>
        <path d="M40 38 L33 33 M40 38 L50 31" stroke="#1d150e" stroke-width="1.1" stroke-linecap="round"/>
        <ellipse cx="40" cy="38" rx="1.4" ry=".9" fill="#1d150e"/>
        <rect x="37" y="17" width="6" height="5" rx="1" fill="url(#@gd)"/>
        <ellipse cx="40" cy="14.6" rx="6" ry="4" fill="none" stroke="url(#@gd)" stroke-width="1.8"/>
        <path d="M24 31 A21 12.8 0 0 1 44 25.6" stroke="#fff" stroke-width="2" fill="none" opacity=".45"/>`;
    },
  };

  // ---------- journal and pencil ----------
  A.journal = {
    w: 200, h: 92,
    svg: () => `<defs>${lin('lea', [[0, '#5c2a16'], [.4, '#7e3d1f'], [1, '#3d1a0c']], 1, 1)}${lin('pen', [[0, '#c88d16'], [.4, '#f2c443'], [1, '#a26f0c']], 0, 1)}</defs>
      <path d="M26 40 L150 26 L186 62 L54 80Z" fill="#000" opacity=".3" transform="translate(6 7)"/>
      <path d="M54 80 L186 62 L186 69 L55 87Z" fill="#e8dcc0"/>
      <g stroke="#b9a884" stroke-width=".5"><path d="M56 82.4 L186 64.6 M56 84.6 L186 66.8"/></g>
      <path d="M26 40 L54 80 L55 87 L27 47Z" fill="#3a170a"/>
      <path d="M26 40 L150 26 L186 62 L54 80Z" fill="url(#@lea)"/>
      <path d="M31 41.6 L147 28.6 L179 61 L57 77.4Z" fill="none" stroke="#c99a52" stroke-width=".7" opacity=".55"/>
      <path d="M128 28.6 L162 74 L166 73.4 L132 28.2Z" fill="#1d0c05" opacity=".85"/>
      <path d="M96 76 Q100 86 92 92 M100 75.4 Q106 84 102 92" stroke="#7a1a1d" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M30 40 L148 27" stroke="#fff" stroke-width="1" opacity=".18"/>
      <g transform="rotate(-24 110 46)"><rect x="50" y="42" width="112" height="7" rx="1" fill="url(#@pen)"/>
        <path d="M162 42 L176 45.5 L162 49Z" fill="#e3c193"/><path d="M171 44.3 L176 45.5 L171 46.7Z" fill="#333"/>
        <rect x="42" y="42" width="9" height="7" fill="#b9b2a2"/><rect x="34" y="42" width="9" height="7" rx="2.4" fill="#d9817a"/>
        <path d="M50 44.2 H162" stroke="#fff" stroke-width=".7" opacity=".5"/></g>`,
  };

  // ---------- goal trophy ----------
  function trophy(year, n) {
    return `<defs>${shadowDef()}${lin('gd', GOLD)}${lin('gdV', GOLD, 1, 1)}${lin('wd', WALNUT)}${lin('pl', BRASS)}
      ${rad('in', [[0, '#5a3c08'], [1, '#c99a34']], .5, .2, .8)}</defs>
      ${shadow(50, 149, 46, 3)}
      <path d="M21 25 C3 23 2 50 27 55" stroke="#6b4a0c" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M21 25 C3 23 2 50 27 55" stroke="url(#@gdV)" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M79 25 C97 23 98 50 73 55" stroke="#6b4a0c" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M79 25 C97 23 98 50 73 55" stroke="url(#@gdV)" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="${lathe(50, [[16, 30], [21, 30.4], [31, 29.6], [41, 27], [50, 21.6], [58, 14.4], [64, 8.6], [68, 6], [72, 5.4], [75, 8.6], [79, 8.8], [83, 5], [90, 5], [95, 11], [99, 16.4], [102, 18]])}" fill="url(#@gd)"/>
      <ellipse cx="50" cy="16" rx="30" ry="3.6" fill="url(#@in)"/>
      <ellipse cx="50" cy="16" rx="30" ry="3.6" fill="none" stroke="#fff3c2" stroke-width="1"/>
      <g fill="none" stroke="#7a5410" stroke-width="1" opacity=".8" stroke-linecap="round">
        <path d="M50 44 C45 40 39 40 35 42 L35 30 C39 28 45 28 50 32Z"/><path d="M50 44 C55 40 61 40 65 42 L65 30 C61 28 55 28 50 32Z"/><path d="M50 32 V44"/></g>
      <path d="M30 22 C30 34 34 46 42 54" stroke="#fffbe0" stroke-width="2.4" fill="none" opacity=".55" stroke-linecap="round"/>
      <path d="M16 104 L84 104 L88 110 L12 110Z" fill="#a8744a"/>
      <rect x="12" y="110" width="76" height="38" fill="url(#@wd)"/>
      <rect x="12" y="110" width="76" height="2" fill="#fff" opacity=".12"/>
      <rect x="25" y="117" width="50" height="25" rx="1.5" fill="url(#@pl)"/>
      <rect x="25" y="117" width="50" height="25" rx="1.5" fill="none" stroke="#3b2a0e" stroke-width=".8"/>
      <text x="50" y="129.6" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11" font-weight="700" fill="#3a2608">${year}</text>
      <text x="50" y="138.4" text-anchor="middle" font-family="Georgia, serif" font-size="6" letter-spacing=".4" fill="#3a2608">${n} BOOKS</text>`;
  }

  // ---------- shelf trinkets: Poly Haven models (CC0) rendered true to scale ----------
  // Each is a cut-out picture with its own soft shadow, lit from the upper left like the rest
  // (rendered from room/models/trinkets; 8.2 units per real centimetre, like the drawn pieces)
  Object.assign(A, {
    pottedplant: {"w": 168.5, "h": 256.0, "base": 256.0, "img": "tex/trinkets/pottedplant.webp"},
    aloe: {"w": 135.0, "h": 149.0, "base": 149.0, "img": "tex/trinkets/aloe.webp"},
    bookstack: {"w": 243.5, "h": 94.0, "base": 94.0, "img": "tex/trinkets/bookstack.webp", "top": {"y": 25.2, "x0": 6.2, "x1": 222.8}},
    camera: {"w": 213.5, "h": 90.0, "base": 90.0, "img": "tex/trinkets/camera.webp"},
    compass: {"w": 94.0, "h": 90.0, "base": 90.0, "img": "tex/trinkets/compass.webp"},
    binoculars: {"w": 189.5, "h": 80.5, "base": 80.1, "img": "tex/trinkets/binoculars.webp"},
    horse: {"w": 154.5, "h": 185.5, "base": 184.1, "img": "tex/trinkets/horse.webp"},
    bust: {"w": 141.0, "h": 211.0, "base": 211.0, "img": "tex/trinkets/bust.webp"},
    lion: {"w": 189.0, "h": 209.0, "base": 208.5, "img": "tex/trinkets/lion.webp"},
    photo: {"w": 183.0, "h": 175.0, "base": 174.2, "img": "tex/trinkets/photo.webp"},
    stonecat: {"w": 108.5, "h": 170.0, "base": 170.0, "img": "tex/trinkets/stonecat.webp"},
    oillantern: {"w": 137.0, "h": 218.5, "base": 217.3, "img": "tex/trinkets/oillantern.webp"},
    seashell: {"w": 124.5, "h": 46.5, "base": 46.5, "img": "tex/trinkets/seashell.webp"},
    brassvase: {"w": 113.5, "h": 172.5, "base": 172.1, "img": "tex/trinkets/brassvase.webp"},
    chinavase: {"w": 165.5, "h": 209.5, "base": 209.5, "img": "tex/trinkets/chinavase.webp"},
  });

  // ---------- reading-table pieces: Poly Haven models (CC0), seen from above as on a table ----------
  Object.assign(A, {
    tb_lamp: {"w": 240.0, "h": 284.0, "base": 284.0, "img": "tex/table/lamp.webp", "glow": {"x": 144.0, "y": 85.2}},
    tb_candle: {"w": 108.5, "h": 176.0, "base": 175.2, "img": "tex/table/candle.webp"},
    tb_tea: {"w": 130.5, "h": 103.0, "base": 103.0, "img": "tex/table/tea.webp"},
    tb_teapot: {"w": 157.5, "h": 167.0, "base": 167.0, "img": "tex/table/teapot.webp"},
    tb_glasses: {"w": 145.5, "h": 87.0, "base": 87.0, "img": "tex/table/glasses.webp"},
    tb_magnifier: {"w": 165.5, "h": 124.5, "base": 124.5, "img": "tex/table/magnifier.webp"},
    tb_plant: {"w": 121.5, "h": 129.5, "base": 129.5, "img": "tex/table/plant.webp"},
    tb_books: {"w": 246.5, "h": 137.0, "base": 137.0, "img": "tex/table/books.webp"},
    tb_watch: {"w": 57.5, "h": 41.5, "base": 41.5, "img": "tex/table/watch.webp"},
    tb_journal: {"w": 318.0, "h": 120.5, "base": 120.5, "img": "tex/table/journal.webp"},
    tb_apple: {"w": 96.5, "h": 85.0, "base": 85.0, "img": "tex/table/apple.webp"},
  });

  // ---------- rendering ----------
  let seq = 0;
  // draw one art piece at a scale; ids become unique so repeated copies never clash
  function draw(key, scale = 1, extra = '') {
    const a = A[key];
    if (!a) return '';
    if (a.img) { const k = (a.k || 1) * scale; return `<img src="${a.img}" width="${f(a.w * k)}" height="${f(a.h * k)}" alt="" aria-hidden="true" draggable="false" decoding="async" ${extra}>`; }
    const p = `t${(++seq).toString(36)}`;
    const body = a._svg || (a._svg = a.svg());
    const k = (a.k || 1) * scale;
    return `<svg viewBox="0 0 ${a.w} ${a.h}" width="${f(a.w * k)}" height="${f(a.h * k)}" aria-hidden="true" focusable="false" ${extra}>${body.replace(/@(\w+)/g, `${p}$1`)}</svg>`;
  }
  function drawTrophy(year, n, scale = 1) {
    const p = `t${(++seq).toString(36)}`;
    return `<svg viewBox="0 0 100 152" width="${f(100 * scale)}" height="${f(152 * scale)}" aria-hidden="true" focusable="false">${trophy(year, n).replace(/@(\w+)/g, `${p}$1`)}</svg>`;
  }
  const size = (key) => { const a = A[key]; const k = a.k || 1; return { w: a.w * k, h: a.h * k, base: (a.base ?? a.h) * k, top: a.top && { y: a.top.y * k, x0: a.top.x0 * k, x1: a.top.x1 * k }, glow: a.glow && { x: a.glow.x * k, y: a.glow.y * k } }; };

  window.TomesteadArt = { A, draw, drawTrophy, size, rng, curve, closedCurve, lathe, lin, rad };
})();
