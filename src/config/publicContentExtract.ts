// ============================================================
// Public Content Extract — Montessori Art Website
// ============================================================
// This file contains structured content extracted from publicly
// accessible pages across the existing Montessori Art ecosystem.
//
// SOURCE OF TRUTH: The current live websites are the source of
// truth. No content is invented. If a detail is not visible
// publicly, it is marked as backendVerificationNeeded.
//
// extractionDate: 2026-05-02
// extractionMethod: manual review of public-facing Leadpages URLs
// ============================================================

// ------------------------------------------------------------------
// Shared Disclaimers (appear on all curriculum pages)
// ------------------------------------------------------------------

export const GLOBAL_CURRICULUM_DISCLAIMERS = {
  scienceArtMethod:
    "Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™.",

  refundPolicy:
    "30-day satisfaction guarantee for printed version only. Digital curriculum cannot be refunded.",

  contactEmail: "Info@Spramani.com",
};

// ------------------------------------------------------------------
// Extraction Status Helpers
// ------------------------------------------------------------------

export type VerificationStatus = "verified-public" | "pending-backend";
export type IntegrationStatus = "fallback-external" | "native-page-built" | "integration-connected";
export type MigrationStatus = "public-content-extracted" | "native-page-built" | "redirect-implemented" | "live";

export interface ExtractedPage {
  /** Human-readable title */
  title: string;
  /** Legacy public URL (source of truth) */
  sourceUrl: string;
  /** New redesigned URL */
  newUrl: string;
  /** Platform the old page lives on */
  platform: "Leadpages" | "Keap" | "Volusion" | "WordPress";
  /** Whether content was verified from public page */
  contentVerified: boolean;
  /** Whether pricing needs backend verification */
  pricingVerificationNeeded: boolean;
  /** Fallback external URL until native checkout is mapped */
  fallbackExternalUrl: string;
  /** Current integration status */
  integrationStatus: IntegrationStatus;
  /** Current migration status */
  migrationStatus: MigrationStatus;
  /** Extraction notes */
  notes: string;
}

// ------------------------------------------------------------------
// 1. Painting Curriculum
// ------------------------------------------------------------------

export interface CurriculumExtract extends ExtractedPage {
  subtitle: string;
  summary: string;
  offers: string[];
  features: string[];
  formats: {
    format: string;
    price: string;
    verified: VerificationStatus;
    notes?: string;
  }[];
  ctaLabels: string[];
  disclaimers: string[];
  refundPolicy: string;
  contactEmail: string;
  studioCount: number;
  ageRange?: string;
}

export const paintingCurriculumExtract: CurriculumExtract = {
  title: "Kids Painting",
  sourceUrl: "https://spramani.lpages.co/painting-curriculum-sales-page-/",
  newUrl: "/curriculum/painting",
  platform: "Leadpages",
  contentVerified: true,
  pricingVerificationNeeded: false, // prices clearly visible on public page
  fallbackExternalUrl: "https://spramani.lpages.co/painting-curriculum-sales-page-/",
  integrationStatus: "fallback-external",
  migrationStatus: "public-content-extracted",
  notes:
    "Top-selling curriculum. Public page shows complete pricing and feature list. Checkout URL needs backend verification.",

  subtitle: "A Science Art Method™ Painting Studio Application By Nature of Art®",
  summary:
    "Comprehensive painting curriculum with 57 painting studio experiences organized by increasing brushstroke and material complexity.",
  offers: [
    "Scope and sequence",
    "Prepared lessons",
    "Brushstroke explorations",
    "Material and environment guidance",
    "Standards alignment",
  ],
  features: [
    "Spiral-bound printed book OR digital PDF",
    "57 painting studio experiences",
    "Organized scope and sequence",
    "Materials lists",
    "Photo examples",
    "Art educator support via email",
  ],
  formats: [
    {
      format: "Paperback",
      price: "$155.00",
      verified: "verified-public",
      notes: "Free U.S. shipping",
    },
    {
      format: "Digital PDF",
      price: "$97.00",
      verified: "verified-public",
      notes: "Instant download",
    },
  ],
  ctaLabels: [
    "Buy Paperback Now $155.00",
    "Buy Digital Now $97.00",
  ],
  disclaimers: [
    GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod,
  ],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 57,
};

