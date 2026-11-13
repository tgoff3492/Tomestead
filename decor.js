/* Tomestead decor catalog: wallpapers, wood finishes, bookends and trinkets */
(() => {
  'use strict';
  const svgURL = (svg) => `url('data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim()).replace(/'/g, '%27')}')`;

  // ---------- wallpapers (tiled SVG) ----------
  const WALLPAPERS = [
    { key: 'forest', name: 'Forest damask', color: '#1d2e27', size: 44,
      tile: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44">
        <ellipse cx="22" cy="22" rx="8" ry="12" fill="none" stroke="#c9a15b" stroke-opacity=".10" stroke-width="1.5"/>
        <circle cx="22" cy="22" r="2.5" fill="#c9a15b" fill-opacity=".12"/>
        <circle cx="0" cy="0" r="1.6" fill="#c9a15b" fill-opacity=".1"/><circle cx="44" cy="0" r="1.6" fill="#c9a15b" fill-opacity=".1"/>
        <circle cx="0" cy="44" r="1.6" fill="#c9a15b" fill-opacity=".1"/><circle cx="44" cy="44" r="1.6" fill="#c9a15b" fill-opacity=".1"/>
        <rect x="0" y="0" width="1" height="44" fill="#000" fill-opacity=".1"/></svg>` },
    { key: 'claret', name: 'Claret stripe', color: '#3b1a1f', size: 40,
      tile: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <rect x="0" width="2" height="40" fill="#e6c886" fill-opacity=".16"/>
        <rect x="18" width="14" height="40" fill="#000" fill-opacity=".14"/>
        <rect x="24" width="1" height="40" fill="#e6c886" fill-opacity=".08"/></svg>` },
    { key: 'midnight', name: 'Midnight stars', color: '#172238', size: 56,
      tile: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56">
        <path d="M14 8 L15.6 12.4 L20 14 L15.6 15.6 L14 20 L12.4 15.6 L8 14 L12.4 12.4Z" fill="#e6c886" fill-opacity=".35"/>
        <path d="M42 36 L43 39 L46 40 L43 41 L42 44 L41 41 L38 40 L41 39Z" fill="#e6c886" fill-opacity=".28"/>
        <circle cx="40" cy="12" r="1" fill="#efe3c8" fill-opacity=".3"/><circle cx="16" cy="44" r="1.2" fill="#efe3c8" fill-opacity=".25"/></svg>` },
    { key: 'sage', name: 'Sage trellis', color: '#33402f', size: 36,
      tile: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <path d="M0 0 L36 36 M36 0 L0 36" stroke="#efe3c8" stroke-opacity=".07" stroke-width="2"/>
        <circle cx="18" cy="18" r="3" fill="#efe3c8" fill-opacity=".09"/>
        <path d="M18 8 C21 11 21 13 18 15 C15 13 15 11 18 8Z" fill="#a9c29a" fill-opacity=".12"/>
        <path d="M18 28 C21 25 21 23 18 21 C15 23 15 25 18 28Z" fill="#a9c29a" fill-opacity=".12"/></svg>` },
    { key: 'tartan', name: 'Highland tartan', color: '#1f2d27', size: 60,
      tile: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
        <rect y="20" width="60" height="16" fill="#7a1f26" fill-opacity=".38"/>
        <rect x="20" width="16" height="60" fill="#7a1f26" fill-opacity=".30"/>
        <rect y="6" width="60" height="4" fill="#1f3350" fill-opacity=".5"/><rect x="6" width="4" height="60" fill="#1f3350" fill-opacity=".45"/>
        <rect y="27" width="60" height="1.5" fill="#e6c886" fill-opacity=".3"/><rect x="27" width="1.5" height="60" fill="#e6c886" fill-opacity=".25"/></svg>` },
    { key: 'paneling', name: 'Wood paneling', color: '#33221a', size: 72,
      tile: `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <rect x="0" width="70" height="72" fill="#3c281c"/>
        <path d="M12 0 C16 20 10 40 14 72 M34 0 C30 24 38 48 33 72 M54 0 C58 18 52 50 57 72" stroke="#000" stroke-opacity=".12" stroke-width="1.5" fill="none"/>
        <rect x="70" width="2" height="72" fill="#1a110b"/><rect x="0" width="1" height="72" fill="#fff" fill-opacity=".05"/></svg>` },
    { key: 'brick', name: 'Old brick', color: '#2a1713', size: 64,
      tile: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="32">
        <rect x="1" y="1" width="62" height="14" rx="1" fill="#5b2e24"/>
        <rect x="-31" y="17" width="62" height="14" rx="1" fill="#52291f"/>
        <rect x="33" y="17" width="62" height="14" rx="1" fill="#5e3127"/>
        <rect x="1" y="1" width="62" height="3" fill="#fff" fill-opacity=".04"/></svg>`, h: 32 },
  ];

  // ---------- wood finishes ----------
  const WOODS = [
    { key: 'walnut', name: 'Walnut',      v: ['#8d6440', '#7a5232', '#5a3a22', '#3b2415', '#2a190e', '#2c1a0f', '#3a2415'] },
    { key: 'oak',    name: 'Honey oak',   v: ['#c99d66', '#b48654', '#95693d', '#6e4b2a', '#4f3520', '#3a2a1a', '#4a3523'] },
    { key: 'cherry', name: 'Cherry',      v: ['#ad5b3e', '#8f4530', '#6f3222', '#4c2116', '#331610', '#2c130d', '#3b1a12'] },
    { key: 'ebony',  name: 'Ebony',       v: ['#57504b', '#3a3532', '#2a2624', '#1b1817', '#121010', '#141110', '#1d1917'] },
    { key: 'sage',   name: 'Painted sage',v: ['#9cad92', '#7f9277', '#67795f', '#4d5c47', '#38432f', '#2b3328', '#364030'] },
    { key: 'white',  name: 'Whitewashed', v: ['#eee6d6', '#d4c8b2', '#b9ab93', '#968872', '#7a6d59', '#4a4236', '#5a5042'] },
  ];

  // ---------- bookends (drawn as the LEFT bookend; mirrored on the right) ----------
  const BOOKENDS = {
    brass: { name: 'Brass curl', w: 34, svg: `<svg viewBox="0 0 34 110" width="34" height="110">
        <path d="M4 110 V30 Q4 8 26 6 Q14 22 14 40 V96 H30 V110Z" fill="#b08a48"/>
        <path d="M8 104 V32 Q8 16 20 11" stroke="#e6c886" stroke-width="2" fill="none" opacity=".7"/></svg>` },
    marble: { name: 'Marble block', w: 34, svg: `<svg viewBox="0 0 34 110" width="34" height="110">
        <rect x="2" y="18" width="30" height="92" rx="3" fill="#e9e4da"/>
        <path d="M6 30 C14 40 10 56 20 64 S26 90 30 96" stroke="#a9a49a" stroke-width="1.4" fill="none" opacity=".8"/>
        <path d="M4 70 C10 72 12 80 18 84" stroke="#bdb7ac" stroke-width="1" fill="none"/>
        <rect x="2" y="18" width="30" height="4" rx="2" fill="#fff" opacity=".6"/></svg>` },
    oak: { name: 'Carved oak', w: 36, svg: `<svg viewBox="0 0 36 110" width="36" height="110">
        <path d="M2 110 V24 Q2 6 18 6 Q34 6 34 24 V110Z" fill="#8b5e34"/>
        <path d="M8 110 V28 Q8 14 18 14 Q28 14 28 28 V110" stroke="#5e3d20" stroke-width="2" fill="none"/>
        <path d="M14 40 C16 60 12 80 15 104 M22 36 C20 58 24 82 21 104" stroke="#6e4826" stroke-width="1" fill="none" opacity=".7"/>
        <circle cx="18" cy="26" r="3" fill="#c9a15b"/></svg>` },
    owl: { name: 'Iron owl', w: 40, svg: `<svg viewBox="0 0 40 110" width="40" height="110">
        <rect x="2" y="94" width="36" height="16" rx="2" fill="#2f2f33"/>
        <path d="M20 94 C4 94 4 70 6 58 C8 46 12 40 20 40 C28 40 32 46 34 58 C36 70 36 94 20 94Z" fill="#3e3e44"/>
        <path d="M8 46 L6 32 L15 42Z M32 46 L34 32 L25 42Z" fill="#3e3e44"/>
        <circle cx="14" cy="52" r="6" fill="#2a2a2e"/><circle cx="26" cy="52" r="6" fill="#2a2a2e"/>
        <circle cx="14" cy="52" r="3" fill="#e6c886"/><circle cx="26" cy="52" r="3" fill="#e6c886"/>
        <path d="M18 58 L20 63 L22 58Z" fill="#c9a15b"/>
        <path d="M13 72 q3 3 6 0 M21 72 q3 3 6 0 M15 80 q3 3 6 0 M19 80 q3 3 6 0" stroke="#58585f" stroke-width="1.4" fill="none"/></svg>` },
    stones: { name: 'River stones', w: 40, svg: `<svg viewBox="0 0 40 110" width="40" height="110">
        <ellipse cx="20" cy="100" rx="19" ry="10" fill="#6d6a64"/>
        <ellipse cx="19" cy="82" rx="15" ry="9" fill="#8c877d"/>
        <ellipse cx="21" cy="66" rx="12" ry="8" fill="#5e5b56"/>
        <ellipse cx="20" cy="52" rx="9" ry="6.5" fill="#a39d90"/>
        <ellipse cx="16" cy="96" rx="6" ry="2" fill="#fff" opacity=".12"/><ellipse cx="15" cy="79" rx="5" ry="2" fill="#fff" opacity=".12"/></svg>` },
    none: { name: 'No bookends', w: 0, svg: '' },
  };

  // ---------- trinkets ----------
  const TRINKETS = {
    plant: { name: 'Potted plant', w: 56, svg: `<svg viewBox="0 0 56 92" width="56" height="92">
      <path d="M28 54 C10 44 4 26 10 12 C20 22 26 36 28 54Z" fill="#4d7a45"/>
      <path d="M28 54 C44 46 52 30 48 14 C38 24 30 38 28 54Z" fill="#5f9152"/>
      <path d="M28 56 C22 40 24 18 32 4 C36 22 34 40 28 56Z" fill="#3f6a3a"/>
      <path d="M12 56 h32 l-4 34 h-24 z" fill="#b5653b"/><rect x="10" y="54" width="36" height="7" rx="2" fill="#c97a4b"/></svg>` },
    candle: { name: 'Candle', w: 40, svg: `<svg viewBox="0 0 40 100" width="40" height="100">
      <defs><radialGradient id="tg-candle" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd27a" stop-opacity=".75"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs>
      <circle cx="20" cy="22" r="20" fill="url(#tg-candle)"/>
      <path d="M20 10 C24 17 25 22 20 28 C15 22 16 17 20 10Z" fill="#ffcf6b"/><path d="M20 17 C22 21 22 24 20 27 C18 24 18 21 20 17Z" fill="#fff4c9"/>
      <rect x="19" y="27" width="2" height="5" fill="#2a1e16"/>
      <rect x="12" y="32" width="16" height="56" rx="2" fill="#efe3c8"/><path d="M12 36 q4 6 0 12" stroke="#d9cba8" stroke-width="3" fill="none"/>
      <ellipse cx="20" cy="92" rx="18" ry="5" fill="#c9a15b"/><rect x="8" y="86" width="24" height="6" rx="2" fill="#b08a48"/></svg>` },
    teacup: { name: 'Cup of tea', w: 64, svg: `<svg viewBox="0 0 64 70" width="64" height="70">
      <path d="M22 8 q-4 6 0 12 q4 6 0 12" stroke="#efe3c8" stroke-width="2" fill="none" opacity=".35"/>
      <path d="M32 4 q-4 6 0 12 q4 6 0 12" stroke="#efe3c8" stroke-width="2" fill="none" opacity=".25"/>
      <path d="M8 34 h40 v10 q0 18 -20 18 q-20 0 -20 -18z" fill="#2e5e5e"/><path d="M48 40 q12 0 10 9 q-2 7 -12 6" stroke="#2e5e5e" stroke-width="5" fill="none"/>
      <rect x="8" y="34" width="40" height="4" fill="#e8c766" opacity=".6"/><ellipse cx="28" cy="66" rx="26" ry="4" fill="#efe3c8"/></svg>` },
    globe: { name: 'Globe', w: 62, svg: `<svg viewBox="0 0 62 100" width="62" height="100">
      <circle cx="31" cy="40" r="26" fill="#2e5e5e"/><path d="M18 26 q8 4 10 14 q-6 6 -2 14 q-10-6-8-28Z M38 20 q10 6 12 18 q-8-2-10 6 q-6-10-2-24Z" fill="#c2a26a"/>
      <path d="M8 40 a23 26 0 0 0 46 0" stroke="#c9a15b" stroke-width="3" fill="none"/>
      <rect x="29" y="66" width="4" height="20" fill="#7a5232"/><ellipse cx="31" cy="92" rx="18" ry="6" fill="#5a3a22"/></svg>` },
    stack: { name: 'Book stack', w: 96, svg: `<svg viewBox="0 0 96 46" width="96" height="46">
      <rect x="6" y="30" width="86" height="16" rx="2" fill="#1f3350"/><rect x="6" y="34" width="86" height="2" fill="#e8c766" opacity=".6"/>
      <rect x="12" y="16" width="74" height="14" rx="2" fill="#6e1f24"/><rect x="12" y="20" width="74" height="1.5" fill="#e8c766" opacity=".6"/>
      <rect x="2" y="3" width="80" height="13" rx="2" fill="#4f6b3a"/><rect x="2" y="7" width="80" height="1.5" fill="#f4e7c8" opacity=".5"/></svg>` },
    cat: { name: 'Sleeping cat', w: 86, svg: `<svg viewBox="0 0 86 56" width="86" height="56">
      <path d="M10 54 C2 54 2 36 16 30 C28 24 48 22 62 28 C74 33 80 44 78 54Z" fill="#c46e2f"/>
      <path d="M26 30 q2 8 0 22 M38 26 q2 10 0 26 M50 26 q-2 10 0 26" stroke="#9c5220" stroke-width="3" fill="none" opacity=".7"/>
      <circle cx="66" cy="36" r="14" fill="#c46e2f"/>
      <path d="M55 30 L57 15 L65 25Z M70 24 L78 14 L79 31Z" fill="#c46e2f"/>
      <path d="M58 26 L58.8 19 L62.5 24Z" fill="#e8a37e"/>
      <path d="M59 38 q3 2.5 6 0 M68 38 q3 2.5 6 0" stroke="#4a2410" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M66 42 l-1.5 1.5 h3z" fill="#7a3a1a"/>
      <path d="M12 52 C-2 48 4 38 20 46" stroke="#c46e2f" stroke-width="7" fill="none" stroke-linecap="round"/>
      <text x="76" y="12" font-family="Georgia,serif" font-size="10" fill="#efe3c8" opacity=".55">z</text>
      <text x="81" y="5" font-family="Georgia,serif" font-size="7" fill="#efe3c8" opacity=".4">z</text></svg>` },
    lantern: { name: 'Lantern', w: 46, svg: `<svg viewBox="0 0 46 100" width="46" height="100">
      <defs><radialGradient id="tg-lantern" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd27a" stop-opacity=".6"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs>
      <circle cx="23" cy="56" r="23" fill="url(#tg-lantern)"/>
      <circle cx="23" cy="7" r="5" fill="none" stroke="#2f2f33" stroke-width="2.5"/>
      <path d="M9 23 L23 12 L37 23Z" fill="#2f2f33"/><rect x="7" y="23" width="32" height="5" fill="#3a3a3f"/>
      <rect x="11" y="28" width="24" height="52" fill="#ffd27a" opacity=".22"/>
      <path d="M23 44 C27 50 27 57 23 63 C19 57 19 50 23 44Z" fill="#ffcf6b"/><path d="M23 52 C24.5 55 24.5 58 23 61 C21.5 58 21.5 55 23 52Z" fill="#fff4c9"/>
      <rect x="10" y="28" width="3" height="52" fill="#2f2f33"/><rect x="33" y="28" width="3" height="52" fill="#2f2f33"/>
      <rect x="7" y="80" width="32" height="7" fill="#3a3a3f"/><rect x="9" y="87" width="28" height="13" rx="1" fill="#2f2f33"/></svg>` },
    frame: { name: 'Photo frame', w: 58, svg: `<svg viewBox="0 0 58 72" width="58" height="72">
      <rect x="2" y="2" width="54" height="68" rx="2" fill="#b08a48"/><rect x="6" y="6" width="46" height="60" fill="#efe3c8"/>
      <rect x="11" y="11" width="36" height="50" fill="#9cc0c8"/><circle cx="37" cy="22" r="5" fill="#f4d58a"/>
      <path d="M11 48 Q22 36 31 46 T47 42 V61 H11Z" fill="#5f8a55"/><path d="M11 54 Q26 46 47 54 V61 H11Z" fill="#4d7a45"/></svg>` },
    hourglass: { name: 'Hourglass', w: 40, svg: `<svg viewBox="0 0 40 84" width="40" height="84">
      <path d="M10 8 H30 C30 26 22 34 21 42 C22 50 30 58 30 76 H10 C10 58 18 50 19 42 C18 34 10 26 10 8Z" fill="#dfeceb" opacity=".3"/>
      <path d="M14 20 H26 C25 30 21 36 20 40 C19 36 15 30 14 20Z" fill="#d9b26a"/>
      <path d="M20 42 V66" stroke="#d9b26a" stroke-width="1"/><path d="M12 76 C14 66 26 66 28 76Z" fill="#d9b26a"/>
      <rect x="2" y="0" width="36" height="8" rx="2" fill="#7a5232"/><rect x="2" y="76" width="36" height="8" rx="2" fill="#7a5232"/>
      <rect x="4" y="8" width="3" height="68" fill="#5a3a22"/><rect x="33" y="8" width="3" height="68" fill="#5a3a22"/></svg>` },
    succulent: { name: 'Succulent', w: 44, svg: `<svg viewBox="0 0 44 56" width="44" height="56">
      <path d="M22 30 C12 28 6 22 8 16 C14 18 19 22 22 30Z M22 30 C32 28 38 22 36 16 C30 18 25 22 22 30Z" fill="#7fa88a"/>
      <path d="M22 30 C16 22 16 12 22 6 C28 12 28 22 22 30Z" fill="#94bca0"/>
      <path d="M22 30 C14 26 10 26 4 28 C10 32 16 32 22 30Z M22 30 C30 26 34 26 40 28 C34 32 28 32 22 30Z" fill="#6b9677"/>
      <path d="M8 31 H36 L33 55 H11Z" fill="#efe3c8"/><rect x="7" y="29" width="30" height="5" rx="2" fill="#d9cba8"/></svg>` },
    crystal: { name: 'Amethyst', w: 50, svg: `<svg viewBox="0 0 50 52" width="50" height="52">
      <path d="M6 50 L10 26 L16 20 L20 50Z" fill="#7d5a9e"/><path d="M16 50 L20 12 L26 4 L32 14 L34 50Z" fill="#9b78bd"/>
      <path d="M26 4 L32 14 L34 50 L26 50Z" fill="#7d5a9e"/><path d="M30 50 L36 22 L42 18 L44 50Z" fill="#8a67ad"/>
      <path d="M20 12 L26 4 L24 30Z" fill="#c9b2e0" opacity=".7"/><ellipse cx="25" cy="50" rx="23" ry="3" fill="#5b4a3a"/></svg>` },
    clock: { name: 'Mantel clock', w: 56, svg: `<svg viewBox="0 0 56 70" width="56" height="70">
      <path d="M4 66 V34 Q4 6 28 4 Q52 6 52 34 V66Z" fill="#6f3222"/><rect x="2" y="62" width="52" height="8" rx="2" fill="#4c2116"/>
      <circle cx="28" cy="32" r="17" fill="#c9a15b"/><circle cx="28" cy="32" r="14" fill="#efe3c8"/>
      <path d="M28 20 v3 M28 41 v3 M16 32 h3 M37 32 h3" stroke="#5b4634" stroke-width="1.5"/>
      <path d="M28 32 V23 M28 32 L34 35" stroke="#2a1e16" stroke-width="2" stroke-linecap="round"/><circle cx="28" cy="32" r="1.6" fill="#2a1e16"/></svg>` },
  };

  const DEFAULTS = { wall: 'forest', wood: 'walnut', bookend: 'brass', trinkets: ['plant', 'candle', 'teacup', 'globe', 'stack'] };

  function sized(svg, s) {
    return svg.replace(/width="(\d+)" height="(\d+)"/, (_, w, h) => `width="${(w * s).toFixed(1)}" height="${(h * s).toFixed(1)}" aria-hidden="true" focusable="false"`);
  }

  function applyTheme(settings) {
    const wall = WALLPAPERS.find(w => w.key === settings.wall) || WALLPAPERS[0];
    const wood = WOODS.find(w => w.key === settings.wood) || WOODS[0];
    const root = document.documentElement.style;
    root.setProperty('--wall', wall.color);
    root.setProperty('--wall-img', svgURL(wall.tile));
    root.setProperty('--wall-size', `${wall.size}px ${wall.h || wall.size}px`);
    ['--wood-hi', '--wood-lt', '--wood', '--wood-dk', '--wood-deep', '--recess-1', '--recess-2'].forEach((p, i) => root.setProperty(p, wood.v[i]));
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', wall.color);
  }

  window.TomesteadDecor = { WALLPAPERS, WOODS, BOOKENDS, TRINKETS, DEFAULTS, sized, svgURL, applyTheme };
})();
