/* Tomestead startup: the title, a cozy home library, a slow push in to the
   bookcase, then the app. Plays once each time the app is opened; tap to skip. */
(() => {
  'use strict';
  const el = document.getElementById('intro');
  if (!el) return;
  const KEY = 'tomestead.intro';
  // the sign-in card comes first; the scene plays once you're in
  if (document.documentElement.classList.contains('auth-gate')) { el.remove(); return; }
  let seen = false;
  try { seen = sessionStorage.getItem(KEY) === '1'; sessionStorage.setItem(KEY, '1'); } catch {}
  if (seen) { el.remove(); return; }

  const Art = window.TomesteadArt, D = window.TomesteadDecor;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const f = (n) => Math.round(n * 10) / 10;

  // theme colors, so the room matches the library you've set up
  let theme = D.DEFAULTS;
  try { theme = Object.assign({}, D.DEFAULTS, (JSON.parse(localStorage.getItem('tomestead.prefs.v1' + ((window.TomesteadSync && window.TomesteadSync.suffix) || ''))) || {}).theme || {}); } catch {}
  const wall = D.WALLPAPERS.find(w => w.key === theme.wall) || D.WALLPAPERS[0];
  const wood = (D.WOODS.find(w => w.key === theme.wood) || D.WOODS[0]).v;

  const SPINES = ['#6E1F24', '#1F3350', '#4F6B3A', '#C2902F', '#5B2F4A', '#2E5E5E', '#9A4A25', '#3A3A3F', '#A57A4E', '#D9CBA8', '#2F4A33', '#8B3A3A'];

  function scene(portrait) {
    const W = portrait ? 1000 : 1600, H = portrait ? 1600 : 1000;
    const floorY = portrait ? 1250 : 860;
    const bc = portrait ? { x: 230, y: 300, w: 540, h: floorY - 300 } : { x: 530, y: 160, w: 540, h: floorY - 160 };
    const r = Art.rng(1234);
    const shelves = 5, inset = 26, crown = 40, plinth = 44;
    const innerH = bc.h - crown - plinth, rowH = innerH / shelves;
    let books = '';
    for (let s = 0; s < shelves; s++) {
      const base = bc.y + crown + rowH * (s + 1) - 12;
      let x = bc.x + inset + 6;
      const end = bc.x + bc.w - inset - 6;
      const gapAt = s === 1 ? .62 : s === 3 ? .28 : -1;
      while (x < end - 14) {
        if (gapAt > 0 && x > bc.x + bc.w * gapAt && x < bc.x + bc.w * gapAt + 90) { x += 100; continue; }
        const w = 12 + r() * 16, h = rowH * (.58 + r() * .3);
        if (x + w > end) break;
        const c = SPINES[(r() * SPINES.length) | 0];
        const lean = r() > .93 ? (r() > .5 ? 6 : -6) : 0;
        books += `<g transform="rotate(${lean} ${f(x + w / 2)} ${f(base)})"><rect x="${f(x)}" y="${f(base - h)}" width="${f(w)}" height="${f(h)}" rx="1.5" fill="${c}"/>
          <rect x="${f(x)}" y="${f(base - h)}" width="${f(w)}" height="${f(h)}" fill="url(#in-spine)"/>
          <rect x="${f(x + 1)}" y="${f(base - h * .82)}" width="${f(w - 2)}" height="1.6" fill="#e2c574" opacity=".55"/>
          <rect x="${f(x + 1)}" y="${f(base - h * .22)}" width="${f(w - 2)}" height="1.6" fill="#e2c574" opacity=".45"/></g>`;
        x += w + 1.2 + (r() > .9 ? 4 : 0);
      }
    }
    // a few pieces on the open stretches of shelf
    const put = (key, cx, baseY, sc) => { const z = Art.size(key); return `<g transform="translate(${f(cx - z.w * sc / 2)} ${f(baseY - z.base * sc)})">${Art.draw(key, sc)}</g>`; };
    const shelfBase = (s) => bc.y + crown + rowH * (s + 1) - 12;
    const decor = put('globe', bc.x + bc.w * .62 + 46, shelfBase(1), .5) + put('candle', bc.x + bc.w * .28 + 40, shelfBase(3), .55);
    let planks = '';
    for (let s = 1; s <= shelves; s++) {
      const y = bc.y + crown + rowH * s - 12;
      planks += `<rect x="${bc.x + inset - 6}" y="${f(y)}" width="${bc.w - inset * 2 + 12}" height="14" fill="url(#in-plank)"/>`;
    }

    const win = portrait ? null : { x: 150, y: 210, w: 250, h: 380 };
    const chair = portrait ? { x: 720, y: floorY + 170, s: 1.05 } : { x: 1215, y: floorY + 34, s: 1 };
    const lampX = portrait ? 880 : 1460;
    const tile = wall.tile.replace(/<svg[^>]*>/, '').replace('</svg>', '');
    const th = wall.h || wall.size;

    const windowSVG = win ? `
      <rect x="${win.x - 14}" y="${win.y - 14}" width="${win.w + 28}" height="${win.h + 28}" fill="${wood[3]}"/>
      <rect x="${win.x}" y="${win.y}" width="${win.w}" height="${win.h}" fill="url(#in-night)"/>
      <circle cx="${win.x + win.w * .7}" cy="${win.y + 80}" r="26" fill="#f4ecd0"/><circle cx="${win.x + win.w * .7}" cy="${win.y + 80}" r="60" fill="url(#in-moon)"/>
      ${Array.from({ length: 26 }, () => `<circle cx="${f(win.x + r() * win.w)}" cy="${f(win.y + r() * win.h * .7)}" r="${f(.6 + r() * 1.2)}" fill="#fff" opacity="${f(.3 + r() * .6)}"/>`).join('')}
      <path d="M${win.x} ${win.y + win.h} L${win.x} ${win.y + win.h - 70} Q${win.x + 60} ${win.y + win.h - 110} ${win.x + 120} ${win.y + win.h - 80} Q${win.x + 190} ${win.y + win.h - 130} ${win.x + win.w} ${win.y + win.h - 90} V${win.y + win.h}Z" fill="#0d1620"/>
      <path d="M${win.x + win.w / 2} ${win.y} V${win.y + win.h} M${win.x} ${win.y + win.h / 2} H${win.x + win.w}" stroke="${wood[3]}" stroke-width="10"/>
      <rect x="${win.x - 30}" y="${win.y + win.h + 8}" width="${win.w + 60}" height="16" fill="${wood[1]}"/>
      <path d="M${win.x - 60} ${win.y - 40} C${win.x - 20} ${win.y + 120} ${win.x - 50} ${win.y + 300} ${win.x - 20} ${floorY} L${win.x - 90} ${floorY} L${win.x - 90} ${win.y - 40}Z" fill="url(#in-curtain)"/>
      <path d="M${win.x + win.w + 60} ${win.y - 40} C${win.x + win.w + 20} ${win.y + 120} ${win.x + win.w + 50} ${win.y + 300} ${win.x + win.w + 20} ${floorY} L${win.x + win.w + 90} ${floorY} L${win.x + win.w + 90} ${win.y - 40}Z" fill="url(#in-curtain)"/>
      <rect x="${win.x - 100}" y="${win.y - 50}" width="${win.w + 200}" height="10" rx="5" fill="#b08a48"/>` : '';

    // wingback armchair
    const cx = chair.x, cy = chair.y, cs = chair.s;
    const armchair = `<g transform="translate(${cx} ${cy}) scale(${cs})">
      <ellipse cx="0" cy="0" rx="170" ry="16" fill="#000" opacity=".45"/>
      <rect x="-120" y="-40" width="10" height="40" fill="#2a170b"/><rect x="110" y="-40" width="10" height="40" fill="#2a170b"/>
      <path d="M-115 -330 C-120 -380 120 -380 115 -330 L120 -140 L-120 -140Z" fill="url(#in-leather)"/>
      <path d="M-150 -260 C-175 -250 -170 -170 -150 -150 L-150 -60 L-100 -60 L-100 -250Z" fill="url(#in-leather)"/>
      <path d="M150 -260 C175 -250 170 -170 150 -150 L150 -60 L100 -60 L100 -250Z" fill="url(#in-leather)"/>
      <g fill="#2a0a0c" opacity=".55">${[-70, -23, 23, 70].map(x => [-300, -250, -200].map(y => `<circle cx="${x + (y === -250 ? 23 : 0)}" cy="${y}" r="3"/>`).join('')).join('')}</g>
      <path d="M-130 -150 C-130 -170 130 -170 130 -150 L135 -95 L-135 -95Z" fill="#7a1f24"/>
      <rect x="-160" y="-100" width="320" height="64" rx="16" fill="url(#in-leather)"/>
      <rect x="-174" y="-176" width="52" height="140" rx="22" fill="url(#in-leather)"/>
      <rect x="122" y="-176" width="52" height="140" rx="22" fill="url(#in-leather)"/>
      <path d="M-40 -150 C-20 -120 30 -130 60 -96 L-10 -96 C-30 -110 -50 -120 -40 -150Z" fill="#c9a15b" opacity=".85"/>
      <path d="M-110 -330 C-90 -360 60 -366 90 -350" stroke="#e8a3a0" stroke-width="5" fill="none" opacity=".18" stroke-linecap="round"/>
    </g>`;
    // floor lamp casting the warm light
    const lamp = `<g>
      <circle cx="${lampX}" cy="${floorY - 430}" r="420" fill="url(#in-lampglow)"/>
      <rect x="${lampX - 3}" y="${floorY - 420}" width="6" height="420" fill="url(#in-brass)"/>
      <ellipse cx="${lampX}" cy="${floorY - 2}" rx="40" ry="8" fill="url(#in-brass)"/>
      <path d="M${lampX - 70} ${floorY - 390} L${lampX - 46} ${floorY - 480} L${lampX + 46} ${floorY - 480} L${lampX + 70} ${floorY - 390}Z" fill="url(#in-shade)"/>
      <ellipse cx="${lampX}" cy="${floorY - 390}" rx="70" ry="8" fill="#fff1c8" opacity=".9"/>
    </g>`;
    const pf = portrait ? null : { x: 1150, y: 250, w: 240, h: 170 };
    const painting = pf ? `<g><rect x="${pf.x + 10}" y="${pf.y + 14}" width="${pf.w}" height="${pf.h}" fill="#000" opacity=".35"/>
      <rect x="${pf.x}" y="${pf.y}" width="${pf.w}" height="${pf.h}" fill="url(#in-brass)"/>
      <rect x="${pf.x + 12}" y="${pf.y + 12}" width="${pf.w - 24}" height="${pf.h - 24}" fill="#3a4a5a"/>
      <rect x="${pf.x + 12}" y="${pf.y + 12}" width="${pf.w - 24}" height="${(pf.h - 24) * .55}" fill="#c9905a" opacity=".55"/>
      <path d="M${pf.x + 12} ${pf.y + 100} L${pf.x + 70} ${pf.y + 62} L${pf.x + 120} ${pf.y + 90} L${pf.x + 170} ${pf.y + 56} L${pf.x + pf.w - 12} ${pf.y + 92} V${pf.y + pf.h - 12} H${pf.x + 12}Z" fill="#2b3a33"/>
      <path d="M${pf.x + 12} ${pf.y + 126} Q${pf.x + 120} ${pf.y + 110} ${pf.x + pf.w - 12} ${pf.y + 128} V${pf.y + pf.h - 12} H${pf.x + 12}Z" fill="#1d2622"/>
      <circle cx="${pf.x + 170}" cy="${pf.y + 46}" r="10" fill="#f3d99a" opacity=".8"/></g>` : '';
    const tableX = portrait ? 860 : 1360;
    const sideTable = `<g>
      <ellipse cx="${tableX}" cy="${floorY + 70}" rx="70" ry="10" fill="#000" opacity=".4"/>
      <rect x="${tableX - 8}" y="${floorY - 20}" width="16" height="90" fill="${wood[2]}"/>
      <ellipse cx="${tableX}" cy="${floorY - 24}" rx="64" ry="12" fill="${wood[1]}"/><ellipse cx="${tableX}" cy="${floorY - 28}" rx="64" ry="12" fill="${wood[0]}"/>
      ${put('teacup', tableX - 4, floorY - 28, .5)}
    </g>`;
    const rugY = floorY + (portrait ? 70 : 40);
    const rug = `<g><path d="M${W * .5 - 520} ${H + 30} L${W * .5 - 330} ${rugY} L${W * .5 + 330} ${rugY} L${W * .5 + 520} ${H + 30}Z" fill="#5a1b1e"/>
      <path d="M${W * .5 - 470} ${H + 30} L${W * .5 - 310} ${rugY + 18} L${W * .5 + 310} ${rugY + 18} L${W * .5 + 470} ${H + 30}Z" fill="none" stroke="#c9a15b" stroke-width="6" opacity=".55"/>
      <path d="M${W * .5 - 400} ${H + 30} L${W * .5 - 280} ${rugY + 40} L${W * .5 + 280} ${rugY + 40} L${W * .5 + 400} ${H + 30}Z" fill="#7a2428"/>
      <ellipse cx="${W * .5}" cy="${f((rugY + H) / 2 + 20)}" rx="110" ry="30" fill="#5a1b1e" stroke="#c9a15b" stroke-width="2" stroke-opacity=".45"/></g>`;
    const cat = put('cat', W * .5 - (portrait ? 120 : 190), rugY + (portrait ? 150 : 62), portrait ? .75 : .62);

    return {
      W, H, focus: { x: bc.x + bc.w / 2, y: bc.y + bc.h * .42, w: bc.w },
      svg: `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id="in-wall" patternUnits="userSpaceOnUse" width="${wall.size}" height="${th}">${tile}</pattern>
        <linearGradient id="in-night" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1426"/><stop offset="1" stop-color="#22324f"/></linearGradient>
        <radialGradient id="in-moon"><stop offset="0" stop-color="#f4ecd0" stop-opacity=".35"/><stop offset="1" stop-color="#f4ecd0" stop-opacity="0"/></radialGradient>
        <linearGradient id="in-curtain" x1="0" x2="1"><stop offset="0" stop-color="#14261d"/><stop offset=".3" stop-color="#2f5a44"/><stop offset=".55" stop-color="#1c3a2b"/><stop offset=".8" stop-color="#2f5a44"/><stop offset="1" stop-color="#10201a"/></linearGradient>
        <linearGradient id="in-case" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${wood[1]}"/><stop offset=".5" stop-color="${wood[2]}"/><stop offset="1" stop-color="${wood[3]}"/></linearGradient>
        <linearGradient id="in-plank" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${wood[0]}"/><stop offset=".3" stop-color="${wood[1]}"/><stop offset="1" stop-color="${wood[3]}"/></linearGradient>
        <linearGradient id="in-recess" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset=".25" stop-color="#000" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity=".42"/></linearGradient>
        <linearGradient id="in-spine" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".38"/><stop offset=".2" stop-color="#fff" stop-opacity=".1"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient>
        <linearGradient id="in-floor" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${wood[3]}"/><stop offset="1" stop-color="${wood[4]}"/></linearGradient>
        <linearGradient id="in-leather" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#9a3236"/><stop offset=".4" stop-color="#6e1f24"/><stop offset="1" stop-color="#3a0d10"/></linearGradient>
        <linearGradient id="in-brass" x1="0" x2="1"><stop offset="0" stop-color="#5a4118"/><stop offset=".4" stop-color="#e3c77c"/><stop offset="1" stop-color="#5a4118"/></linearGradient>
        <linearGradient id="in-shade" x1="0" x2="1"><stop offset="0" stop-color="#c98e4a"/><stop offset=".5" stop-color="#f6d79a"/><stop offset="1" stop-color="#b8783a"/></linearGradient>
        <radialGradient id="in-lampglow"><stop offset="0" stop-color="#ffcf86" stop-opacity=".5"/><stop offset=".5" stop-color="#ffb860" stop-opacity=".12"/><stop offset="1" stop-color="#ffb860" stop-opacity="0"/></radialGradient>
        <radialGradient id="in-vig" cx=".5" cy=".45" r=".75"><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".75"/></radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="${wall.color}"/>
      <rect width="${W}" height="${floorY}" fill="url(#in-wall)"/>
      <rect y="${floorY - 26}" width="${W}" height="26" fill="${wood[2]}"/><rect y="${floorY - 26}" width="${W}" height="3" fill="${wood[0]}" opacity=".5"/>
      <rect y="${floorY}" width="${W}" height="${H - floorY}" fill="url(#in-floor)"/>
      ${Array.from({ length: 12 }, (_, i) => `<path d="M${f(W / 2 + (i - 5.5) * 60)} ${floorY} L${f(W / 2 + (i - 5.5) * 260)} ${H}" stroke="#000" stroke-opacity=".25" stroke-width="2"/>`).join('')}
      ${windowSVG}
      <ellipse cx="${bc.x + bc.w / 2}" cy="${floorY + 4}" rx="${bc.w * .6}" ry="18" fill="#000" opacity=".5"/>
      <rect x="${bc.x}" y="${bc.y}" width="${bc.w}" height="${bc.h}" rx="4" fill="url(#in-case)"/>
      <rect x="${bc.x - 12}" y="${bc.y - 8}" width="${bc.w + 24}" height="${crown + 8}" rx="4" fill="${wood[1]}"/>
      <rect x="${bc.x - 12}" y="${bc.y - 8}" width="${bc.w + 24}" height="4" fill="${wood[0]}" opacity=".7"/>
      <rect x="${bc.x + inset}" y="${bc.y + crown}" width="${bc.w - inset * 2}" height="${innerH}" fill="${wood[5]}"/>
      <rect x="${bc.x + inset}" y="${bc.y + crown}" width="${bc.w - inset * 2}" height="${innerH}" fill="url(#in-recess)"/>
      ${books}${decor}${planks}
      <rect x="${bc.x - 4}" y="${floorY - plinth}" width="${bc.w + 8}" height="${plinth}" fill="${wood[3]}"/>
      ${painting}
      <rect width="${W}" height="${H}" fill="#140c06" opacity=".38"/>
      ${rug}${cat}${sideTable}${armchair}${lamp}
      <circle cx="${bc.x + bc.w * .3}" cy="${bc.y - 40}" r="${bc.w * .9}" fill="url(#in-lampglow)" opacity=".6"/>
      <rect width="${W}" height="${H}" fill="url(#in-vig)"/>
    </svg>`,
    };
  }

  // ---------- play ----------
  const vw = window.innerWidth, vh = window.innerHeight;
  const portrait = vw / vh < 0.9;
  const S = scene(portrait);
  el.querySelector('.intro-room').innerHTML = S.svg;
  const room = el.querySelector('.intro-room');
  const title = el.querySelector('.intro-title');
  // where the bookcase lands on screen (the room is drawn with "slice" fitting)
  const sc = Math.max(vw / S.W, vh / S.H);
  const ox = (vw - S.W * sc) / 2, oy = (vh - S.H * sc) / 2;
  const fx = ox + S.focus.x * sc, fy = oy + S.focus.y * sc;
  const zoom = Math.max(2.2, (vw * 1.15) / (S.focus.w * sc));
  room.firstElementChild.style.transformOrigin = `${f(fx)}px ${f(fy)}px`;
  document.documentElement.classList.add('intro-on');

  const anims = [];
  const run = (target, frames, opts) => { const a = target.animate(frames, Object.assign({ fill: 'both' }, opts)); anims.push(a); return a; };
  const stage = document.getElementById('stage');
  let done = false;
  function cleanup() {
    anims.forEach(a => a.cancel());
    el.remove();
    if (stage) stage.style.transformOrigin = '';
    document.documentElement.classList.remove('intro-on');
  }
  function finish(fast) {
    if (done) return;
    done = true;
    if (fast) {
      // skipping: settle the shelf in place and fade the room quickly
      const now = getComputedStyle(el).opacity;
      anims.forEach(a => { if (a.effect && a.effect.target === stage) a.cancel(); });
      anims.push(el.animate([{ opacity: now }, { opacity: 0 }], { duration: 320, easing: 'ease-out', fill: 'forwards' }));
      anims[anims.length - 1].finished.then(cleanup, cleanup);
    } else {
      const out = el.animate([{ opacity: getComputedStyle(el).opacity }, { opacity: 0 }], { duration: 600, easing: 'ease-out', fill: 'forwards' });
      anims.push(out);
      out.finished.then(cleanup, cleanup);
    }
  }

  if (reduce) {
    run(title, [{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
    setTimeout(() => finish(), 1400);
  } else {
    const go = () => {
      const ZOOM_AT = 3900, ZOOM_FOR = 2600;
      const PHASE_AT = ZOOM_AT + ZOOM_FOR * 0.3, PHASE_FOR = ZOOM_FOR * 0.78;
      run(title, [{ opacity: 0, transform: 'translateY(10px)', letterSpacing: '.32em' }, { opacity: 1, transform: 'none', letterSpacing: '.12em' }], { duration: 1200, easing: 'cubic-bezier(.2,.7,.2,1)' });
      run(el.querySelector('.intro-sub'), [{ opacity: 0 }, { opacity: .85 }], { duration: 900, delay: 500, easing: 'ease-out' });
      run(el.querySelector('.intro-rule'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 900, delay: 300, easing: 'cubic-bezier(.2,.7,.2,1)' });
      run(el.querySelector('.intro-titlecard'), [{ opacity: 1 }, { opacity: 0 }], { duration: 700, delay: 2100, easing: 'ease-in' });
      run(room, [{ opacity: 0, transform: 'scale(1.05)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 1200, delay: 2500, easing: 'ease-out' });
      // push in to the bookcase…
      run(room.firstElementChild, [{ transform: 'scale(1)' }, { transform: `scale(${f(zoom)})` }], { duration: ZOOM_FOR, delay: ZOOM_AT, easing: 'cubic-bezier(.55,0,.3,1)' });
      // …and partway through, the room dissolves and your own shelf comes forward to meet you
      run(el, [{ opacity: 1 }, { opacity: 0 }], { duration: PHASE_FOR, delay: PHASE_AT, easing: 'cubic-bezier(.4,0,.6,1)' });
      if (stage) {
        stage.style.transformOrigin = `50% ${f(window.scrollY + vh * 0.55)}px`;
        run(stage, [{ transform: 'scale(.86)' }, { transform: 'scale(1)' }], { duration: PHASE_FOR + 200, delay: PHASE_AT, easing: 'cubic-bezier(.3,0,.25,1)' });
      }
      setTimeout(() => { if (!done) { done = true; cleanup(); } }, PHASE_AT + PHASE_FOR + 260);
    };
    // start once the title font is ready (but never wait long)
    const fontReady = document.fonts && document.fonts.load ? Promise.race([document.fonts.load('400 48px "IM Fell English"'), new Promise(r => setTimeout(r, 700))]) : Promise.resolve();
    fontReady.then(go, go);
  }
  el.addEventListener('click', () => finish(true));
  window.addEventListener('keydown', () => finish(true), { once: true });
})();
