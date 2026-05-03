"use client";

import { getStoreUrl } from "@/lib/ecommerce";

interface StorefrontEmbedProps {
  productPath?: string;
  height?: string;
}

export function StorefrontEmbed({ productPath, height = "600px" }: StorefrontEmbedProps) {
  const storeUrl = getStoreUrl();
  const src = productPath ? `${storeUrl}${productPath}` : storeUrl;

  return (
    <div className="w-full rounded-card border border-linen overflow-hidden bg-canvas">
      <iframe
        src={src}
        style={{ width: "100%", height, border: 0 }}
        title="Store"
        loading="lazy"
      />
      <p className="text-center text-xs text-charcoal/50 py-3">
        External store embed. Secure checkout handled by our store partner.
      </p>
    </div>
  );
}
