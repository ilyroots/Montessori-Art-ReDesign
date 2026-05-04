"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { FloatingLayer } from "@/components/motion/FloatingLayer";
import { FloatingAccentShapes } from "@/components/motion/FloatingAccentShapes";
import { AnimatedGradientMesh } from "@/components/visual/AnimatedGradientMesh";
import {
  heroOverline,
  heroSubheadline,
  heroButtons,
  heroTrust,
  heroImage,
  heroAnnotation,
  heroFloat,
  easeOutExpo,
} from "@/components/motion/motionVariants";

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
  const reduced = useReducedMotion();
  const bgClass = dark ? "bg-ink" : "bg-ivory";
  const textClass = dark ? "text-paper" : "text-ink";
  const subTextClass = dark ? "text-canvas/80" : "text-charcoal/80";
  const accentTextClass = dark ? "text-bee-yellow" : "text-honey";
  const secondaryBtnClass = dark
    ? "border-paper/30 text-paper hover:bg-paper/10"
    : "border-ink text-ink hover:bg-ink hover:text-paper";

  const renderHeadline = () => {
    if (reduced) {
      return <h1 className={`font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-semibold ${textClass} leading-[1.05] tracking-[-0.02em] mb-6`}>{headline}</h1>;
    }

    // For animated version, we need to manually reconstruct with word-level motion
    // Since headline is a ReactNode, we'll use a container motion with children as-is
    // but apply a subtle overall entrance. The word-level stagger is tricky with mixed ReactNodes.
    // Instead, we'll do a single blur-in for the whole headline with a dramatic effect.
    return (
      <motion.h1
        className={`font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-semibold ${textClass} leading-[1.05] tracking-[-0.02em] mb-6`}
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.15, ease: easeOutExpo }}
      >
        {headline}
      </motion.h1>
    );
  };

  return (
    <section className={`relative overflow-hidden ${bgClass}`}>
      {/* Animated gradient mesh background */}
      <AnimatedGradientMesh
        variant={dark ? "forest" : "warm"}
        intensity="subtle"
        className="opacity-60"
      />

      {/* Subtle honeycomb texture layer */}
      <div className="absolute inset-0 honeycomb-accent opacity-40 pointer-events-none" />

      {/* Soft grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Floating accent shapes */}
      <FloatingAccentShapes />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Text content — orchestrated load */}
          <div className="lg:col-span-7">
            {overline && (
              <motion.p
                className={`text-xs uppercase tracking-[0.15em] font-semibold ${accentTextClass} mb-5`}
                variants={heroOverline}
                initial="hidden"
                animate="show"
              >
                {overline}
              </motion.p>
            )}

            {renderHeadline()}

            <motion.p
              className={`text-base sm:text-lg ${subTextClass} leading-relaxed max-w-xl mb-8`}
              variants={heroSubheadline}
              initial="hidden"
              animate="show"
            >
              {subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={heroButtons}
              initial="hidden"
              animate="show"
            >
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors duration-200 shadow-lifted hover:shadow-dramatic"
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
            </motion.div>

            {trustBadges && trustBadges.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-x-5 gap-y-2"
                variants={heroTrust}
                initial="hidden"
                animate="show"
              >
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className={`text-xs ${dark ? "text-canvas/60" : "text-charcoal/50"}`}
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          {/* Editorial image collage — clip reveal on load */}
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative"
              variants={heroImage}
              initial="hidden"
              animate="show"
            >
              {/* Main image frame */}
              <div className="relative aspect-[4/5] rounded-card bg-canvas border border-linen overflow-hidden shadow-lifted group">
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
              <motion.div
                variants={heroFloat}
                initial="hidden"
                animate="show"
              >
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
              </motion.div>

              {/* Annotation card — pops in with spring */}
              {annotation && (
                <motion.div
                  className="absolute -top-4 -right-2 sm:right-0 bg-paper border border-linen rounded-card p-3 shadow-lifted max-w-[160px] rotate-[2deg]"
                  variants={heroAnnotation}
                  initial="hidden"
                  animate="show"
                >
                  <p className="font-hand text-base text-creative-pink leading-snug">
                    &ldquo;{annotation}&rdquo;
                  </p>
                  {annotationAuthor && (
                    <p className={`text-[10px] mt-1 ${dark ? "text-canvas/50" : "text-charcoal/40"}`}>
                      — {annotationAuthor}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Tiny color swatch accent */}
              <motion.div
                className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-bee-yellow border-2 border-paper shadow-glow-yellow"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.4, ease: easeOutExpo }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
