// ============================================================
// Existing Site Map — Nature of Art® Website Redesign
// ============================================================
// SOURCE OF TRUTH mapping from current live pages to new redesigned pages.
//
// Rule: Every old URL must have ONE of these fates:
// - "redirect"    → new native page replaces it
// - "merge"       → content merged into another page
// - "retire"      → page removed (document why)
// - "keep-external" → remains on external platform for now
//
// Do NOT remove old sales paths before native replacements are live and tested.
// ============================================================

export type MigrationAction = "redirect" | "merge" | "retire" | "keep-external";
export type Platform = "WordPress" | "Leadpages" | "Keap" | "Volusion" | "Bluehost";
export type IntegrationStatus =
  | "mapped"
  | "native-page-built"
  | "redirect-implemented"
  | "integration-connected"
  | "tested"
  | "live";

export interface ExistingPageEntry {
  legacyUrl: string;
  newPath: string;
  title: string;
  platform: Platform;
  action: MigrationAction;
  category:
    | "curriculum"
    | "training"
    | "certification"
    | "free-resource"
    | "book"
    | "art-supplies"
    | "blog"
    | "company"
    | "legal"
    | "store"
    | "newsletter";
  integrationStatus: IntegrationStatus;
  fallbackExternalUrl?: string;
  keapUrl?: string;
  leadpagesUrl?: string;
  storeUrl?: string;
  notes: string;
}

// ------------------------------------------------------------------
// CORE PAGES
// ------------------------------------------------------------------

export const corePages: ExistingPageEntry[] = [
  {
    legacyUrl: "https://montessori-art.com/",
    newPath: "/",
    title: "Home",
    platform: "WordPress",
    action: "redirect",
    category: "company",
    integrationStatus: "native-page-built",
    notes: "WordPress homepage with blog post grid. Core positioning: 'Montessori provides the learning environment. Nature of Art® provides the art pedagogy.'",
  },
  {
    legacyUrl: "https://montessori-art.com/about-2/",
    newPath: "/about",
    title: "About",
    platform: "WordPress",
    action: "redirect",
    category: "company",
    integrationStatus: "native-page-built",
    notes: "Hub page for Nature of Art®, Spramani, books, curriculum, services, certification, art supplies, newsletter, and contact.",
  },
  {
    legacyUrl: "https://montessori-art.com/blog/",
    newPath: "/blog",
    title: "Blog",
    platform: "WordPress",
    action: "redirect",
    category: "blog",
    integrationStatus: "mapped",
    notes: "Preserve all posts, categories, and slugs for SEO. Full WordPress export needed for complete migration.",
  },
  {
    legacyUrl: "https://keap.app/contact-us/5358701398091591",
    newPath: "/newsletter",
    title: "Newsletter",
    platform: "Keap",
    action: "redirect",
    category: "newsletter",
    integrationStatus: "mapped",
    keapUrl: "https://keap.app/contact-us/5358701398091591",
    notes: "Keap contact form currently handles newsletter signup. Build native page with NewsletterSignup component.",
  },
  {
    legacyUrl: "https://montessori-art.com/terms-of-service/",
    newPath: "/terms-of-service",
    title: "Terms of Service",
    platform: "WordPress",
    action: "redirect",
    category: "legal",
    integrationStatus: "mapped",
    notes: "Preserve legal copy. Covers Science Art Method™ proprietary rights, copyright, individual use license.",
  },
  {
    legacyUrl: "https://montessori-art.com/accessibility-statement/",
    newPath: "/accessibility",
    title: "Accessibility",
    platform: "WordPress",
    action: "redirect",
    category: "legal",
    integrationStatus: "mapped",
    notes: "Needs manual verification. Crawler had issues accessing.",
  },
];

// ------------------------------------------------------------------
// CURRICULUM PAGES
// ------------------------------------------------------------------

