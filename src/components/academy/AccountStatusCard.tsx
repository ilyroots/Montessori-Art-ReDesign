"use client";

import Link from "next/link";
import { getMockUser } from "@/lib/mockAuth";
import { ProgressRing } from "./ProgressRing";
import { getPathProgress } from "@/lib/academyProgress";
import { Award, Crown, Star, Zap } from "lucide-react";

const tierBadge = {
  free: { label: "Free Starter", icon: Zap, color: "text-charcoal/60", bg: "bg-canvas" },
  family: { label: "Family Studio", icon: Star, color: "text-honey", bg: "bg-bee-yellow/10" },
  studioPlus: { label: "Studio Plus", icon: Crown, color: "text-kids-blue", bg: "bg-kids-blue/10" },
  teacher: { label: "Teacher Path", icon: Award, color: "text-sage", bg: "bg-sage/10" },
};

export function AccountStatusCard() {
  const user = getMockUser();
  if (!user) return null;

  const progress = getPathProgress(user.activePath);
  const badge = tierBadge[user.tier];
  const Icon = badge.icon;

  return (
    <div className="bg-paper border border-linen rounded-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif text-xl font-semibold text-ink">{user.name}</h3>
          <p className="text-sm text-charcoal/60">{user.email}</p>
        </div>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${badge.bg}`}>
          <Icon size={14} className={badge.color} />
          <span className={`text-xs font-semibold ${badge.color}`}>{badge.label}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <ProgressRing percent={progress.percent} size={56} strokeWidth={4} />
        <div>
          <p className="text-sm font-medium text-ink">
            {progress.completed} of {progress.total} lessons complete
          </p>
          <p className="text-xs text-charcoal/50">
            {progress.nextLesson
              ? `Next: ${progress.nextLesson.title}`
              : "Path complete!"}
          </p>
        </div>
      </div>

      <Link
        href="/academy/dashboard"
        className="text-sm font-medium text-honey hover:text-honey-dark transition-colors"
      >
        Go to Dashboard →
      </Link>
    </div>
  );
}
