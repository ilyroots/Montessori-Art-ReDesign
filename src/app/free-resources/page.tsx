import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Free Resources",
  description: "Free video lessons, checklists, and guides for Montessori art education.",
});

export default function FreeResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-ink mb-4">Free Resources</h1>
      <p className="text-charcoal/70">Full free resources hub coming soon.</p>
    </div>
  );
}
