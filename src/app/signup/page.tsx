"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createMockUser } from "@/lib/mockAuth";
import type { MockUserRole } from "@/lib/mockAuth";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<MockUserRole>("parent");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    createMockUser({
      name: name.trim(),
      email: email.trim(),
      role,
    });

    setSubmitted(true);
    setTimeout(() => {
      router.push("/academy/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-ivory relative overflow-hidden">
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

          {submitted ? (
            <div className="bg-paper border border-linen rounded-card p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles size={24} className="text-sage" />
              </div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-2">Welcome, {name}!</h2>
              <p className="text-sm text-charcoal/70">Your free account is ready. Redirecting to your dashboard...</p>
            </div>
          ) : (
            <div className="bg-paper border border-linen rounded-card p-6 sm:p-8 shadow-card">
              <h1 className="font-serif text-2xl font-semibold text-ink tracking-[-0.02em] mb-1">
                Create your free account
              </h1>
              <p className="text-sm text-charcoal/60 mb-6">
                Start learning today. No credit card required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">First name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your first name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">Email address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">I am a...</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as MockUserRole)}
                    className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink focus:border-honey focus:outline-none transition-colors"
                  >
                    <option value="parent">Parent</option>
                    <option value="homeschool">Homeschool Family</option>
                    <option value="teacher">Teacher</option>
                    <option value="school">School Leader</option>
                    <option value="artist">Artist / Creator</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors inline-flex items-center justify-center gap-2"
                >
                  Create Free Account
                  <ArrowRight size={14} />
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-linen text-center">
                <p className="text-sm text-charcoal/60">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-honey hover:text-honey-dark transition-colors">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          )}

          <p className="text-center text-xs text-charcoal/40 mt-6">
            Temporary prototype signup for concepting only. Real accounts, billing, and member access will be connected later.
          </p>
        </div>
      </div>
    </div>
  );
}
