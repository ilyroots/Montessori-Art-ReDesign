"use client";

import { trackEvent } from "@/lib/analytics";
import { getCheckoutUrl } from "@/lib/ecommerce";
import Link from "next/link";

interface BuyButtonProps {
  productId: string;
  label?: string;
  fullWidth?: boolean;
  className?: string;
}

export function BuyButton({
  productId,
  label = "Get Access",
  fullWidth = false,
  className = "",
}: BuyButtonProps) {
  const checkout = getCheckoutUrl(productId);

  const handleClick = () => {
    trackEvent("buy_button_click", {
      product: productId,
      location: window.location.pathname,
    });
    trackEvent("checkout_started", {
      product: productId,
      url: checkout.url,
    });
  };

  return (
    <Link
      href={checkout.url}
      target={checkout.isExternal ? "_blank" : undefined}
      rel={checkout.isExternal ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-button bg-terracotta px-6 py-3 text-sm font-semibold text-paper hover:bg-terracotta-dark active:scale-[0.98] transition-all duration-200 ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {label}
    </Link>
  );
}
