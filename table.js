/* Tomestead reading table: a real tabletop drawn in perspective, with the objects
   you choose set around the book. Used by the reading table and the Customize preview. */
window.TomesteadTable = (() => {
  'use strict';
  const Art = window.TomesteadArt;
  const D = window.TomesteadDecor;
  const f = (n) => Math.round(n * 10) / 10;
  const rng = Art.rng;

  const MAT = {
    walnut:  { top: ['#3b2414', '#6a4527', '#8c5f37', '#a77445'], edge: ['#9a6a3e', '#5a3820', '#2a170b'], leg: [[0, '#24140a'], [.3, '#6e4526'], [.45, '#8d5f37'], [.7, '#4a2d17'], [1, '#1c0f06']], grain: '#2a170b', planks: 4 },
    oak:     { top: ['#7a5a36', '#b08656', '#cfa775', '#dfbc8c'], edge: ['#d0a676', '#8a6438', '#4a3218'], leg: [[0, '#5a3e20'], [.3, '#b08656'], [.5, '#c99c68'], [.8, '#7a5630'], [1, '#4a3218']], grain: '#6b4a26', planks: 5, knots: true },
    leather: { top: ['#2a160b', '#4d2d17', '#6a4124', '#7d4f2e'], edge: ['#7a4c2a', '#45281a', '#1f1008'], leg: [[0, '#1c0f06'], [.3, '#5a3820'], [.45, '#77502e'], [.7, '#3b2414'], [1, '#160b04']], grain: '#1c0f06', planks: 0, leather: true },
    round:   { top: ['#4a1d10', '#7a3420', '#9a4a2c', '#b55f3a'], edge: ['#a85434', '#6a2814', '#2e0f06'], leg: [[0, '#2e0f06'], [.3, '#7a3420'], [.45, '#a04e30'], [.7, '#5a2010'], [1, '#240b04']], grain: '#3a140a', planks: 3, round: true },
    marble:  { top: ['#bdb6aa', '#ddd7cc', '#eeeae2', '#f7f4ee'], edge: ['#e9c87e', '#b08a48', '#5a4118'], leg: [[0, '#3b2a0e'], [.25, '#8a6a2c'], [.4, '#f1dc98'], [.55, '#c79c4a'], [.8, '#6b4e1c'], [1, '#33240b']], grain: '#8a8478', planks: 0, marble: true },
  };

  // geometry: u across (0 left … 1 right), v into the table (0 front edge … 1 far edge)
  function geometry(o) {
    const r = o.ratio || 0.72;
    const c = 1 / r - 1;
    const hy = (o.farY - o.frontY * r) / (1 - r);
    const k = (v) => 1 / (1 + c * v);
    const y = (v) => hy + (o.frontY - hy) * k(v);
    const x = (u, v) => o.cx + (u - 0.5) * o.frontW * k(v);
    // the v whose screen y matches a given y
    const vAt = (sy) => ((o.frontY - hy) / (sy - hy) - 1) / c;
    return { ...o, r, k, x, y, vAt };
  }
  const P = (g, u, v) => `${f(g.x(u, v))} ${f(g.y(v))}`;
  const quad = (g, u0, v0, u1, v1) => `M${P(g, u0, v0)} L${P(g, u1, v0)} L${P(g, u1, v1)} L${P(g, u0, v1)}Z`;
  function line(g, pts) { return 'M' + pts.map(([u, v]) => P(g, u, v)).join(' L'); }

  function grain(g, m, seed, clipId) {
    const r = rng(seed);
    let out = '';
    for (let i = 0; i < 70; i++) {
      const u0 = r(), drift = (r() - .5) * .03, ph = r() * 6, amp = .002 + r() * .004;
      const pts = Array.from({ length: 7 }, (_, j) => { const v = j / 6; return [u0 + drift * v + Math.sin(v * 7 + ph) * amp, v]; });
      out += `<path d="${line(g, pts)}" stroke="${r() > .3 ? m.grain : '#fff'}" stroke-opacity="${f(r() > .3 ? .08 + r() * .14 : .04 + r() * .05)}" stroke-width="${f(.5 + r() * 1.6)}"/>`;
    }
    for (let i = 1; i < m.planks; i++) {
      const u = i / m.planks + (r() - .5) * .01;
      out += `<path d="${line(g, [[u, 0], [u, 1]])}" stroke="#000" stroke-opacity=".38" stroke-width="1.6"/><path d="${line(g, [[u + .002, 0], [u + .002, 1]])}" stroke="#fff" stroke-opacity=".07"/>`;
    }
    if (m.knots) {
      for (let i = 0; i < 3; i++) {
        const u = .1 + r() * .8, v = .1 + r() * .8, k = g.k(v);
        out += `<ellipse cx="${f(g.x(u, v))}" cy="${f(g.y(v))}" rx="${f(9 * k)}" ry="${f(3.4 * k * k)}" fill="none" stroke="${m.grain}" stroke-opacity=".35" stroke-width="1.4"/><ellipse cx="${f(g.x(u, v))}" cy="${f(g.y(v))}" rx="${f(3.6 * k)}" ry="${f(1.4 * k * k)}" fill="${m.grain}" fill-opacity=".45"/>`;
      }
    }
    return `<g clip-path="url(#${clipId})" fill="none">${out}</g>`;
  }

  function marbleVeins(g, seed, clipId) {
    const r = rng(seed);
    let out = '';
    for (let i = 0; i < 12; i++) {
      let u = r(), v = r() * .2 - .1;
      const pts = [];
      const du = (r() - .5) * .3, dv = .25 + r() * .25;
      for (let j = 0; j < 7; j++) { pts.push([g.x(u, Math.min(1.1, v)), g.y(Math.min(1.1, v))]); u += du / 6 + (r() - .5) * .06; v += dv / 2; }
      out += `<path d="M${pts.map(p => `${f(p[0])} ${f(p[1])}`).join(' L')}" stroke="${r() > .8 ? '#b89b5e' : '#6f6a62'}" stroke-opacity="${f(.06 + r() * .14)}" stroke-width="${f(.5 + r() * 1.6)}" stroke-linejoin="round"/>`;
    }
    return `<g clip-path="url(#${clipId})" fill="none" filter="url(#tb-soft)">${out}</g>`;
  }

  function legs(g, m, style, t, apronH) {
    const legGrad = `<linearGradient id="tb-leg">${m.leg.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient>`;
    const top = g.frontY + t + apronH - 4;
    const bottom = g.H + 40;
    const lw = Math.max(14, g.unit * 5.5);
    let out = '';
    if (style === 'round') {
      const cx = g.cx, w = lw * 1.5;
      out += `<path d="M${f(cx - w)} ${f(top)} L${f(cx + w)} ${f(top)} L${f(cx + w * .8)} ${f(bottom)} L${f(cx - w * .8)} ${f(bottom)}Z" fill="url(#tb-leg)"/>`;
      return { defs: legGrad, back: '', front: out };
    }
    const legAt = (u, v, scale, dark) => {
      const x = g.x(u, v), w = lw * scale;
      const yt = v ? g.y(v) + t : top;
      if (style === 'marble') return `<rect x="${f(x - w * .22)}" y="${f(yt)}" width="${f(w * .44)}" height="${f(bottom - yt)}" fill="url(#tb-leg)"${dark ? ' opacity=".55"' : ''}/>`;
      if (style === 'oak' || style === 'leather') return `<path d="M${f(x - w / 2)} ${f(yt)} L${f(x + w / 2)} ${f(yt)} L${f(x + w * .36)} ${f(bottom)} L${f(x - w * .36)} ${f(bottom)}Z" fill="url(#tb-leg)"${dark ? ' opacity=".55"' : ''}/>`;
      // turned leg
      const L = bottom - yt;
      const prof = [[0, .5], [.1, .5], [.13, .36], [.17, .44], [.21, .3], [.5, .26], [.7, .2], [.86, .16], [1, .15]].map(([p, hw]) => [yt + p * L, hw * w]);
      return `<path d="${Art.lathe(x, prof)}" fill="url(#tb-leg)"${dark ? ' opacity=".55"' : ''}/>`;
    };
    const back = legAt(.05, .94, .7, true) + legAt(.95, .94, .7, true);
    const front = legAt(.04, 0, 1) + legAt(.96, 0, 1);
    return { defs: legGrad, back, front };
  }

  function drawTable(o) {
    const g = geometry(o);
    const style = MAT[o.style] ? o.style : 'walnut';
    const m = MAT[style];
    const t = Math.max(8, g.unit * 3.2);            // tabletop thickness
    const apronH = style === 'leather' ? g.unit * 11 : style === 'round' ? 0 : g.unit * 7;
    const L = legs(g, m, style, t, apronH);
    const y0 = g.frontY, y1 = g.farY;
    const xl0 = g.x(0, 0), xr0 = g.x(1, 0);
    const topGrad = `<linearGradient id="tb-top" x1="0" y1="${f(y1)}" x2="0" y2="${f(y0)}" gradientUnits="userSpaceOnUse">${m.top.map((c, i) => `<stop offset="${f(i / 3)}" stop-color="${c}"/>`).join('')}</linearGradient>`;
    const edgeGrad = `<linearGradient id="tb-edge" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${m.edge[0]}"/><stop offset=".3" stop-color="${m.edge[1]}"/><stop offset="1" stop-color="${m.edge[2]}"/></linearGradient>`;
    const poolCx = o.lightX ?? g.cx, poolCy = o.lightY ?? g.y(.5);
    const pool = `<radialGradient id="tb-pool" cx="${f(poolCx)}" cy="${f(poolCy)}" r="${f(g.frontW * .55)}" gradientUnits="userSpaceOnUse" gradientTransform="translate(${f(poolCx)} ${f(poolCy)}) scale(1 .55) translate(${f(-poolCx)} ${f(-poolCy)})"><stop offset="0" stop-color="#ffd59a" stop-opacity=".34"/><stop offset=".55" stop-color="#ffc070" stop-opacity=".08"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></radialGradient>`;
    const under = `<linearGradient id="tb-under" x1="0" y1="${f(y0)}" x2="0" y2="${f(g.H)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#050302" stop-opacity=".2"/><stop offset=".45" stop-color="#050302" stop-opacity=".7"/><stop offset="1" stop-color="#050302" stop-opacity=".95"/></linearGradient>`;
    const far = `<linearGradient id="tb-far" x1="0" y1="${f(y1)}" x2="0" y2="${f(y0)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset=".45" stop-color="#000" stop-opacity="0"/></linearGradient>`;
    const filters = `<filter id="tb-soft" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="1.1"/></filter>
      <filter id="tb-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${f(g.unit * 1.4)}"/></filter>
      <filter id="tb-leatherTex" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .22 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>`;

    let topShape, edge, apron = '';
    if (m.round) {
      const cy = (y0 + y1) / 2, rx = g.frontW * g.k(.5) / 2 * 1.02, ry = (y0 - y1) / 2;
      topShape = `M${f(g.cx - rx)} ${f(cy)} A${f(rx)} ${f(ry)} 0 1 0 ${f(g.cx + rx)} ${f(cy)} A${f(rx)} ${f(ry)} 0 1 0 ${f(g.cx - rx)} ${f(cy)}Z`;
      edge = `<path d="M${f(g.cx - rx)} ${f(cy)} A${f(rx)} ${f(ry)} 0 0 0 ${f(g.cx + rx)} ${f(cy)} L${f(g.cx + rx)} ${f(cy + t)} A${f(rx)} ${f(ry)} 0 0 1 ${f(g.cx - rx)} ${f(cy + t)}Z" fill="url(#tb-edge)"/>`;
    } else {
      topShape = quad(g, 0, 0, 1, 1);
      edge = `<rect x="${f(xl0)}" y="${f(y0)}" width="${f(xr0 - xl0)}" height="${f(t)}" fill="url(#tb-edge)"/><rect x="${f(xl0)}" y="${f(y0)}" width="${f(xr0 - xl0)}" height="1.2" fill="#fff" opacity=".18"/>`;
      const ax0 = g.x(.025, 0), ax1 = g.x(.975, 0);
      if (apronH) {
        apron = `<rect x="${f(ax0)}" y="${f(y0 + t)}" width="${f(ax1 - ax0)}" height="${f(apronH)}" fill="url(#tb-edge)" opacity=".85"/><rect x="${f(ax0)}" y="${f(y0 + t)}" width="${f(ax1 - ax0)}" height="${f(apronH)}" fill="#000" opacity=".35"/>`;
        if (style === 'leather') {
          const dw = (ax1 - ax0) / 3;
          for (let i = 0; i < 3; i++) {
            const dx = ax0 + dw * i + 6, dy = y0 + t + 4;
            apron += `<rect x="${f(dx)}" y="${f(dy)}" width="${f(dw - 12)}" height="${f(apronH - 8)}" rx="2" fill="url(#tb-edge)" opacity=".7"/><rect x="${f(dx)}" y="${f(dy)}" width="${f(dw - 12)}" height="1" fill="#fff" opacity=".15"/>
              <rect x="${f(dx + dw / 2 - 6 - g.unit * 2.5)}" y="${f(dy + (apronH - 8) / 2 - g.unit * .5)}" width="${f(g.unit * 5)}" height="${f(g.unit * 1.2)}" rx="${f(g.unit * .6)}" fill="#d9b468"/>`;
          }
        }
      }
    }
    let surface = `<path d="${topShape}" fill="url(#tb-top)"/>`;
    if (m.marble) surface += marbleVeins(g, 11, 'tb-clip');
    else surface += grain(g, m, style.length * 97, 'tb-clip');
    if (m.leather) {
      const inset = quad(g, .075, .1, .925, .9);
      surface += `<path d="${inset}" fill="#173a2a"/><path d="${inset}" fill="#2c5a42" opacity=".5" filter="url(#tb-leatherTex)"/>
        <path d="${quad(g, .088, .12, .912, .88)}" fill="none" stroke="#d6b263" stroke-width="1.1" stroke-opacity=".75"/>
        <path d="${quad(g, .094, .135, .906, .865)}" fill="none" stroke="#d6b263" stroke-width=".6" stroke-opacity=".5"/>
        <path d="${inset}" fill="none" stroke="#000" stroke-opacity=".5" stroke-width="1.4"/>`;
    }
    if (m.marble) surface += `<path d="${topShape}" fill="#fff" opacity=".08"/>`;
    surface += `<path d="${topShape}" fill="url(#tb-far)"/><path d="${topShape}" fill="url(#tb-pool)"/>`;
    // sheen along the near edge, as on a waxed or polished top
    surface += m.round ? '' : `<path d="${quad(g, 0, 0, 1, .05)}" fill="#fff" opacity="${m.marble ? .12 : .06}"/>`;

    const props = placeItems(g, o.items || [], o.maxItems);
    // (the Poly Haven pieces are pictures with their own shadows)
    const shadows = props.filter(p => !(Art.A[p.art] && Art.A[p.art].img)).map(p => `<ellipse cx="${f(p.x + p.w * .08)}" cy="${f(p.y - p.h * .01)}" rx="${f(p.w * (p.flat ? .5 : .42))}" ry="${f(p.w * .09 * g.k(p.v))}" fill="url(#tb-shd)" opacity="${p.flat ? .6 : 1}"/>`).join('');
    const glows = props.filter(p => p.glow).map(p => `<ellipse cx="${f(p.glowX)}" cy="${f(p.y)}" rx="${f(g.frontW * (p.key === 'lamp' ? .34 : .2))}" ry="${f((y0 - y1) * (p.key === 'lamp' ? .5 : .3))}" fill="url(#tb-glow)"/>`).join('');
    const glowDef = `<radialGradient id="tb-shd"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset=".55" stop-color="#000" stop-opacity=".28"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient><radialGradient id="tb-glow"><stop offset="0" stop-color="#ffd38a" stop-opacity=".3"/><stop offset="1" stop-color="#ffd38a" stop-opacity="0"/></radialGradient>`;
    const bookArt = o.book ? previewBook(g) : '';

    const svg = `<svg class="tb-svg" viewBox="0 0 ${f(g.W)} ${f(g.H)}" width="${f(g.W)}" height="${f(g.H)}" aria-hidden="true" focusable="false" style="position:absolute;left:0;top:0">
      <defs>${topGrad}${edgeGrad}${pool}${under}${far}${filters}${L.defs}${glowDef}<clipPath id="tb-clip"><path d="${topShape}"/></clipPath></defs>
      ${L.back}${apron}${L.front}
      <rect x="0" y="${f(y0)}" width="${f(g.W)}" height="${f(g.H - y0 + 50)}" fill="url(#tb-under)"/>
      ${edge}${surface}<g clip-path="url(#tb-clip)">${glows}${shadows}</g>${bookArt}</svg>`;
    const propHTML = props.sort((a, b) => b.v - a.v).map(p =>
      `<div class="tprop tp-${p.key}" style="left:${f(p.x - p.w / 2)}px;top:${f(p.y - p.base)}px">${Art.draw(p.art, p.scale)}</div>`).join('');
    const pfx = (o.id || 'tb') + '-';
    return { html: svg.replace(/tb-/g, pfx) + propHTML, geo: g };
  }

  const SLOTS = [
    { u: .14, v: .82 }, { u: .87, v: .78 }, { u: .1, v: .2 }, { u: .9, v: .18 }, { u: .32, v: .98 },
  ];
  function placeItems(g, items, max) {
    const picks = [...new Set(items)].filter(k => D.TABLE_ITEMS[k]).slice(0, max || D.MAX_TABLE_ITEMS);
    const free = new Set(SLOTS.map((_, i) => i));
    const order = (it, key) => key === 'lamp' ? [0, 1, 4, 2, 3] : it.tall ? [1, 0, 4, 2, 3] : it.flat ? [3, 2, 4, 1, 0] : [2, 3, 1, 0, 4];
    const out = [];
    // place tall pieces first so they get the back corners
    const sorted = [...picks].sort((a, b) => (D.TABLE_ITEMS[b].tall ? 1 : 0) - (D.TABLE_ITEMS[a].tall ? 1 : 0));
    for (const key of sorted) {
      const it = D.TABLE_ITEMS[key];
      const si = order(it, key).find(i => free.has(i));
      if (si == null) continue;
      free.delete(si);
      let { u, v } = SLOTS[si];
      if (g.narrow) u = u < .5 ? Math.min(u, .08) : Math.max(u, .92);
      const z = Art.size(it.art);
      const scale = (it.cm * g.unit * g.k(v)) / z.h;
      const w = z.w * scale, h = z.h * scale;
      // keep things on the table
      const minX = g.x(0, v) + w * .5, maxX = g.x(1, v) - w * .5;
      const x = Math.min(maxX, Math.max(minX, g.x(u, v)));
      out.push({ key, art: it.art, x, y: g.y(v), v, w, h, base: z.base * scale, scale, flat: it.flat, glow: !!z.glow, glowX: x - w / 2 + (z.glow ? z.glow.x * scale : 0) });
    }
    return out;
  }

  // a closed book lying on the table, for the Customize preview
  function previewBook(g) {
    const v0 = .3, v1 = .68, u0 = .37, u1 = .63;
    const c = '#5B2F4A';
    const tl = [g.x(u0 + .01, v1), g.y(v1)], tr = [g.x(u1 + .01, v1), g.y(v1)], br = [g.x(u1, v0), g.y(v0)], bl = [g.x(u0, v0), g.y(v0)];
    const th = g.unit * 3 * g.k(.3);
    const p = (a) => `${f(a[0])} ${f(a[1])}`;
    return `<path d="M${p(bl)} L${p(br)} L${f(br[0])} ${f(br[1] + th)} L${f(bl[0])} ${f(bl[1] + th)}Z" fill="#e9dfc6"/>
      <path d="M${p(bl)} L${f(bl[0] - 3)} ${f(bl[1] + th * .5)} L${f(bl[0])} ${f(bl[1] + th)} L${f(tl[0])} ${f(tl[1] + th * .6)} L${p(tl)}Z" fill="#3a1d2e"/>
      <ellipse cx="${f((bl[0] + br[0]) / 2 + 6)}" cy="${f(bl[1] + th + 4)}" rx="${f((br[0] - bl[0]) * .55)}" ry="${f(th * 1.2)}" fill="url(#tb-shd)"/>
      <path d="M${p(tl)} L${p(tr)} L${p(br)} L${p(bl)}Z" fill="${c}"/>
      <path d="M${p(tl)} L${p(tr)} L${p(br)} L${p(bl)}Z" fill="none" stroke="#e8c766" stroke-opacity=".6" stroke-width="1" transform="translate(0 0)"/>
      <path d="M${p(tl)} L${p(tr)} L${p(br)} L${p(bl)}Z" fill="#fff" opacity=".07"/>`;
  }

  return { drawTable, geometry, MAT };
})();
