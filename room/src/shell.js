/* Tomestead · the room's architecture, which grows as you read (growth.js decides how far).
   The study is today's room: 6 × 5.4 m, 3 m to the beams. The furniture lives against its walls and
   never moves; as the room grows it rises and reaches forward around it:
     study    6 × 5.4 m, 3 m high, beamed ceiling
     library  6 × 9 m, two storeys (6.4 m): a gallery with an iron railing around the room at 3 m, lined
              with bookcases, a round window high on the back wall, arched windows on the left, a spiral
              stair, lower bookcases and tall doors in the new front half, a coffered ceiling
     hall     6 × 13 m: two galleries (3 m and 5.5 m) under a barrel vault with ribs (10 m at the crown),
              a rose window in the back gable, an arched window over the doors, three chandeliers down
              the nave and a long reading table
   Everything here is one group, rebuilt when the room grows. Pieces that lift away in the dollhouse
   view (the ceiling, the right and front walls and what stands against them) are listed in `cut`. */
export function buildShell(K, tier) {
  const { THREE, M, mats, MOD, rng } = K;
  const G = new THREE.Group(); G.userData.shell = true; K.scene.add(G);
  const cut = [], plinth = [], lights = [], glows = [];
  const X = 3.0, ZB = -2.7;
  const DIM = { study: { zF: 2.7, H: 3.0 }, library: { zF: 6.3, H: 6.4 }, hall: { zF: 10.3, H: 7.0, vault: 3.0 } }[tier] || { zF: 2.7, H: 3.0 };
  const { zF, H } = DIM;
  const top = H + (DIM.vault || 0);
  const big = tier !== 'study';
  const mark = (m, isCut) => { if (isCut) { m.userData.cut = true; cut.push(m); } return m; };
  const box = (w, h, d, mat, x, y, z, isCut, opts) => mark(K.box(w, h, d, mat, x, y, z, G, opts), isCut);
  const mesh = (geo, mat, isCut, opts) => mark(K.mesh(geo, mat, G, opts), isCut);
  const midZ = (ZB + zF) / 2, len = zF - ZB;

  // ---------------------------------------------------------------- floor, plinth
  const floor = mesh(new THREE.PlaneGeometry(6, len).rotateX(-Math.PI / 2).translate(0, 0, midZ), mats.floor, false, { cast: false });
  K.worldUV(floor.geometry);
  for (const m of [K.box(6.3, 0.34, len + 0.3, M.beam, -0.05, -0.185, midZ, G), K.box(6.42, 0.06, len + 0.42, M.trim, -0.05, -0.385, midZ, G)]) { m.userData.plinth = true; m.visible = false; plinth.push(m); }
  // in the dollhouse, a soft shadow on the "table" under the plinth, so the room sits on something
  {
    const [c, x] = K.mkCanvas(256, 256);
    const g = x.createRadialGradient(128, 128, 30, 128, 128, 128);
    g.addColorStop(0, 'rgba(0,0,0,0.62)'); g.addColorStop(0.55, 'rgba(0,0,0,0.38)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    const mat = new THREE.MeshBasicMaterial({ map: K.canvasTex(c, { repeat: false }), transparent: true, depthWrite: false, toneMapped: false });
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(6.42 + 3.2, len + 0.42 + 3.2).rotateX(-Math.PI / 2), mat);
    sh.position.set(-0.05, -0.43, midZ); sh.renderOrder = -1;
    sh.userData.plinth = true; sh.userData.dyn = true; sh.visible = false; plinth.push(sh); G.add(sh);
  }

  // ---------------------------------------------------------------- walls
  // an arched opening (a window or a door): straight sides with a round top
  const arch = (P, cx, y0, w, h) => { P.moveTo(cx - w / 2, y0); P.lineTo(cx + w / 2, y0); P.lineTo(cx + w / 2, y0 + h - w / 2); P.absarc(cx, y0 + h - w / 2, w / 2, 0, Math.PI, false); P.lineTo(cx - w / 2, y0); return P; };
  const rect = (P, x0, y0, x1, y1) => { P.moveTo(x0, y0); P.lineTo(x1, y0); P.lineTo(x1, y1); P.lineTo(x0, y1); P.lineTo(x0, y0); return P; };
  const circle = (P, cx, cy, r) => { P.absarc(cx, cy, r, 0, Math.PI * 2, false); return P; };
  // a flat wall (a shape in its own u, v plane) given 0.1 m of thickness
  const wallGeo = (outline, holes) => {
    const s = outline; s.holes = holes || [];
    return new THREE.ExtrudeGeometry(s, { depth: 0.1, bevelEnabled: false, curveSegments: 40 });
  };
  const gable = (w) => {    // a wall's outline: straight up to H, then (in the hall) the vault's half circle
    const s = new THREE.Shape(); s.moveTo(-w, 0); s.lineTo(w, 0); s.lineTo(w, H);
    if (DIM.vault) s.absarc(0, H, w, 0, Math.PI, false); else s.lineTo(-w, H);
    s.lineTo(-w, 0); return s;
  };
  const WIN = K.WIN;   // the desk window (z −1.3…0.1, y 0.85…2.45)
  // windows high on the left wall, above the gallery (u is z along the wall)
  const UPWIN = tier === 'library' ? [{ z: -0.6, w: 1.1, y0: 3.55, h: 2.3 }, { z: 3.9, w: 1.1, y0: 3.55, h: 2.3 }]
    : tier === 'hall' ? [{ z: -0.6, w: 1.0, y0: 3.45, h: 1.75 }, { z: 3.4, w: 1.0, y0: 3.45, h: 1.75 }, { z: 7.4, w: 1.0, y0: 3.45, h: 1.75 }] : [];
  {
    // left wall: u runs along z
    const s = new THREE.Shape(); rect(s, ZB - 0.1, 0, zF + 0.1, H);
    const holes = [rect(new THREE.Path(), WIN.z0, WIN.y0, WIN.z1, WIN.y1), ...UPWIN.map((w) => arch(new THREE.Path(), w.z, w.y0, w.w, w.h))];
    const g = wallGeo(s, holes).rotateY(-Math.PI / 2).translate(-X, 0, 0);
    K.worldUV(g); mesh(g, mats.wall);
    // the vault's springing on the left (the wall's top edge) is covered by the cornice below
  }
  // back wall (with a round window in the library, a rose window in the hall's gable)
  const ROSE = tier === 'library' ? { x: 0, y: 4.75, r: 0.62 } : tier === 'hall' ? { x: 0, y: 8.25, r: 1.15 } : null;
  {
    const g = wallGeo(gable(X + 0.1), ROSE ? [circle(new THREE.Path(), ROSE.x, ROSE.y, ROSE.r)] : []).translate(0, 0, ZB - 0.1);
    K.worldUV(g); mesh(g, mats.wall);
  }
  // right wall and front wall: lift away in the dollhouse
  box(0.1, H + 0.1, len + 0.2, mats.wall, X + 0.05, (H + 0.1) / 2, midZ, true);
  const FRONTWIN = tier === 'hall' ? { y0: 7.15, w: 2.2, h: 2.55 } : null;
  {
    const g = wallGeo(gable(X + 0.1), FRONTWIN ? [arch(new THREE.Path(), 0, FRONTWIN.y0, FRONTWIN.w, FRONTWIN.h)] : []).translate(0, 0, zF);
    K.worldUV(g); mesh(g, mats.wall, true);
  }
  // wainscot panels and the chair rail (left, back, right)
  box(6, 0.9, 0.03, mats.panel, 0, 0.45, ZB + 0.015);
  box(0.03, 0.82, len, mats.panel, -X + 0.015, 0.41, midZ);
  box(0.03, 0.9, len, mats.panel, X - 0.015, 0.45, midZ, true);
  box(6, 0.045, 0.06, M.trim, 0, 0.92, ZB + 0.03);
  box(0.06, 0.045, len, M.trim, -X + 0.03, 0.84, midZ);
  box(0.06, 0.045, len, M.trim, X - 0.03, 0.92, midZ, true);
  if (big) { box(6, 0.82, 0.03, mats.panel, 0, 0.41, zF - 0.015, true); box(6, 0.045, 0.06, M.trim, 0, 0.84, zF - 0.03, true); }

  // the sky behind every window (the same picture as the desk window's, so day and night follow)
  const sky = (w, h, x, y, z, ry) => { const p = mesh(new THREE.PlaneGeometry(w, h).rotateY(ry), mats.sky, false, { cast: false, recv: false }); p.position.set(x, y, z); p.userData.sky = true; return p; };
  // window frames: a moulded arch around the opening, a mullion and a transom
  const archFrame = (cx, y0, w, h, place, isCut) => {
    const o = arch(new THREE.Shape(), 0, 0, w + 0.16, h + 0.08);
    o.holes = [arch(new THREE.Path(), 0, 0, w, h)];
    const g = new THREE.ExtrudeGeometry(o, { depth: 0.06, bevelEnabled: false, curveSegments: 32 });
    g.translate(0, y0, 0); place(g); mesh(g, M.trim, isCut, { cast: false });
    const bars = [new THREE.BoxGeometry(0.035, h - w / 2 + w * 0.48, 0.03).translate(0, y0 + (h - w / 2 + w * 0.48) / 2, 0.01), new THREE.BoxGeometry(w, 0.035, 0.03).translate(0, y0 + h - w / 2, 0.01)];
    for (const b of bars) { place(b); mesh(b, M.trim, isCut, { cast: false }); }
  };
  for (const w of UPWIN) {
    archFrame(0, w.y0, w.w, w.h, (g) => g.rotateY(Math.PI / 2).translate(-X + 0.02, 0, w.z));
    sky(w.w + 0.6, w.h + 0.5, -3.6, w.y0 + w.h / 2, w.z, Math.PI / 2);
  }
  if (ROSE) {
    // round window: a ring, and tracery spokes (eight in the library, twelve petals in the hall's rose)
    const ring = new THREE.Shape(); circle(ring, 0, 0, ROSE.r + 0.09); ring.holes = [circle(new THREE.Path(), 0, 0, ROSE.r)];
    const rg = new THREE.ExtrudeGeometry(ring, { depth: 0.07, bevelEnabled: false, curveSegments: 48 }).translate(ROSE.x, ROSE.y, ZB - 0.02);
    mesh(rg, M.trim, false, { cast: false });
    const n = tier === 'hall' ? 12 : 8;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI;
      const b = new THREE.BoxGeometry(ROSE.r * 2, 0.03, 0.03).rotateZ(a).translate(ROSE.x, ROSE.y, ZB + 0.01);
      mesh(b, M.trim, false, { cast: false });
    }
    const hub = new THREE.Shape(); circle(hub, 0, 0, ROSE.r * 0.42); hub.holes = [circle(new THREE.Path(), 0, 0, ROSE.r * 0.36)];
    mesh(new THREE.ExtrudeGeometry(hub, { depth: 0.05, bevelEnabled: false, curveSegments: 32 }).translate(ROSE.x, ROSE.y, ZB - 0.01), M.trim, false, { cast: false });
    const rs = mesh(new THREE.CircleGeometry(ROSE.r + 0.3, 40), mats.sky, false, { cast: false, recv: false }); rs.position.set(ROSE.x, ROSE.y, ZB - 0.45); rs.userData.sky = true;
  }
  if (FRONTWIN) {
    archFrame(0, FRONTWIN.y0, FRONTWIN.w, FRONTWIN.h, (g) => g.rotateY(Math.PI).translate(0, 0, zF - 0.02), true);
    mark(sky(FRONTWIN.w + 1, FRONTWIN.h + 1, 0, FRONTWIN.y0 + FRONTWIN.h / 2, zF + 0.7, Math.PI), true);
  }

  // ---------------------------------------------------------------- ceiling
  if (!big) {
    box(6.2, 0.1, len + 0.2, M.beam, 0, H + 0.05, midZ, true);
    for (const x of [-2.25, -0.75, 0.75, 2.25]) box(0.18, 0.22, len, M.beam, x, H - 0.11, midZ, true);
  } else if (tier === 'library') {
    // a coffered ceiling: panelled, with a grid of beams
    box(6.2, 0.1, len + 0.2, mats.wall, 0, H + 0.05, midZ, true);     // plaster between dark beams (a panelled ceiling read as a black hole from below)
    for (let z = ZB + 1.5; z < zF - 0.5; z += 1.5) box(6, 0.2, 0.16, M.beam, 0, H - 0.1, z, true);
    for (const x of [-1.5, 0, 1.5]) box(0.16, 0.2, len, M.beam, x, H - 0.1, midZ, true);
    box(6, 0.16, 0.2, M.trim, 0, H - 0.08, ZB + 0.1, true); box(6, 0.16, 0.2, M.trim, 0, H - 0.08, zF - 0.1, true);
    box(0.2, 0.16, len, M.trim, -X + 0.1, H - 0.08, midZ, true); box(0.2, 0.16, len, M.trim, X - 0.1, H - 0.08, midZ, true);
  } else {
    // the barrel vault: coffered plaster on a half cylinder, with ribs every two metres
    const R = DIM.vault;
    const vg = new THREE.CylinderGeometry(R, R, len, 48, 1, true, Math.PI / 2, Math.PI).rotateX(Math.PI / 2).translate(0, H, midZ);
    const vt = K.canvasTex(cofferTex(K), { repeat: true }); vt.repeat.set(10, Math.round(len / 1.1));
    const vmat = K.std({ map: vt, roughness: 0.85, side: THREE.DoubleSide });
    mesh(vg, vmat, true, { cast: false });
    for (let z = ZB + 0.15; z <= zF - 0.1; z += 2.0) {
      const pts = []; for (let i = 0; i <= 32; i++) { const a = Math.PI - (i / 32) * Math.PI; pts.push(new THREE.Vector3(Math.cos(a) * (R - 0.04), H + Math.sin(a) * (R - 0.04), z)); }
      mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 48, 0.07, 8, false), M.trim, true, { cast: false });
    }
    // the cornice along the vault's springing
    box(0.22, 0.14, len, M.trim, -X + 0.11, H - 0.02, midZ);
    box(0.22, 0.14, len, M.trim, X - 0.11, H - 0.02, midZ, true);
  }

  // ---------------------------------------------------------------- books on decorative shelves
  // thousands of spines, one draw call: an instanced box per book, a shared gold-banded cloth
  // texture tinted by each book's colour. (Shelves on the right and front walls lift away in the
  // dollhouse, so they're in their own batch.)
  const shelfBooks = { keep: [], cut: [] };
  const R1 = rng(tier === 'hall' ? 777 : 555);
  // a bookcase along a wall. axis 'x' (back/front walls) or 'z' (left/right walls); a0…a1 along the
  // wall; wall: the wall's coordinate; dir: +1/−1 into the room; y0…y1 its height
  function caseRun({ axis, a0, a1, wall, dir, y0, y1, depth = 0.34, isCut = false, rowH = 0.37 }) {
    const along = a1 - a0, mid = (a0 + a1) / 2, front = wall + dir * depth, cz = wall + dir * depth / 2;
    const put = (wA, h, wD, a, y, d) => axis === 'x' ? box(wA, h, wD, M.caseSide, a, y, d, isCut) : box(wD, h, wA, M.caseSide, d, y, a, isCut);
    const putM = (mat, wA, h, wD, a, y, d) => axis === 'x' ? box(wA, h, wD, mat, a, y, d, isCut) : box(wD, h, wA, mat, d, y, a, isCut);
    // the back, plinth and cornice
    // (the back stands a few centimetres off the wall, clear of the panelling and chair rail, so they
    // never show through behind the books)
    putM(M.recessWood || M.recess, along, y1 - y0, 0.02, mid, (y0 + y1) / 2, wall + dir * 0.085);
    putM(M.caseDark, along + 0.02, 0.1, depth + 0.02, mid, y0 + 0.05, cz);
    putM(M.trim, along + 0.06, 0.08, depth + 0.06, mid, y1 - 0.04, cz + dir * 0.02);
    // posts every metre or so
    const bays = Math.max(1, Math.round(along / 0.95));
    const bw = along / bays;
    for (let i = 0; i <= bays; i++) put(0.045, y1 - y0 - 0.08, depth, a0 + i * bw, y0 + (y1 - y0 - 0.08) / 2, cz);
    // planks
    const rows = Math.max(1, Math.floor((y1 - y0 - 0.18) / rowH));
    const rh = (y1 - y0 - 0.18) / rows;
    for (let r = 0; r <= rows; r++) {
      const y = y0 + 0.1 + r * rh;
      putM(M.caseShelf, along, 0.025, depth - 0.02, mid, y, cz);
      if (r === rows) break;
      // a row of books per bay, with the odd gap
      for (let i = 0; i < bays; i++) {
        let a = a0 + i * bw + 0.03;
        const end = a0 + (i + 1) * bw - 0.03;
        while (a < end - 0.02) {
          const t = 0.018 + R1() * 0.03, h = Math.min(rh - 0.04, 0.19 + R1() * 0.12);
          if (a + t > end) break;
          if (R1() < 0.04) { a += 0.05 + R1() * 0.1; continue; }
          const d = 0.15 + R1() * 0.06;
          (isCut ? shelfBooks.cut : shelfBooks.keep).push({ axis, a: a + t / 2, y: y + 0.0125 + h / 2, d: front - dir * (d / 2 + 0.02), t, h, dd: d, c: R1() });
          a += t + 0.002;
        }
      }
    }
  }

  // ---------------------------------------------------------------- galleries
  const GD = 0.85;
  const iron = M.iron, rail = M.trim;
  const balusters = { keep: [], cut: [] };
  function gallery(yT, y1Cases) {
    const T = 0.14, yb = yT - T / 2;
    // the walkway: left, back, right, front (right and front lift away)
    // (the back walkway runs the full width, corners included, so its bookcases stand on something
    // when the right side lifts away in the dollhouse)
    box(GD, T, len - GD, M.beam, -X + GD / 2, yb, midZ + GD / 2);
    box(6, T, GD, M.beam, 0, yb, ZB + GD / 2);
    box(GD, T, len - GD, M.beam, X - GD / 2, yb, midZ + GD / 2, true);
    box(6 - 2 * GD, T, GD, M.beam, 0, yb, zF - GD / 2, true);
    // a moulded fascia along the edge
    const f = 0.2, fy = yT - f / 2;
    box(0.05, f, len - 2 * GD, rail, -X + GD, fy, midZ);
    box(6 - 2 * GD, f, 0.05, rail, 0, fy, ZB + GD);
    box(0.05, f, len - 2 * GD, rail, X - GD, fy, midZ, true);
    box(6 - 2 * GD, f, 0.05, rail, 0, fy, zF - GD, true);
    // the railing: a handrail on iron balusters
    const RH = 0.95;
    const edge = (x0, z0, x1, z1, isCut) => {
      const L = Math.hypot(x1 - x0, z1 - z0), n = Math.max(2, Math.round(L / 0.15));
      for (let i = 0; i <= n; i++) (isCut ? balusters.cut : balusters.keep).push([x0 + (x1 - x0) * i / n, yT, z0 + (z1 - z0) * i / n]);
      const g = new THREE.BoxGeometry(Math.abs(x1 - x0) + 0.06, 0.05, Math.abs(z1 - z0) + 0.06).translate((x0 + x1) / 2, yT + RH, (z0 + z1) / 2);
      mesh(g, rail, isCut);
      const g2 = new THREE.BoxGeometry(Math.abs(x1 - x0) + 0.02, 0.025, Math.abs(z1 - z0) + 0.02).translate((x0 + x1) / 2, yT + 0.08, (z0 + z1) / 2);
      mesh(g2, iron, isCut, { cast: false });
    };
    const xl = -X + GD, xr = X - GD, zb = ZB + GD, zf = zF - GD;
    // (on the lower gallery the railing stops where the spiral stair comes up, in the front-left corner)
    if (yT < 3.5) edge(xl, zb, xl, zF - 1.75, false); else edge(xl, zb, xl, zf, false);
    edge(xl, zb, xr, zb, false); edge(xr, zb, xr, zf, true); edge(xl, zf, xr, zf, true);
    // bookcases along the walls up here
    const leftRuns = [];
    let z0 = ZB + 0.36;
    for (const w of UPWIN.filter((u) => u.y0 < y1Cases)) { leftRuns.push([z0, w.z - w.w / 2 - 0.22]); z0 = w.z + w.w / 2 + 0.22; }
    leftRuns.push([z0, zF - 0.36]);
    for (const [a0, a1] of leftRuns) if (a1 - a0 > 0.5) caseRun({ axis: 'z', a0, a1, wall: -X, dir: 1, y0: yT, y1: y1Cases });
    caseRun({ axis: 'z', a0: ZB + 0.36, a1: zF - 0.36, wall: X, dir: -1, y0: yT, y1: y1Cases, isCut: true });
    if (ROSE && ROSE.y - ROSE.r - 0.2 < y1Cases) {
      caseRun({ axis: 'x', a0: -X, a1: ROSE.x - ROSE.r - 0.3, wall: ZB, dir: 1, y0: yT, y1: y1Cases });
      caseRun({ axis: 'x', a0: ROSE.x + ROSE.r + 0.3, a1: X, wall: ZB, dir: 1, y0: yT, y1: y1Cases });
    } else caseRun({ axis: 'x', a0: -X, a1: X, wall: ZB, dir: 1, y0: yT, y1: y1Cases });
    caseRun({ axis: 'x', a0: -X, a1: X, wall: zF, dir: -1, y0: yT, y1: y1Cases, isCut: true });
  }
  if (tier === 'library') gallery(3.12, H - 0.15);
  if (tier === 'hall') { gallery(3.12, 5.45); gallery(5.62, H - 0.05); }

  // ---------------------------------------------------------------- the new front of the room
  if (big) {
    // lower bookcases along both side walls, past the fireplace
    caseRun({ axis: 'z', a0: 2.95, a1: zF - 0.1, wall: -X, dir: 1, y0: 0, y1: 2.9 });
    caseRun({ axis: 'z', a0: 2.95, a1: zF - 0.1, wall: X, dir: -1, y0: 0, y1: 2.9, isCut: true });
    // the doors, with bookcases either side
    caseRun({ axis: 'x', a0: -X + 0.36, a1: -1.0, wall: zF, dir: -1, y0: 0, y1: 2.9, isCut: true });
    caseRun({ axis: 'x', a0: 1.0, a1: X - 0.36, wall: zF, dir: -1, y0: 0, y1: 2.9, isCut: true });
    const DW = 1.6, DH = tier === 'hall' ? 2.75 : 2.55;
    const door = arch(new THREE.Shape(), 0, 0, DW + 0.22, DH + 0.11); door.holes = [arch(new THREE.Path(), 0, 0, DW, DH)];
    mesh(new THREE.ExtrudeGeometry(door, { depth: 0.08, bevelEnabled: false, curveSegments: 24 }).rotateY(Math.PI).translate(0, 0, zF - 0.01), M.trim, true);
    const leaf = arch(new THREE.Shape(), 0, 0, DW, DH);
    mesh(new THREE.ExtrudeGeometry(leaf, { depth: 0.04, bevelEnabled: false, curveSegments: 24 }).rotateY(Math.PI).translate(0, 0, zF - 0.005), M.caseDark, true);
    for (const sx of [-1, 1]) {
      // raised panels and a brass ring pull on each leaf
      for (const [py, ph] of [[0.25, 0.9], [1.3, 0.85]]) box(DW / 2 - 0.2, ph, 0.03, M.caseSide, sx * DW / 4, py + ph / 2, zF - 0.05, true);
      const ring = mesh(new THREE.TorusGeometry(0.045, 0.008, 8, 24), M.brass, true, { cast: false }); ring.position.set(sx * 0.12, 1.15, zF - 0.06);
    }
    box(0.02, DH - DW / 2, 0.035, M.trim, 0, (DH - DW / 2) / 2, zF - 0.05, true);

    // a rolling ladder on a brass rail along the left lower bookcase
    {
      const zL = 3.55, rx = -X + 0.42;
      const rg = new THREE.CylinderGeometry(0.012, 0.012, zF - 3.0, 10).rotateX(Math.PI / 2).translate(rx, 2.62, (zF + 3.0) / 2);
      mesh(rg, M.brass, false, { cast: false });
      // (leaning back against the rail: its top hooks over the rail, its feet out on the floor)
      const L = new THREE.Group(); G.add(L); L.position.set(rx + 0.03 + 2.72 * Math.sin(0.24), 0, zL); L.rotation.z = 0.24;
      for (const sz of [-1, 1]) { const s = K.box(0.04, 2.72, 0.05, M.caseSide, 0.0, 1.36, sz * 0.22, L); s.castShadow = true; }
      for (let y = 0.28; y < 2.6; y += 0.29) { const r = K.box(0.05, 0.03, 0.44, M.caseShelf, 0.0, y, 0, L); r.castShadow = true; }
      for (const sz of [-1, 1]) { const w = K.mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 14).rotateZ(Math.PI / 2), M.brass, L); w.position.set(0, 0.03, sz * 0.22); }
      L.updateMatrixWorld(true);
    }

    // a spiral stair up to the gallery, in the front-left corner
    {
      const cx = -X + 1.16, cz = zF - 1.15, r = 0.78, n = 18, rise = 3.12 / n;
      K.mesh(new THREE.CylinderGeometry(0.06, 0.07, 3.12, 14).translate(cx, 3.12 / 2, cz), M.iron, G);
      K.mesh(new THREE.SphereGeometry(0.07, 14, 10).translate(cx, 3.16, cz), M.brass, G);
      const pts = [];
      for (let i = 0; i < n; i++) {
        const a = -Math.PI * 0.5 + i * (Math.PI * 1.75 / n);
        const s = new THREE.Shape(); s.moveTo(0, 0); s.absarc(0, 0, r, 0, Math.PI * 1.75 / n + 0.02, false); s.lineTo(0, 0);
        const g = new THREE.ExtrudeGeometry(s, { depth: 0.045, bevelEnabled: false, curveSegments: 6 }).rotateX(-Math.PI / 2).rotateY(a).translate(cx, (i + 1) * rise, cz);
        mesh(g, M.caseShelf);
        const ea = a + Math.PI * 1.75 / n / 2;
        pts.push(new THREE.Vector3(cx + Math.cos(ea) * (r - 0.03), (i + 1) * rise + 0.9, cz - Math.sin(ea) * (r - 0.03)));
        const post = new THREE.CylinderGeometry(0.008, 0.008, 0.9, 6).translate(cx + Math.cos(ea) * (r - 0.03), (i + 1) * rise + 0.45, cz - Math.sin(ea) * (r - 0.03));
        mesh(post, M.iron, false, { cast: false });
      }
      mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 80, 0.02, 8, false), M.brass, false, { cast: false });
    }
  }

  // a long reading table down the hall's nave, with green banker's lamps
  if (tier === 'hall') {
    const tz0 = 6.2, tz1 = 8.8, tw = 1.0;
    box(tw, 0.06, tz1 - tz0, M.caseShelf, 0, 0.76, (tz0 + tz1) / 2);
    box(tw - 0.12, 0.08, tz1 - tz0 - 0.12, M.caseDark, 0, 0.69, (tz0 + tz1) / 2);
    for (const [sx, z] of [[-1, tz0 + 0.12], [1, tz0 + 0.12], [-1, tz1 - 0.12], [1, tz1 - 0.12], [-1, (tz0 + tz1) / 2], [1, (tz0 + tz1) / 2]]) box(0.08, 0.68, 0.08, M.caseDark, sx * (tw / 2 - 0.08), 0.34, z);
    const shade = K.std({ color: '#1f5a3a', roughness: 0.25, metalness: 0.1, emissive: '#66d28f', emissiveIntensity: 0 });
    shade.userData.lampShade = true;
    for (const z of [6.75, 8.25]) {
      for (const sx of [-1, 1]) {
        const lx = sx * 0.22;
        K.mesh(new THREE.CylinderGeometry(0.06, 0.075, 0.025, 20).translate(lx, 0.802, z), M.brass, G);
        K.mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.3, 8).translate(lx, 0.94, z), M.brass, G);
        const sh = K.mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.2, 24, 1, true, 0, Math.PI).rotateZ(Math.PI / 2).rotateY(Math.PI / 2).translate(lx, 1.08, z), shade, G);
        sh.material.side = THREE.DoubleSide;
      }
      // a few books lying open between the lamps
      box(0.32, 0.03, 0.23, M.paper, 0, 0.805, z + 0.02);
    }
    glows.push({ mat: shade, k: 1.8 });
    // chairs along the table
    if (MOD.deskchair) for (const [x, z, ry] of [[-0.75, 6.9, Math.PI / 2], [0.75, 7.6, -Math.PI / 2], [-0.75, 8.2, Math.PI / 2]]) {
      const c = MOD.deskchair.clone(true); c.position.set(x, 0, z); c.rotation.y = ry; c.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); G.add(c);
    }
  }

  // ---------------------------------------------------------------- chandeliers
  // the study's chandelier hangs from a long chain in a taller room; more of them down a longer one
  const chain = (x, z, y0) => { const g = new THREE.CylinderGeometry(0.011, 0.011, top - y0, 6).translate(x, (top + y0) / 2, z); mesh(g, M.brass, true, { cast: false }); };
  if (big) chain(0, 0.05, 2.97);
  const hangs = tier === 'library' ? [[0, 4.6, 4.3]] : tier === 'hall' ? [[0, 3.6, 4.6], [0, 6.2, 4.6], [0, 8.8, 4.6]] : [];
  const glowTex = K.glowTex;
  for (const [x, z, y] of hangs) {
    if (MOD.chandelier) {
      const c = MOD.chandelier.clone(true); c.position.set(x, y, z); c.scale.setScalar(1.05); G.add(c);
      c.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
    }
    chain(x, z, y + 0.908 * 1.05);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffcf8a', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    sp.scale.set(1.4, 1.4, 1); sp.position.set(x, y + 0.35, z); G.add(sp); sp.userData.dyn = true; glows.push({ sprite: sp });
  }
  // light for the new parts of the room: one lamp per two chandeliers (each light costs every
  // pixel a little), and a soft fill high up so the galleries aren't lost in the dark by day
  if (big) {
    const at = tier === 'library' ? [[0, 4.6, 4.6]] : [[0, 4.6, 5.0], [0, 8.6, 5.0]];
    for (const [x, z, y] of at) { const l = new THREE.PointLight('#ffc27a', 0, tier === 'hall' ? 9 : 8, 1.6); l.position.set(x, y, z); G.add(l); lights.push({ l, kind: 'chand' }); }
    const hi = new THREE.PointLight('#ffe2bd', 0, tier === 'hall' ? 16 : 11, 1.2); hi.position.set(0.4, H - 0.6, midZ); G.add(hi); lights.push({ l: hi, kind: 'high' });
  }

  // ---------------------------------------------------------------- the books on all those shelves
  const PAL = ['#6b1f1f', '#2f4a33', '#1f3350', '#5b2f4a', '#7a5232', '#2b3a2f', '#8a6a2a', '#3a2614', '#4a1f2a', '#24413f', '#5a4a2a', '#2c2c3a', '#7b3b22', '#4b5a3a', '#1c2a3a'];
  const bookTex = K.canvasTex(spineTex(K), { repeat: false });
  const bookMat = K.std({ map: bookTex, roughness: 0.78 });
  const bookGeo = new THREE.BoxGeometry(1, 1, 1);
  // spines face the room: map the texture onto the face that looks out (±x for side walls, ±z for back/front)
  const instanced = (list, isCut) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(bookGeo, bookMat, list.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
    const qz = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    list.forEach((b, i) => {
      if (b.axis === 'x') { p.set(b.a, b.y, b.d); q.identity(); s.set(b.t, b.h, b.dd); }
      else { p.set(b.d, b.y, b.a); q.copy(qz); s.set(b.t, b.h, b.dd); }
      m4.compose(p, q, s); im.setMatrixAt(i, m4);
      col.set(PAL[Math.floor(b.c * PAL.length) % PAL.length]).multiplyScalar(0.85 + (b.c * 7 % 1) * 0.35);
      im.setColorAt(i, col);
    });
    im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.castShadow = false; im.receiveShadow = true;
    im.userData.shellBooks = true;
    G.add(im); mark(im, isCut);
  };
  instanced(shelfBooks.keep, false); instanced(shelfBooks.cut, true);
  const baluster = new THREE.LatheGeometry([[0.0, 0], [0.018, 0], [0.018, 0.04], [0.01, 0.06], [0.009, 0.4], [0.02, 0.5], [0.009, 0.6], [0.009, 0.9], [0.015, 0.92], [0.0, 0.95]].map(([r, y]) => new THREE.Vector2(r, y)), 8);
  const instB = (list, isCut) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(baluster, iron, list.length);
    const m4 = new THREE.Matrix4();
    list.forEach(([x, y, z], i) => { m4.makeTranslation(x, y, z); im.setMatrixAt(i, m4); });
    im.castShadow = false; im.receiveShadow = false; G.add(im); mark(im, isCut);
  };
  instB(balusters.keep, false); instB(balusters.cut, true);

  // ---------------------------------------------------------------- fused, then handed back
  K.mergeGroup(G, cut);
  return {
    group: G, cut, plinth, tier,
    dims: { x: X, zB: ZB, zF, H, top },
    setLight(L, night) {
      for (const { l, kind } of lights) l.intensity = kind === 'chand' ? L.chand * 1.25 : (night ? 0.5 : 3.2) * (tier === 'hall' ? 1.5 : 1);
      for (const g of glows) {
        if (g.sprite) g.sprite.visible = L.chand > 0;
        if (g.mat) g.mat.emissiveIntensity = night ? g.k : 0.25;
      }
    },
    dispose() {
      K.scene.remove(G);
      G.traverse((o) => { if (o.isMesh || o.isInstancedMesh) { o.geometry.dispose(); } if (o.isLight && o.dispose) o.dispose(); });
      bookTex.dispose(); bookMat.dispose();
    },
  };
}

