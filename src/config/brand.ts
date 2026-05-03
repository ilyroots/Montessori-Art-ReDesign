// ============================================================
// Brand Configuration — Nature of Art®
// ============================================================
// Single source of truth for brand identity, colors, and assets.
// All visual components should reference this config for consistency.
// ============================================================

export const BRAND = {
  name: "Nature of Art®",
  extendedName: "Nature of Art® for Kids",
  tagline: "Art pedagogy for the Montessori environment",
  positioning:
    "Premium Montessori art studio. Curriculum, certification, and resources for educators who believe children deserve meaningful visual arts education.",

  logo: {
    path: "/brand/nature-of-art-logo.webp",
    altText: "Nature of Art® for Kids",
    wordmarkFallback: "Nature of Art®",
  },

  colors: {
    // Backgrounds (dominant)
    paper: "#FAF7EF",
    ivory: "#F4EEDC",
    canvas: "#EDE6D6",

    // Text (high contrast)
    ink: "#1C1B18",
    charcoal: "#3D3A34",
    muted: "#6B655C",

    // Primary accent — Bee Yellow
    beeYellow: "#F2D300",
    beeYellowSoft: "#FEF6B8",

    // Warm accent — Honey / Ochre
    honey: "#D89A27",
    honeySoft: "#F5E6CC",

    // Earth accent — Wing Brown
    earthBrown: "#8A5528",
    earthBrownSoft: "#E8D5C0",

    // Energetic accent — Creative Pink (magenta)
    creativePink: "#E91E8F",
    creativePinkSoft: "#FCE0F0",

    // Playful accent — Kids Blue (cyan)
    kidsBlue: "#44C9D4",
    kidsBlueSoft: "#D8F5F7",

    // Natural balance — Sage
    sage: "#A7B89A",
    sageSoft: "#E3EBDE",

    // Functional
    white: "#FFFFFF",
    border: "#E5DDD0",
    borderDark: "#D5CFC7",
  },

  cta: {
    primary: {
      label: "Explore Curriculum",
      href: "/curriculum",
    },
    secondary: {
      label: "Get Art Certified",
      href: "/certification",
    },
  },

  social: {
    // Placeholder until verified
    instagram: "",
    facebook: "",
    pinterest: "",
    youtube: "",
  },

  contact: {
    email: "Info@Spramani.com",
  },
} as const;

// Type helpers for strict color keys
export type BrandColor = keyof typeof BRAND.colors;

// Hex access helper
export function brandColor(key: BrandColor): string {
  return BRAND.colors[key];
}
