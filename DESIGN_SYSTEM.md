# Design System — Nature of Art® Website Redesign

> **Brand:** Nature of Art® for Kids  
> **Direction:** Premium Montessori art studio. Clean, bright, warm, artistic, and editorial.  
> **Last updated:** 2026-05-02

---

## Brand Concept

**"The Modern Montessori Art Atelier."**

Nature of Art® provides art pedagogy for the Montessori environment. The design should feel like a high-end creative studio built an art education platform — beautiful enough to win design attention, clear enough to sell curriculum and certification, and readable enough for parents and teachers on any device.

The brand identity centers on the Nature of Art® logo: a bee with honeycomb hexagons in bee yellow, creative pink, and kids blue. These colors are used as tasteful creative accents against a dominant warm white and ivory backdrop.

---

## Colors

### Dominant Palette (80% of the site)

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Paper White | `#FAF7EF` | `bg-ivory` | Primary page backgrounds |
| Pure White | `#FFFFFF` | `bg-paper` | Cards, overlays, navbar |
| Soft Ivory | `#F4EEDC` | `bg-canvas` | Alternate section backgrounds |
| Warm Canvas | `#EDE6D6` | `bg-canvas-warm` | Texture layers, subtle fills |

### Text Palette

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Ink Black | `#1C1B18` | `text-ink` | Primary headings, logo text, footer |
| Charcoal | `#3D3A34` | `text-charcoal` | Body text, secondary headings |
| Muted | `#6B655C` | `text-muted` | Captions, meta, placeholders |

### Accent Palette (used sparingly as art-material highlights)

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Honey / Ochre | `#D89A27` | `text-honey` `bg-honey` | Primary warm accent, CTAs, links, hover states |
| Bee Yellow | `#F2D300` | `text-bee-yellow` `bg-bee-yellow` | Highlights, badges, trust accents, dark-section CTAs |
| Earth Brown | `#8A5528` | `text-earth-brown` `bg-earth-brown` | Organic details, borders, hover accents |
| Creative Pink | `#E91E8F` | `text-creative-pink` `bg-creative-pink` | Energetic accent, emphasis, playful moments |
| Kids Blue | `#44C9D4` | `text-kids-blue` `bg-kids-blue` | Secondary accents, info cards, free resource labels |
| Sage | `#A7B89A` | `text-sage` `bg-sage` | Success states, natural balance, subtle labels |

### Soft Variants (backgrounds, badges, hover states)

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Honey Soft | `#F5E6CC` | `bg-honey-soft` | Subtle honey backgrounds |
| Bee Yellow Soft | `#FEF6B8` | `bg-bee-yellow-soft` | Yellow tint backgrounds |
| Creative Pink Soft | `#FCE0F0` | `bg-creative-pink-soft` | Pink tint backgrounds |
| Kids Blue Soft | `#D8F5F7` | `bg-kids-blue-soft` | Blue tint backgrounds |
| Earth Brown Soft | `#E8D5C0` | `bg-earth-brown-soft` | Warm brown backgrounds |
| Sage Soft | `#E3EBDE` | `bg-sage-soft` | Green tint backgrounds |

### Functional

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Linen | `#E5DDD0` | `border-linen` | Borders, dividers |
| Linen Dark | `#D5CFC7` | `border-linen-dark` | Stronger borders |

### Color Usage Rules

1. **Dominant:** Paper white and ivory should cover 80%+ of the site.
2. **Text:** Ink black and charcoal for all text. Never use bright accent colors for body copy.
3. **Primary accent:** Honey/ochre for links, hover states, and warm emphasis.
4. **Bright accents:** Bee yellow, creative pink, kids blue should feel like art-material swatches — small, intentional, and playful.
5. **Dark sections:** Use ink black (`bg-ink`) for premium moments (certification, footer) with white text and bee yellow accents.
6. **Do not overuse bright colors.** The site should not feel like a rainbow daycare website.

---

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
| Display | 40px | 80px | 1.05 | -0.02em | Hero headlines |
| H1 | 32px | 56px | 1.1 | -0.02em | Page titles |
| H2 | 28px | 48px | 1.15 | -0.01em | Section headings |
| H3 | 22px | 32px | 1.2 | -0.01em | Subsection headings |
| H4 | 18px | 24px | 1.3 | 0 | Card titles, labels |
| Body Large | 18px | 20px | 1.6 | 0 | Lead paragraphs |
| Body | 16px | 18px | 1.65 | 0 | Standard body |
| Body Small | 14px | 16px | 1.5 | 0.01em | Captions, meta |
| Overline | 12px | 13px | 1.4 | 0.08em | Labels, categories (uppercase) |
| Annotation | 14px | 16px | 1.4 | 0.02em | Handwritten notes |

