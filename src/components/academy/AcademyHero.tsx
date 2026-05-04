"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-bee-yellow/15 border border-bee-yellow/20 px-3 py-1 text-xs font-semibold text-honey uppercase tracking-wider mb-6">
              <Play size={12} />
              New — Guided Learning Paths
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1 className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6">
              Nature of Art{" "}
              <span className="text-honey">Academy</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-10">
              A guided art learning path for children, families, homeschoolers, and Montessori educators. Start free, follow step-by-step lessons, save progress, and unlock deeper curriculum when ready.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/academy/start"
                className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-8 py-4 text-base font-semibold text-paper hover:bg-charcoal transition-colors"
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
