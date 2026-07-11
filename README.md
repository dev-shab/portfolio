# Shabreesh Nair — Portfolio

React + TypeScript + Tailwind + React Router, styled as a dev-tool / terminal theme.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to test the production build locally
```

`npm run build` outputs static files to `dist/` — deployable to Vercel, Netlify,
GitHub Pages, or any static host.

## Editing content

All resume content lives in `src/data/*.json` — no component code needs to
change to update your info:

- `profile.json` — name, tagline, summary, contact links
- `experience.json` — one entry per role; `slug` powers the `/experience/:slug`
  route, `achievements` render as the diff lines, `stack` renders as tags
- `skills.json` — grouped skill categories
- `education.json`, `certifications.json`, `highlights.json`

## Project structure

```
src/
  components/     UI building blocks (Navbar, Hero, Terminal, Experience...)
  components/ui/  small shadcn-style primitives (Button)
  pages/          route-level components (Home, ExperienceDetail, NotFound)
  data/           JSON content + types.ts
  lib/            small utilities (cn, useDocumentTitle)
```

## Deploying

Easiest options:
- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: add `base: '/your-repo-name/'` to `vite.config.ts`, then
  deploy the `dist` folder (e.g. via the `gh-pages` package).
