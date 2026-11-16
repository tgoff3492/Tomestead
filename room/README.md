# The Reading Room

Tomestead's home screen: a 3D reading room with stations you glide between: the **bookcase**, the **desk**, the **fireside** and the **magic tome**. Since Nov 15, 2026 it's what the app opens to (Room · Shelf · List at the top of the app; Shelf and List are the classic views, and devices without WebGL 2 get them automatically).

- In the app, `app.js` sets `window.TomesteadRoomHost` (the library, plus the app's own screens) and loads `room/room.js` the first time the room is shown. The room calls back into the app: opening a book (on the room's desk), progress, What to read next, Reading goals, Year in review, Add a book. `window.TomesteadRoom.refresh()` re-shelves the books after any change.
- `lab/room/` is a stand-alone test page for the same room; it reads the books saved in that browser (sample books elsewhere).

## What's in it
- Golden hour by day (sun through the window, a light shaft, drifting dust) and moonlight by night (star-chart walls, lamp and candlelight, a glowing tome). Follows the app's Time of day setting (the test page has a ☾/☀ button).
- Bookcase (shaped like the app's): your books as spines, in the app's order (Reading now → To read → Read) with each section's bookends and brass labels, the 'N read' plate, the climbing vine and the trinkets picked in Customize (Poly Haven models at their real size, `models/trinkets/`): a centrepiece in the arch with a smaller piece either side, the rest in the open spots on the shelves, standing a hand's width from the books and turned a little toward you, with something small on the stack of books. Each piece appears once; if there isn't room, the extras wait. Nothing with a lit flame (`TRINKET3D`, `trinketModel()`, `dress()` in `src/main.js`). It works like the classic bookcase, with no card over it: drag to slide along the shelves (a flick coasts), tap a spine and it slides out a little (with a soft glow), tap it again and a copy of it with its real front cover (the cover art, or a plain cloth cover with the title in gold) comes off the shelf and floats across while the view pans to the desk. It lands on the leather, falls open to its real pages (details, review, favourite lines, laid out like the app's open book), and the camera leans in until the open pages sit exactly where the app draws its open book; then the app's open book (with Edit, Cover, quotes) fades in over it. A tap while it's on its way skips straight to the open book. Closing it plays it all backwards: the camera pulls back, the book shuts and flies home to its slot, still slid out a little; tapping anywhere else slides it back in. A small bar above the stations has search (title, author, series, genre or tags; picks fly to the book, turning to its bookcase if needed; set-aside books go straight to the desk; `/` on a keyboard) and, when there are more books than fit, ‹ Bookcase 2 of 3 › to turn to the next case (the books slide back into the case and the next case's books slide out). Keyboard: ← → slide the next book out, Enter takes it down. On phones the view is close enough to read the spines; every shelf of books stays between the app's header (measured, goals included) and the bar.
- Opening any book while the room is showing (the desk card, the calendar, search, Next in the series) goes the same way: the book flies from its shelf to the desk and opens there. `window.TomesteadRoom.openBook(id)`; the app's `openDetail()` routes to it in room mode, and the reader's `openOnDesk(id, { onClosed })` fades in already open over the room's open book (`buildCarry()`, `readingView()`, `handOff()`, `closeUp()` in `src/main.js`).
- Reading goals show at the top of the room (this year's goal and up to two running custom goals, `#roomGoals`); tap one to change it.
- Desk: the book you're reading lying open, and the things picked in Customize → Reading table (Poly Haven pieces in `models/desk/`, up to five), set out as you'd keep them sitting there: the desk lamp at a back corner leaning over the book (its light comes on at night), tall things at the back, books behind the open book, the cup by your right hand, small flat things by your left (`DESK3D`, `dressDesk()`). Nothing lit: the candlestick stays unlit. tap for each Reading-now book: Start reading (a reading timer; the app keeps it, so it shows as a chip under the toolbar in every view and syncs across devices), Update progress, Open. Stopping logs the minutes to the book's reading log and opens the progress card to log the page.
- Fireside: stone fireplace with a roaring fire, a painting, and on the mantel a clock, candlesticks and your trophies (a gold cup on a walnut plinth with the year on a brass plate for each yearly goal met; one or two take the places of the vase and the elephant, more line up either side of the clock, newest nearest it; tap one for when it was earned); your current reading streak, the Reading calendar, Reading goals and Year in review.
- Arriving at the desk, the fireside or the tome opens its card (no need to guess that you can tap them). With nothing being read, the desk offers the top of your to-read pile ("Up next" books first) to start.
- A new, empty library gets a welcome card at the overview (Add your first book, Import, Show me around); everyone gets a four-step tour once (`tomestead.tour.v1` in the browser; ••• → Show me around replays it).
- Paintings: the two frames (over the fireplace, in the reading corner) hold any painting in `tex/paintings/` or your own picture (Customize → Paintings; `theme.paintings = { mantel, nook, mantelAt, nookAt }`). `hangPainting(slot)` maps the whole picture onto the frame's canvas. Test page: `?paint=winter_wood&nookpaint=lake_dawn`.
- Less motion: when the phone asks for reduced motion, moves between stations are short and flat and flicks don't coast.
- Magic tome: tap it and it wakes (the rings spin, sparks rise) and opens What to read next.
- ⏱ Speed check (test page, or `?perf=1` in the app): first view time, download size, frame rate while moving, draw calls.
- Devices without WebGL 2 keep the classic bookcase (and its 2D opening scene).

## Furniture and textures
Free Poly Haven models and textures (all CC0; list in `CREDITS.md`): a pedestal desk (hand-built, leather top) and green chair under the window, a stone fireplace with a roaring fire and mantel trinkets, a reading corner (claret velvet armchair, cognac ottoman, tall side table with a shaded oil lamp and a steaming cup of tea, a painting), a grandfather clock, a big potted plant, a brass chandelier, herringbone parquet, plastered walls, wood-panel wainscot and plank ceiling. The bookcase uses a wood veneer that follows your wood choice (oak, walnut or cherry; other finishes tint the oak). If any of these fail to load, the room falls back to the hand-built pieces.

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

Handy URL options: `?t=day` / `?t=night`, `?st=shelf|desk|hearth|tome|nook` (start at a station), `?sample=1` (sample books), `?perf=1` (open the speed check), `?paint=…` / `?nookpaint=…` (try a painting).

## Shelf trinkets
`tools/trinkets-prep.mjs` shrinks the Poly Haven originals (downloaded from `api.polyhaven.com`, glTF 1k) into `models/trinkets/` (meshopt, WebP textures, simplified). `tools/trinket-sprites.html` (with `tools/trinkets.json`, or `?set=desk` with `tools/desk.json` for the reading table, seen from above) renders each one true to scale (16.4 px per cm, lit from the upper left, soft contact shadow) for the Classic bookcase and Customize; the sizes go into `art.js`. To add one: prep it, render it, add it to `TRINKETS` in `decor.js`, the sizes in `art.js` and `TRINKET3D` in `src/main.js`.

