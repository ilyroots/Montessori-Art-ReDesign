"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { upgradeMockTier } from "@/lib/mockAuth";
import { Check, Star } from "lucide-react";
import type { AcademyTier } from "@/config/academyLessons";
import {
  academyPricingTiers,
  billingIntervalLabels,
  type BillingInterval,
} from "@/config/academyPricing";

export function TierPricingCards() {
  const router = useRouter();
  const [interval, setInterval] = useState<BillingInterval>("annual");

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
    <div>
      {/* Interval Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-canvas border border-linen rounded-full p-1">
          {(["monthly", "sixMonth", "annual"] as BillingInterval[]).map((iv) => (
            <button
              key={iv}
              onClick={() => setInterval(iv)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                interval === iv
                  ? "bg-ink text-paper shadow-sm"
                  : "text-charcoal/70 hover:text-ink"
              }`}
            >
              {billingIntervalLabels[iv]}
              {iv === "annual" && (
                <span className="ml-1.5 text-[10px] uppercase tracking-wider opacity-80">
                  Best Value
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {academyPricingTiers.map((tier) => {
          const price = tier.prices[interval];
          const isRecommended = price.recommended;
          const hasSavings = !!price.savingsLabel;

          return (
            <div
              key={tier.id}
              className={`relative flex flex-col bg-paper border rounded-card p-6 transition-shadow duration-200 hover:shadow-card-hover ${
                isRecommended ? "border-honey shadow-card" : "border-linen"
              }`}
            >
              {isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-honey px-3 py-1 text-xs font-semibold text-paper">
                    <Star size={10} />
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block rounded-full bg-canvas px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-charcoal/60 font-medium">
                    {tier.badge}
                  </span>
                  {hasSavings && (
                    <span className="text-[10px] font-semibold text-sage bg-sage/10 px-2 py-0.5 rounded-full">
                      {price.savingsLabel}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink">{tier.name}</h3>

                {/* Price display */}
                <div className="mt-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl font-bold text-ink">
                      {price.effectiveMonthly}
                    </span>
                    <span className="text-sm text-charcoal/50">
                      {price.effectiveMonthlyLabel}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal/50 mt-1">
                    {price.billedAmount} {price.billedLabel}
                  </p>
                </div>
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
                  isRecommended
                    ? "bg-ink text-paper hover:bg-charcoal"
                    : "border border-ink text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                {tier.ctaLabel}
              </button>
            </div>
          );
        })}
      </div>

      {/* Prototype note */}
      <p className="text-center text-xs text-charcoal/40 mt-8">
        Prices are prototype estimates for demo purposes. Real pricing will be confirmed before launch.
        Clicking a paid tier switches your demo account locally — no real charge is made.
      </p>
    </div>
  );
}
