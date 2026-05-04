"use client";

import Link from "next/link";
import { Check, Lock, Play, Clock } from "lucide-react";
import { isLessonComplete } from "@/lib/academyProgress";
import type { AcademyLesson } from "@/config/academyLessons";
import type { AcademyTier } from "@/config/academyLessons";
import { canAccessLesson } from "@/config/academyLessons";

interface LessonCardProps {
  lesson: AcademyLesson;
  userTier: AcademyTier;
  index: number;
}

export function LessonCard({ lesson, userTier, index }: LessonCardProps) {
  const completed = isLessonComplete(lesson.slug);
  const locked = !canAccessLesson(lesson.tierRequired, userTier);

  return (
    <Link
      href={locked ? "#" : `/academy/lesson/${lesson.slug}`}
      onClick={(e) => locked && e.preventDefault()}
      className={`group flex items-start gap-4 p-4 rounded-card border transition-all duration-200 ${
        locked
          ? "border-linen/50 bg-canvas/50 opacity-60 cursor-not-allowed"
          : completed
          ? "border-sage/30 bg-sage/5 hover:shadow-card-hover"
          : "border-linen bg-paper hover:shadow-card-hover"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
          locked
            ? "bg-charcoal/10 text-charcoal/40"
            : completed
            ? "bg-sage/15 text-sage"
            : "bg-honey/10 text-honey"
        }`}
      >
        {completed ? <Check size={18} /> : locked ? <Lock size={16} /> : <Play size={16} />}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-wider text-charcoal/40 font-medium">
            Lesson {index + 1}
          </span>
          {lesson.tierRequired !== "free" && (
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-canvas text-charcoal/50 font-medium">
              {lesson.tierRequired}
            </span>
          )}
        </div>
        <h4 className={`font-semibold text-sm mb-1 ${completed ? "text-ink" : "text-ink group-hover:text-honey"} transition-colors`}>
          {lesson.title}
        </h4>
        <p className="text-xs text-charcoal/60 line-clamp-2">{lesson.summary}</p>
        <div className="flex items-center gap-3 mt-2 text-[10px] text-charcoal/40">
          <span className="flex items-center gap-1">
            <Clock size={10} /> {lesson.estimatedMinutes} min
          </span>
          {lesson.quiz && <span>Quiz</span>}
          {lesson.checklist.length > 0 && <span>{lesson.checklist.length} tasks</span>}
        </div>
      </div>
    </Link>
  );
}
