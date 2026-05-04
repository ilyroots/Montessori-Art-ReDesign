"use client";

import { useRouter } from "next/navigation";
import { FakeLoginCard } from "@/components/academy/FakeLoginCard";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-semibold text-ink tracking-[-0.02em] mb-2">Create Account</h1>
          <p className="text-charcoal/70">Temporary prototype signup for concepting only.</p>
        </div>
        <FakeLoginCard />
      </div>
    </div>
  );
}
