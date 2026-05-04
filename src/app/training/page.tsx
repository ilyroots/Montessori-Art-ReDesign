import { createMetadata } from "@/lib/seo";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";

export const metadata = createMetadata({
  title: "Training",
  description: "Video trainings for Montessori art education.",
});

export default function TrainingIndexPage() {
  return (
    <PlaceholderPage
      title="Training"
      description="Video trainings for Montessori art education are coming soon. Check back for on-demand courses, webinars, and professional development resources."
      backHref="/academy"
      backLabel="Explore the Academy"
    />
  );
}
