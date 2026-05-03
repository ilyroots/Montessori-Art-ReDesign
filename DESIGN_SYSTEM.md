# Design System — Montessori Art Website Redesign

## Brand Concept

**"The Modern Montessori Art Atelier."**

Nature of Art® provides art pedagogy. Montessori provides the learning environment.

The design should feel like a high-end creative studio built a Montessori art education platform — beautiful enough to win design attention, clear enough to sell curriculum and certification, and readable enough for parents and teachers on any device.

## Colors

### Primary Palette

| Name | Hex | Usage |
|---|---|---|
| Warm Ivory | `#FAF8F5` | Page backgrounds, cards |
| Paper White | `#FFFFFF` | Cards, overlays |
| Raw Canvas | `#F3EDE4` | Section backgrounds, texture layers |
| Clay Terracotta | `#C4705A` | Primary CTAs, accents, links |
| Dried Ochre | `#D4A24A` | Secondary accents, highlights, badges |
| Deep Espresso | `#3D2B1F` | Primary text, headings |
| Soft Charcoal | `#5A524C` | Body text, secondary text |

### Supporting Palette

| Name | Hex | Usage |
|---|---|---|
| Muted Sage | `#8FA68E` | Success states, nature accents, labels |
| Dusty Blue | `#7A9EB8` | Info accents, links hover, tags |
| Soft Red Oxide | `#B85C4F` | Error states, urgency accents |
| Natural Wood | `#C8A97E` | Warm accents, dividers, borders |
| Linen Grey | `#E8E2DA` | Borders, dividers, subtle backgrounds |

### Dark Mode

Not required for launch. All designs assume light, warm backgrounds.

## Typography

### Font Stack

| Role | Font | Weights | Usage |
|---|---|---|---|
| Headings (Serif) | `Playfair Display` or `Cormorant Garamond` | 400, 500, 600, 700 | Editorial headings, hero text, quotes |
| Body (Sans) | `Inter` | 400, 500, 600 | Body text, UI labels, buttons, navigation |
| Accent (Handwritten) | `Caveat` | 400, 500, 700 | Annotations, small handwritten notes, captions |

### Type Scale

| Token | Size (Mobile) | Size (Desktop) | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| Display | 40px | 72px | 1.05 | -0.02em | Hero headlines |
| H1 | 32px | 56px | 1.1 | -0.02em | Page titles |
| H2 | 28px | 44px | 1.15 | -0.01em | Section headings |
| H3 | 22px | 32px | 1.2 | -0.01em | Subsection headings |
| H4 | 18px | 24px | 1.3 | 0 | Card titles, labels |
| Body Large | 18px | 20px | 1.6 | 0 | Lead paragraphs |
| Body | 16px | 18px | 1.65 | 0 | Standard body |
| Body Small | 14px | 16px | 1.5 | 0.01em | Captions, meta |
| Overline | 12px | 13px | 1.4 | 0.08em | Labels, categories (uppercase) |
| Annotation | 14px | 16px | 1.4 | 0.02em | Handwritten notes |

## Spacing

### Base Unit

Base unit: **4px**

### Scale

| Token | Value |
|---|---|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |
| 4xl | 96px |
| 5xl | 128px |

### Section Spacing

- Mobile: 64px–96px between major sections
- Desktop: 96px–160px between major sections

## Buttons

### Primary Button

- Background: Clay Terracotta (`#C4705A`)
- Text: Paper White
- Padding: 14px 28px (mobile), 16px 32px (desktop)
- Border radius: 8px
- Font: Inter 600
- Hover: darken 10%, subtle scale(1.02)

### Secondary Button

- Background: transparent
- Border: 1.5px Deep Espresso
- Text: Deep Espresso
- Padding: 14px 28px
- Border radius: 8px
- Hover: background Deep Espresso, text Paper White

### Ghost Button

- Background: transparent
- Text: Clay Terracotta
- Underline on hover
- Used for text links and subtle CTAs

## Cards

### Product Card

- Background: Paper White
- Border: 1px Linen Grey
- Border radius: 16px
- Shadow: subtle, warm-toned (`0 4px 24px rgba(61,43,31,0.06)`)
- Hover: lift shadow, slight scale

### Content Card

- Background: Warm Ivory or Raw Canvas
- Border radius: 12px
- Padding: 24px–32px
- Used for features, testimonials, process steps

## Motion Rules

### Philosophy

Creative motion should support comprehension and conversion. It should never block reading, accessibility, navigation, or purchasing.

### Allowed Motion

- Soft scroll reveals (fade + translateY)
- Gently floating image cards (subtle Y oscillation)
- Expanding curriculum cards (height animation)
- Subtle parallax on paper texture layers
- Accordion FAQ expansion
- Horizontal swipe galleries (mobile)
- Button hover states (scale, color)
- Page load stagger on hero elements

### Forbidden Motion

- Scroll hijacking
- Hidden navigation
- Excessive loading screens
- Autoplay audio
- Text moving too much to read
- Heavy animation on mobile
- Anything that blocks reading, navigation, buying, or form submission

### Timing

| Context | Duration | Easing |
|---|---|---|
| Hover | 200ms | ease-out |
| Scroll reveal | 600ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Card expand | 400ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Page transition | 300ms | ease-in-out |

## Responsive Rules

### Breakpoints

| Name | Width | Description |
|---|---|---|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Desktop Behavior

- Large hero compositions
- Editorial grids (asymmetrical)
- Horizontal product galleries
- Parallax paper layers
- Oversized typography
- Sticky sales/page sections
- Sticky blog table of contents
- Creative image compositions

### Mobile Behavior

- Stacked sections
- Clear headings
- Large buttons (min 44px touch target)
- Accordions
- Swipeable cards
- Sticky bottom CTA on sales pages
- Collapsible table of contents
- Fast-loading images
- Minimal heavy animation
- Readable font sizes (min 16px body)

## Accessibility Rules

- WCAG 2.1 AA compliance target
- Color contrast ratio minimum 4.5:1 for body text
- Focus states visible on all interactive elements
- Keyboard navigable accordions, menus, galleries
- Alt text on all images
- Semantic HTML structure
- `prefers-reduced-motion` respected
- Form labels and error messages clear
