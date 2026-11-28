/* Tomestead · the dollhouse in the pine forest: what the room stands on when you see it from outside.
   A stone foundation, a plain wooden porch deck across the open front with three steps down, and a
   gravel path with stone edging that leaves the steps head-on and bends away through the ferns. It's
   sized from the shell, so it fits the study, the Library and the Great Hall. The forest itself is the
   backdrop (tex/forest_day.webp, tex/forest_night.webp), set behind the dollhouse in main.js. */
export function buildForestYard(K, dims, tier) {
  const { THREE, std, mkCanvas, canvasTex, rng, mergeGeometries } = K;
  const G = new THREE.Group(); G.userData.dyn = true; K.scene.add(G);
  const r = rng(7);
  const Y0 = -0.42;
  const zB = dims.zB, zF = dims.zF, len = zF - zB, midZ = (zB + zF) / 2;
  const geos = [], mats = [], texs = [];
  const own = (o) => { if (o.isTexture) texs.push(o); else if (o.isMaterial) mats.push(o); else geos.push(o); return o; };
  const m = (geo, mat, x, y, z, ry = 0) => { const o = new THREE.Mesh(own(geo), mat); o.position.set(x, y, z); o.rotation.y = ry; o.receiveShadow = true; G.add(o); return o; };
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

  // after dark, the lit room throws a warm pool of light onto the porch and the ground in front
  const pool = new THREE.Mesh(own(new THREE.PlaneGeometry(10, 6).rotateX(-Math.PI / 2)),
    own(new THREE.MeshBasicMaterial({ map: K.glowTex, color: '#ffa860', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })));
  pool.position.set(0, Y0 + 0.02, zF + 2.4); pool.renderOrder = 2; G.add(pool);

  G.traverse((o) => { if (o.isMesh) { o.updateMatrix(); o.matrixAutoUpdate = false; } });
  return {
    group: G,
    setLook(mode) { pool.material.opacity = mode === 'night' ? 0.32 : 0; pool.visible = mode === 'night'; },
    dispose() { K.scene.remove(G); geos.forEach((x) => x.dispose()); mats.forEach((x) => x.dispose()); texs.forEach((x) => x.dispose()); },
  };
}