---

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

---

## Buttons

### Primary Button

- Background: Ink Black (`#1C1B18`)
- Text: Paper White
- Padding: 14px 28px (mobile), 16px 32px (desktop)
- Border radius: 8px
- Font: Inter 600
- Hover: Charcoal (`#3D3A34`), subtle scale(1.02)

### Secondary Button

- Background: transparent
- Border: 1px solid Ink Black
- Text: Ink Black
- Padding: 14px 28px
- Border radius: 8px
- Hover: Ink Black background, white text

### Accent Button (occasional emphasis)

- Background: Creative Pink (`#E91E8F`)
- Text: White
- Hover: darken 10%
- Use sparingly for high-emphasis moments only

### Dark Section Primary

- Background: Bee Yellow (`#F2D300`)
- Text: Ink Black
- Hover: lighten 10%

---

## Logo

### Asset

- **File:** `/public/brand/nature-of-art-logo.webp`
- **Alt text:** "Nature of Art® for Kids"
- **Background:** Transparent

### Usage Rules

1. Use the full logo in the navbar on desktop.
2. On mobile, the logo scales down proportionally.
3. Keep generous whitespace around the logo (min 16px).
4. Do not stretch, recolor, distort, or add drop shadows.
5. Do not place on busy textures.
6. If a simplified wordmark is needed, use: "Nature of Art®"

### Component

```tsx
<Logo variant="full" size="md" theme="light" linked />
```

- `variant`: `full` | `wordmark` | `iconOnly`
- `size`: `sm` | `md` | `lg`
- `theme`: `light` | `dark`
- `linked`: wraps in `<Link href="/">`

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| Card | `0 4px 24px rgba(28,27,24,0.05)` | Default card shadow |
| Card Hover | `0 8px 32px rgba(28,27,24,0.09)` | Card hover state |
| Soft | `0 2px 12px rgba(28,27,24,0.04)` | Subtle elevation |
| Glow Yellow | `0 0 20px rgba(242,211,0,0.25)` | Bee yellow hover glow |
| Glow Pink | `0 0 20px rgba(233,30,143,0.18)` | Creative pink hover glow |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| Button | 8px | All buttons, inputs |
| Card Small | 12px | Small cards, badges |
| Card | 16px | Standard cards, images |

---

## Visual Motifs

Use these subtly throughout the design:

- **Hexagon / honeycomb shapes** — inspired by the logo, used as background textures or small icons
- **Small color swatches** — circular dots in bee yellow, creative pink, kids blue
- **Soft organic blocks** — rounded rectangles in warm accent colors
- **Paper cutout shapes** — layered rectangles with subtle rotation
- **Art-material dots** — tiny circles suggesting paint or clay

Do not make the entire site bee-themed. The bee/honeycomb should be a subtle brand motif, not a gimmick.

---

## Accessibility

- Maintain high contrast ratios (WCAG AA minimum).
- Do not place bright accent text (yellow, pink, cyan) on light backgrounds for body copy.
- Use ink black or charcoal for all long-form text.
- Bright colors should be limited to accents, badges, and small UI elements.
- Respect `prefers-reduced-motion` (handled in `globals.css`).
- Focus states: 2px honey outline with 2px offset.
- Logo alt text: "Nature of Art® for Kids"

---

## Responsive Principles

- **Desktop:** Full editorial layout, floating layers, hover effects, honeycomb textures allowed.
- **Tablet:** Adjusted spacing, 2-column grids where appropriate.
- **Mobile:** Single column, stacked layouts, no decorative motion, conversion-focused.
- **Never** let decorative elements interfere with readability or tap targets on mobile.

---

## Component Color Mapping

| Component | Primary Color | Accent Color | Notes |
|---|---|---|---|
| Navbar | `bg-paper` white | `text-honey` hover | Logo left, nav right |
| Footer | `bg-ink` dark | `text-bee-yellow` links | Logo + columns |
| Hero | `bg-ivory` | `text-honey` accent word | Floating collage |
| Dark Hero | `bg-ink` | `text-bee-yellow` accent | Certification pages |
| Cards | `bg-paper` | `text-honey` CTA | Shadow on hover |
| CTAs | `bg-ink` | — | Primary action |
| Badges | `bg-bee-yellow` | `text-ink` | Stats, trust signals |
| Forms | `border-linen` | `focus:border-honey` | Clean, accessible |
| Free Resources | `bg-kids-blue-soft` | `text-kids-blue` | Playful but clean |
| Certification | `bg-ink` / `bg-ivory` | `text-bee-yellow` | Premium, restrained |
