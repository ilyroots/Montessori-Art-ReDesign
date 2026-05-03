# Montessori Art / Nature of Art — Website Redesign

A premium, modern, creative, art-directed, high-converting custom website for Spramani Elaun and the Nature of Art® brand.

## Project Purpose

Consolidate a fragmented ecosystem currently spread across WordPress, Bluehost, Leadpages, Keap, Volusion/storefront pages, and multiple domains into a single, cohesive, design-forward website on `https://montessori-art.com/`.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion (tasteful, conversion-supporting motion only)
- **Icons:** Lucide React
- **Content:** Markdown/MDX (CMS-ready structure for later migration)
- **Deployment:** Vercel (planned)

## Project Structure

```
/src
  /app                 — Next.js App Router pages
  /components
    /forms             — Form components (newsletter, contact, lead magnet)
    /commerce          — Buy buttons, product cards, storefront links
    /layout            — Navigation, footer, layout shells
    /sections          — Reusable page sections (hero, FAQ, testimonials, method)
    /blog              — Blog-specific components (callouts, TOC, author bio)
  /config              — Central configuration files
  /lib                 — Utility libraries (analytics, keap, ecommerce, seo, redirects)
  /styles              — Global CSS, design tokens
  /content             — Markdown/MDX content (blog, offers, pages)
```

## Setup Instructions

1. Ensure Node.js 20+ is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.local.example` to `.env.local` and fill in real values when available.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Purpose | Status |
|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 tracking ID | placeholder |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel tracking ID | placeholder |
| `NEXT_PUBLIC_KEAP_API_KEY` | Keap API key (never commit) | placeholder |
| `NEXT_PUBLIC_STORE_URL` | Current store URL (Volusion or future Shopify) | placeholder |
| `NEXT_PUBLIC_CHECKOUT_URL` | Default checkout URL | placeholder |

**Rule:** Never commit real API keys, secrets, or credentials. Use `.env.local` only.

## Important Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment Notes

- Deploy via Vercel connected to GitHub repo.
- Environment variables must be configured in Vercel dashboard.
- All form submissions currently use placeholder behavior until Keap/CRM credentials are added.
- All buy buttons use placeholder/fallback URLs until store integration is complete.

## Design Principles

- **Premium, not corporate.** Warm art-atelier energy over generic e-learning.
- **Creative motion supports conversion.** No scroll hijacking, no blocking animations.
- **Mobile-first readability.** Desktop can be expressive; mobile must be crystal clear.
- **Integration-ready.** All external systems abstracted into config + components.

## Current Prototype Pages

1. **Homepage (`/`)** — Brand manifesto, audience paths, featured offers.
2. **Painting Curriculum (`/curriculum/painting`)** — Curriculum sales page template.
3. **Certification (`/certification`)** — Premium certification landing page.

## Documentation

- `PROJECT_PLAN.md` — Goals, phases, risks, next steps
- `SITEMAP.md` — Planned URLs, templates, integrations
- `INTEGRATIONS.md` — Keap, store, analytics placeholder plan
- `REDIRECTS.md` — Legacy URL mapping
- `DESIGN_SYSTEM.md` — Colors, typography, spacing, motion rules
- `CONTENT_INVENTORY.md` — Existing domains, pages, offers
- `KEAP_INVENTORY.md` — Keap asset mapping (placeholder)
- `LAUNCH_CHECKLIST.md` — Pre-launch testing checklist