// ------------------------------------------------------------------
// 2. Drawing Curriculum
// ------------------------------------------------------------------

export const drawingCurriculumExtract: CurriculumExtract = {
  title: "Drawing Curriculum",
  sourceUrl: "https://spramani.lpages.co/drawing-curriculum/",
  newUrl: "/curriculum/drawing",
  platform: "Leadpages",
  contentVerified: true,
  pricingVerificationNeeded: false, // prices clearly visible on public page
  fallbackExternalUrl: "https://spramani.lpages.co/drawing-curriculum/",
  integrationStatus: "fallback-external",
  migrationStatus: "public-content-extracted",
  notes:
    "Two editions (Early Childhood and Elementary) with different pricing. Public page shows both editions clearly. Edition selection flow needs backend verification.",

  subtitle: "A Science Art Method™ Application Module By Nature of Art®",
  summary:
    "Structured drawing studio experiences organized by increasing material and skill complexity.",
  offers: [
    "Scope and sequence",
    "Weekly / biweekly / monthly lesson scheduling",
    "Prepared environment guidance",
    "Visual arts standards alignment",
  ],
  features: [
    "Paperback OR digital PDF",
    "16–47 studio experiences depending on edition",
    "Materials list",
    "Designed approximately for ages 3–12",
    "Free U.S. shipping",
  ],
  formats: [
    {
      format: "Early Childhood Paperback",
      price: "$135.00",
      verified: "verified-public",
      notes: "16 studios, ages ~3–6",
    },
    {
      format: "Early Childhood Digital",
      price: "$72.00",
      verified: "verified-public",
      notes: "16 studios, ages ~3–6",
    },
    {
      format: "Elementary Paperback",
      price: "$155.00",
      verified: "verified-public",
      notes: "47 studios, ages ~6–12",
    },
    {
      format: "Elementary Digital",
      price: "$97.00",
      verified: "verified-public",
      notes: "47 studios, ages ~6–12",
    },
  ],
  ctaLabels: [
    // TODO: verify exact CTA labels per edition after backend access
    "Buy Now",
  ],
  disclaimers: [
    GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod,
  ],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 47,
  ageRange: "3–12",
};

// ------------------------------------------------------------------
// 3. Color Theory Curriculum
// ------------------------------------------------------------------

export const colorTheoryCurriculumExtract: CurriculumExtract = {
  title: "Sequential Color Theory Curriculum",
  sourceUrl: "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
  newUrl: "/curriculum/color-theory",
  platform: "Leadpages",
  contentVerified: true,
  pricingVerificationNeeded: false, // prices clearly visible on public page
  fallbackExternalUrl: "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
  integrationStatus: "fallback-external",
  migrationStatus: "public-content-extracted",
  notes:
    "Also referred to as 'Kids Color Theory' on public page. 37 sequential lessons. Checkout URL needs backend verification.",

  subtitle: "Kids Color Theory",
  summary:
    "37 sequential color exploration lessons/experiences with scope and sequence. Helps children mix independently and build foundational color theory skills.",
  offers: [
    "Scope and sequence",
    "Prepared lessons ready to schedule weekly, biweekly, or monthly",
    "Color mixing explorations",
    "Material and environment guidance",
    "Standards alignment",
  ],
  features: [
    "Spiral-bound printed book OR digital PDF",
    "37 color exploration experiences",
    "Organized scope and sequence",
    "Materials lists",
    "Guidance for preparing color mixing environments",
    "Aligned with Elements and Principles of Design",
    "Aligned with national/international core arts standards",
  ],
  formats: [
    {
      format: "Paperback",
      price: "$155.00",
      verified: "verified-public",
      notes: "Free U.S. shipping",
    },
    {
      format: "Digital Download",
      price: "$97.00",
      verified: "verified-public",
      notes: "Instant download",
    },
  ],
  ctaLabels: [
    "Buy Now $155.00",
    "Buy Now $97.00",
  ],
  disclaimers: [
    GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod,
  ],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 37,
};

