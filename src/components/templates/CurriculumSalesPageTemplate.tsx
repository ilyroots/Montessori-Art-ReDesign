"use client";

import Link from "next/link";
import { Check, X, Users, Video, FileText, GraduationCap } from "lucide-react";
import { ArtDirectedHero } from "@/components/sections/ArtDirectedHero";
import { FunnelCTASection } from "@/components/sections/FunnelCTASection";
import { FAQ, FAQItem } from "@/components/sections/FAQ";
import { Testimonials, TestimonialItem } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { getProductById } from "@/config/products";
import type { ExistingPageEntry } from "@/config/existingSiteMap";

interface CurriculumSalesPageTemplateProps {
  /** Product ID from products.ts config */
  productId: string;
  /** Hero headline with terracotta accent words wrapped in <span className="text-terracotta"> */
  heroHeadline: React.ReactNode;
  /** Hero subheadline text */
  heroSubheadline: string;
  /** Problem section paragraphs */
  problemParagraphs: string[];
  /** Method steps: title + description */
  methodSteps: { title: string; description: string }[];
  /** What's included features */
  includedFeatures: { icon: React.ReactNode; title: string; description: string }[];
  /** Who it's for list */
  whoItsFor: string[];
  /** Who it's NOT for list */
  whoItsNotFor: string[];
  /** Instructor bio paragraphs */
  instructorBio: string[];
  /** Testimonials data */
  testimonials: TestimonialItem[];
  /** FAQ items */
  faqItems: FAQItem[];
  /** Site map entry for this page (for fallback URLs and migration notes) */
  siteMapEntry?: ExistingPageEntry;
}

export function CurriculumSalesPageTemplate({
  productId,
  heroHeadline,
  heroSubheadline,
  problemParagraphs,
  methodSteps,
  includedFeatures,
  whoItsFor,
  whoItsNotFor,
  instructorBio,
  testimonials,
  faqItems,
  siteMapEntry,
}: CurriculumSalesPageTemplateProps) {
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <p className="text-charcoal/70">Product not found: {productId}</p>
      </div>
    );
  }

  // TODO: Replace fallback URL with native checkout or Keap checkout URL
  //       after checkout mapping is complete in integrations.ts.
  //       Current fallback preserves the legacy sales path.
  const fallbackUrl = siteMapEntry?.fallbackExternalUrl;

  return (
    <>
      {/* Sticky mobile CTA */}
      <StickyCTA
        label={`Get Access — ${product.price}`}
        href={fallbackUrl || "#"}
        visibleAfter={400}
      />

      {/* Hero */}
      <ArtDirectedHero
        overline="Curriculum"
        headline={heroHeadline}
        subheadline={heroSubheadline}
        primaryCta={{ label: `Get Access — ${product.price}`, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "See What's Inside", href: "#whats-included" }}
        trustBadges={[
          product.ageRange ? `Ages ${product.ageRange}` : undefined,
          product.format,
          "Video lessons included",
          "Printable resources",
        ].filter(Boolean) as string[]}
        annotation="Every child is an artist."
        annotationAuthor="Pablo Picasso"
      />

      {/* Trust Bar */}
      <section className="border-y border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-charcoal/60">
            {[
              "Instant digital access",
              "Lifetime updates",
              "30-day satisfaction guarantee",
              "Used in 20+ countries",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check size={14} className="text-sage" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso tracking-[-0.02em] mb-8">
              Does this sound familiar?
            </h2>
          </ScrollReveal>
          <div className="space-y-5">
            {problemParagraphs.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-terracotta font-semibold mb-3">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso tracking-[-0.02em]">
                A sequenced system for confident instruction
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {methodSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.08}>
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-terracotta">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="whats-included" className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso tracking-[-0.02em] mb-4">
                What&apos;s Inside
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Everything you need to teach with confidence — from first
                presentation to advanced exploration.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.06}>
                <div className="bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow duration-200 h-full">
                  <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center mb-4 text-terracotta">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-espresso mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal/70">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso tracking-[-0.02em] mb-8">
                  Who this is for
                </h2>
                <ul className="space-y-4">
                  {whoItsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="mt-0.5 text-sage shrink-0" />
                      <span className="text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso/30 tracking-[-0.02em] mb-8">
                  Who this is not for
                </h2>
                <ul className="space-y-4">
                  {whoItsNotFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="mt-0.5 text-charcoal/30 shrink-0" />
                      <span className="text-charcoal/50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Instructor */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-square max-w-sm mx-auto relative rounded-card bg-canvas border border-linen overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/25">
                  <div className="text-center">
                    <GraduationCap size={64} className="mx-auto mb-4" />
                    <p className="text-sm font-medium">Spramani Elaun</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-terracotta font-semibold mb-3">
                  Your Instructor
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso tracking-[-0.02em] mb-5">
                  Created by Spramani Elaun
                </h2>
                <div className="space-y-4">
                  {instructorBio.map((para, i) => (
                    <p key={i} className="text-charcoal/80 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials items={testimonials} />

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Final CTA */}
      <FinalCTA
        title={`Start teaching ${product.title.toLowerCase()} with confidence`}
        description={`Join thousands of educators who have transformed their art environment with the Nature of Art ${product.title}.`}
        primaryCta={{ label: `Get Access — ${product.price}`, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "View All Curriculum", href: "/curriculum" }}
      />
    </>
  );
}
