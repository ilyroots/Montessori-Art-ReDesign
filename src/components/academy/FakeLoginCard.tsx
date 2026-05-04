"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createMockUser } from "@/lib/mockAuth";
import type { MockUserRole } from "@/lib/mockAuth";
import { Sparkles } from "lucide-react";

export function FakeLoginCard() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<MockUserRole>("parent");
  const [wantsHomeIdeas, setWantsHomeIdeas] = useState(false);
  const [isClassroom, setIsClassroom] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    createMockUser({
      name: name.trim(),
      email: email.trim(),
      role,
      wantsHomeIdeas,
      isClassroom,
    });

    setSubmitted(true);
    setTimeout(() => {
      router.push("/academy/dashboard");
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-paper border border-linen rounded-card p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
          <Sparkles size={24} className="text-sage" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-ink mb-2">Welcome, {name}!</h3>
        <p className="text-sm text-charcoal/70">Your free learning account is ready. Redirecting to your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
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
            <option value="homeschool">Homeschool Educator</option>
            <option value="teacher">Teacher</option>
            <option value="school">School Leader</option>
            <option value="artist">Artist / Maker</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-charcoal/70 cursor-pointer">
            <input
              type="checkbox"
              checked={wantsHomeIdeas}
              onChange={(e) => setWantsHomeIdeas(e.target.checked)}
              className="rounded border-linen text-honey focus:ring-honey"
            />
            I want lesson ideas for home
          </label>
          <label className="flex items-center gap-2 text-sm text-charcoal/70 cursor-pointer">
            <input
              type="checkbox"
              checked={isClassroom}
              onChange={(e) => setIsClassroom(e.target.checked)}
              className="rounded border-linen text-honey focus:ring-honey"
            />
            I teach in a classroom
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
        >
          Create Free Account
        </button>
        <p className="text-xs text-charcoal/50 text-center">
          Temporary prototype login for concepting only. No real account is created.
        </p>
      </form>
    </div>
  );
}
