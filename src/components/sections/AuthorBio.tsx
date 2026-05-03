import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AuthorBioProps {
  name?: string;
  title?: string;
  bio?: string;
  href?: string;
}

export function AuthorBio({
  name = "Spramani Elaun",
  title = "Founder, Nature of Art",
  bio = "Montessori art educator, author, and founder of Nature of Art®. For over two decades, she has helped teachers and parents bring meaningful visual arts into the lives of children.",
  href = "/about",
}: AuthorBioProps) {
  return (
    <div className="bg-canvas border border-linen rounded-card p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center shrink-0">
          <span className="font-serif text-xl font-bold text-terracotta">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-espresso">{name}</h4>
          <p className="text-xs uppercase tracking-wider text-charcoal/50 mb-2">{title}</p>
          <p className="text-sm text-charcoal/70 leading-relaxed mb-3">{bio}</p>
          {href && (
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
            >
              Read more
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
