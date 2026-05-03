// ============================================================
// Integration Configuration — Montessori Art Website
// ============================================================
// All values are placeholders. Real credentials must be added
// via environment variables after login access is obtained.
// NEVER commit real API keys or secrets to this file.
// ============================================================

export const KEAP_CONFIG = {
  enabled: false,
  apiKey: process.env.NEXT_PUBLIC_KEAP_API_KEY || "",
  baseUrl: "https://api.infusionsoft.com/crm/rest/v1",

  // Form IDs (to be filled after Keap access)
  forms: {
    newsletter: process.env.NEXT_PUBLIC_KEAP_NEWSLETTER_FORM_ID || "",
    freeResources: {
      colorMixing: process.env.NEXT_PUBLIC_KEAP_COLOR_MIXING_FORM_ID || "",
      phasesOfDevelopment: process.env.NEXT_PUBLIC_KEAP_PHASES_FORM_ID || "",
      storybookArt: process.env.NEXT_PUBLIC_KEAP_STORYBOOK_FORM_ID || "",
      paintingChecklist: process.env.NEXT_PUBLIC_KEAP_CHECKLIST_FORM_ID || "",
    },
  },

  // Checkout URLs (to be filled after Keap access)
  checkouts: {
    paintingCurriculum: process.env.NEXT_PUBLIC_CHECKOUT_PAINTING || "",
    drawingCurriculum: process.env.NEXT_PUBLIC_CHECKOUT_DRAWING || "",
    colorTheoryCurriculum: process.env.NEXT_PUBLIC_CHECKOUT_COLOR_THEORY || "",
    clayModelingCurriculum: process.env.NEXT_PUBLIC_CHECKOUT_CLAY || "",
    artTeachingBlueprint: process.env.NEXT_PUBLIC_CHECKOUT_CERTIFICATION || "",
    default: process.env.NEXT_PUBLIC_CHECKOUT_URL || "",
  },

  // Tags (to be filled after Keap access)
  tags: {
    newsletterSubscriber: process.env.NEXT_PUBLIC_KEAP_TAG_NEWSLETTER || "",
    leadMagnetDownload: process.env.NEXT_PUBLIC_KEAP_TAG_LEAD_MAGNET || "",
    curriculumInterest: process.env.NEXT_PUBLIC_KEAP_TAG_CURRICULUM || "",
    certificationInterest: process.env.NEXT_PUBLIC_KEAP_TAG_CERTIFICATION || "",
  },

  // Campaigns (to be filled after Keap access)
  campaigns: {
    welcomeSequence: process.env.NEXT_PUBLIC_KEAP_CAMPAIGN_WELCOME || "",
    leadMagnetDelivery: process.env.NEXT_PUBLIC_KEAP_CAMPAIGN_LEAD_MAGNET || "",
  },
};

export const STORE_CONFIG = {
  // Current store
  currentUrl:
    process.env.NEXT_PUBLIC_STORE_URL ||
    "https://atosb-raxtf.volusion.store/",

  // Future store platform (Shopify, WooCommerce, etc.)
  futureUrl: process.env.NEXT_PUBLIC_FUTURE_STORE_URL || "",

  // Product purchase URLs
  products: {
    paintingCurriculum:
      process.env.NEXT_PUBLIC_PRODUCT_URL_PAINTING || "",
    drawingCurriculum:
      process.env.NEXT_PUBLIC_PRODUCT_URL_DRAWING || "",
    colorTheoryCurriculum:
      process.env.NEXT_PUBLIC_PRODUCT_URL_COLOR_THEORY || "",
    clayModelingCurriculum:
      process.env.NEXT_PUBLIC_PRODUCT_URL_CLAY || "",
    artTeachingBlueprint:
      process.env.NEXT_PUBLIC_PRODUCT_URL_CERTIFICATION || "",
  },

  // Checkout fallback
  fallbackCheckoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL || "#checkout-coming-soon",
};

export const ANALYTICS_CONFIG = {
  ga4: {
    enabled: !!process.env.NEXT_PUBLIC_GA4_ID,
    id: process.env.NEXT_PUBLIC_GA4_ID || "",
  },
  metaPixel: {
    enabled: !!process.env.NEXT_PUBLIC_META_PIXEL_ID,
    id: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },
  keapTracking: {
    enabled: !!process.env.NEXT_PUBLIC_KEAP_TRACKING_ID,
    id: process.env.NEXT_PUBLIC_KEAP_TRACKING_ID || "",
  },
};

export const LEADPAGES_CONFIG = {
  // Old landing page URLs for reference
  oldUrls: [
    "https://spramani.lpages.co/all-my-books/",
    "https://spramani.lpages.co/painting-curriculum-sales-page-/",
    "https://spramani.lpages.co/drawing-curriculum/",
    "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
    "https://spramani.lpages.co/clay-modeling-curriculum/",
    "https://spramani.lpages.co/arttraining2020-waitlist/",
    "https://spramani.lpages.co/artteachingblueprint/",
    "https://spramani.lpages.co/color-mixing-free-video-lesson/",
    "https://spramani.lpages.co/phases-of-development-art-project-video-course",
    "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
  ],

  // Migration status tracking
  migrationStatus: {
    "https://spramani.lpages.co/all-my-books/": { newPath: "/bookstore", status: "planned" },
    "https://spramani.lpages.co/painting-curriculum-sales-page-/": { newPath: "/curriculum/painting", status: "planned" },
    "https://spramani.lpages.co/drawing-curriculum/": { newPath: "/curriculum/drawing", status: "planned" },
    "https://spramani.lpages.co/color-theory-curriculum-sales-page/": { newPath: "/curriculum/color-theory", status: "planned" },
    "https://spramani.lpages.co/clay-modeling-curriculum/": { newPath: "/curriculum/clay-modeling", status: "planned" },
    "https://spramani.lpages.co/arttraining2020-waitlist/": { newPath: "/certification", status: "planned" },
    "https://spramani.lpages.co/artteachingblueprint/": { newPath: "/certification/art-teaching-blueprint", status: "planned" },
    "https://spramani.lpages.co/color-mixing-free-video-lesson/": { newPath: "/free-resources/color-mixing-video", status: "planned" },
    "https://spramani.lpages.co/phases-of-development-art-project-video-course": { newPath: "/free-resources/phases-of-art-development", status: "planned" },
    "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood": { newPath: "/free-resources/storybook-art-video", status: "planned" },
  } as Record<string, { newPath: string; status: string }>,
};

export const EMAIL_CONFIG = {
  // Lead magnet delivery
  leadMagnetDelivery: {
    method: "keap-campaign", // or "direct-download", "email-service"
    campaignId: KEAP_CONFIG.campaigns.leadMagnetDelivery,
    thankYouPagePath: "/free-resources/thank-you",
  },

  // Newsletter
  newsletter: {
    provider: "keap",
    formId: KEAP_CONFIG.forms.newsletter,
    welcomeSequence: KEAP_CONFIG.campaigns.welcomeSequence,
    thankYouMessage:
      "Thank you! Check your email for a welcome message and your first free resource.",
  },
};
