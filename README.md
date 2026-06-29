# xy.com — Smart Electric Scooters & Battery Swapping

A futuristic, Gogoro-style marketing site for an electric-scooter and battery-swap
business (built for a Ghana startup). Built with React + Vite, React Router and
Framer Motion.

## Pages

- **Home** (`/`) — full-bleed hero, feature highlights, performance showcase, how
  battery swapping works, the line-up, rider reviews, CTA.
- **Scooters** (`/scooters`) — filterable product line-up (City / Performance /
  Business / Adventure).
- **Battery Swap** (`/network`) — the GoStation swap network, coverage and stats.
- **About** (`/about`) — story, values, stats and team.
- **Contact** (`/contact`) — test-ride **appointment form** with validation +
  success state, plus client reviews.

## Tech

- React 19, React Router 7
- Vite 8 (dev server + build)
- Framer Motion (hero/scroll animations)
- Hand-written CSS with custom properties (Gogoro-style lime/black theme)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build
npm run preview
```

## Notes

- The brand name (`xy.com`), copy, prices and stats are placeholders — edit
  `src/data.js`, `src/components/Navbar.jsx` and `src/components/Footer.jsx`.
- Product photos in `public/img/` are **stock placeholders**. Replace them with
  your real scooter product photography (keep the same filenames, or update the
  paths in `src/data.js`).
- The appointment form is **front-end only** — it validates and confirms but does
  not send anywhere yet. Wire it to email or a backend when ready.
