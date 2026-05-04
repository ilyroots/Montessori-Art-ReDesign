"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Play, LayoutDashboard, Sparkles } from "lucide-react";
import { getMockUser } from "@/lib/mockAuth";
import type { MockUser } from "@/lib/mockAuth";
import { getPathProgress } from "@/lib/academyProgress";
import { ProgressRing } from "./ProgressRing";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function HomepageAcademySection() {
  const [user, setUser] = useState<MockUser | null>(null);

  useEffect(() => {
    setUser(getMockUser());
  }, []);

  const progress = user ? getPathProgress(user.activePath) : null;

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-bee-yellow/15 border border-bee-yellow/20 px-3 py-1 text-xs font-semibold text-honey uppercase tracking-wider mb-5">
                <Sparkles size={12} />
                New
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-5">
                Introducing the{" "}
                <span className="text-honey">Nature of Art Academy</span>
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                A guided learning space where families, homeschoolers, and educators can start free, 
                follow step-by-step art lessons, save progress, and unlock deeper curriculum, 
                printables, supply kits, and teacher training when ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/academy/start"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                >
                  <Play size={14} />
                  Start Free Academy
                </Link>
                <Link
                  href="/academy/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-button border border-ink text-ink px-6 py-3 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors"
                >
                  <LayoutDashboard size={14} />
                  Preview Dashboard
                </Link>
                <Link
                  href="/academy/pricing"
                  className="inline-flex items-center justify-center text-sm font-medium text-honey hover:text-honey-dark transition-colors"
                >
                  View Memberships →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {user ? (
              <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-ink">Welcome back, {user.name}</h3>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-honey/10 text-honey">
                    {user.tier === "free" ? "Free" : user.tier}
                  </span>
                </div>
                {progress && (
                  <div className="flex items-center gap-4 mb-5">
                    <ProgressRing percent={progress.percent} size={48} strokeWidth={4} />
                    <div>
                      <p className="text-sm font-medium text-ink">{progress.percent}% complete</p>
                      <p className="text-xs text-charcoal/50">
                        {progress.completed} of {progress.total} lessons
                      </p>
                    </div>
                  </div>
                )}
                <Link
                  href="/academy/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors w-full"
                >
                  Continue Learning
                  <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
                <div className="w-12 h-12 rounded-full bg-bee-yellow/10 flex items-center justify-center mb-4">
                  <Play size={22} className="text-honey" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  Create your free learning account
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">
                  Start with the Color Mixing Starter Path. No credit card required.
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/academy/start"
                    className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                  >
                    Start Free
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/academy/dashboard"
                    className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-5 py-2.5 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors"
                  >
                    Preview Dashboard
                  </Link>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
