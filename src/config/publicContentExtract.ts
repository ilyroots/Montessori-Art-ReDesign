// ============================================================
// Public Content Extract — Nature of Art® Website
// ============================================================
// This file contains structured content extracted from publicly
// accessible pages across the existing Montessori Art ecosystem.
//
// SOURCE OF TRUTH: The current live websites are the source of
// truth. No content is invented. If a detail is not visible
// publicly, it is marked as backendVerificationNeeded.
//
// extractionDate: 2026-05-02
// extractionMethod: manual review of public-facing URLs
// ============================================================

// ------------------------------------------------------------------
// Shared Disclaimers (appear on all curriculum/training pages)
// ------------------------------------------------------------------

export const GLOBAL_CURRICULUM_DISCLAIMERS = {
  scienceArtMethod:
    "Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™.",

  curriculumMethod:
    "This curriculum demonstrates application of the Science Art Method™ but does not teach diagnostic decision-making, developmental sequencing, or instructional judgment. Those are taught inside The Art Teaching Blueprint Certification.",

  refundPolicy: "30-day satisfaction guarantee for printed version only. Digital curriculum cannot be refunded.",

  contactEmail: "Info@Spramani.com",
};

export const GLOBAL_TRAINING_DISCLAIMERS = {
  trainingRestriction:
    "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators, or to represent the Science Art Method™ as your own teaching system.",

  accessPeriod: "1 year access",
  contactEmail: "Info@Spramani.com",
};

// ------------------------------------------------------------------
// Extraction Status Helpers
// ------------------------------------------------------------------

export type VerificationStatus = "verified-public" | "pending-backend";
export type IntegrationStatus = "fallback-external" | "native-page-built" | "mapped" | "integration-connected" | "tested" | "live";
export type MigrationStatus =
  | "pending-public-extraction"
  | "public-content-extracted"
  | "native-page-built"
  | "redirect-implemented"
  | "live";

export interface ExtractedPage {
  id: string;
  title: string;
  sourceUrl: string;
  newUrl: string;
  platform: "Leadpages" | "Keap" | "Volusion" | "WordPress";
  contentVerified: boolean;
  pricingVerificationNeeded: boolean;
  fallbackExternalUrl: string;
  integrationStatus: IntegrationStatus;
  migrationStatus: MigrationStatus;
  notes: string;
}

// ------------------------------------------------------------------
// 0. Homepage
// ------------------------------------------------------------------

export const homepageExtract = {
  id: "homepage",
  title: "Montessori Art",
  tagline: "Teach art in the Montessori classroom, art lessons, curriculum, art training",
  positioning: "Montessori provides the learning environment. Nature of Art® provides the art pedagogy.",
  sourceUrl: "https://montessori-art.com/",
  newUrl: "/",
  platform: "WordPress" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://montessori-art.com/",
  integrationStatus: "native-page-built" as const,
  migrationStatus: "native-page-built" as const,
  notes: "WordPress homepage with blog post grid. Core positioning line must be preserved.",
  featuredBlogPosts: [
    {
      title: "Easy Drawing Ideas for Young Children",
      slug: "easy-drawing-ideas-for-young-children",
      category: "Drawing",
    },
    {
      title: "Boost Strength with Clay Play",
      slug: "boost-strength-with-clay-play",
      category: "Clay",
    },
    {
      title: "Clay Modeling Play for Toddlers | Why and How It Supports Early Creativity",
      slug: "clay-modeling-play-for-toddlers",
      category: "Clay",
    },
    {
      title: "Primary Homeschool Art Curriculum, Done-For-You Art Learning at Home",
      slug: "primary-homeschool-art-curriculum",
      category: "Curriculum",
    },
  ],
};

// ------------------------------------------------------------------
// 1. About Page
// ------------------------------------------------------------------

export interface AboutExtract extends ExtractedPage {
  welcomeMessage: string;
  companyDescription: string;
  authorBio: string;
  booksDescription: string;
  curriculumDescription: string;
  servicesDescription: string;
  professionalDevelopmentDescription: string;
  certificationDescription: string;
  suppliesDescription: string;
  newsletterDescription: string;
  contactDescription: string;
  email: string;
  facebook: string;
  instagram: string;
  linkedIn: string;
  address: string;
  serviceCategories: string[];
}

export const aboutExtract: AboutExtract = {
  id: "about",
  title: "About",
  sourceUrl: "https://montessori-art.com/about-2/",
  newUrl: "/about",
  platform: "WordPress" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://montessori-art.com/about-2/",
  integrationStatus: "native-page-built" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Acts as a hub for Nature of Art®, Spramani, books, curriculum, services, certification, art supplies, newsletter, and contact.",

  welcomeMessage: "Welcome to Nature of Art®",
  companyDescription:
    "Nature of Art® is an art education company founded by Spramani Elaun, providing Montessori-aligned art curriculum, certification, training, and supplies for educators and parents.",
  authorBio:
    "Spramani Elaun is an author and art curriculum developer from San Diego. She is a homeschooling mom, an art teacher, and the founder of Nature of Art® Art School & Art Supply company. Her method is based on long-term observation and practice around how children process art.",
  booksDescription: "Authoritative guides on Montessori art education for your classroom or home shelf.",
  curriculumDescription: "Complete, sequenced curriculum for teaching painting, drawing, clay, and color theory in the Montessori environment.",
  servicesDescription: "Keynotes, workshops, venue sponsorship, corporate creative events, teacher art training, and educational seminars.",
  professionalDevelopmentDescription: "Video training and professional development for Montessori guides, homeschool parents, and art educators.",
  certificationDescription: "The Art Teaching Blueprint™ — professional certification in Montessori art education.",
  suppliesDescription: "Premium safe non-toxic art supplies curated for the Montessori art environment.",
  newsletterDescription: "Get art inspiration, lessons, and updates delivered to your inbox.",
  contactDescription: "Connect with Nature of Art® for curriculum questions, training inquiries, and partnership opportunities.",

  email: "Info@Spramani.com",
  facebook: "https://www.facebook.com/nature.of.art",
  instagram: "@Nature.of.Art.Kids",
  linkedIn: "https://www.linkedin.com/in/ecokidsart/",
  address: "Nature of Art®, P.O. Box 443, Solana Beach, CA 92075",

  serviceCategories: [
    "keynote",
    "workshops",
    "venue sponsorship",
    "corporate creative events",
    "teacher art training",
    "educational seminar",
    "video training",
    "art supplies",
    "Art Teaching Blueprint",
  ],
};

