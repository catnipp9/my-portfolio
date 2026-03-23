# Jamel Hadjirasul — Personal Portfolio

A fully custom personal portfolio site built from scratch, featuring a boot screen animation, smooth scroll-based animations, an interactive project gallery with modal deep-dives, a dynamic skills catalog, and a working contact form. Designed with a dark purple aesthetic and optimized for performance across all screen sizes.

**Live:** https://jamelh.vercel.app

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build/) v6 |
| UI Library | [React](https://react.dev/) v19 |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Animations | [Framer Motion](https://www.framer.com/motion/) v12 |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Plus Jakarta Sans (Google Fonts) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Features

- **Boot screen** — one-time animated intro with circuit visuals, progress bar, and star particles
- **Active nav highlighting** — scroll-position based section detection
- **Project gallery** — card grid with modal deep-dives, image carousel, and tag filters
- **Skills catalog** — 7 tabbed categories with animated skill bubbles
- **Certifications gallery** — expandable award cards with certificate images
- **Internship card** — clickable modal with role details
- **Contact form** — functional contact section with social links and map embed
- **Hover animations** — spring-physics interactions on cards, tags, and badges
- **Fully responsive** — mobile-first layout across all pages

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Skills, Featured Projects, Certifications |
| `/about` | About Me — Story, Quick Facts, Internship, Hobbies |
| `/projects` | All Projects |
| `/awards` | All Awards & Certifications |
| `/contact` | Contact Form & Social Links |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

> Requires Node.js >= 22.12.0
