import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Palette, GraduationCap, ShoppingBag, Gift, Video } from "lucide-react";
import { audienceCards, offerCards } from "@/config/offers";
import { products } from "@/config/products";
import { ProductCard } from "@/components/commerce/ProductCard";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { MethodSection } from "@/components/sections/MethodSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

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

export default function HomePage() {
  const featuredProduct = products[0];
  const curriculumProducts = products.filter((p) => p.category === "curriculum");

  return (
    <>
      {/* Hero Manifesto */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-4">
                The Modern Montessori Art Atelier
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-espresso leading-[1.05] mb-6">
                Teach Children Visual Arts With{" "}
                <span className="text-terracotta">Structure, Freedom,</span> and{" "}
                <span className="italic">Wonder.</span>
              </h1>
              <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-xl mb-8">
                Nature of Art® helps Montessori guides, homeschool families, and
                educators bring painting, drawing, clay, color theory, and
                process-based art into the prepared environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/curriculum"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-terracotta px-8 py-4 text-base font-semibold text-paper hover:bg-terracotta-dark transition-colors"
                >
                  Explore Curriculum
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/free-resources"
                  className="inline-flex items-center justify-center rounded-button border border-espresso px-8 py-4 text-base font-semibold text-espresso hover:bg-espresso hover:text-paper transition-colors"
                >
                  Get Free Art Resources
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-card bg-canvas border border-linen overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                  <div className="text-center">
                    <Palette size={64} className="mx-auto mb-4" />
                    <p className="text-sm font-medium">Hero Image Placeholder</p>
                    <p className="text-xs mt-1">Children&apos;s hands painting with watercolors</p>
                  </div>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-paper border border-linen rounded-card p-4 shadow-card max-w-[200px]">
                <p className="font-hand text-lg text-terracotta leading-snug">
                  &ldquo;Every child is an artist.&rdquo;
                </p>
                <p className="text-xs text-charcoal/50 mt-1">— Pablo Picasso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-4">
              Choose Your Path
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Whether you teach in a classroom, guide at home, or lead a school,
              there is a path for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceCards.map((card) => (
              <div
                key={card.id}
                className="group bg-paper border border-linen rounded-card p-6 text-center hover:shadow-card-hover transition-shadow duration-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-canvas flex items-center justify-center">
                  <GraduationCap size={28} className="text-terracotta" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-espresso mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Curriculum */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-2">
                Curriculum
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso">
                Featured Curriculum
              </h2>
            </div>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-1 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
            >
              View all curriculum
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <MethodSection steps={methodSteps} />

      {/* Free Resource Lead Magnet */}
      <section className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-2">
                Free Resource
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-4">
                Start With the Free Painting Checklist
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Not sure where to begin? Download the free painting checklist and
                learn exactly what materials to prepare, how to set up your art
                shelf, and the first three lessons to present.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Material list with Montessori recommendations",
                  "Shelf setup diagram",
                  "First 3 lesson sequence",
                  "Observation checklist",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
                    <Gift size={16} className="text-terracotta shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/free-resources/painting-checklist"
                className="inline-flex items-center justify-center rounded-button bg-terracotta px-8 py-4 text-base font-semibold text-paper hover:bg-terracotta-dark transition-colors"
              >
                Download Free Checklist
              </Link>
            </div>
            <div className="bg-paper border border-linen rounded-card p-8 sm:p-12">
              <div className="aspect-square relative rounded-card-sm bg-canvas flex items-center justify-center">
                <div className="text-center text-charcoal/30">
                  <BookOpen size={48} className="mx-auto mb-3" />
                  <p className="text-sm font-medium">Checklist Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Feature */}
      <section className="py-16 sm:py-24 bg-espresso text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] relative rounded-card bg-paper/5 border border-paper/10 flex items-center justify-center">
                <div className="text-center text-paper/30">
                  <GraduationCap size={64} className="mx-auto mb-4" />
                  <p className="text-sm font-medium">Certification Preview</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-widest text-ochre font-semibold mb-2">
                Professional Certification
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">
                Become a Certified Art Teaching Blueprint Educator
              </h2>
              <p className="text-canvas/80 leading-relaxed mb-6">
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
                  <div key={stat.label} className="bg-paper/5 border border-paper/10 rounded-card-sm p-4">
                    <p className="font-serif text-lg font-semibold text-paper">
                      {stat.label}
                    </p>
                    <p className="text-xs text-canvas/60">{stat.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/certification"
                className="inline-flex items-center justify-center rounded-button bg-terracotta px-8 py-4 text-base font-semibold text-paper hover:bg-terracotta-dark transition-colors"
              >
                Explore Certification
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Books & Art Supplies */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-4">
              Books & Art Supplies
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Authoritative guides and carefully selected materials for your
              Montessori art environment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerCards.slice(1, 4).map((offer) => (
              <Link
                key={offer.id}
                href={offer.href}
                className="group bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center mb-4">
                  {offer.id === "books" && <BookOpen size={22} className="text-terracotta" />}
                  {offer.id === "video-training" && <Video size={22} className="text-terracotta" />}
                  {offer.id === "art-supplies" && <ShoppingBag size={22} className="text-terracotta" />}
                </div>
                <h3 className="font-serif text-xl font-semibold text-espresso mb-2 group-hover:text-terracotta transition-colors">
                  {offer.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {offer.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-2">
                From the Blog
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso">
                Art Education Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
            >
              Read all articles
              <ArrowRight size={16} />
            </Link>
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
              <article
                key={i}
                className="bg-paper border border-linen rounded-card overflow-hidden hover:shadow-card-hover transition-shadow"
              >
                <div className="aspect-video bg-canvas flex items-center justify-center">
                  <div className="text-center text-charcoal/30">
                    <BookOpen size={32} className="mx-auto mb-2" />
                    <p className="text-xs">Blog Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-terracotta font-semibold mb-2">
                    {post.category}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-espresso mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Authority */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] max-w-md mx-auto relative rounded-card bg-canvas border border-linen overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                  <div className="text-center">
                    <GraduationCap size={64} className="mx-auto mb-4" />
                    <p className="text-sm font-medium">Spramani Elaun Portrait</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-2">
                About the Founder
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-4">
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
                  className="inline-flex items-center gap-1 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
                >
                  Read the full story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="card" source="homepage_footer" />
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
