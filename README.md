# Montessori Art / Nature of Art — Website Redesign

A premium, modern, creative, art-directed, high-converting custom website redesign for Spramani Elaun and the Nature of Art® brand.

**This is a content-preserving redesign.** The current live websites are the source of truth. We are redesigning the public-facing experience while preserving the existing business structure, offers, content paths, and sales logic.

## Current Ecosystem Being Consolidated

- `https://montessori-art.com/` (WordPress / Bluehost)
- `http://ecokidsart.com/` (legacy domain)
- `https://spramani.com/` (author domain)
- `http://artteachingblueprint.com/` (certification domain)
- `https://spramani.lpages.co/` (Leadpages landing pages)
- `https://keap.page/` and `https://keap.app/` (CRM, forms, checkout)
- `https://atosb-raxtf.volusion.store/` (storefront)

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion (scroll reveals, staggered animations)
- **Icons:** Lucide React
- **Content:** Config-driven templates (CMS-ready for later migration)
- **Deployment:** Vercel (planned)

## Project Structure

```
/src
  /app                 — Next.js App Router pages
    /api/keap          — Secure server-side Keap API route
  /components
    /motion            — ScrollReveal, StaggerContainer animation wrappers
    /templates         — Reusable page templates (CurriculumSales, Certification)
    /forms             — NewsletterSignup, LeadMagnetForm, ContactForm
    /commerce          — BuyButton, ProductCard, ProductCTA, StorefrontLink
    /layout            — Navbar, Footer
    /sections          — ArtDirectedHero, CreativeOfferGrid, MethodProcessSection, etc.
    /blog              — BlogCallout, RelatedOfferCTA
  /config              — Central configuration files
    existingSiteMap.ts — Full old→new URL mapping with migration metadata
    integrations.ts    — Keap, store, analytics config (all placeholders)
    redirects.ts       — Redirect mapping data
    legacyUrls.ts      — Legacy URL inventory
    products.ts        — Product catalog with SKUs
    offers.ts          — Offers, audience cards
    siteNavigation.ts  — Main nav, footer nav
    blogCategories.ts  — Blog category definitions
  /lib                 — Utility libraries
    analytics.ts       — Event tracking abstraction
    keap.ts            — Client-side Keap form submission (calls /api/keap)
    ecommerce.ts       — Checkout URL resolver
    redirects.ts       — Redirect lookup utilities
    seo.ts             — Metadata factory
  /styles              — Global CSS, design tokens
  /content             — Markdown/MDX content (future)
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
| `KEAP_API_KEY` | Keap API key (server-only, never public) | placeholder |
| `KEAP_ENABLED` | Master switch for Keap integration | `false` |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 tracking ID | placeholder |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel tracking ID | placeholder |
| `NEXT_PUBLIC_STORE_URL` | Current store URL (Volusion) | placeholder |
| `NEXT_PUBLIC_CHECKOUT_URL` | Default checkout URL | placeholder |

**Security rule:** `KEAP_API_KEY` is server-only (no `NEXT_PUBLIC_` prefix). It is used exclusively in `src/app/api/keap/route.ts`. Never commit real secrets.

## Important Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Design Principles

- **Premium, not corporate.** Warm art-atelier energy over generic e-learning.
- **Content-preserving.** Current live sites are the source of truth.
- **Integration-ready.** All external systems abstracted into config + components.
- **Creative motion supports conversion.** No scroll hijacking, no blocking animations.
- **Mobile-first readability.** Desktop can be expressive; mobile must be crystal clear.
- **Fallback-safe.** Every CTA works via fallback URL until native integration is connected.

## Prototype Pages

1. **Homepage (`/`)** — Brand manifesto, audience paths, featured offers, method, free resource lead magnet.
2. **Painting Curriculum (`/curriculum/painting`)** — Curriculum sales page using CurriculumSalesPageTemplate.
3. **Certification (`/certification`)** — Premium certification page using CertificationPageTemplate.

## Documentation

- `PROJECT_PLAN.md` — Goals, phases, risks, next steps
- `SITEMAP.md` — Planned URLs, templates, integrations
- `EXISTING_SITE_MAP.md` — Old URL → new URL mapping (source of truth)
- `CONTENT_MIGRATION_PLAN.md` — How content moves from old to new
- `INTEGRATIONS.md` — Keap, store, analytics placeholder plan
- `REDIRECTS.md` — Legacy URL mapping
- `DESIGN_SYSTEM.md` — Colors, typography, spacing, motion rules
- `CONTENT_INVENTORY.md` — Existing domains, pages, offers
- `KEAP_INVENTORY.md` — Keap asset mapping (placeholder)
- `LAUNCH_CHECKLIST.md` — Pre-launch testing checklist
