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
  Play,
  Palette,
  GraduationCap,
} from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { ScienceArtMethodSection } from "@/components/sections/ScienceArtMethodSection";
import { ScrollStepProgress } from "@/components/sections/ScrollStepProgress";
import { GlobalReachSection } from "@/components/sections/GlobalReachSection";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { FloatingAccentShapes } from "@/components/motion/FloatingAccentShapes";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { AnimatedGradientMesh } from "@/components/visual/AnimatedGradientMesh";
import { HorizontalShowcase, ShowcaseCard } from "@/components/visual/HorizontalShowcase";
import { TrackedLink } from "@/components/navigation/TrackedLink";

const methodSteps = [
  {
    number: "01",
    title: "Environment",
    description: "Prepare the art space with intention. Every material has a place, every shelf invites exploration.",
  },
  {
    number: "02",
    title: "Material",
    description: "Select quality, age-appropriate art materials that children can use independently and safely.",
  },
  {
    number: "03",
    title: "Invitation",
    description: "Present activities with clarity and warmth. The invitation sparks curiosity without forcing participation.",
  },
  {
    number: "04",
    title: "Process",
    description: "Honor the child's creative process. There is no right or wrong way — only discovery.",
  },
  {
    number: "05",
    title: "Language",
    description: "Use positive, descriptive art talk that builds vocabulary and confidence without judgment.",
  },
  {
    number: "06",
    title: "Development",
    description: "Observe and document growth. Understand the phases of art development to guide next steps.",
  },
];

const explorePaths = [
  {
    title: "Painting Curriculum",
    description: "57 sequenced painting studio experiences",
    icon: <Palette size={20} />,
    href: "/curriculum/painting",
    image: "/images/child-watercolor-painting.jpg",
    tag: "Curriculum",
    tagColor: "bg-kids-blue/10 text-kids-blue",
  },
  {
    title: "Art Books",
    description: "Guides and curriculum for your shelf",
    icon: <BookOpen size={20} />,
    href: "/bookstore",
    image: "/images/kids-painting-book.jpg",
    tag: "Books",
    tagColor: "bg-sage/20 text-earth-brown",
  },
  {
    title: "Art Certification",
    description: "Professional certification for educators",
    icon: <GraduationCap size={20} />,
    href: "/certification",
    image: "/images/children-painting-classroom.jpg",
    tag: "Certification",
    tagColor: "bg-bee-yellow/15 text-honey",
  },
  {
    title: "Art Supplies",
    description: "Materials for the prepared environment",
    icon: <ShoppingBag size={20} />,
    href: "/art-supplies",
    image: "/images/art-shelf-painting.jpg",
    tag: "Store",
    tagColor: "bg-creative-pink/10 text-creative-pink",
  },
];

const curriculumAreas = [
  {
    title: "Painting",
    lessons: "57 studios",
    description: "Watercolor, tempera, and acrylic sequences",
    image: "/images/child-watercolor-painting.jpg",
    href: "/curriculum/painting",
    color: "from-honey/20 to-bee-yellow/10",
  },
  {
    title: "Drawing",
    lessons: "16–47 studios",
    description: "Developmental drawing from scribble to form",
    image: "/images/drawing-early-childhood-curriculum.jpg",
    href: "/curriculum/drawing",
    color: "from-kids-blue/15 to-sage/10",
  },
  {
    title: "Color Theory",
    lessons: "37 studios",
    description: "Primary, secondary, and complementary exploration",
    image: "/images/color-theory-curriculum.jpg",
    href: "/curriculum/color-theory",
    color: "from-creative-pink/15 to-bee-yellow/10",
  },
  {
    title: "Clay Modeling",
    lessons: "29 studios",
    description: "Hand-building, sculpture, and clay play",
    image: "/images/clay-forms-display.jpg",
    href: "/curriculum/clay-modeling",
    color: "from-earth-brown/15 to-honey/10",
  },
];

const verifiedFreeResources = [
  {
    title: "Color Mixing Video",
    description: "Free guided lesson on setting up one color prompt",
    icon: <Play size={20} />,
    href: "/free-resources/color-mixing-video",
    image: "/images/child-watercolor-painting.jpg",
    tag: "Video",
  },
  {
    title: "Storybook Art Video",
    description: "How to theme art activities with storytime books",
    icon: <Play size={20} />,
    href: "/free-resources/storybook-art-video",
    image: "/images/children-painting-classroom.jpg",
    tag: "Video",
  },
  {
    title: "Phases of Art Development",
    description: "Three free videos on developmental art stages",
    icon: <Video size={20} />,
    href: "/free-resources/phases-of-art-development",
    image: "/images/elementary-painting-classroom.jpg",
    tag: "Video Course",
  },
  {
    title: "Art Education Blog",
    description: "Articles on Montessori art practice",
    icon: <BookOpen size={20} />,
    href: "/blog",
    image: "/images/child-hands-clay.jpg",
    tag: "Blog",
  },
];

