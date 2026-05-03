// ============================================================
// Integration Configuration — Montessori Art Website
// ============================================================
// ALL VALUES ARE PLACEHOLDERS.
// This is a content-preserving redesign. Real credentials must
// be added via environment variables after login access is
// obtained to the existing systems.
//
// SECURITY RULE: Never commit real API keys or secrets.
// KEAP_API_KEY is server-only (not NEXT_PUBLIC_).
// Public env vars are for non-secret config only.
// ============================================================

// ------------------------------------------------------------------
// Keap CRM / Forms / Checkout
// ------------------------------------------------------------------
// Current backend: Keap handles CRM, forms, email automation, and
// some checkout flows. Keap remains the backend until native
// integrations are mapped and replaced.
//
// TODO: After Keap login access is obtained:
// 1. Fill in KEAP_API_KEY in .env.local (server-only, never public)
// 2. Fill in form IDs for each newsletter/lead-magnet
// 3. Fill in checkout URLs for each product
// 4. Fill in tag IDs for segmentation
// 5. Fill in campaign IDs for automation sequences
// 6. Switch KEAP_ENABLED from false to true
// 7. Test all forms end-to-end
// ------------------------------------------------------------------

export const KEAP_CONFIG = {
  // Master switch. Keep false until credentials are configured.
  enabled: process.env.KEAP_ENABLED === "true" || false,

  // Server-only API key. Never expose to browser.
  // This is used exclusively in src/app/api/keap/route.ts
  apiKey: process.env.KEAP_API_KEY || "",

  baseUrl: "https://api.infusionsoft.com/crm/rest/v1",

  // Form IDs (to be filled after Keap access)
  // Legacy source: keap.page forms currently embedded on old site
  forms: {
    newsletter: process.env.NEXT_PUBLIC_KEAP_NEWSLETTER_FORM_ID || "",
    contact: process.env.NEXT_PUBLIC_KEAP_CONTACT_FORM_ID || "",
    freeResources: {
      colorMixing: process.env.NEXT_PUBLIC_KEAP_COLOR_MIXING_FORM_ID || "",
      phasesOfDevelopment: process.env.NEXT_PUBLIC_KEAP_PHASES_FORM_ID || "",
      storybookArt: process.env.NEXT_PUBLIC_KEAP_STORYBOOK_FORM_ID || "",
      paintingChecklist: process.env.NEXT_PUBLIC_KEAP_CHECKLIST_FORM_ID || "",
    },
  },

  // Checkout URLs (to be filled after Keap access)
  // Legacy source: keap.page and keap.app checkout pages
  // TODO: Replace fallback Leadpages/Keap URLs with native checkout
  //       or direct Keap checkout URLs after inventory is complete.
  checkouts: {
    paintingCurriculum: process.env.NEXT_PUBLIC_CHECKOUT_PAINTING || "",
    drawingCurriculum: process.env.NEXT_PUBLIC_CHECKOUT_DRAWING || "",
    colorTheoryCurriculum: process.env.NEXT_PUBLIC_CHECKOUT_COLOR_THEORY || "",
    clayModelingCurriculum: process.env.NEXT_PUBLIC_CHECKOUT_CLAY || "",
    artTeachingBlueprint: process.env.NEXT_PUBLIC_CHECKOUT_CERTIFICATION || "",
    default: process.env.NEXT_PUBLIC_CHECKOUT_URL || "#checkout-pending",
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

// ------------------------------------------------------------------
// Store / Ecommerce
// ------------------------------------------------------------------
// Current backend: Volusion/storefront (atosb-raxtf.volusion.store)
// The store remains active until a migration decision is made.
// Native product pages use fallback external links for now.
//
// TODO: After store access is obtained:
// 1. Map current product SKUs and purchase URLs
// 2. Decide: keep Volusion, move to Shopify, or build native checkout
// 3. Fill in product purchase URLs
// 4. Update BuyButton components to use real checkout flow
// ------------------------------------------------------------------

export const STORE_CONFIG = {
  // Current live store (Volusion)
  // Legacy URL: https://atosb-raxtf.volusion.store/
  // Also: store.ecokidsart.com
  currentUrl:
    process.env.NEXT_PUBLIC_STORE_URL ||
    "https://atosb-raxtf.volusion.store/",

  // Future store platform placeholder (Shopify, WooCommerce, etc.)
  futureUrl: process.env.NEXT_PUBLIC_FUTURE_STORE_URL || "",

  // Product purchase URLs
  // TODO: Replace empty strings with real product URLs after store inventory
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

  // Fallback when no product URL is configured
  // Shows a placeholder state instead of a broken link
  fallbackCheckoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL || "#checkout-pending",
};

// ------------------------------------------------------------------
// Analytics
// ------------------------------------------------------------------
// Current state: No tracking IDs configured.
// Events are logged to console in development.
// In production, events are no-ops until IDs are added.
//
// TODO: After analytics access is obtained:
// 1. Add GA4 tracking ID
// 2. Add Meta Pixel ID
// 3. Add Keap tracking ID if available
// 4. Verify events fire on all key conversions
// ------------------------------------------------------------------

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

// ------------------------------------------------------------------
// Leadpages Migration
// ------------------------------------------------------------------
// Old landing pages on spramani.lpages.co are being rebuilt as
// native pages. Each old URL gets a native replacement + redirect.
//
// TODO: As each native replacement page is completed:
// 1. Update migrationStatus from "planned" → "implemented"
// 2. Add redirect rule in next.config.ts or middleware
// 3. Test redirect preserves UTM parameters
// 4. Only then disable/remove the old Leadpages page
// ------------------------------------------------------------------

export const LEADPAGES_CONFIG = {
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
    "https://spramani.lpages.co/october-online-training/",
  ],

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
    "https://spramani.lpages.co/october-online-training/": { newPath: "/training/painting-key-lessons", status: "planned" },
  } as Record<string, { newPath: string; status: string }>,
};

// ------------------------------------------------------------------
// Email / Lead Magnet Delivery
// ------------------------------------------------------------------
// Current backend: Keap campaigns handle automated email delivery.
// Native forms submit to Keap, which triggers the campaign.
//
// TODO: After Keap access:
// 1. Map each lead magnet to its Keap campaign ID
// 2. Configure post-submit thank-you page or direct download
// 3. Test email delivery for each resource
// ------------------------------------------------------------------

export const EMAIL_CONFIG = {
  leadMagnetDelivery: {
    method: "keap-campaign", // or "direct-download", "email-service"
    campaignId: KEAP_CONFIG.campaigns.leadMagnetDelivery,
    thankYouPagePath: "/free-resources/thank-you",
  },

  newsletter: {
    provider: "keap",
    formId: KEAP_CONFIG.forms.newsletter,
    welcomeSequence: KEAP_CONFIG.campaigns.welcomeSequence,
    thankYouMessage:
      "Thank you! Check your email for a welcome message and your first free resource.",
  },
};
