import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Palette, Pencil, Shapes, Droplets, BookOpen, GraduationCap } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { AnimatedPathwayLine } from "@/components/visual/AnimatedPathwayLine";

export const metadata = createMetadata({
  title: "Curriculum — Montessori Art Education",
  description: "Montessori art curriculum for painting, drawing, clay, color theory, and more. Sequenced lessons for the prepared environment.",
});

const curriculumAreas = [
  {
    id: "painting",
    title: "Painting",
    description: "Watercolor, tempera, and acrylic painting sequences that build technical skill and creative confidence.",
    icon: <Palette size={24} />,
    color: "bg-kids-blue/10 text-kids-blue",
    glow: "blue" as const,
    href: "/curriculum/painting",
    lessons: 12,
    image: "/images/child-watercolor-painting.jpg",
  },
  {
    id: "drawing",
    title: "Drawing",
    description: "From early mark-making to representational drawing — a developmental sequence for every stage.",
    icon: <Pencil size={24} />,
    color: "bg-honey/10 text-honey",
    glow: "honey" as const,
    href: "/curriculum/drawing",
    lessons: 10,
    image: "/images/early-childhood-art.jpg",
  },
  {
    id: "clay",
    title: "Clay Modeling",
    description: "Sensory-rich clay exploration that strengthens fine motor skills and three-dimensional thinking.",
    icon: <Shapes size={24} />,
    color: "bg-earth-brown/10 text-earth-brown",
    glow: "honey" as const,
    href: "/curriculum/clay-modeling",
    lessons: 8,
    image: "/images/clay-play.jpg",
  },
  {
    id: "color",
    title: "Color Theory",
    description: "Mixing, matching, and understanding color through hands-on Montessori-inspired activities.",
    icon: <Droplets size={24} />,
    color: "bg-creative-pink/10 text-creative-pink",
    glow: "pink" as const,
    href: "/curriculum/color-theory",
    lessons: 6,
    image: "/images/art-shelf-painting.jpg",
  },
];

const learningPathSteps = [
  { label: "Explore", description: "Discover the curriculum areas", status: "active" as const },
  { label: "Prepare", description: "Set up your art environment", status: "upcoming" as const },
  { label: "Present", description: "Introduce lessons with confidence", status: "upcoming" as const },
  { label: "Observe", description: "Document children's growth", status: "upcoming" as const },
  { label: "Grow", description: "Advance through the sequence", status: "upcoming" as const },
];

export default function CurriculumIndexPage() {
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
                <p className="section-label mb-4">Sequenced & Developmental</p>
              </ScrollReveal>
              <ScrollReveal delay={0.05} variant="blurIn">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink tracking-[-0.02em] mb-6 leading-snug">
                  A Complete Art Curriculum for{" "}
                  <span className="text-honey">Montessori Environments</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1} variant="fadeUp">
                <p className="text-charcoal/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-lg mb-8">
                  Painting, drawing, clay, and color theory — each area is organized into
                  developmental sequences that respect the child's natural creative journey.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15} variant="fadeUp">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/academy/start"
                    className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                  >
                    Start Free Lessons
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/certification"
                    className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-7 py-3.5 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors"
                  >
                    <GraduationCap size={16} className="mr-1.5" />
                    Get Certified
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              <ScrollReveal delay={0.1} variant="scaleUp">
                <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
                  <Image
                    src="/images/children-painting-classroom.jpg"
                    alt="Children engaged in Montessori art activities"
                    fill
                    className="object-cover"
                    sizes="40vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-paper border border-linen rounded-card p-3 shadow-card-hover rotate-[-2deg]">
                  <p className="font-hand text-sm text-creative-pink">36+ sequenced lessons</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* Learning Path Visual */}
      <section className="py-16 sm:py-20 bg-canvas">
        <div className="absolute inset-0 honeycomb-accent opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label justify-center mb-3">Your Journey</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em]">
                The Learning Path
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-paper border border-linen rounded-card p-6 sm:p-8">
              <AnimatedPathwayLine steps={learningPathSteps} orientation="horizontal" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition variant="swatches" height="lg" />

      {/* Curriculum Areas Grid */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-label justify-center mb-3">Explore by Medium</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Curriculum Areas
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Each area follows a developmental sequence from first exploration to advanced techniques.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.1}>
            {curriculumAreas.map((area) => (
              <StaggerItem key={area.id} variant="scaleUp">
                <InteractiveCard glowColor={area.glow} hoverLift={-6} tilt>
                  <Link href={area.href} className="group block bg-paper border border-linen rounded-card overflow-hidden">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-ink">
                          <BookOpen size={12} />
                          {area.lessons} lessons
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${area.color}`}>
                          {area.icon}
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-honey transition-colors">
                          {area.title}
                        </h3>
                      </div>
                      <p className="text-sm text-charcoal/70">{area.description}</p>
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
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="absolute inset-0 honeycomb-accent opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="blurIn">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-5">
              Ready to bring art into your environment?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08} variant="fadeUp">
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              Start with free lessons in the Academy, or explore the full certification program
              for professional educators.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15} variant="fadeUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/academy/start"
                className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-8 py-4 text-base font-semibold text-paper hover:bg-charcoal transition-colors"
              >
                Start Free Academy
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/certification"
                className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-8 py-4 text-base font-semibold hover:bg-ink hover:text-paper transition-colors"
              >
                Explore Certification
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
