# Designer Studio

A premium company portfolio website built with React, Tailwind CSS, Framer Motion, and Lucide React.

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool and dev server
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **Lucide React** — Icon library

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

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          — Sticky navigation with mobile menu
│   ├── Hero.jsx            — Landing section with animations
│   ├── LogoCloud.jsx       — Client logos and stats
│   ├── About.jsx           — Company story and team image
│   ├── Services.jsx        — 6 service cards with images
│   ├── Projects.jsx        — Project showcase grid
│   ├── WhyChooseUs.jsx     — Features with sticky layout
│   ├── Testimonials.jsx    — Client testimonials carousel
│   ├── CTA.jsx             — Call to action with video background
│   ├── Contact.jsx         — Contact form with validation
│   ├── Footer.jsx          — Site footer with newsletter
│   └── ImageWithFallback.jsx — Reusable image with error fallback
├── App.jsx                 — Root component
└── index.css               — Tailwind config and global styles
```

## Features

- Responsive design across all devices
- Smooth scroll animations with Framer Motion
- Accessibility: skip-to-content, ARIA labels, keyboard navigation
- Respects `prefers-reduced-motion`
- Mobile hamburger menu with animated transitions
- Contact form with validation, loading, and success states
- Image fallbacks for graceful degradation
- Dark sections with video background
- Optimized production build (~9KB CSS, ~114KB JS gzipped)

## License

All images sourced from Unsplash and Pexels (free commercial use).