export const curriculumPages: ExistingPageEntry[] = [
  {
    legacyUrl: "https://spramani.lpages.co/painting-curriculum-sales-page-/",
    newPath: "/curriculum/painting",
    title: "Painting Curriculum",
    platform: "Leadpages",
    action: "redirect",
    category: "curriculum",
    integrationStatus: "native-page-built",
    fallbackExternalUrl: "https://spramani.lpages.co/painting-curriculum-sales-page-/",
    leadpagesUrl: "https://spramani.lpages.co/painting-curriculum-sales-page-/",
    notes: "Top-selling curriculum. 57 studio experiences. Dual pricing: $155 paperback / $97 digital.",
  },
  {
    legacyUrl: "https://keap.page/hj952/painting-work-art-album.html",
    newPath: "/curriculum/painting-work",
    title: "Painting Work / Montessori Elementary",
    platform: "Keap",
    action: "redirect",
    category: "curriculum",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/painting-work-art-album.html",
    notes: "Companion to Kids Painting. 7 key lessons. NOT the same product. Pricing: $97 printed / $45 digital.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/drawing-curriculum/",
    newPath: "/curriculum/drawing",
    title: "Drawing Curriculum",
    platform: "Leadpages",
    action: "redirect",
    category: "curriculum",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/drawing-curriculum/",
    leadpagesUrl: "https://spramani.lpages.co/drawing-curriculum/",
    notes: "Two editions: Early Childhood (16 studios, $135/$72) and Elementary (47 studios, $155/$97).",
  },
  {
    legacyUrl: "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
    newPath: "/curriculum/color-theory",
    title: "Color Theory Curriculum",
    platform: "Leadpages",
    action: "redirect",
    category: "curriculum",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
    leadpagesUrl: "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
    notes: "37 sequential color exploration lessons. Pricing: $155 paperback / $97 digital.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
    newPath: "/curriculum/clay-modeling",
    title: "Clay Modeling Curriculum",
    platform: "Leadpages",
    action: "redirect",
    category: "curriculum",
    integrationStatus: "native-page-built",
    fallbackExternalUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
    leadpagesUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
    notes: "29 clay studio experiences. Native sales page built with gallery, 29-studio scope, and instructor portrait. Pricing: $145 paperback / $97 digital.",
  },
];

// ------------------------------------------------------------------
// TRAINING PAGES (Paid)
// ------------------------------------------------------------------

export const trainingPages: ExistingPageEntry[] = [
  {
    legacyUrl: "https://keap.page/hj952/homeschooling-art-where-to-start.html",
    newPath: "/training/homeschooling-art",
    title: "Homeschooling Art: Where to Start",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/homeschooling-art-where-to-start.html",
    notes: "The Homeschooling Art Starter. $29.00. 3 videos + 1 bonus Watercolor Joy.",
  },
  {
    legacyUrl: "https://keap.page/hj952/infant-toddler-webinar.html",
    newPath: "/training/infant-toddler-art",
    title: "Infant & Toddler Art Webinar",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/infant-toddler-webinar.html",
    notes: "1 hour pre-recorded live training. Price pending backend verification.",
  },
  {
    legacyUrl: "https://keap.page/hj952/new-landing-page3.html",
    newPath: "/training/art-shelf",
    title: "How To Stage An Art Shelf",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/new-landing-page3.html",
    notes: "Proprietary Art Shelf System. $45.00. 1:15 hr video. 11 structures.",
  },
  {
    legacyUrl: "https://keap.page/hj952/process-based-video-training.html",
    newPath: "/training/process-based-art",
    title: "Process-Based Art Video Training",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/process-based-video-training.html",
    notes: "Price pending backend verification. 1 year access.",
  },
  {
    legacyUrl: "https://keap.page/hj952/positive-artful-talk-vide-training.html",
    newPath: "/training/positive-art-talk",
    title: "Positive Art Talk",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/positive-artful-talk-vide-training.html",
    notes: "Positive Artful Ways To Talk To Your Students. $19.00.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/october-online-training/",
    newPath: "/training/painting-key-lessons",
    title: "Painting Key Lessons 101",
    platform: "Leadpages",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/october-online-training/",
    leadpagesUrl: "https://spramani.lpages.co/october-online-training/",
    notes: "Limited Time $65.00 (was $197.00). 1.5 PD hours. 1 year access.",
  },
  {
    legacyUrl: "https://keap.page/hj952/theming-art-the-natural-world.html",
    newPath: "/training/nature-art",
    title: "Theme Art & The Natural World",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/theming-art-the-natural-world.html",
    notes: "$57.00. 3 videos. 2 hr CPD. Includes PDFs/checklists/book list.",
  },
];

// ------------------------------------------------------------------
// FREE RESOURCE PAGES
// ------------------------------------------------------------------

