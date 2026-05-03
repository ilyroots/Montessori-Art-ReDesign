import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, ShoppingBag, Gift, Video } from "lucide-react";
import { ArtDirectedHero } from "@/components/sections/ArtDirectedHero";
import { CreativeOfferGrid } from "@/components/sections/CreativeOfferGrid";
import { MethodProcessSection } from "@/components/sections/MethodProcessSection";
import { FunnelCTASection } from "@/components/sections/FunnelCTASection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

// TODO: Connect newsletter form to Keap newsletter form after Keap inventory is complete.
// TODO: Replace fallback Leadpages URLs with native checkout or Keap checkout URLs.
// TODO: Track buy_button_click through analytics helper once GA4/Meta/Keap tracking IDs are configured.
// TODO: Replace Volusion external store link after ecommerce migration decision.

const methodSteps = [
  {
    number: "01",
    title: "Environment",
    description:
      "Prepare the art space with intention. Every material has a place, every shelf invites exploration.",
  },
  {
    number: "02",
    title: "Material",
    description:
      "Select quality, age-appropriate art materials that children can use independently and safely.",
  },
  {
    number: "03",
    title: "Invitation",
    description:
      "Present activities with clarity and warmth. The invitation sparks curiosity without forcing participation.",
  },
  {
    number: "04",
    title: "Process",
    description:
      "Honor the child's creative process. There is no right or wrong way — only discovery.",
  },
  {
    number: "05",
    title: "Language",
    description:
      "Use positive, descriptive art talk that builds vocabulary and confidence without judgment.",
  },
  {
    number: "06",
    title: "Development",
    description:
      "Observe and document growth. Understand the phases of art development to guide next steps.",
  },
];

const audienceOffers = [
  {
    number: "01",
    category: "For Guides",
    title: "Montessori Teachers",
    description:
      "Bring sequenced visual arts into your prepared environment with confidence and clarity.",
    href: "/curriculum",
  },
  {
    number: "02",
    category: "For Families",
    title: "Homeschool Parents",
    description:
      "Give your child a rich art education at home with structure, freedom, and wonder.",
    href: "/curriculum",
  },
  {
    number: "03",
    category: "For Specialists",
    title: "Art Educators",
    description:
      "Deepen your practice with Montessori-aligned pedagogy and developmental understanding.",
    href: "/training",
  },
  {
    number: "04",
    category: "For Leaders",
    title: "School & Program Leaders",
    description:
      "Equip your staff with a proven art curriculum and professional certification pathway.",
    href: "/certification",
  },
];

