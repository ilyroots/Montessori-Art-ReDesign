"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X, Mail, BookOpen, Palette, Lightbulb, Eye, Brush, GraduationCap, HeartHandshake } from "lucide-react";
import { ArtDirectedHero } from "@/components/sections/ArtDirectedHero";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { getProductById } from "@/config/products";
import type { ExistingPageEntry } from "@/config/existingSiteMap";

interface PaintingWorkClientProps {
  siteMapEntry?: ExistingPageEntry;
}

const ALBUM_CONTENT_AREAS = [
  {
    icon: BookOpen,
    title: "Essential Materials & Tools",
    description: "Comprehensive guidance on selecting the most suitable paints, brushes, and surfaces for various projects and age groups.",
  },
  {
    icon: Palette,
    title: "Paint Facts & Properties",
    description: "Understand how different paints behave, when to use each type, and how to match materials to your lesson objectives.",
  },
  {
    icon: Lightbulb,
    title: "Key Principles to Start",
    description: "Foundational concepts that every painting program needs — from setup to cleanup, and everything in between.",
  },
  {
    icon: Eye,
    title: "Technique Demonstrations",
    description: "Beautiful full-color photographs of painting lesson ideas and step-by-step examples of different techniques.",
  },
  {
    icon: Brush,
    title: "Artist Technique References",
    description: "Insights into how master painters worked, adapted for the elementary classroom and child-sized exploration.",
  },
  {
    icon: GraduationCap,
    title: "Choice-Based Instruction",
    description: "Best practices for offering children meaningful choices within a prepared painting environment.",
  },
  {
    icon: HeartHandshake,
    title: "Process-Based & Guided Methods",
    description: "When to step back and when to guide. A balanced approach that respects autonomy while building real skill.",
  },
];

const GALLERY_IMAGES = [
  { src: "/images/painting-work/original-02.jpg", alt: "Painting Work Art Album spread showing lesson pages", caption: "Seven key lessons with full-color photography" },
  { src: "/images/painting-work/original-03.jpg", alt: "Children exploring painting techniques", caption: "Techniques demonstrated in real classrooms" },
  { src: "/images/painting-work/original-04.jpg", alt: "Painting materials and tools arrangement", caption: "Materials guidance for every project type" },
  { src: "/images/painting-work/original-05.jpg", alt: "Student painting artwork close-up", caption: "Process-based exploration in action" },
  { src: "/images/painting-work/original-06.jpg", alt: "Curriculum page showing paint facts", caption: "Paint facts and properties explained clearly" },
  { src: "/images/painting-work/original-07.jpg", alt: "Art album page with technique steps", caption: "Step-by-step technique demonstrations" },
  { src: "/images/painting-work/original-08.jpg", alt: "Children engaged in painting lesson", caption: "Guided instruction that builds confidence" },
];

