import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Curriculum",
  description: "Montessori art curriculum for painting, drawing, clay, color theory, and more.",
});

export default function CurriculumIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-ink mb-4">Curriculum</h1>
      <p className="text-charcoal/70">Full curriculum index coming soon.</p>
    </div>
  );
}
