import { ANALYTICS_CONFIG } from "@/config/integrations";

export type AnalyticsEvent =
  | "newsletter_submit"
  | "lead_magnet_submit"
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

export function trackPageView(path: string): void {
  trackEvent("page_view", { path });
}
