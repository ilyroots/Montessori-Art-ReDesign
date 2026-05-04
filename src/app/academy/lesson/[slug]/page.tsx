"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { getMockUser } from "@/lib/mockAuth";
import { getAcademyLessonBySlug, getAcademyPathBySlug, canAccessLesson, getNextLessonInPath } from "@/config/academyLessons";
import { isLessonComplete, markLessonComplete } from "@/lib/academyProgress";
import { AssignmentChecklist } from "@/components/academy/AssignmentChecklist";
import { MiniQuiz } from "@/components/academy/MiniQuiz";
import { LockedLessonOverlay } from "@/components/academy/LockedLessonOverlay";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Check, ArrowRight, ArrowLeft, Play, BookOpen, Palette, Clock } from "lucide-react";

export default function AcademyLessonPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const lesson = getAcademyLessonBySlug(slug);
  const user = getMockUser();
  const tier = user?.tier ?? "free";
  const [justCompleted, setJustCompleted] = useState(false);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-semibold text-ink mb-2">Lesson not found</h1>
          <Link href="/academy" className="text-honey hover:underline">Browse all paths →</Link>
        </div>
      </div>
    );
  }

  const path = getAcademyPathBySlug(lesson.pathSlug);
  const locked = !canAccessLesson(lesson.tierRequired, tier);
  const completed = isLessonComplete(lesson.slug);
  const nextLesson = getNextLessonInPath(lesson.pathSlug, lesson.slug);

  const handleMarkComplete = () => {
    markLessonComplete(lesson.slug);
    setJustCompleted(true);
  };

  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-charcoal/50 mb-6">
          <Link href="/academy" className="hover:text-honey transition-colors">Academy</Link>
          <span>/</span>
          {path && (
            <>
              <Link href={`/academy/path/${path.slug}`} className="hover:text-honey transition-colors">{path.title}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-ink">{lesson.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video placeholder */}
            <ScrollReveal>
              <div className="relative bg-paper border border-linen rounded-card overflow-hidden">
                <div className="aspect-video bg-ink/5 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-honey/10 flex items-center justify-center">
                      <Play size={28} className="text-honey ml-1" />
                    </div>
                    <p className="text-sm font-medium text-ink">{lesson.videoPlaceholderTitle}</p>
                    <p className="text-xs text-charcoal/50 mt-1">Video hosting integration pending (Vimeo/Bunny)</p>
                  </div>
                </div>
                {locked && (
                  <LockedLessonOverlay requiredTier={lesson.tierRequired} lessonTitle={lesson.title} />
                )}
              </div>
            </ScrollReveal>

            {/* Title & summary */}
            <ScrollReveal>
              <div className="bg-paper border border-linen rounded-card p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-canvas text-charcoal/60">
                    {lesson.tierRequired}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-charcoal/40">
                    <Clock size={10} /> {lesson.estimatedMinutes} min
                  </span>
                  {completed && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-sage font-medium">
                      <Check size={10} /> Complete
                    </span>
                  )}
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-3">
                  {lesson.title}
                </h1>
                <p className="text-charcoal/80 leading-relaxed">{lesson.summary}</p>
              </div>
            </ScrollReveal>

            {/* Materials */}
            <ScrollReveal>
              <div className="bg-paper border border-linen rounded-card p-5 sm:p-6">
                <h3 className="font-semibold text-ink mb-3 flex items-center gap-2">
                  <Palette size={16} /> Materials Needed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {lesson.materials.map((m) => (
                    <span key={m} className="text-xs bg-canvas px-3 py-1.5 rounded-full text-charcoal/70">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Task */}
            <ScrollReveal>
              <div className="bg-paper border border-linen rounded-card p-5 sm:p-6">
                <h3 className="font-semibold text-ink mb-2">Hands-On Task</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">{lesson.task}</p>
              </div>
            </ScrollReveal>

            {/* Checklist */}
            <ScrollReveal>
              <AssignmentChecklist lessonSlug={lesson.slug} items={lesson.checklist} />
            </ScrollReveal>

            {/* Quiz */}
            {lesson.quiz && (
              <ScrollReveal>
                <MiniQuiz lessonSlug={lesson.slug} quiz={lesson.quiz} />
              </ScrollReveal>
            )}

            {/* Mark complete */}
            {!locked && (
              <ScrollReveal>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {completed || justCompleted ? (
                    <div className="inline-flex items-center gap-2 rounded-button bg-sage/10 px-6 py-3 text-sm font-semibold text-sage">
                      <Check size={16} />
                      Lesson Complete
                    </div>
                  ) : (
                    <button
                      onClick={handleMarkComplete}
                      className="rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                    >
                      Mark Lesson Complete
                    </button>
                  )}

                  {nextLesson && (
                    <Link
                      href={`/academy/lesson/${nextLesson.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-honey hover:text-honey-dark transition-colors"
                    >
                      Next: {nextLesson.title}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {path && (
              <ScrollReveal>
                <div className="bg-paper border border-linen rounded-card p-5">
                  <h3 className="font-semibold text-ink mb-3">Path Outline</h3>
                  <p className="text-xs text-charcoal/50 mb-3">{path.title}</p>
                  <div className="space-y-1">
                    {path.lessons.map((l, i) => {
                      const isCurrent = l.slug === lesson.slug;
                      const isDone = isLessonComplete(l.slug);
                      return (
                        <Link
                          key={l.slug}
                          href={`/academy/lesson/${l.slug}`}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                            isCurrent
                              ? "bg-honey/10 text-honey font-medium"
                              : isDone
                              ? "text-charcoal/50"
                              : "text-charcoal/70 hover:bg-canvas"
                          }`}
                        >
                          <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0">
                            {isDone ? <Check size={12} className="text-sage" /> : String(i + 1)}
                          </span>
                          <span className={`truncate ${isDone ? "line-through" : ""}`}>{l.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Related resources */}
            {lesson.relatedResources.length > 0 && (
              <ScrollReveal>
                <div className="bg-paper border border-linen rounded-card p-5">
                  <h3 className="font-semibold text-ink mb-3 flex items-center gap-2">
                    <BookOpen size={16} /> Related Resources
                  </h3>
                  <div className="space-y-2">
                    {lesson.relatedResources.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="block text-sm text-honey hover:text-honey-dark hover:underline"
                      >
                        {r.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
