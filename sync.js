/* Tomestead accounts: sign-in, the invite list, and a cloud copy of each
   library (Firebase). Stays switched off until firebase-config.js is filled in,
   and then the app works exactly as before: everything in this browser only.

   How syncing works: the app keeps using its own copy in this browser (so it
   opens instantly and works offline). This file mirrors that copy to Firestore
   and brings in changes made on other devices. For every book it remembers a
   fingerprint of the last version both sides agreed on, so it can tell
   "changed here" from "changed somewhere else". If the same book was changed in
   both places before they could sync, the change made on this device wins. */
(() => {
  'use strict';
  const CFG = window.TOMESTEAD_FIREBASE;
  const SDK = 'https://www.gstatic.com/firebasejs/13.3.0/';
  const enabled = !!(CFG && CFG.apiKey && CFG.projectId && CFG.appId);
  const UID_KEY = 'tomestead.uid';

  const ls = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
    del(k) { try { localStorage.removeItem(k); } catch {} },
  };
  const uid = enabled ? ls.get(UID_KEY) : null;
  // nobody signed in on this device yet: hold the opening scene until they are
  if (enabled && !uid) document.documentElement.classList.add('auth-gate');

  // ---------- fingerprints ----------
  const plain = (o) => JSON.parse(JSON.stringify(o ?? null));   // what Firestore can store (no undefined)
  function stable(v) {
    if (Array.isArray(v)) return '[' + v.map(stable).join(',') + ']';
    if (v && typeof v === 'object') return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + stable(v[k])).join(',') + '}';
    return JSON.stringify(v);
  }
  function fingerprint(o) {
    const s = stable(plain(o));
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(36) + '.' + s.length.toString(36);
  }

  // what this device last agreed on with the cloud: { books: {id: fingerprint}, settings: fingerprint|null }
  const STATE_KEY = 'tomestead.synced.v1:' + uid;
  let state = { books: {}, settings: null };
  try { const s = JSON.parse(ls.get(STATE_KEY)); if (s && s.books) state = { books: s.books, settings: s.settings ?? null }; } catch {}
  const saveState = () => ls.set(STATE_KEY, JSON.stringify(state));

  // ---------- the sign-in card ----------
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let gate = null;
  function gateEl() {
    if (gate) return gate;
    gate = document.createElement('div');
    gate.id = 'gate';
    gate.className = 'gate';
    gate.setAttribute('role', 'dialog');
    gate.setAttribute('aria-modal', 'true');
    gate.setAttribute('aria-labelledby', 'gateBrand');
    gate.innerHTML = `<div class="gate-card paper-panel">
        <h1 id="gateBrand" class="gate-brand">Tomestead</h1>
        <p class="gate-sub">A home for every book you’ve read</p>
        <p class="gate-pitch">A cozy reading room for the books you’ve read, are reading and want to read. Log reviews and favorite lines, keep a streak, set goals, and see your year in books. No ads, no feed.</p>
        <div class="gate-body"></div>
      </div>`;
    document.body.appendChild(gate);
    gate.addEventListener('submit', onGateSubmit);
    gate.addEventListener('click', onGateClick);
    return gate;
  }
  let mode = 'signin';     // signin | create | reset
  let pendingUser = null;
  function show(view, opts = {}) {
    const g = gateEl();
    g.hidden = false;
    document.documentElement.classList.add('gate-on');
    const body = g.querySelector('.gate-body');
    const err = opts.error ? `<p class="form-error" role="alert">${esc(opts.error)}</p>` : '';
    const note = opts.note ? `<p class="gate-note" role="status">${esc(opts.note)}</p>` : '';
    if (view === 'wait') {
      body.innerHTML = `<p class="gate-msg">${esc(opts.text || 'Opening your library…')}</p>`;
    } else if (view === 'signin') {
      const create = mode === 'create', reset = mode === 'reset';
      body.innerHTML = `
        ${reset ? '' : `<button type="button" class="btn gate-google" data-g="google">
          <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
          Continue with Google</button>
        <p class="gate-or"><span>or use your email</span></p>`}
        <form class="gate-form" novalidate>
          ${reset ? '<p class="gate-msg">Enter your email and we’ll send you a link to choose a new password.</p>' : ''}
          <div class="field"><label for="gEmail">Email</label>
            <input id="gEmail" type="email" autocomplete="email" inputmode="email" required value="${esc(opts.email || '')}"></div>
          ${reset ? '' : `<div class="field"><label for="gPass">Password${create ? ' <span class="opt">(at least 6 characters)</span>' : ''}</label>
            <input id="gPass" type="password" autocomplete="${create ? 'new-password' : 'current-password'}" required minlength="6"></div>`}
          ${create ? '<p class="gate-msg gate-tip">We’ll email you a link to confirm it’s you. If it isn’t there in a minute, check your spam or promotions folder. (Continue with Google skips this step.)</p>' : ''}
          ${err}${note}
          <div class="actions">
            <button type="submit" class="btn btn-ink gate-submit">${create ? 'Create my account' : reset ? 'Send the link' : 'Sign in'}</button>
          </div>
        </form>
        <p class="gate-links">
          ${create ? '<button type="button" class="linkish" data-g="mode-signin">I already have an account</button>'
            : reset ? '<button type="button" class="linkish" data-g="mode-signin">Back to sign in</button>'
            : '<button type="button" class="linkish" data-g="mode-create">New here? Create an account</button><button type="button" class="linkish" data-g="mode-reset">Forgot password?</button>'}
        </p>`;
    } else if (view === 'verify') {
      body.innerHTML = `
        <h2 class="gate-h">Check your email</h2>
        <p class="gate-msg">We sent a link to <strong>${esc(opts.email)}</strong>. Open it to confirm it’s you, then come back and tap Continue.</p>
        <p class="gate-msg gate-tip">Not there? It sometimes lands in spam or promotions, from a firebaseapp.com address.</p>
        ${err}${note}
        <div class="actions center">
          <button type="button" class="btn btn-ink" data-g="verified">Continue</button>
          <button type="button" class="btn btn-ghost" data-g="resend">Send it again</button>
        </div>
        <p class="gate-links"><button type="button" class="linkish" data-g="signout">Use a different account</button></p>`;
    } else if (view === 'uninvited') {
      body.innerHTML = `
        <h2 class="gate-h">This library is invite-only</h2>
        <p class="gate-msg">You’re signed in as <strong>${esc(opts.email)}</strong>, but that email isn’t on the guest list yet. Ask whoever shared Tomestead with you to add it, then tap Try again.</p>
        ${err}
        <div class="actions center">
          <button type="button" class="btn btn-ink" data-g="recheck">Try again</button>
        </div>
        <p class="gate-links"><button type="button" class="linkish" data-g="signout">Use a different account</button></p>`;
    } else if (view === 'offline') {
      body.innerHTML = `
        <p class="gate-msg">${esc(opts.text || 'Connect to the internet to sign in.')}</p>
        <div class="actions center"><button type="button" class="btn btn-ink" data-g="reload">Try again</button></div>`;
    }
    const first = body.querySelector('.form-error') ? body.querySelector('#gEmail, #gPass') : body.querySelector('[data-g="google"], #gEmail, [data-g="verified"], [data-g="recheck"]');
    if (first && opts.focus !== false) setTimeout(() => first.focus(), 30);
  }
  function hide() {
    if (gate) gate.hidden = true;
    document.documentElement.classList.remove('gate-on');
  }
  function busy(on) {
    if (!gate) return;
    gate.querySelectorAll('button').forEach(b => { b.disabled = on; });
    gate.classList.toggle('busy', on);
  }

  function friendly(e) {
    const c = (e && e.code) || '';
    if (c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') return '';
    if (c === 'auth/invalid-credential' || c === 'auth/wrong-password' || c === 'auth/user-not-found' || c === 'auth/invalid-login-credentials') return 'That email and password don’t match. Check them, or tap “Forgot password?”.';
    if (c === 'auth/email-already-in-use') return 'That email already has an account. Sign in instead.';
    if (c === 'auth/weak-password') return 'Choose a password with at least 6 characters.';
    if (c === 'auth/invalid-email' || c === 'auth/missing-email') return 'That doesn’t look like an email address.';
    if (c === 'auth/missing-password') return 'Enter your password.';
    if (c === 'auth/popup-blocked') return 'Your browser blocked the Google window. Allow pop-ups for this site, or sign in with your email below.';
    if (c === 'auth/unauthorized-domain' || c === 'auth/operation-not-allowed') return 'This sign-in option isn’t switched on yet. Use the other option, or ask whoever runs Tomestead to finish setting it up.';
    if (c === 'auth/operation-not-supported-in-this-environment') return 'Google sign-in can’t open from here. Sign in with your email below instead.';
    if (c === 'auth/network-request-failed') return 'No internet connection. Connect and try again.';
    if (c === 'auth/too-many-requests') return 'Too many tries in a row. Wait a minute, then try again.';
    if (c === 'auth/user-disabled') return 'This account has been turned off.';
    return 'Something went wrong signing in. Please try again.';
  }

  // ---------- Firebase ----------
  let fb = null;        // { A, F, S, auth, db, storage }
  let user = null;
  let hooks = null;
  let ready = false;
  let family = false;   // on the guest list with family: true (see the family paintings)

  async function load() {
    const [App, A, F, S] = await Promise.all(['app', 'auth', 'firestore', 'storage'].map(n => import(`${SDK}firebase-${n}.js`)));
    const app = App.initializeApp(CFG);
    const auth = A.initializeAuth(app, {
      persistence: [A.indexedDBLocalPersistence, A.browserLocalPersistence],
      popupRedirectResolver: A.browserPopupRedirectResolver,
    });
    let db;
    try { db = F.initializeFirestore(app, { localCache: F.persistentLocalCache({ tabManager: F.persistentMultipleTabManager() }) }); }
    catch { db = F.getFirestore(app); }
    fb = { A, F, S, auth, db, storage: S.getStorage(app) };
  }

  async function start(h) {
    hooks = h;
    if (!enabled) return;
    if (!uid) show('wait', { text: 'Opening the front door…' });
    try {
      await load();
    } catch (e) {
      console.warn('Tomestead: couldn’t load sign-in', e);
      if (!uid) show('offline', { text: 'Tomestead needs an internet connection the first time you sign in.' });
      return;   // already signed in: keep going with this device's copy
    }
    fb.A.onAuthStateChanged(fb.auth, (u) => { onUser(u).catch(e => console.warn('Tomestead:', e)); });
  }

  async function invited(u) {
    // true / false, or null when we can't tell (offline)
    const email = String(u.email || '').toLowerCase();
    if (!email) return false;
    try {
      const snap = await fb.F.getDoc(fb.F.doc(fb.db, 'invites', email));
      family = snap.exists() && (snap.data() || {}).family === true;   // shares the family paintings
      return snap.exists();
    } catch (e) {
      if (e && e.code === 'permission-denied') return false;
      return null;
    }
  }

  async function onUser(u) {
    if (!u) {
      user = null;
      if (uid) { ls.del(UID_KEY); location.reload(); return; }   // signed out (or the sign-in expired)
      show('signin');
      return;
    }
    if (!u.emailVerified) {
      // they may have tapped the link since this device last checked
      try { await u.reload(); if (u.emailVerified) await u.getIdToken(true); } catch {}
    }
    if (!u.emailVerified) { pendingUser = u; show('verify', { email: u.email }); return; }
    const ok = await invited(u);
    if (ok === false) { pendingUser = u; show('uninvited', { email: u.email }); return; }
    if (ok === null && u.uid !== uid) { show('offline', { text: 'Connect to the internet to finish signing in.' }); return; }
    if (u.uid !== uid) {
      // first sign-in on this device, or someone else's library: start fresh from their copy
      ls.set(UID_KEY, u.uid);
      try { sessionStorage.removeItem('tomestead.intro'); } catch {}
      show('wait');
      location.reload();
      return;
    }
    user = u;
    pendingUser = null;
    hide();
    listen();
    loadFamily();
    loadFamilyShelves();
  }

  async function onGateSubmit(e) {
    e.preventDefault();
    if (!fb) return;
    const { A, auth } = fb;
    const email = (gate.querySelector('#gEmail') || {}).value?.trim() || '';
    const pass = (gate.querySelector('#gPass') || {}).value || '';
    busy(true);
    try {
      if (mode === 'reset') {
        await A.sendPasswordResetEmail(auth, email);
        mode = 'signin';
        show('signin', { email, note: 'If that email has an account, a reset link is on its way. Check your inbox.' });
      } else if (mode === 'create') {
        const cred = await A.createUserWithEmailAndPassword(auth, email, pass);
        try { await A.sendEmailVerification(cred.user); } catch {}
      } else {
        await A.signInWithEmailAndPassword(auth, email, pass);
      }
    } catch (err) {
      show('signin', { email, error: friendly(err) });
    } finally { busy(false); }
  }

  async function onGateClick(e) {
    const b = e.target.closest('[data-g]');
    if (!b || !fb) return;
    const { A, auth } = fb;
    const act = b.dataset.g;
    if (act.startsWith('mode-')) {
      const email = (gate.querySelector('#gEmail') || {}).value || '';
      mode = act.slice(5);
      return show('signin', { email });
    }
    if (act === 'reload') return location.reload();
    busy(true);
    try {
      if (act === 'google') {
        const p = new A.GoogleAuthProvider();
        p.setCustomParameters({ prompt: 'select_account' });
        await A.signInWithPopup(auth, p);
      } else if (act === 'verified') {
        const u = auth.currentUser;
        if (!u) return;
        await u.reload();
        await u.getIdToken(true);   // so the security rules see the confirmed email
        if (u.emailVerified) await onUser(u);
        else show('verify', { email: u.email, error: 'That email isn’t confirmed yet. Open the link we sent (check spam, too), then tap Continue.' });
      } else if (act === 'resend') {
        const u = auth.currentUser;
        if (u) await A.sendEmailVerification(u);
        show('verify', { email: u && u.email, note: 'Sent. It can take a minute to arrive.' });
      } else if (act === 'recheck') {
        const u = auth.currentUser;
        if (u) await onUser(u);
      } else if (act === 'signout') {
        await A.signOut(auth);
        mode = 'signin';
      }
    } catch (err) {
      const msg = friendly(err);
      if (act === 'google') { if (msg) show('signin', { error: msg }); }
      else if (pendingUser && act !== 'signout') show(act === 'recheck' ? 'uninvited' : 'verify', { email: pendingUser.email, error: msg });
    } finally { busy(false); }
  }

  async function signOut() {
    if (fb) { try { await fb.A.signOut(fb.auth); } catch {} }
    ls.del(UID_KEY);
    location.reload();
  }

  // ---------- keeping the two copies in step ----------
  const userDoc = () => fb.F.doc(fb.db, 'users', user.uid);
  const bookDoc = (id) => fb.F.doc(fb.db, 'users', user.uid, 'books', id);
  let booksSeen = false, settingsSeen = false, serverBooksSeen = false;

  function listen() {
    const { F } = fb;
    const markReady = (force) => {
      if (ready || !(force || (booksSeen && settingsSeen))) return;
      ready = true;
      flush();
      publishShelf();
      flushNotes();
      hooks.onReady && hooks.onReady();
    };
    F.onSnapshot(F.collection(fb.db, 'users', user.uid, 'books'), { includeMetadataChanges: true },
      (snap) => { onBooks(snap); booksSeen = true; markReady(); },
      (err) => console.warn('Tomestead: book sync stopped', err));
    F.onSnapshot(userDoc(), { includeMetadataChanges: true },
      (snap) => { onSettings(snap); markReady(); },
      (err) => console.warn('Tomestead: settings sync stopped', err));
    // offline on a fresh device: don't keep the app waiting
    // (settings stay unsent until the server has answered once, so a new device can't overwrite them)
    setTimeout(() => markReady(true), 8000);
  }

  function onBooks(snap) {
    const local = new Map(hooks.books().map(b => [b.id, b]));
    const dirty = (id) => {
      const b = local.get(id);
      return b ? fingerprint(b) !== state.books[id] : state.books[id] !== undefined;
    };
    const upserts = [], removes = [];
    snap.docChanges().forEach(ch => {
      const d = ch.doc;
      if (d.metadata.hasPendingWrites) return;            // our own change, on its way up
      const id = d.id;
      const changedHere = dirty(id);
      if (ch.type === 'removed') {
        if (changedHere) return;                          // edited here since: keep it, it gets sent back up
        if (local.has(id)) removes.push(id);
        delete state.books[id];
        return;
      }
      const data = Object.assign(d.data(), { id });
      const fp = fingerprint(data);
      if (state.books[id] === fp) return;
      const lb = local.get(id);
      if (lb && fingerprint(lb) === fp) { state.books[id] = fp; return; }
      if (changedHere) return;                            // this device's edit wins
      upserts.push(data);
      state.books[id] = fp;
    });
    // the first full answer from the server also tells us what was deleted elsewhere
    if (!snap.metadata.fromCache && !serverBooksSeen) {
      serverBooksSeen = true;
      const there = new Set(snap.docs.map(d => d.id));
      for (const id of Object.keys(state.books)) {
        if (there.has(id)) continue;
        const lb = local.get(id);
        if (lb && fingerprint(lb) !== state.books[id]) { delete state.books[id]; continue; }  // edited here: send it back up
        if (lb && !removes.includes(id)) removes.push(id);
        delete state.books[id];
      }
    }
    saveState();
    if (upserts.length || removes.length) hooks.applyBooks({ upserts, removes });
    if (ready) schedule();
    if (ready) publishShelf();
  }

  function settingsNow() { return plain(hooks.settings()); }
  function onSettings(snap) {
    if (snap.metadata.hasPendingWrites) return;
    const remote = snap.exists() ? (snap.data().settings || null) : null;
    if (!remote) {
      // a new device sees nothing until the server answers; don't push defaults over a real library
      if (snap.metadata.fromCache && state.settings === null) return;
      settingsSeen = true;
      if (ready) schedule();
      return;
    }
    settingsSeen = true;
    const rfp = fingerprint(remote);
    if (rfp === state.settings) return;
    const lfp = fingerprint(settingsNow());
    if (rfp === lfp) { state.settings = rfp; saveState(); return; }
    const changedHere = state.settings !== null && lfp !== state.settings;
    if (changedHere) { if (ready) schedule(); return; }
    state.settings = rfp;
    saveState();
    hooks.applySettings(remote);
  }

  let timer = null;
  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(flush, 700);
    publishShelf();
  }
  function flush() {
    clearTimeout(timer);
    if (!user || !fb || !ready) return;
    const { F, db } = fb;
    // books
    const ops = [];
    const here = new Set();
    for (const b of hooks.books()) {
      if (!b || !b.id || !/^[A-Za-z0-9_-]{1,120}$/.test(b.id)) continue;
      here.add(b.id);
      const fp = fingerprint(b);
      if (state.books[b.id] !== fp) ops.push({ id: b.id, put: b, fp, prev: state.books[b.id] });
    }
    for (const id of Object.keys(state.books)) if (!here.has(id)) ops.push({ id, prev: state.books[id] });
    for (let i = 0; i < ops.length; i += 400) {
      const chunk = ops.slice(i, i + 400);
      const batch = F.writeBatch(db);
      chunk.forEach(op => {
        if (op.put) { const data = plain(op.put); delete data.id; batch.set(bookDoc(op.id), data); state.books[op.id] = op.fp; }
        else { batch.delete(bookDoc(op.id)); delete state.books[op.id]; }
      });
      batch.commit().catch(err => {
        // the cloud said no: mark these as unsent again so nothing is lost here
        console.warn('Tomestead: couldn’t save to the cloud', err);
        chunk.forEach(op => { if (op.put) { if (state.books[op.id] === op.fp) delete state.books[op.id]; } else if (op.prev !== undefined) state.books[op.id] = op.prev; });
        saveState();
      });
    }
    // settings (goals, trophies, look)
    if (settingsSeen) {
      const s = settingsNow();
      const fp = fingerprint(s);
      if (fp !== state.settings) {
        const prev = state.settings;
        state.settings = fp;
        F.setDoc(userDoc(), { settings: s, updatedAt: F.serverTimestamp() }).catch(err => {
          console.warn('Tomestead: couldn’t save settings to the cloud', err);
          if (state.settings === fp) state.settings = prev;
          saveState();
        });
      }
    }
    saveState();
  }

  // ---------- cover photos ----------
  async function uploadCover(bookId, blob) {
    if (!user || !fb) return null;
    const { S, storage } = fb;
    const path = `covers/${user.uid}/${bookId}-${Date.now().toString(36)}.jpg`;
    const r = S.ref(storage, path);
    await S.uploadBytes(r, blob, { contentType: 'image/jpeg', cacheControl: 'public, max-age=31536000' });
    return { path, url: await S.getDownloadURL(r) };
  }
  function removeCover(path) {
    if (!user || !fb || !path || !String(path).startsWith(`covers/${user.uid}/`)) return;
    fb.S.deleteObject(fb.S.ref(fb.storage, path)).catch(() => {});
  }

  // ---------- family paintings ----------
  // Pictures for the reading room's frames, shared only between readers whose guest-list entry
  // (invites/<email>) has family: true. Files in Storage under family/, listed in the Firestore
  // collection familyPaintings; both are closed to everyone else (see the rules). The list is kept
  // on this device too, so the room can hang them straight away.
  // A painting can also ship with the app sealed (AES-GCM, src = its file in the app), with the key
  // kept in its familyPaintings document, so only family accounts can open it. Unsealed here, in memory.
  const FAM_KEY = 'tomestead.family' + (uid ? ':' + uid : '');
  let famList = (() => { try { const a = JSON.parse(ls.get(FAM_KEY)); return Array.isArray(a) ? a.map((x) => (x.src ? { ...x, url: null } : x)) : []; } catch { return []; } })();
  const unsealed = new Map();   // src → object URL
  async function unseal(p) {
    if (unsealed.has(p.src)) return unsealed.get(p.src);
    const res = await fetch(p.src, { cache: 'force-cache' });
    if (!res.ok) throw new Error('sealed painting ' + res.status);
    const buf = new Uint8Array(await res.arrayBuffer());
    const raw = Uint8Array.from(atob(p.key), (c) => c.charCodeAt(0));
    const key = await crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['decrypt']);
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: buf.slice(0, 12) }, key, buf.slice(12));
    const url = URL.createObjectURL(new Blob([plain], { type: 'image/jpeg' }));
    unsealed.set(p.src, url);
    return url;
  }
  async function unsealAll() {
    let changed = false;
    for (const p of famList) {
      if (!p.src || !p.key || p.url) continue;
      try { p.url = await unseal(p); changed = true; } catch (e) { console.warn('Tomestead: family painting not opened', e); }
    }
    if (changed) window.dispatchEvent(new Event('tomestead:family'));
  }
  setTimeout(unsealAll, 0);
  function keepFamily(list) {
    famList = list.map((x) => (x.src && unsealed.has(x.src) ? { ...x, url: unsealed.get(x.src) } : x));
    const save = famList.map((x) => (x.src ? { ...x, url: null } : x));
    if (save.length) ls.set(FAM_KEY, JSON.stringify(save)); else ls.del(FAM_KEY);
    window.dispatchEvent(new Event('tomestead:family'));
    unsealAll();
  }
  async function loadFamily() {
    if (!user || !fb) return famList;
    if (!family) { if (famList.length) keepFamily([]); return famList; }
    try {
      const { F } = fb;
      const snap = await F.getDocs(F.collection(fb.db, 'familyPaintings'));
      keepFamily(snap.docs.map((d) => {
        const x = d.data() || {};
        const sealed = typeof x.src === 'string' && /^[\w/.-]+\.bin$/.test(x.src) && typeof x.key === 'string';
        return { id: d.id, name: String(x.name || 'Family painting').slice(0, 60), url: sealed ? null : x.url, src: sealed ? x.src : undefined, key: sealed ? x.key : undefined,
          by: x.by || '', at: x.at && x.at.toMillis ? x.at.toMillis() : Date.now() };
      }).filter((x) => x.src || (typeof x.url === 'string' && x.url.startsWith('https://'))).sort((a, b) => a.at - b.at));
    } catch (e) {
      if (e && e.code === 'permission-denied') keepFamily([]);   // not (or no longer) family
      else console.warn('Tomestead: family paintings not loaded', e);
    }
    return famList;
  }
  async function addFamilyPainting(name, blob) {
    if (!user || !fb || !family) throw new Error('not-family');
    const { F, S } = fb;
    const ref = F.doc(F.collection(fb.db, 'familyPaintings'));
    const path = `family/${ref.id}.jpg`;
    const r = S.ref(fb.storage, path);
    await S.uploadBytes(r, blob, { contentType: 'image/jpeg', cacheControl: 'private, max-age=31536000', customMetadata: { by: user.uid } });
    const url = await S.getDownloadURL(r);
    await F.setDoc(ref, { name: String(name).slice(0, 60), url, path, by: user.uid, at: F.serverTimestamp() });
    keepFamily([...famList, { id: ref.id, name: String(name).slice(0, 60), url, by: user.uid, at: Date.now() }]);
    return ref.id;
  }
  async function removeFamilyPainting(id) {
    const p = famList.find((x) => x.id === id);
    if (!user || !fb || !p || p.by !== user.uid) throw new Error('not-yours');
    const { F, S } = fb;
    await F.deleteDoc(F.doc(fb.db, 'familyPaintings', id));
    S.deleteObject(S.ref(fb.storage, `family/${id}.jpg`)).catch(() => {});
    keepFamily(famList.filter((x) => x.id !== id));
  }

  // ---------- family shelves (the reading room's family room) ----------
  // Each family reader publishes a small summary of their shelves to familyShelves/<uid>: titles,
  // authors, stars, status, spine colour, pages and the Open Library key for a cover. Never reviews,
  // notes, quotes or reading logs. Only family accounts can read them (see the rules); anyone can
  // turn theirs off in Customize → Room, which removes it.
  const SHELF_KEY = 'tomestead.famshelves' + (uid ? ':' + uid : '');
  let famShelves = (() => { try { const a = JSON.parse(ls.get(SHELF_KEY)); return Array.isArray(a) ? a : []; } catch { return []; } })();
  let shelfSent = null, shelfTimer = null;
  function myName() {
    const f = (hooks.family && hooks.family()) || {};
    if (f.name) return f.name;
    const dn = user && user.displayName ? String(user.displayName).trim().split(/\s+/)[0] : '';
    return dn || (user && user.email ? user.email.split('@')[0] : 'Me');
  }
  function shelfSummary() {
    const list = (hooks.books() || []).filter((b) => b && b.title).slice(0, 1200).map((b) => {
      const o = { t: String(b.title).slice(0, 140), a: String(b.author || '').slice(0, 80), s: ['read', 'reading', 'want', 'dnf'].includes(b.status) ? b.status : 'read' };
      if (Number(b.rating) > 0) o.r = Math.round(Number(b.rating) * 2) / 2;
      if (b.color) o.c = String(b.color).slice(0, 9);
      if (Number(b.pages) > 0) o.p = Math.min(5000, Math.round(Number(b.pages)));
      if (b.format === 'audio' && Number(b.hours) > 0) o.h = Math.round(Number(b.hours));
      const ol = b.olKey || (b.art && b.art.olKey);
      if (ol && /^\/works\/OL\w+$/.test(ol)) o.k = ol;
      const cid = b.art && Array.isArray(b.art.ids) ? b.art.ids[b.art.i || 0] : null;
      if (Number(cid) > 0) o.cv = Number(cid);
      const fin = [b.finished, ...(b.rereads || [])].filter(Boolean).sort().pop();
      if (fin) o.f = String(fin).slice(0, 10);
      if (b.addedAt) o.d = Number(b.addedAt) || 0;
      return o;
    });
    return list;
  }
  function publishShelf(now) {
    clearTimeout(shelfTimer);
    if (!now) { shelfTimer = setTimeout(() => publishShelf(true), 6000); return; }
    if (!user || !fb || !family || !ready) return;
    const { F } = fb;
    const f = (hooks.family && hooks.family()) || {};
    const ref = F.doc(fb.db, 'familyShelves', user.uid);
    if (f.share === false) {
      if (shelfSent !== 'off') { shelfSent = 'off'; F.deleteDoc(ref).catch(() => { shelfSent = null; }); }
      return;
    }
    const books = shelfSummary(), name = myName();
    const fp = fingerprint({ name, books });
    if (fp === shelfSent) return;
    shelfSent = fp;
    F.setDoc(ref, { name, books, sig: fp, at: F.serverTimestamp() }).catch((e) => { shelfSent = null; console.warn('Tomestead: family shelf not shared', e); });
  }
  async function loadFamilyShelves() {
    if (!user || !fb) return famShelves;
    if (!family) { if (famShelves.length) { famShelves = []; ls.del(SHELF_KEY); window.dispatchEvent(new Event('tomestead:familyshelves')); } return famShelves; }
    try {
      const { F } = fb;
      const snap = await F.getDocs(F.collection(fb.db, 'familyShelves'));
      famShelves = snap.docs.filter((d) => d.id !== user.uid).map((d) => {
        const x = d.data() || {};
        return { uid: d.id, name: String(x.name || 'Family').slice(0, 40), sig: String(x.sig || ''), at: x.at && x.at.toMillis ? x.at.toMillis() : 0,
          books: Array.isArray(x.books) ? x.books.filter((b) => b && typeof b.t === 'string').slice(0, 1200) : [] };
      }).filter((x) => x.books.length).sort((a, b) => a.name.localeCompare(b.name));
      try { ls.set(SHELF_KEY, JSON.stringify(famShelves)); } catch { /* too big for this device: kept in memory */ }
      window.dispatchEvent(new Event('tomestead:familyshelves'));
    } catch (e) {
      if (e && e.code === 'permission-denied') { famShelves = []; ls.del(SHELF_KEY); }
      else console.warn('Tomestead: family shelves not loaded', e);
    }
    return famShelves;
  }

  // ---------- feedback and error reports (for the person running Tomestead) ----------
  // Saved to the 'feedback' and 'errors' collections; readable only in the Firebase console.
  // Anything that can't be sent yet waits on this device and goes with the next sign-in.
  const NOTES_KEY = 'tomestead.notes.pending';
  const pendingNotes = () => { try { const a = JSON.parse(ls.get(NOTES_KEY)); return Array.isArray(a) ? a : []; } catch { return []; } };
  const keepNotes = (a) => (a.length ? ls.set(NOTES_KEY, JSON.stringify(a.slice(-30))) : ls.del(NOTES_KEY));
  async function sendNote(kind, data) {
    if (!user || !fb) return false;
    const { F } = fb;
    await F.addDoc(F.collection(fb.db, kind), { ...plain({ ...data, uid: user.uid, email: user.email || '' }), at: F.serverTimestamp() });
    return true;
  }
  async function flushNotes() {
    const left = [];
    for (const n of pendingNotes()) {
      try { if (!(await sendNote(n.kind, n.data))) left.push(n); }
      catch (e) { if (!(e && e.code === 'permission-denied' && n.kind === 'errors')) left.push(n); }
    }
    keepNotes(left);
  }
  // true when it reached the cloud; false when it's waiting on this device
  async function feedback(data) {
    try { if (ready && (await sendNote('feedback', data))) return true; }
    catch (e) { console.warn('Tomestead: feedback not sent yet', e); }
    keepNotes([...pendingNotes(), { kind: 'feedback', data }]);
    return false;
  }
  let errorsSent = 0;
  const errorsSeen = new Set();
  function reportError(data) {
    if (!enabled || errorsSent >= 8 || errorsSeen.has(data.msg)) return;
    errorsSeen.add(data.msg); errorsSent++;
    if (ready) sendNote('errors', data).catch(() => {});
    else keepNotes([...pendingNotes(), { kind: 'errors', data }]);
  }

  window.TomesteadSync = {
    feedback,
    reportError,
    pendingFeedback: () => pendingNotes().filter(n => n.kind === 'feedback').length,
    enabled,
    uid,
    suffix: uid ? ':' + uid : '',
    gated: enabled && !uid,
    start,
    push: () => { if (ready) schedule(); },
    isReady: () => ready,
    signedIn: () => !!user,
    email: () => (user && user.email) || '',
    signOut,
    uploadCover,
    removeCover,
    isFamily: () => !!user && family,
    familyPaintings: () => famList,
    familyShelves: () => famShelves,
    loadFamilyShelves,
    publishShelf: (now) => publishShelf(now),
    displayName: () => (user ? myName() : ''),
    addFamilyPainting,
    removeFamilyPainting,
    myUid: () => (user && user.uid) || uid || '',
  };
})();