// ------------------------------------------------------------------
// 2. Curriculum Pages
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
  id: "painting-curriculum",
  title: "Kids Painting",
  sourceUrl: "https://spramani.lpages.co/painting-curriculum-sales-page-/",
  newUrl: "/curriculum/painting",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://spramani.lpages.co/painting-curriculum-sales-page-/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Top-selling curriculum. Public page shows complete pricing and feature list. Checkout URL needs backend verification.",

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
    { format: "Paperback", price: "$155.00", verified: "verified-public", notes: "Free U.S. shipping" },
    { format: "Digital PDF", price: "$97.00", verified: "verified-public", notes: "Instant download" },
  ],
  ctaLabels: ["Buy Paperback Now $155.00", "Buy Digital Now $97.00"],
  disclaimers: [GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 57,
  ageRange: "3–12",
};

export const paintingWorkExtract: CurriculumExtract = {
  id: "painting-work",
  title: "Teaching Painting to Children: An Essential Art Album",
  sourceUrl: "https://keap.page/hj952/painting-work-art-album.html",
  newUrl: "/curriculum/painting-work",
  platform: "Keap" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://keap.page/hj952/painting-work-art-album.html",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Companion to Kids Painting — Brushstrokes Curriculum. Not the same product. Best for elementary grades.",

  subtitle: "For classroom guides and homeschooling parents",
  summary:
    "Companion album to Kids Painting with seven key painting lessons in detail, full-color pictures, paint facts, techniques, and featured artist history.",
  offers: [
    "Seven key lessons in detail",
    "Full-color pictures",
    "Painting key lessons",
    "Paint facts",
    "Painting techniques",
    "Featured artist and paint history",
  ],
  features: [
    "Companion to Kids Painting — Brushstrokes Curriculum",
    "Best for elementary grades",
    "Seven key painting lessons in detail",
    "Full-color pictures throughout",
    "Paint facts and techniques",
    "Featured artist and paint history",
  ],
  formats: [
    { format: "Printed", price: "$97.00", verified: "verified-public" },
    { format: "Digital", price: "$45.00", verified: "verified-public" },
  ],
  ctaLabels: ["Buy Printed $97.00", "Buy Digital $45.00"],
  disclaimers: [GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 7,
  ageRange: "Elementary",
};

export const drawingCurriculumExtract: CurriculumExtract = {
  id: "drawing-curriculum",
  title: "Drawing Curriculum",
  sourceUrl: "https://spramani.lpages.co/drawing-curriculum/",
  newUrl: "/curriculum/drawing",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://spramani.lpages.co/drawing-curriculum/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Two editions (Early Childhood and Elementary) with different pricing. Public page shows both editions clearly.",

  subtitle: "A Science Art Method™ Application Module By Nature of Art®",
  summary: "Structured drawing studio experiences organized by increasing material and skill complexity.",
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
    { format: "Early Childhood Paperback", price: "$135.00", verified: "verified-public", notes: "16 studios, ages ~3–6" },
    { format: "Early Childhood Digital", price: "$72.00", verified: "verified-public", notes: "16 studios, ages ~3–6" },
    { format: "Elementary Paperback", price: "$155.00", verified: "verified-public", notes: "47 studios, ages ~6–12" },
    { format: "Elementary Digital", price: "$97.00", verified: "verified-public", notes: "47 studios, ages ~6–12" },
  ],
  ctaLabels: ["Buy Now"],
  disclaimers: [GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 47,
  ageRange: "3–12",
};

export const colorTheoryCurriculumExtract: CurriculumExtract = {
  id: "color-theory-curriculum",
  title: "Sequential Color Theory Curriculum",
  sourceUrl: "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
  newUrl: "/curriculum/color-theory",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Also referred to as 'Kids Color Theory' on public page. 37 sequential lessons.",

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
    { format: "Paperback", price: "$155.00", verified: "verified-public", notes: "Free U.S. shipping" },
    { format: "Digital Download", price: "$97.00", verified: "verified-public", notes: "Instant download" },
  ],
  ctaLabels: ["Buy Now $155.00", "Buy Now $97.00"],
  disclaimers: [GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 37,
  ageRange: "3–12",
};

export const clayModelingCurriculumExtract: CurriculumExtract = {
  id: "clay-modeling-curriculum",
  title: "Kids Clay Modeling",
  sourceUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
  newUrl: "/curriculum/clay-modeling",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "29 clay studio experiences. CONFLICT: bookstore catalog says 27 lessons. Sales page says 29. Using sales page value.",

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
    { format: "Paperback", price: "$145.00", verified: "verified-public", notes: "Free U.S. shipping" },
    { format: "Digital Copy", price: "$97.00", verified: "verified-public", notes: "Instant download" },
  ],
  ctaLabels: ["Buy Now"],
  disclaimers: [GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod, GLOBAL_CURRICULUM_DISCLAIMERS.curriculumMethod],
  refundPolicy: GLOBAL_CURRICULUM_DISCLAIMERS.refundPolicy,
  contactEmail: GLOBAL_CURRICULUM_DISCLAIMERS.contactEmail,
  studioCount: 29,
  ageRange: "3–12",
};

