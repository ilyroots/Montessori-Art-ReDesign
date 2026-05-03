import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface RelatedOfferCTAProps {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  offerType: "curriculum" | "training" | "free-resource";
}

export function RelatedOfferCTA({
  title,
  description,
  href,
  ctaLabel = "Explore",
  offerType,
}: RelatedOfferCTAProps) {
  const handleClick = () => {
    if (offerType === "curriculum") trackEvent("curriculum_view", { curriculum: href });
    if (offerType === "training") trackEvent("training_view", { training: href });
    if (offerType === "free-resource") trackEvent("free_resource_view", { resource: href });
  };

  return (
    <div className="my-10 bg-canvas border border-linen rounded-card p-6 sm:p-8">
      <p className="text-xs uppercase tracking-wider text-terracotta font-semibold mb-2">
        {offerType === "free-resource" ? "Free Resource" : "Related Offer"}
      </p>
      <h3 className="font-serif text-xl font-semibold text-espresso mb-2">{title}</h3>
      <p className="text-sm text-charcoal/70 mb-4">{description}</p>
      <Link
        href={href}
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-button bg-terracotta px-5 py-2.5 text-sm font-semibold text-paper hover:bg-terracotta-dark transition-colors"
      >
        {ctaLabel}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