export const freeResourcePages: ExistingPageEntry[] = [
  {
    legacyUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
    newPath: "/free-resources/color-mixing-video",
    title: "Color Mixing Free Video Lesson",
    platform: "Leadpages",
    action: "redirect",
    category: "free-resource",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
    leadpagesUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
    notes: "Free lead magnet. 'How to set-up one color prompt.' CTA: YES, I WANT MY DOWNLOAD!",
  },
  {
    legacyUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
    newPath: "/free-resources/storybook-art-video",
    title: "Theme Art With Storybooks",
    platform: "Leadpages",
    action: "redirect",
    category: "free-resource",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
    leadpagesUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
    notes: "Free 1 hour video training on theming art with storybooks.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/phases-of-development-art-project-video-course",
    newPath: "/free-resources/phases-of-art-development",
    title: "Phases of Art Development",
    platform: "Leadpages",
    action: "redirect",
    category: "free-resource",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/phases-of-development-art-project-video-course",
    leadpagesUrl: "https://spramani.lpages.co/phases-of-development-art-project-video-course",
    notes: "Free 3-video series: Toddler, 3–6 years, 6–12 years.",
  },
];

// ------------------------------------------------------------------
// CERTIFICATION PAGES
// ------------------------------------------------------------------

export const certificationPages: ExistingPageEntry[] = [
  {
    legacyUrl: "https://spramani.lpages.co/arttraining2020-waitlist/",
    newPath: "/certification",
    title: "Certification Overview",
    platform: "Leadpages",
    action: "redirect",
    category: "certification",
    integrationStatus: "native-page-built",
    fallbackExternalUrl: "https://spramani.lpages.co/arttraining2020-waitlist/",
    leadpagesUrl: "https://spramani.lpages.co/arttraining2020-waitlist/",
    notes: "CONFLICT: waitlist shows $668/$1,499. artteachingblueprint shows $699/$1,500. Prices pending backend verification.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/artteachingblueprint/",
    newPath: "/certification/art-teaching-blueprint",
    title: "Art Teaching Blueprint",
    platform: "Leadpages",
    action: "redirect",
    category: "certification",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/artteachingblueprint/",
    leadpagesUrl: "https://spramani.lpages.co/artteachingblueprint/",
    notes: "CONFLICT: artteachingblueprint shows $699/$1,500. waitlist shows $668/$1,499. Prices pending backend verification.",
  },
];

// ------------------------------------------------------------------
// BOOKS & STORE
// ------------------------------------------------------------------

export const storePages: ExistingPageEntry[] = [
  {
    legacyUrl: "https://spramani.lpages.co/all-my-books/",
    newPath: "/bookstore",
    title: "Art Books",
    platform: "Leadpages",
    action: "redirect",
    category: "book",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/all-my-books/",
    leadpagesUrl: "https://spramani.lpages.co/all-my-books/",
    notes: "Book and curriculum catalog. CONFLICT: Clay Play says 27 lessons, sales page says 29.",
  },
  {
    legacyUrl: "https://atosb-raxtf.volusion.store/",
    newPath: "/art-supplies",
    title: "Art Store",
    platform: "Volusion",
    action: "redirect",
    category: "art-supplies",
    integrationStatus: "mapped",
    storeUrl: "https://atosb-raxtf.volusion.store/",
    notes: "Volusion storefront. Categories: Paints, Art Curriculum, Painting Materials, Drawing, Clay, Crayons, Paper, Crafts, Art Teaching Books, Art Books.",
  },
];

// ------------------------------------------------------------------
// ALL PAGES COMBINED
// ------------------------------------------------------------------

export const existingSiteMap: ExistingPageEntry[] = [
  ...corePages,
  ...curriculumPages,
  ...trainingPages,
  ...freeResourcePages,
  ...certificationPages,
  ...storePages,
];

// ------------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------------

export function getPageByNewPath(path: string): ExistingPageEntry | undefined {
  return existingSiteMap.find((p) => p.newPath === path);
}

export function getPageByLegacyUrl(url: string): ExistingPageEntry | undefined {
  return existingSiteMap.find((p) => p.legacyUrl === url);
}

export function getPagesByCategory(
  category: ExistingPageEntry["category"]
): ExistingPageEntry[] {
  return existingSiteMap.filter((p) => p.category === category);
}

export function getPagesByStatus(
  status: IntegrationStatus
): ExistingPageEntry[] {
  return existingSiteMap.filter((p) => p.integrationStatus === status);
}
