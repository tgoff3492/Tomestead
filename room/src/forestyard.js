/* Tomestead · the dollhouse in the pine forest: what the room stands on when you see it from outside.
   A stone foundation, a plain wooden porch deck across the open front with three steps down, and a
   gravel path with stone edging that leaves the steps head-on and bends away through the ferns. It's
   sized from the shell, so it fits the study, the Library and the Great Hall. Around it, a pine wood
   built in 3D (trunks, forest floor, ferns) so it's all seen from the same angle as the house; the
   distance fades into haze (scene fog, set in main.js). */
export function buildForestYard(K, dims, tier, ground) {
  const { THREE, std, mkCanvas, canvasTex, rng, mergeGeometries } = K;
  const G = new THREE.Group(); G.userData.dyn = true; K.scene.add(G);
  const r = rng(7);
  const Y0 = -0.42;
  const zB = dims.zB, zF = dims.zF, len = zF - zB, midZ = (zB + zF) / 2;
  const geos = [], mats = [], texs = [];
  const own = (o) => { if (o.isTexture) texs.push(o); else if (o.isMaterial) mats.push(o); else geos.push(o); return o; };
  const m = (geo, mat, x, y, z, ry = 0) => { const o = new THREE.Mesh(own(geo), mat); o.position.set(x, y, z); o.rotation.y = ry; G.add(o); return o; };
  const tex = (w, h, draw, rep) => { const [c, x] = mkCanvas(w, h); draw(x, w, h); const t = own(canvasTex(c, { repeat: !!rep })); if (rep) t.repeat.set(rep[0], rep[1]); return t; };

  // the foundation: rounded field stones in warm grays, set in mortar
  const stoneT = tex(512, 256, (x, w, h) => {
    x.fillStyle = '#6f675c'; x.fillRect(0, 0, w, h);
    for (let row = 0, y = 0; y < h; row++) {
      const sh = 34 + r() * 18;
      for (let px = (row % 2) * -30; px < w;) { const sw = 50 + r() * 60; x.fillStyle = `hsl(${28 + r() * 16},${8 + r() * 10}%,${52 + r() * 16}%)`; x.beginPath(); x.roundRect(px + 3, y + 3, sw - 6, sh - 6, 10); x.fill(); px += sw; }
      y += sh;
    }
  }, [3 * (len + 0.55) / 5.95, 1]);
  const stone = own(std({ map: stoneT, roughness: 0.95 }));
  m(new THREE.BoxGeometry(6.55, 0.4, len + 0.55), stone, -0.05, Y0 + 0.2, midZ).castShadow = true;

  // the porch: weathered boards across the open front, a timber skirt under it, three steps down
  const plankT = tex(512, 256, (x, w) => {
    for (let i = 0; i < 8; i++) { x.fillStyle = `hsl(30,${26 + r() * 10}%,${38 + r() * 9}%)`; x.fillRect(0, i * 32, w, 31); x.fillStyle = 'rgba(30,15,5,.5)'; x.fillRect(0, i * 32 + 30, w, 2); for (let k = 0; k < 6; k++) { x.fillStyle = 'rgba(40,20,8,.12)'; x.fillRect(r() * w, i * 32 + 6 + r() * 18, 40 + r() * 80, 2); } }
  }, [2, 1]);
  const boards = own(std({ map: plankT, roughness: 0.85 }));
  const timber = own(std({ color: '#4e3424', roughness: 0.8 }));
  const PZ0 = zF + 0.28, PZ1 = zF + 1.35, PX0 = -3.12, PX1 = 3.02, stepX = tier === 'study' ? 0.4 : 1.7;
  m(new THREE.BoxGeometry(PX1 - PX0, 0.1, PZ1 - PZ0), boards, (PX0 + PX1) / 2, -0.05, (PZ0 + PZ1) / 2).castShadow = true;
  m(new THREE.BoxGeometry(PX1 - PX0 - 0.16, 0.34, PZ1 - PZ0 - 0.12), timber, (PX0 + PX1) / 2, Y0 + 0.17, (PZ0 + PZ1) / 2);
  for (let i = 0; i < 3; i++) m(new THREE.BoxGeometry(1.4, 0.12, 0.34), boards, stepX, -0.16 - i * 0.12, PZ1 + 0.17 + i * 0.32);

  // the path: straight off the bottom step, then a gentle bend away toward the viewer. The bigger rooms
  // sit lower in their view with the porch near the corner of the screen, so there the path turns sooner
  // and walks off across the ferns toward the bottom of the screen
  const s = tier === 'study' ? 1 : 1.25;
  const z0 = PZ1 + 0.95;
  const bend = tier === 'study'
    ? [[0, 0], [0.04, 0.7], [0.5, 1.5], [1.6, 2.2], [3.2, 2.9], [5.0, 3.8], [6.5, 5.0], [7.8, 6.6]]
    : [[0, 0], [0.04, 0.5], [0.6, 1.1], [1.8, 1.6], [3.6, 2.1], [5.6, 2.8], [7.6, 3.8], [9.4, 5.2]];
  const pts = bend.map(([dx, dz]) => new THREE.Vector3(stepX + dx, Y0 + 0.012, z0 + dz));
  const curve = new THREE.CatmullRomCurve3(pts);
  const N = 140, half = 0.6;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, p = curve.getPointAt(t), tg = curve.getTangentAt(t), side = new THREE.Vector3(-tg.z, 0, tg.x).normalize();
    for (const k of [-1, 1]) { const q = p.clone().addScaledVector(side, k * half); pos.push(q.x, q.y, q.z); uv.push((k + 1) / 2, t * 12 * s); }
    if (i) { const a = (i - 1) * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  const gravelT = tex(256, 256, (x, w, h) => {
    x.fillStyle = '#9c8c72'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { const l = 38 + r() * 30; x.fillStyle = `hsl(${30 + r() * 15},${8 + r() * 12}%,${l}%)`; x.beginPath(); x.arc(r() * w, r() * h, 0.8 + r() * 2.2, 0, 7); x.fill(); }
  }, [1, 1]);
  gravelT.wrapS = gravelT.wrapT = THREE.RepeatWrapping;
  m(g, own(std({ map: gravelT, roughness: 1, side: THREE.DoubleSide })), 0, 0, 0);
  // edging: a row of small rounded stones down each side, fused into one mesh
  const parts = [], o3 = new THREE.Object3D();
  const NS = Math.round(64 * s);
  for (let i = 0; i <= NS; i++) {
    const t = i / NS, p = curve.getPointAt(t), tg = curve.getTangentAt(t), side = new THREE.Vector3(-tg.z, 0, tg.x).normalize();
    for (const k of [-1, 1]) {
      const q = p.clone().addScaledVector(side, k * (half + 0.08));
      o3.position.set(q.x, Y0 + 0.04, q.z); o3.rotation.set(0, r() * 3, 0); o3.scale.set(1.2, 0.55, 0.9); o3.updateMatrix();
      parts.push(new THREE.DodecahedronGeometry(0.13 + r() * 0.05, 1).applyMatrix4(o3.matrix));
    }
  }
  const edging = mergeGeometries(parts); parts.forEach((p) => p.dispose());
  m(edging, own(std({ map: stoneT, roughness: 0.95 })), 0, 0, 0);

  // the forest floor: earth, needles and low clover at the house's own scale, with soft patches of moss
  // and shade and flecks of sunlight through the pines; it runs out into the woods and the haze takes it
  const patchT = tex(512, 512, (x, w, h) => {
    x.fillStyle = '#c4bca8'; x.fillRect(0, 0, w, h);
    const blob = (cx, cy, rad, col) => { for (const ox of [-w, 0, w]) for (const oy of [-h, 0, h]) { const g = x.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, rad); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(cx + ox - rad, cy + oy - rad, rad * 2, rad * 2); } };
    for (let i = 0; i < 44; i++) blob(r() * w, r() * h, 40 + r() * 100, `rgba(${70 + r() * 30},${120 + r() * 40},${45 + r() * 20},.6)`);   // moss
    for (let i = 0; i < 18; i++) blob(r() * w, r() * h, 30 + r() * 70, 'rgba(40,30,22,.4)');                                       // shade
    for (let i = 0; i < 12; i++) blob(r() * w, r() * h, 20 + r() * 50, 'rgba(200,170,130,.35)');                                  // bare earth
    for (let i = 0; i < 30; i++) blob(r() * w, r() * h, 8 + r() * 26, 'rgba(255,236,190,.55)');                                   // sun flecks
  }, [1, 1]);
  patchT.wrapS = patchT.wrapT = THREE.RepeatWrapping;
  const floorMat = own(std({ color: '#ffffff', roughness: 1 }));
  floorMat.userData.u = { uPatch: { value: patchT } };
  floorMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, floorMat.userData.u);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vFloorW;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvFloorW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vFloorW; uniform sampler2D uPatch;')
      .replace('#include <alphatest_fragment>', '#include <alphatest_fragment>\n        diffuseColor.rgb *= texture2D(uPatch, vFloorW.xz / 14.0).rgb * 1.25;');
  };
  floorMat.customProgramCacheKey = () => 'tomestead-floor';
  const floor = new THREE.Mesh(own(new THREE.PlaneGeometry(240, 240).rotateX(-Math.PI / 2)), floorMat);
  floor.position.set(0, Y0 - 0.015, midZ); G.add(floor);
  // a soft contact shadow where the foundation and porch meet the ground
  {
    const [c, x] = mkCanvas(256, 256);
    x.filter = 'blur(14px)'; x.fillStyle = 'rgba(0,0,0,0.85)'; x.fillRect(34, 34, 188, 188);
    const t = own(canvasTex(c, { repeat: false }));
    const W = 6.55 + 1.6, D = (PZ1 + 0.95) - (zB - 0.28) + 1.6;
    const cs = new THREE.Mesh(own(new THREE.PlaneGeometry(W, D).rotateX(-Math.PI / 2)), own(new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0.55, depthWrite: false })));
    cs.position.set(-0.05, Y0 - 0.005, ((PZ1 + 0.95) + (zB - 0.28)) / 2); cs.renderOrder = 1; G.add(cs);
  }
  const setGround = (g) => {
    if (!g || !g.diff) return;
    for (const [k, t] of [['map', g.diff], ['normalMap', g.nor]]) { if (!t) continue; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(240 / 2.6, 240 / 2.6); floorMat[k] = t; }
    floorMat.normalScale.set(0.8, 0.8); floorMat.needsUpdate = true;
    for (const [k, t] of [['map', g.bark], ['normalMap', g.barkNor]]) { if (!t) continue; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, 9); barkMat[k] = t; }
    if (g.bark) { barkMat.color.set('#ffffff'); barkMat.needsUpdate = true; }
  };

  // the pines: tall straight trunks all around and behind the house, rising out of the top of the view;
  // none stand between you and the room, and a few close ones frame the edges
  const barkMat = own(std({ color: '#4a3a2e', roughness: 0.95 }));
  const trees = [];
  {
    const cx = -0.05, cz = midZ, hx = 3.5, hz = (PZ1 + 1.2 - zB) / 2 + 0.3, ccz = (PZ1 + 1.2 + zB) / 2;
    const views = [-0.55, 0, 0.55].map((y) => new THREE.Vector2(0.67, 0.74).rotateAround(new THREE.Vector2(), -y));
    const blocks = (x, z) => views.some((c) => {
      const rel = new THREE.Vector2(x - cx, z - ccz), ahead = rel.dot(c), lat = Math.abs(rel.x * -c.y + rel.y * c.x);
      return ahead > -1.5 && lat < Math.max(hx, hz) + 1.0;
    });
    let tries = 0;
    while (trees.length < 260 && tries++ < 9000) {
      const a = r() * Math.PI * 2, d = 4 + Math.pow(r(), 0.85) * 48;
      const x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
      if (Math.abs(x - cx) < hx + 1.2 && Math.abs(z - ccz) < hz + 1.2) continue;
      if (blocks(x, z)) continue;
      if (trees.some((t) => Math.hypot(t[0] - x, t[1] - z) < 1.7)) continue;
      trees.push([x, z, 0.28 + r() * 0.36]);
    }
    const tg = own(new THREE.CylinderGeometry(0.55, 1, 1, 12, 1, true).translate(0, 0.5, 0));
    const tm = new THREE.InstancedMesh(tg, barkMat, trees.length);
    const tint = new THREE.Color();
    trees.forEach(([x, z, rad], i) => { o3.position.set(x, Y0 - 0.2, z); o3.rotation.set((r() - 0.5) * 0.05, r() * 6.3, (r() - 0.5) * 0.05); o3.scale.set(rad, 34 + r() * 8, rad); o3.updateMatrix(); tm.setMatrixAt(i, o3.matrix); tm.setColorAt(i, tint.setHSL(0.07, 0.15 + r() * 0.15, 0.55 + r() * 0.3)); });
    G.add(tm);
    // a flared root collar at each trunk's foot, so they stand in the ground rather than on it
    const rg = own(new THREE.CylinderGeometry(1, 1.3, 0.3, 12, 1, true).translate(0, 0.15, 0));
    const rm = new THREE.InstancedMesh(rg, own(std({ color: '#3b2c22', roughness: 1 })), trees.length);
    trees.forEach(([x, z, rad], i) => { o3.position.set(x, Y0 - 0.25, z); o3.rotation.set(0, r() * 6.3, 0); o3.scale.set(rad, 1, rad); o3.updateMatrix(); rm.setMatrixAt(i, o3.matrix); });
    G.add(rm);
  }
  setGround(ground);

  // ferns, knee high to the house, in loose drifts across the ground in front and to the sides (not on
  // the path, the porch or the foundation, and not out where the ground fades into the woods)
  {
    const frond = [], col = [];
    const F = 9, tri = (a, b, c, ca, cb, cc) => { frond.push(...a, ...b, ...c); col.push(ca, ca, ca, cb, cb, cb, cc, cc, cc); };
    for (let k = 0; k < F; k++) {
      const a = (k / F) * Math.PI * 2 + r() * 0.5, lean = 0.7 + r() * 0.4, L = 0.8 + r() * 0.35;
      const ca = Math.cos(a), sa = Math.sin(a), sx = -sa, sz = ca, seg = 12;
      const P = (t) => [ca * L * t * lean, Math.sin(t * Math.PI * 0.85) * 0.5 * (1.15 - lean * 0.45), sa * L * t * lean];
      for (let i = 1; i <= seg; i++) {
        const t = i / seg, p = P(t), q = P(Math.max(0, t - 0.7 / seg)), c = 0.45 + t * 0.55;
        const pl = 0.17 * Math.sin(Math.min(1, t * 1.1) * Math.PI) * (1 - 0.25 * t) + 0.02;
        // a leaflet each side of the stem, swept forward and drooping a little
        for (const sd of [1, -1]) {
          const tip = [p[0] + sx * pl * sd + ca * 0.05, p[1] - 0.05 * pl / 0.17, p[2] + sz * pl * sd + sa * 0.05];
          tri(q, p, tip, c * 0.8, c * 0.85, c);
        }
      }
    }
    const fg = own(new THREE.BufferGeometry()); fg.setAttribute('position', new THREE.Float32BufferAttribute(frond, 3)); fg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); fg.computeVertexNormals();
    const fernMat = own(std({ color: '#ffffff', vertexColors: true, roughness: 0.8, side: THREE.DoubleSide }));
    const greens = ['#4a6a2c', '#56762f', '#3f5c27', '#628236', '#4c6630'].map((c) => new THREE.Color(c));
    const fw = new THREE.Vector2(-0.67, -0.74), fwL = fw.clone().rotateAround(new THREE.Vector2(), 0.5), fwR = fw.clone().rotateAround(new THREE.Vector2(), -0.5);
    const backOf = (f) => 3.4 * Math.abs(f.x) + (len / 2 + 0.5) * Math.abs(f.y);
    const near = (x, z) => { let d = 99; for (let i = 0; i <= 60; i++) { const p = curve.getPointAt(i / 60); d = Math.min(d, Math.hypot(p.x - x, p.z - z)); } return d; };
    const spots = [];
    const centers = []; for (let i = 0; i < 200; i++) { const a = r() * 6.3, d = 4 + r() * 30; centers.push([Math.cos(a) * d, midZ + Math.sin(a) * d]); }
    for (const [cx, cz] of centers) {
      const n = 4 + Math.floor(r() * 9);
      for (let i = 0; i < n; i++) {
        const x = cx + (r() - 0.5) * 2.4, z = cz + (r() - 0.5) * 2.4;
        if (x > -3.9 && x < 3.8 && z > zB - 0.8 && z < PZ1 + 0.6) continue;                 // foundation and porch
        if (near(x, z) < 1.25) continue;                                                     // the path
        if (Math.abs(x - stepX) < 1.3 && z > PZ1 - 0.2 && z < PZ1 + 2) continue;             // the steps
        if (trees.some((t) => Math.hypot(t[0] - x, t[1] - z) < t[2] * 1.6 + 0.3)) continue;   // the trunks
        spots.push([x, z, 0.3 + r() * 0.35]);
      }
    }
    const ferns = new THREE.InstancedMesh(fg, fernMat, spots.length);
    spots.forEach(([x, z, sc], i) => { o3.position.set(x, Y0 - 0.01, z); o3.rotation.set((r() - 0.5) * 0.15, r() * 6.3, (r() - 0.5) * 0.15); o3.scale.set(sc, sc * (0.8 + r() * 0.4), sc); o3.updateMatrix(); ferns.setMatrixAt(i, o3.matrix); ferns.setColorAt(i, greens[Math.floor(r() * greens.length)]); });
    G.add(ferns);
  }

  // after dark, the lit room throws a warm pool of light onto the porch and the ground in front
  const pool = new THREE.Mesh(own(new THREE.PlaneGeometry(10, 6).rotateX(-Math.PI / 2)),
    own(new THREE.MeshBasicMaterial({ map: K.glowTex, color: '#ffa860', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })));
  pool.position.set(0, Y0 + 0.02, zF + 2.4); pool.renderOrder = 2; G.add(pool);

  G.traverse((o) => { if (o.isMesh) { o.updateMatrix(); o.matrixAutoUpdate = false; } });
  return {
    group: G,
    setGround,
    setLook(mode) { floorMat.color.set(mode === 'night' ? '#c8d0e0' : '#ecdcbc'); barkMat.emissive.set(mode === 'night' ? '#000000' : '#120a05'); pool.material.opacity = mode === 'night' ? 0.55 : 0; pool.visible = mode === 'night'; },
    dispose() { K.scene.remove(G); geos.forEach((x) => x.dispose()); mats.forEach((x) => x.dispose()); texs.forEach((x) => x.dispose()); },
  };
}
