# Designer Studio

A company portfolio website for a design & development studio. It ships in both English and Arabic (with full right-to-left layout), supports light and dark themes, and comes with a hand-built SVG illustration library so the site always looks sharp without pulling in heavy image assets.

## What's inside

The site is a multi-page React app (home, about, services, projects, contact) with a shared layout. Under the hood:

- **React 19** + **Vite 8** for a fast, modern build toolchain
- **Tailwind CSS 4** for utility-first styling
- **Framer Motion** for smooth, scroll-triggered animations (with `prefers-reduced-motion` respected)
- **Redux Toolkit** for app state — theme, language, and the contact form
- **i18next** for translations — the whole site is available in English and Arabic, and Arabic flips the layout to RTL with the Cairo font
- **Lucide React** for icons, plus our own SVG illustration set

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Lint (oxlint)
npm run lint

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project structure

```
src/
├── App.jsx                    — Routes + theme/language effect setup
├── main.jsx                   — Entry point (wires up Redux Provider + i18n)
├── pages/                     — One page per route
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── ProjectsPage.jsx
│   └── ContactPage.jsx
├── components/
│   ├── layout/                — Navbar, Footer, shared Layout
│   ├── sections/              — Hero, About, Services, Projects,
│   │                            WhyChooseUs, Testimonials, CTA, Contact, LogoCloud
│   ├── effects/               — ThemeEffect, LanguageEffect, SiteBackground
│   ├── illustrations/         — Custom SVG components (floating shapes,
│   │                            blobs, patterns, line icons, tech scenes)
│   └── ui/                    — Logo, ImageWithFallback
├── redux/
│   ├── store.js               — Redux store
│   └── slices/                — themeSlice, languageSlice, contactSlice
├── i18n/
│   └── index.js               — i18next configuration
├── locales/                   — en.js and ar.js translation files
└── styles/                    — globals.css (Tailwind theme) + shared style helpers
```

## Notable features

- **Bilingual:** full English/Arabic translations with automatic RTL switching when Arabic is selected (Arabic uses the Cairo typeface, Latin uses Poppins)
- **Light & dark themes:** saved to localStorage and applied globally without a flash on load
- **Contact form:** real form state through Redux with validation, loading, and a success view
- **Accessible:** skip-to-content link, ARIA labels, keyboard-friendly navigation, reduced-motion support
- **Custom SVG illustrations:** every decorative shape, blob, and pattern on the page is a hand-drawn inline SVG that follows the theme's accent color — no external images for decoration
- **Responsive** layout that holds up from mobile to large desktop screens

## Notes

Image content (team photos, project previews, the CTA background) comes from Unsplash and Pexels, both free for commercial use.
