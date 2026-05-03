"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { submitToKeap } from "@/lib/keap";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    trackEvent("contact_submit", { subject: formData.subject });

    const result = await submitToKeap("contact", {
      email: formData.email,
      firstName: formData.name,
      message: formData.message,
    });

    if (result.success) {
      setStatus("success");
      setMessage("Thank you for reaching out. We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
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
          <h4 className="font-serif text-xl font-semibold text-ink mb-2">Message sent!</h4>
          <p className="text-sm text-charcoal/70">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-ink mb-1">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-ink mb-1">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-ink mb-1">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-ink mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-button border border-linen bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-honey focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-ink-dark disabled:opacity-60 transition-colors"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-oxide">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
