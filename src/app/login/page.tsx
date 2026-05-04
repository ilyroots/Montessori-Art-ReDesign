"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { seedDemoUser } from "@/lib/mockAuth";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just seed the demo user and redirect
    seedDemoUser();
    router.push("/academy/dashboard");
  };

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-semibold text-ink tracking-[-0.02em] mb-2">Sign In</h1>
          <p className="text-charcoal/70">Temporary prototype login for concepting only.</p>
        </div>

        <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@natureofart.local"
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
              Sign In
              <ArrowRight size={14} />
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-linen text-center">
            <p className="text-xs text-charcoal/50 mb-3">Don't have an account?</p>
            <a
              href="/academy/start"
              className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-5 py-2.5 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors w-full"
            >
              Create Free Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
