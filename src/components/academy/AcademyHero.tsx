"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { AnimatedGradientMesh } from "@/components/visual/AnimatedGradientMesh";
import { ColorSwatchTrail } from "@/components/visual/ColorSwatchTrail";
import { easeOutExpo } from "@/components/motion/motionVariants";

export function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      {/* Animated gradient mesh for atmosphere */}
      <AnimatedGradientMesh variant="sunset" intensity="subtle" className="opacity-50" />
      <AnimatedColorBlobs intensity="subtle" className="opacity-30" />
      <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="inline-flex items-center gap-1.5 rounded-full bg-bee-yellow/15 border border-bee-yellow/20 px-3 py-1 text-xs font-semibold text-honey uppercase tracking-wider mb-6"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <Play size={12} />
            New — Guided Learning Paths
          </motion.span>

          <motion.h1
            className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeOutExpo }}
          >
            Nature of Art{" "}
            <span className="text-honey">Academy</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
          >
            A guided art learning path for children, families, homeschoolers, and Montessori educators. Start free, follow step-by-step lessons, save progress, and unlock deeper curriculum when ready.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: easeOutExpo }}
          >
            <Link
              href="/academy/start"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-8 py-4 text-base font-semibold text-paper hover:bg-charcoal transition-colors shadow-lifted hover:shadow-dramatic"
            >
              Start Free Academy
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/academy/dashboard"
              className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-8 py-4 text-base font-semibold hover:bg-ink hover:text-paper transition-colors"
            >
              Preview Dashboard
            </Link>
            <Link
              href="/academy/pricing"
              className="inline-flex items-center justify-center text-sm font-medium text-honey hover:text-honey-dark transition-colors"
            >
              View Memberships →
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65, ease: easeOutExpo }}
          >
            <ColorSwatchTrail size="sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
