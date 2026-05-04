"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getMockUser } from "@/lib/mockAuth";
import type { MockUser } from "@/lib/mockAuth";
import { academyPaths } from "@/config/academyLessons";
import { getPathProgress } from "@/lib/academyProgress";
import { ProgressRing } from "@/components/academy/ProgressRing";
import { LearningPathCard } from "@/components/academy/LearningPathCard";
import { DemoAdminPanel } from "@/components/academy/DemoAdminPanel";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ArrowRight, BookOpen, Package, Award, Sparkles } from "lucide-react";

export default function AcademyDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<MockUser | null>(null);

  useEffect(() => {
    const u = getMockUser();
    if (!u) {
      router.push("/academy/start");
      return;
    }
    setUser(u);
  }, [router]);

  if (!user) return null;

  const activeProgress = getPathProgress(user.activePath);
  const activePath = academyPaths.find((p) => p.slug === user.activePath);

  const tierLabel: Record<string, string> = {
    free: "Free Starter",
    family: "Family Studio",
    studioPlus: "Studio Plus",
    teacher: "Teacher Path",
  };

  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Welcome */}
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-2">
              Welcome back, {user.name}
            </h1>
            <p className="text-charcoal/70">
              {activePath
                ? `Current Path: ${activePath.title}. ${activeProgress.completed} of ${activeProgress.total} lessons complete.`
                : "Choose a learning path to get started."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Account Card */}
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-ink">Account</h2>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-honey/10 text-honey">
                  {tierLabel[user.tier]}
                </span>
              </div>
              <p className="text-sm text-charcoal/70 mb-4">{user.email}</p>
              <div className="flex items-center gap-3 mb-4">
                <ProgressRing percent={activeProgress.percent} size={48} strokeWidth={4} />
                <div>
                  <p className="text-sm font-medium text-ink">{activeProgress.percent}%</p>
                  <p className="text-xs text-charcoal/50">Path progress</p>
                </div>
              </div>
              <Link href="/academy/account" className="text-sm font-medium text-honey hover:text-honey-dark transition-colors">
                Manage Account →
              </Link>
            </div>
          </ScrollReveal>

          {/* Continue Learning */}
          <ScrollReveal delay={0.05}>
            <div className="bg-paper border border-linen rounded-card p-6 lg:col-span-2">
              <h2 className="font-semibold text-ink mb-4">Continue Learning</h2>
              {activeProgress.nextLesson ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-1">Next Lesson</p>
                    <p className="font-serif text-lg font-semibold text-ink">{activeProgress.nextLesson.title}</p>
                    <p className="text-sm text-charcoal/70">{activeProgress.nextLesson.summary}</p>
                  </div>
                  <Link
                    href={`/academy/lesson/${activeProgress.nextLesson.slug}`}
                    className="inline-flex items-center gap-2 rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors shrink-0"
                  >
                    Continue
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-charcoal/70 mb-3">Path complete! Choose your next adventure.</p>
                  <Link
                    href="/academy"
                    className="inline-flex items-center gap-2 rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                  >
                    Browse Paths
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Weekly Task & Recommendations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card p-5">
              <Sparkles size={18} className="text-honey mb-3" />
              <h3 className="font-semibold text-ink text-sm mb-1">Weekly Art Task</h3>
              <p className="text-xs text-charcoal/70">
                Go outside and collect three leaves. Match each leaf to a painted color mixture.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="bg-paper border border-linen rounded-card p-5">
              <Package size={18} className="text-kids-blue mb-3" />
              <h3 className="font-semibold text-ink text-sm mb-1">Recommended Supply</h3>
              <p className="text-xs text-charcoal/70">Color Mixing Starter Kit — primary paints, tray, and brushes.</p>
              <Link href="/academy/bundles" className="text-xs text-honey hover:underline mt-2 inline-block">
                View bundles →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-paper border border-linen rounded-card p-5">
              <Award size={18} className="text-sage mb-3" />
              <h3 className="font-semibold text-ink text-sm mb-1">Certification</h3>
              <p className="text-xs text-charcoal/70">Preview the Art Teaching Blueprint teacher pathway.</p>
              <Link href="/academy/certification" className="text-xs text-honey hover:underline mt-2 inline-block">
                Learn more →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-paper border border-linen rounded-card p-5">
              <BookOpen size={18} className="text-creative-pink mb-3" />
              <h3 className="font-semibold text-ink text-sm mb-1">New Path</h3>
              <p className="text-xs text-charcoal/70">Drawing for Young Children — 6 gentle drawing lessons.</p>
              <Link href="/academy/path/drawing-young-children" className="text-xs text-honey hover:underline mt-2 inline-block">
                Preview →
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Learning Paths Grid */}
        <ScrollReveal>
          <h2 className="font-serif text-2xl font-semibold text-ink tracking-[-0.02em] mb-6">All Learning Paths</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {academyPaths.map((path) => (
            <LearningPathCard key={path.slug} path={path} userTier={user.tier} compact />
          ))}
        </div>

        {/* Demo Admin Panel */}
        <ScrollReveal>
          <DemoAdminPanel />
        </ScrollReveal>
      </div>
    </div>
  );
}