const mainOffers = [
  {
    number: "01",
    category: "Curriculum",
    title: "Painting, Drawing, Clay & Color",
    description:
      "Complete lesson sequences for painting, drawing, clay, color theory, and more.",
    href: "/curriculum",
    ctaLabel: "Explore Curriculum",
  },
  {
    number: "02",
    category: "Training",
    title: "Video Trainings",
    description:
      "On-demand trainings to help you set up your art environment and guide children.",
    href: "/training",
    ctaLabel: "View Trainings",
  },
  {
    number: "03",
    category: "Certification",
    title: "Art Teaching Blueprint",
    description:
      "Earn your professional certification and teach with confidence, sequence, and developmental understanding.",
    href: "/certification",
    ctaLabel: "Get Certified",
  },
  {
    number: "04",
    category: "Books",
    title: "Authoritative Guides",
    description:
      "Essential reading on Montessori art education for your classroom or home shelf.",
    href: "/bookstore",
    ctaLabel: "Browse Books",
  },
  {
    number: "05",
    category: "Supplies",
    title: "Art Materials",
    description:
      "Carefully selected materials that match the curriculum and Montessori philosophy.",
    href: "/art-supplies",
    ctaLabel: "Shop Supplies",
  },
  {
    number: "06",
    category: "Free",
    title: "Free Resources",
    description:
      "Start with free video lessons, checklists, and guides to transform your art practice.",
    href: "/free-resources",
    ctaLabel: "Get Free Resources",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Manifesto */}
      <ArtDirectedHero
        overline="The Modern Montessori Art Atelier"
        headline={
          <>
            Teach Children Visual Arts With{" "}
            <span className="text-honey">Structure, Freedom,</span> and{" "}
            <span className="italic">Wonder.</span>
          </>
        }
        subheadline="Nature of Art® helps Montessori guides, homeschool families, and educators bring painting, drawing, clay, color theory, and process-based art into the prepared environment."
        primaryCta={{ label: "Explore Curriculum", href: "/curriculum" }}
        secondaryCta={{ label: "Get Free Art Resources", href: "/free-resources" }}
        trustBadges={["Curriculum", "Certification", "Free Resources"]}
        annotation="Every child is an artist."
        annotationAuthor="Pablo Picasso"
      />

      {/* Choose Your Path — Audience Cards */}
      <CreativeOfferGrid
        title="Choose Your Path"
        subtitle="Whether you teach in a classroom, guide at home, or lead a school, there is a path for you."
        offers={audienceOffers}
        columns={2}
      />

      {/* Featured Offers — Main Offer Grid */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-2">
                  Everything We Offer
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
                  Explore the Atelier
                </h2>
              </div>
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-1 text-sm font-medium text-honey hover:text-earth-brown transition-colors"
              >
                View all offers
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <CreativeOfferGrid offers={mainOffers} columns={3} />
        </div>
      </section>

      {/* Method */}
      <MethodProcessSection
        title="The Nature of Art Method"
        subtitle="A proven approach to bringing visual arts into the prepared environment."
        steps={methodSteps}
      />

      {/* Free Resource Lead Magnet */}
      <FunnelCTASection
        overline="Free Resource"
        headline="Start With the Free Painting Checklist"
        subheadline="Not sure where to begin? Download the free painting checklist and learn exactly what materials to prepare, how to set up your art shelf, and the first three lessons to present."
        benefits={[
          "Material list with Montessori recommendations",
          "Shelf setup diagram",
          "First 3 lesson sequence",
          "Observation checklist",
        ]}
        primaryCta={{ label: "Download Free Checklist", href: "/free-resources/painting-checklist" }}
        trustText="No spam. Unsubscribe anytime."
      />

      {/* Certification Feature */}
      <section className="py-20 sm:py-28 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] relative rounded-card bg-paper/5 border border-paper/10 flex items-center justify-center">
                  <div className="text-center text-paper/25">
                    <GraduationCap size={64} className="mx-auto mb-4" />
                    <p className="text-sm font-medium">Certification Preview</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="order-1 lg:order-2">
                <p className="text-xs uppercase tracking-[0.15em] text-bee-yellow font-semibold mb-3">
                  Professional Certification
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 tracking-[-0.02em]">
                  Become a Certified Art Teaching Blueprint Educator
                </h2>
                <p className="text-canvas/80 leading-relaxed mb-8">
                  Professional development for educators who want to teach children
                  visual arts with confidence, sequence, and developmental
                  understanding. Join a growing community of certified Montessori art
                  educators.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "6 Modules", desc: "Comprehensive training" },
                    { label: "Certificate", desc: "Upon completion" },
                    { label: "Community", desc: "Ongoing support" },
                    { label: "Self-Paced", desc: "Learn on your schedule" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-paper/5 border border-paper/10 rounded-card-sm p-4"
                    >
                      <p className="font-serif text-lg font-semibold text-paper">
                        {stat.label}
                      </p>
                      <p className="text-xs text-canvas/60">{stat.desc}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/certification"
                  className="inline-flex items-center justify-center rounded-button bg-ink px-8 py-4 text-base font-semibold text-paper hover:bg-ink-dark transition-colors"
                >
                  Explore Certification
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Books & Art Supplies */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Books & Art Supplies
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Authoritative guides and carefully selected materials for your
                Montessori art environment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen size={22} />,
                title: "Books",
                desc: "Guides on Montessori art education for your shelf.",
                href: "/bookstore",
              },
              {
                icon: <Video size={22} />,
                title: "Video Training",
                desc: "On-demand trainings for your art environment.",
                href: "/training",
              },
              {
                icon: <ShoppingBag size={22} />,
                title: "Art Supplies",
                desc: "Materials selected for the Montessori philosophy.",
                href: "/art-supplies",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <Link
                  href={item.href}
                  className="group block bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow duration-200 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-canvas flex items-center justify-center mb-4 text-honey">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/70">{item.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <ScrollReveal>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-2">
                  From the Blog
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
                  Art Education Insights
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-medium text-honey hover:text-honey-dark transition-colors"
              >
                Read all articles
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "How to Set Up a Montessori Art Shelf That Children Actually Use",
                category: "Art Shelf",
                excerpt:
                  "The art shelf is the heart of the Montessori art environment. Here is how to arrange it for independence, beauty, and daily use.",
              },
              {
                title: "The 3 Phases of Art Development in Early Childhood",
                category: "Process Art",
                excerpt:
                  "Understanding scribbling, pre-schematic, and schematic stages helps you meet children where they are.",
              },
              {
                title: "Why Process-Based Art Matters More Than Perfect Products",
                category: "Montessori Environment",
                excerpt:
                  "When we prioritize the process, children develop creativity, resilience, and a genuine love for making art.",
              },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <article className="bg-paper border border-linen rounded-card overflow-hidden hover:shadow-card-hover transition-shadow duration-200">
                  <div className="aspect-video bg-canvas flex items-center justify-center">
                    <div className="text-center text-charcoal/25">
                      <BookOpen size={32} className="mx-auto mb-2" />
                      <p className="text-xs">Blog Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wider text-honey font-semibold mb-2">
                      {post.category}
                    </p>
                    <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Authority */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] max-w-lg mx-auto relative rounded-card overflow-hidden shadow-card">
                <Image
                  src="/images/spramani-elaun.png"
                  alt="Spramani Elaun, founder of Nature of Art®, surrounded by Montessori art materials and her published books"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-2">
                  About the Founder
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-5">
                  Meet Spramani Elaun
                </h2>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>
                    Spramani Elaun is a Montessori art educator, author, and founder
                    of Nature of Art®. For over two decades, she has helped teachers
                    and parents around the world bring meaningful visual arts into the
                    lives of children.
                  </p>
                  <p>
                    Her approach combines deep respect for the Montessori method with
                    a passion for process-based art. The result is a pedagogy that
                    honors both structure and creative freedom.
                  </p>
                  <p>
                    She has trained thousands of educators through her certification
                    programs, written curriculum used in classrooms across six
                    continents, and remains dedicated to one simple belief: every
                    child deserves access to quality art education.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-sm font-medium text-honey hover:text-honey-dark transition-colors"
                  >
                    Read the full story
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NewsletterSignup variant="card" source="homepage_footer" />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Ready to bring art into your environment?"
        description="Explore the curriculum, download a free resource, or start your certification journey today."
        primaryCta={{ label: "Explore Curriculum", href: "/curriculum" }}
        secondaryCta={{ label: "Get Free Resources", href: "/free-resources" }}
      />
    </>
  );
}
