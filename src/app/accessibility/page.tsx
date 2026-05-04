import { createMetadata } from "@/lib/seo";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";

export const metadata = createMetadata({
  title: "Accessibility",
  description: "Accessibility statement for Nature of Art.",
});

export default function AccessibilityPage() {
  return (
    <PlaceholderPage
      title="Accessibility"
      description="Our accessibility statement and compliance details are being finalized. We are committed to making Nature of Art usable for everyone."
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
