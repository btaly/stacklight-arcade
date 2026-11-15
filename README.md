# Stacklight

A small, original falling-block arcade game. Open `index.html` through a local web server, or deploy it to GitHub Pages. No dependencies or build step are required.

Move with the arrow keys, rotate with Z and X (or up), soft drop with down, and pause with P or Escape. Touch controls are below the board. Clear lines to score; the level increases every ten lines. Scores and sound preference stay on the device.

## Deploy and install

Push to the `main` branch of a GitHub repository and set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The included workflow deploys each push. On iPhone, open the HTTPS Pages URL in Safari, tap Share, then **Add to Home Screen**. Open the game online once after installation to cache its files for offline play. Browser storage can be cleared by the user or OS.

Edit the static files and push changes to update. Increment the cache name in `sw.js` whenever cached files change so installed clients receive updates. `engine.js` contains game rules; `app.js` handles rendering and input.
