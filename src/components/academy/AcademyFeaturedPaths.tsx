"use client";

import { getMockUser } from "@/lib/mockAuth";
import { academyPaths } from "@/config/academyLessons";
import { LearningPathCard } from "./LearningPathCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AcademyFeaturedPaths() {
  const user = getMockUser();
  const tier = user?.tier ?? "free";

  return (
    <section className="py-20 sm:py-28 bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">Learning Paths</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">Featured Paths</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {academyPaths.map((path) => (
            <LearningPathCard key={path.slug} path={path} userTier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
