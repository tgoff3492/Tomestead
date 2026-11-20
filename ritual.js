/* Tomestead reading ritual: settle in with a book. While a reading timer runs you can step into
   reading mode — the room dims to lamplight, the camera settles by the armchair, and the screen
   shows little more than the time you've been reading. The fire, the rain on the window and the
   grandfather clock can play while you read; they're made on the fly with Web Audio (no sound files
   to download), so they never loop or repeat. The screen stays on (dimmed) while sounds play,
   because phones stop web audio when they lock. Sound picks are kept per device. */
window.TomesteadRitual = function (api) {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const esc = api.esc;
  const KEY = 'tomestead.ritual';
  const SOUNDS = [
    ['fire', 'Fire', '<path d="M12 3c1 3 4 4.5 4 8.5a4 4 0 0 1-8 0c0-1.6.7-2.7 1.6-3.6.2 1.4.9 2.3 1.9 2.6C10.8 8 11 5.6 12 3Z"/><path d="M7 20h10"/>'],
    ['rain', 'Rain', '<path d="M7 14a4 4 0 0 1 .5-8A5 5 0 0 1 17 7a3.5 3.5 0 0 1 0 7H7Z"/><path d="M8 17.5 7 20m5-2.5L11 20m5-2.5L15 20"/>'],
    ['clock', 'Clock', '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>'],
  ];
  let opts = { fire: true, rain: false, clock: false, vol: 0.55 };
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === 'object') opts = { ...opts, ...s }; } catch {}
  const saveOpts = () => { try { localStorage.setItem(KEY, JSON.stringify(opts)); } catch {} };

  // ================================================================ sound
  let ctx = null, master = null, verb = null, sched = null, noise = null;
  const layers = {};   // name → { out: GainNode, stop(), tick(t0, t1) }
  function audio() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    // a small, warm room: a short burst of decaying noise as the reverb's impulse
    verb = ctx.createConvolver();
    const len = Math.floor(ctx.sampleRate * 1.3), ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    verb.buffer = ir;
    const wet = ctx.createGain(); wet.gain.value = 0.22; verb.connect(wet); wet.connect(master);
    // eight seconds of white, pink and brown noise to draw everything else from
    const n = ctx.sampleRate * 8;
    const mk = () => ctx.createBuffer(1, n, ctx.sampleRate);
    noise = { white: mk(), pink: mk(), brown: mk() };
    const w = noise.white.getChannelData(0), p = noise.pink.getChannelData(0), br = noise.brown.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0;
    for (let i = 0; i < n; i++) {
      const x = Math.random() * 2 - 1;
      w[i] = x;
      b0 = 0.99886 * b0 + x * 0.0555179; b1 = 0.99332 * b1 + x * 0.0750759; b2 = 0.969 * b2 + x * 0.153852;
      b3 = 0.8665 * b3 + x * 0.3104856; b4 = 0.55 * b4 + x * 0.5329522; b5 = -0.7616 * b5 - x * 0.016898;
      p[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + x * 0.5362) * 0.11; b6 = x * 0.115926;
      last = (last + 0.02 * x) / 1.02; br[i] = last * 3.5;
    }
    // smooth the seam where each loop wraps around
    for (const buf of [noise.pink, noise.brown]) { const d = buf.getChannelData(0), f = 2048; for (let i = 0; i < f; i++) { const k = i / f; d[i] = d[i] * k + d[n - f + i] * (1 - k); } }
    return ctx;
  }
  const rnd = (a, b) => a + Math.random() * (b - a);
  function loop(kind, rate = 1) {
    const s = ctx.createBufferSource(); s.buffer = noise[kind]; s.loop = true; s.playbackRate.value = rate;
    s.start(ctx.currentTime, rnd(0, 7)); return s;
  }
  function filt(type, f, q = 0.7) { const x = ctx.createBiquadFilter(); x.type = type; x.frequency.value = f; x.Q.value = q; return x; }
  function chain(...nodes) { for (let i = 0; i < nodes.length - 1; i++) nodes[i].connect(nodes[i + 1]); return nodes[nodes.length - 1]; }
  // a short burst of filtered noise at time t (a crackle, a raindrop, the clock's escapement)
  function burst(t, { f, q = 1, dur = 0.02, gain = 0.3, out, type = 'bandpass', attack = 0.0015, wet = 0.4 }) {
    const s = ctx.createBufferSource(); s.buffer = noise.white;
    const bp = filt(type, f, q), g = ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0008, t + attack + dur);
    s.connect(bp); bp.connect(g); g.connect(out);
    if (wet) { const v = ctx.createGain(); v.gain.value = wet; g.connect(v); v.connect(verb); }
    s.start(t, rnd(0, 7.5), attack + dur + 0.02);
  }
  function ping(t, { f, dur, gain, out, wet = 0.5, type = 'sine' }) {
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + 0.002); g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    o.connect(g); g.connect(out);
    if (wet) { const v = ctx.createGain(); v.gain.value = wet; g.connect(v); v.connect(verb); }
    o.start(t); o.stop(t + dur + 0.05);
  }
  // something that wanders slowly (the fire's breathing, gusts of rain)
  function wander(param, lo, hi, every = 0.4) {
    let v = (lo + hi) / 2;
    const id = setInterval(() => { if (!ctx) return; v = Math.min(hi, Math.max(lo, v + rnd(-1, 1) * (hi - lo) * 0.18)); param.setTargetAtTime(v, ctx.currentTime, every); }, every * 1000);
    return () => clearInterval(id);
  }

  const MAKE = {
    // a log fire: a low roar that breathes, a soft hiss, and crackles and pops that come in little clusters
    fire() {
      const out = ctx.createGain(); out.gain.value = 0; out.connect(master);
      const roar = loop('brown'), lp = filt('lowpass', 420), rg = ctx.createGain(); rg.gain.value = 0.55;
      chain(roar, lp, rg, out);
      const hiss = loop('pink', 0.9), hp = filt('bandpass', 2600, 0.6), hg = ctx.createGain(); hg.gain.value = 0.05;
      chain(hiss, hp, hg, out);
      const stops = [wander(rg.gain, 0.35, 0.75, 0.5), wander(lp.frequency, 300, 560, 0.7), wander(hg.gain, 0.025, 0.07, 0.6)];
      let next = 0;
      return {
        out,
        tick(t0, t1) {
          if (!next) next = t0;
          while (next < t1) {
            const big = Math.random() < 0.07;
            if (big) {   // a pop, and a few sparks after it
              burst(next, { f: rnd(500, 1100), q: 0.9, dur: rnd(0.05, 0.11), gain: rnd(0.35, 0.6), out, wet: 0.5 });
              for (let i = 0; i < 3 + Math.random() * 5; i++) burst(next + rnd(0.02, 0.25), { f: rnd(2500, 6500), q: rnd(1, 3), dur: rnd(0.004, 0.015), gain: rnd(0.05, 0.18), out, wet: 0.2 });
            } else {
              burst(next, { f: rnd(1400, 5200), q: rnd(0.8, 3), dur: rnd(0.006, 0.03), gain: Math.pow(Math.random(), 2.2) * 0.32 + 0.02, out, wet: 0.3 });
            }
            // crackles bunch together: mostly quick, now and then a quiet stretch
            next += Math.random() < 0.82 ? rnd(0.03, 0.22) : rnd(0.5, 1.8);
          }
        },
        stop() { stops.forEach(f => f()); try { roar.stop(); hiss.stop(); } catch {} },
      };
    },
    // rain on the window: a steady wash that gusts, drops tapping the glass, and now and then far-off thunder
    rain() {
      const out = ctx.createGain(); out.gain.value = 0; out.connect(master);
      const wash = loop('pink'), hp = filt('highpass', 380), lp = filt('lowpass', 5200), wg = ctx.createGain(); wg.gain.value = 0.42;
      chain(wash, hp, lp, wg, out);
      const patter = loop('white', 0.8), pb = filt('bandpass', 1300, 0.8), pg = ctx.createGain(); pg.gain.value = 0.05;
      chain(patter, pb, pg, out);
      const stops = [wander(wg.gain, 0.28, 0.55, 1.2), wander(lp.frequency, 3800, 6400, 1.5)];
      let next = 0, thunder = ctx.currentTime + rnd(60, 140);
      return {
        out,
        tick(t0, t1) {
          if (!next) next = t0;
          while (next < t1) {
            if (Math.random() < 0.55) ping(next, { f: rnd(1800, 4200), dur: rnd(0.01, 0.03), gain: rnd(0.005, 0.03), out, wet: 0.3 });
            else burst(next, { f: rnd(2500, 7000), q: rnd(2, 6), dur: rnd(0.004, 0.012), gain: rnd(0.02, 0.09), out, wet: 0.25 });
            next += rnd(0.015, 0.12);
          }
          if (thunder < t1) {   // a long low roll, far away
            const s = loop('brown', 0.6), f = filt('lowpass', 140), g = ctx.createGain(), at = thunder, len = rnd(4, 7);
            g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(rnd(0.5, 0.9), at + rnd(0.6, 1.4)); g.gain.exponentialRampToValueAtTime(0.001, at + len);
            chain(s, f, g, out); s.stop(at + len + 0.2);
            thunder = at + rnd(90, 200);
          }
        },
        stop() { stops.forEach(f => f()); try { wash.stop(); patter.stop(); } catch {} },
      };
    },
    // the grandfather clock: a slow tick… tock… from across the room
    clock() {
      const out = ctx.createGain(); out.gain.value = 0; out.connect(master);
      let next = 0, tock = false;
      return {
        out,
        tick(t0, t1) {
          if (!next) next = Math.ceil(t0 * 2) / 2 + 0.05;
          while (next < t1) {
            const k = tock ? 0.84 : 1;
            burst(next, { f: 2900 * k, q: 7, dur: 0.012, gain: 0.32, out, wet: 0.7 });
            ping(next, { f: 1180 * k, dur: 0.06, gain: 0.05, out, wet: 0.8 });
            ping(next + 0.003, { f: 420 * k, dur: 0.08, gain: 0.05, out, wet: 0.6, type: 'triangle' });
            tock = !tock; next += 1.0;
          }
        },
        stop() {},
      };
    },
  };

  const LEVEL = { fire: 0.9, rain: 0.75, clock: 0.55 };
  function setLayer(name, on) {
    if (!ctx) return;
    const L = layers[name];
    if (on && !L) {
      const l = layers[name] = MAKE[name]();
      l.out.gain.setTargetAtTime(LEVEL[name], ctx.currentTime, 0.8);
    } else if (!on && L) {
      delete layers[name];
      L.out.gain.setTargetAtTime(0, ctx.currentTime, 0.35);
      setTimeout(() => { L.stop(); try { L.out.disconnect(); } catch {} }, 2000);
    }
  }
  function soundOn() {
    if (!audio()) return;
    if (ctx.state === 'suspended') ctx.resume();
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setTargetAtTime(opts.vol * 0.9, ctx.currentTime, 0.6);
    for (const [k] of SOUNDS) setLayer(k, !!opts[k]);
    if (!sched) {
      // schedule what's coming a little ahead of time, so it lands exactly where it should
      sched = setInterval(() => { const t0 = ctx.currentTime, t1 = t0 + 0.35; for (const k in layers) layers[k].tick(t0, t1); }, 120);
    }
    wake();
  }
  function soundOff(fade = 1.2) {
    if (!ctx) return;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setTargetAtTime(0, ctx.currentTime, fade / 3);
    setTimeout(() => {
      if (isOpen()) return;
      for (const k of Object.keys(layers)) setLayer(k, false);
      clearInterval(sched); sched = null;
      setTimeout(() => { if (!isOpen() && ctx && ctx.state === 'running') ctx.suspend(); }, 2200);
    }, fade * 1000 + 200);
    unwake();
  }
  const anySound = () => SOUNDS.some(([k]) => opts[k]);

  // keep the screen on while sounds play (phones silence web audio once they lock)
  let lock = null;
  async function wake() {
    if (!anySound() || lock || !('wakeLock' in navigator) || document.visibilityState !== 'visible') return;
    try { lock = await navigator.wakeLock.request('screen'); lock.addEventListener('release', () => { lock = null; }); } catch { lock = null; }
  }
  function unwake() { if (lock) { lock.release().catch(() => {}); lock = null; } }
  document.addEventListener('visibilitychange', () => {
    if (!isOpen()) return;
    if (document.visibilityState === 'visible') { if (ctx && ctx.state !== 'running') ctx.resume(); wake(); }
  });

  // ================================================================ the screen
  let el = null, bookId = null, tick = null, restT = null;
  function build() {
    if (el) return el;
    el = document.createElement('div');
    el.id = 'ritual'; el.className = 'ritual'; el.hidden = true;
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-labelledby', 'riTitle');
    el.innerHTML = `<div class="ri-shade"></div>
      <div class="ri-body">
        <p class="ri-eyebrow">Settled in with</p>
        <div class="ri-book"><span class="ri-cover" id="riCover" aria-hidden="true"></span><div><h2 id="riTitle"></h2><p id="riBy" class="ri-by"></p></div></div>
        <div class="ri-clock" id="riClock" role="timer" aria-live="off">0:00</div>
        <p class="ri-sub" id="riSub"></p>
        <div class="ri-sounds" role="group" aria-label="Sounds while you read">
          ${SOUNDS.map(([k, label, icon]) => `<button type="button" class="ri-snd" data-snd="${k}" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg>${label}</button>`).join('')}
        </div>
        <label class="ri-vol"><span class="sr-only">Volume</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4Z"/></svg><input type="range" id="riVol" min="0" max="1" step="0.05"></label>
        <p class="ri-note" id="riNote"></p>
        <div class="ri-acts">
          <button type="button" class="btn btn-ghost ri-line" data-ri="line">Save a line</button>
          <button type="button" class="btn btn-brass" data-ri="done">I’m done reading</button>
        </div>
        <button type="button" class="linkbtn ri-leave" data-ri="leave">Leave the timer running</button>
      </div>
      <p class="ri-wake" aria-hidden="true">Tap to wake</p>`;
    document.body.appendChild(el);
    el.addEventListener('click', (e) => {
      if (el.classList.contains('resting')) { rouse(); e.stopPropagation(); return; }
      rouse();
      const s = e.target.closest('[data-snd]');
      if (s) {
        const k = s.dataset.snd; opts[k] = !opts[k]; saveOpts(); paintSounds();
        if (anySound()) { soundOn(); } else { setLayer(k, false); unwake(); }
        if (opts[k]) setLayer(k, true);
        return;
      }
      const a = e.target.closest('[data-ri]'); if (!a) return;
      if (a.dataset.ri === 'done') { const id = bookId; close(); api.stopTimer(id); }
      else if (a.dataset.ri === 'leave') close();
      else if (a.dataset.ri === 'line') api.openQuote(bookId);
    }, true);
    $('#riVol', el).addEventListener('input', (e) => {
      opts.vol = Number(e.target.value); saveOpts();
      if (ctx && master) master.gain.setTargetAtTime(opts.vol * 0.9, ctx.currentTime, 0.1);
    });
    for (const ev of ['pointermove', 'keydown', 'touchstart']) el.addEventListener(ev, () => rouse(), { passive: true });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen() && !document.querySelector('dialog[open]')) close(); });
    return el;
  }
  function paintSounds() {
    el.querySelectorAll('[data-snd]').forEach(b => b.setAttribute('aria-pressed', String(!!opts[b.dataset.snd])));
    $('#riVol', el).value = opts.vol;
    $('#riVol', el).closest('.ri-vol').classList.toggle('off', !anySound());
    $('#riNote', el).textContent = anySound()
      ? (ctx || window.AudioContext || window.webkitAudioContext ? 'Your screen stays on, dimmed, while the sounds play.' : '')
      : 'Add the fire, the rain or the clock, or read in quiet.';
  }
  // after a little while untouched, the screen fades almost to black: put the phone down and read
  function rouse() {
    if (!el) return;
    el.classList.remove('resting');
    clearTimeout(restT);
    restT = setTimeout(() => { if (isOpen() && !document.querySelector('dialog[open]')) el.classList.add('resting'); }, 15000);
  }
  function paint() {
    const b = api.book(bookId), t = api.timer();
    if (!b || !t || t.id !== bookId) { close(); return; }
    $('#riTitle', el).textContent = b.title;
    $('#riBy', el).textContent = b.author ? `by ${b.author}` : '';
    $('#riCover', el).innerHTML = api.thumbHTML(b, 'M'); api.wireThumbs($('#riCover', el));
    const sk = api.streak(), where = api.progressText(b);
    const bits = [];
    if (sk && sk.cur > 0) bits.push(sk.readToday ? `Day ${sk.cur} in a row` : `Keeps your ${sk.cur}-day streak going`);
    else bits.push('Starts a new streak');
    if (where) bits.push(`You were at ${where}`);
    $('#riSub', el).textContent = bits.join(' · ');
    const step = () => { const tt = api.timer(); if (!tt) { close(); return; } $('#riClock', el).textContent = api.clockText(Date.now() - tt.start); };
    clearInterval(tick); step(); tick = setInterval(step, 1000);
  }

  function open(id) {
    const t = api.timer();
    if (!t || (id && t.id !== id)) return false;
    build();
    bookId = t.id;
    paintSounds(); paint();
    el.classList.toggle('in-room', !!api.room());
    el.hidden = false;
    document.documentElement.classList.add('ritual-on');
    requestAnimationFrame(() => el.classList.add('show'));
    const r = api.room(); if (r && r.settle) r.settle(true);
    if (anySound()) soundOn();
    rouse();
    setTimeout(() => { const d = el.querySelector('[data-ri="done"]'); if (d && isOpen()) d.focus({ preventScroll: true }); }, 60);
    return true;
  }
  function close() {
    if (!isOpen()) return;
    clearInterval(tick); tick = null; clearTimeout(restT);
    el.classList.remove('show', 'resting');
    document.documentElement.classList.remove('ritual-on');
    setTimeout(() => { if (!el.classList.contains('show')) el.hidden = true; }, 500);
    soundOff();
    const r = api.room(); if (r && r.settle) r.settle(false);
  }
  const isOpen = () => !!(el && !el.hidden && el.classList.contains('show'));
  // the timer changed somewhere else (stopped from the chip, switched to another book)
  function refresh() { if (!isOpen()) return; const t = api.timer(); if (!t) close(); else { bookId = t.id; paint(); } }

  return { open, close, isOpen, refresh };
};
