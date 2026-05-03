export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  href: string;
  category: "curriculum" | "training" | "certification" | "book" | "art-supplies";
  sku?: string;
  image?: string;
  badge?: string;
  features?: string[];
  ageRange?: string;
  format?: string;
}

export const products: Product[] = [
  {
    id: "painting-curriculum",
    title: "Painting Curriculum",
    description:
      "A complete, sequenced curriculum for teaching painting in the Montessori environment. From first brushstrokes to color mixing and creative expression.",
    price: "$97",
    href: "/curriculum/painting",
    category: "curriculum",
    sku: "NOA-PAINT-001",
    badge: "Most Popular",
    features: [
      "12 sequenced lessons",
      "Lesson plans & presentations",
      "Material lists",
      "Observation guides",
      "Printable resources",
    ],
    ageRange: "3–12 years",
    format: "Digital download + videos",
  },
  {
    id: "drawing-curriculum",
    title: "Drawing Curriculum",
    description:
      "Developmentally appropriate drawing lessons that build skill and confidence step by step.",
    price: "$97",
    href: "/curriculum/drawing",
    category: "curriculum",
    sku: "NOA-DRAW-001",
    features: [
      "10 sequenced lessons",
      "Drawing technique guides",
      "Material recommendations",
      "Assessment tools",
    ],
    ageRange: "3–12 years",
    format: "Digital download + videos",
  },
  {
    id: "color-theory-curriculum",
    title: "Color Theory Curriculum",
    description:
      "Hands-on color exploration that helps children truly understand hue, value, and mixing.",
    price: "$97",
    href: "/curriculum/color-theory",
    category: "curriculum",
    sku: "NOA-COLOR-001",
    features: [
      "8 color mixing lessons",
      "Color wheel activities",
      "Montessori-aligned presentations",
    ],
    ageRange: "3–12 years",
    format: "Digital download + videos",
  },
  {
    id: "clay-modeling-curriculum",
    title: "Clay Modeling Curriculum",
    description:
      "Introduce three-dimensional art with clay work that develops fine motor skills and spatial reasoning.",
    price: "$97",
    href: "/curriculum/clay-modeling",
    category: "curriculum",
    sku: "NOA-CLAY-001",
    features: [
      "9 clay lessons",
      "Hand-building techniques",
      "Tool introduction sequences",
    ],
    ageRange: "3–12 years",
    format: "Digital download + videos",
  },
  {
    id: "art-teaching-blueprint",
    title: "Art Teaching Blueprint Certification",
    description:
      "Professional certification for educators who want to teach children visual arts with confidence, sequence, and developmental understanding.",
    price: "$497",
    originalPrice: "$697",
    href: "/certification/art-teaching-blueprint",
    category: "certification",
    sku: "NOA-CERT-001",
    badge: "Professional Certification",
    features: [
      "6 comprehensive modules",
      "Video instruction",
      "Downloadable workbooks",
      "Certificate of completion",
      "Ongoing community access",
    ],
    ageRange: "Educators",
    format: "Online course + certification",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}
