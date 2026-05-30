# pink-auto-web

[![Deploy](https://github.com/AdityaxDeore/pink-auto-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/AdityaxDeore/pink-auto-web/actions/workflows/deploy.yml)

Women-first transportation platform focused on safe, reliable rides, driver empowerment, and seamless booking experiences.

Live demo: https://adityaxdeore.github.io/pink-auto-web

Quick start

```bash
npm ci
npm run dev       # run locally
npm run build     # produce production build in dist/
npm run preview   # preview production build locally
npm run deploy    # deploy dist/ to gh-pages (requires permissions)
```

Notes

- CI: a GitHub Actions workflow builds and publishes `dist/` to the `gh-pages` branch on pushes to `master` or via manual run. See `.github/workflows/deploy.yml`.
<<<<<<< HEAD
- Vite: `vite.config.js` sets `base` to `/pink-auto-web/` and adds an alias `@` → `src/` for imports.
=======
- Vite: `vite.config.js` sets `base` to `/pink-auto-web/` and adds an alias `@` → `src/` for imports.
>>>>>>> c3bbeda (chore(ui): immersive UI polish, Play Store badge, form animations; fix GH Pages routing (HashRouter))
- GitHub Pages URL: the site is published at the repository's GitHub Pages address (see the `homepage` field in `package.json`).

Want me to add a status badge for the Pages site or change the publish branch? Reply with your preference.
