"use client";

import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";
import type { AcademyTier } from "@/config/academyLessons";
import { upgradeMockTier } from "@/lib/mockAuth";

interface LockedLessonOverlayProps {
  requiredTier: AcademyTier;
  lessonTitle: string;
}

export function LockedLessonOverlay({ requiredTier, lessonTitle }: LockedLessonOverlayProps) {
  const demoUnlock = () => {
    upgradeMockTier(requiredTier);
    window.location.reload();
  };

  return (
    <div className="absolute inset-0 bg-paper/90 backdrop-blur-sm rounded-card flex flex-col items-center justify-center p-8 text-center z-10">
      <div className="w-14 h-14 rounded-full bg-bee-yellow/10 flex items-center justify-center mb-4">
        <Lock size={24} className="text-honey" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-ink mb-2">
        Continue this learning path with {tierLabel(requiredTier)}.
      </h3>
      <p className="text-sm text-charcoal/70 max-w-md mb-6">
        Unlock guided lessons, printables, project checklists, monthly art challenges, and progress tracking.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/academy/pricing"
          className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
        >
          View Memberships
          <ArrowRight size={14} />
        </Link>
        <button
          onClick={demoUnlock}
          className="inline-flex items-center justify-center gap-2 rounded-button border border-honey text-honey px-6 py-3 text-sm font-semibold hover:bg-honey/10 transition-colors"
        >
          Demo Unlock {tierLabel(requiredTier)}
        </button>
      </div>
    </div>
  );
}

function tierLabel(tier: AcademyTier): string {
  switch (tier) {
    case "free":
      return "Free Starter";
    case "family":
      return "Family Studio";
    case "studioPlus":
      return "Studio Plus";
    case "teacher":
      return "Teacher Path";
  }
}
