import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Video, FileText, ClipboardCheck, BookOpen, Play, Download, Sparkles } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";

export const metadata = createMetadata({
  title: "Free Resources — Montessori Art Education",
  description: "Free video lessons, checklists, and guides for Montessori art education. Start your art journey today.",
});

const freeResources = [
  {
    title: "Color Mixing Video",
    description: "Learn the fundamentals of color mixing with children — a free 12-minute guided lesson.",
    icon: <Video size={22} />,
    color: "bg-creative-pink/10 text-creative-pink",
    glow: "pink" as const,
    href: "/free-resources/color-mixing-video",
    tag: "Video",
    image: "/images/art-shelf-painting.jpg",
  },
  {
    title: "Painting Checklist",
    description: "The complete material list, shelf setup diagram, and first 3 lessons to get started.",
    icon: <ClipboardCheck size={22} />,
    color: "bg-honey/10 text-honey",
    glow: "honey" as const,
    href: "/free-resources/painting-checklist",
    tag: "PDF",
    image: "/images/child-watercolor-painting.jpg",
  },
  {
    title: "Art Shelf Setup Guide",
    description: "How to organize and present art materials in a Montessori prepared environment.",
    icon: <FileText size={22} />,
    color: "bg-kids-blue/10 text-kids-blue",
    glow: "blue" as const,
    href: "/free-resources/art-shelf-setup",
    tag: "Guide",
    image: "/images/clay-forms-display.jpg",
  },
  {
    title: "First Drawing Lessons",
    description: "A free sequence of early drawing activities for toddlers and young children.",
    icon: <BookOpen size={22} />,
    color: "bg-sage/10 text-sage",
    glow: "honey" as const,
    href: "/free-resources/drawing-lessons",
    tag: "Lessons",
    image: "/images/early-childhood-art.jpg",
  },
];

const benefits = [
  "Instant access — no payment required",
  "Montessori-aligned content",
  "Ready to use in your environment",
  "New resources added monthly",
];

export default function FreeResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-ivory">
        <AnimatedColorBlobs intensity="medium" className="opacity-25" />
        <div className="absolute inset-0 honeycomb-accent opacity-25 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <ScrollReveal variant="blurIn">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-bee-yellow/15 border border-bee-yellow/20 px-3 py-1 text-xs font-semibold text-honey uppercase tracking-wider mb-5">
                  <Sparkles size={12} />
                  Free for Everyone
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.05} variant="blurIn">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink tracking-[-0.02em] mb-6 leading-snug">
                  Free Resources to{" "}
                  <span className="text-honey">Start Your Art Journey</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1} variant="fadeUp">
                <p className="text-charcoal/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-lg mb-8">
                  Video lessons, downloadable checklists, and guides to help you bring
                  Montessori art education into your classroom or home — starting today.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15} variant="fadeUp">
                <StaggerContainer className="flex flex-wrap gap-x-6 gap-y-2 mb-8 justify-center lg:justify-start" staggerDelay={0.06}>
                  {benefits.map((b) => (
                    <StaggerItem key={b}>
                      <span className="inline-flex items-center gap-1.5 text-sm text-charcoal/70">
                        <ClipboardCheck size={14} className="text-sage" />
                        {b}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              <ScrollReveal delay={0.1} variant="scaleUp">
                <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
                  <Image
                    src="/images/child-hands-clay.jpg"
                    alt="Child's hands engaged in creative art activity"
                    fill
                    className="object-cover"
                    sizes="40vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-paper border border-linen rounded-card p-3 shadow-card-hover rotate-2">
                  <p className="font-hand text-sm text-creative-pink">No credit card required</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* Resources Grid */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="absolute inset-0 honeycomb-accent opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-label justify-center mb-3">Start Here</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Free Resources
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Download, watch, and use these resources to transform your art practice.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.1}>
            {freeResources.map((resource) => (
              <StaggerItem key={resource.title} variant="scaleUp">
                <InteractiveCard glowColor={resource.glow} hoverLift={-6} tilt>
                  <Link href={resource.href} className="group block bg-paper border border-linen rounded-card overflow-hidden">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-paper/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
                          {resource.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <div className={`w-10 h-10 rounded-full ${resource.color} flex items-center justify-center backdrop-blur-sm`}>
                          {resource.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-charcoal/70 mb-4">{resource.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-honey group-hover:text-honey-dark transition-colors">
                        {resource.tag === "Video" ? (
                          <>
                            <Play size={14} />
                            Watch Now
                          </>
                        ) : (
                          <>
                            <Download size={14} />
                            Get Free Access
                          </>
                        )}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </InteractiveCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionTransition variant="swatches" height="lg" />

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="blurIn">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-5">
              Want the Full Curriculum?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08} variant="fadeUp">
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              Explore the complete curriculum collection, art books, and certification
              program for professional educators.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15} variant="fadeUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/curriculum"
                className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-8 py-4 text-base font-semibold text-paper hover:bg-charcoal transition-colors"
              >
                Explore Curriculum
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/bookstore"
                className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-8 py-4 text-base font-semibold hover:bg-ink hover:text-paper transition-colors"
              >
                View Art Books
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
