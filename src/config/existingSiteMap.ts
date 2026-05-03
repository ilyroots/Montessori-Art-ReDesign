// ============================================================
// Existing Site Map — Montessori Art Website Redesign
// ============================================================
// This is the SOURCE OF TRUTH mapping from current live pages
// to new redesigned pages.
//
// Rule: Every old URL must have ONE of these fates:
// - "redirect"    → new native page replaces it
// - "merge"       → content merged into another page
// - "retire"      → page removed (document why)
// - "keep-external" → remains on external platform for now
//
// Do NOT remove old sales paths before native replacements are
// live and tested.
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
  /** Current live URL (the source of truth) */
  legacyUrl: string;
  /** New redesigned page path */
  newPath: string;
  /** Human-readable page title */
  title: string;
  /** Platform the old page lives on */
  platform: Platform;
  /** What happens to the old page */
  action: MigrationAction;
  /** Category for grouping */
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
  /** Current integration status */
  integrationStatus: IntegrationStatus;
  /** Current fallback URL if native checkout/form is not ready */
  fallbackExternalUrl?: string;
  /** Keap form/checkout URL if applicable */
  keapUrl?: string;
  /** Leadpages URL if applicable */
  leadpagesUrl?: string;
  /** Volusion/store URL if applicable */
  storeUrl?: string;
  /** Notes for the migration team */
  notes: string;
}

// ------------------------------------------------------------------
// MAIN NAVIGATION / CORE PAGES
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
    notes:
      "Current WordPress homepage with blog-style content. Redesigning as premium brand hub with manifesto hero, audience paths, featured offers.",
  },
  {
    legacyUrl: "https://montessori-art.com/about-2/",
    newPath: "/about",
    title: "About",
    platform: "WordPress",
    action: "redirect",
    category: "company",
    integrationStatus: "mapped",
    notes:
      "Preserve founder/about content. Redesign as editorial founder authority page.",
  },
  {
    legacyUrl: "https://montessori-art.com/blog/",
    newPath: "/blog",
    title: "Blog",
    platform: "WordPress",
    action: "redirect",
    category: "blog",
    integrationStatus: "mapped",
    notes:
      "Preserve all posts, categories, and slugs for SEO. Redesign with editorial typography, sticky TOC, Montessori callouts.",
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
    notes:
      "Keap contact form currently handles newsletter signup. Build native page with NewsletterSignup component. Connect to Keap form later.",
  },
  {
    legacyUrl: "https://montessori-art.com/terms-of-service/",
    newPath: "/terms-of-service",
    title: "Terms of Service",
    platform: "WordPress",
    action: "redirect",
    category: "legal",
    integrationStatus: "mapped",
    notes: "Preserve legal copy. Simple content page.",
  },
  {
    legacyUrl: "https://montessori-art.com/accessibility-statement/",
    newPath: "/accessibility",
    title: "Accessibility",
    platform: "WordPress",
    action: "redirect",
    category: "legal",
    integrationStatus: "mapped",
    notes: "Preserve accessibility content. Simple content page.",
  },
];

// ------------------------------------------------------------------
// CURRICULUM PAGES (Leadpages → Native)
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
    notes:
      "Top-selling curriculum. Native page built. CTA uses fallback URL until Keap/Volusion checkout is mapped.",
  },
  {
    legacyUrl: "https://keap.page/hj952/painting-work-art-album.html",
    newPath: "/curriculum/painting-work",
    title: "Painting Work Curriculum",
    platform: "Keap",
    action: "redirect",
    category: "curriculum",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/painting-work-art-album.html",
    notes:
      "Keap page for painting work. Needs native CurriculumSalesPageTemplate with Keap checkout placeholder.",
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
    notes: "Leadpages drawing sales page. Rebuild with CurriculumSalesPageTemplate.",
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
    notes: "Leadpages color theory sales page. Rebuild with CurriculumSalesPageTemplate.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
    newPath: "/curriculum/clay-modeling",
    title: "Clay Modeling Curriculum",
    platform: "Leadpages",
    action: "redirect",
    category: "curriculum",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
    leadpagesUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
    notes: "Leadpages clay modeling sales page. Rebuild with CurriculumSalesPageTemplate.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/crafting-building-curriculum/",
    newPath: "/curriculum/crafting-building",
    title: "Crafting & Building Curriculum",
    platform: "Leadpages",
    action: "redirect",
    category: "curriculum",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/crafting-building-curriculum/",
    leadpagesUrl: "https://spramani.lpages.co/crafting-building-curriculum/",
    notes: "Leadpages crafting & building sales page. Rebuild with CurriculumSalesPageTemplate.",
  },
];

