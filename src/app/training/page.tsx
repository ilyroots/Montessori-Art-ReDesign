import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Training",
  description: "Video trainings for Montessori art education.",
});

export default function TrainingIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-espresso mb-4">Training</h1>
      <p className="text-charcoal/70">Full training index coming soon.</p>
    </div>
  );
}
