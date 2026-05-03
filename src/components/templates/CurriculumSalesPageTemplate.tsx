"use client";

import Link from "next/link";
import { Check, X, GraduationCap, Mail } from "lucide-react";
import { ArtDirectedHero } from "@/components/sections/ArtDirectedHero";
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
  /** What's included features (optional — falls back to product.features) */
  includedFeatures?: { icon: React.ReactNode; title: string; description: string }[];
  /** Who it's for list */
  whoItsFor: string[];
  /** Who it's NOT for list */
  whoItsNotFor: string[];
  /** Instructor bio paragraphs */
  instructorBio: string[];
  /** Testimonials data (optional — omit if no verified testimonials) */
  testimonials?: TestimonialItem[];
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

  const fallbackUrl = siteMapEntry?.fallbackExternalUrl;

  // Build features list from product config if page-level features not provided
  const features = includedFeatures ??
    product.features?.map((f) => ({
      icon: <Check size={22} />,
      title: f,
      description: "",
    })) ?? [];

  // Primary CTA: first price variant or product price
  const primaryCtaLabel = product.priceVariants?.[0]
    ? product.priceVariants[0].ctaLabel
    : `Buy Now — ${product.price}`;

  return (
    <>
      {/* Sticky mobile CTA */}
      <StickyCTA
        label={primaryCtaLabel}
        href={fallbackUrl || "#"}
        visibleAfter={400}
      />

      {/* Hero */}
      <ArtDirectedHero
        overline="Curriculum"
        headline={heroHeadline}
        subheadline={heroSubheadline}
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "See What's Inside", href: "#whats-included" }}
        trustBadges={[
          product.ageRange ? `Ages ${product.ageRange}` : undefined,
          product.format,
        ].filter(Boolean) as string[]}
        annotation="Every child is an artist."
        annotationAuthor="Pablo Picasso"
      />

      {/* Trust Bar */}
      <section className="border-y border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-charcoal/60">
            {[
              product.priceVariants ? "Paperback + Digital options" : "Instant digital access",
              product.refundPolicy ? "30-day printed satisfaction guarantee" : null,
              product.contactEmail ? "Art educator support via email" : null,
            ]
              .filter(Boolean)
              .map((item) => (
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
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.06}>
                <div className="bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow duration-200 h-full">
                  <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center mb-4 text-terracotta">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-espresso mb-1">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-sm text-charcoal/70">{feature.description}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Pricing CTA (if applicable) */}
      {product.priceVariants && product.priceVariants.length > 1 && (
        <section className="py-16 sm:py-20 bg-canvas">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso tracking-[-0.02em] mb-3">
                  Choose Your Format
                </h2>
                <p className="text-charcoal/70">
                  Select the option that works best for your teaching environment.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {product.priceVariants.map((variant, i) => (
                <ScrollReveal key={variant.format} delay={i * 0.08}>
                  <div className="bg-paper border border-linen rounded-card p-6 sm:p-8 text-center h-full flex flex-col">
                    <p className="text-sm font-medium text-charcoal/60 mb-2">
                      {variant.format}
                    </p>
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-espresso mb-4">
                      {variant.price}
                    </p>
                    <div className="flex-1" />
                    <Link
                      href={fallbackUrl || "#"}
                      className="block w-full text-center rounded-button bg-terracotta px-6 py-3.5 text-sm font-semibold text-paper hover:bg-terracotta-dark transition-colors"
                    >
                      {variant.ctaLabel}
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who It's For */}
      <section className="py-20 sm:py-28 bg-ivory">
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
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-square max-w-sm mx-auto relative rounded-card bg-paper border border-linen overflow-hidden">
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

      {/* Testimonials (only if verified testimonials provided) */}
      {testimonials && testimonials.length > 0 && (
        <Testimonials items={testimonials} />
      )}

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Disclaimer */}
      {product.disclaimer && (
        <section className="py-12 sm:py-16 bg-ivory">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-paper border border-linen rounded-card p-6">
                <h3 className="font-semibold text-espresso mb-2">
                  Important Notice
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {product.disclaimer}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Refund Policy */}
      {product.refundPolicy && (
        <section className="py-8 sm:py-12 bg-ivory border-t border-linen">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-sm text-charcoal/60">
                <strong>Refund Policy:</strong> {product.refundPolicy}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Contact */}
      {product.contactEmail && (
        <section className="py-8 sm:py-10 bg-canvas border-t border-linen">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <a
                href={`mailto:${product.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-terracotta transition-colors"
              >
                <Mail size={16} />
                Questions? Contact {product.contactEmail}
              </a>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <FinalCTA
        title={`Start teaching ${product.title.toLowerCase()} with confidence`}
        description={`Explore the ${product.title} curriculum and bring structured, joyful art experiences into your environment.`}
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "View All Curriculum", href: "/curriculum" }}
      />
    </>
  );
}
