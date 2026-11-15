# The Reading Room (3D prototype)

A test page for a 3D version of Tomestead's library: a small room with three stations you can glide between, the **bookcase**, the **desk** and the **magic tome**. It lives apart from the app (`/lab/room/`) so the live app is untouched.

Open it at `https://tgoff3492.github.io/Tomestead/lab/room/` on the phone where you use Tomestead; it reads the books already saved in that browser, so your own shelf shows up. Elsewhere it shows sample books.

## What's in it
- Golden hour by day (sun through the window, a light shaft, drifting dust) and moonlight by night (star-chart walls, lamp and candlelight, a glowing tome). Follows the same Time of day setting as the app; the ☾/☀ button switches it.
- Bookcase: your books as spines (color, height and thickness the same way the app works them out), in the app's order (Reading now → To read → Read) with bookends; tap a spine to pull it out and see its card.
- Desk: banker's lamp, tea, candle, and the book you're reading lying open; tap for your progress.
- Magic tome: tap it and it wakes (the rings spin, sparks rise) and shows your to-read pile. In the real app this would open "What to read next".
- ⏱ Speed check: how long the first view took, what was downloaded, frame rate while moving, draw calls.
- Devices without WebGL get a message; in the app they'd keep the 2D opening scene.

## Furniture and textures
Free Poly Haven models and textures (all CC0; list in `CREDITS.md`): a carved console desk and green chair under the window, a reading corner (armchair, ottoman with a tea set, tall side table with an oil lamp, a painting), a grandfather clock, a big potted plant, a brass chandelier, herringbone parquet, plastered walls, wood-panel wainscot and plank ceiling. The bookcase uses a wood veneer that follows your wood choice (oak, walnut or cherry; other finishes tint the oak). If any of these fail to load, the room falls back to the hand-built pieces.

To add or swap one: download it with `api.polyhaven.com`, shrink it with gltf-transform (WebP textures at 512–1024 px, meshopt compression), drop it in `models/` and place it in `placeFurniture()`.

## How it stays fast
- Shadows are drawn once, since nothing in the room moves.
- Every still piece that shares a material is fused into one mesh (about 100 draw calls).
- All spines share one painted texture; textures are the app's own `tex/` files, tinted in the browser.
- When nothing is moving, it draws 30 frames a second instead of 60; if a phone struggles while moving, it lowers the resolution.
- One script, about 170 KB compressed (three.js included), plus about 3.3 MB of furniture and textures; all cached after the first visit.

## Building
The source is `src/main.js`; `room.js` is the bundled, minified file the page loads.

```
npm i three@0.187.0 esbuild
NODE_PATH=./node_modules npx esbuild lab/room/src/main.js --bundle --minify --format=esm --target=es2020 --outfile=lab/room/room.js
```

Handy URL options: `?t=day` / `?t=night`, `?st=shelf|desk|tome` (start at a station), `?sample=1` (sample books), `?perf=1` (open the speed check).
