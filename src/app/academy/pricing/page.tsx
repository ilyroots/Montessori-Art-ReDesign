import { createMetadata } from "@/lib/seo";
import { TierPricingCards } from "@/components/academy/TierPricingCards";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { InteractiveCard } from "@/components/visual/InteractiveCard";

export const metadata = createMetadata({
  title: "Memberships — Nature of Art Academy",
  description: "Choose your learning path. Start free or upgrade to Family Studio, Studio Plus, or Teacher Certification.",
});

export default function AcademyPricingPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28 bg-ivory">
        <AnimatedColorBlobs intensity="subtle" className="opacity-30" />
        <div className="absolute inset-0 honeycomb-accent opacity-25 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="blurIn">
            <div className="text-center mb-14">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Academy Memberships
              </h1>
              <p className="text-charcoal/70 max-w-xl mx-auto">
                Start free. Upgrade when you are ready. Every tier includes everything in the tiers below it.
              </p>
            </div>
          </ScrollReveal>

          <TierPricingCards />

          <ScrollReveal delay={0.2} variant="fadeUp">
            <div className="mt-14">
              <InteractiveCard glowColor="honey" hoverLift={-4}>
                <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
                  <h3 className="font-semibold text-ink mb-3">Not sure which tier is right for you?</h3>
                  <p className="text-sm text-charcoal/70 mb-4">
                    Start with the Free Starter and explore. You can always upgrade later without losing progress.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/academy/start"
                      className="inline-flex items-center justify-center rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                    >
                      Start Free
                    </a>
                    <a
                      href="/academy/dashboard"
                      className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-5 py-2.5 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors"
                    >
                      Preview Dashboard
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <SectionTransition variant="swatches" height="lg" />
    </>
  );
}
