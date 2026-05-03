import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Bookstore",
  description: "Books on Montessori art education by Spramani Elaun.",
});

export default function BookstorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-espresso mb-4">Bookstore</h1>
      <p className="text-charcoal/70">Full bookstore coming soon.</p>
    </div>
  );
}