// ------------------------------------------------------------------
// 3. Paid Video Trainings
// ------------------------------------------------------------------

export interface TrainingExtract extends ExtractedPage {
  subtitle: string;
  summary: string;
  price: string;
  originalPrice?: string;
  priceStatus: VerificationStatus;
  accessPeriod: string;
  pdHours?: number;
  cpdHours?: number;
  videos: { title: string; duration?: string }[];
  features: string[];
  audience: string[];
  includes: string[];
  ctaLabel: string;
  disclaimers: string[];
  contactEmail: string;
}

export const homeschoolingArtTrainingExtract: TrainingExtract = {
  id: "homeschooling-art",
  title: "The Homeschooling Art Starter",
  sourceUrl: "https://keap.page/hj952/homeschooling-art-where-to-start.html",
  newUrl: "/training/homeschooling-art",
  platform: "Keap" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://keap.page/hj952/homeschooling-art-where-to-start.html",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "3 videos + 1 bonus video on Watercolor Joy. Videos sent to email.",

  subtitle: "For homeschool parents with children 3–12",
  summary: "A starter video training for homeschool parents who want to bring art into their home education.",
  price: "$29.00",
  priceStatus: "verified-public",
  accessPeriod: "Videos sent to email",
  videos: [
    { title: "Homeschooling Art Intro", duration: "38 minutes" },
    { title: "Homeschooling Visual Arts", duration: "15 minutes" },
    { title: "Why You Should Teach Art", duration: "18 minutes" },
    { title: "Watercolor Joy Presentation (Bonus)", duration: "44 minutes" },
  ],
  features: ["3 core videos + 1 bonus", "Sent to your email", "For homeschool parents", "Ages 3–12"],
  audience: ["Homeschool parents", "Parents with children ages 3–12"],
  includes: ["3 training videos", "1 bonus Watercolor Joy video"],
  ctaLabel: "Buy Now",
  disclaimers: [GLOBAL_TRAINING_DISCLAIMERS.trainingRestriction],
  contactEmail: "Info@Spramani.com",
};

export const infantToddlerTrainingExtract: TrainingExtract = {
  id: "infant-toddler-art",
  title: "Infant & Toddler Webinar",
  sourceUrl: "https://keap.page/hj952/infant-toddler-webinar.html",
  newUrl: "/training/infant-toddler-art",
  platform: "Keap" as const,
  contentVerified: true,
  pricingVerificationNeeded: true,
  fallbackExternalUrl: "https://keap.page/hj952/infant-toddler-webinar.html",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "1 hour pre-recorded live training. Price not clearly visible on public page.",

  subtitle: "Art activities for your youngest students",
  summary: "Pre-recorded webinar for guides, teachers, and parents on art activities for infants and toddlers.",
  price: "",
  priceStatus: "pending-backend",
  accessPeriod: "1 year access",
  videos: [{ title: "Infant & Toddler Art Webinar", duration: "1 hour" }],
  features: [
    "Appropriate art prompts",
    "Staging inviting art experiences",
    "Colorful materials",
    "Art activities",
    "Story books to introduce art elements",
  ],
  audience: ["Guides", "Teachers", "Parents"],
  includes: ["1 hour pre-recorded webinar"],
  ctaLabel: "Sign Up",
  disclaimers: [GLOBAL_TRAINING_DISCLAIMERS.trainingRestriction],
  contactEmail: "Info@Spramani.com",
};

export const artShelfTrainingExtract: TrainingExtract = {
  id: "art-shelf",
  title: "Learn How To Stage An Art Shelf",
  sourceUrl: "https://keap.page/hj952/new-landing-page3.html",
  newUrl: "/training/art-shelf",
  platform: "Keap" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://keap.page/hj952/new-landing-page3.html",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Proprietary Art Shelf System. 1:15 hr video. 11 structures to staging an art shelf.",

  subtitle: "Learn my proprietary Art Shelf System",
  summary: "On-demand video training on how to stage a Montessori art shelf that children actually use.",
  price: "$45.00",
  priceStatus: "verified-public",
  accessPeriod: "1 year access",
  videos: [{ title: "How To Stage An Art Shelf", duration: "1 hour 15 minutes" }],
  features: [
    "Proprietary Art Shelf System",
    "11 structures to staging an art shelf",
    "On-demand video",
    "Professional development available upon request",
  ],
  audience: ["Montessori guides", "Teachers", "Homeschool parents"],
  includes: ["1:15 hour video training", "11 staging structures"],
  ctaLabel: "Buy Now",
  disclaimers: [GLOBAL_TRAINING_DISCLAIMERS.trainingRestriction],
  contactEmail: "Info@Spramani.com",
};

export const processBasedArtTrainingExtract: TrainingExtract = {
  id: "process-based-art",
  title: "Process-Based Art Video Training",
  sourceUrl: "https://keap.page/hj952/process-based-video-training.html",
  newUrl: "/training/process-based-art",
  platform: "Keap" as const,
  contentVerified: true,
  pricingVerificationNeeded: true,
  fallbackExternalUrl: "https://keap.page/hj952/process-based-video-training.html",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Price not clearly visible on public page. Pre-recorded video sent by email.",

  subtitle: "How to run a proper process-based art activity",
  summary:
    "Understand what process-based art is and is not, what part you need to instruct, common misconceptions, and the silent problem agreement between schools and parents.",
  price: "",
  priceStatus: "pending-backend",
  accessPeriod: "1 year access",
  videos: [{ title: "Process-Based Art Training" }],
  features: [
    "What process-based art is",
    "What process-based art is not",
    "What part you need to instruct",
    "Common misconceptions",
    "Silent problem agreement between schools and parents",
  ],
  audience: ["Teachers", "Parents", "Montessori guides"],
  includes: ["Pre-recorded video sent by email"],
  ctaLabel: "Sign Up",
  disclaimers: [GLOBAL_TRAINING_DISCLAIMERS.trainingRestriction],
  contactEmail: "Info@Spramani.com",
};

