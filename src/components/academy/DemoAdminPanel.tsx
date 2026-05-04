"use client";

import { useState } from "react";
import { upgradeMockTier, resetDemoProgress, seedDemoUser, seedDemoTeacher, logoutMockUser } from "@/lib/mockAuth";
import type { AcademyTier } from "@/config/academyLessons";
import { Settings, RotateCcw, UserCheck, LogOut, Sparkles, GraduationCap } from "lucide-react";

export function DemoAdminPanel() {
  const [open, setOpen] = useState(false);

  const switchTier = (tier: AcademyTier) => {
    upgradeMockTier(tier);
    window.location.reload();
  };

  const handleReset = () => {
    resetDemoProgress();
    window.location.reload();
  };

  const handleSeedParent = () => {
    seedDemoUser();
    window.location.reload();
  };

  const handleSeedTeacher = () => {
    seedDemoTeacher();
    window.location.reload();
  };

  const handleLogout = () => {
    logoutMockUser();
    window.location.href = "/academy/start";
  };

  return (
    <div className="bg-paper border border-linen rounded-card p-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-semibold text-charcoal/70 hover:text-ink transition-colors w-full"
      >
        <Settings size={16} />
        Prototype Controls
        <span className="ml-auto text-[10px] uppercase tracking-wider bg-canvas px-2 py-0.5 rounded-full text-charcoal/50">
          {open ? "Hide" : "Show"}
        </span>
      </button>

      {open && (
        <div className="mt-4 space-y-4 border-t border-linen pt-4">
          <p className="text-xs text-charcoal/50 leading-relaxed">
            Prototype controls only — this will be replaced by real auth, billing, and admin tools later.
          </p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Switch Tier</p>
            <div className="grid grid-cols-2 gap-2">
              {(["free", "family", "studioPlus", "teacher"] as AcademyTier[]).map((tier) => (
                <button
                  key={tier}
                  onClick={() => switchTier(tier)}
                  className="px-3 py-2 text-xs font-medium rounded-button border border-linen bg-canvas hover:bg-honey/10 hover:border-honey/30 transition-colors text-ink"
                >
                  {tier === "free" && "Free"}
                  {tier === "family" && "Family"}
                  {tier === "studioPlus" && "Studio Plus"}
                  {tier === "teacher" && "Teacher"}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Seed Demo Account</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleSeedParent}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-button border border-linen bg-canvas hover:bg-honey/10 hover:border-honey/30 transition-colors text-ink"
              >
                <UserCheck size={12} />
                Demo Parent
              </button>
              <button
                onClick={handleSeedTeacher}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-button border border-linen bg-canvas hover:bg-sage/10 hover:border-sage/30 transition-colors text-ink"
              >
                <GraduationCap size={12} />
                Demo Teacher
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-button border border-linen bg-canvas hover:bg-red-50 hover:border-red-200 transition-colors text-charcoal"
            >
              <RotateCcw size={12} />
              Reset Progress
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-button border border-linen bg-canvas hover:bg-ink hover:text-paper transition-colors text-charcoal"
            >
              <LogOut size={12} />
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
