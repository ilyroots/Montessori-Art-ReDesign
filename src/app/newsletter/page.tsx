import { createMetadata } from "@/lib/seo";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";

export const metadata = createMetadata({
  title: "Newsletter",
  description: "Subscribe for art inspiration, lessons, and Montessori guidance.",
});

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl font-semibold text-ink mb-4">Newsletter</h1>
        <p className="text-charcoal/70">Art inspiration delivered to your inbox.</p>
      </div>
      <NewsletterSignup variant="card" />
    </div>
  );
}