const productCards = [
  {
    title: "Art Books",
    description: "Guides on Montessori art education",
    icon: <BookOpen size={20} />,
    href: "/bookstore",
    image: "/images/kids-painting-book.jpg",
  },
  {
    title: "Video Training",
    description: "On-demand lessons for educators",
    icon: <Video size={20} />,
    href: "/training",
    image: "/images/painting-outdoors.jpg",
  },
  {
    title: "Art Supplies",
    description: "Materials for the prepared environment",
    icon: <ShoppingBag size={20} />,
    href: "/art-supplies",
    image: "/images/clay-play.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════════ */}
      <HomeHero />

      {/* ═══════════════════════════════════════════════════════════════
          EXPLORE — What We Offer
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-paper overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <p className="section-label mb-2">Explore Nature of Art®</p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
                  Discover What We <span className="text-honey">Offer</span>
                </h2>
              </div>
              <TrackedLink
                href="/curriculum"
                eventName="curriculum_explore_click"
                eventPayload={{ location: "homepage_explore_section" }}
                className="inline-flex items-center gap-1 text-sm font-medium text-honey hover:text-earth-brown transition-colors"
              >
                View all curriculum
                <ArrowRight size={16} />
              </TrackedLink>
            </div>
          </ScrollReveal>

          <HorizontalShowcase gap={20} cardWidth="300px">
            {explorePaths.map((path) => (
              <ShowcaseCard key={path.title} width="300px">
                <InteractiveCard glowColor="yellow" hoverLift={-6} tilt>
                  <TrackedLink
                    href={path.href}
                    eventName="curriculum_area_click"
                    eventPayload={{ label: path.title, location: "homepage_explore" }}
                    className="group block overflow-hidden rounded-card"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={path.image}
                        alt={path.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                      <span className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${path.tagColor}`}>
                        {path.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-honey">{path.icon}</div>
                        <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-honey transition-colors">
                          {path.title}
                        </h3>
                      </div>
                      <p className="text-sm text-charcoal/70">{path.description}</p>
                    </div>
                  </TrackedLink>
                </InteractiveCard>
              </ShowcaseCard>
            ))}
          </HorizontalShowcase>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SCIENCE ART METHOD™ — Authority Framework
          ═══════════════════════════════════════════════════════════════ */}
      <ScienceArtMethodSection />

      {/* ═══════════════════════════════════════════════════════════════
          CURRICULUM — Atelier Areas
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ivory overflow-hidden">
        <AnimatedGradientMesh variant="sunset" intensity="subtle" className="opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label justify-center mb-2">Complete Curriculum</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Explore the <span className="text-honey">Atelier</span>
              </h2>
              <p className="text-charcoal/70 max-w-xl mx-auto">
                Sequenced lesson plans for painting, drawing, clay, color theory, and more.
              </p>
            </div>
          </ScrollReveal>

          <HorizontalShowcase gap={24} cardWidth="280px">
            {curriculumAreas.map((area) => (
              <ShowcaseCard key={area.title} width="280px">
                <TrackedLink
                  href={area.href}
                  eventName="curriculum_area_click"
                  eventPayload={{ label: area.title, location: "homepage_atelier" }}
                  className="group block"
                >
                  <div className="relative rounded-card overflow-hidden bg-paper border border-linen shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="280px"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${area.color} opacity-60`} />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-honey transition-colors">
                          {area.title}
                        </h3>
                        <span className="text-xs font-medium text-charcoal/50">{area.lessons}</span>
                      </div>
                      <p className="text-sm text-charcoal/70">{area.description}</p>
                    </div>
                  </div>
                </TrackedLink>
              </ShowcaseCard>
            ))}
          </HorizontalShowcase>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          METHOD — Scroll-driven step progress
          ═══════════════════════════════════════════════════════════════ */}
      <ScrollStepProgress
        steps={methodSteps}
        title="Six Steps to Art in the Prepared Environment"
        subtitle="The Nature of Art Method guides educators through a proven approach to bringing visual arts into Montessori classrooms and homeschool spaces."
      />

      {/* ═══════════════════════════════════════════════════════════════
          GLOBAL REACH — Authority / reputation
          ═══════════════════════════════════════════════════════════════ */}
      <GlobalReachSection />

      {/* ═══════════════════════════════════════════════════════════════
          FREE RESOURCES — Verified only
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ivory overflow-hidden">
        <AnimatedColorBlobs intensity="subtle" className="opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <p className="section-label mb-2">Resource Library</p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
                  Start With <span className="text-honey">Free</span>
                </h2>
              </div>
              <TrackedLink
                href="/free-resources"
                eventName="resource_card_click"
                eventPayload={{ label: "view_all", location: "homepage_free_resources" }}
                className="inline-flex items-center gap-1 text-sm font-medium text-honey hover:text-earth-brown transition-colors"
              >
                Explore the Resource Library
                <ArrowRight size={16} />
              </TrackedLink>
            </div>
          </ScrollReveal>

          <HorizontalShowcase gap={20} cardWidth="280px">
            {verifiedFreeResources.map((resource) => (
              <ShowcaseCard key={resource.title} width="280px">
                <InteractiveCard glowColor="honey" hoverLift={-4} tilt>
                  <TrackedLink
                    href={resource.href}
                    eventName="resource_card_click"
                    eventPayload={{ label: resource.title, location: "homepage_free_resources" }}
                    className="group block overflow-hidden rounded-card"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="280px"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-paper/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
                          {resource.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 text-center">
                      <div className="w-10 h-10 mx-auto rounded-full bg-canvas flex items-center justify-center mb-3 text-honey border border-linen">
                        {resource.icon}
                      </div>
                      <h3 className="font-serif text-base font-semibold text-ink mb-1 group-hover:text-honey transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-charcoal/70">{resource.description}</p>
                    </div>
                  </TrackedLink>
                </InteractiveCard>
              </ShowcaseCard>
            ))}
          </HorizontalShowcase>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CERTIFICATION — Dark feature section
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ink text-paper overflow-hidden">
        <AnimatedGradientMesh variant="forest" intensity="subtle" className="opacity-30" />
        <AnimatedColorBlobs intensity="subtle" className="opacity-15" />
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
                  understanding.
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
                        <p className="font-serif text-lg font-semibold text-paper">{stat.label}</p>
                        <p className="text-xs text-canvas/60">{stat.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <TrackedLink
                  href="/certification"
                  eventName="certification_cta_click"
                  eventPayload={{ location: "homepage_certification" }}
                  className="inline-flex items-center justify-center rounded-button bg-bee-yellow px-8 py-4 text-base font-semibold text-ink hover:bg-bee-yellow/90 transition-colors shadow-lifted hover:shadow-dramatic"
                >
                  Explore Certification
                </TrackedLink>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOOKS & SUPPLIES
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ivory overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label justify-center mb-2">For Your Environment</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Books & Art <span className="text-honey">Supplies</span>
              </h2>
              <p className="text-charcoal/70 max-w-xl mx-auto">
                Authoritative guides and carefully selected materials for your Montessori art environment.
              </p>
            </div>
          </ScrollReveal>

          <HorizontalShowcase gap={24} cardWidth="340px">
            {productCards.map((item) => (
              <ShowcaseCard key={item.title} width="340px">
                <InteractiveCard glowColor="honey" hoverLift={-6} tilt>
                  <TrackedLink
                    href={item.href}
                    eventName="store_category_click"
                    eventPayload={{ label: item.title, location: "homepage_products" }}
                    className="group block card-editorial overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="340px"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-canvas flex items-center justify-center mb-4 text-honey border border-linen shadow-sm">
                        {item.icon}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-charcoal/70">{item.description}</p>
                    </div>
                  </TrackedLink>
                </InteractiveCard>
              </ShowcaseCard>
            ))}
          </HorizontalShowcase>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOUNDER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-paper overflow-hidden">
        <FloatingAccentShapes />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal variant="slideLeft" className="lg:col-span-5">
              <div className="relative paper-shape">
                <div className="aspect-[4/3] relative rounded-card overflow-hidden shadow-dramatic img-mask-rounded-alt">
                  <Image
                    src="/images/spramani-portrait.jpg"
                    alt="Spramani Elaun, founder of Nature of Art®"
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
                    honors both structure and creative freedom — the Science Art Method™.
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

      {/* ═══════════════════════════════════════════════════════════════
          NEWSLETTER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ivory overflow-hidden">
        <AnimatedGradientMesh variant="cool" intensity="subtle" className="opacity-30" />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="blurIn">
            <NewsletterSignup variant="card" source="homepage_footer" />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ink overflow-hidden">
        <AnimatedGradientMesh variant="forest" intensity="subtle" className="opacity-25" />
        <AnimatedColorBlobs intensity="subtle" className="opacity-15" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper tracking-[-0.02em] mb-5">
              Ready to bring art into your environment?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-canvas/80 text-lg max-w-2xl mx-auto mb-10">
              Explore the curriculum, download a free resource, or start your certification journey today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TrackedLink
                href="/curriculum"
                eventName="curriculum_cta_click"
                eventPayload={{ location: "homepage_final_cta" }}
                className="inline-flex items-center justify-center gap-2 rounded-button bg-bee-yellow px-8 py-4 text-base font-semibold text-ink hover:bg-bee-yellow/90 transition-colors shadow-lifted"
              >
                Explore Curriculum
                <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href="/free-resources"
                eventName="resource_card_click"
                eventPayload={{ label: "final_cta", location: "homepage_final_cta" }}
                className="inline-flex items-center justify-center rounded-button border border-paper/30 text-paper px-8 py-4 text-base font-semibold hover:bg-paper/10 transition-colors"
              >
                Get Free Resources
              </TrackedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
