import { createMetadata } from "@/lib/seo";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";

export const metadata = createMetadata({
  title: "Blog",
  description: "Art education insights for Montessori guides, homeschool parents, and educators.",
});

export default function BlogIndexPage() {
  return (
    <PlaceholderPage
      title="Blog"
      description="Art education insights, lesson ideas, and Montessori guidance are on the way. Subscribe to the newsletter to be the first to know when new articles drop."
      backHref="/newsletter"
      backLabel="Join the Newsletter"
    />
  );
}
