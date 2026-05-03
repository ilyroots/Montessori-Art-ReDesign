import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Nature of Art.",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-espresso mb-4">Contact</h1>
      <p className="text-charcoal/70">Contact form coming soon.</p>
    </div>
  );
}
