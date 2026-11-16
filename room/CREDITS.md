# Credits

All 3D models and textures in `models/` and `tex/` come from [Poly Haven](https://polyhaven.com) and are CC0 (public domain): free to use for anything, no attribution required. They're credited here anyway, with thanks.

Models were shrunk for phones with gltf-transform (textures resized and converted to WebP, meshes simplified and compressed).

## Models
| File | Poly Haven asset |
|---|---|
| deskchair.glb | Green Chair 01 |
| armchair.glb | Arm Chair 01 (re-dyed: claret velvet, walnut frame) |
| ottoman.glb | Ottoman 01 (re-dyed cognac leather) |
| teacup.glb | Tea Set 01 (one cup and saucer) |
| clock.glb | Mantel Clock 01 |
| candlestick.glb | Wooden Candlestick |
| vase.glb | Brass Vase 01 |
| elephant.glb | Carved Wooden Elephant |
| sidetable.glb | Side Table Tall 01 |
| oillamp.glb | Vintage Oil Lamp |
| chandelier.glb | Chandelier 02 |
| plant.glb | Potted Plant 02 |
| painting.glb | Fancy Picture Frame 01 |
| grandfather.glb | Vintage Grandfather Clock 01 |

## Textures
Floral Jacquard (the rug: its damask recolored claret, with a woven border, medallion and fringe added in code, `tex/rug_claret.webp`), Herringbone Parquet (floor), Plastered Wall (walls), Wooden Panels (wainscot), Dark Wooden Planks (ceiling and beams), Oak Veneer 01 / Walnut Veneer / Lacquered Cherry Wood (bookcase, by your wood choice), Wool Boucle (rug weave), Brown Leather (tome cover and desk top), Bark Willow 02 (tome pedestal and firewood), Marble 01 (fireplace surround), Castle Brick 07 (firebox), Slate Floor 03 (hearth).

## Paintings (`tex/paintings/`, chosen in Customize → Paintings)
Both frames are Fancy Picture Frame 01. The landscapes are Poly Haven HDRIs (CC0), turned into flat views and then painted in oils in code (OpenCV's oil-painting filter, a varnish tone, canvas weave and brush relief):

| File | Poly Haven HDRI |
|---|---|
| golden_hills.webp | Rolling Hills |
| mountain_path.webp | Champagne Castle 1 |
| misty_pines.webp | Misty Pines |
| winter_wood.webp | Snowy Forest Path 01 |
| lake_dawn.webp | Lakeside Dawn |
| evening_water.webp | Small Harbour Sunset |
| forest_cliffs.webp | Neurathen Rock Castle |

`pastoral.webp` is the oil painting that comes on Fancy Picture Frame 01's own canvas. `highland.webp` (Highland cattle on the moor) is an image TJ supplied; it looks like a watermarked stock preview, so it's no longer the default: swap in a licensed copy if you keep using it. "Your own picture" is cropped to the frame and kept on that device only.

Hand-built in code: the bookcase (modelled on the app's arched bookcase, with its bookends, labels and climbing vine), the pedestal desk, the fireplace and its fire, the branch pedestal, the mantel trophies, the rug and the lamp shade.

The spine cloth, leather and other textures in the app's own `tex/` folder are Tomestead's.
