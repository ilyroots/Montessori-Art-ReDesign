"use client";

import { Check, Shield, X } from "lucide-react";
import { ArtDirectedHero } from "@/components/sections/ArtDirectedHero";
import { FAQ, FAQItem } from "@/components/sections/FAQ";
import { Testimonials, TestimonialItem } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import type { ExistingPageEntry } from "@/config/existingSiteMap";

interface CertificationModule {
  number: string;
  title: string;
  description: string;
}

interface CertificationPageTemplateProps {
  /** Hero headline with ochre accent words wrapped in <span className="text-bee-yellow"> */
  heroHeadline: React.ReactNode;
  /** Hero subheadline */
  heroSubheadline: string;
  /** Primary CTA label */
  primaryCtaLabel: string;
  /** Primary CTA href */
  primaryCtaHref: string;
  /** Stats for trust bar */
  stats: { label: string; value: string }[];
  /** Problem paragraphs */
  problemParagraphs: string[];
  /** Certification modules */
  modules: CertificationModule[];
  /** Outcomes list */
  outcomes: string[];
  /** Who it's for list */
  whoItsFor: string[];
  /** Who it's NOT for list */
  whoItsNotFor: string[];
  /** Licensing text */
  licensingText: string;
  /** Testimonials */
  testimonials: TestimonialItem[];
  /** FAQ items */
  faqItems: FAQItem[];
  /** Site map entry */
  siteMapEntry?: ExistingPageEntry;
}

export function CertificationPageTemplate({
  heroHeadline,
  heroSubheadline,
  primaryCtaLabel,
  primaryCtaHref,
  stats,
  problemParagraphs,
  modules,
  outcomes,
  whoItsFor,
  whoItsNotFor,
  licensingText,
  testimonials,
  faqItems,
  siteMapEntry,
}: CertificationPageTemplateProps) {
  return (
    <>
      {/* Sticky mobile CTA */}
      <StickyCTA
        label={primaryCtaLabel}
        href={siteMapEntry?.fallbackExternalUrl || primaryCtaHref}
        visibleAfter={400}
      />

      {/* Premium Dark Hero */}
      <div className="relative">
        <AnimatedColorBlobs intensity="subtle" className="opacity-20" />
        <ArtDirectedHero
        overline="Professional Certification"
        headline={heroHeadline}
        subheadline={heroSubheadline}
        primaryCta={{ label: primaryCtaLabel, href: siteMapEntry?.fallbackExternalUrl || primaryCtaHref }}
        secondaryCta={{ label: "Explore the Program", href: "#program-overview" }}
        trustBadges={["8–12 weeks", "6 core modules", "Certificate on completion"]}
        dark
      />
      </div>
      <SectionTransition variant="swatches" height="sm" />

      {/* Trust / Authority Stats */}
      <section className="border-y border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  {stat.value}
                </p>
                <p className="text-xs text-charcoal/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 sm:py-28 bg-ivory relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-8">
              Most educators never received training in how to teach art
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
      <SectionTransition variant="swatches" height="md" />

      {/* Program Overview */}
      <section id="program-overview" className="py-20 sm:py-28 bg-canvas relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                A complete system for art education leadership
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Six modules that take you from foundational philosophy to practical
                curriculum design.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <ScrollReveal key={mod.number} delay={i * 0.06}>
                <InteractiveCard hoverLift={-4} glowColor="honey">
                  <div className="bg-paper border border-linen rounded-card p-6 sm:p-8 relative overflow-hidden h-full">
                    <span className="absolute top-4 right-4 font-serif text-6xl font-bold text-honey/10 leading-none select-none">
                      {mod.number}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-ink mb-2 relative">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed relative">
                      {mod.description}
                    </p>
                  </div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <SectionTransition variant="swatches" height="lg" />

      {/* Outcomes */}
      <section className="py-20 sm:py-28 bg-ivory relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-8">
                  What you&apos;ll be able to do
                </h2>
                <ul className="space-y-4">
                  {outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="mt-0.5 text-sage shrink-0" />
                      <span className="text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-paper border border-linen rounded-card p-8">
                <div className="aspect-video bg-canvas rounded-card-sm flex items-center justify-center">
                  <div className="text-center text-charcoal/25">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Program Preview</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <SectionTransition variant="swatches" height="md" />

      {/* Who It's For / Not For */}
      <section className="py-20 sm:py-28 bg-canvas relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-paper border border-linen rounded-card p-8 h-full">
                <h3 className="font-serif text-2xl font-semibold text-ink mb-6 flex items-center gap-2">
                  <Check size={24} className="text-sage" />
                  Who it&apos;s for
                </h3>
                <ul className="space-y-4">
                  {whoItsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                      <Check size={16} className="mt-0.5 text-sage shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-paper border border-linen rounded-card p-8 h-full">
                <h3 className="font-serif text-2xl font-semibold text-ink/40 mb-6 flex items-center gap-2">
                  <X size={24} className="text-charcoal/30" />
                  Who it&apos;s not for
                </h3>
                <ul className="space-y-4">
                  {whoItsNotFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal/50">
                      <X size={16} className="mt-0.5 text-charcoal/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <SectionTransition variant="swatches" height="md" />

      {/* Licensing */}
      <section className="py-12 sm:py-16 bg-ivory relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-start gap-4 bg-paper border border-linen rounded-card p-6">
              <Shield size={24} className="text-dusty-blue shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-ink mb-1">
                  Licensing clarification
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {licensingText}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <SectionTransition variant="swatches" height="lg" />

      {/* Testimonials */}
      <Testimonials items={testimonials} title="What certified educators say" />
      <SectionTransition variant="swatches" height="md" />

      {/* FAQ */}
      <FAQ items={faqItems} />
      <SectionTransition variant="swatches" height="lg" />

      {/* Final CTA */}
      <FinalCTA
        title="Become a certified art educator"
        description="Join a global community of educators who teach children visual arts with confidence, structure, and wonder."
        primaryCta={{ label: primaryCtaLabel, href: siteMapEntry?.fallbackExternalUrl || primaryCtaHref }}
        secondaryCta={{ label: "Download Program Guide", href: "#" }}
        variant="dark"
      />
    </>
  );
}