// ------------------------------------------------------------------
// TRAINING PAGES (Keap / Leadpages → Native)
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
    notes: "Keap training page. Rebuild with TrainingSalesPageTemplate + Keap checkout placeholder.",
  },
  {
    legacyUrl: "https://keap.page/hj952/infant-toddler-webinar.html",
    newPath: "/training/infant-toddler-art",
    title: "Infant & Toddler Art",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/infant-toddler-webinar.html",
    notes: "Keap training page. Rebuild with TrainingSalesPageTemplate.",
  },
  {
    legacyUrl: "https://keap.page/hj952/new-landing-page3.html",
    newPath: "/training/art-shelf",
    title: "Art Shelf Setup",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/new-landing-page3.html",
    notes: "Keap training page. Rebuild with TrainingSalesPageTemplate.",
  },
  {
    legacyUrl: "https://keap.page/hj952/process-based-video-training.html",
    newPath: "/training/process-based-art",
    title: "Process-Based Art",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/process-based-video-training.html",
    notes: "Keap training page. Rebuild with TrainingSalesPageTemplate.",
  },
  {
    legacyUrl: "https://keap.page/hj952/positive-artful-talk-vide-training.html",
    newPath: "/training/positive-art-talk",
    title: "Positive Artful Talk",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/positive-artful-talk-vide-training.html",
    notes: "Keap training page. Rebuild with TrainingSalesPageTemplate.",
  },
  {
    legacyUrl: "https://keap.page/hj952/theming-art-the-natural-world.html",
    newPath: "/training/nature-art",
    title: "Nature Art",
    platform: "Keap",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    keapUrl: "https://keap.page/hj952/theming-art-the-natural-world.html",
    notes: "Keap training page. Rebuild with TrainingSalesPageTemplate.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/october-online-training/",
    newPath: "/training/painting-key-lessons",
    title: "Painting Key Lessons",
    platform: "Leadpages",
    action: "redirect",
    category: "training",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/october-online-training/",
    leadpagesUrl: "https://spramani.lpages.co/october-online-training/",
    notes: "Leadpages training page. Rebuild with TrainingSalesPageTemplate.",
  },
];

// ------------------------------------------------------------------
// CERTIFICATION PAGES (Leadpages → Native)
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
    notes:
      "Certification interest/waitlist page. Native page built. CTA uses fallback URL until Keap checkout is mapped.",
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
    notes:
      "Certification detail page. Rebuild with CertificationPageTemplate. Currently most premium offer ($497).",
  },
];

// ------------------------------------------------------------------
// FREE RESOURCES (Leadpages → Native)
// ------------------------------------------------------------------

export const freeResourcePages: ExistingPageEntry[] = [
  {
    legacyUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
    newPath: "/free-resources/color-mixing-video",
    title: "Color Mixing Video Lesson",
    platform: "Leadpages",
    action: "redirect",
    category: "free-resource",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
    leadpagesUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
    notes:
      "Lead magnet. Rebuild with LeadMagnetPageTemplate + LeadMagnetForm. Connect to Keap opt-in later.",
  },
  {
    legacyUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
    newPath: "/free-resources/storybook-art-video",
    title: "Storybook Art Video",
    platform: "Leadpages",
    action: "redirect",
    category: "free-resource",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
    leadpagesUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
    notes: "Lead magnet. Rebuild with LeadMagnetPageTemplate.",
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
    notes: "Lead magnet. Rebuild with LeadMagnetPageTemplate.",
  },
];

// ------------------------------------------------------------------
// BOOKS & STORE (Leadpages / Volusion → Native)
// ------------------------------------------------------------------

export const storePages: ExistingPageEntry[] = [
  {
    legacyUrl: "https://spramani.lpages.co/all-my-books/",
    newPath: "/bookstore",
    title: "Bookstore",
    platform: "Leadpages",
    action: "redirect",
    category: "book",
    integrationStatus: "mapped",
    fallbackExternalUrl: "https://spramani.lpages.co/all-my-books/",
    leadpagesUrl: "https://spramani.lpages.co/all-my-books/",
    notes:
      "Books landing page. Rebuild as native bookstore with ProductCollectionTemplate. Use fallback external URLs until checkout mapped.",
  },
  {
    legacyUrl: "https://atosb-raxtf.volusion.store/",
    newPath: "/art-supplies",
    title: "Art Supplies",
    platform: "Volusion",
    action: "redirect",
    category: "art-supplies",
    integrationStatus: "mapped",
    storeUrl: "https://atosb-raxtf.volusion.store/",
    notes:
      "Volusion store. Build native /art-supplies page with product cards. Link to Volusion for checkout until ecommerce migration is decided.",
  },
];

// ------------------------------------------------------------------
// ALL PAGES COMBINED
// ------------------------------------------------------------------

export const existingSiteMap: ExistingPageEntry[] = [
  ...corePages,
  ...curriculumPages,
  ...trainingPages,
  ...certificationPages,
  ...freeResourcePages,
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
