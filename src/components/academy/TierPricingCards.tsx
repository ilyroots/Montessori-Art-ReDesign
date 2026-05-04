"use client";

import { useRouter } from "next/navigation";
import { upgradeMockTier } from "@/lib/mockAuth";
import { Check, Star } from "lucide-react";
import type { AcademyTier } from "@/config/academyLessons";
import { academyPricingTiers } from "@/config/academyPricing";

export function TierPricingCards() {
  const router = useRouter();

  const handleCta = (tierId: AcademyTier, action: string) => {
    if (action === "start-free") {
      router.push("/academy/start");
    } else if (action === "demo-upgrade") {
      upgradeMockTier(tierId);
      router.push("/academy/dashboard");
    } else if (action === "view-path") {
      router.push("/academy/certification");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {academyPricingTiers.map((tier) => (
        <div
          key={tier.id}
          className={`relative flex flex-col bg-paper border rounded-card p-6 transition-shadow duration-200 hover:shadow-card-hover ${
            tier.popular ? "border-honey shadow-card" : "border-linen"
          }`}
        >
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-honey px-3 py-1 text-xs font-semibold text-paper">
                <Star size={10} />
                Most Popular
              </span>
            </div>
          )}

          <div className="mb-4">
            <span className="inline-block rounded-full bg-canvas px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-charcoal/60 font-medium mb-3">
              {tier.badge}
            </span>
            <h3 className="font-serif text-xl font-semibold text-ink">{tier.name}</h3>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-serif text-3xl font-bold text-ink">{tier.priceMonthly}</span>
              <span className="text-sm text-charcoal/50">/month</span>
            </div>
            {tier.priceYearly !== tier.priceMonthly && (
              <p className="text-xs text-charcoal/50 mt-1">
                or {tier.priceYearly}/year
              </p>
            )}
          </div>

          <p className="text-sm text-charcoal/70 mb-5">{tier.description}</p>

          <ul className="space-y-2.5 mb-6 flex-1">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-charcoal/70">
                <Check size={14} className="mt-0.5 text-sage shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleCta(tier.id, tier.ctaAction)}
            className={`w-full rounded-button px-5 py-3 text-sm font-semibold transition-colors ${
              tier.popular
                ? "bg-ink text-paper hover:bg-charcoal"
                : "border border-ink text-ink hover:bg-ink hover:text-paper"
            }`}
          >
            {tier.ctaLabel}
          </button>
        </div>
      ))}
    </div>
  );
}