export const positiveArtTalkTrainingExtract: TrainingExtract = {
  id: "positive-art-talk",
  title: "Positive Art Talk",
  sourceUrl: "https://keap.page/hj952/positive-artful-talk-vide-training.html",
  newUrl: "/training/positive-art-talk",
  platform: "Keap" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://keap.page/hj952/positive-artful-talk-vide-training.html",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Video sent to email.",

  subtitle: "Positive Artful Ways To Talk To Your Students",
  summary: "Learn positive, constructive ways to talk with children about their art.",
  price: "$19.00",
  priceStatus: "verified-public",
  accessPeriod: "Videos sent to email",
  videos: [{ title: "Positive Art Talk" }],
  features: ["Positive artful language", "Great for early childhood and elementary grades"],
  audience: ["Early childhood educators", "Elementary teachers", "Parents"],
  includes: ["Video sent to email"],
  ctaLabel: "Buy Now",
  disclaimers: [GLOBAL_TRAINING_DISCLAIMERS.trainingRestriction],
  contactEmail: "Info@Spramani.com",
};

export const paintingKeyLessonsTrainingExtract: TrainingExtract = {
  id: "painting-key-lessons",
  title: "Painting Key Lessons 101",
  sourceUrl: "https://spramani.lpages.co/october-online-training/",
  newUrl: "/training/painting-key-lessons",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://spramani.lpages.co/october-online-training/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Limited time offer price shown on public page.",

  subtitle: "Online Video Course",
  summary: "Best for primary and elementary teachers, parents, and art instructors. Pre-recorded live video session.",
  price: "$65.00",
  originalPrice: "$197.00",
  priceStatus: "verified-public",
  accessPeriod: "1 year access",
  pdHours: 1.5,
  videos: [{ title: "Painting Key Lessons 101" }],
  features: [
    "Pre-recorded live video session",
    "1.5 PD hours available",
    "1 year access",
    "Best for primary and elementary",
  ],
  audience: ["Primary teachers", "Elementary teachers", "Parents", "Art instructors"],
  includes: ["Online video course", "1.5 PD hours certificate"],
  ctaLabel: "Enroll Now",
  disclaimers: [GLOBAL_TRAINING_DISCLAIMERS.trainingRestriction],
  contactEmail: "Info@Spramani.com",
};

export const natureArtTrainingExtract: TrainingExtract = {
  id: "nature-art",
  title: "Theme Art & The Natural World",
  sourceUrl: "https://keap.page/hj952/theming-art-the-natural-world.html",
  newUrl: "/training/nature-art",
  platform: "Keap" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://keap.page/hj952/theming-art-the-natural-world.html",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "3 videos. 2 hr CPD for Montessori guide/teacher. Includes PDFs/checklists/book list.",

  subtitle: "Pre-recorded video training",
  summary: "Learn to theme art activities around the natural world. Great for early childhood and elementary grades.",
  price: "$57.00",
  priceStatus: "verified-public",
  accessPeriod: "1 year access",
  cpdHours: 2,
  videos: [
    { title: "Theme Art & The Natural World — Video 1" },
    { title: "Theme Art & The Natural World — Video 2" },
    { title: "Theme Art & The Natural World — Video 3" },
  ],
  features: [
    "3 pre-recorded videos",
    "2 hr CPD for Montessori guide/teacher",
    "Includes PDFs, checklists, and book list",
    "Great for early childhood and elementary grades",
  ],
  audience: ["Parents", "Homeschooling families", "Montessori guides", "Teachers"],
  includes: ["3 video trainings", "PDFs", "Checklists", "Book list"],
  ctaLabel: "Buy Now",
  disclaimers: [GLOBAL_TRAINING_DISCLAIMERS.trainingRestriction],
  contactEmail: "Info@Spramani.com",
};

// ------------------------------------------------------------------
// 4. Free Resources
// ------------------------------------------------------------------

export interface FreeResourceExtract extends ExtractedPage {
  subtitle: string;
  summary: string;
  ctaLabel: string;
  benefits: string[];
  videoCount?: number;
  accessType: string;
  audience: string[];
}

export const colorMixingVideoExtract: FreeResourceExtract = {
  id: "color-mixing-video",
  title: "How to Set-Up One Color Prompt",
  sourceUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
  newUrl: "/free-resources/color-mixing-video",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Lead magnet. Free video lesson.",

  subtitle: "WATCH FREE VIDEO!",
  summary: "Free video on how to set up one color prompt and engage students with color invitations.",
  ctaLabel: "YES, I WANT MY DOWNLOAD!",
  benefits: ["Free video lesson", "Color prompt setup guide", "Student engagement strategies"],
  videoCount: 1,
  accessType: "Free instant access",
  audience: ["Teachers", "Parents", "Montessori guides"],
};

export const storybookArtVideoExtract: FreeResourceExtract = {
  id: "storybook-art-video",
  title: "Theme Art Activities With Storybooks",
  sourceUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
  newUrl: "/free-resources/storybook-art-video",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Lead magnet. 1 hour free video training.",

  subtitle: "Learn How-to Theme Art Activities – Easily With Storybooks",
  summary:
    "Free limited-time 1 hour video hosted by Spramani Elaun. Learn easy ways to teach art lessons and secrets to theming art with storytime books.",
  ctaLabel: "CLICK HERE – SIGN UP / WATCH VIDEO NOW",
  benefits: [
    "1 hour free video training",
    "Instant access",
    "Easy ways to teach art lessons",
    "Secrets to theming art with storytime books",
    "Quick planning ideas for scheduling art activities",
  ],
  videoCount: 1,
  accessType: "Free limited-time registration",
  audience: ["Teachers", "Parents", "Montessori guides"],
};

