import { createMetadata } from "@/lib/seo";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Nature of Art.",
});

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact"
      description="Our contact form is being polished. In the meantime, reach out through the newsletter or connect with us on social media."
      backHref="/newsletter"
      backLabel="Join the Newsletter"
    />
  );
}
