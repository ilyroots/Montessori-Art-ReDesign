"use client";

import Link from "next/link";
import { Package, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AcademyArtBoxPreview() {
  return (
    <section className="py-20 sm:py-28 bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card p-8 sm:p-10">
              <div className="w-14 h-14 rounded-full bg-bee-yellow/10 flex items-center justify-center mb-6">
                <Package size={28} className="text-honey" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Art Box & Supply Kits
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Future supply kits matched to each learning path. Curated materials, child-safe tools, and printable guides — delivered or sourced locally.
              </p>
              <ul className="space-y-2 mb-8">
                {["Color Mixing Starter Kit", "Clay Play Kit", "Art Shelf Starter Bundle", "Teacher Curriculum Bundle"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-charcoal/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-honey" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/academy/bundles"
                className="inline-flex items-center gap-2 rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
              >
                Explore Bundles
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-card bg-paper border border-linen flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-kids-blue/10 flex items-center justify-center">
                    <Package size={20} className="text-kids-blue" />
                  </div>
                  <p className="text-xs font-medium text-charcoal/60">Paint Kit</p>
                </div>
              </div>
              <div className="aspect-square rounded-card bg-paper border border-linen flex items-center justify-center mt-6">
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-creative-pink/10 flex items-center justify-center">
                    <Package size={20} className="text-creative-pink" />
                  </div>
                  <p className="text-xs font-medium text-charcoal/60">Clay Kit</p>
                </div>
              </div>
              <div className="aspect-square rounded-card bg-paper border border-linen flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-sage/10 flex items-center justify-center">
                    <Package size={20} className="text-sage" />
                  </div>
                  <p className="text-xs font-medium text-charcoal/60">Shelf Kit</p>
                </div>
              </div>
              <div className="aspect-square rounded-card bg-paper border border-linen flex items-center justify-center mt-6">
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-honey/10 flex items-center justify-center">
                    <Package size={20} className="text-honey" />
                  </div>
                  <p className="text-xs font-medium text-charcoal/60">Teacher Kit</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
