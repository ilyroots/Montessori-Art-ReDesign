# Responsive QA — Montessori Art Website Redesign

> **Purpose:** Document responsive behavior, mobile constraints, and QA checklist for all breakpoints.  
> **Last updated:** 2026-05-02  
> **Test breakpoints:** 320px, 375px, 414px, 768px, 1024px, 1280px, 1440px

---

## 1. Design Philosophy

### Mobile First, But Desktop Expressive
- **Desktop:** Can use floating layers, editorial typography, asymmetric layouts, hover effects
- **Mobile:** Must be extremely readable and conversion-focused. No decorative motion that delays content.
- **Rule:** If an animation or effect makes the page harder to read or slower to load on mobile, it is removed.

### Breakpoint Strategy
```
< 640px   — Mobile (single column, stacked, large tap targets)
640–1023px — Tablet (2 columns where appropriate, adjusted spacing)
≥ 1024px  — Desktop (full layout, editorial effects, hover states)
```

---

## 2. Component-Level Responsive Rules

### ArtDirectedHero
| Element | Mobile (<640px) | Desktop (≥1024px) |
|---------|-----------------|-------------------|
| Headline | `text-[2.5rem]` (40px), single column | `text-[clamp(2.5rem,5.5vw,5rem)]` |
| Subheadline | `text-base`, max-width relaxed | `text-lg`, max-w-xl |
| Image collage | Hidden or simplified (placeholder only) | Full floating collage with annotation card |
| CTAs | Stacked full-width buttons | Side-by-side with gap |
| Trust badges | Wrap, smaller text | Horizontal row |
| Padding | `py-20` | `py-28 lg:py-36` |

### StickyCTA (Mobile Only)
- **Visibility:** Only shows on screens < 640px (`sm:hidden`)
- **Trigger:** Appears after scrolling 400px
- **Height:** Fixed bottom bar, ~60px tall
- **Z-index:** 40 (below modals, above content)
- **Backdrop:** `bg-paper/95 backdrop-blur-md`
- **Tap target:** Full-width button, min 44px height

### CreativeOfferGrid
| Element | Mobile | Desktop |
|---------|--------|---------|
| Columns | 1 (swipeable feel) | 2 or 3 |
| Number size | `text-5xl` | `text-6xl` |
| Card padding | `p-5` | `p-6` |
| Hover lift | None | `hover:shadow-card-hover` |

### MethodProcessSection
| Element | Mobile | Desktop |
|---------|--------|---------|
| Layout | Single column, stacked | Alternating left/right |
| Step number | `text-4xl` | `text-5xl` |
| Image | Full width, below text | Side-by-side |

### CurriculumSalesPageTemplate
| Element | Mobile | Desktop |
|---------|--------|---------|
| Trust bar | 2x2 grid or stacked | Horizontal row |
| What's included | 1 column | 2–3 columns |
| Who it's for / not for | Stacked | Side-by-side |
| Dual pricing cards | Stacked | 2-column grid |
| Testimonials | Single card visible | Carousel or grid |
| FAQ | Full width accordion | Centered max-w-3xl |

### CertificationPageTemplate
| Element | Mobile | Desktop |
|---------|--------|---------|
| Stats bar | 2x2 grid | 4-column row |
| Module cards | 1 column | 2–3 columns |
| Dark hero | Same, larger padding | Same |

### Forms (Newsletter, Contact, Lead Magnet)
| Element | Mobile | Desktop |
|---------|--------|---------|
| Input + button | Stacked full-width | Inline row |
| Input height | 48px min | 44px min |
| Focus state | 2px terracotta outline | Same |
| Error message | Below input | Below input |

---

## 3. Typography Scale

### Mobile (<640px)
```
H1:  40px / 1.05 line-height / -0.02em tracking
H2:  30px / 1.1 line-height / -0.02em tracking
H3:  20px / 1.2 line-height
Body: 16px / 1.6 line-height
Small: 14px / 1.5 line-height
Caption: 12px / 1.4 line-height
```

### Desktop (≥1024px)
```
H1:  80px / 1.05 line-height / -0.02em tracking
H2:  48–64px / 1.1 line-height / -0.02em tracking
H3:  24px / 1.2 line-height
Body: 16–18px / 1.6 line-height
Small: 14px / 1.5 line-height
Caption: 12px / 1.4 line-height
```

---

## 4. Tap Target Requirements

- **Minimum tap target:** 44×44px (Apple HIG)
- **Preferred tap target:** 48×48px (Material Design)
- **Buttons:** Min-height 44px, generous horizontal padding
- **Links in text:** Underline or clear color distinction
- **Form inputs:** Min-height 48px on mobile

---

## 5. Motion & Animation Rules

### Global
- Respect `prefers-reduced-motion` (handled in `globals.css`)
- No scroll hijacking
- No parallax on mobile

### ScrollReveal
- **Mobile:** Reduced motion — fade only, no translateY (or smaller translate)
- **Desktop:** Full fade-up with 24px translate

### FloatingLayer
- **Mobile:** Disabled
- **Desktop:** Subtle 8px float, 5s cycle

### HoverLift
- **Mobile:** Disabled (no hover on touch)
- **Desktop:** 4px lift + enhanced shadow

### PageTransition
- **Mobile:** Instant or very fast (0.15s)
- **Desktop:** 0.25s fade

---

## 6. QA Checklist per Page

### Homepage (`/`)
- [ ] Hero headline readable at 320px
- [ ] CTA buttons stack on mobile, side-by-side on desktop
- [ ] Audience cards (CreativeOfferGrid) single column on mobile
- [ ] Main offer grid 1→2→3 columns across breakpoints
- [ ] Method section images don't overflow
- [ ] Certification dark section readable
- [ ] Books/supplies grid 1→3 columns
- [ ] Blog cards 1→3 columns
- [ ] Founder portrait doesn't distort
- [ ] Newsletter form inputs stack on mobile
- [ ] StickyCTA does NOT appear on desktop

### Painting Curriculum (`/curriculum/painting`)
- [ ] Hero headline mentions "57 painting studio experiences"
- [ ] Trust bar visible and readable
- [ ] Dual pricing cards stack on mobile
- [ ] What's included grid 1→2→3 columns
- [ ] Who it's for / not for stack on mobile
- [ ] FAQ accordion works on mobile tap
- [ ] Disclaimer and refund policy readable
- [ ] Contact email is tappable (mailto link)
- [ ] StickyCTA appears on mobile
- [ ] No invented stats visible

### Certification (`/certification`)
- [ ] Dark hero readable on all screens
- [ ] Stats bar 2x2 on mobile, 4-col on desktop
- [ ] Module cards 1→2→3 columns
- [ ] Outcomes section stacks on mobile
- [ ] Licensing box readable

### Global
- [ ] Navbar collapses to hamburger on mobile
- [ ] Footer readable and tappable on mobile
- [ ] All images have alt text
- [ ] Focus states visible on keyboard navigation
- [ ] No horizontal scroll at any breakpoint
- [ ] Font sizes never below 12px

---

## 7. Performance Notes

- **Images:** Use Next.js `<Image>` with proper sizing
- **Fonts:** Preload Playfair Display and Inter
- **Motion:** Disable heavy animations on low-power devices
- **CSS:** Tailwind v4 with `@theme inline` — no unused CSS in production

---

## 8. Known Issues / TODO

- [ ] Test StickyCTA z-index against modals
- [ ] Verify ArtDirectedHero image collage doesn't cause layout shift
- [ ] Add mobile-specific image sizes
- [ ] Test form submission flow on actual mobile devices
- [ ] Verify tap targets on smallest screen (320px iPhone SE)