export const phasesOfArtDevelopmentExtract: FreeResourceExtract = {
  id: "phases-of-art-development",
  title: "Phases of Art Development",
  sourceUrl: "https://spramani.lpages.co/phases-of-development-art-project-video-course",
  newUrl: "/free-resources/phases-of-art-development",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://spramani.lpages.co/phases-of-development-art-project-video-course",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Lead magnet. 3 free videos.",

  subtitle: "Free Video: Phases of Art Development",
  summary: "Register to watch 3 free videos covering art development from toddler through elementary years.",
  ctaLabel: "Register to Watch",
  benefits: [
    "3 free videos",
    "Video 1: Toddler art development",
    "Video 2: 3–6 years art development",
    "Video 3: 6–12 years art development",
  ],
  videoCount: 3,
  accessType: "Free limited-time registration",
  audience: ["Teachers", "Parents", "Montessori guides"],
};

// ------------------------------------------------------------------
// 5. Certification Pages
// ------------------------------------------------------------------

export interface CertificationExtract extends ExtractedPage {
  subtitle: string;
  summary: string;
  priceOptions: { label: string; price: string; verified: VerificationStatus }[];
  duration: string;
  accessPeriod: string;
  videoCount: number;
  includes: string[];
  certificationIncludes: string[];
  governanceRestrictions: string[];
  features: string[];
  audience: string[];
  testimonials: { quote: string; author: string; role?: string }[];
  ctaLabel: string;
  disclaimers: string[];
  contactEmail: string;
}

export const certificationOverviewExtract: CertificationExtract = {
  id: "certification-overview",
  title: "Art Teaching Blueprint Certification",
  sourceUrl: "https://spramani.lpages.co/arttraining2020-waitlist/",
  newUrl: "/certification",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: true,
  fallbackExternalUrl: "https://spramani.lpages.co/arttraining2020-waitlist/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "CONFLICT: arttraining2020-waitlist shows $668/$1,499. artteachingblueprint shows $699/$1,500. Prices marked pending-backend-verification.",

  subtitle: "Professional Certification in Montessori Art Education",
  summary:
    "The Art Teaching Blueprint™ is a 7-week online professional training program for educators who want to teach visual arts with confidence, sequence, and developmental understanding.",
  priceOptions: [
    { label: "Self-Paced Professional Training", price: "$668", verified: "pending-backend" },
    { label: "Professional Development Certification + Coaching", price: "$1,499", verified: "pending-backend" },
  ],
  duration: "7 weeks",
  accessPeriod: "3 years of access",
  videoCount: 60,
  includes: [
    "60+ professional training videos",
    "Digital PDF workbook",
    "Online email support",
    "Self-guided / self-paced",
    "Immediate access",
  ],
  certificationIncludes: [
    "Live coaching",
    "Practicum",
    "Individualized feedback",
    "Complimentary curriculum consultation",
    "50 CPD hours",
    "Printed certificate",
  ],
  governanceRestrictions: [
    "Certified facilitators may teach visual arts directly to children.",
    "They may not train, certify, or credential other educators.",
    "They may not reproduce, rebrand, or present the Science Art Method™ as a school-developed or Montessori-authored system.",
  ],
  features: [
    "7-week online professional training",
    "Self-guided / self-paced",
    "Immediate access",
    "Three years of access",
    "60+ professional training videos",
    "Digital PDF workbook",
    "Online email support",
  ],
  audience: [
    "Montessori guides",
    "Homeschool parents",
    "Art teachers",
    "Early childhood educators",
    "School leaders",
  ],
  testimonials: [
    {
      quote: "The Art Teaching Blueprint changed how I approach art in my classroom. I finally feel confident.",
      author: "Dawn Mc Gregor",
      role: "Montessori Guide",
    },
  ],
  ctaLabel: "Request Program Details",
  disclaimers: [
    GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod,
    "Certified facilitators may teach visual arts directly to children but may not train, certify, or credential other educators.",
  ],
  contactEmail: "Info@Spramani.com",
};

export const certificationBlueprintExtract: CertificationExtract = {
  id: "certification-blueprint",
  title: "Art Teaching Blueprint",
  sourceUrl: "https://spramani.lpages.co/artteachingblueprint/",
  newUrl: "/certification/art-teaching-blueprint",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: true,
  fallbackExternalUrl: "https://spramani.lpages.co/artteachingblueprint/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "CONFLICT: artteachingblueprint shows $699/$1,500. arttraining2020-waitlist shows $668/$1,499. Prices marked pending-backend-verification.",

  subtitle: "Professional Certification in Montessori Art Education",
  summary:
    "The Art Teaching Blueprint™ is a comprehensive certification program for educators ready to lead meaningful, structured, and joyful art experiences in the Montessori environment.",
  priceOptions: [
    { label: "Self-Paced Professional Training", price: "$699", verified: "pending-backend" },
    { label: "Professional Development Certification + Coaching", price: "$1,500", verified: "pending-backend" },
  ],
  duration: "7 weeks",
  accessPeriod: "3 years of access",
  videoCount: 60,
  includes: [
    "60+ professional training videos",
    "Digital PDF workbook",
    "Online email support",
    "Self-guided / self-paced",
    "Immediate access",
  ],
  certificationIncludes: [
    "Live coaching",
    "Practicum",
    "Individualized feedback",
    "Complimentary curriculum consultation",
    "50 CPD hours",
    "Printed certificate",
  ],
  governanceRestrictions: [
    "Certified facilitators may teach visual arts directly to children.",
    "They may not train, certify, or credential other educators.",
    "They may not reproduce, rebrand, or present the Science Art Method™ as a school-developed or Montessori-authored system.",
  ],
  features: [
    "7-week online professional training",
    "Self-guided / self-paced",
    "Immediate access",
    "Three years of access",
    "60+ professional training videos",
    "Digital PDF workbook",
    "Online email support",
  ],
  audience: [
    "Montessori guides",
    "Homeschool parents",
    "Art teachers",
    "Early childhood educators",
    "School leaders",
  ],
  testimonials: [
    {
      quote: "The Art Teaching Blueprint changed how I approach art in my classroom. I finally feel confident.",
      author: "Dawn Mc Gregor",
      role: "Montessori Guide",
    },
  ],
  ctaLabel: "Request Program Details",
  disclaimers: [
    GLOBAL_CURRICULUM_DISCLAIMERS.scienceArtMethod,
    "Certified facilitators may teach visual arts directly to children but may not train, certify, or credential other educators.",
  ],
  contactEmail: "Info@Spramani.com",
};

