import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LayeredSection } from "@/components/sections/LayeredSection";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { BookOpen, Palette, Brush, Sparkles, ArrowRight } from "lucide-react";

export const metadata = createMetadata({
  title: "Newsletter — Nature of Art®",
  description:
    "Join the Nature of Art® newsletter for art education notes, curriculum updates, free resources, and guidance for bringing visual arts into children's learning environments.",
});

const newsletterBenefits = [
  {
    icon: <Brush size={20} />,
    title: "Art Education Ideas",
    description: "Practical guidance for teaching visual arts in Montessori and homeschool settings.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Curriculum Updates",
    description: "New releases, book additions, and curriculum enhancements.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Free Resource Announcements",
    description: "Video lessons, checklists, and guides as they become available.",
  },
  {
    icon: <Palette size={20} />,
    title: "Book & Training Updates",
    description: "Upcoming courses, certifications, and professional development opportunities.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <LayeredSection
        variant="swatches"
        withWash
        withShapes
        className="py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal variant="fadeUp">
            <span className="section-label mb-4 justify-center">Stay Connected</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-[-0.02em] mb-5">
              Join the Nature of Art® Newsletter
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Receive art education notes, curriculum updates, free resources,
              and guidance for bringing visual arts into children&apos;s learning environments.
            </p>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="md" />

      {/* Benefits + Form */}
      <LayeredSection variant="paper" withTexture className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Benefits */}
            <ScrollReveal variant="slideLeft">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  What You May Receive
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {newsletterBenefits.map((item) => (
                    <div
                      key={item.title}
                      className="bg-paper border border-linen rounded-card p-5"
                    >
                      <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-honey mb-3">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-ink text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-charcoal/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-canvas/50 border border-linen rounded-card p-5">
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    <strong className="text-ink">Privacy note:</strong> We use your email to send Nature of Art® updates only.
                    You can unsubscribe at any time. We do not share your information.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal variant="slideRight" delay={0.1}>
              <div className="bg-paper border border-linen rounded-card p-6 sm:p-10">
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  Subscribe
                </h3>
                <p className="text-sm text-charcoal/70 mb-6">
                  Enter your details below to join the newsletter.
                </p>
                <NewsletterSignup variant="inline" source="newsletter_page" showNameField />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="sm" />

      {/* Related */}
      <LayeredSection variant="ivory" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-3">
                Explore More
              </h2>
              <p className="text-charcoal/70">
                Discover curriculum, books, and resources while you wait for the next newsletter.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Art Books", href: "/bookstore" },
              { label: "Art Supplies", href: "/art-supplies" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-button bg-paper border border-linen px-5 py-2.5 text-sm text-charcoal/80 hover:border-honey/40 hover:text-ink transition-colors"
              >
                {link.label}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </LayeredSection>
    </>
  );
}