export function PaintingWorkClient({ siteMapEntry }: PaintingWorkClientProps) {
  const product = getProductById("painting-work");
  if (!product) {
    return (
      <div className="py-24 text-center">
        <p className="text-charcoal/70">Product not found</p>
      </div>
    );
  }

  const fallbackUrl = siteMapEntry?.fallbackExternalUrl;
  const primaryCtaLabel = product.priceVariants?.[0]?.ctaLabel ?? `Buy Now — ${product.price}`;

  return (
    <>
      {/* Sticky Mobile CTA */}
      <StickyCTA label={primaryCtaLabel} href={fallbackUrl || "#"} visibleAfter={400} />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════════ */}
      <ArtDirectedHero
        overline="Art Album"
        headline={
          <>
            The essential painting album for{" "}
            <span className="text-honey italic">elementary</span>{" "}
            art education.
          </>
        }
        subheadline="A Montessori Elementary Art Album by Spramani Elaun. Seven key lessons in full color, with paint facts, techniques, and artist references — the perfect companion to the Kids Painting Brushstrokes Curriculum."
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "See What's Inside", href: "#whats-included" }}
        trustBadges={[
          "Elementary Grades",
          product.format,
          "Companion Album",
        ].filter(Boolean) as string[]}
        annotation="Every artist was first an amateur."
        annotationAuthor="Ralph Waldo Emerson"
        image={"/images/painting-work/original-01.jpg"}
        imageAlt="Teaching Painting to Children Art Album cover"
      />

      <SectionTransition variant="swatches" height="md" />

      {/* Trust Bar */}
      <section className="border-y border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-charcoal/60">
            {[
              "Printed + Digital options",
              "30-day printed satisfaction guarantee",
              "Art educator support via email",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check size={14} className="text-sage" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROBLEM
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-gradient-warm">
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-8">
              Does this sound familiar?
            </h2>
          </ScrollReveal>
          <div className="space-y-5">
            {[
              "You have a painting curriculum, but you want deeper context. You need the 'why' behind each lesson — the paint facts, the artist connections, and the teaching nuance that turns a good lesson into a great one.",
              "You are comfortable with the basics, but you want to bring more intention to your painting shelf. You need a reference that combines beautiful visuals with practical pedagogy.",
            ].map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition variant="swatches" height="lg" />

      {/* ═══════════════════════════════════════════════════════════════
          METHOD
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-canvas">
        <div className="absolute inset-0 honeycomb-accent opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">
                A reference album for confident, informed instruction
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {[
              {
                title: "Understand the materials",
                description:
                  "Go beyond 'open the paint and begin.' Learn which paints suit which projects, how brushes affect outcomes, and how to prepare an environment that invites independent exploration.",
              },
              {
                title: "Study the techniques",
                description:
                  "Each key lesson includes full-color photographs, technique demonstrations, and clear descriptions that help you present painting with confidence and clarity.",
              },
              {
                title: "Connect to artist practice",
                description:
                  "Discover how historical painting techniques translate into child-sized experiences. Build a bridge between art history and the elementary classroom.",
              },
              {
                title: "Apply best practices",
                description:
                  "Learn when to offer choice, when to provide guidance, and how to maintain a process-based approach that still builds measurable skill.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.08}>
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-honey/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-honey">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink text-lg mb-1">{step.title}</h3>
                    <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          ALBUM GALLERY
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ivory">
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Inside the Album
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Painting Work in Action
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Full-color spreads, real classroom moments, and detailed technique demonstrations that bring every lesson to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {GALLERY_IMAGES.map((img, i) => (
              <ScrollReveal
                key={img.src}
                delay={i * 0.06}
                className={`relative group overflow-hidden rounded-card border border-linen shadow-sm ${
                  i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium leading-snug">{img.caption}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          WHAT'S INCLUDED
          ═══════════════════════════════════════════════════════════════ */}
      <section id="whats-included" className="relative py-20 sm:py-28 bg-canvas">
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                What&apos;s Inside
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Everything you need to bring depth, context, and confidence to your painting program.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(product.features ?? []).map((feature, i) => (
              <ScrollReveal key={feature} delay={i * 0.06}>
                <div className="bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow duration-200 h-full">
                  <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center mb-4 text-honey">
                    <Check size={22} />
                  </div>
                  <h3 className="font-semibold text-ink mb-1">{feature}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          7 KEY LESSONS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-paper">
        <div className="absolute inset-0 honeycomb-accent opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Curriculum Scope
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Seven Key Content Areas
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Each area is explored in detail with full-color photography, technique demonstrations, and teaching guidance.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
            {ALBUM_CONTENT_AREAS.map((area, i) => (
              <StaggerItem key={area.title}>
                <div className="bg-canvas/60 border border-linen rounded-card p-6 hover:bg-canvas transition-colors h-full">
                  <div className="w-10 h-10 rounded-full bg-honey/10 flex items-center justify-center mb-4 text-honey">
                    <area.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{area.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{area.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          DUAL PRICING CTA
          ═══════════════════════════════════════════════════════════════ */}
      {product.priceVariants && product.priceVariants.length > 1 && (
        <section className="py-16 sm:py-20 bg-canvas">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-3">
                  Choose Your Format
                </h2>
                <p className="text-charcoal/70">
                  Select the option that works best for your teaching environment.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {product.priceVariants.map((variant, i) => (
                <ScrollReveal key={variant.format} delay={i * 0.08}>
                  <div className="bg-paper border border-linen rounded-card p-6 sm:p-8 text-center h-full flex flex-col">
                    <p className="text-sm font-medium text-charcoal/60 mb-2">{variant.format}</p>
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-4">
                      {variant.price}
                    </p>
                    <div className="flex-1" />
                    <Link
                      href={fallbackUrl || "#"}
                      className="block w-full text-center rounded-button bg-ink px-6 py-3.5 text-sm font-semibold text-paper hover:bg-ink-dark transition-colors"
                    >
                      {variant.ctaLabel}
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          WHO IT'S FOR
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-gradient-warm">
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-8">
                  Who this is for
                </h2>
                <ul className="space-y-4">
                  {[
                    "Montessori elementary guides seeking painting depth and context",
                    "Homeschool parents who want more than activity instructions",
                    "Art teachers who value pedagogy alongside technique",
                    "Educators who already have a curriculum and want a rich companion reference",
                    "Anyone who wants beautiful, full-color lesson inspiration on their shelf",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="mt-0.5 text-sage shrink-0" />
                      <span className="text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink/30 tracking-[-0.02em] mb-8">
                  Who this is not for
                </h2>
                <ul className="space-y-4">
                  {[
                    "Those looking for a standalone curriculum with 50+ sequenced lessons",
                    "Educators who want craft projects with predetermined outcomes",
                    "Anyone seeking a digital-only experience who does not value printed reference material",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={18} className="mt-0.5 text-charcoal/30 shrink-0" />
                      <span className="text-charcoal/50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT INSTRUCTOR
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-canvas">
        <div className="absolute inset-0 honeycomb-accent opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[3/4] max-w-sm mx-auto relative rounded-card bg-paper border border-linen overflow-hidden shadow-lifted">
                <Image
                  src="/images/painting-work/original-01.jpg"
                  alt="Spramani Elaun, founder of Nature of Art"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                  Your Instructor
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-5">
                  Created by Spramani Elaun
                </h2>
                <div className="space-y-4">
                  <p className="text-charcoal/80 leading-relaxed">
                    Spramani Elaun is an author and art curriculum developer from San Diego, California. She is a homeschooling mom and art teacher with a science art methodology developed over twenty years of observation and real-life practice.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    She is the founder of Nature of Art® Art School & Art Supply Company, and the Art Teaching Blueprint™ Montessori Certification Training Program. Her personal painting album features the most common lessons she teaches at lower and elementary levels — accompanied by comments, detailed descriptions, and beautiful full-color photographs.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Spramani holds degrees in Graphic Design, Digital Media Design, Visual Communications, Print Media, and Fine Arts.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={[
          {
            question: "Is this the same as the Kids Painting Brushstrokes Curriculum?",
            answer:
              "No. This art album is a companion to the Kids Painting Brushstrokes Curriculum. While the curriculum provides 57 sequenced studio experiences, this album offers deeper context on seven key lessons with paint facts, technique demonstrations, and artist references.",
          },
          {
            question: "Do I need to be a Montessori teacher to use this?",
            answer:
              "No. While the album is designed with Montessori elementary principles in mind, homeschool parents, art teachers, and early childhood educators of all backgrounds will find it accessible and inspiring.",
          },
          {
            question: "What age range is this for?",
            answer:
              "This album is best for elementary grades, though the content can be adapted for motivated early childhood educators and advanced primary students.",
          },
          {
            question: "What materials do I need?",
            answer:
              "The album covers essential painting materials and tools, including guidance on selecting the most suitable paints for various projects. A complete materials overview is included.",
          },
          {
            question: "Is this a digital download or a printed book?",
            answer:
              "Both options are available. You can purchase the printed album with free U.S. shipping, or the digital PDF for instant download.",
          },
          {
            question: "Can I use this in a classroom setting?",
            answer:
              "Absolutely. The album is designed for both classroom and homeschool use, and serves as an excellent reference on any curriculum shelf.",
          },
          {
            question: "What is the refund policy?",
            answer:
              "We offer a 30-day satisfaction guarantee for the printed version only. Digital album purchases cannot be refunded.",
          },
          {
            question: "Does this album certify me to teach the Science Art Method™?",
            answer:
              "No. Purchase of this album does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™ certification program.",
          },
        ]}
      />

      {/* Disclaimer */}
      {product.disclaimer && (
        <section className="py-12 sm:py-16 bg-ivory">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-paper border border-linen rounded-card p-6">
                <h3 className="font-semibold text-ink mb-2">Important Notice</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{product.disclaimer}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Refund Policy */}
      {product.refundPolicy && (
        <section className="py-8 sm:py-12 bg-ivory border-t border-linen">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-sm text-charcoal/60">
                <strong>Refund Policy:</strong> {product.refundPolicy}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Contact */}
      {product.contactEmail && (
        <section className="py-8 sm:py-10 bg-canvas border-t border-linen">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <a
                href={`mailto:${product.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-honey transition-colors"
              >
                <Mail size={16} />
                Questions? Contact {product.contactEmail}
              </a>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <FinalCTA
        title="Bring depth and beauty to your painting program"
        description="Explore the Painting Work Art Album and discover how seven key lessons, full-color photography, and artist references can transform your elementary art environment."
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "View All Curriculum", href: "/curriculum" }}
      />
    </>
  );
}
