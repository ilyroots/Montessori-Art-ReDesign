import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about Spramani Elaun and the Nature of Art mission.",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-ink mb-4">About</h1>
      <p className="text-charcoal/70">Full about page coming soon.</p>
    </div>
  );
}
