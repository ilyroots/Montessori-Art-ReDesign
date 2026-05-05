import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Video,
  FileText,
  Play,
  Sparkles,
  BookMarked,
  Mail,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { trackEvent } from "@/lib/analytics";

export const metadata = createMetadata({
  title: "Resource Library — Free Montessori Art Education",
  description:
    "Free video lessons, downloadable guides, and curated resources for Montessori art education. Start your art journey today.",
});

/* ── Verified free resources with fallback URLs ── */
const verifiedResources = [
  {
    title: "Color Mixing Video",
    description: "Free guided lesson on setting up one color prompt and engaging students with color invitations.",
    icon: <Play size={22} />,
    color: "bg-creative-pink/10 text-creative-pink",
    glow: "pink" as const,
    href: "/free-resources/color-mixing-video",
    tag: "Video",
    image: "/images/child-watercolor-painting.jpg",
  },
  {
    title: "Storybook Art Video",
    description: "One-hour free training on theming art activities with storytime books. Hosted by Spramani Elaun.",
    icon: <Play size={22} />,
    color: "bg-kids-blue/10 text-kids-blue",
    glow: "blue" as const,
    href: "/free-resources/storybook-art-video",
    tag: "Video",
    image: "/images/children-painting-classroom.jpg",
  },
  {
    title: "Phases of Art Development",
    description: "Three free videos covering art development from toddler through elementary years.",
    icon: <Video size={22} />,
    color: "bg-honey/10 text-honey",
    glow: "honey" as const,
    href: "/free-resources/phases-of-art-development",
    tag: "Video Course",
    image: "/images/elementary-painting-classroom.jpg",
  },
];

/* ── Content channels ── */
const contentChannels = [
  {
    title: "Art Education Blog",
    description: "Articles on drawing, clay, painting, and Montessori art practice.",
    icon: <BookMarked size={22} />,
    color: "bg-sage/10 text-sage",
    href: "/blog",
    tag: "Blog",
    image: "/images/child-hands-clay.jpg",
  },
  {
    title: "Weekly Newsletter",
    description: "Art inspiration, curriculum updates, and free resource announcements.",
    icon: <Mail size={22} />,
    color: "bg-honey/10 text-honey",
    href: "/newsletter",
    tag: "Email",
    image: "/images/art-shelf-painting.jpg",
  },
];

const benefits = [
  "No payment required",
  "Montessori-aligned content",
  "Ready to use in your environment",
  "Led by Spramani Elaun",
];

export default function FreeResourcesPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════════ */}
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
                  Curated for Educators
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.05} variant="blurIn">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink tracking-[-0.02em] mb-6 leading-snug">
                  Resource Library —{" "}
                  <span className="text-honey">Free Art Teaching Resources</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1} variant="fadeUp">
                <p className="text-charcoal/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-lg mb-8">
                  Video lessons and guides to help you bring Montessori art education
                  into your classroom or home. No account needed.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15} variant="fadeUp">
                <StaggerContainer className="flex flex-wrap gap-x-6 gap-y-2 mb-8 justify-center lg:justify-start" staggerDelay={0.06}>
                  {benefits.map((b) => (
                    <StaggerItem key={b}>
                      <span className="inline-flex items-center gap-1.5 text-sm text-charcoal/70">
                        <FileText size={14} className="text-sage" />
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
                    src="/images/painting-outdoors.jpg"
                    alt="Children engaged in creative art activity"
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

      {/* ═══════════════════════════════════════════════════════════════
          VERIFIED FREE RESOURCES
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="absolute inset-0 honeycomb-accent opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-label justify-center mb-3">Start Here</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Free Video Lessons
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Watch, learn, and apply these resources to transform your art practice.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {verifiedResources.map((resource) => (
              <StaggerItem key={resource.title} variant="scaleUp">
                <InteractiveCard glowColor={resource.glow} hoverLift={-6} tilt>
                  <Link
                    href={resource.href}
                    onClick={() => trackEvent("resource_card_click", { label: resource.title, location: "resource_library_grid" })}
                    className="group block bg-paper border border-linen rounded-card overflow-hidden"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        <Play size={14} />
                        Watch Free Video
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

      {/* ═══════════════════════════════════════════════════════════════
          CONTENT CHANNELS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-label justify-center mb-3">Stay Inspired</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                More to <span className="text-honey">Explore</span>
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Fresh ideas and resources delivered regularly.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto" staggerDelay={0.1}>
            {contentChannels.map((channel) => (
              <StaggerItem key={channel.title} variant="scaleUp">
                <InteractiveCard glowColor="honey" hoverLift={-4} tilt>
                  <Link
                    href={channel.href}
                    onClick={() => trackEvent("newsletter_cta_click", { label: channel.title, location: "resource_library_channels" })}
                    className="group block bg-paper border border-linen rounded-card overflow-hidden"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={channel.image}
                        alt={channel.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-paper/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
                          {channel.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full ${channel.color} flex items-center justify-center`}>
                          {channel.icon}
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-honey transition-colors">
                          {channel.title}
                        </h3>
                      </div>
                      <p className="text-sm text-charcoal/70 mb-4">{channel.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-honey group-hover:text-honey-dark transition-colors">
                        Explore
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

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          NEWSLETTER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="blurIn">
            <div className="text-center mb-8">
              <p className="section-label justify-center mb-3">Get Notified</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-4">
                New Resources in Your Inbox
              </h2>
              <p className="text-charcoal/70">
                Be the first to know when we publish new guides, videos, and lesson plans.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} variant="fadeUp">
            <NewsletterSignup variant="card" source="resource_library_page" showNameField />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="blurIn">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-[-0.02em] mb-5">
              Want the Full Curriculum?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08} variant="fadeUp">
            <p className="text-lg text-canvas/80 leading-relaxed mb-8">
              Explore the complete curriculum collection, art books, and certification
              program for professional educators.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15} variant="fadeUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/curriculum"
                onClick={() => trackEvent("curriculum_cta_click", { location: "resource_library_final_cta" })}
                className="inline-flex items-center justify-center gap-2 rounded-button bg-bee-yellow px-8 py-4 text-base font-semibold text-ink hover:bg-bee-yellow/90 transition-colors"
              >
                Explore Curriculum
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/bookstore"
                onClick={() => trackEvent("bookstore_click", { location: "resource_library_final_cta" })}
                className="inline-flex items-center justify-center rounded-button border border-paper/30 text-paper px-8 py-4 text-base font-semibold hover:bg-paper/10 transition-colors"
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
