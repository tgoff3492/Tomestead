/* Tomestead scanner: point the camera at the barcode on the back of a book and
   get its ISBN. Uses the browser's own barcode reader where there is one
   (Android Chrome); elsewhere (iPhone) a small reader is loaded the first time
   you scan. */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const PONYFILL = [
    'https://cdn.jsdelivr.net/npm/barcode-detector@3.2.3/dist/es/ponyfill.js/+esm',
    'https://cdn.jsdelivr.net/npm/barcode-detector@3.2.3/pure/+esm',
    'https://esm.sh/barcode-detector@3.2.3/pure',
  ];
  let Detector = null;

  async function detector() {
    if (Detector) return Detector;
    if ('BarcodeDetector' in window) {
      try {
        const fmts = await window.BarcodeDetector.getSupportedFormats();
        if (fmts.includes('ean_13')) { Detector = window.BarcodeDetector; return Detector; }
      } catch {}
    }
    for (const url of PONYFILL) {
      try { const m = await import(url); if (m && m.BarcodeDetector) { Detector = m.BarcodeDetector; return Detector; } } catch {}
    }
    throw new Error('no-reader');
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

      (async () => {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } });
        } catch (e) {
          say(e && e.name === 'NotAllowedError'
            ? 'Tomestead isn’t allowed to use the camera. Turn it on in your browser or phone settings, or type the ISBN instead.'
            : 'No camera is available here. Type the title or the ISBN instead.', true);
          return;
        }
        if (done) { stream.getTracks().forEach(t => t.stop()); return; }
        video.srcObject = stream;
        try { await video.play(); } catch {}
        dlg.classList.add('live');
        say('Hold the barcode on the back of the book inside the frame.');
        let D;
        try { D = await detector(); } catch {
          say('The barcode reader couldn’t load. Check your connection, or type the ISBN instead.', true);
          return;
        }
        let reader;
        try { reader = new D({ formats: ['ean_13'] }); } catch { reader = new D(); }
        let seen = '', hits = 0;
        const tick = async () => {
          if (done) return;
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
