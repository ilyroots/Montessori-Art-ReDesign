"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingLayer } from "@/components/motion/FloatingLayer";
import { FloatingAccentShapes } from "@/components/motion/FloatingAccentShapes";

interface ArtDirectedHeroProps {
  overline?: string;
  headline: ReactNode;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustBadges?: string[];
  annotation?: string;
  annotationAuthor?: string;
  dark?: boolean;
  image?: string;
  imageAlt?: string;
}

export function ArtDirectedHero({
  overline,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  trustBadges,
  annotation,
  annotationAuthor,
  dark = false,
  image,
  imageAlt,
}: ArtDirectedHeroProps) {
  const bgClass = dark ? "bg-ink" : "bg-ivory";
  const textClass = dark ? "text-paper" : "text-ink";
  const subTextClass = dark ? "text-canvas/80" : "text-charcoal/80";
  const accentTextClass = dark ? "text-bee-yellow" : "text-honey";
  const secondaryBtnClass = dark
    ? "border-paper/30 text-paper hover:bg-paper/10"
    : "border-ink text-ink hover:bg-ink hover:text-paper";

  return (
    <section className={`relative overflow-hidden ${bgClass}`}>
      {/* Subtle honeycomb texture layer */}
      <div className="absolute inset-0 honeycomb-accent opacity-40 pointer-events-none" />

      {/* Soft grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Watercolor wash */}
      {!dark && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 15% 30%, rgba(216, 154, 39, 0.05) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 85% 70%, rgba(68, 201, 212, 0.04) 0%, transparent 70%)",
            }}
          />
        </div>
      )}

      {/* Floating accent shapes */}
      <FloatingAccentShapes />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Text content */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              {overline && (
                <p
                  className={`text-xs uppercase tracking-[0.15em] font-semibold ${accentTextClass} mb-5`}
                >
                  {overline}
                </p>
              )}
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1
                className={`font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-semibold ${textClass} leading-[1.05] tracking-[-0.02em] mb-6`}
              >
                {headline}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                className={`text-base sm:text-lg ${subTextClass} leading-relaxed max-w-xl mb-8`}
              >
                {subheadline}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors duration-200"
                >
                  {primaryCta.label}
                  <ArrowRight size={16} />
                </Link>
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className={`inline-flex items-center justify-center rounded-button border px-7 py-3.5 text-sm font-semibold transition-colors duration-200 ${secondaryBtnClass}`}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </ScrollReveal>

            {trustBadges && trustBadges.length > 0 && (
              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {trustBadges.map((badge) => (
                    <span
                      key={badge}
                      className={`text-xs ${dark ? "text-canvas/60" : "text-charcoal/50"}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Editorial image collage */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={0.1} y={40}>
              <div className="relative">
                {/* Main image frame */}
                <div className="relative aspect-[4/5] rounded-card bg-canvas border border-linen overflow-hidden shadow-card group">
                  {image ? (
                    <Image
                      src={image}
                      alt={imageAlt || "Hero image"}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-charcoal/25">
                      <div className="text-center px-6">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-bee-yellow-soft flex items-center justify-center">
                          <svg className="w-8 h-8 text-honey/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Hero Image</p>
                        <p className="text-xs mt-1 opacity-70">Children&apos;s hands painting</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Secondary floating frame */}
                <FloatingLayer amplitude={6} duration={6} className="absolute -bottom-6 -left-6 w-32 sm:w-40 aspect-square">
                  <div className="w-full h-full rounded-card bg-paper border border-linen shadow-card-hover overflow-hidden rotate-[-3deg]">
                    <div className="absolute inset-0 flex items-center justify-center text-charcoal/20">
                      <div className="text-center px-2">
                        <svg className="w-6 h-6 mx-auto mb-1 text-kids-blue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <p className="text-[10px]">Detail</p>
                      </div>
                    </div>
                  </div>
                </FloatingLayer>

                {/* Annotation card */}
                {annotation && (
                  <div className="absolute -top-4 -right-2 sm:right-0 bg-paper border border-linen rounded-card p-3 shadow-soft max-w-[160px] rotate-[2deg]">
                    <p className="font-hand text-base text-creative-pink leading-snug">
                      &ldquo;{annotation}&rdquo;
                    </p>
                    {annotationAuthor && (
                      <p className={`text-[10px] mt-1 ${dark ? "text-canvas/50" : "text-charcoal/40"}`}>
                        — {annotationAuthor}
                      </p>
                    )}
                  </div>
                )}

                {/* Tiny color swatch accent */}
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-bee-yellow border-2 border-paper shadow-sm" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
