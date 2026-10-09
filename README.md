# Handsome. — Hussen Taiwo

Plain HTML, CSS and vanilla JS. No build step.

Run locally: `python3 -m http.server 8000` in this folder, then open http://localhost:8000

## Structure

- `index.html`, `work.html`, `about.html`, `contact.html`, `project.html` — pages (`project.html?id=<project-id>`)
- `css/style.css` — global tokens, header, mobile menu, buttons, footer, reveal motion
- `css/home.css`, `work.css`, `about.css`, `contact.css`, `project.css` — page-only styles
- `js/script.js` — theme toggle, mobile menu, scroll reveal (load it LAST on pages that render with JS)
- `js/projects-data.js` — single source for all project data (Work cards + case studies)
- `js/work.js` (filtering), `js/project.js` (case-study renderer), `js/contact.js` (validation + mailto)

## Editing projects

Add or edit an entry in `js/projects-data.js`. Work cards and the case-study page update together.
Role, year, the Development bullets, Lessons and frame labels are shared constants at the top of `js/project.js`.
Images: `assets/images/projects/<id>.png`.

## Check before launch

- Replace the stand-in images in `assets/images/` with your originals (same file names).
- Confirm each project `url`, the Work filter `tags`, and the Veloura caption (blank).
- Contact: the form opens the visitor's email app (mailto); there is no backend. Dropdown options and budget ranges are placeholders.
- Real LinkedIn/GitHub URLs (footer on every page, About → Connect).

Theme choice is remembered in `localStorage` under `handsome-theme`.
