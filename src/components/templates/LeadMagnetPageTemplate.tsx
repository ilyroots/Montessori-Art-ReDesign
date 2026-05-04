"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Play, ExternalLink, BookOpen, Palette } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { FloatingLayer } from "@/components/motion/FloatingLayer";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { FreeResourceExtract } from "@/config/publicContentExtract";

interface RelatedResource {
  title: string;
  href: string;
  description: string;
  image?: string;
  type?: "free-resource" | "curriculum" | "book";
}

interface LeadMagnetPageTemplateProps {
  resource: FreeResourceExtract;
  whatYoullLearn: string[];
  audience: string[];
  relatedResources: RelatedResource[];
  integrationStatus?: "connected" | "fallback-external" | "pending-backend-verification" | "disabled";
  heroImage?: string;
}

const typeIcon = {
  "free-resource": Play,
  curriculum: Palette,
  book: BookOpen,
};

const typeLabel = {
  "free-resource": "Free Resource",
  curriculum: "Curriculum",
  book: "Book",
};

export function LeadMagnetPageTemplate({
  resource,
  whatYoullLearn,
  audience,
  relatedResources,
  integrationStatus = "fallback-external",
  heroImage,
}: LeadMagnetPageTemplateProps) {
  const fallbackUrl = resource.fallbackExternalUrl;
  const isExternal = integrationStatus === "fallback-external";

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ivory">
        {/* Subtle honeycomb texture */}
        <div className="absolute inset-0 honeycomb-accent opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        {/* Decorative color swatches — desktop only */}
        <div className="hidden lg:block absolute top-20 right-[15%] w-10 h-10 rounded-full bg-bee-yellow/80 border-2 border-paper shadow-sm" />
        <div className="hidden lg:block absolute top-40 right-[10%] w-7 h-7 rounded-full bg-kids-blue/60 border-2 border-paper shadow-sm" />
        <div className="hidden lg:block absolute bottom-32 right-[20%] w-5 h-5 rounded-full bg-creative-pink/70 border-2 border-paper shadow-sm" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-bee-yellow/15 border border-bee-yellow/20 px-3 py-1 text-xs font-semibold text-honey uppercase tracking-wider mb-5">
                  <Play size={12} />
                  Free Video
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <h1 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6">
                  {resource.subtitle || "Free Resource"}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed max-w-xl mb-8">
                  {resource.summary}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  {isExternal && fallbackUrl ? (
                    <a
                      href={fallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors duration-200"
                    >
                      {resource.ctaLabel || "Get It Now"}
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <Link
                      href="#lead-magnet-form"
                      className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors duration-200"
                    >
                      {resource.ctaLabel || "Get It Now"}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                  <Link
                    href="/free-resources"
                    className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-7 py-3.5 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors duration-200"
                  >
                    Browse Free Resources
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {resource.videoCount && (
                    <span className="text-xs text-charcoal/50">
                      {resource.videoCount} free video{resource.videoCount > 1 ? "s" : ""}
                    </span>
                  )}
                  {resource.accessType && (
                    <span className="text-xs text-charcoal/50">{resource.accessType}</span>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Image / Visual */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={0.1} y={40}>
                <div className="relative">
                  {/* Main image */}
                  <div className="relative aspect-[4/3] rounded-card bg-canvas border border-linen overflow-hidden shadow-card">
                    {heroImage ? (
                      <Image
                        src={heroImage}
                        alt={resource.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-charcoal/25">
                        <div className="text-center px-6">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-bee-yellow-soft flex items-center justify-center">
                            <Play size={32} className="text-honey/60 ml-1" />
                          </div>
                          <p className="text-sm font-medium">Free Video</p>
                          <p className="text-xs mt-1 opacity-70">{resource.title}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Floating accent card */}
                  <FloatingLayer amplitude={6} duration={6} className="absolute -bottom-5 -left-5 w-28 sm:w-36 aspect-square hidden sm:block">
                    <div className="w-full h-full rounded-card bg-paper border border-linen shadow-card-hover overflow-hidden rotate-[-3deg] flex items-center justify-center">
                      <div className="text-center px-2">
                        <Palette size={24} className="mx-auto mb-1 text-kids-blue/70" />
                        <p className="text-[10px] font-medium text-charcoal/60">Color Mixing</p>
                      </div>
                    </div>
                  </FloatingLayer>

                  {/* Tiny swatch */}
                  <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-bee-yellow border-2 border-paper shadow-sm hidden lg:block" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You&apos;ll Learn ── */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Inside This Free Video
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
                What You&apos;ll Learn
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
            {whatYoullLearn.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-paper border border-linen rounded-card p-6 h-full hover:shadow-card-hover transition-shadow duration-200">
                  <div className="w-10 h-10 rounded-full bg-bee-yellow/10 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-honey">{i + 1}</span>
                  </div>
                  <p className="text-sm text-charcoal/80 leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Who It&apos;s For ── */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-3">
                Who This Is For
              </h2>
              <p className="text-charcoal/70">
                Whether you&apos;re a trained guide or a parent exploring art at home, this video will help you begin.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {audience.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 bg-paper border border-linen rounded-card px-5 py-4">
                  <Check size={18} className="text-sage shrink-0" />
                  <span className="text-sm text-charcoal/80">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Lead Magnet Form Section ── */}
      <section id="lead-magnet-form" className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <ScrollReveal>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                  Free Instant Access
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-5">
                  Get the Free Video Now
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Enter your details and we&apos;ll send you immediate access to{" "}
                  <strong className="text-ink">{resource.title}</strong>.
                </p>
                <ul className="space-y-3">
                  {resource.benefits?.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                      <Check size={16} className="mt-0.5 text-sage shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal delay={0.1}>
              <LeadMagnetForm
                resourceId={resource.id}
                resourceName={resource.title}
                buttonLabel={resource.ctaLabel || "Get It Now"}
                integrationStatus={integrationStatus}
                fallbackUrl={fallbackUrl}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Related Resources ── */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Keep Learning
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">
                Related Resources
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedResources.map((item, i) => {
              const Icon = typeIcon[item.type || "free-resource"];
              return (
                <ScrollReveal key={item.href} delay={i * 0.06}>
                  <Link
                    href={item.href}
                    className="group block bg-paper border border-linen rounded-card overflow-hidden hover:shadow-card-hover transition-shadow duration-200 h-full"
                  >
                    {item.image ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full bg-canvas flex items-center justify-center">
                        <Icon size={28} className="text-charcoal/20" />
                      </div>
                    )}
                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-wider text-charcoal/50 font-medium">
                        {typeLabel[item.type || "free-resource"]}
                      </span>
                      <h3 className="font-semibold text-ink mt-1 mb-1 group-hover:text-honey transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <FinalCTA
        title="Ready to explore color with your students?"
        description="Watch the free video and discover how a single color prompt can open a world of independent exploration."
        primaryCta={{
          label: resource.ctaLabel || "Get It Now",
          href: isExternal && fallbackUrl ? fallbackUrl : "#lead-magnet-form",
        }}
        secondaryCta={{ label: "Explore Color Theory Curriculum", href: "/curriculum/color-theory" }}
      />
    </>
  );
}
