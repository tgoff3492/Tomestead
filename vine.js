/* Tomestead: a climbing vine up the right side of the bookcase and over the arch.
   Climbing roses (blush blooms, serrated leaves) or English ivy. Drawn to fit each
   bookcase; the same seed gives the same plant every time. */
(() => {
  'use strict';
  const f = (n) => (Math.round(n * 10) / 10).toString();

  function rng(seed) {
    let s = (seed >>> 0) || 1;
    return () => ((s = (s * 16807) % 2147483647) / 2147483647);
  }

  // smooth path through points (Catmull-Rom → cubic Bézier)
  function smooth(pts) {
    let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
    }
    return d;
  }

  // the route: up the right post, then along the outside of the arch toward its top
  function route(W, H, archH, post, r) {
    const x0 = W - post - 1;            // along the inside edge of the right post (the case edge clips anything further out)
    const pts = [];
    const steps = Math.max(8, Math.round((H - archH) / 38));
    for (let i = 0; i <= steps; i++) {
      const y = H - 8 - (H - 8 - archH) * (i / steps);
      pts.push([x0 + Math.sin(i * 1.3 + r() * .6) * 4, y]);
    }
    const rx = W / 2, ry = archH, cx = W / 2;
    const reach = Math.min(W * 0.4, 280);
    let travelled = 0, prev = [W, archH];
    for (let th = 0.04; th < Math.PI / 2; th += 0.035) {
      const p = [cx + (rx - 3) * Math.cos(th), archH - (ry - 3) * Math.sin(th)];
      travelled += Math.hypot(p[0] - prev[0], p[1] - prev[1]);
      prev = p;
      pts.push([p[0] + Math.sin(th * 9) * 3, p[1] + Math.cos(th * 7) * 3]);
      if (travelled > reach) break;
    }
    return pts;
  }

  // sample positions along a polyline at a spacing, with the local direction
  function along(pts, step, jitter, r) {
    const out = [];
    let carry = step * r();
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
      const seg = Math.hypot(bx - ax, by - ay);
      const ang = Math.atan2(by - ay, bx - ax);
      let t = carry;
      while (t < seg) {
        const k = t / seg;
        out.push({ x: ax + (bx - ax) * k, y: ay + (by - ay) * k, ang, i });
        t += step * (1 - jitter / 2 + r() * jitter);
      }
      carry = t - seg;
    }
    return out;
  }

  // ---------- leaves and flowers ----------
  function roseLeaf(x, y, rot, L, id, r) {
    // a serrated, pointed leaflet with a midrib
    const w = L * .42, n = 5;
    let edge = `M0 0`;
    for (let i = 1; i <= n; i++) { const t = i / n; const hw = w * Math.sin(Math.PI * Math.min(.98, t)) * (1 - t * .15); edge += ` L${f(hw + (i % 2 ? 1.2 : 0))} ${f(-L * t)}`; }
    for (let i = n - 1; i >= 1; i--) { const t = i / n; const hw = w * Math.sin(Math.PI * t) * (1 - t * .15); edge += ` L${f(-hw - (i % 2 ? 1.2 : 0))} ${f(-L * t)}`; }
    edge += 'Z';
    const shade = r() < .4 ? `${id}lfD` : `${id}lf`;
    return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)})"><path d="${edge}" fill="url(#${shade})"/>` +
      `<path d="M0 -1 L0 ${f(-L * .92)}" stroke="#d8e6b8" stroke-opacity=".38" stroke-width=".7"/>` +
      `<path d="M0 ${f(-L * .35)} l${f(w * .5)} ${f(-L * .14)} M0 ${f(-L * .55)} l${f(-w * .5)} ${f(-L * .14)}" stroke="#d8e6b8" stroke-opacity=".22" stroke-width=".5"/></g>`;
  }

  function ivyLeaf(x, y, rot, L, id, r) {
    // five-lobed English ivy, pale veins
    const s = L / 20;
    const shade = r() < .45 ? `${id}ivD` : `${id}iv`;
    return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)}) scale(${f(s)})">` +
      `<path d="M0 0 C-3 -2 -9 -2 -12 -6 C-9 -7 -8 -9 -10 -13 C-6 -12 -4 -13 -3 -17 C-1 -16 0 -19 0 -22 C0 -19 1 -16 3 -17 C4 -13 6 -12 10 -13 C8 -9 9 -7 12 -6 C9 -2 3 -2 0 0Z" fill="url(#${shade})"/>` +
      `<path d="M0 -1 V-20 M0 -4 L-9 -7 M0 -4 L9 -7 M0 -8 L-5 -14 M0 -8 L5 -14" stroke="#e2ecc8" stroke-opacity=".42" stroke-width=".9" fill="none"/></g>`;
  }

  function rose(x, y, R, id, r, open = 1) {
    const rot = r() * 72;
    let g = `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)})">`;
    g += `<circle r="${f(R * 1.15)}" fill="#000" opacity=".18" transform="translate(${f(R * .25)} ${f(R * .3)})"/>`;
    if (open > .5) {
      for (let i = 0; i < 5; i++) {
        const a = i * 72;
        g += `<ellipse cx="0" cy="${f(-R * .55)}" rx="${f(R * .62)}" ry="${f(R * .58)}" fill="url(#${id}pt)" transform="rotate(${a})"/>`;
      }
      for (let i = 0; i < 5; i++) {
        const a = i * 72 + 36;
        g += `<ellipse cx="0" cy="${f(-R * .34)}" rx="${f(R * .44)}" ry="${f(R * .4)}" fill="url(#${id}pt2)" transform="rotate(${a})"/>`;
      }
    }
    // the cupped heart and its spiral
    g += `<circle r="${f(R * (open > .5 ? .42 : .55))}" fill="url(#${id}hrt)"/>`;
    g += `<path d="M${f(-R * .22)} ${f(R * .05)} C${f(-R * .2)} ${f(-R * .25)} ${f(R * .2)} ${f(-R * .28)} ${f(R * .22)} 0 C${f(R * .2)} ${f(R * .18)} ${f(-R * .05)} ${f(R * .2)} ${f(-R * .08)} ${f(R * .02)}" stroke="#8e3a32" stroke-opacity=".55" stroke-width="${f(Math.max(.6, R * .08))}" fill="none"/>`;
    g += `<ellipse cx="${f(-R * .3)}" cy="${f(-R * .35)}" rx="${f(R * .28)}" ry="${f(R * .16)}" fill="#fff4ec" opacity=".35" transform="rotate(-30)"/>`;
    return g + '</g>';
  }

  function bud(x, y, ang, R, id) {
    return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(ang)})"><path d="M0 0 C${f(R * .6)} ${f(-R * .4)} ${f(R * .5)} ${f(-R * 1.4)} 0 ${f(-R * 1.8)} C${f(-R * .5)} ${f(-R * 1.4)} ${f(-R * .6)} ${f(-R * .4)} 0 0Z" fill="url(#${id}pt)"/>` +
      `<path d="M0 0 C${f(R * .5)} ${f(-R * .3)} ${f(R * .4)} ${f(-R * .8)} ${f(R * .15)} ${f(-R * 1.1)} M0 0 C${f(-R * .5)} ${f(-R * .3)} ${f(-R * .4)} ${f(-R * .8)} ${f(-R * .15)} ${f(-R * 1.1)}" stroke="#3e5a2a" stroke-width="1.2" fill="none"/></g>`;
  }

  function draw(kind, W, H, archH, post, seed, s = 1) {
    if (!kind || kind === 'none' || !W || !H) return '';
    const r = rng(seed);
    const id = `vn${seed}`;
    const pts = route(W, H, archH, post, r);
    const ivy = kind === 'ivy';
    const defs = `<defs>
      <linearGradient id="${id}st" x1="0" x2="1"><stop offset="0" stop-color="#3a2a16"/><stop offset=".5" stop-color="#6b5532"/><stop offset="1" stop-color="#2e2010"/></linearGradient>
      <linearGradient id="${id}lf" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2f5226"/><stop offset=".6" stop-color="#4f7a38"/><stop offset="1" stop-color="#7a9e52"/></linearGradient>
      <linearGradient id="${id}lfD" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1f3a1c"/><stop offset=".7" stop-color="#365a2a"/><stop offset="1" stop-color="#55773c"/></linearGradient>
      <linearGradient id="${id}iv" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#23401f"/><stop offset=".6" stop-color="#3c6630"/><stop offset="1" stop-color="#5e8a45"/></linearGradient>
      <linearGradient id="${id}ivD" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#16301a"/><stop offset=".7" stop-color="#2a4c26"/><stop offset="1" stop-color="#406a34"/></linearGradient>
      <radialGradient id="${id}pt" cx=".5" cy=".75" r=".8"><stop offset="0" stop-color="#fbd9c8"/><stop offset=".55" stop-color="#ec9c86"/><stop offset="1" stop-color="#c76858"/></radialGradient>
      <radialGradient id="${id}pt2" cx=".5" cy=".7" r=".8"><stop offset="0" stop-color="#fde6d8"/><stop offset=".6" stop-color="#f0ab94"/><stop offset="1" stop-color="#d27a66"/></radialGradient>
      <radialGradient id="${id}hrt" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#f6b8a2"/><stop offset=".6" stop-color="#d5705e"/><stop offset="1" stop-color="#a84a40"/></radialGradient>
      <filter id="${id}sh" x="-30%" y="-10%" width="160%" height="120%"><feDropShadow dx="2" dy="3" stdDeviation="2.2" flood-color="#000" flood-opacity=".45"/></filter>
    </defs>`;
    // the main cane, and a thinner one twining round it
    const main = smooth(pts);
    const twin = smooth(pts.map(([x, y], i) => [x + Math.sin(i * 1.7) * 3.2, y + Math.cos(i * 1.3) * 2]));
    let stems = `<path d="${main}" stroke="url(#${id}st)" stroke-width="${f(3.2 * s)}" fill="none" stroke-linecap="round"/>` +
      `<path d="${twin}" stroke="#4a3a1e" stroke-width="${f(1.6 * s)}" fill="none" stroke-linecap="round" opacity=".9"/>`;
    // side sprigs that droop into the case and out over the wall
    const sprigs = [];
    const spots = along(pts, 70 * s, .6, r).filter(p => p.y < H - 90);
    spots.forEach((p, k) => {
      const dir = -1;                                   // sprigs droop inward, over the books
      const len = (22 + r() * 32) * s;
      const sp = [[p.x, p.y]];
      for (let j = 1; j <= 4; j++) sp.push([p.x + dir * len * (j / 4) * .9, p.y + len * (j / 4) * (j / 4) * .9 + r() * 3]);
      sprigs.push(sp);
      stems += `<path d="${smooth(sp)}" stroke="#4a3a1e" stroke-width="${f(1.3 * s)}" fill="none" stroke-linecap="round"/>`;
    });
    // leaves
    let leaves = '';
    const leafAt = (p, side, L) => {
      // leaves on the outer side lie close to the cane, so they stay on the bookcase
      const out = Math.cos(p.ang) * side < 0 || (Math.abs(Math.sin(p.ang)) > .7 && side > 0);
      const rot = p.ang * 180 / Math.PI + 90 + side * (out ? 12 + r() * 18 : 40 + r() * 35);
      return ivy ? ivyLeaf(p.x, p.y, rot, L, id, r) : roseLeaf(p.x, p.y, rot, L, id, r);
    };
    along(pts, (ivy ? 11 : 9) * s, .5, r).forEach((p, k) => {
      leaves += leafAt(p, k % 2 ? 1 : -1, (ivy ? 15 + r() * 7 : 12 + r() * 7) * s);
    });
    sprigs.forEach(sp => along(sp, 8 * s, .4, r).forEach((p, k) => { leaves += leafAt(p, k % 2 ? 1 : -1, (ivy ? 11 : 9 + r() * 4) * s); }));
    // blooms: thick near the top of the arch, a few lower down
    let blooms = '';
    if (!ivy) {
      const topStart = pts.findIndex(p => p[1] <= archH + 2);
      const upper = along(pts.slice(Math.max(0, topStart - 3)), 30 * s, .7, r);
      upper.forEach((p, k) => {
        const R = (5.5 + r() * 3.5) * s;
        const off = (k % 2 ? 1 : -1) * (3 + r() * 4);
        blooms += rose(p.x + Math.sin(p.ang) * off, p.y - Math.cos(p.ang) * off, R, id, r, 1);
        if (r() < .45) blooms += bud(p.x + 9 * s, p.y + 5 * s, 20 + r() * 40, 3 * s, id);
      });
      const lower = along(pts.slice(0, Math.max(2, topStart)), 120 * s, .8, r).filter(p => p.y < H - 70);
      lower.forEach((p, k) => {
        if (k % 2) blooms += rose(p.x + (r() - .5) * 8, p.y, (4.5 + r() * 2.5) * s, id, r, 1);
        else blooms += bud(p.x + 4, p.y, -30 + r() * 60, 2.8 * s, id);
      });
      sprigs.forEach(sp => { if (r() < .55) { const e = sp[sp.length - 1]; blooms += rose(e[0], e[1], (4 + r() * 2) * s, id, r, 1); } });
    }
    return `<svg width="${f(W)}" height="${f(H)}" viewBox="0 0 ${f(W)} ${f(H)}" aria-hidden="true" focusable="false" overflow="visible">${defs}<g filter="url(#${id}sh)">${stems}${leaves}${blooms}</g></svg>`;
  }

  window.TomesteadVine = { draw };
})();
