"use client";

import { useState, useEffect, useCallback } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { Droplets, Sparkles } from "lucide-react";

export default function ColorTheoryClient() {
  const [iframeHeight, setIframeHeight] = useState<number>(2400);

  const handleMessage = useCallback((event: MessageEvent) => {
    if (
      event.data &&
      typeof event.data === "object" &&
      event.data.type === "atelier-resize" &&
      typeof event.data.height === "number"
    ) {
      setIframeHeight(event.data.height);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory">
        <AnimatedColorBlobs intensity="medium" className="opacity-20" />
        <div className="absolute inset-0 honeycomb-accent opacity-20 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 sm:pb-16">
          <ScrollReveal variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label justify-center mb-4">
                <Droplets size={14} className="text-honey" />
                Interactive Atelier
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-5 leading-tight">
                Color Theory{" "}
                <span className="text-honey italic">Mixing Lab</span>
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
                Explore how colors mix and interact in this hands-on digital
                atelier. Tap the paint blobs to combine colors and discover
                new shades — just like in a real Montessori art environment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* Interactive Artifact */}
      <section className="bg-canvas py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card overflow-hidden shadow-card">
              {/* Iframe header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-linen bg-ivory">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-honey" />
                  <span className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Color Mixing Atelier
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-creative-pink/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-bee-yellow/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-kids-blue/40" />
                </div>
              </div>

              {/* Iframe — height grows to fit full content */}
              <div
                className="w-full transition-all duration-300 ease-out"
                style={{ height: iframeHeight }}
              >
                <iframe
                  src="/atelier/color-mixing.html"
                  title="Color Mixing Atelier"
                  className="w-full h-full border-0 block"
                  loading="eager"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 text-center">
              <p className="text-sm text-charcoal/60">
                Tip: Mix red + yellow to make orange, blue + yellow to make green,
                and red + blue to make purple. Try all three primary colors together!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition variant="swatches" height="lg" />

      {/* Context / Curriculum CTA */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-4">
              Want the Full Color Theory Curriculum?
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              The complete curriculum includes 37 sequential color exploration
              lessons for ages 3–12, from primary color recognition to advanced
              mixing and matching activities.
            </p>
            <a
              href="https://spramani.lpages.co/color-theory-curriculum-sales-page/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
            >
              View Color Theory Curriculum
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
