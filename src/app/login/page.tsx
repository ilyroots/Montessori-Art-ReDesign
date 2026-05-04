"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { seedDemoUser, seedDemoTeacher } from "@/lib/mockAuth";
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const goToDashboard = () => {
    router.push("/academy/dashboard");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    seedDemoUser();
    goToDashboard();
  };

  const loginAsParent = () => {
    seedDemoUser();
    goToDashboard();
  };

  const loginAsTeacher = () => {
    seedDemoTeacher();
    goToDashboard();
  };

  return (
    <div className="min-h-screen bg-ivory relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Logo area */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold text-ink">Nature of Art</span>
              <span className="block text-xs uppercase tracking-[0.2em] text-honey font-semibold mt-1">Academy</span>
            </Link>
          </div>

          <div className="bg-paper border border-linen rounded-card p-6 sm:p-8 shadow-card">
            <h1 className="font-serif text-2xl font-semibold text-ink tracking-[-0.02em] mb-1">
              Welcome back
            </h1>
            <p className="text-sm text-charcoal/60 mb-6">
              Sign in to continue your learning path.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-1">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Any password works for demo"
                  className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors inline-flex items-center justify-center gap-2"
              >
                Continue to Demo Dashboard
                <ArrowRight size={14} />
              </button>
            </form>

            {/* Quick demo logins */}
            <div className="mt-6 pt-5 border-t border-linen">
              <p className="text-xs text-charcoal/50 text-center mb-3">Quick demo login</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={loginAsParent}
                  className="inline-flex items-center justify-center gap-1.5 rounded-button border border-linen bg-canvas px-3 py-2.5 text-xs font-medium text-ink hover:bg-honey/10 hover:border-honey/30 transition-colors"
                >
                  <Sparkles size={12} />
                  Demo Parent
                </button>
                <button
                  onClick={loginAsTeacher}
                  className="inline-flex items-center justify-center gap-1.5 rounded-button border border-linen bg-canvas px-3 py-2.5 text-xs font-medium text-ink hover:bg-sage/10 hover:border-sage/30 transition-colors"
                >
                  <GraduationCap size={12} />
                  Demo Teacher
                </button>
              </div>
            </div>
          </div>

          {/* Bottom links */}
          <div className="mt-6 text-center space-y-3">
            <p className="text-sm text-charcoal/60">
              New to the Academy?{" "}
              <Link href="/signup" className="font-medium text-honey hover:text-honey-dark transition-colors">
                Create a free account
              </Link>
            </p>
            <p className="text-xs text-charcoal/40">
              Temporary prototype login for concepting only. Real accounts, billing, and member access will be connected later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
