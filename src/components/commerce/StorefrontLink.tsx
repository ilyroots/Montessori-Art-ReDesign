"use client";

import Link from "next/link";
import { getStoreUrl } from "@/lib/ecommerce";
import { trackEvent } from "@/lib/analytics";
import { ExternalLink } from "lucide-react";

interface StorefrontLinkProps {
  children: React.ReactNode;
  productPath?: string;
  className?: string;
}

export function StorefrontLink({ children, productPath, className = "" }: StorefrontLinkProps) {
  const storeUrl = getStoreUrl();
  const href = productPath ? `${storeUrl}${productPath}` : storeUrl;

  const handleClick = () => {
    trackEvent("art_supply_click", { product: productPath || "storefront" });
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 ${className}`}
    >
      {children}
      <ExternalLink size={14} className="opacity-60" />
    </Link>
  );
}
