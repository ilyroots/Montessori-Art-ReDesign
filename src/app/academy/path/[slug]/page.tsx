"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getMockUser } from "@/lib/mockAuth";
import { getAcademyPathBySlug, canAccessLesson } from "@/config/academyLessons";
import { getPathProgress } from "@/lib/academyProgress";
import { LessonCard } from "@/components/academy/LessonCard";
import { ProgressRing } from "@/components/academy/ProgressRing";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ArrowRight, Clock, Users, Lock } from "lucide-react";

export default function AcademyPathPage() {
  const params = useParams();
  const slug = params.slug as string;
  const path = getAcademyPathBySlug(slug);
  const user = getMockUser();
  const tier = user?.tier ?? "free";

  if (!path) {
    return (
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-semibold text-ink mb-2">Path not found</h1>
          <Link href="/academy" className="text-honey hover:underline">Browse all paths →</Link>
        </div>
      </div>
    );
  }

  const progress = getPathProgress(path.slug);
  const hasAccess = canAccessLesson(path.tier, tier);

  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-charcoal/50 mb-6">
          <Link href="/academy" className="hover:text-honey transition-colors">Academy</Link>
          <span>/</span>
          <span className="text-ink">{path.title}</span>
        </div>

        {/* Hero */}
        <ScrollReveal>
          <div className="bg-paper border border-linen rounded-card p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-canvas text-charcoal/60">
                {path.tier === "free" ? "Free" : path.tier}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-charcoal/50">{path.audience}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-3">
              {path.title}
            </h1>
            <p className="text-charcoal/80 leading-relaxed mb-5">{path.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-charcoal/60 mb-6">
              <span className="flex items-center gap-1"><Clock size={14} /> {path.estimatedTime}</span>
              <span className="flex items-center gap-1"><Users size={14} /> {path.lessons.length} lessons</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-canvas rounded-lg">
              <ProgressRing percent={progress.percent} size={56} strokeWidth={5} />
              <div>
                <p className="text-sm font-medium text-ink">{progress.completed} of {path.lessons.length} lessons complete</p>
                {progress.nextLesson && (
                  <Link
                    href={`/academy/lesson/${progress.nextLesson.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-honey hover:text-honey-dark transition-colors mt-1"
                  >
                    Continue: {progress.nextLesson.title}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Lessons */}
        <ScrollReveal>
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">Lessons</h2>
        </ScrollReveal>
        <div className="space-y-3 mb-10">
          {path.lessons.map((lesson, i) => (
            <LessonCard key={lesson.slug} lesson={lesson} userTier={tier} index={i} />
          ))}
        </div>

        {/* Upgrade prompt if locked */}
        {!hasAccess && (
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card p-6 text-center">
              <Lock size={24} className="mx-auto mb-3 text-honey" />
              <h3 className="font-semibold text-ink mb-2">Unlock the full path</h3>
              <p className="text-sm text-charcoal/70 mb-4">
                Upgrade to {path.tier === "family" ? "Family Studio" : path.tier === "studioPlus" ? "Studio Plus" : "Teacher Path"} to access all lessons.
              </p>
              <Link
                href="/academy/pricing"
                className="inline-flex items-center gap-2 rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
              >
                View Memberships
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
