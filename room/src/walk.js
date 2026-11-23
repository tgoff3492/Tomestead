/* Tomestead · walking the room (for the library and the great hall, where there's room to roam).
   First person, eye height 1.6 m. On a phone: a thumbstick at the bottom left moves you, dragging
   anywhere else looks around. On a computer: W A S D or the arrow keys move, Q and E turn, dragging
   looks around. Movement eases in and out; you slide along walls and furniture instead of stopping
   dead. Tapping a thing in the room still walks you to it (and leaves walk mode). */
export function createWalker({ THREE, root, kick }) {
  const EYE = 1.6, SPEED = 1.7, TURN = 1.9, R = 0.28;
  const st = { on: false, pos: new THREE.Vector3(), yaw: 0, pitch: -0.05, vel: new THREE.Vector2(), turnV: 0, keys: new Set(), stick: { x: 0, y: 0 }, bounds: null, obstacles: [] };

  // ---- the thumbstick
  const pad = document.createElement('div');
  pad.className = 'walk-pad'; pad.hidden = true;
  pad.innerHTML = '<span class="walk-ring" aria-hidden="true"><span class="walk-knob"></span></span>';
  pad.setAttribute('aria-label', 'Walk: drag to move');
  root.appendChild(pad);
  const ring = pad.querySelector('.walk-ring'), knob = pad.querySelector('.walk-knob');
  let pid = null, c0 = null;
  const RAD = 46;
  const setStick = (dx, dy) => {
    const L = Math.hypot(dx, dy), k = L > RAD ? RAD / L : 1;
    dx *= k; dy *= k;
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    // a small dead zone, then a soft curve so small nudges are slow and full tilt is a walk
    const m = Math.min(1, L / RAD), e = m < 0.12 ? 0 : Math.pow((m - 0.12) / 0.88, 1.4);
    st.stick.x = L ? (dx / Math.max(1e-6, Math.hypot(dx, dy))) * e : 0;
    st.stick.y = L ? (dy / Math.max(1e-6, Math.hypot(dx, dy))) * e : 0;
    kick(400);
  };
  ring.addEventListener('pointerdown', (e) => {
    e.preventDefault(); e.stopPropagation();
    pid = e.pointerId; ring.setPointerCapture(pid);
    const r = ring.getBoundingClientRect(); c0 = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    setStick(e.clientX - c0.x, e.clientY - c0.y); pad.classList.add('held');
  });
  ring.addEventListener('pointermove', (e) => { if (e.pointerId === pid) setStick(e.clientX - c0.x, e.clientY - c0.y); });
  const release = (e) => { if (e.pointerId !== pid) return; pid = null; setStick(0, 0); pad.classList.remove('held'); };
  ring.addEventListener('pointerup', release); ring.addEventListener('pointercancel', release);

  // ---- keys
  const KEYS = { w: 'f', arrowup: 'f', s: 'b', arrowdown: 'b', a: 'l', d: 'r', arrowleft: 'tl', arrowright: 'tr', q: 'tl', e: 'tr' };
  addEventListener('keydown', (e) => {
    if (!st.on || /^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement && document.activeElement.tagName) || '')) return;
    const k = KEYS[e.key.toLowerCase()]; if (!k) return;
    st.keys.add(k); e.preventDefault(); e.stopImmediatePropagation(); kick(400);
  }, true);
  addEventListener('keyup', (e) => { const k = KEYS[(e.key || '').toLowerCase()]; if (k) st.keys.delete(k); });
  addEventListener('blur', () => st.keys.clear());

  // keep the walker inside the room and out of the furniture: push out of each obstacle, so you
  // slide along it
  function collide(p) {
    const b = st.bounds;
    if (b) {
      for (const z of b.zones) {
        if (p.z >= z.z0 && p.z <= z.z1) { p.x = THREE.MathUtils.clamp(p.x, z.x0 + R, z.x1 - R); }
      }
      p.z = THREE.MathUtils.clamp(p.z, b.zMin + R, b.zMax - R);
    }
    for (const o of st.obstacles) {
      if (o.r) {
        const dx = p.x - o.x, dz = p.z - o.z, d = Math.hypot(dx, dz), need = o.r + R;
        if (d < need) { if (d < 1e-4) { p.x += need; } else { p.x = o.x + (dx / d) * need; p.z = o.z + (dz / d) * need; } }
      } else {
        const cx = THREE.MathUtils.clamp(p.x, o.x0, o.x1), cz = THREE.MathUtils.clamp(p.z, o.z0, o.z1);
        const dx = p.x - cx, dz = p.z - cz, d = Math.hypot(dx, dz);
        if (d < R) {
          if (d > 1e-4) { p.x = cx + (dx / d) * R; p.z = cz + (dz / d) * R; }
          else {   // inside the box: out by the nearest side
            const out = [[o.x0 - R - p.x, 0], [o.x1 + R - p.x, 0], [0, o.z0 - R - p.z], [0, o.z1 + R - p.z]].sort((a, b2) => Math.abs(a[0] + a[1]) - Math.abs(b2[0] + b2[1]))[0];
            p.x += out[0]; p.z += out[1];
          }
        }
      }
    }
    return p;
  }

  return {
    get on() { return st.on; },
    // where you can walk (from the room's size) and what's in the way
    setWorld(bounds, obstacles) { st.bounds = bounds; st.obstacles = obstacles; },
    start(fromPos, fromDir) {
      st.on = true;
      st.pos.set(fromPos.x, EYE, fromPos.z); collide(st.pos);
      st.yaw = Math.atan2(-fromDir.x, -fromDir.z); st.pitch = -0.05;
      st.vel.set(0, 0); st.turnV = 0; st.keys.clear();
      pad.hidden = !matchMedia('(pointer: coarse)').matches;
      kick(600);
    },
    stop() { st.on = false; pad.hidden = true; st.keys.clear(); setStick(0, 0); },
    look(dx, dy) { st.yaw += dx * 0.0042; st.pitch = THREE.MathUtils.clamp(st.pitch + dy * 0.0034, -0.9, 0.7); kick(300); },   // drag the view, as everywhere else in the room
    // one frame: ease the velocity toward what the stick and keys ask for, move, slide off obstacles
    step(dt, camPos, camDir) {
      const k = st.keys;
      let fx = st.stick.x + (k.has('r') ? 1 : 0) - (k.has('l') ? 1 : 0);
      let fz = st.stick.y + (k.has('b') ? 1 : 0) - (k.has('f') ? 1 : 0);
      const L = Math.hypot(fx, fz); if (L > 1) { fx /= L; fz /= L; }
      const want = new THREE.Vector2(fx, fz).multiplyScalar(SPEED);
      const ease = 1 - Math.exp(-dt * (want.lengthSq() > st.vel.lengthSq() ? 7 : 9));
      st.vel.lerp(want, ease);
      const turn = (k.has('tr') ? -1 : 0) + (k.has('tl') ? 1 : 0);
      st.turnV += (turn * TURN - st.turnV) * (1 - Math.exp(-dt * 8));
      st.yaw += st.turnV * dt;
      // move in the direction you're facing
      const sin = Math.sin(st.yaw), cos = Math.cos(st.yaw);
      const dxw = st.vel.x * cos + st.vel.y * sin, dzw = -st.vel.x * sin + st.vel.y * cos;
      st.pos.x += dxw * dt; st.pos.z += dzw * dt;
      collide(st.pos);
      // the eye settles at standing height (after a glide from somewhere higher or lower)
      st.pos.y += (EYE - st.pos.y) * (1 - Math.exp(-dt * 4));
      camPos.copy(st.pos);
      camDir.set(-Math.sin(st.yaw) * Math.cos(st.pitch), Math.sin(st.pitch), -Math.cos(st.yaw) * Math.cos(st.pitch));
      const moving = st.vel.lengthSq() > 1e-4 || Math.abs(st.turnV) > 1e-3 || Math.abs(EYE - st.pos.y) > 1e-3;
      if (moving) kick(250);
      return moving;
    },
  };
}
