"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { submitToKeap } from "@/lib/keap";
import { EMAIL_CONFIG } from "@/config/integrations";

interface NewsletterSignupProps {
  variant?: "inline" | "card" | "footer";
  source?: string;
  showNameField?: boolean;
}

export function NewsletterSignup({
  variant = "inline",
  source = "newsletter_page",
  showNameField = false,
}: NewsletterSignupProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    trackEvent("newsletter_submit", { email, source });

    const result = await submitToKeap("newsletter", { email, firstName });

    if (result.success) {
      setStatus("success");
      setMessage(EMAIL_CONFIG.newsletter.thankYouMessage);
      setEmail("");
      setFirstName("");
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  };

  const isCard = variant === "card";
  const isFooter = variant === "footer";

  return (
    <div className={isCard ? "bg-canvas rounded-card p-6 sm:p-8" : ""}>
      {!isFooter && (
        <div className="mb-4">
          <h3 className="font-serif text-lg font-semibold text-ink">
            Get art inspiration in your inbox
          </h3>
          <p className="mt-1 text-sm text-charcoal/70">
            Free lessons, setup tips, and Montessori art guidance.
          </p>
        </div>
      )}

      {status === "success" ? (
        <div className="rounded-button bg-sage/10 border border-sage/30 px-4 py-3 text-sm text-sage">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {showNameField && (
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-button border border-linen bg-paper px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
            />
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-button border border-linen bg-paper px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-ink-dark disabled:opacity-60 transition-colors"
            >
              {status === "submitting" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-sm text-red-oxide">{message}</p>
      )}

      {isFooter && (
        <p className="mt-3 text-xs text-canvas/50">
          Free lessons, setup tips, and Montessori art guidance. No spam.
        </p>
      )}
    </div>
  );
}
