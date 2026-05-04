"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { submitToKeap } from "@/lib/keap";
import { ExternalLink } from "lucide-react";

type IntegrationStatus =
  | "connected"
  | "fallback-external"
  | "pending-backend-verification"
  | "disabled";

interface LeadMagnetFormProps {
  resourceId: string;
  resourceName: string;
  buttonLabel?: string;
  successMessage?: string;
  /** Controls form behavior. fallback-external opens legacy URL instead of submitting. */
  integrationStatus?: IntegrationStatus;
  /** Required when integrationStatus is fallback-external */
  fallbackUrl?: string;
}

export function LeadMagnetForm({
  resourceId,
  resourceName,
  buttonLabel = "Send It To Me",
  successMessage = "Check your email! Your free resource is on its way.",
  integrationStatus = "connected",
  fallbackUrl,
}: LeadMagnetFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isFallbackExternal = integrationStatus === "fallback-external";
  const isDisabled = integrationStatus === "disabled";
  const isPending = integrationStatus === "pending-backend-verification";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Fallback-external: open legacy URL in new tab, do not fake submission
    if (isFallbackExternal && fallbackUrl) {
      trackEvent("lead_magnet_fallback_click", { resource: resourceId, url: fallbackUrl });
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // Disabled or pending: do nothing
    if (isDisabled || isPending) return;

    // Connected: submit to Keap
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

  // Success state (only shown after real Keap success)
  if (status === "success" && !isFallbackExternal) {
    return (
      <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
        <div className="text-center py-8">
          <div className="mx-auto w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-serif text-xl font-semibold text-ink mb-2">You&apos;re all set!</h4>
          <p className="text-sm text-charcoal/70">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor={`lead-magnet-name-${resourceId}`} className="block text-sm font-medium text-ink mb-1">
            First name
          </label>
          <input
            id={`lead-magnet-name-${resourceId}`}
            type="text"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={isDisabled}
            className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor={`lead-magnet-email-${resourceId}`} className="block text-sm font-medium text-ink mb-1">
            Email address
          </label>
          <input
            id={`lead-magnet-email-${resourceId}`}
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisabled}
            className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting" || isDisabled || isPending}
          className="w-full rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal disabled:opacity-60 transition-colors inline-flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            "Sending..."
          ) : isFallbackExternal ? (
            <>
              {buttonLabel}
              <ExternalLink size={14} />
            </>
          ) : isPending ? (
            "Coming Soon"
          ) : isDisabled ? (
            "Unavailable"
          ) : (
            buttonLabel
          )}
        </button>

        {isFallbackExternal && fallbackUrl && (
          <p className="text-xs text-charcoal/50 text-center">
            Opens the current sign-up page in a new tab.
          </p>
        )}

        {isPending && (
          <p className="text-xs text-charcoal/50 text-center">
            Form integration is being verified. Check back soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-oxide">{message}</p>
        )}

        {!isFallbackExternal && !isPending && !isDisabled && (
          <p className="text-xs text-charcoal/50 text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        )}
      </form>
    </div>
  );
}