// ------------------------------------------------------------------
// 4. Clay Modeling Curriculum
// ------------------------------------------------------------------

export const clayModelingCurriculumExtract: CurriculumExtract = {
  title: "Kids Clay Modeling",
  sourceUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
  newUrl: "/curriculum/clay-modeling",
  platform: "Leadpages",
  contentVerified: true,
  pricingVerificationNeeded: false, // prices clearly visible on public page
  fallbackExternalUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
  integrationStatus: "fallback-external",
  migrationStatus: "public-content-extracted",
  notes:
    "29 clay studio experiences. Materials note: 80% use easy-to-find modeling clay, 20% recommend earth pottery clay but can substitute air-dry. Checkout URL needs backend verification.",

  subtitle: "A Science Art Method™ Clay Modeling Curriculum By Nature of Art®",
  summary:
    "Structured curriculum with 29 clay studio experiences organized by increasing material handling and sculptural complexity.",
  offers: [
    "Scope and sequence",
    "Prepared lessons",
    "Clay modeling explorations",
    "Clay material and environment guidance",
    "Standards alignment",
  ],
  features: [
    "Spiral-bound printed book OR digital PDF",
    "29 clay studio experiences",
    "Organized scope and sequence",
    "Materials lists",
    "Designed for wide age range",
    "80% of lessons use easy-to-find modeling clay",
    "20% recommend earth pottery clay (air-dry substitute acceptable)",
  ],
  formats: [
    {
      format: "Paperback",
      price: "$145.00",
      verified: "verified-public",
      notes: "Free U.S. shipping",
    },
    {
      format: "Digital Copy",
      price: "$97.00",
      verified: "verified-public",
      notes: "Instant download",
    },
  ],
  ctaLabels: [
    // TODO: verify exact CTA labels after backend access
    "Buy Now",
  ],
  disclaimers: [
    GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod,
  ],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 29,
};

// ------------------------------------------------------------------
// 5. Bookstore
// ------------------------------------------------------------------

export interface BookstoreProduct {
  id: string;
  name: string;
  category: "book" | "curriculum" | "bundle";
  priceStatus: VerificationStatus;
  /** Price if verified from public page */
  price?: string;
  /** Legacy URL if product has its own page */
  productUrl?: string;
  notes: string;
}

