# CV

My portfolio and CV website.

**Live:** [czenturion.github.io/cv](https://czenturion.github.io/cv/)

## Highlights

- 3D tech stack carousel built with CSS transforms: it spins on its own and can be dragged with a mouse or finger. The animation runs on `requestAnimationFrame` and refs, without React re-renders, and respects `prefers-reduced-motion`
- Project cards with rotating screenshots: on hover with a mouse, automatically on touch screens while the card is visible (`IntersectionObserver`). Logic lives in small custom hooks `useRotatingIndex` and `useInView`
- Responsive layout with a burger menu on mobile
- All content (profile, stack, projects, contacts) lives in `src/data`, separate from components
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
├── assets/         # photo and project screenshots
├── components/
│   ├── sections/   # About, TechStack, Projects, SoftSkills, Contact
│   ├── ui/         # Card, Tag, ButtonLink, icons
│   └── ...         # Header, Footer, ProjectCard
├── data/           # profile, stack, projects, contacts
├── hooks/          # useRotatingIndex, useInView
└── index.css       # Tailwind theme: colors, fonts, shadows
```