// cloth spines with gold bands at the head and foot (tinted per book)
function spineTex(K) {
  const [c, x] = K.mkCanvas(64, 256);
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, 64, 256);
  const r = K.rng(3);
  for (let i = 0; i < 900; i++) { x.fillStyle = `rgba(0,0,0,${0.03 + r() * 0.05})`; x.fillRect(r() * 64, r() * 256, 1 + r() * 2, 1); }
  const sh = x.createLinearGradient(0, 0, 64, 0);
  sh.addColorStop(0, 'rgba(0,0,0,.35)'); sh.addColorStop(0.25, 'rgba(255,255,255,.1)'); sh.addColorStop(0.6, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,.4)');
  x.fillStyle = sh; x.fillRect(0, 0, 64, 256);
  x.fillStyle = '#e9c97a';
  x.fillRect(0, 22, 64, 5); x.fillRect(0, 32, 64, 2); x.fillRect(0, 222, 64, 2); x.fillRect(0, 229, 64, 5);
  x.fillRect(22, 90, 20, 70);
  return c;
}
// the vault: deep square coffers with a gilt rosette in each
function cofferTex(K) {
  const [c, x] = K.mkCanvas(128, 128);
  x.fillStyle = '#d9c3a0'; x.fillRect(0, 0, 128, 128);
  x.fillStyle = '#b89b74'; x.fillRect(14, 14, 100, 100);
  x.fillStyle = '#9a7d58'; x.fillRect(24, 24, 80, 80);
  x.fillStyle = '#7c6143'; x.fillRect(30, 30, 68, 68);
  const g = x.createLinearGradient(14, 14, 114, 114); g.addColorStop(0, 'rgba(255,255,255,.18)'); g.addColorStop(1, 'rgba(0,0,0,.25)');
  x.fillStyle = g; x.fillRect(14, 14, 100, 100);
  x.fillStyle = '#d8b25e'; x.beginPath(); x.arc(64, 64, 11, 0, Math.PI * 2); x.fill();
  x.fillStyle = '#a8843c'; for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; x.beginPath(); x.arc(64 + Math.cos(a) * 12, 64 + Math.sin(a) * 12, 4, 0, Math.PI * 2); x.fill(); }
  return c;
}
