/* Tomestead decor catalog: wallpapers, wood finishes, bookends and trinkets */
(() => {
  'use strict';
  const svgURL = (svg) => `url('data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim()).replace(/'/g, '%27')}')`;

  // ---------- wallpapers (tiled SVG) ----------
  // a night sky for the Golden hour room: faint stars and a few constellations
  const STARS = (() => {
    let r = 9, st = '';
    const rnd = () => ((r = (r * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 46; i++) st += `<circle cx="${(rnd() * 300).toFixed(1)}" cy="${(rnd() * 300).toFixed(1)}" r="${(.35 + rnd() * .9).toFixed(2)}" fill="#efe3c0" fill-opacity="${(.18 + rnd() * .45).toFixed(2)}"/>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">${st}
      <path d="M30 40 L62 70 L58 110 L96 130 M200 180 L228 204 L262 196 L276 232" stroke="#c9b27a" stroke-opacity=".16" stroke-width=".7" fill="none"/>
      <g fill="#f4e4b0" fill-opacity=".55"><circle cx="30" cy="40" r="1.4"/><circle cx="62" cy="70" r="1.4"/><circle cx="58" cy="110" r="1.4"/><circle cx="96" cy="130" r="1.4"/><circle cx="200" cy="180" r="1.4"/><circle cx="228" cy="204" r="1.4"/><circle cx="262" cy="196" r="1.4"/><circle cx="276" cy="232" r="1.4"/></g></svg>`;
  })();

  const WALLPAPERS = [
    // sunlit plaster by day, a midnight star chart by night (follows Time of day)
    { key: 'room', name: 'Golden hour', color: '#c7ab82', size: 512, img: 'tex/plaster.webp', light: true,
      night: { color: '#0f1a2b', tile: STARS, size: 300 },
      tile: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><rect width="60" height="60" fill="#c7ab82"/>
        <circle cx="18" cy="20" r="22" fill="#e6d3b0" fill-opacity=".5"/><circle cx="48" cy="46" r="18" fill="#a88a62" fill-opacity=".25"/></svg>` },
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

  // ---------- trinkets (drawn in art.js) ----------
  // topper: small enough to sit on top of the book stack. wide: needs an open stretch of shelf.
  const TRINKETS = {
    plant:     { name: 'Trailing pothos' },
    candle:    { name: 'Candlestick', topper: true },
    teacup:    { name: 'Cup of tea', topper: true },
    globe:     { name: 'Desk globe' },
    stack:     { name: 'Stack of books' },
    cat:       { name: 'Sleeping cat', wide: true },
    lantern:   { name: 'Lantern' },
    frame:     { name: 'Photo frame' },
    hourglass: { name: 'Hourglass', topper: true },
    succulent: { name: 'Succulent', topper: true },
    crystal:   { name: 'Amethyst geode', topper: true },
    clock:     { name: 'Mantel clock' },
  };

  // ---------- reading table ----------
  const TABLES = {
    walnut:  { name: 'Walnut reading table' },
    leather: { name: 'Leather-top desk' },
    oak:     { name: 'Farmhouse oak' },
    round:   { name: 'Round cherry table' },
    marble:  { name: 'Marble and brass' },
  };
  // cm = real-world height, so everything sits at the right size next to the book
  const TABLE_ITEMS = {
    lamp:    { name: "Banker's lamp", art: 'lamp', cm: 32, tall: true },
    candle:  { name: 'Candlestick', art: 'candle', cm: 24, tall: true },
    tea:     { name: 'Cup of tea', art: 'teacup', cm: 9 },
    mug:     { name: 'Coffee mug', art: 'mug', cm: 10 },
    glasses: { name: 'Reading glasses', art: 'glasses', cm: 6, flat: true },
    inkwell: { name: 'Ink and quill', art: 'inkwell', cm: 26, tall: true },
    plant:   { name: 'Succulent', art: 'succulent', cm: 11 },
    books:   { name: 'Stack of books', art: 'stack', cm: 9 },
    watch:   { name: 'Pocket watch', art: 'watch', cm: 5, flat: true },
    journal: { name: 'Journal and pencil', art: 'journal', cm: 8, flat: true },
  };
  const MAX_TABLE_ITEMS = 5;

  const DEFAULTS = {
    v: 2, light: 'system',
    wall: 'room', wood: 'oak', vine: 'roses', bookend: 'brass',
    trinkets: ['plant', 'candle', 'cat', 'globe', 'stack', 'teacup'],
    table: 'walnut', tableItems: ['lamp', 'tea', 'glasses'],
  };

  function sized(svg, s) {
    return svg.replace(/width="(\d+)" height="(\d+)"/, (_, w, h) => `width="${(w * s).toFixed(1)}" height="${(h * s).toFixed(1)}" aria-hidden="true" focusable="false"`);
  }

  // ---------- climbing vine (drawn in vine.js) ----------
  const VINES = { roses: { name: 'Climbing roses' }, ivy: { name: 'English ivy' }, none: { name: 'No vine' } };

  // ---------- time of day ----------
  const LIGHTS = {
    system: { name: 'Match my phone', hint: 'Night when your phone is in dark mode' },
    clock:  { name: 'Follow the clock', hint: 'Day from sunrise to sunset' },
    day:    { name: 'Always day' },
    night:  { name: 'Always night' },
  };
  const darkQuery = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function lightNow(settings) {
    const m = settings.light || 'system';
    if (m === 'day' || m === 'night') return m;
    if (m === 'clock') {
      const d = new Date(), h = d.getHours() + d.getMinutes() / 60, mo = d.getMonth();
      const [rise, set] = mo >= 3 && mo <= 8 ? [6.5, 20.25] : mo === 2 || mo === 9 ? [7.25, 19.25] : [7.25, 17.75];
      return h >= rise && h < set ? 'day' : 'night';
    }
    return darkQuery && darkQuery.matches ? 'night' : 'day';
  }

  function applyTheme(settings) {
    const wall = WALLPAPERS.find(w => w.key === settings.wall) || WALLPAPERS[0];
    const wood = WOODS.find(w => w.key === settings.wood) || WOODS[0];
    const light = lightNow(settings);
    const html = document.documentElement, root = html.style;
    const night = light === 'night';
    const look = night && wall.night ? wall.night : wall;
    root.setProperty('--wall', look.color);
    root.setProperty('--wall-img', look.img && !(night && wall.night) ? `url(${look.img})` : svgURL(look.tile));
    root.setProperty('--wall-size', `${look.size}px ${look.h || look.size}px`);
    ['--wood-hi', '--wood-lt', '--wood', '--wood-dk', '--wood-deep', '--recess-1', '--recess-2'].forEach((p, i) => root.setProperty(p, wood.v[i]));
    const before = html.dataset.light;
    html.dataset.light = light;
    html.dataset.wall = wall.key;
    // dark lettering only where the wall itself is light (sunlit plaster)
    html.dataset.chrome = wall.light && !night ? 'light' : 'dark';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', look.color);
    if (before !== light) window.dispatchEvent(new CustomEvent('tomestead:light', { detail: light }));
    return light;
  }

  window.TomesteadDecor = { WALLPAPERS, WOODS, BOOKENDS, TRINKETS, TABLES, TABLE_ITEMS, MAX_TABLE_ITEMS, DEFAULTS, VINES, LIGHTS, lightNow, sized, svgURL, applyTheme };
})();
