// ============================================================
// Ecommerce Helper
// ============================================================
// Centralized commerce logic for product links, checkout URLs,
// and store redirects.
//
// Current state: All checkout links use fallback URLs.
// The store lives on Volusion until a migration decision is made.
//
// TODO: After store/Keap access is obtained:
// 1. Map real product purchase URLs in integrations.ts
// 2. Decide: keep Volusion, move to Shopify, or build native checkout
// 3. Update getCheckoutUrl to return real checkout links
// 4. Add cart/abandoned cart tracking if needed
// 5. Add dynamic pricing if products go on sale
//
// TODO: If using Keap for checkout:
// 1. Map each product to its Keap checkout URL
// 2. Update STORE_CONFIG.products with Keap checkout links
// 3. Test checkout flow end-to-end
//
// Fallback rule: If no checkout URL is configured, return a
// placeholder anchor that shows a "coming soon" state instead
// of a broken link.
// ============================================================

import { STORE_CONFIG } from "@/config/integrations";

export interface CheckoutLink {
  url: string;
  isExternal: boolean;
}

/**
 * Get the checkout URL for a product.
 * Falls back to a placeholder if no real URL is configured.
 */
export function getCheckoutUrl(productId: string): CheckoutLink {
  const productUrl =
    STORE_CONFIG.products[productId as keyof typeof STORE_CONFIG.products];

  if (productUrl) {
    return {
      url: productUrl,
      isExternal: true,
    };
  }

  // Fallback: placeholder anchor that can be styled as "coming soon"
  return {
    url: STORE_CONFIG.fallbackCheckoutUrl,
    isExternal: false,
  };
}

/**
 * Get the storefront URL.
 * Currently returns Volusion store URL.
 */
export function getStoreUrl(): string {
  return STORE_CONFIG.currentUrl;
}

/**
 * Get the future storefront URL (if migration planned).
 */
export function getFutureStoreUrl(): string {
  return STORE_CONFIG.futureUrl;
}
