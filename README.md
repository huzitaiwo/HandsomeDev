# Handsome. — Hussen Taiwo

Plain HTML, CSS and vanilla JS. No build step.

Run locally: `python3 -m http.server 8000` in this folder, then open http://localhost:8000

## Structure
- `index.html` — homepage (done)
- `css/style.css` — global tokens, header, mobile menu, buttons, footer, reveal motion
- `css/home.css` — homepage-only sections
- `js/script.js` — theme toggle, mobile menu, reveal
- `work.html`, `about.html`, `contact.html` — not built yet (nav links point to them)

## Replace before launch
The images in `assets/images/` are crops from the supplied screenshots and are low resolution.
Swap in the originals using the same file names (or update the `src` in `index.html`):
- `general/hero-portrait.png`, `general/about-portrait.png`
- `projects/veloura.png`, `projects/elvixe.png`, `projects/ai-workspace.png`

The LinkedIn and GitHub links point at the site roots. Put the real profile URLs in
`index.html` (marked with a TODO).

Theme choice is remembered in `localStorage` under `handsome-theme`.
