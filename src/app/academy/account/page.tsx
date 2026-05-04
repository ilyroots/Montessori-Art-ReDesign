"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMockUser, logoutMockUser } from "@/lib/mockAuth";
import type { MockUser } from "@/lib/mockAuth";
import { DemoAdminPanel } from "@/components/academy/DemoAdminPanel";
import { isLessonComplete } from "@/lib/academyProgress";
import { academyPaths } from "@/config/academyLessons";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Award, BookOpen, LogOut } from "lucide-react";

export default function AcademyAccountPage() {
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

  const tierLabel: Record<string, string> = {
    free: "Free Starter",
    family: "Family Studio",
    studioPlus: "Studio Plus",
    teacher: "Teacher Path",
  };

  const totalCompleted = user.completedLessons.length;
  const allLessons = academyPaths.flatMap((p) => p.lessons);
  const completedLessons = allLessons.filter((l) => isLessonComplete(l.slug));

  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <ScrollReveal>
          <h1 className="font-serif text-3xl font-semibold text-ink tracking-[-0.02em] mb-8">Account</h1>
        </ScrollReveal>

        <div className="space-y-6">
          {/* Profile */}
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-ink text-lg">{user.name}</h2>
                  <p className="text-sm text-charcoal/60">{user.email}</p>
                  <p className="text-sm text-charcoal/60 capitalize">Role: {user.role}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-honey/10 text-honey text-xs font-semibold">
                  <Award size={14} />
                  {tierLabel[user.tier]}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-paper border border-linen rounded-card p-5 text-center">
                <p className="font-serif text-3xl font-bold text-ink">{totalCompleted}</p>
                <p className="text-xs text-charcoal/50">Lessons Completed</p>
              </div>
              <div className="bg-paper border border-linen rounded-card p-5 text-center">
                <p className="font-serif text-3xl font-bold text-ink">{academyPaths.length}</p>
                <p className="text-xs text-charcoal/50">Learning Paths</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Completed lessons */}
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card p-6">
              <h3 className="font-semibold text-ink mb-3 flex items-center gap-2">
                <BookOpen size={16} />
                Completed Lessons
              </h3>
              {completedLessons.length > 0 ? (
                <ul className="space-y-2">
                  {completedLessons.map((l) => (
                    <li key={l.slug} className="text-sm text-charcoal/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                      {l.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-charcoal/50">No lessons completed yet. Start learning!</p>
              )}
            </div>
          </ScrollReveal>

          {/* Active path */}
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card p-6">
              <h3 className="font-semibold text-ink mb-2">Active Path</h3>
              <p className="text-sm text-charcoal/70">
                {academyPaths.find((p) => p.slug === user.activePath)?.title ?? "None selected"}
              </p>
            </div>
          </ScrollReveal>

          {/* Prototype notes */}
          <ScrollReveal>
            <div className="bg-canvas border border-linen rounded-card p-6">
              <h3 className="font-semibold text-ink mb-2">Future Integrations</h3>
              <p className="text-xs text-charcoal/50 leading-relaxed">
                This account page is a prototype. Future versions will include real auth (Supabase/Auth.js), 
                billing history (Stripe), subscription management, downloadable certificates, 
                and community features.
              </p>
            </div>
          </ScrollReveal>

          {/* Demo controls */}
          <ScrollReveal>
            <DemoAdminPanel />
          </ScrollReveal>

          {/* Logout */}
          <ScrollReveal>
            <button
              onClick={() => {
                logoutMockUser();
                router.push("/academy/start");
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-button border border-red-200 text-red-700 px-5 py-3 text-sm font-semibold hover:bg-red-50 transition-colors"
            >
              <LogOut size={14} />
              Log Out
            </button>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
