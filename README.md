# CV

My portfolio and CV website.

**Live:** [czenturion.github.io/cv](https://czenturion.github.io/cv/)

## Highlights

- 3D tech stack carousel built with CSS transforms: it spins on its own and can be dragged with a mouse or finger. The animation runs on `requestAnimationFrame` and refs, without React re-renders, and respects `prefers-reduced-motion`
- Responsive layout with a burger menu on mobile
- All content (profile, stack, contacts) lives in `src/data`, separate from components
- CI on every push: lint, format check and build. Deploy to GitHub Pages from `main`

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, oxlint, Prettier, GitHub Actions

## Run locally

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build         # type check and production build
npm run lint          # oxlint
npm run format:check  # Prettier
```

## Project structure

```
src/
├── components/
│   ├── sections/   # About, TechStack, SoftSkills, Contact
│   └── ui/         # Card, ButtonLink, icons
├── data/           # profile, stack, contacts
└── index.css       # Tailwind theme: colors, fonts, shadows
```