export const bookstoreExtract: ExtractedPage & {
  heroMessage: string;
  products: BookstoreProduct[];
} = {
  title: "Bookstore",
  sourceUrl: "https://spramani.lpages.co/all-my-books/",
  newUrl: "/bookstore",
  platform: "Leadpages",
  contentVerified: true,
  pricingVerificationNeeded: true, // most prices NOT visible on catalog page
  fallbackExternalUrl: "https://spramani.lpages.co/all-my-books/",
  integrationStatus: "fallback-external",
  migrationStatus: "public-content-extracted",
  notes:
    "Catalog page. Many product buttons link to Keap or other legacy pages. Individual product pages need separate extraction for pricing and descriptions.",

  heroMessage:
    "You believe art matters for children. You just weren't trained to teach it — and most educators around you weren't either.",

  products: [
    {
      id: "way-children-make-art",
      name: "The Way Children Make Art",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Price not visible on public catalog page",
    },
    {
      id: "early-childhood-art",
      name: "Early Childhood Art",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Price not visible on public catalog page",
    },
    {
      id: "defining-visual-arts",
      name: "Defining Visual Arts",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Price not visible on public catalog page",
    },
    {
      id: "for-early-childhood",
      name: "For Early Childhood",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Price not visible on public catalog page",
    },
    {
      id: "elementary-art-guide",
      name: "Elementary Art Guide",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Price not visible on public catalog page",
    },
    {
      id: "kids-color-theory-book",
      name: "Kids Color Theory",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Book edition (separate from curriculum)",
    },
    {
      id: "nurturing-children-visual-arts",
      name: "Nurturing Children in The Visual Arts Naturally",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Price not visible on public catalog page",
    },
    {
      id: "kids-painting",
      name: "Kids Painting",
      category: "curriculum",
      priceStatus: "verified-public",
      price: "$155.00 (paperback), $97.00 (digital)",
      notes: "57 brushstroke lessons. Price verified from public curriculum page.",
    },
    {
      id: "clay-play",
      name: "Clay Play",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Price not visible on public catalog page",
    },
    {
      id: "art-teaching-curriculum",
      name: "Art Teaching Curriculum",
      category: "book",
      priceStatus: "pending-backend",
      notes: "Price not visible on public catalog page",
    },
    {
      id: "elementary-drawing-curriculum",
      name: "Elementary Drawing Curriculum",
      category: "curriculum",
      priceStatus: "verified-public",
      price: "$155.00 (paperback), $97.00 (digital)",
      notes: "47 studios. Price verified from public curriculum page.",
    },
    {
      id: "early-childhood-drawing-curriculum",
      name: "Early Childhood Drawing Curriculum",
      category: "curriculum",
      priceStatus: "verified-public",
      price: "$135.00 (paperback), $72.00 (digital)",
      notes: "16 studios. Price verified from public curriculum page.",
    },
    {
      id: "paint-curriculum",
      name: "Paint Curriculum, 57 brushstroke lessons",
      category: "curriculum",
      priceStatus: "verified-public",
      price: "$155.00 (paperback), $97.00 (digital)",
      notes: "Same as Kids Painting. Price verified from public curriculum page.",
    },
    {
      id: "kids-painting-plus-elementary",
      name: "Kids Painting + Painting Work For Elementary Grades",
      category: "bundle",
      priceStatus: "pending-backend",
      notes: "Bundle pricing not visible on public catalog page",
    },
    {
      id: "kids-color-theory-curriculum",
      name: "Kids Color Theory Curriculum, 37 mixing lessons",
      category: "curriculum",
      priceStatus: "verified-public",
      price: "$155.00 (paperback), $97.00 (digital)",
      notes: "37 lessons. Price verified from public curriculum page.",
    },
    {
      id: "clay-modeling",
      name: "Clay Modeling",
      category: "curriculum",
      priceStatus: "verified-public",
      price: "$145.00 (paperback), $97.00 (digital)",
      notes: "29 studios. Price verified from public curriculum page.",
    },
  ],
};

// ------------------------------------------------------------------
// All Extracted Pages Combined
// ------------------------------------------------------------------

export const allExtractedPages: ExtractedPage[] = [
  paintingCurriculumExtract,
  drawingCurriculumExtract,
  colorTheoryCurriculumExtract,
  clayModelingCurriculumExtract,
  bookstoreExtract,
];

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------

export function getExtractedPageByNewUrl(url: string): ExtractedPage | undefined {
  return allExtractedPages.find((p) => p.newUrl === url);
}

export function getExtractedPageBySourceUrl(url: string): ExtractedPage | undefined {
  return allExtractedPages.find((p) => p.sourceUrl === url);
}

export function getCurriculumExtracts(): CurriculumExtract[] {
  return [
    paintingCurriculumExtract,
    drawingCurriculumExtract,
    colorTheoryCurriculumExtract,
    clayModelingCurriculumExtract,
  ];
}

export function getVerifiedProducts(): BookstoreProduct[] {
  return bookstoreExtract.products.filter((p) => p.priceStatus === "verified-public");
}

export function getPendingProducts(): BookstoreProduct[] {
  return bookstoreExtract.products.filter((p) => p.priceStatus === "pending-backend");
}
