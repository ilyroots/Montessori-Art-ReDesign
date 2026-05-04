import { createMetadata } from "@/lib/seo";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";

export const metadata = createMetadata({
  title: "Clay Modeling — Montessori Art Curriculum",
  description: "Sensory-rich clay exploration that strengthens fine motor skills and three-dimensional thinking.",
});

export default function ClayCurriculumPage() {
  return (
    <PlaceholderPage
      title="Clay Modeling Curriculum"
      description="The full clay modeling curriculum page is coming soon. In the meantime, explore the Painting Curriculum or start free lessons in the Academy."
      backHref="/curriculum"
      backLabel="Back to Curriculum"
    />
  );
}
