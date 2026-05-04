"use client";

import Link from "next/link";
import Image from "next/image";
import { BuyButton } from "./BuyButton";
import { Check } from "lucide-react";
import type { PriceVariant } from "@/config/products";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  href: string;
  badge?: string;
  features?: string[];
  ageRange?: string;
  format?: string;
  variant?: "default" | "featured";
  image?: string;
  priceVariants?: PriceVariant[];
}

export function ProductCard({
  id,
  title,
  description,
  price,
  originalPrice,
  href,
  badge,
  features,
  ageRange,
  format,
  variant = "default",
  image,
  priceVariants,
}: ProductCardProps) {
  const isFeatured = variant === "featured";

  return (
    <div
      className={`relative flex flex-col rounded-card border bg-paper transition-shadow duration-200 hover:shadow-card-hover ${
        isFeatured ? "border-honey/30 shadow-card" : "border-linen"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper">
            {badge}
          </span>
        </div>
      )}

      {image && (
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-canvas">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink">
            {title}
          </h3>
          {ageRange && (
            <p className="mt-1 text-xs uppercase tracking-wider text-charcoal/60">
              Ages {ageRange}
            </p>
          )}
        </div>

        <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-charcoal">
                <Check size={16} className="mt-0.5 text-sage shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {format && (
          <p className="text-xs text-charcoal/50 mb-4">{format}</p>
        )}

        <div className="mt-auto pt-6 border-t border-linen">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-serif text-2xl font-bold text-ink">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-charcoal/40 line-through">
                {originalPrice}
              </span>
            )}
          </div>

          {priceVariants && priceVariants.length > 0 && (
            <div className="mb-4 space-y-1">
              {priceVariants.map((v) => (
                <div
                  key={v.format}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-charcoal/60">{v.format}</span>
                  <span className="font-medium text-ink">{v.price}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <BuyButton productId={id} fullWidth />
            <Link
              href={href}
              className="text-center text-sm font-medium text-honey hover:text-honey-dark transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
