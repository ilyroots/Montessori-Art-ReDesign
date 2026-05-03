import { STORE_CONFIG } from "@/config/integrations";

export interface CheckoutLink {
  url: string;
  isExternal: boolean;
}

/**
 * Get the checkout URL for a product.
 * Falls back to placeholder if no real URL is configured.
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

  // Fallback
  return {
    url: STORE_CONFIG.fallbackCheckoutUrl,
    isExternal: false,
  };
}

/**
 * Get the storefront URL.
 */
export function getStoreUrl(): string {
  return STORE_CONFIG.currentUrl;
}

/**
 * Format price with currency.
 */
export function formatPrice(price: string): string {
  return price;
}
