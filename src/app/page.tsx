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
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { FloatingAccentShapes } from "@/components/motion/FloatingAccentShapes";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { AnimatedGradientMesh } from "@/components/visual/AnimatedGradientMesh";
import { HorizontalShowcase, ShowcaseCard } from "@/components/visual/HorizontalShowcase";
import { TrackedLink } from "@/components/navigation/TrackedLink";
import { PaperTextureBackground } from "@/components/visual/backgrounds/PaperTextureBackground";
import { SoftGradientField } from "@/components/visual/backgrounds/SoftGradientField";
import { FloatingSwatchField } from "@/components/visual/backgrounds/FloatingSwatchField";
import { LayeredArtMaterialBackground } from "@/components/visual/backgrounds/LayeredArtMaterialBackground";
import { HoneycombPatternBackground } from "@/components/visual/backgrounds/HoneycombPatternBackground";

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
          HERO — Immersive layered background
          ═══════════════════════════════════════════════════════════════ */}
      <PaperTextureBackground intensity="subtle" variant="warm">
        <FloatingSwatchField>
          <HomeHero />
        </FloatingSwatchField>
      </PaperTextureBackground>

      {/* ═══════════════════════════════════════════════════════════════
          CHOOSE YOUR LEARNING PATH — 4 audience boxes
          ═══════════════════════════════════════════════════════════════ */}
      <LayeredArtMaterialBackground layers={3}>
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                  Choose Your <span className="text-honey">Learning Path</span>
                </h2>
                <p className="text-charcoal/70 max-w-xl mx-auto">
                  Whether you teach in a classroom, guide at home, or lead a school, there is a path for you.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
              {[
                {
                  title: "For Classroom Guides",
                  description: "Extend your Montessori environment with true art literacy and art standards, with confidence and clarity.",
                  href: "/certification",
                  icon: <GraduationCap size={20} />,
                  color: "bg-honey/10 text-honey",
                },
                {
                  title: "For Families",
                  description: "Give your child a rich art education at home with structure, confidence, and resources.",
                  href: "/academy/start",
                  icon: <Users size={20} />,
                  color: "bg-kids-blue/10 text-kids-blue",
                },
                {
                  title: "Art Teachers",
                  description: "Deepen your practice with art literacy, teaching techniques, lesson planning, and an understanding of the phases of art development.",
                  href: "/training",
                  icon: <Palette size={20} />,
                  color: "bg-creative-pink/10 text-creative-pink",
                },
                {
                  title: "For Leaders",
                  description: "Equip your staff with a proven art curriculum, professional development, certification, and a clear art education pathway.",
                  href: "/certification",
                  icon: <Award size={20} />,
                  color: "bg-sage/20 text-earth-brown",
                },
              ].map((box) => (
                <StaggerItem key={box.title}>
                  <Link href={box.href} className="group block h-full">
                    <div className="h-full bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${box.color}`}>
                        {box.icon}
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                        {box.title}
                      </h3>
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                        {box.description}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </LayeredArtMaterialBackground>

      {/* ═══════════════════════════════════════════════════════════════
          EVERYTHING WE OFFER — 6 offering boxes
          ═══════════════════════════════════════════════════════════════ */}
      <HoneycombPatternBackground opacity={0.025}>
        <SoftGradientField variant="sage" animate={false}>
          <section className="relative py-20 sm:py-28 overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                    Everything We <span className="text-honey">Offer</span>
                  </h2>
                </div>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
                {[
                  {
                    label: "",
                    title: "Curriculum",
                    description: "Structured, step-by-step sequenced lesson plans. Drawing, painting, and clay modeling…",
                    cta: "Explore Curriculum",
                    href: "/curriculum",
                    icon: <BookOpen size={18} />,
                    color: "bg-honey/10 text-honey",
                  },
                  {
                    label: "",
                    title: "Video Trainings",
                    description: "Professional development, on-demand trainings to help you set up your art environment, provide art inspiration, and so much more…",
                    cta: "View Trainings",
                    href: "/training",
                    icon: <Video size={18} />,
                    color: "bg-kids-blue/10 text-kids-blue",
                  },
                  {
                    label: "Art Teaching Blueprint",
                    title: "Art Certification",
                    description: "Earn your professional certification and understand the phases of art development for children, and design art programming with confidence.",
                    cta: "Get Certified",
                    href: "/certification",
                    icon: <Award size={18} />,
                    color: "bg-creative-pink/10 text-creative-pink",
                  },
                  {
                    label: "",
                    title: "Art Teaching Books",
                    description: "Authoritative art guides, essential reading for early childhood and elementary guides and parents.",
                    cta: "Buy Books",
                    href: "/bookstore",
                    icon: <BookOpen size={18} />,
                    color: "bg-sage/20 text-earth-brown",
                  },
                  {
                    label: "",
                    title: "Art Supply Store",
                    description: "Premium art supplies and materials for teaching visual arts.",
                    cta: "View Art Catalog",
                    href: "/art-supplies",
                    icon: <ShoppingBag size={18} />,
                    color: "bg-bee-yellow/15 text-honey",
                  },
                  {
                    label: "",
                    title: "Free Art Resources",
                    description: "Start with free video training, checklists, and guides to transform your art practice.",
                    cta: "Start With Free",
                    href: "/free-resources",
                    icon: <Play size={18} />,
                    color: "bg-earth-brown/10 text-earth-brown",
                  },
                ].map((box) => (
                  <StaggerItem key={box.title}>
                    <div className="h-full bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center ${box.color}`}>
                          {box.icon}
                        </div>
                        <div>
                          {box.label && (
                            <p className="text-[10px] uppercase tracking-wider text-charcoal/50 font-medium">{box.label}</p>
                          )}
                          <h3 className="font-serif text-lg font-semibold text-ink">{box.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal/70 leading-relaxed flex-1 mb-4">
                        {box.description}
                      </p>
                      <Link
                        href={box.href}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-honey hover:text-earth-brown transition-colors"
                      >
                        {box.cta}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        </SoftGradientField>
      </HoneycombPatternBackground>

      {/* ═══════════════════════════════════════════════════════════════
          FREE RESOURCES — Warm inviting library feeling
          ═══════════════════════════════════════════════════════════════ */}
      <SoftGradientField variant="warm" animate={false}>
        <FloatingSwatchField
          swatches={[
            { color: "bg-honey/10", size: 40, x: "5%", y: "10%", delay: 0, duration: 10 },
            { color: "bg-creative-pink/8", size: 28, x: "90%", y: "15%", delay: 2, duration: 12 },
            { color: "bg-kids-blue/8", size: 32, x: "80%", y: "75%", delay: 1, duration: 9 },
            { color: "bg-bee-yellow/10", size: 36, x: "10%", y: "80%", delay: 3, duration: 11 },
            { color: "bg-sage/8", size: 24, x: "50%", y: "90%", delay: 1.5, duration: 10 },
          ]}
        >
          <section className="relative py-20 sm:py-28 overflow-hidden">
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
        </FloatingSwatchField>
      </SoftGradientField>

      {/* ═══════════════════════════════════════════════════════════════
          CERTIFICATION — Dark feature section
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ink text-paper overflow-hidden">
        <AnimatedGradientMesh variant="forest" intensity="subtle" className="opacity-30" />
        <AnimatedColorBlobs intensity="subtle" className="opacity-15" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }} />
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
                <div className="w-12 h-12 rounded-full bg-bee-yellow/10 border border-bee-yellow/20 flex items-center justify-center mb-4">
                  <span className="font-serif text-xl font-bold text-bee-yellow">N</span>
                </div>
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
                    { label: "7 Modules", desc: "Comprehensive training", icon: <BookOpen size={18} /> },
                    { label: "Certificate", desc: "Upon completion", icon: <Award size={18} /> },
                    { label: "Science Art Method™", desc: "Grounded in science", icon: <Users size={18} /> },
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
          BOOKS & SUPPLIES — Layered art material background
          ═══════════════════════════════════════════════════════════════ */}
      <LayeredArtMaterialBackground layers={2}>
        <section className="relative py-20 sm:py-28 overflow-hidden">
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
      </LayeredArtMaterialBackground>

      {/* ═══════════════════════════════════════════════════════════════
          ART BLOG — Section 8
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-canvas overflow-hidden">
        <div className="absolute inset-0 honeycomb-accent opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label justify-center mb-2">Insights & Inspiration</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Art <span className="text-honey">Blog</span>
              </h2>
              <p className="text-charcoal/70 max-w-xl mx-auto">
                Articles on Montessori art education, lesson ideas, and creative guidance for educators and parents.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Phases of Art Development",
                excerpt: "Understanding how children progress through natural stages of artistic growth from scribbling to representational drawing.",
                href: "/blog/phases-of-art-development",
                tag: "Child Development",
              },
              {
                title: "Setting Up a Montessori Art Shelf",
                excerpt: "A step-by-step guide to organizing materials so children can independently access and return art supplies.",
                href: "/blog/art-shelf-setup",
                tag: "Environment",
              },
              {
                title: "Process Over Product",
                excerpt: "Why the journey matters more than the finished artwork, and how to foster creative confidence in every child.",
                href: "/blog/process-over-product",
                tag: "Pedagogy",
              },
            ].map((post) => (
              <ScrollReveal key={post.title}>
                <Link href={post.href} className="group block h-full">
                  <div className="h-full bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow">
                    <span className="text-[10px] uppercase tracking-wider text-honey font-semibold mb-3 block">
                      {post.tag}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-honey hover:text-earth-brown transition-colors">
                      Read article
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOUNDER — Editorial paper treatment
          ═══════════════════════════════════════════════════════════════ */}
      <PaperTextureBackground intensity="subtle" variant="warm">
        <section className="relative py-20 sm:py-28 overflow-hidden">
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
                  {/* Floating accent card */}
                  <div className="absolute -bottom-4 -right-4 bg-paper border border-linen rounded-card p-4 shadow-card-hover rotate-2 hidden lg:block">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-bee-yellow/20 flex items-center justify-center">
                        <span className="text-honey text-xs font-bold">20+</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-ink">Years of Practice</p>
                        <p className="text-[10px] text-charcoal/50">Montessori Art Education</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slideRight" delay={0.1} className="lg:col-span-6 lg:col-start-7">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-5">
                    Spramani Elaun
                  </h2>
                  <div className="space-y-4 text-charcoal/80 leading-relaxed">
                    <p>
                      Spramani Elaun is an author and art curriculum developer from San Diego, California. She is a homeschooling mom and art teacher with a science art methodology. Her success is led by observations and real-life practice of how children cognitively and sensorially process art over thirty years. She is the founder of Nature of Art® Art School & Art Supply Company and the Art Teaching Blueprint Montessori Certification Training Program. Spramani holds degrees in Graphic Design, Digital Media Design, Visual Communications, Print Media, and Fine Arts.
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
      </PaperTextureBackground>

      {/* ═══════════════════════════════════════════════════════════════
          NEWSLETTER — Soft cool gradient
          ═══════════════════════════════════════════════════════════════ */}
      <SoftGradientField variant="cool" animate={false}>
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="blurIn">
              <NewsletterSignup variant="card" source="homepage_footer" />
            </ScrollReveal>
          </div>
        </section>
      </SoftGradientField>

      {/* ═══════════════════════════════════════════════════════════════
          COPYRIGHT / LEGAL — Clean footer section
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 bg-ink text-paper overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm text-canvas/80 leading-relaxed mb-2">
              All rights reserved © 2026, Nature of Art®
            </p>
            <p className="text-sm text-canvas/80 leading-relaxed mb-4">
              Nature of Art® provides art pedagogy
            </p>
            <p className="text-xs text-canvas/50 leading-relaxed max-w-2xl mx-auto mb-4">
              This website and its blogs support individual educators in teaching children visual arts. It does not authorize professional development, staff training, or adaptation of the Science Art Method™ for institutional use.
            </p>
            <p className="text-xs text-canvas/50 leading-relaxed max-w-2xl mx-auto mb-4">
              No part of this blog may be used or reproduced in any manner whatsoever, including reproducing, publishing, performing, or making any adaptations of the work—including translation into another language—without written permission, except in the case of brief quotations embodied in critical articles and reviews.
            </p>
            <p className="text-xs text-canvas/50 leading-relaxed mb-1">
              Nature of Art® Publishing
            </p>
            <p className="text-xs text-canvas/50 leading-relaxed mb-4">
              P.O. Box 443 · Solana Beach, California 92075
            </p>
            <Link href="/terms-of-service" className="text-xs text-honey hover:text-bee-yellow transition-colors uppercase tracking-wider">
              Terms of Service
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
