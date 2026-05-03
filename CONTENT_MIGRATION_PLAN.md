# Content Migration Plan — Nature of Art® Website Redesign

> **Purpose:** Map every current live page to its new redesigned equivalent.  
> **Source of truth:** Current public-facing URLs.  
> **Last updated:** 2026-05-02

---

## Migration Model

```
Existing public page
→ extracted structured content
→ config/template data
→ active redesigned page
→ fallback external URL until backend integration is verified
```

---

## Top-Level Navigation (Current Public Site)

| Current Label | New Path | Status | Platform |
|---------------|----------|--------|----------|
| Home | `/` | ✅ Native page built | WordPress |
| About | `/about` | ✅ Native page built | WordPress |
| Blog | `/blog` | ⏳ Mapped | WordPress |
| Art Curriculum | `/curriculum` | ✅ Painting built | Leadpages/Keap |
| Video Training | `/training` | ⏳ Mapped | Keap/Leadpages |
| Art Certification | `/certification` | ✅ Native page built | Leadpages |
| Art Books | `/bookstore` | ⏳ Mapped | Leadpages |
| Art Store | `/art-supplies` | ⏳ Mapped | Volusion |
| Newsletter | `/newsletter` | ⏳ Mapped | Keap |
| Terms of Service | `/terms-of-service` | ⏳ Mapped | WordPress |
| Accessibility | `/accessibility` | ⏳ Mapped | WordPress |

---

## Art Curriculum Dropdown

| Current Label | Legacy URL | New Path | Status |
|---------------|------------|----------|--------|
| Painting | `spramani.lpages.co/painting-curriculum-sales-page-/` | `/curriculum/painting` | ✅ Built |
| Painting Work / Montessori Elementary | `keap.page/hj952/painting-work-art-album.html` | `/curriculum/painting-work` | ⏳ Mapped |
| Clay Modeling | `spramani.lpages.co/clay-modeling-curriculum/` | `/curriculum/clay-modeling` | ⏳ Mapped |
| Color Theory | `spramani.lpages.co/color-theory-curriculum-sales-page/` | `/curriculum/color-theory` | ⏳ Mapped |
| Drawing | `spramani.lpages.co/drawing-curriculum/` | `/curriculum/drawing` | ⏳ Mapped |

---

## Video Training Dropdown

| Current Label | Legacy URL | New Path | Status | Price |
|---------------|------------|----------|--------|-------|
| FREE – How to Set-Up One Color Prompt | `spramani.lpages.co/color-mixing-free-video-lesson/` | `/free-resources/color-mixing-video` | ⏳ Mapped | Free |
| FREE – Theme Art With Story Books | `spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood` | `/free-resources/storybook-art-video` | ⏳ Mapped | Free |
| BUY – Homeschooling Art Starter | `keap.page/hj952/homeschooling-art-where-to-start.html` | `/training/homeschooling-art` | ⏳ Mapped | $29.00 |
| VIDEO – Infant & Toddler Art Webinar | `keap.page/hj952/infant-toddler-webinar.html` | `/training/infant-toddler-art` | ⏳ Mapped | Pending |
| FREE – Phases of Art Development | `spramani.lpages.co/phases-of-development-art-project-video-course` | `/free-resources/phases-of-art-development` | ⏳ Mapped | Free |
| BUY – How To Stage An Art Shelf | `keap.page/hj952/new-landing-page3.html` | `/training/art-shelf` | ⏳ Mapped | $45.00 |
| Process-Based Art Video Training | `keap.page/hj952/process-based-video-training.html` | `/training/process-based-art` | ⏳ Mapped | Pending |
| BUY – Positive Art Talk | `keap.page/hj952/positive-artful-talk-vide-training.html` | `/training/positive-art-talk` | ⏳ Mapped | $19.00 |
| BUY – Painting Key Lessons 101 | `spramani.lpages.co/october-online-training/` | `/training/painting-key-lessons` | ⏳ Mapped | $65.00 |
| BUY – Theme Art & The Natural World | `keap.page/hj952/theming-art-the-natural-world.html` | `/training/nature-art` | ⏳ Mapped | $57.00 |

---

## Art Certification Dropdown

| Current Label | Legacy URL | New Path | Status |
|---------------|------------|----------|--------|
| Montessori Art Certification | `spramani.lpages.co/arttraining2020-waitlist/` | `/certification` | ✅ Built |
| Art Teaching Blueprint | `spramani.lpages.co/artteachingblueprint/` | `/certification/art-teaching-blueprint` | ⏳ Mapped |

---

## Blog Posts (Homepage Grid)

| Title | Slug | Status |
|-------|------|--------|
| Easy Drawing Ideas for Young Children | `easy-drawing-ideas-for-young-children` | ⏳ Needs WordPress export |
| Boost Strength with Clay Play | `boost-strength-with-clay-play` | ⏳ Needs WordPress export |
| Clay Modeling Play for Toddlers | `clay-modeling-play-for-toddlers` | ⏳ Needs WordPress export |
| Primary Homeschool Art Curriculum | `primary-homeschool-art-curriculum` | ⏳ Needs WordPress export |

---

## Content Conflicts

See `contentConflicts.md` for tracked discrepancies:
1. Clay Modeling: 27 vs 29 studios
2. Certification pricing: $668/$1,499 vs $699/$1,500
3. Author bio years: pending verification

---

## Next Steps

1. ⏳ Build native pages for all mapped curriculum, training, and free resource URLs
2. ⏳ Obtain WordPress export for full blog migration
3. ⏳ Obtain Keap/Volusion backend access for price/checkout verification
4. ⏳ Resolve tracked content conflicts
5. ⏳ Implement redirect rules for all legacy URLs
6. ⏳ Test all fallback external URLs
