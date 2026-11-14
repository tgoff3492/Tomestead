/* Tomestead: light through the window and the dust it catches.
   Day: warm sunbeams from the upper right; now and then a mote of dust drifts down,
   brightening and glinting as it crosses a beam. Night: pale moonbeams from the left
   and a few slow sparks. Quiet when the tab is hidden, a book is open, or motion is reduced. */
(() => {
  'use strict';
  const html = document.documentElement;
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  const beamsEl = document.createElement('div');
  beamsEl.className = 'sunlight';
  beamsEl.setAttribute('aria-hidden', 'true');
  const canvas = document.createElement('canvas');
  canvas.className = 'motes';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(beamsEl, canvas);
  const ctx = canvas.getContext('2d');

  // beams: position across the window (0–1 along the gradient line), half-width, strength
  const MODES = {
    day: {
      angle: 114, rgb: '255,228,170',
      beams: [[.52, .045, .20], [.60, .03, .14], [.70, .06, .24], [.80, .035, .16], [.89, .05, .18]],
      glow: 'radial-gradient(ellipse 70% 55% at 100% 0%, rgba(255,226,160,.22), transparent 70%)',
    },
    night: {
      angle: 66, rgb: '170,200,255',
      beams: [[.14, .05, .07], [.24, .035, .05], [.34, .05, .06]],
      glow: 'radial-gradient(ellipse 70% 55% at 0% 10%, rgba(150,185,255,.12), transparent 70%)',
    },
  };
  let mode = html.dataset.light === 'night' ? 'night' : 'day';
  let W = 0, H = 0, dpr = 1;

  function paintBeams() {
    const m = MODES[mode];
    const stops = [];
    for (const [c, w, a] of m.beams) {
      stops.push(`rgba(${m.rgb},0) ${((c - w) * 100).toFixed(1)}%`, `rgba(${m.rgb},${a}) ${(c * 100).toFixed(1)}%`, `rgba(${m.rgb},0) ${((c + w) * 100).toFixed(1)}%`);
    }
    beamsEl.style.background = `${m.glow}, linear-gradient(${m.angle}deg, ${stops.join(', ')})`;
  }
  // how much beam light falls on a point (same geometry as the CSS gradient above)
  function beamAt(x, y) {
    const m = MODES[mode];
    const a = m.angle * Math.PI / 180;
    const ax = Math.sin(a), ay = -Math.cos(a);
    const L = Math.abs(W * ax) + Math.abs(H * ay);
    const t = ((x - W / 2) * ax + (y - H / 2) * ay) / L + .5;
    let v = 0;
    for (const [c, w, s] of m.beams) { const d = Math.abs(t - c) / w; if (d < 1) v = Math.max(v, (1 - d) * s / .24); }
    return Math.min(1, v);
  }

  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // ---------- motes ----------
  const motes = [];
  let nextSpawn = 0, last = 0, running = false;
  const rand = (a, b) => a + Math.random() * (b - a);

  function spawn(now) {
    const day = mode === 'day';
    motes.push({
      x: rand(W * (day ? .15 : 0), W * (day ? 1.05 : .85)),
      y: day ? rand(-10, H * .55) : rand(H * .3, H),
      r: rand(.9, day ? 2.4 : 1.7),
      vy: day ? rand(5, 13) : rand(-7, -2),             // dust settles; sparks rise
      vx: day ? rand(-4, 1) : rand(-2, 3),
      sway: rand(6, 18), swayT: rand(4, 9), phase: rand(0, 6.28),
      born: now, life: rand(9, 20) * 1000,
      tw: rand(1.5, 3.5),                               // night twinkle speed
      warm: Math.random() < .35,
      glint: 0,
    });
  }

  function frame(now) {
    if (!running) return;
    requestAnimationFrame(frame);
    if (now - last < 33) return;                       // ~30 fps is plenty for dust
    const dt = Math.min(.1, (now - last) / 1000);
    last = now;
    if (document.hidden || html.classList.contains('reading')) return;
    const day = mode === 'day';
    const cap = day ? 16 : 10;
    if (now > nextSpawn && motes.length < cap) {
      spawn(now);
      // every once in a while: mostly singles, sometimes a little drift of a few
      nextSpawn = now + (Math.random() < .2 ? rand(150, 500) : rand(900, 2600));
    }
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = motes.length - 1; i >= 0; i--) {
      const m = motes[i];
      const age = now - m.born;
      m.y += m.vy * dt;
      m.x += m.vx * dt;
      const x = m.x + Math.sin(m.phase + age / 1000 * 6.28 / m.swayT) * m.sway;
      const y = m.y;
      if (age > m.life || y > H + 20 || y < -30) { motes.splice(i, 1); continue; }
      const fade = Math.max(0, Math.min(1, age / 1500, (m.life - age) / 2000));
      let alpha, rgb;
      if (day) {
        const lit = beamAt(x, y);
        // dust is nearly invisible in shade and lights up crossing a beam
        alpha = (.12 + .88 * lit) * fade;
        if (lit > .45 && m.glint <= 0 && Math.random() < dt * .35) m.glint = 1;
        rgb = '255,240,200';
      } else {
        alpha = (.35 + .45 * (.5 + .5 * Math.sin(age / 1000 * m.tw * 6.28))) * fade;
        rgb = m.warm ? '255,205,130' : '200,225,255';
      }
      const g = ctx.createRadialGradient(x, y, 0, x, y, m.r * 3.2);
      g.addColorStop(0, `rgba(${rgb},${alpha.toFixed(3)})`);
      g.addColorStop(.35, `rgba(${rgb},${(alpha * .45).toFixed(3)})`);
      g.addColorStop(1, `rgba(${rgb},0)`);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, m.r * 3.2, 0, 6.283); ctx.fill();
      // a brief four-point glint, as if the mote caught the sun
      if (m.glint > 0) {
        const k = Math.sin(m.glint * Math.PI);
        const s = (5 + m.r * 3) * k;
        ctx.strokeStyle = `rgba(255,250,225,${(.85 * k * fade).toFixed(3)})`;
        ctx.lineWidth = .9;
        ctx.beginPath(); ctx.moveTo(x - s, y); ctx.lineTo(x + s, y); ctx.moveTo(x, y - s); ctx.lineTo(x, y + s); ctx.stroke();
        m.glint -= dt / .7;
      }
    }
  }

  function start() {
    if (reduce || running) return;
    running = true; last = performance.now();
    requestAnimationFrame(frame);
  }

  function setMode(next) {
    mode = next === 'night' ? 'night' : 'day';
    motes.length = 0;
    paintBeams();
  }

  resize();
  paintBeams();
  start();
  window.addEventListener('resize', () => { resize(); });
  window.addEventListener('tomestead:light', (e) => setMode(e.detail));
  window.TomesteadMotes = { setMode };
})();
