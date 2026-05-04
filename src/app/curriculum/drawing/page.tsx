import { createMetadata } from "@/lib/seo";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";

export const metadata = createMetadata({
  title: "Drawing — Montessori Art Curriculum",
  description: "From early mark-making to representational drawing — a developmental sequence for every stage.",
});

export default function DrawingCurriculumPage() {
  return (
    <PlaceholderPage
      title="Drawing Curriculum"
      description="The full drawing curriculum page is coming soon. In the meantime, explore the Painting Curriculum or start free lessons in the Academy."
      backHref="/curriculum"
      backLabel="Back to Curriculum"
    />
  );
}
