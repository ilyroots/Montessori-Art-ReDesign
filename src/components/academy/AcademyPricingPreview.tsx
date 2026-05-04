"use client";

import Link from "next/link";
import { TierPricingCards } from "./TierPricingCards";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AcademyPricingPreview() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">Memberships</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-4">
              Choose Your Path
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              Start free. Upgrade when you are ready. Every tier includes everything below it.
            </p>
          </div>
        </ScrollReveal>

        <TierPricingCards />

        <ScrollReveal delay={0.2}>
          <p className="text-center text-xs text-charcoal/50 mt-8">
            Prices are concept estimates for demo purposes. Real pricing will be confirmed before launch.{" "}
            <Link href="/academy/pricing" className="text-honey hover:underline">
              View full comparison →
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
