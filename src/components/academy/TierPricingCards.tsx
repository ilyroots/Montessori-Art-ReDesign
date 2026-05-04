"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { upgradeMockTier } from "@/lib/mockAuth";
import { Check, Star } from "lucide-react";
import type { AcademyTier } from "@/config/academyLessons";
import {
  academyPricingTiers,
  billingIntervalLabels,
  type BillingInterval,
} from "@/config/academyPricing";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

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
      <ScrollReveal variant="fadeUp">
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-canvas border border-linen rounded-full p-1">
            {(["monthly", "sixMonth", "annual"] as BillingInterval[]).map((iv) => (
              <button
                key={iv}
                onClick={() => setInterval(iv)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
      </ScrollReveal>

      {/* Cards */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
        {academyPricingTiers.map((tier) => {
          const price = tier.prices[interval];
          const isRecommended = price.recommended;
          const hasSavings = !!price.savingsLabel;

          return (
            <StaggerItem key={tier.id} variant="scaleUp">
              <InteractiveCard
                glowColor={isRecommended ? "yellow" : "none"}
                hoverLift={isRecommended ? -8 : -4}
                hoverScale={1.02}
                tilt={isRecommended}
              >
                <div
                  className={`relative flex flex-col bg-paper border rounded-card p-6 h-full transition-shadow duration-200 hover:shadow-card-hover ${
                    isRecommended ? "border-honey shadow-card" : "border-linen"
                  }`}
                >
                  {isRecommended && (
                    <motion.div
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="inline-flex items-center gap-1 rounded-full bg-honey px-3 py-1 text-xs font-semibold text-paper shadow-sm">
                        <Star size={10} />
                        Recommended
                      </span>
                    </motion.div>
                  )}

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block rounded-full bg-canvas px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-charcoal/60 font-medium">
                        {tier.badge}
                      </span>
                      {hasSavings && (
                        <motion.span
                          className="text-[10px] font-semibold text-sage bg-sage/10 px-2 py-0.5 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {price.savingsLabel}
                        </motion.span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-ink">{tier.name}</h3>

                    {/* Price display with animation */}
                    <div className="mt-3">
                      <div className="flex items-baseline gap-1.5">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`${tier.id}-${interval}-monthly`}
                            className="font-serif text-4xl font-bold text-ink"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            {price.effectiveMonthly}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-sm text-charcoal/50">
                          {price.effectiveMonthlyLabel}
                        </span>
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`${tier.id}-${interval}-billed`}
                          className="text-xs text-charcoal/50 mt-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          {price.billedAmount} {price.billedLabel}
                        </motion.p>
                      </AnimatePresence>
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
              </InteractiveCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Prototype note */}
      <ScrollReveal delay={0.3} variant="fadeIn">
        <p className="text-center text-xs text-charcoal/40 mt-8">
          Prices are prototype estimates for demo purposes. Real pricing will be confirmed before launch.
          Clicking a paid tier switches your demo account locally — no real charge is made.
        </p>
      </ScrollReveal>
    </div>
  );
}
