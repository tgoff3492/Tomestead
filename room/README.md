# The Reading Room

Tomestead's home screen: a 3D reading room with stations you glide between: the **bookcase**, the **desk**, the **fireside** and the **magic tome**. Since Nov 15, 2026 it's what the app opens to (Room · Shelf · List at the top of the app; Shelf and List are the classic views, and devices without WebGL 2 get them automatically).

- In the app, `app.js` sets `window.TomesteadRoomHost` (the library, plus the app's own screens) and loads `room/room.js` the first time the room is shown. The room calls back into the app: opening a book (the reading table), progress, What to read next, Reading goals, Year in review, Add a book. `window.TomesteadRoom.refresh()` re-shelves the books after any change.
- `lab/room/` is a stand-alone test page for the same room; it reads the books saved in that browser (sample books elsewhere).

## What's in it
- Golden hour by day (sun through the window, a light shaft, drifting dust) and moonlight by night (star-chart walls, lamp and candlelight, a glowing tome). Follows the app's Time of day setting (the test page has a ☾/☀ button).
- Bookcase (shaped like the app's): your books as spines, in the app's order (Reading now → To read → Read) with each section's bookends and brass labels, the 'N read' plate, trophies in the arch, the climbing vine. One book is always in hand: swipe or ‹ › to browse, tap near a spine to jump to it, tap the title to open it on the reading table.
- Desk: banker's lamp, candle, and the book you're reading lying open; tap for your progress (Update progress / Open the book).
- Fireside: stone fireplace with a roaring fire, mantel trinkets, the Highland cattle painting and a sleeping dog; tap the fireplace for Reading goals and Year in review.
- Magic tome: tap it and it wakes (the rings spin, sparks rise) and opens What to read next.
- ⏱ Speed check (test page, or `?perf=1` in the app): first view time, download size, frame rate while moving, draw calls.
- Devices without WebGL 2 keep the classic bookcase (and its 2D opening scene).

## Furniture and textures
Free Poly Haven models and textures (all CC0; list in `CREDITS.md`): a pedestal desk (hand-built, leather top) and green chair under the window, a stone fireplace with a roaring fire, mantel trinkets and a sleeping dog to its left, a reading corner (armchair, ottoman, tall side table with a shaded oil lamp and a steaming cup of tea, a painting), a grandfather clock, a big potted plant, a brass chandelier, herringbone parquet, plastered walls, wood-panel wainscot and plank ceiling. The bookcase uses a wood veneer that follows your wood choice (oak, walnut or cherry; other finishes tint the oak). If any of these fail to load, the room falls back to the hand-built pieces.

To add or swap one: download it with `api.polyhaven.com`, shrink it with gltf-transform (WebP textures at 512–1024 px, meshopt compression), drop it in `models/` and place it in `placeFurniture()`.

## How it stays fast
- Shadows are drawn once, since nothing in the room moves.
- Every still piece that shares a material is fused into one mesh (about 100 draw calls).
- All spines share one painted texture; textures are the app's own `tex/` files, tinted in the browser.
- When nothing is moving, it draws 30 frames a second instead of 60; if a phone struggles while moving, it lowers the resolution.
- One script, about 170 KB compressed (three.js included), plus about 3.3 MB of furniture and textures; all cached after the first visit.

## Building
The source is `src/main.js`; `room.js` is the bundled, minified file the page loads. `build.sh` also stamps a build tag on the script, stylesheet and asset URLs, so phones fetch the new version right away instead of reusing a cached copy for up to 10 minutes.

```
npm i three@0.187.0 esbuild
sh room/build.sh --minify
```

Handy URL options: `?t=day` / `?t=night`, `?st=shelf|desk|hearth|tome|nook` (start at a station), `?sample=1` (sample books), `?perf=1` (open the speed check).
