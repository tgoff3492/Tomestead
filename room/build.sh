# Bundle the Reading Room (room/src/main.js → room/room.js) and stamp a build tag on the URLs
# that load it (index.html, app.js, lab/room/index.html), so browsers fetch the new version.
# Needs: npm i three@0.187.0 esbuild   (run from the repo root or anywhere)
set -e
cd "$(dirname "$0")"
V=$(date +%Y%m%d%H%M%S)
npx esbuild src/main.js --bundle --format=esm --target=es2020 --outfile=room.js --log-level=warning "$@"
cd ..
sed -i -E "s/room\.(js|css)\?v=[0-9]+/room.\1?v=$V/g" index.html app.js lab/room/index.html
