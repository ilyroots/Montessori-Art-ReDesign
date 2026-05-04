// ============================================================
// Analytics Event Helper
// ============================================================
// Centralized analytics event tracking.
// Supports GA4, Meta Pixel, and Keap tracking.
//
// Behavior:
// - Development: events are console.logged for debugging
// - Production without IDs: events are silent no-ops
// - Production with IDs: events fire to configured platforms
//
// TODO: After analytics access is obtained:
// 1. Add GA4 tracking ID to NEXT_PUBLIC_GA4_ID
// 2. Add Meta Pixel ID to NEXT_PUBLIC_META_PIXEL_ID
// 3. Add Keap tracking ID to NEXT_PUBLIC_KEAP_TRACKING_ID if available
// 4. Verify events fire correctly in production
// 5. Add any custom conversion events needed for sales funnel
//
// TODO: Consider adding server-side analytics logging for
// events that should be tracked even if client-side JS fails.
// ============================================================

import { ANALYTICS_CONFIG } from "@/config/integrations";

export type AnalyticsEvent =
  | "newsletter_submit"
  | "lead_magnet_submit"
  | "lead_magnet_fallback_click"
  | "buy_button_click"
  | "checkout_started"
  | "certification_interest"
  | "bookstore_click"
  | "art_supply_click"
  | "contact_submit"
  | "free_resource_view"
  | "curriculum_view"
  | "training_view"
  | "page_view";

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

/**
 * Track an analytics event.
 * Safe to call from any component — does nothing harmful if unconfigured.
 */
export function trackEvent(
  eventName: AnalyticsEvent,
  payload: AnalyticsPayload = {}
): void {
  if (isDev()) {
    // eslint-disable-next-line no-console
    console.log(`[Analytics] ${eventName}`, payload);
    return;
  }

  if (!isProduction()) {
    return;
  }

  // GA4
  if (ANALYTICS_CONFIG.ga4.enabled && typeof window !== "undefined") {
    const gtag = (window as unknown as Record<string, unknown>).gtag as
      | ((...args: unknown[]) => void)
      | undefined;
    if (gtag) {
      gtag("event", eventName, payload);
    }
  }

  // Meta Pixel
  if (ANALYTICS_CONFIG.metaPixel.enabled && typeof window !== "undefined") {
    const fbq = (window as unknown as Record<string, unknown>).fbq as
      | ((...args: unknown[]) => void)
      | undefined;
    if (fbq) {
      fbq("trackCustom", eventName, payload);
    }
  }
}

/**
 * Track a page view.
 * Call from layout or page components on route change.
 */
export function trackPageView(path: string): void {
  trackEvent("page_view", { path });
}
