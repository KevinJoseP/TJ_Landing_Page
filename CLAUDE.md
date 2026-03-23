# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for TJ Distributors, a kitchenware distribution company in Kerala, India. Pure HTML/CSS/JS with no build tools, bundler, or package manager. Deployed via GitHub Pages.

## Development

Open `index.html` directly in a browser to preview. No build step or dev server required.

## Architecture

**Pages:** Three standalone HTML pages sharing the same CSS and JS:
- `index.html` — Home page (hero, "Why TJ" features, mission story, product carousel, footer)
- `founders.html` — Team members page (card grid layout)
- `gallery.html` — Photo/video gallery (CSS grid with featured first item)

All pages share a unified `<nav class="navbar">` (glassmorphism on scroll), a common `<footer>` with contact info and Google Maps embed, and load `src/index.js`.

**Design System (`styleSheet.css`):** Dark luxury theme using CSS custom properties defined in `:root`. Key tokens: `--bg-primary` (near-black), `--accent` (warm gold #c9a96e), `--text-primary` (warm white). Typography uses Playfair Display (headings) + Inter (body) from Google Fonts. Mobile breakpoint at `640px` with a full-screen overlay mobile menu; tablet breakpoint at `960px`.

**Animation System:** Scroll-triggered reveals use a single `IntersectionObserver` in JS. Add class `reveal` to any element; optionally set `data-delay="100"` through `data-delay="600"` for stagger. The observer adds `.active` to trigger the CSS transition. Hero elements use CSS `@keyframes fadeUp` with `animation-delay` for the load sequence.

**JavaScript (`src/index.js`):** Handles four concerns: (1) navbar glass effect on scroll (only on pages with `#hero`), (2) hamburger mobile menu toggle, (3) scroll reveal observer for `.reveal` elements, (4) product carousel infinite scroll via DOM cloning.

**Inner pages** (`founders.html`, `gallery.html`) start with `class="navbar scrolled"` since they have no hero section — the nav is always solid.

**Images (`images/`):** All assets — logos, photos, backgrounds, SVG icons, and a video. A `72ppi/` subdirectory has alternate resolution assets.
