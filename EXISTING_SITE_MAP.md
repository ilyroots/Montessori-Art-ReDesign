# Existing Site Map — Montessori Art Website Redesign

## Overview

This document maps every known current URL across the entire Montessori Art ecosystem to its planned new URL. This is the **source of truth** for the content-preserving redesign.

**Rule:** Every old URL must have ONE of these fates:
- **redirect** → replaced by a native new page
- **merge** → content merged into another page
- **retire** → removed (documented with reason)
- **keep-external** → remains on external platform for now

## Core Pages

| Current URL | New URL | Platform | Action | Status | Notes |
|---|---|---|---|---|---|
| `https://montessori-art.com/` | `/` | WordPress | redirect | native-page-built | Homepage redesigned as premium brand hub |
| `https://montessori-art.com/about-2/` | `/about` | WordPress | redirect | mapped | Preserve founder content, editorial redesign |
| `https://montessori-art.com/blog/` | `/blog` | WordPress | redirect | mapped | Preserve posts, categories, slugs for SEO |
| `https://keap.app/contact-us/5358701398091591` | `/newsletter` | Keap | redirect | mapped | Build native page, connect Keap form later |
| `https://montessori-art.com/terms-of-service/` | `/terms-of-service` | WordPress | redirect | mapped | Preserve legal copy |
| `https://montessori-art.com/accessibility-statement/` | `/accessibility` | WordPress | redirect | mapped | Preserve accessibility content |

## Curriculum Pages

| Current URL | New URL | Platform | Action | Status | Notes |
|---|---|---|---|---|---|
| `https://spramani.lpages.co/painting-curriculum-sales-page-/` | `/curriculum/painting` | Leadpages | redirect | native-page-built | Top seller. Native page complete. Fallback URL active. |
| `https://keap.page/hj952/painting-work-art-album.html` | `/curriculum/painting-work` | Keap | redirect | mapped | Keap checkout placeholder needed |
| `https://spramani.lpages.co/drawing-curriculum/` | `/curriculum/drawing` | Leadpages | redirect | mapped | Rebuild with CurriculumSalesPageTemplate |
| `https://spramani.lpages.co/color-theory-curriculum-sales-page/` | `/curriculum/color-theory` | Leadpages | redirect | mapped | Rebuild with CurriculumSalesPageTemplate |
| `https://spramani.lpages.co/clay-modeling-curriculum/` | `/curriculum/clay-modeling` | Leadpages | redirect | mapped | Rebuild with CurriculumSalesPageTemplate |
| `https://spramani.lpages.co/crafting-building-curriculum/` | `/curriculum/crafting-building` | Leadpages | redirect | mapped | Rebuild with CurriculumSalesPageTemplate |

## Training Pages

| Current URL | New URL | Platform | Action | Status | Notes |
|---|---|---|---|---|---|
| `https://keap.page/hj952/homeschooling-art-where-to-start.html` | `/training/homeschooling-art` | Keap | redirect | mapped | TrainingSalesPageTemplate + Keap checkout |
| `https://keap.page/hj952/infant-toddler-webinar.html` | `/training/infant-toddler-art` | Keap | redirect | mapped | TrainingSalesPageTemplate + Keap checkout |
| `https://keap.page/hj952/new-landing-page3.html` | `/training/art-shelf` | Keap | redirect | mapped | TrainingSalesPageTemplate + Keap checkout |
| `https://keap.page/hj952/process-based-video-training.html` | `/training/process-based-art` | Keap | redirect | mapped | TrainingSalesPageTemplate + Keap checkout |
| `https://keap.page/hj952/positive-artful-talk-vide-training.html` | `/training/positive-art-talk` | Keap | redirect | mapped | TrainingSalesPageTemplate + Keap checkout |
| `https://keap.page/hj952/theming-art-the-natural-world.html` | `/training/nature-art` | Keap | redirect | mapped | TrainingSalesPageTemplate + Keap checkout |
| `https://spramani.lpages.co/october-online-training/` | `/training/painting-key-lessons` | Leadpages | redirect | mapped | TrainingSalesPageTemplate + fallback URL |

## Certification Pages

| Current URL | New URL | Platform | Action | Status | Notes |
|---|---|---|---|---|---|
| `https://spramani.lpages.co/arttraining2020-waitlist/` | `/certification` | Leadpages | redirect | native-page-built | Certification page built. Fallback URL active. |
| `https://spramani.lpages.co/artteachingblueprint/` | `/certification/art-teaching-blueprint` | Leadpages | redirect | mapped | CertificationPageTemplate + Keap checkout |

## Free Resources

| Current URL | New URL | Platform | Action | Status | Notes |
|---|---|---|---|---|---|
| `https://spramani.lpages.co/color-mixing-free-video-lesson/` | `/free-resources/color-mixing-video` | Leadpages | redirect | mapped | LeadMagnetPageTemplate + Keap opt-in |
| `https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood` | `/free-resources/storybook-art-video` | Leadpages | redirect | mapped | LeadMagnetPageTemplate + Keap opt-in |
| `https://spramani.lpages.co/phases-of-development-art-project-video-course` | `/free-resources/phases-of-art-development` | Leadpages | redirect | mapped | LeadMagnetPageTemplate + Keap opt-in |

## Books & Store

| Current URL | New URL | Platform | Action | Status | Notes |
|---|---|---|---|---|---|
| `https://spramani.lpages.co/all-my-books/` | `/bookstore` | Leadpages | redirect | mapped | ProductCollectionTemplate + fallback URLs |
| `https://atosb-raxtf.volusion.store/` | `/art-supplies` | Volusion | redirect | mapped | Native page + Volusion checkout links |

## Domains

| Domain | Plan |
|---|---|
| `montessori-art.com` | Master domain — all traffic consolidates here |
| `ecokidsart.com` | 301 redirect to `montessori-art.com` |
| `spramani.com` | 301 redirect to `montessori-art.com/about` |
| `artteachingblueprint.com` | 301 redirect to `montessori-art.com/certification` |
| `nature-of-art-kids.com` | 301 redirect to `montessori-art.com` |

## Integration Status Legend

- **mapped** — URL mapping documented, native page not yet built
- **native-page-built** — Native replacement page exists
- **redirect-implemented** — 301 redirect active
- **integration-connected** — Forms/checkout/analytics connected
- **tested** — End-to-end tested
- **live** — Fully launched and monitored