// ------------------------------------------------------------------
// 6. Bookstore
// ------------------------------------------------------------------

export interface BookstoreProduct {
  id: string;
  name: string;
  category: "book" | "curriculum" | "bundle";
  priceStatus: VerificationStatus;
  price?: string;
  productUrl?: string;
  notes: string;
}

export const bookstoreExtract = {
  id: "bookstore",
  title: "Art Books",
  sourceUrl: "https://spramani.lpages.co/all-my-books/",
  newUrl: "/bookstore",
  platform: "Leadpages" as const,
  contentVerified: true,
  pricingVerificationNeeded: true,
  fallbackExternalUrl: "https://spramani.lpages.co/all-my-books/",
  integrationStatus: "fallback-external" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Catalog page. Many product buttons link to Keap or other legacy pages. Individual product pages need separate extraction for pricing.",

  heroMessage:
    "You believe art matters for children. You just weren't trained to teach it — and most of the educators around you weren't either. These books were written for that educator.",

  products: [
    { id: "way-children-make-art", name: "The Way Children Make Art", category: "book", priceStatus: "pending-backend", notes: "Price not visible on public catalog page" },
    { id: "early-childhood-art", name: "Early Childhood Art", category: "book", priceStatus: "pending-backend", notes: "Price not visible on public catalog page" },
    { id: "defining-visual-arts", name: "Defining Visual Arts", category: "book", priceStatus: "pending-backend", notes: "Price not visible on public catalog page" },
    { id: "for-early-childhood", name: "For Early Childhood", category: "book", priceStatus: "pending-backend", notes: "Price not visible on public catalog page" },
    { id: "elementary-art-guide", name: "Elementary Art Guide", category: "book", priceStatus: "pending-backend", notes: "Price not visible on public catalog page" },
    { id: "kids-color-theory-book", name: "Kids Color Theory", category: "book", priceStatus: "pending-backend", notes: "Book edition (separate from curriculum)" },
    { id: "nurturing-children-visual-arts", name: "Nurturing Children in The Visual Arts Naturally", category: "book", priceStatus: "pending-backend", notes: "Price not visible on public catalog page" },
    { id: "kids-painting", name: "Kids Painting", category: "curriculum", priceStatus: "verified-public", price: "$155.00 (paperback), $97.00 (digital)", notes: "57 brushstroke lessons. Price verified from public curriculum page." },
    { id: "clay-play", name: "Clay Play", category: "book", priceStatus: "pending-backend", notes: "Price not visible on public catalog page. CONFLICT: catalog says 27 lessons, sales page says 29." },
    { id: "art-teaching-curriculum", name: "Art Teaching Curriculum", category: "book", priceStatus: "pending-backend", notes: "Price not visible on public catalog page" },
    { id: "elementary-drawing-curriculum", name: "Elementary Drawing Curriculum", category: "curriculum", priceStatus: "verified-public", price: "$155.00 (paperback), $97.00 (digital)", notes: "47 studios. Price verified from public curriculum page." },
    { id: "early-childhood-drawing-curriculum", name: "Early Childhood Drawing Curriculum", category: "curriculum", priceStatus: "verified-public", price: "$135.00 (paperback), $72.00 (digital)", notes: "16 studios. Price verified from public curriculum page." },
    { id: "paint-curriculum", name: "Paint Curriculum, 57 brushstroke lessons", category: "curriculum", priceStatus: "verified-public", price: "$155.00 (paperback), $97.00 (digital)", notes: "Same as Kids Painting. Price verified from public curriculum page." },
    { id: "kids-painting-plus-elementary", name: "Kids Painting + Painting Work For Elementary Grades", category: "bundle", priceStatus: "pending-backend", notes: "Bundle pricing not visible on public catalog page" },
    { id: "kids-color-theory-curriculum", name: "Kids Color Theory Curriculum, 37 mixing lessons", category: "curriculum", priceStatus: "verified-public", price: "$155.00 (paperback), $97.00 (digital)", notes: "37 lessons. Price verified from public curriculum page." },
    { id: "clay-modeling", name: "Clay Modeling", category: "curriculum", priceStatus: "verified-public", price: "$145.00 (paperback), $97.00 (digital)", notes: "29 studios. Price verified from public curriculum page. CONFLICT: catalog says 27 lessons." },
  ] as BookstoreProduct[],
};

// ------------------------------------------------------------------
// 7. Blog Posts (from homepage grid)
// ------------------------------------------------------------------

export interface BlogPostExtract {
  slug: string;
  title: string;
  category: string;
  sourceUrl: string;
  newUrl: string;
  excerpt?: string;
  date?: string;
  contentVerified: boolean;
  notes: string;
}

