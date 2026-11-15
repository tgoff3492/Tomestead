/* Tomestead scanner: point the camera at the barcode on the back of a book and
   get its ISBN. Uses the browser's own barcode reader where there is one
   (Android Chrome); elsewhere (iPhone) the reader bundled with the app in vendor/
   (barcode-detector + zxing-wasm, MIT) is loaded the first time you scan. */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  // the reader ships with the app (no outside servers, works once cached); a CDN copy only as a last resort
  const here = (path) => new URL(path, document.baseURI).href;
  const LOCAL = { js: here('vendor/barcode-detector.js'), wasm: here('vendor/zxing_reader.wasm') };
  const CDN = 'https://cdn.jsdelivr.net/npm/barcode-detector@3.2.3/dist/es/ponyfill.js/+esm';
  let loading = null;

  async function load() {
    if ('BarcodeDetector' in window) {
      try {
        const fmts = await window.BarcodeDetector.getSupportedFormats();
        if (fmts.includes('ean_13')) return window.BarcodeDetector;
      } catch {}
    }
    try {
      const m = await import(LOCAL.js);
      // load the decoder now (from this site, not the CDN it defaults to), so a problem shows up here
      await m.prepareZXingModule({
        overrides: { locateFile: (path, prefix) => (path.endsWith('.wasm') ? LOCAL.wasm : prefix + path) },
        fireImmediately: true,
      });
      return m.BarcodeDetector;
    } catch (e) { console.warn('Tomestead: bundled barcode reader failed', e); }
    try { const m = await import(CDN); if (m && m.BarcodeDetector) return m.BarcodeDetector; } catch (e) { console.warn('Tomestead: CDN barcode reader failed', e); }
    throw new Error('no-reader');
  }
  // starts once, and again only if it failed
  function detector() {
    if (!loading) loading = load().catch(e => { loading = null; throw e; });
    return loading;
  }

  const supported = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

  // Resolves with an ISBN (13 digits), or null if you closed the scanner
  function scan() {
    return new Promise((resolve) => {
      const dlg = $('#scanDialog'), video = $('#scanVideo'), msg = $('#scanMsg');
      let stream = null, timer = null, done = false;
      const stop = (value) => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        if (stream) stream.getTracks().forEach(t => t.stop());
        video.srcObject = null;
        dlg.classList.remove('live', 'found');
        if (dlg.open) dlg.close();
        resolve(value);
      };
      const say = (text, bad) => { msg.textContent = text; msg.classList.toggle('bad', !!bad); };
      dlg.onclose = () => stop(null);
      $('#scanCancel').onclick = () => stop(null);
      $('#scanType').onclick = () => stop('type');
      say('Starting the camera…');
      dlg.showModal();
      const reading = detector();   // get the reader ready while the camera starts
      reading.catch(() => {});

      (async () => {
        try {
          // more pixels let you hold the book farther back, where phone cameras can focus
          stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } } });
        } catch (e) {
          say(e && e.name === 'NotAllowedError'
            ? 'Tomestead isn’t allowed to use the camera. Turn it on in your browser or phone settings, or type the ISBN instead.'
            : 'No camera is available here. Type the title or the ISBN instead.', true);
          return;
        }
        if (done) { stream.getTracks().forEach(t => t.stop()); return; }
        // keep focusing as the book moves (where the camera lets us)
        try {
          const track = stream.getVideoTracks()[0], caps = track.getCapabilities ? track.getCapabilities() : {};
          if (caps.focusMode && caps.focusMode.includes('continuous')) await track.applyConstraints({ advanced: [{ focusMode: 'continuous' }] });
        } catch {}
        video.srcObject = stream;
        try { await video.play(); } catch {}
        dlg.classList.add('live');
        say('Hold the barcode on the back of the book inside the frame.');
        let D;
        try { D = await reading; } catch {
          say('The barcode reader couldn’t load. Check your connection, or type the ISBN instead.', true);
          return;
        }
        let reader;
        try { reader = new D({ formats: ['ean_13'] }); } catch { reader = new D(); }
        let seen = '', hits = 0, hinted = false;
        const began = Date.now();
        const tick = async () => {
          if (done) return;
          // nothing yet: the usual cause is holding it too close for the camera to focus
          if (!hinted && !seen && Date.now() - began > 7000) {
            hinted = true;
            say('Still looking. Hold the book a little farther back so the barcode is sharp, and keep it steady in good light.');
          }
          try {
            if (video.readyState >= 2) {
              const codes = await reader.detect(video);
              const isbn = (codes || []).map(c => String(c.rawValue || '').replace(/\D/g, '')).find(v => /^97[89]\d{10}$/.test(v));
              // two matching reads in a row, so a half-seen code can't slip through
              if (isbn) { hits = isbn === seen ? hits + 1 : 1; seen = isbn; }
              if (isbn && hits >= 2) {
                dlg.classList.add('found');
                say(`Found ISBN ${isbn}`);
                if (navigator.vibrate) navigator.vibrate(40);
                setTimeout(() => stop(isbn), 350);
                return;
              }
              if (codes && codes.length && !isbn) say('That barcode isn’t a book’s ISBN. Try the one on the back cover, usually above the price.');
            }
          } catch {}
          timer = setTimeout(tick, 180);
        };
        tick();
      })();
    });
  }

  window.TomesteadScan = { scan, supported };
})();
