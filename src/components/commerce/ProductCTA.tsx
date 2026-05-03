"use client";

import Link from "next/link";
import { BuyButton } from "./BuyButton";
import { trackEvent } from "@/lib/analytics";

interface ProductCTAProps {
  productId: string;
  title: string;
  description: string;
  price: string;
  href: string;
}

export function ProductCTA({ productId, title, description, price, href }: ProductCTAProps) {
  return (
    <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
      <h3 className="font-serif text-xl font-semibold text-ink mb-2">{title}</h3>
      <p className="text-sm text-charcoal/70 mb-4">{description}</p>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-serif text-2xl font-bold text-ink">{price}</span>
      </div>
      <div className="flex flex-col gap-2">
        <BuyButton productId={productId} fullWidth />
        <Link
          href={href}
          onClick={() => trackEvent("curriculum_view", { curriculum: productId })}
          className="text-center text-sm font-medium text-honey hover:text-honey-dark transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
