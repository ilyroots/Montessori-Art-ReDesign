export interface PriceVariant {
  format: string;
  price: string;
  ctaLabel: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  /** Primary display price (usually highest format) */
  price: string;
  /** Dual pricing variants (paperback + digital, or edition variants) */
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
  /** Access period for digital products */
  accessPeriod?: string;
  /** PD/CPD hours if applicable */
  pdHours?: number;
  cpdHours?: number;
}

export const products: Product[] = [
  // ============================================================
  // CURRICULUM
  // ============================================================
  {
    id: "painting-curriculum",
    title: "Kids Painting",
    description:
      "A comprehensive painting curriculum with 57 painting studio experiences organized by increasing brushstroke and material complexity. A Science Art Method™ Painting Studio Application By Nature of Art®.",
    price: "$155.00",
    image: "/images/painting-curriculum.jpg",
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
    id: "painting-work",
    title: "Teaching Painting to Children: An Essential Art Album",
    description:
      "Companion album to Kids Painting with seven key painting lessons in detail, full-color pictures, paint facts, techniques, and featured artist history. Best for elementary grades.",
    price: "$97.00",
    image: "/images/painting-work.jpg",
    priceVariants: [
      { format: "Printed", price: "$97.00", ctaLabel: "Buy Printed $97.00" },
      { format: "Digital", price: "$45.00", ctaLabel: "Buy Digital $45.00" },
    ],
    href: "/curriculum/painting-work",
    category: "curriculum",
    sku: "NOA-PAINT-WORK-001",
    features: [
      "Companion to Kids Painting — Brushstrokes Curriculum",
      "Seven key painting lessons in detail",
      "Full-color pictures throughout",
      "Paint facts and techniques",
      "Featured artist and paint history",
      "Best for elementary grades",
    ],
    ageRange: "Elementary",
    format: "Printed or Digital",
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
    image: "/images/drawing-elementary-curriculum.jpg",
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
    image: "/images/color-theory-curriculum.jpg",
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
    image: "/images/clay-modeling-curriculum.jpg",
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

  // ============================================================
  // TRAINING
  // ============================================================
  {
    id: "homeschooling-art-training",
    title: "The Homeschooling Art Starter",
    description: "A starter video training for homeschool parents who want to bring art into their home education. 3 core videos + 1 bonus Watercolor Joy video.",
    price: "$29.00",
    href: "/training/homeschooling-art",
    category: "training",
    sku: "NOA-TRAIN-HOME-001",
    features: ["3 core videos + 1 bonus", "Sent to your email", "For homeschool parents", "Ages 3–12"],
    accessPeriod: "Videos sent to email",
    contactEmail: "Info@Spramani.com",
    disclaimer: "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators.",
  },
  {
    id: "infant-toddler-webinar",
    title: "Infant & Toddler Webinar",
    description: "Pre-recorded webinar for guides, teachers, and parents on art activities for infants and toddlers. 1 hour.",
    price: "",
    href: "/training/infant-toddler-art",
    category: "training",
    sku: "NOA-TRAIN-IT-001",
    badge: "Pending Price Verification",
    features: ["Appropriate art prompts", "Staging inviting art experiences", "Colorful materials", "Art activities", "Story books to introduce art elements"],
    accessPeriod: "1 year access",
    contactEmail: "Info@Spramani.com",
    disclaimer: "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators.",
  },
  {
    id: "art-shelf-training",
    title: "Learn How To Stage An Art Shelf",
    description: "On-demand video training on how to stage a Montessori art shelf that children actually use. Proprietary Art Shelf System with 11 structures.",
    price: "$45.00",
    href: "/training/art-shelf",
    category: "training",
    sku: "NOA-TRAIN-SHELF-001",
    features: ["Proprietary Art Shelf System", "11 structures to staging an art shelf", "On-demand video", "Professional development available upon request"],
    accessPeriod: "1 year access",
    contactEmail: "Info@Spramani.com",
    disclaimer: "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators.",
  },
  {
    id: "process-based-art-training",
    title: "Process-Based Art Video Training",
    description: "Understand what process-based art is and is not, what part you need to instruct, common misconceptions, and the silent problem agreement between schools and parents.",
    price: "",
    href: "/training/process-based-art",
    category: "training",
    sku: "NOA-TRAIN-PROCESS-001",
    badge: "Pending Price Verification",
    features: ["What process-based art is", "What process-based art is not", "What part you need to instruct", "Common misconceptions", "Silent problem agreement between schools and parents"],
    accessPeriod: "1 year access",
    contactEmail: "Info@Spramani.com",
    disclaimer: "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators.",
  },
  {
    id: "positive-art-talk-training",
    title: "Positive Art Talk",
    description: "Learn positive, constructive ways to talk with children about their art. Great for early childhood and elementary grades.",
    price: "$19.00",
    href: "/training/positive-art-talk",
    category: "training",
    sku: "NOA-TRAIN-TALK-001",
    features: ["Positive artful language", "Great for early childhood and elementary grades"],
    accessPeriod: "Videos sent to email",
    contactEmail: "Info@Spramani.com",
    disclaimer: "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators.",
  },
  {
    id: "painting-key-lessons-training",
    title: "Painting Key Lessons 101",
    description: "Online video course best for primary and elementary teachers, parents, and art instructors. Pre-recorded live video session.",
    price: "$65.00",
    originalPrice: "$197.00",
    href: "/training/painting-key-lessons",
    category: "training",
    sku: "NOA-TRAIN-PAINT-101-001",
    badge: "Limited Time",
    features: ["Pre-recorded live video session", "1.5 PD hours available", "1 year access", "Best for primary and elementary"],
    accessPeriod: "1 year access",
    pdHours: 1.5,
    contactEmail: "Info@Spramani.com",
    disclaimer: "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators.",
  },
  {
    id: "nature-art-training",
    title: "Theme Art & The Natural World",
    description: "Learn to theme art activities around the natural world. 3 pre-recorded videos. 2 hr CPD for Montessori guide/teacher. Includes PDFs, checklists, and book list.",
    price: "$57.00",
    href: "/training/nature-art",
    category: "training",
    sku: "NOA-TRAIN-NATURE-001",
    features: ["3 pre-recorded videos", "2 hr CPD for Montessori guide/teacher", "Includes PDFs, checklists, and book list", "Great for early childhood and elementary grades"],
    accessPeriod: "1 year access",
    cpdHours: 2,
    contactEmail: "Info@Spramani.com",
    disclaimer: "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators.",
  },

  // ============================================================
  // CERTIFICATION
  // ============================================================
  {
    id: "art-teaching-blueprint",
    title: "Art Teaching Blueprint Certification",
    description:
      "The Art Teaching Blueprint™ is a 7-week online professional training program for educators who want to teach visual arts with confidence, sequence, and developmental understanding.",
    price: "$668",
    originalPrice: "$1,499",
    href: "/certification",
    category: "certification",
    sku: "NOA-CERT-001",
    badge: "Professional Certification",
    features: [
      "7-week online professional training",
      "Self-guided / self-paced",
      "Immediate access",
      "Three years of access",
      "60+ professional training videos",
      "Digital PDF workbook",
      "Online email support",
      "Optional: live coaching, practicum, individualized feedback",
      "50 CPD hours",
      "Printed certificate",
    ],
    ageRange: "Educators",
    format: "Online course + certification",
    accessPeriod: "3 years",
    contactEmail: "Info@Spramani.com",
    disclaimer: "Certified facilitators may teach visual arts directly to children. They may not train, certify, or credential other educators. They may not reproduce, rebrand, or present the Science Art Method™ as a school-developed or Montessori-authored system.",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}
