import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}

export function PlaceholderPage({
  title,
  description = "This page is under construction. Check back soon for updates.",
  backHref = "/",
  backLabel = "Back to Home",
}: PlaceholderPageProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-ivory relative overflow-hidden flex items-center justify-center">
      {/* Subtle background textures */}
      <div className="absolute inset-0 honeycomb-accent opacity-20 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-bee-yellow/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[12%] w-40 h-40 rounded-full bg-kids-blue/10 blur-2xl pointer-events-none" />
      <div className="absolute top-[50%] right-[25%] w-24 h-24 rounded-full bg-creative-pink/8 blur-2xl pointer-events-none" />

      <div className="relative mx-auto max-w-lg px-4 sm:px-6 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-2xl bg-honey/10 border border-honey/20 flex items-center justify-center mx-auto">
            <Construction size={28} className="text-honey" />
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-4">
          {title}
        </h1>

        <p className="text-charcoal/70 text-lg leading-relaxed mb-8 max-w-md mx-auto">
          {description}
        </p>

        <Link
          href={backHref}
          className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
        >
          <ArrowLeft size={16} />
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
