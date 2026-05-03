export interface PriceVariant {
  format: string;
  price: string;
  ctaLabel: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  /** Primary display price (usually paperback) */
  price: string;
  /** Dual pricing variants (paperback + digital) */
  priceVariants?: PriceVariant[];
  originalPrice?: string;
  href: string;
  category: "curriculum" | "training" | "certification" | "book" | "art-supplies";
  sku?: string;
  image?: string;
  badge?: string;
  features?: string[];
  ageRange?: string;
  format?: string;
  /** Support email for this product */
  contactEmail?: string;
  /** Refund policy text */
  refundPolicy?: string;
  /** Science Art Method™ disclaimer */
  disclaimer?: string;
}

export const products: Product[] = [
  {
    id: "painting-curriculum",
    title: "Kids Painting",
    description:
      "A comprehensive painting curriculum with 57 painting studio experiences organized by increasing brushstroke and material complexity. A Science Art Method™ Painting Studio Application By Nature of Art®.",
    price: "$155.00",
    priceVariants: [
      { format: "Paperback", price: "$155.00", ctaLabel: "Buy Paperback Now $155.00" },
      { format: "Digital PDF", price: "$97.00", ctaLabel: "Buy Digital Now $97.00" },
    ],
    href: "/curriculum/painting",
    category: "curriculum",
    sku: "NOA-PAINT-001",
    badge: "Most Popular",
    features: [
      "57 painting studio experiences",
      "Spiral-bound printed book OR digital PDF",
      "Organized scope and sequence",
      "Materials lists with photo examples",
      "Art educator support via email",
    ],
    ageRange: "3–12 years",
    format: "Paperback or Digital PDF",
    contactEmail: "Info@Spramani.com",
    refundPolicy: "30-day satisfaction guarantee for printed version only. Digital curriculum cannot be refunded.",
    disclaimer: "Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™.",
  },
  {
    id: "drawing-curriculum",
    title: "Drawing Curriculum",
    description:
      "Structured drawing studio experiences organized by increasing material and skill complexity. Available in Early Childhood (16 studios) and Elementary (47 studios) editions.",
    price: "$155.00",
    priceVariants: [
      { format: "Early Childhood Paperback", price: "$135.00", ctaLabel: "Buy Early Childhood Paperback $135.00" },
      { format: "Early Childhood Digital", price: "$72.00", ctaLabel: "Buy Early Childhood Digital $72.00" },
      { format: "Elementary Paperback", price: "$155.00", ctaLabel: "Buy Elementary Paperback $155.00" },
      { format: "Elementary Digital", price: "$97.00", ctaLabel: "Buy Elementary Digital $97.00" },
    ],
    href: "/curriculum/drawing",
    category: "curriculum",
    sku: "NOA-DRAW-001",
    features: [
      "16–47 studio experiences (by edition)",
      "Paperback OR digital PDF",
      "Materials list",
      "Designed approximately for ages 3–12",
      "Free U.S. shipping",
    ],
    ageRange: "3–12 years",
    format: "Paperback or Digital PDF",
    contactEmail: "Info@Spramani.com",
    refundPolicy: "30-day satisfaction guarantee for printed version only. Digital curriculum cannot be refunded.",
    disclaimer: "Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™.",
  },
  {
    id: "color-theory-curriculum",
    title: "Kids Color Theory",
    description:
      "37 sequential color exploration lessons/experiences with scope and sequence. Helps children mix independently and build foundational color theory skills.",
    price: "$155.00",
    priceVariants: [
      { format: "Paperback", price: "$155.00", ctaLabel: "Buy Now $155.00" },
      { format: "Digital Download", price: "$97.00", ctaLabel: "Buy Now $97.00" },
    ],
    href: "/curriculum/color-theory",
    category: "curriculum",
    sku: "NOA-COLOR-001",
    features: [
      "37 color exploration experiences",
      "Spiral-bound printed book OR digital PDF",
      "Organized scope and sequence",
      "Materials lists",
      "Aligned with Elements and Principles of Design",
      "Aligned with national/international core arts standards",
    ],
    ageRange: "3–12 years",
    format: "Paperback or Digital PDF",
    contactEmail: "Info@Spramani.com",
    refundPolicy: "30-day satisfaction guarantee for printed version only. Digital curriculum cannot be refunded.",
    disclaimer: "Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™.",
  },
  {
    id: "clay-modeling-curriculum",
    title: "Kids Clay Modeling",
    description:
      "Structured curriculum with 29 clay studio experiences organized by increasing material handling and sculptural complexity.",
    price: "$145.00",
    priceVariants: [
      { format: "Paperback", price: "$145.00", ctaLabel: "Buy Now" },
      { format: "Digital Copy", price: "$97.00", ctaLabel: "Buy Now" },
    ],
    href: "/curriculum/clay-modeling",
    category: "curriculum",
    sku: "NOA-CLAY-001",
    features: [
      "29 clay studio experiences",
      "Spiral-bound printed book OR digital PDF",
      "Organized scope and sequence",
      "Materials lists",
      "80% use easy-to-find modeling clay",
      "20% recommend earth pottery clay (air-dry substitute acceptable)",
    ],
    ageRange: "3–12 years",
    format: "Paperback or Digital PDF",
    contactEmail: "Info@Spramani.com",
    refundPolicy: "30-day satisfaction guarantee for printed version only. Digital curriculum cannot be refunded.",
    disclaimer: "Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™.",
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