export const blogPostExtracts: BlogPostExtract[] = [
  // Original 4 from homepage grid
  {
    slug: "easy-drawing-ideas-for-young-children",
    title: "Easy Drawing Ideas for Young Children",
    category: "Drawing",
    sourceUrl: "https://montessori-art.com/easy-drawing-ideas-for-young-children/",
    newUrl: "/blog/easy-drawing-ideas-for-young-children",
    contentVerified: false,
    notes: "Visible on homepage post grid. Full content needs WordPress export.",
  },
  {
    slug: "boost-strength-with-clay-play",
    title: "Boost Strength with Clay Play",
    category: "Clay",
    sourceUrl: "https://montessori-art.com/boost-strength-with-clay-play/",
    newUrl: "/blog/boost-strength-with-clay-play",
    contentVerified: false,
    notes: "Visible on homepage post grid. Full content needs WordPress export.",
  },
  {
    slug: "clay-modeling-play-for-toddlers",
    title: "Clay Modeling Play for Toddlers | Why and How It Supports Early Creativity",
    category: "Clay",
    sourceUrl: "https://montessori-art.com/clay-modeling-play-for-toddlers/",
    newUrl: "/blog/clay-modeling-play-for-toddlers",
    contentVerified: false,
    notes: "Visible on homepage post grid. Full content needs WordPress export.",
  },
  {
    slug: "primary-homeschool-art-curriculum",
    title: "Primary Homeschool Art Curriculum, Done-For-You Art Learning at Home",
    category: "Curriculum",
    sourceUrl: "https://montessori-art.com/primary-homeschool-art-curriculum/",
    newUrl: "/blog/primary-homeschool-art-curriculum",
    contentVerified: false,
    notes: "Visible on homepage post grid. Full content needs WordPress export.",
  },
  // Additional posts from public sitemap (montessori-art.com/sitemap-1.xml)
  {
    slug: "10-montessori-back-to-school-art-environment-readiness-tips-video",
    title: "10 Back To School Art Tips – For The Montessori Classroom",
    category: "Art Shelf",
    sourceUrl: "https://montessori-art.com/10-montessori-back-to-school-art-environment-readiness-tips-video/",
    newUrl: "/blog/10-montessori-back-to-school-art-environment-readiness-tips-video",
    date: "2026-01-16",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "10-items-to-include-in-your-montessori-art-shelf",
    title: "10 Items To Include In Your Montessori Art Shelf",
    category: "Art Shelf",
    sourceUrl: "https://montessori-art.com/10-items-to-include-in-your-montessori-art-shelf/",
    newUrl: "/blog/10-items-to-include-in-your-montessori-art-shelf",
    date: "2026-01-08",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "5-montessori-art-making-ideas",
    title: "5 Art-Making Ideas to Inspire Creativity in Children",
    category: "Art Activities",
    sourceUrl: "https://montessori-art.com/5-montessori-art-making-ideas/",
    newUrl: "/blog/5-montessori-art-making-ideas",
    date: "2018-09-18",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "25-art-supplies-every-montessori-classroom-needs",
    title: "25 Art Supplies Every Montessori Classroom Needs",
    category: "Art Supplies",
    sourceUrl: "https://montessori-art.com/25-art-supplies-every-montessori-classroom-needs/",
    newUrl: "/blog/25-art-supplies-every-montessori-classroom-needs",
    date: "2026-01-08",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "how-to-plan-montessori-art-field-trip",
    title: "How To Plan A Montessori Art Field Trip",
    category: "Field Trips",
    sourceUrl: "https://montessori-art.com/how-to-plan-montessori-art-field-trip/",
    newUrl: "/blog/how-to-plan-montessori-art-field-trip",
    date: "2026-03-21",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "fall-leaf-ideas-montessori-classroom",
    title: "Fall Leaf Ideas Montessori Classroom",
    category: "Seasonal",
    sourceUrl: "https://montessori-art.com/fall-leaf-ideas-montessori-classroom/",
    newUrl: "/blog/fall-leaf-ideas-montessori-classroom",
    date: "2026-03-06",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "5-ways-to-integrate-art-and-the-great-lessons",
    title: "5 Ways To Integrate Art and the Great Lessons",
    category: "Curriculum",
    sourceUrl: "https://montessori-art.com/5-ways-to-integrate-art-and-the-great-lessons/",
    newUrl: "/blog/5-ways-to-integrate-art-and-the-great-lessons",
    date: "2026-01-12",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "ways-to-stimulate-positive-art-talk-in-montessori-classrooms",
    title: "Ways To Stimulate Positive Art Talk In Montessori Classrooms",
    category: "Art Language",
    sourceUrl: "https://montessori-art.com/ways-to-stimulate-positive-art-talk-in-montessori-classrooms/",
    newUrl: "/blog/ways-to-stimulate-positive-art-talk-in-montessori-classrooms",
    date: "2026-03-13",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "setting-up-montessori-classroom-art-space",
    title: "Setting Up Montessori Classroom Art Space",
    category: "Art Shelf",
    sourceUrl: "https://montessori-art.com/setting-up-montessori-classroom-art-space/",
    newUrl: "/blog/setting-up-montessori-classroom-art-space",
    date: "2026-01-08",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "the-value-of-art-journaling-for-kids-montessori-activities",
    title: "The Value of Art Journaling for Kids Montessori Activities",
    category: "Journaling",
    sourceUrl: "https://montessori-art.com/the-value-of-art-journaling-for-kids-montessori-activities/",
    newUrl: "/blog/the-value-of-art-journaling-for-kids-montessori-activities",
    date: "2026-03-13",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "3-montessori-art-projects-for-winter",
    title: "3 Montessori Art Projects for Winter",
    category: "Seasonal",
    sourceUrl: "https://montessori-art.com/3-montessori-art-projects-for-winter/",
    newUrl: "/blog/3-montessori-art-projects-for-winter",
    date: "2026-01-16",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "teaching-process-based-art-in-the-montessori-classroom",
    title: "Teaching Process-Based Art In The Montessori Classroom",
    category: "Pedagogy",
    sourceUrl: "https://montessori-art.com/teaching-process-based-art-in-the-montessori-classroom/",
    newUrl: "/blog/teaching-process-based-art-in-the-montessori-classroom",
    date: "2026-01-07",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "ultimate-montessori-art-teaching-method-guide",
    title: "Ultimate Montessori Art Teaching Method Guide",
    category: "Methodology",
    sourceUrl: "https://montessori-art.com/ultimate-montessori-art-teaching-method-guide/",
    newUrl: "/blog/ultimate-montessori-art-teaching-method-guide",
    date: "2026-01-12",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "how-art-helps-develop-kids-fine-motor-skills",
    title: "How Art Helps Develop Kids Fine Motor Skills",
    category: "Development",
    sourceUrl: "https://montessori-art.com/how-art-helps-develop-kids-fine-motor-skills/",
    newUrl: "/blog/how-art-helps-develop-kids-fine-motor-skills",
    date: "2026-01-08",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "montessori-color-mixing-activity-exploring-one-color-at-a-time",
    title: "Montessori Color Mixing Activity Exploring One Color At A Time",
    category: "Color Theory",
    sourceUrl: "https://montessori-art.com/montessori-color-mixing-activity-exploring-one-color-at-a-time/",
    newUrl: "/blog/montessori-color-mixing-activity-exploring-one-color-at-a-time",
    date: "2026-03-11",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
  {
    slug: "outdoor-nature-journaling-montessori-kids",
    title: "Outdoor Nature Journaling Montessori Kids",
    category: "Journaling",
    sourceUrl: "https://montessori-art.com/outdoor-nature-journaling-montessori-kids/",
    newUrl: "/blog/outdoor-nature-journaling-montessori-kids",
    date: "2026-03-06",
    contentVerified: false,
    notes: "Added from public sitemap. Excerpt pending manual extraction.",
  },
];

// ------------------------------------------------------------------
// 8. Terms of Service (structure only — full text pending extraction)
// ------------------------------------------------------------------

export const termsOfServiceExtract = {
  id: "terms-of-service",
  title: "Terms of Service",
  sourceUrl: "https://montessori-art.com/terms-of-service/",
  newUrl: "/terms-of-service",
  platform: "WordPress" as const,
  contentVerified: true,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://montessori-art.com/terms-of-service/",
  integrationStatus: "native-page-built" as const,
  migrationStatus: "public-content-extracted" as const,
  notes: "Legal page. Full text extracted. Covers Science Art Method™ proprietary rights, copyright, individual use license, no redistribution.",
  keyTopics: [
    "Science Art Method™ as proprietary teaching system",
    "No permission to adapt, teach, or redistribute as a training model",
    "Copyright restrictions",
    "Materials licensed for individual classroom use with children only",
    "No permission to train other educators",
    "No permission to create derivative works",
    "No permission to present method as school-developed or Montessori-authored system",
  ],
};

// ------------------------------------------------------------------
// 9. Accessibility Statement (pending manual verification)
// ------------------------------------------------------------------

export const accessibilityExtract = {
  id: "accessibility",
  title: "Accessibility Statement",
  sourceUrl: "https://montessori-art.com/accessibility-statement/",
  newUrl: "/accessibility",
  platform: "WordPress" as const,
  contentVerified: false,
  pricingVerificationNeeded: false,
  fallbackExternalUrl: "https://montessori-art.com/accessibility-statement/",
  integrationStatus: "mapped" as const,
  migrationStatus: "pending-public-extraction" as const,
  notes: "Crawler had issues accessing this page. Needs manual verification.",
};

// ------------------------------------------------------------------
// All Extracted Pages Combined
// ------------------------------------------------------------------

export const allExtractedPages: ExtractedPage[] = [
  aboutExtract,
  paintingCurriculumExtract,
  paintingWorkExtract,
  drawingCurriculumExtract,
  colorTheoryCurriculumExtract,
  clayModelingCurriculumExtract,
  homeschoolingArtTrainingExtract,
  infantToddlerTrainingExtract,
  artShelfTrainingExtract,
  processBasedArtTrainingExtract,
  positiveArtTalkTrainingExtract,
  paintingKeyLessonsTrainingExtract,
  natureArtTrainingExtract,
  colorMixingVideoExtract,
  storybookArtVideoExtract,
  phasesOfArtDevelopmentExtract,
  certificationOverviewExtract,
  certificationBlueprintExtract,
  bookstoreExtract,
  termsOfServiceExtract,
  accessibilityExtract,
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
    paintingWorkExtract,
    drawingCurriculumExtract,
    colorTheoryCurriculumExtract,
    clayModelingCurriculumExtract,
  ];
}

export function getTrainingExtracts(): TrainingExtract[] {
  return [
    homeschoolingArtTrainingExtract,
    infantToddlerTrainingExtract,
    artShelfTrainingExtract,
    processBasedArtTrainingExtract,
    positiveArtTalkTrainingExtract,
    paintingKeyLessonsTrainingExtract,
    natureArtTrainingExtract,
  ];
}

export function getFreeResourceExtracts(): FreeResourceExtract[] {
  return [colorMixingVideoExtract, storybookArtVideoExtract, phasesOfArtDevelopmentExtract];
}

export function getCertificationExtracts(): CertificationExtract[] {
  return [certificationOverviewExtract, certificationBlueprintExtract];
}

export function getVerifiedProducts(): BookstoreProduct[] {
  return bookstoreExtract.products.filter((p) => p.priceStatus === "verified-public");
}

export function getPendingProducts(): BookstoreProduct[] {
  return bookstoreExtract.products.filter((p) => p.priceStatus === "pending-backend");
}
