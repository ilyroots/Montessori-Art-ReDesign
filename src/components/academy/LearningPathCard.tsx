"use client";

import Link from "next/link";
import { Lock, Unlock, Clock, Users, ArrowRight } from "lucide-react";
import { getPathProgress } from "@/lib/academyProgress";
import { ProgressRing } from "./ProgressRing";
import type { AcademyPath } from "@/config/academyLessons";
import { canAccessLesson } from "@/config/academyLessons";
import type { AcademyTier } from "@/config/academyLessons";

interface LearningPathCardProps {
  path: AcademyPath;
  userTier: AcademyTier;
  compact?: boolean;
}

export function LearningPathCard({ path, userTier, compact }: LearningPathCardProps) {
  const progress = getPathProgress(path.slug);
  const hasAccess = canAccessLesson(path.tier, userTier);
  const locked = !hasAccess;

  if (compact) {
    return (
      <Link
        href={locked ? "/academy/pricing" : `/academy/path/${path.slug}`}
        className={`group block bg-paper border rounded-card p-5 transition-shadow duration-200 ${
          locked ? "border-linen/60 opacity-70" : "border-linen hover:shadow-card-hover"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-${path.accentColor}/10 text-${path.accentColor}`}>
            {path.tier === "free" ? "Free" : path.tier}
          </span>
          {locked ? <Lock size={14} className="text-charcoal/40" /> : <Unlock size={14} className="text-sage" />}
        </div>
        <h3 className="font-semibold text-ink mb-1 group-hover:text-honey transition-colors">{path.title}</h3>
        <p className="text-xs text-charcoal/60 line-clamp-2">{path.description}</p>
        {progress.completed > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <ProgressRing percent={progress.percent} size={32} strokeWidth={3} />
            <span className="text-xs text-charcoal/50">{progress.completed}/{progress.total}</span>
          </div>
        )}
      </Link>
    );
  }

  return (
    <div className={`bg-paper border rounded-card overflow-hidden transition-shadow duration-200 hover:shadow-card-hover ${locked ? "border-linen/60" : "border-linen"}`}>
      <div className={`h-2 bg-${path.accentColor}`} style={{ backgroundColor: `var(--color-${path.accentColor})` }} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-charcoal/50">
            {path.audience}
          </span>
          {locked ? (
            <span className="inline-flex items-center gap-1 text-xs text-charcoal/50">
              <Lock size={12} /> Locked
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs text-sage">
              <Unlock size={12} /> Open
            </span>
          )}
        </div>
        <h3 className="font-serif text-xl font-semibold text-ink mb-2">{path.title}</h3>
        <p className="text-sm text-charcoal/70 leading-relaxed mb-4">{path.description}</p>

        <div className="flex flex-wrap gap-3 text-xs text-charcoal/50 mb-5">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {path.estimatedTime}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} /> {path.lessons.length} lessons
          </span>
        </div>

        {progress.completed > 0 && (
          <div className="flex items-center gap-3 mb-4 p-3 bg-canvas rounded-lg">
            <ProgressRing percent={progress.percent} size={40} strokeWidth={4} />
            <div>
              <p className="text-sm font-medium text-ink">{progress.percent}% complete</p>
              <p className="text-xs text-charcoal/50">
                {progress.completed} of {path.lessons.length} lessons done
              </p>
            </div>
          </div>
        )}

        <Link
          href={locked ? "/academy/pricing" : `/academy/path/${path.slug}`}
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
            locked ? "text-charcoal/50" : "text-honey hover:text-honey-dark"
          }`}
        >
          {locked ? "View Memberships" : "Start Path"}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
