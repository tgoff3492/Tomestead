/* Tomestead reader: pulls a book off the shelf, carries it down to the reading
   table, and opens it to your review. Pure CSS 3D + Web Animations. */
window.TomesteadReader = function (api) {
  'use strict';
  const C = window.TomesteadCovers;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = api.esc;
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  const root = $('#reader');
  const stage = $('#stage');
  const scene = $('#rdScene');
  const tableEl = $('#rdTable');
  const shadow = $('#rdShadow');
  const dim = $('#rdDim');
  const bar = $('#rdBar');
  const hint = $('#rdHint');

  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    hint.querySelector('.rd-hint-main').textContent = 'Click the book to open it';
    hint.querySelector('.rd-hint-sub').textContent = 'Click anywhere else to put it back';
  }
  const EASE_OUT = 'cubic-bezier(.22,.8,.26,1)';
  const EASE_IN_OUT = 'cubic-bezier(.65,0,.35,1)';
  const EASE_SOFT = 'cubic-bezier(.45,.05,.25,1)';

  let S = null;     // current session
  let busy = false;

  // ---------- geometry ----------
  const PERSP = 1800, ORIGIN_Y = 0.42;   // must match .rd-scene perspective
  function geo() {
    const vw = window.innerWidth, vh = window.innerHeight;
    const narrow = vw < 720;
    let Hb, Wb;
    if (narrow) {
      Wb = Math.min(vw * 0.9, 440);
      Hb = Math.min(Wb / 0.68, vh * 0.72);
      Wb = Hb * 0.68;
    } else {
      Hb = Math.min(vh * 0.78, 660, (vw * 0.92 / 2) / 0.68);
      Wb = Hb * 0.68;
    }
    const pan = Math.round(vh * 0.4);
    const g = {
      vw, vh, narrow, Hb, Wb, pan,
      rest: { x: vw / 2, y: vh * (narrow ? 0.63 : 0.64), s: narrow ? 0.4 : 0.42, rx: 52, rz: -5 },
      open: narrow
        ? { x: vw * 0.05 + Wb / 2, y: vh * 0.45, s: 1 }
        : { x: vw / 2 + Wb / 2, y: vh * 0.47, s: 1 },
    };
    // the table the book rests on
    const frontY = vh * (narrow ? 0.85 : 0.875), farY = vh * (narrow ? 0.47 : 0.44);
    const foot = Wb * g.rest.s;
    const frontW = narrow ? vw * 0.96 : Math.min(1240, Math.max(foot * 3.6, vw * 0.8));
    const T = window.TomesteadTable.geometry({ W: vw, H: vh, cx: vw / 2, frontY, farY, frontW, ratio: 0.72 });
    const vBook = T.vAt(g.rest.y);
    g.table = { W: vw, H: vh, cx: vw / 2, frontY, farY, frontW, ratio: 0.72, narrow, unit: (Hb * g.rest.s / 23) / T.k(vBook) };
    return g;
  }

  const zAt = (d) => `0px 0px ${(S.Tb / 2 + d).toFixed(2)}px`;
  function openLeaves() {
    S.box.classList.add('is-open');
    S.box.querySelector('.leaf.cover').style.transform = 'rotateY(-180deg)';
    const f1 = S.box.querySelector('.leaf.f1'), f2 = S.box.querySelector('.leaf.f2');
    f1.style.transform = f2.style.transform = 'rotateY(-180deg)';
    f1.style.translate = zAt(3); f2.style.translate = zAt(6);
  }

  // transform for a box whose CENTER sits at (x, y)
  function tf(g, p) {
    const { x, y, z = 0, rx = 0, ry = 0, rz = 0, s = 1 } = p;
    return `translate3d(${(x - g.Wb / 2).toFixed(2)}px, ${(y - g.Hb / 2).toFixed(2)}px, ${z.toFixed(2)}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale3d(${s}, ${s}, ${s})`;
  }

  function anim(el, frames, opts) {
    if (!el) return Promise.resolve();
    if (reduce()) opts = Object.assign({}, opts, { duration: 1, delay: 0 });
    const a = el.animate(frames, Object.assign({ fill: 'forwards' }, opts));
    return a.finished.then(() => {
      const last = frames[frames.length - 1];
      Object.keys(last).forEach(k => { if (k !== 'offset' && k !== 'easing') el.style[k] = last[k]; });
      a.cancel();
    }).catch(() => {});
  }

  // ---------- building the book ----------
  function pageHTML(b, side, narrow) {
    const d = api.describe(b);
    const info = () => {
      const meta = [d.reads, d.series, d.details].filter(Boolean).map(esc);
      const act = d.action;
      return `<header class="pg-head">
          <h2 class="pg-title">${esc(b.title)}</h2>
          ${b.author ? `<p class="pg-author">by ${esc(b.author)}</p>` : ''}
          ${d.rated ? `<p class="pg-stars" aria-label="${b.rating ? `${String(b.rating).replace('.5', '½')} of 5 stars` : 'Not rated'}">${b.rating ? api.starsHTML(b.rating) : '<span class="pg-muted">Not rated</span>'}</p>` : ''}
          ${d.status ? `<p class="pg-status ${esc(d.statusKey)}">${esc(d.status)}</p>` : ''}
          ${d.pct != null ? `<span class="pg-meter" aria-hidden="true"><span style="width:${d.pct}%"></span></span>` : ''}
          ${meta.length ? `<p class="pg-meta">${meta.join('<br>')}</p>` : ''}
          ${d.tags.length ? `<p class="pg-tags">${d.tags.map(t => `<button type="button" class="pg-tag" data-rd="tag" data-tag="${esc(t)}">${esc(t)}</button>`).join('')}</p>` : ''}
          ${act ? `<button type="button" class="${act.quiet ? 'pg-link' : 'pg-btn'}" data-rd="${act.rd}">${esc(act.label)}</button>` : ''}
          ${(d.links || []).map(l => `<button type="button" class="pg-link pg-sublink" data-rd="${esc(l.rd)}"${l.id ? ` data-id="${esc(l.id)}"` : ''}>${esc(l.label)}</button>`).join('')}
        </header>`;
    };
    const quotes = () => {
      const qs = Array.isArray(b.quotes) ? b.quotes : [];
      return `<section class="pg-sec pg-quotes">
        <h3 class="pg-h">Favorite lines</h3>
        ${qs.map(q => `<button type="button" class="pg-quote" data-rd="quote" data-q="${esc(q.id)}" aria-label="Edit this quote"><span class="pg-q-text">${esc(q.text).replace(/\n/g, '<br>')}</span>${q.where ? `<span class="pg-q-where">${esc(q.where)}</span>` : ''}</button>`).join('')}
        <button type="button" class="pg-link" data-rd="quote-add">${qs.length ? '+ Save another line' : '+ Save a line you loved'}</button>
      </section>`;
    };
    const about = () => {
      const a = b.about;
      let body;
      if (a && a.text) body = `<div class="pg-about">${esc(a.text).split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, ' ')}</p>`).join('')}</div>
        <p class="pg-src">Summary from <a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.source)}</a></p>`;
      else if (!b.lookedUp && navigator.onLine !== false) body = `<p class="pg-muted pg-loading">Looking for a summary…</p>`;
      else body = `<p class="pg-muted">No summary found for this one.</p>`;
      return `<section class="pg-sec"><h3 class="pg-h">About the book</h3>${body}</section>`;
    };
    const review = () => `<section class="pg-sec">
        <h3 class="pg-h">${esc(d.reviewHeading)}</h3>
        ${b.review
          ? `<div class="pg-review">${esc(b.review).split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('')}</div>`
          : `<p class="pg-muted">${esc(d.reviewEmpty)}</p><button type="button" class="pg-btn" data-rd="edit">${esc(d.reviewCta)}</button>`}
      </section>`;
    const rule = `<div class="pg-rule" aria-hidden="true">❦</div>`;

    if (side === 'left') {
      if (narrow) return '';
      return `<div class="pg-inner">${info()}${rule}${about()}</div><span class="pg-folio">i</span>`;
    }
    if (narrow) return `<div class="pg-inner">${info()}${rule}${review()}${rule}${quotes()}${rule}${about()}</div>`;
    return `<div class="pg-inner">${review()}${rule}${quotes()}</div><span class="pg-folio">ii</span>`;
  }

  function plainCoverHTML(b) {
    const c = api.colorOf(b);
    return `<div class="cv-plain${c.light ? ' light' : ''}" style="--bg:${c.bg};--ink:${c.ink}">
        <div class="cv-frame">
          <span class="cv-orn" aria-hidden="true">✦</span>
          <h3 class="cv-title">${esc(b.title)}</h3>
          <span class="cv-line" aria-hidden="true"></span>
          ${b.author ? `<p class="cv-author">${esc(b.author)}</p>` : ''}
        </div>
      </div>`;
  }

  async function paintCover(b, face) {
    const src = await C.coverSrc(b, 'L');
    const art = face.querySelector('.cv-art');
    if (src && await C.probe(src)) {
      art.innerHTML = `<img alt="" src="${esc(src)}">`;
      face.classList.add('has-img');
      return true;
    }
    art.innerHTML = plainCoverHTML(b);
    face.classList.remove('has-img');
    return false;
  }

  function buildBook(b, g, originEl) {
    const d = api.dims(b);
    const c = api.colorOf(b);
    // book thickness, scaled up from the spine's own proportions
    const spineW = originEl && originEl.classList.contains('book') ? originEl.getBoundingClientRect().width : d.width;
    const spineH = originEl && originEl.classList.contains('book') ? originEl.getBoundingClientRect().height : d.height;
    const Tb = Math.max(g.Hb * 0.05, Math.min(g.Hb * 0.3, spineW * g.Hb / spineH));

    const box = document.createElement('div');
    box.className = 'b3d';
    box.style.cssText = `width:${g.Wb}px;height:${g.Hb}px;--T:${Tb}px;--W:${g.Wb}px;--H:${g.Hb}px;--bg:${c.bg};--pg:${(g.Hb / 100).toFixed(3)}px`;
    box.setAttribute('role', 'button');
    box.setAttribute('tabindex', '-1');
    box.setAttribute('aria-label', `Open ${b.title}`);
    box.innerHTML = `
      <div class="f f-back"></div>
      <div class="f f-spine"></div>
      <div class="f f-edge"></div>
      <div class="f f-top"></div>
      <div class="f f-bottom"></div>
      <div class="f f-page right">${pageHTML(b, 'right', g.narrow)}</div>
      <div class="leaf flutter f2"><div class="lf-front paper"></div><div class="lf-back f-page left">${pageHTML(b, 'left', g.narrow)}</div></div>
      <div class="leaf flutter f1"><div class="lf-front paper"></div><div class="lf-back paper"></div></div>
      <div class="leaf cover">
        <div class="lf-front cv"><div class="cv-art">${plainCoverHTML(b)}</div><div class="cv-sheen"></div><div class="cv-hinge"></div></div>
        <div class="lf-back"><div class="endpaper"></div></div>
      </div>`;

    // spine face: the same spine you saw on the shelf, drawn large
    const s0 = spineH / g.Hb;
    const sp = api.spineEl(b);
    sp.classList.remove('arrive');
    sp.setAttribute('aria-hidden', 'true');
    sp.tabIndex = -1;
    sp.style.setProperty('--w', `${Tb}px`);
    sp.style.setProperty('--h', `${g.Hb}px`);
    sp.style.setProperty('--fs', `${(d.fs / s0).toFixed(2)}px`);
    box.querySelector('.f-spine').appendChild(sp);
    return { box, Tb, s0 };
  }

  // ---------- motion ----------
  // CSS rotation order is rotateX · rotateY · rotateZ
  function rot(rx, ry, rz) {
    const r = Math.PI / 180;
    const [a, b, c] = [rx * r, ry * r, rz * r];
    const X = [[1, 0, 0], [0, Math.cos(a), -Math.sin(a)], [0, Math.sin(a), Math.cos(a)]];
    const Y = [[Math.cos(b), 0, Math.sin(b)], [0, 1, 0], [-Math.sin(b), 0, Math.cos(b)]];
    const Z = [[Math.cos(c), -Math.sin(c), 0], [Math.sin(c), Math.cos(c), 0], [0, 0, 1]];
    const mul = (A, B) => A.map((row, i) => B[0].map((_, j) => row.reduce((t, _, k) => t + A[i][k] * B[k][j], 0)));
    return mul(mul(X, Y), Z);
  }
  const apply = (M, p) => [0, 1, 2].map(i => M[i][0] * p[0] + M[i][1] * p[1] + M[i][2] * p[2]);

  // monotone cubic through keys: smooth velocity, never overshoots (so the book never dips back into the shelf)
  function monotone(ts, ys) {
    const n = ts.length, d = [], m = new Array(n).fill(0);
    for (let i = 0; i < n - 1; i++) d[i] = (ys[i + 1] - ys[i]) / (ts[i + 1] - ts[i]);
    for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
    for (let i = 0; i < n - 1; i++) {
      if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
      const a = m[i] / d[i], b = m[i + 1] / d[i], h = a * a + b * b;
      if (h > 9) { const t = 3 / Math.sqrt(h); m[i] = t * a * d[i]; m[i + 1] = t * b * d[i]; }
    }
    return (t) => {
      let i = 0;
      while (i < n - 2 && t > ts[i + 1]) i++;
      const h = ts[i + 1] - ts[i], u = Math.min(1, Math.max(0, (t - ts[i]) / h));
      const u2 = u * u, u3 = u2 * u;
      return (2 * u3 - 3 * u2 + 1) * ys[i] + (u3 - 2 * u2 + u) * h * m[i] + (-2 * u3 + 3 * u2) * ys[i + 1] + (u3 - u2) * h * m[i + 1];
    };
  }

  function originPose(g) {
    const r = S.originRect;
    const s0 = r.height / g.Hb;
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    if (S.mode === 'spine') return { x: cx, y: cy, z: -(g.Wb / 2) * s0, rx: 0, ry: 90, rz: 0, s: s0, tip: 0 };
    return { x: cx, y: cy, z: -(S.Tb / 2) * s0, rx: 0, ry: 0, rz: 0, s: s0, tip: 0 };
  }

  // key poses from the shelf to the table
  function flightKeys(g) {
    const o = originPose(g), R = g.rest;
    const mid = (a, b, t) => a + (b - a) * t;
    const rest = { x: R.x, y: R.y, z: 0, rx: R.rx, ry: 0, rz: R.rz, s: R.s, tip: 0 };
    if (S.mode !== 'spine') {
      return [
        [0, o],
        [0.3, { ...o, y: o.y - 20, z: o.z + 120, s: mid(o.s, R.s, .4) }],
        [0.74, { x: R.x, y: R.y - g.vh * 0.15, z: 110, rx: 30, ry: 0, rz: R.rz * .8, s: R.s * 1.05, tip: 0 }],
        [0.92, { x: R.x, y: R.y - 3, z: 8, rx: R.rx - 2, ry: 0, rz: R.rz, s: R.s, tip: 0 }],
        [1, rest],
      ];
    }
    const depth = g.Wb * o.s;                    // how far the book reaches into the shelf
    const clear = o.z + depth + 16;              // its back is out of the shelf here
    return [
      [0, o],
      [0.12, { ...o, y: o.y - 1, z: o.z + 5, tip: -9 }],                         // tip the top toward you
      [0.34, { ...o, y: o.y - 7, z: clear, tip: -3 }],                          // slide it straight out
      [0.56, { x: mid(o.x, R.x, .45), y: o.y - g.vh * 0.03, z: clear + 110, rx: -3, ry: 46, rz: 3, s: mid(o.s, R.s, .5), tip: 0 }],
      [0.8, { x: R.x, y: R.y - g.vh * 0.15, z: 110, rx: 30, ry: 6, rz: R.rz * .8, s: R.s * 1.05, tip: 0 }],
      [0.93, { x: R.x, y: R.y - 3, z: 8, rx: R.rx - 2, ry: 0, rz: R.rz, s: R.s, tip: 0 }],
      [1, rest],
    ];
  }

  // sample the path densely so the browser just plays it back, frame to frame
  function sampleFlight(g, n = 96) {
    const keys = flightKeys(g);
    const ts = keys.map(k => k[0]);
    const ch = {};
    ['x', 'y', 'z', 'rx', 'ry', 'rz', 's', 'tip'].forEach(c => { ch[c] = monotone(ts, keys.map(k => k[1][c] || 0)); });
    const slot = S.mode === 'spine' ? S.originRect : null;
    const pivot = [-g.Wb / 2, g.Hb / 2, 0];       // bottom of the spine: the book tips over this edge
    const Ox = g.vw / 2, Oy = g.vh * ORIGIN_Y;
    const proj = (p) => { const k = PERSP / (PERSP - p[2]); return [Ox + (p[0] - Ox) * k, Oy + (p[1] - Oy) * k]; };
    const box = [], clip = [];
    let cleared = !slot;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const p = {}; for (const c in ch) p[c] = ch[c](t);
      // tipping turns about the pivot, not the middle of the book
      if (Math.abs(p.tip) > 0.01) {
        const sp = pivot.map(v => v * p.s);
        const a = apply(rot(p.rx, p.ry, p.rz), sp), b = apply(rot(p.rx + p.tip, p.ry, p.rz), sp);
        p.x += a[0] - b[0]; p.y += a[1] - b[1]; p.z += a[2] - b[2];
      }
      box.push({ transform: tf(g, { x: p.x, y: p.y, z: p.z, rx: p.rx + p.tip, ry: p.ry, rz: p.rz, s: p.s }), offset: t });
      // while any part of the book is still inside the shelf, hide what its neighbours would cover
      let poly = 'polygon(-4000px -4000px, 9000px -4000px, 9000px 9000px, -4000px 9000px)';
      if (!cleared) {
        const M = rot(p.rx + p.tip, p.ry, p.rz);
        const W = g.Wb / 2, H = g.Hb / 2, T2 = S.Tb / 2;
        const world = (l) => { const q = apply(M, l.map(v => v * p.s)); return [p.x + q[0], p.y + q[1], p.z + q[2]]; };
        const corners = [[-W, -H, -T2], [-W, -H, T2], [-W, H, -T2], [-W, H, T2], [W, -H, -T2], [W, -H, T2], [W, H, -T2], [W, H, T2]].map(world);
        const back = Math.min(...corners.map(c => c[2]));
        if (back < 0) {
          const face = corners.slice(0, 4).map(proj);
          const x0 = Math.min(slot.left, ...face.map(q => q[0])) - 0.5, x1 = Math.max(slot.left + slot.width, ...face.map(q => q[0])) + 0.5;
          poly = `polygon(${x0.toFixed(1)}px -4000px, ${x1.toFixed(1)}px -4000px, ${x1.toFixed(1)}px 9000px, ${x0.toFixed(1)}px 9000px)`;
        } else cleared = true;
      }
      clip.push({ clipPath: poly, offset: t });
    }
    return { box, clip };
  }

  const restT = (g) => tf(g, { x: g.rest.x, y: g.rest.y, rx: g.rest.rx, rz: g.rest.rz, s: g.rest.s });
  const openT = (g) => tf(g, { x: g.open.x, y: g.open.y, z: 30, rx: g.narrow ? 4 : 7, s: 1 });

  function drawTable(g) {
    const th = api.theme();
    // phones have no room beside the book, so only the lamp stays out
    const items = g.narrow ? th.tableItems.filter(k => k === 'lamp') : th.tableItems;
    const out = window.TomesteadTable.drawTable({ ...g.table, style: th.table, items, maxItems: 5, id: 'rt' });
    tableEl.innerHTML = out.html;
  }

  function placeShadow(g, state) {
    const R = g.rest;
    if (state === 'rest') {
      const w = g.Wb * R.s * 1.15, h = g.Hb * R.s * 0.62;
      Object.assign(shadow.style, { left: `${R.x - w / 2 + 6}px`, top: `${R.y - h / 2 + g.Hb * R.s * 0.1}px`, width: `${w}px`, height: `${h}px`, transform: `rotate(${R.rz}deg)` });
    } else {
      const w = g.narrow ? g.Wb * 1.1 : g.Wb * 2.15, h = g.Hb * 0.22;
      const cx = g.narrow ? g.open.x : g.vw / 2;
      Object.assign(shadow.style, { left: `${cx - w / 2}px`, top: `${g.open.y + g.Hb * 0.42}px`, width: `${w}px`, height: `${h}px`, transform: 'none' });
    }
  }

  function setBar(mode) {
    S && (S.barMode = mode);
    // resting on the table, the hint says it all; the bar is for the open book
    if (mode) bar.dataset.mode = mode;
    bar.classList.toggle('show', mode === 'open');
    hint.classList.toggle('show', mode === 'rest');
    const rm = bar.querySelector('[data-rd="remove"]');
    if (rm) { rm.textContent = 'Remove'; rm.dataset.confirm = ''; }
    closeCoverMenu();
    if (mode === 'rest') setTimeout(() => S && S.box && S.box.focus({ preventScroll: true }), 30);
    if (mode === 'open') setTimeout(() => bar.querySelector('[data-rd="close"]').focus({ preventScroll: true }), 30);
  }

  // ---------- open the reader ----------
  async function open(id, originEl) {
    if (busy || S) return;
    const b = api.getBook(id);
    if (!b) return;
    busy = true;
    const g = geo();
    const mode = originEl && originEl.classList.contains('book') ? 'spine' : 'cover';
    S = { id, originEl, mode, originRect: originEl ? originEl.getBoundingClientRect() : null, g, state: 'flying' };
    if (!S.originRect || S.originRect.width === 0) { S.originRect = { left: g.vw / 2 - 20, top: g.vh * 0.3 - 100, width: 40, height: 200 }; S.mode = 'spine'; }

    const built = buildBook(b, g, mode === 'spine' ? originEl : null);
    S.box = built.box; S.Tb = built.Tb;
    scene.appendChild(S.box);
    paintCover(b, S.box.querySelector('.cv'));
    lookupIfNeeded(b);

    // set the table and lock the page behind
    drawTable(g);
    stage.classList.add('panned');
    S.scrollY = window.scrollY;
    document.documentElement.classList.add('reading');
    stage.inert = true;
    root.hidden = false;
    root.setAttribute('aria-label', b.title);
    setBar(null);

    if (reduce()) {
      if (originEl) originEl.style.visibility = 'hidden';
      S.box.style.transform = openT(g);
      openLeaves();
      stage.style.transform = `translateY(${-g.pan}px)`;
      stage.classList.add('panned');
      tableEl.style.transform = 'none';
      placeShadow(g, 'open');
      shadow.style.opacity = '.5';
      dim.style.opacity = '1';
      root.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160 });
      S.state = 'open';
      setBar('open');
      busy = false;
      return;
    }

    const T = g.narrow ? 1750 : 1950;
    const path = sampleFlight(g);
    S.box.style.transform = path.box[0].transform;
    scene.style.clipPath = path.clip[0].clipPath;
    // hide the real spine the instant the 3D copy covers it
    requestAnimationFrame(() => { if (originEl) originEl.style.visibility = 'hidden'; });

    // the camera pans down only once the book is clear of the shelf
    const pan = [
      anim(stage, [{ transform: 'translateY(0)' }, { transform: `translateY(${-g.pan}px)` }], { duration: T * 0.54, delay: T * 0.32, easing: EASE_IN_OUT }),
      anim(tableEl, [{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }], { duration: T * 0.54, delay: T * 0.32, easing: EASE_IN_OUT }),
      anim(dim, [{ opacity: 0 }, { opacity: 1 }], { duration: T * 0.5, delay: T * 0.28, easing: 'ease-out' }),
    ];
    placeShadow(g, 'rest');
    const flight = anim(S.box, path.box, { duration: T });
    const clipA = anim(scene, path.clip, { duration: T }).then(() => { scene.style.clipPath = ''; });
    // shadow arrives as the book touches down, with a soft settle
    anim(shadow, [{ opacity: 0, transform: `rotate(${g.rest.rz}deg) scale(1.5)` }, { opacity: 0.55, transform: `rotate(${g.rest.rz}deg) scale(1)` }],
      { duration: T * 0.26, delay: T * 0.74, easing: 'ease-out' });

    await Promise.all([flight, clipA, ...pan]);
    S.state = 'rest';
    S.box.setAttribute('tabindex', '0');
    setBar('rest');
    busy = false;
  }

  // ---------- open / close the cover ----------
  async function openBook() {
    if (busy || !S || S.state !== 'rest') return;
    busy = true;
    setBar(null);
    const g = S.g;
    S.state = 'opening';
    S.box.setAttribute('tabindex', '-1');
    const cover = S.box.querySelector('.leaf.cover');
    const f1 = S.box.querySelector('.leaf.f1');
    const f2 = S.box.querySelector('.leaf.f2');
    const lift = anim(S.box, [
      { transform: restT(g), easing: 'cubic-bezier(.3,0,.2,1)' },
      { transform: tf(g, { x: (g.rest.x + g.open.x) / 2, y: (g.rest.y + g.open.y) / 2 - 16, z: 90, rx: 30, rz: -1, s: (g.rest.s + 1) / 2 }), offset: 0.45, easing: 'cubic-bezier(.3,0,.25,1)' },
      { transform: openT(g) },
    ], { duration: 820 });
    // pages lift over the spine and land on top of the opened cover
    const swing = (el, delay, dur, z) => Promise.all([
      anim(el, z ? [
        { transform: 'rotateY(0deg)', easing: EASE_SOFT },
        { transform: 'rotateY(-180deg)' },
      ] : [
        { transform: 'rotateY(0deg)', easing: EASE_SOFT },
        { transform: 'rotateY(-184deg)', offset: 0.86, easing: 'ease-in-out' },
        { transform: 'rotateY(-180deg)' },
      ], { duration: dur, delay }),
      z ? anim(el, [{ translate: zAt(z[0]), offset: 0 }, { translate: zAt(z[0]), offset: 0.42 }, { translate: zAt(z[1]), offset: 0.43 }, { translate: zAt(z[1]), offset: 1 }], { duration: dur, delay }) : null,
    ]);
    const sh = anim(shadow, [{ opacity: 0.55 }, { opacity: 0 , offset: 0.4 }, { opacity: 0.45 }], { duration: 900 });
    setTimeout(() => placeShadow(g, 'open'), 360);
    await Promise.all([lift, swing(cover, 300, 900), swing(f1, 380, 860, [-3, 3]), swing(f2, 450, 820, [-6, 6]), sh]);
    S.box.classList.add('is-open');
    S.state = 'open';
    setBar('open');
    busy = false;
  }

  async function closeBook() {
    if (busy || !S || S.state !== 'open') return;
    busy = true;
    setBar(null);
    const g = S.g;
    S.state = 'closing';
    S.box.classList.remove('is-open');
    const cover = S.box.querySelector('.leaf.cover');
    const f1 = S.box.querySelector('.leaf.f1');
    const f2 = S.box.querySelector('.leaf.f2');
    const shut = (el, delay, dur, z) => Promise.all([
      anim(el, [{ transform: 'rotateY(-180deg)', easing: EASE_SOFT }, { transform: 'rotateY(0deg)' }], { duration: dur, delay }),
      z ? anim(el, [{ translate: zAt(z[0]), offset: 0 }, { translate: zAt(z[0]), offset: 0.55 }, { translate: zAt(z[1]), offset: 0.56 }, { translate: zAt(z[1]), offset: 1 }], { duration: dur, delay }) : null,
    ]);
    const lower = anim(S.box, [{ transform: openT(g), easing: 'cubic-bezier(.4,0,.2,1)' }, { transform: restT(g) }], { duration: 720, delay: 420 });
    const sh = anim(shadow, [{ opacity: 0.45 }, { opacity: 0, offset: 0.5 }, { opacity: 0.55 }], { duration: 1000, delay: 200 });
    setTimeout(() => placeShadow(g, 'rest'), 700);
    await Promise.all([shut(f2, 0, 620, [6, -6]), shut(f1, 60, 640, [3, -3]), shut(cover, 120, 680), lower, sh]);
    S.state = 'rest';
    S.box.setAttribute('tabindex', '0');
    setBar('rest');
    busy = false;
  }

  // ---------- put it back ----------
  async function putBack(opts = {}) {
    if (busy || !S) return;
    if (S.state === 'open' && !opts.direct) { await closeBook(); }
    if (!S) return;
    busy = true;
    setBar(null);
    const g = S.g;
    const removed = opts.removed;
    // the slot may have moved if the shelf was redrawn (e.g. after an edit)
    let target = S.originEl;
    if (!target || !target.isConnected) {
      target = document.querySelector(`.book[data-id="${CSS.escape(S.id)}"]`) || document.querySelector(`.ledger-item[data-id="${CSS.escape(S.id)}"] .chip, .ledger-item[data-id="${CSS.escape(S.id)}"] .thumb`);
      if (target) { S.originEl = target; S.mode = target.classList.contains('book') ? 'spine' : 'cover'; }
    }
    if (target) {
      target.style.visibility = 'hidden';
      const r = target.getBoundingClientRect();
      const panNow = stage.classList.contains('panned') ? g.pan : 0;
      S.originRect = { left: r.left, top: r.top + panNow, width: r.width, height: r.height };
    }

    if (reduce() || removed || !target) {
      await anim(root, [{ opacity: 1 }, { opacity: 0 }], { duration: removed ? 420 : 160 });
      finish();
      return;
    }

    const T = g.narrow ? 1650 : 1850;
    const path = sampleFlight(g);
    const rev = (arr) => arr.slice().reverse().map(k => ({ ...k, offset: 1 - k.offset }));
    const fly = anim(S.box, rev(path.box), { duration: T });
    const clipA = anim(scene, rev(path.clip), { duration: T }).then(() => { scene.style.clipPath = ''; });
    anim(shadow, [{ opacity: 0.55 }, { opacity: 0 }], { duration: T * 0.2 });
    // the camera is back on the shelf before the book slides into its slot
    const pan = [
      anim(stage, [{ transform: `translateY(${-g.pan}px)` }, { transform: 'translateY(0)' }], { duration: T * 0.52, delay: T * 0.1, easing: EASE_IN_OUT }),
      anim(tableEl, [{ transform: 'translateY(0)' }, { transform: 'translateY(100%)' }], { duration: T * 0.52, delay: T * 0.1, easing: EASE_IN_OUT }),
      anim(dim, [{ opacity: 1 }, { opacity: 0 }], { duration: T * 0.5, delay: T * 0.16, easing: 'ease-in' }),
    ];
    await Promise.all([fly, clipA, ...pan]);
    stage.classList.remove('panned');
    finish(true);
  }

  function finish(settle) {
    const el = S && S.originEl;
    if (el) {
      el.style.visibility = '';
      if (settle && el.classList.contains('book')) el.animate([{ transform: 'translateY(-3px)' }, { transform: 'translateY(0)' }], { duration: 220, easing: 'ease-out' });
      if (!reduce()) setTimeout(() => el.focus({ preventScroll: true }), 0);
    }
    if (S && S.box) S.box.remove();
    stage.style.transform = ''; stage.classList.remove('panned'); scene.style.clipPath = '';
    tableEl.style.transform = ''; dim.style.opacity = ''; shadow.style.opacity = '0';
    root.hidden = true; root.style.opacity = '';
    stage.inert = false;
    document.documentElement.classList.remove('reading');
    window.scrollTo(0, S ? S.scrollY : window.scrollY);
    setBar(null);
    S = null;
    busy = false;
  }

  // ---------- refresh content (after an edit or a cover change) ----------
  function refresh() {
    if (!S) return;
    const b = api.getBook(S.id);
    if (!b) return;
    const g = S.g;
    S.box.querySelector('.f-page.right').innerHTML = pageHTML(b, 'right', g.narrow);
    S.box.querySelector('.f-page.left').innerHTML = pageHTML(b, 'left', g.narrow);
    const c = api.colorOf(b);
    S.box.style.setProperty('--bg', c.bg);
    const sp = S.box.querySelector('.f-spine');
    const old = sp.firstElementChild;
    const neu = api.spineEl(b);
    neu.classList.remove('arrive');
    neu.setAttribute('aria-hidden', 'true');
    ['--w', '--h', '--fs'].forEach(p => neu.style.setProperty(p, old.style.getPropertyValue(p)));
    sp.replaceChild(neu, old);
    paintCover(b, S.box.querySelector('.cv'));
  }

  // ---------- cover & summary lookups ----------
  async function lookupIfNeeded(b) {
    if (b.lookedUp) return;
    await api.lookup(b);
    if (S && S.id === b.id) refresh();
  }

  // cover menu actions
  function closeCoverMenu() { const m = $('#rdCoverMenu'); if (m) m.hidden = true; }
  async function nextCover() {
    const b = api.getBook(S.id);
    const a = b.art = b.art || { ids: [] };
    if (!a.more && a.olKey) {
      api.toast('Looking for other covers…');
      const more = await C.moreCovers(a.olKey, a.ids || []);
      a.ids = [...(a.ids || []), ...more];
      a.more = true;
    }
    if (!a.ids || !a.ids.length) { api.toast('No other covers found. Try using your own photo.'); return; }
    if (a.status === 'upload') await api.forgetPhoto(b);
    const start = a.status === 'found' ? (a.i || 0) : -1;
    for (let k = 1; k <= Math.min(a.ids.length, 12); k++) {
      const i = (start + k) % a.ids.length;
      if (await C.probe(C.coverURL(a.ids[i], 'M'))) {
        a.i = i; a.status = 'found';
        api.saveBook(b); refresh();
        api.toast(`Cover ${i + 1} of ${a.ids.length}.`);
        return;
      }
    }
    api.toast('No other covers found. Try using your own photo.');
  }
  async function usePhoto(file) {
    const b = api.getBook(S.id);
    try {
      const blob = await C.resizeImage(file);
      if (b.art && b.art.status === 'upload') await api.forgetPhoto(b);
      await C.putUpload(b.id, blob);
      b.art = Object.assign(b.art || {}, { status: 'upload' });
      api.saveBook(b); refresh();
      api.toast('Your photo is on the cover.');
    } catch { api.toast('That photo couldn’t be used. Try a JPG or PNG image.'); }
  }
  async function usePlain() {
    const b = api.getBook(S.id);
    if (b.art && b.art.status === 'upload') await api.forgetPhoto(b);
    b.art = Object.assign(b.art || {}, { status: 'plain' });
    api.saveBook(b); refresh();
    api.toast('Using a plain cloth cover.');
  }

  // ---------- events ----------
  scene.addEventListener('click', (e) => {
    if (busy || !S) return;
    const onBook = e.target.closest('.b3d');
    if (S.state === 'rest') { if (onBook) openBook(); else putBack(); return; }
    if (S.state === 'open') {
      const act = e.target.closest('[data-rd]');
      if (act && act.dataset.rd === 'edit') { api.onEdit(S.id); return; }
      if (act && act.dataset.rd === 'tag') {
        // put the book back, then show everything with that tag
        const t = act.dataset.tag;
        putBack().then(() => api.onTag(t));
        return;
      }
      if (act) { api.onPage(act.dataset.rd, S.id, act); return; }
      if (!onBook) closeBook();
    }
  });
  scene.addEventListener('keydown', (e) => {
    if (S && S.state === 'rest' && e.target.classList.contains('b3d') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openBook(); }
  });
  bar.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-rd]');
    if (!btn || busy || !S) return;
    const a = btn.dataset.rd;
    if (a === 'return') putBack();
    else if (a === 'open') openBook();
    else if (a === 'close') closeBook();
    else if (a === 'edit') api.onEdit(S.id);
    else if (a === 'cover') { const m = $('#rdCoverMenu'); m.hidden = !m.hidden; }
    else if (a === 'next-cover') { closeCoverMenu(); nextCover(); }
    else if (a === 'photo') { closeCoverMenu(); $('#rdPhoto').click(); }
    else if (a === 'plain') { closeCoverMenu(); usePlain(); }
    else if (a === 'find') { closeCoverMenu(); const b = api.getBook(S.id); b.art = { ids: [] }; b.lookedUp = 0; api.saveBook(b); api.toast('Looking for a cover…'); await lookupIfNeeded(b); }
    else if (a === 'remove') {
      if (!btn.dataset.confirm) { btn.dataset.confirm = '1'; btn.textContent = 'Remove for good?'; return; }
      const id = S.id;
      api.onRemove(id);
      putBack({ removed: true, direct: true });
    }
  });
  $('#rdPhoto').addEventListener('change', (e) => { const f = e.target.files[0]; if (f && S) usePhoto(f); e.target.value = ''; });
  document.addEventListener('keydown', (e) => {
    if (!S || e.key !== 'Escape' || document.querySelector('dialog[open]')) return;
    e.preventDefault();
    if ($('#rdCoverMenu') && !$('#rdCoverMenu').hidden) return closeCoverMenu();
    if (S.state === 'open') closeBook(); else if (S.state === 'rest') putBack();
  });
  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (!S || busy) return;
      // rebuild at the new size, keeping the current state
      const b = api.getBook(S.id);
      const g = geo();
      const state = S.state;
      S.box.remove();
      S.g = g;
      const built = buildBook(b, g, S.mode === 'spine' && S.originEl && S.originEl.isConnected ? S.originEl : null);
      S.box = built.box; S.Tb = built.Tb;
      scene.appendChild(S.box);
      paintCover(b, S.box.querySelector('.cv'));
      stage.style.transform = `translateY(${-g.pan}px)`;
      drawTable(g);
      if (state === 'open') {
        S.box.style.transform = openT(g);
        openLeaves();
        placeShadow(g, 'open');
      } else {
        S.box.style.transform = restT(g);
        placeShadow(g, 'rest');
        S.box.setAttribute('tabindex', '0');
      }
    }, 150);
  });

  return { open, refresh, putBack, isOpen: () => !!S, currentId: () => S && S.id };
};
