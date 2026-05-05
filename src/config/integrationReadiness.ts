// ============================================================
// Integration Readiness Config — Nature of Art®
// ============================================================
// This file tracks backend integration status for all external
// services. It is the source of truth for what is connected,
// what uses fallback URLs, and what is pending.
//
// DO NOT put real API keys or secrets here. Use environment
// variables for sensitive values.
// ============================================================

export type IntegrationService =
  | "keap"
  | "stripe"
  | "volusion"
  | "leadpages"
  | "wordpress"
  | "google-analytics-4"
  | "meta-pixel";

export type ConnectionStatus =
  | "connected"
  | "fallback-external"
  | "pending-backend-verification"
  | "disabled"
  | "test-mode";

export interface IntegrationConfig {
  service: IntegrationService;
  status: ConnectionStatus;
  envVarName: string;
  fallbackUrl?: string;
  notes: string;
  blockingForLaunch: boolean;
}

export const integrationConfigs: IntegrationConfig[] = [
  {
    service: "keap",
    status: "disabled",
    envVarName: "KEAP_API_KEY",
    notes:
      "Contact form and newsletter submissions route to /api/keap. Currently returns placeholder in dev. Needs KEAP_API_KEY and KEAP_ENABLED env vars in production.",
    blockingForLaunch: false,
  },
  {
    service: "stripe",
    status: "disabled",
    envVarName: "STRIPE_SECRET_KEY",
    notes:
      "No real Stripe checkout built. Product/price IDs can be added to curriculum/training configs for future checkout integration. Do NOT show public Stripe pricing until verified.",
    blockingForLaunch: false,
  },
  {
    service: "volusion",
    status: "fallback-external",
    envVarName: "N/A",
    fallbackUrl: "https://www.montessori-art.com/",
    notes:
      "Store links point to legacy Volusion URLs (shoppingcart.asp, myaccount.asp, Contact_Us_a/83.htm). No native checkout built.",
    blockingForLaunch: false,
  },
  {
    service: "leadpages",
    status: "fallback-external",
    envVarName: "N/A",
    notes:
      "Free resource videos and some curriculum pages fall back to Leadpages URLs. LeadMagnetPageTemplate supports fallback-external mode.",
    blockingForLaunch: false,
  },
  {
    service: "wordpress",
    status: "fallback-external",
    envVarName: "N/A",
    fallbackUrl: "https://montessori-art.com/",
    notes:
      "Blog posts link to original WordPress URLs until content is migrated. Homepage is native.",
    blockingForLaunch: false,
  },
  {
    service: "google-analytics-4",
    status: "disabled",
    envVarName: "NEXT_PUBLIC_GA4_ID",
    notes:
      "Analytics event names prepared (resource_card_click, newsletter_cta_click, curriculum_explore_click). GA4 not wired yet.",
    blockingForLaunch: false,
  },
  {
    service: "meta-pixel",
    status: "disabled",
    envVarName: "NEXT_PUBLIC_META_PIXEL_ID",
    notes: "Meta Pixel not wired. Event names prepared alongside GA4 events.",
    blockingForLaunch: false,
  },
];

// ------------------------------------------------------------------
// Analytics Event Names (prepared, not wired)
// ------------------------------------------------------------------

export const analyticsEvents = {
  // Resource Library
  resourceCardClick: "resource_card_click",
  resourceVideoPlay: "resource_video_play",
  resourceDownloadClick: "resource_download_click",

  // Newsletter
  newsletterCtaClick: "newsletter_cta_click",
  newsletterSubmit: "newsletter_submit",
  newsletterSuccess: "newsletter_success",

  // Curriculum
  curriculumExploreClick: "curriculum_explore_click",
  curriculumAreaClick: "curriculum_area_click",
  curriculumPurchaseClick: "curriculum_purchase_click",

  // Store
  storeCategoryClick: "store_category_click",
  storeProductClick: "store_product_click",

  // Certification
  certificationCtaClick: "certification_cta_click",

  // Contact
  contactFormSubmit: "contact_form_submit",
  contactFormSuccess: "contact_form_success",
} as const;

// ------------------------------------------------------------------
// Stripe Product Placeholders (ready for future checkout)
// ------------------------------------------------------------------

export interface StripeProductPlaceholder {
  internalId: string;
  name: string;
  stripeProductId?: string;
  stripePriceId?: string;
  checkoutStatus: ConnectionStatus;
}

export const stripeProductPlaceholders: StripeProductPlaceholder[] = [
  {
    internalId: "painting-curriculum-paperback",
    name: "Kids Painting — Paperback",
    checkoutStatus: "disabled",
  },
  {
    internalId: "painting-curriculum-digital",
    name: "Kids Painting — Digital PDF",
    checkoutStatus: "disabled",
  },
  {
    internalId: "drawing-curriculum-ec-paperback",
    name: "Drawing Curriculum — Early Childhood Paperback",
    checkoutStatus: "disabled",
  },
  {
    internalId: "drawing-curriculum-elem-paperback",
    name: "Drawing Curriculum — Elementary Paperback",
    checkoutStatus: "disabled",
  },
  {
    internalId: "color-theory-paperback",
    name: "Sequential Color Theory — Paperback",
    checkoutStatus: "disabled",
  },
  {
    internalId: "clay-modeling-paperback",
    name: "Kids Clay Modeling — Paperback",
    checkoutStatus: "disabled",
  },
  {
    internalId: "certification-self-paced",
    name: "Art Teaching Blueprint — Self-Paced",
    checkoutStatus: "disabled",
  },
  {
    internalId: "certification-coaching",
    name: "Art Teaching Blueprint — Certification + Coaching",
    checkoutStatus: "disabled",
  },
];
