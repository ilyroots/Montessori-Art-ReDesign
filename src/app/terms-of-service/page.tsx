import { createMetadata } from "@/lib/seo";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of service for Nature of Art.",
});

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms of Service"
      description="Our terms of service are being reviewed by legal counsel and will be published here shortly."
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
