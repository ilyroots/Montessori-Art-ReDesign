import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of service for Nature of Art.",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-serif text-4xl font-semibold text-ink mb-8">Terms of Service</h1>
      <p className="text-charcoal/70">Terms of service content coming soon.</p>
    </div>
  );
}
