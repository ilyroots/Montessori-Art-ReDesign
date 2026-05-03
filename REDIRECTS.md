# Redirects — Montessori Art Website Redesign

## Legacy URL Mapping

All old URLs from Leadpages, Keap, and other platforms should 301 redirect to the new native pages.

### Leadpages → New Site

| Old URL | New URL | Platform | Status | Priority | Notes |
|---|---|---|---|---|---|
| `https://spramani.lpages.co/all-my-books/` | `/bookstore` | Leadpages | planned | high | Books landing |
| `https://spramani.lpages.co/painting-curriculum-sales-page-/` | `/curriculum/painting` | Leadpages | planned | high | Top curriculum page |
| `https://spramani.lpages.co/drawing-curriculum/` | `/curriculum/drawing` | Leadpages | planned | high | Curriculum |
| `https://spramani.lpages.co/color-theory-curriculum-sales-page/` | `/curriculum/color-theory` | Leadpages | planned | high | Curriculum |
| `https://spramani.lpages.co/clay-modeling-curriculum/` | `/curriculum/clay-modeling` | Leadpages | planned | high | Curriculum |
| `https://spramani.lpages.co/arttraining2020-waitlist/` | `/certification` | Leadpages | planned | high | Certification interest |
| `https://spramani.lpages.co/artteachingblueprint/` | `/certification/art-teaching-blueprint` | Leadpages | planned | high | Certification detail |

### Keap → New Site

| Old URL | New URL | Platform | Status | Priority | Notes |
|---|---|---|---|---|---|
| `https://keap.page/hj952/homeschooling-art-where-to-start.html` | `/training/homeschooling-art` | Keap | planned | high | Training |
| `https://keap.page/hj952/infant-toddler-webinar.html` | `/training/infant-toddler-art` | Keap | planned | high | Training |
| `https://keap.page/hj952/new-landing-page3.html` | `/training/art-shelf` | Keap | planned | high | Training |
| `https://keap.page/hj952/process-based-video-training.html` | `/training/process-based-art` | Keap | planned | high | Training |
| `https://keap.page/hj952/positive-artful-talk-vide-training.html` | `/training/positive-art-talk` | Keap | planned | high | Training |
| `https://keap.page/hj952/theming-art-the-natural-world.html` | `/training/nature-art` | Keap | planned | high | Training |

### Free Resources → New Site

| Old URL | New URL | Platform | Status | Priority | Notes |
|---|---|---|---|---|---|
| `https://spramani.lpages.co/color-mixing-free-video-lesson/` | `/free-resources/color-mixing-video` | Leadpages | planned | high | Lead magnet |
| `https://spramani.lpages.co/phases-of-development-art-project-video-course` | `/free-resources/phases-of-art-development` | Leadpages | planned | high | Lead magnet |
| `https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood` | `/free-resources/storybook-art-video` | Leadpages | planned | high | Lead magnet |

### Domain Redirects (Planned)

| Old Domain | Redirect To | Type | Status |
|---|---|---|---|
| `ecokidsart.com` | `montessori-art.com` | 301 | planned |
| `spramani.com` | `montessori-art.com/about` or `/` | 301 | planned |
| `artteachingblueprint.com` | `montessori-art.com/certification` | 301 | planned |
| `nature-of-art-kids.com` | `montessori-art.com` | 301 | planned |

## Implementation

Redirects are configured in:
- `src/config/redirects.ts` — redirect mapping data
- `src/lib/redirects.ts` — redirect logic (Next.js middleware or config)
- `next.config.ts` — static redirects for simple cases

## Notes

- Preserve query parameters where possible (UTMs, tracking).
- Test every redirect after launch.
- Update `legacyUrls.ts` when new old URLs are discovered.
