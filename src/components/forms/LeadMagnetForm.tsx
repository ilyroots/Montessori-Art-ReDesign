"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { submitToKeap } from "@/lib/keap";

interface LeadMagnetFormProps {
  resourceId: string;
  resourceName: string;
  buttonLabel?: string;
  successMessage?: string;
}

export function LeadMagnetForm({
  resourceId,
  resourceName,
  buttonLabel = "Send It To Me",
  successMessage = "Check your email! Your free resource is on its way.",
}: LeadMagnetFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    trackEvent("lead_magnet_submit", { resource: resourceId, email });

    const result = await submitToKeap("free-resource", {
      email,
      firstName,
      tags: [resourceId],
    });

    if (result.success) {
      setStatus("success");
      setMessage(successMessage);
      setEmail("");
      setFirstName("");
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  };

  return (
    <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
      {status === "success" ? (
        <div className="text-center py-8">
          <div className="mx-auto w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-serif text-xl font-semibold text-espresso mb-2">You&apos;re all set!</h4>
          <p className="text-sm text-charcoal/70">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="lead-magnet-name" className="block text-sm font-medium text-espresso mb-1">
              First name
            </label>
            <input
              id="lead-magnet-name"
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-espresso placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="lead-magnet-email" className="block text-sm font-medium text-espresso mb-1">
              Email address
            </label>
            <input
              id="lead-magnet-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-espresso placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-button bg-terracotta px-6 py-3 text-sm font-semibold text-paper hover:bg-terracotta-dark disabled:opacity-60 transition-colors"
          >
            {status === "submitting" ? "Sending..." : buttonLabel}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-oxide">{message}</p>
          )}
          <p className="text-xs text-charcoal/50 text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
