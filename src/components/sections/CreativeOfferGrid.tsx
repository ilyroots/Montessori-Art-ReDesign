"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

interface CreativeOffer {
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  imageSlot?: string;
}

interface CreativeOfferGridProps {
  offers: CreativeOffer[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3;
}

export function CreativeOfferGrid({
  offers,
  title,
  subtitle,
  columns = 3,
}: CreativeOfferGridProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-14 sm:mb-16">
            {title && (
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso tracking-[-0.02em] mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-charcoal/70 text-base sm:text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <StaggerContainer className={`grid grid-cols-1 ${gridCols} gap-6 sm:gap-8`}>
          {offers.map((offer) => (
            <StaggerItem key={offer.number}>
              <Link
                href={offer.href}
                className="group block bg-paper border border-linen rounded-card p-6 sm:p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Oversized number */}
                <span className="block font-serif text-6xl sm:text-7xl font-bold text-terracotta/10 leading-none mb-2 group-hover:text-terracotta/15 transition-colors">
                  {offer.number}
                </span>

                {/* Category overline */}
                <p className="text-[11px] uppercase tracking-[0.15em] text-charcoal/50 font-semibold mb-2">
                  {offer.category}
                </p>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-espresso mb-3 group-hover:text-terracotta transition-colors duration-200">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                  {offer.description}
                </p>

                {/* Image slot placeholder */}
                {offer.imageSlot && (
                  <div className="aspect-[16/10] rounded-card-sm bg-canvas border border-linen mb-6 flex items-center justify-center overflow-hidden">
                    <span className="text-xs text-charcoal/30 font-medium">{offer.imageSlot}</span>
                  </div>
                )}

                {/* CTA */}
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta group-hover:gap-2.5 transition-all duration-200">
                  {offer.ctaLabel || "Explore"}
                  <ArrowRight size={15} />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
