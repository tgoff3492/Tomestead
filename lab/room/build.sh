# Bundle the Reading Room; stamp a build tag on the page's script, stylesheet and asset URLs.
cd "$(dirname "$0")"
V=$(date +%Y%m%d%H%M%S)
npx esbuild src/main.js --bundle --format=esm --target=es2020 --outfile=room.js --log-level=warning --define:__BUILD__="\"$V\"" $@
sed -i -E "s/room\.(js|css)\?v=[0-9]+/room.\1?v=$V/g" index.html
