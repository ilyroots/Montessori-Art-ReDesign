import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ShoppingBag,
  Video,
  Award,
  Users,
  Clock,
} from "lucide-react";
import { ArtDirectedHero } from "@/components/sections/ArtDirectedHero";
import { CreativeOfferGrid } from "@/components/sections/CreativeOfferGrid";
import { MethodProcessSection } from "@/components/sections/MethodProcessSection";
import { FunnelCTASection } from "@/components/sections/FunnelCTASection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { LayeredSection } from "@/components/sections/LayeredSection";
import { FloatingAccentShapes } from "@/components/motion/FloatingAccentShapes";
import { HomepageAcademySection } from "@/components/academy/HomepageAcademySection";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { AnimatedGradientMesh } from "@/components/visual/AnimatedGradientMesh";

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
      {/* Hero Manifesto — orchestrated load */}
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
        image="/images/children-painting-classroom.jpg"
        imageAlt="Children painting in a Montessori classroom"
      />
      <SectionTransition variant="gradient-warm" height="lg" />

      {/* Academy Promo — with animated gradient mesh */}
      <HomepageAcademySection />
      <SectionTransition variant="swatches" height="md" />

      {/* Choose Your Path — Audience Cards */}
      <LayeredSection variant="gradient-warm" withWash withShapes>
        <CreativeOfferGrid
          title="Choose Your Path"
          subtitle="Whether you teach in a classroom, guide at home, or lead a school, there is a path for you."
          offers={audienceOffers}
          columns={2}
          className="bg-transparent"
        />
      </LayeredSection>
      <SectionTransition variant="gradient-canvas" height="lg" />

      {/* Featured Offers — Main Offer Grid with offset heights */}
      <LayeredSection variant="canvas" withTexture withWash>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
              <div>
                <p className="section-label mb-2">Everything We Offer</p>
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

          <CreativeOfferGrid offers={mainOffers} columns={3} className="bg-transparent" />
        </div>
      </LayeredSection>
      <SectionTransition variant="soft" height="md" />

      {/* Method — with gradient mesh atmosphere */}
      <LayeredSection variant="canvas" withTexture withWash>
        <AnimatedGradientMesh variant="forest" intensity="subtle" className="opacity-40" />
        <MethodProcessSection
          title="The Nature of Art Method"
          subtitle="A proven approach to bringing visual arts into the prepared environment."
          steps={methodSteps}
          className="bg-transparent"
        />
      </LayeredSection>
      <SectionTransition variant="swatches" height="md" />

      {/* Free Resource Lead Magnet */}
      <LayeredSection variant="ivory" withWash withShapes>
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
          className="bg-transparent"
        />
      </LayeredSection>
      <SectionTransition variant="gradient-ink" height="lg" />

      {/* Certification Feature — dramatic dark section with gradient mesh */}
      <LayeredSection variant="ink" withShapes className="py-20 sm:py-28 text-paper">
        <AnimatedGradientMesh variant="forest" intensity="subtle" className="opacity-30" />
        <AnimatedColorBlobs intensity="subtle" className="opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slideLeft">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] relative rounded-card overflow-hidden shadow-dramatic border border-paper/10 group">
                  <Image
                    src="/images/elementary-painting-classroom.jpg"
                    alt="Elementary children painting in a Montessori classroom"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.1}>
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
                <StaggerContainer className="grid grid-cols-2 gap-4 mb-8" staggerDelay={0.1}>
                  {[
                    { label: "6 Modules", desc: "Comprehensive training", icon: <BookOpen size={18} /> },
                    { label: "Certificate", desc: "Upon completion", icon: <Award size={18} /> },
                    { label: "Community", desc: "Ongoing support", icon: <Users size={18} /> },
                    { label: "Self-Paced", desc: "Learn on your schedule", icon: <Clock size={18} /> },
                  ].map((stat) => (
                    <StaggerItem key={stat.label}>
                      <div className="bg-paper/5 border border-paper/10 rounded-card p-5 backdrop-blur-sm hover:bg-paper/10 transition-colors">
                        <div className="text-bee-yellow mb-2">{stat.icon}</div>
                        <p className="font-serif text-lg font-semibold text-paper">
                          {stat.label}
                        </p>
                        <p className="text-xs text-canvas/60">{stat.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <Link
                  href="/certification"
                  className="inline-flex items-center justify-center rounded-button bg-bee-yellow px-8 py-4 text-base font-semibold text-ink hover:bg-bee-yellow/90 transition-colors shadow-lifted hover:shadow-dramatic"
                >
                  Explore Certification
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </LayeredSection>
      <SectionTransition variant="soft" height="md" />

      {/* Books & Art Supplies — offset stagger cards */}
      <LayeredSection variant="ivory" withWash withShapes className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-label justify-center mb-3">For Your Environment</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Books & Art Supplies
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Authoritative guides and carefully selected materials for your
                Montessori art environment.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger-grid" staggerDelay={0.12}>
            {[
              {
                icon: <BookOpen size={22} />,
                title: "Books",
                desc: "Guides on Montessori art education for your shelf.",
                href: "/bookstore",
                image: "/images/art-shelf-painting.jpg",
              },
              {
                icon: <Video size={22} />,
                title: "Video Training",
                desc: "On-demand trainings for your art environment.",
                href: "/training",
                image: "/images/child-watercolor-painting.jpg",
              },
              {
                icon: <ShoppingBag size={22} />,
                title: "Art Supplies",
                desc: "Materials selected for the Montessori philosophy.",
                href: "/art-supplies",
                image: "/images/clay-forms-display.jpg",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <InteractiveCard glowColor="honey" hoverLift={-6}>
                  <Link
                    href={item.href}
                    className="group block card-editorial overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-canvas flex items-center justify-center mb-4 text-honey border border-linen shadow-sm">
                        {item.icon}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-charcoal/70">{item.desc}</p>
                    </div>
                  </Link>
                </InteractiveCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </LayeredSection>
      <SectionTransition variant="gradient-canvas" height="lg" />

      {/* Blog Preview — asymmetric grid */}
      <LayeredSection variant="canvas" withTexture withWash className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <ScrollReveal>
              <div>
                <p className="section-label mb-2">From the Blog</p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
                  Art Education Insights
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-medium text-honey hover:text-earth-brown transition-colors"
              >
                Read all articles
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          {/* Asymmetric grid: first card larger */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                title: "Easy Drawing Ideas for Young Children",
                category: "Drawing",
                excerpt:
                  "Simple, developmentally appropriate drawing activities that build confidence and fine motor skills in young children.",
                image: "/images/early-childhood-art.jpg",
                span: "md:col-span-7 md:row-span-2",
              },
              {
                title: "Boost Strength with Clay Play",
                category: "Clay",
                excerpt:
                  "Discover how clay modeling strengthens hand muscles, improves coordination, and supports early creative expression.",
                image: "/images/clay-play.jpg",
                span: "md:col-span-5",
              },
              {
                title: "Clay Modeling Play for Toddlers | Why and How It Supports Early Creativity",
                category: "Clay",
                excerpt:
                  "Why toddlers benefit from clay play and how to introduce it in ways that support sensory development and imagination.",
                image: "/images/child-hands-clay.jpg",
                span: "md:col-span-5",
              },
            ].map((post, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                variant={i === 0 ? "clipReveal" : "fadeUp"}
                className={post.span}
              >
                <InteractiveCard glowColor={i === 0 ? "yellow" : "honey"} hoverLift={-4}>
                  <article
                    className={`card-editorial overflow-hidden h-full ${
                      i === 0 ? "img-mask-rounded" : "img-mask-rounded-alt"
                    }`}
                  >
                    <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/10] md:aspect-auto md:h-72" : "aspect-video"}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                        sizes={i === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
                      />
                    </div>
                    <div className="p-6">
                      <p className="section-label mb-2">{post.category}</p>
                      <h3 className={`font-serif font-semibold text-ink mb-2 leading-snug ${i === 0 ? "text-xl md:text-2xl" : "text-lg"}`}>
                        {post.title}
                      </h3>
                      <p className={`text-charcoal/70 ${i === 0 ? "line-clamp-3" : "line-clamp-2 text-sm"}`}>
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </LayeredSection>
      <SectionTransition variant="soft" height="md" />

      {/* Founder Authority */}
      <LayeredSection variant="ivory" withWash className="py-20 sm:py-28">
        <FloatingAccentShapes />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal variant="slideLeft" className="lg:col-span-5">
              <div className="relative paper-shape">
                <div className="aspect-[4/3] relative rounded-card overflow-hidden shadow-dramatic img-mask-rounded-alt">
                  <Image
                    src="/images/spramani-portrait.jpg"
                    alt="Spramani Elaun, founder of Nature of Art®, in her art apron"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div>
                <p className="section-label mb-2">About the Founder</p>
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
      </LayeredSection>
      <SectionTransition variant="swatches" height="md" />

      {/* Newsletter */}
      <LayeredSection variant="canvas" withTexture withWash className="py-20 sm:py-28">
        <AnimatedGradientMesh variant="cool" intensity="subtle" className="opacity-30" />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="blurIn">
            <NewsletterSignup variant="card" source="homepage_footer" />
          </ScrollReveal>
        </div>
      </LayeredSection>
      <SectionTransition variant="gradient-warm" height="lg" />

      {/* Final CTA */}
      <LayeredSection variant="gradient-warm" withWash>
        <FinalCTA
          title="Ready to bring art into your environment?"
          description="Explore the curriculum, download a free resource, or start your certification journey today."
          primaryCta={{ label: "Explore Curriculum", href: "/curriculum" }}
          secondaryCta={{ label: "Get Free Resources", href: "/free-resources" }}
          className="bg-transparent"
        />
      </LayeredSection>
    </>
  );
}
