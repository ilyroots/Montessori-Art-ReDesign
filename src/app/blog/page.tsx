import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "Art education insights for Montessori guides, homeschool parents, and educators.",
});

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-ink mb-4">Blog</h1>
      <p className="text-charcoal/70">Full blog coming soon.</p>
    </div>
  );
}
