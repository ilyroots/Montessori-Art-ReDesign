import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Offer {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface OfferGridProps {
  offers: Offer[];
  title?: string;
  subtitle?: string;
}

export function OfferGrid({ offers, title, subtitle }: OfferGridProps) {
  return (
    <section className="py-16 sm:py-24 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-charcoal/70 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              href={offer.href}
              className="group bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow"
            >
              {offer.icon && (
                <div className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center mb-4 text-honey">
                  {offer.icon}
                </div>
              )}
              <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                {offer.title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                {offer.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-honey">
                Learn more
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
