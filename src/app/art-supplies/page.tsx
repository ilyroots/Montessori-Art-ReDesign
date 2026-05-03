import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Art Supplies",
  description: "Carefully selected art supplies for the Montessori environment.",
});

export default function ArtSuppliesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-ink mb-4">Art Supplies</h1>
      <p className="text-charcoal/70">Full art supplies catalog coming soon.</p>
    </div>
  );
}
