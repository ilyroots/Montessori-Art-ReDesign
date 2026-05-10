"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X, Mail } from "lucide-react";
import { ArtDirectedHero } from "@/components/sections/ArtDirectedHero";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { getProductById } from "@/config/products";
import type { ExistingPageEntry } from "@/config/existingSiteMap";

interface PaintingClientProps {
  siteMapEntry?: ExistingPageEntry;
}

const PAINTING_LESSONS = [
  { num: 1, title: "Introduction to Paint Materials", category: "Materials & Tools" },
  { num: 2, title: "How to Properly Wash a Paintbrush", category: "Materials & Tools" },
  { num: 3, title: "Paintbrush Anatomy – Toe & Belly", category: "Materials & Tools" },
  { num: 4, title: "How to Hold a Paintbrush", category: "Materials & Tools" },
  { num: 5, title: "How to Make a Proper Brushstroke", category: "Materials & Tools" },
  { num: 6, title: "How to Load a Paintbrush", category: "Materials & Tools" },
  { num: 7, title: "Long, Thin Brushstrokes", category: "Beginner Brushstrokes" },
  { num: 8, title: "Long, Wide Brushstroke", category: "Beginner Brushstrokes" },
  { num: 9, title: "Short, Thin Brushstrokes", category: "Beginner Brushstrokes" },
  { num: 10, title: "Short, Wide Brushstroke", category: "Beginner Brushstrokes" },
  { num: 11, title: "Long, Thin, Wavy Brushstrokes", category: "Beginner Brushstrokes" },
  { num: 12, title: "Long, Wide, Wavy Brushstrokes", category: "Beginner Brushstrokes" },
  { num: 13, title: "Long, Wide Ribbon Brushstrokes", category: "Beginner Brushstrokes" },
  { num: 14, title: "Long, Thin Ribbon Brushstrokes", category: "Beginner Brushstrokes" },
  { num: 15, title: "Spiral Brushstrokes – Thin, Medium, & Wide", category: "Beginner Brushstrokes" },
  { num: 16, title: "Dot Paintbrush Marks", category: "Beginner Brushstrokes" },
  { num: 17, title: "Wide to Thin Brushstrokes", category: "Beginner Brushstrokes" },
  { num: 18, title: '"Sun"', category: "Ancient Chinese Script" },
  { num: 19, title: '"One"', category: "Ancient Chinese Script" },
  { num: 20, title: '"Dawn"', category: "Ancient Chinese Script" },
  { num: 21, title: '"A Little Bit"', category: "Ancient Chinese Script" },
  { num: 22, title: '"Water"', category: "Ancient Chinese Script" },
  { num: 23, title: '"Tree"', category: "Ancient Chinese Script" },
  { num: 24, title: '"To Grow"', category: "Ancient Chinese Script" },
  { num: 25, title: '"Good Morning"', category: "Ancient Chinese Script" },
  { num: 26, title: "Bamboo Leaves", category: "Ancient Chinese Script" },
  { num: 27, title: '"Moon"', category: "Ancient Chinese Script" },
  { num: 28, title: '"Bird"', category: "Ancient Chinese Script" },
  { num: 29, title: '"Mountain"', category: "Ancient Chinese Script" },
  { num: 30, title: '"Fish"', category: "Ancient Chinese Script" },
  { num: 31, title: "Tadpoles", category: "Sumi-e Painting" },
  { num: 32, title: "Grass", category: "Sumi-e Painting" },
  { num: 33, title: "Notches & Lines", category: "Sumi-e Painting" },
  { num: 34, title: "Bamboo Branches & Leaves", category: "Sumi-e Painting" },
  { num: 35, title: "Circular Curves, Spirals", category: "Sumi-e Painting" },
  { num: 36, title: "Pig's Head", category: "Sumi-e Painting" },
  { num: 37, title: "Snail", category: "Sumi-e Painting" },
  { num: 38, title: "Dragonfly", category: "Sumi-e Painting" },
  { num: 39, title: "Fish & Lily Pond", category: "Sumi-e Painting" },
  { num: 40, title: "Mountain", category: "Sumi-e Painting" },
  { num: 41, title: "Lizard", category: "Sumi-e Painting" },
  { num: 42, title: "Spider", category: "Sumi-e Painting" },
  { num: 43, title: "Shark", category: "Sumi-e Painting" },
  { num: 44, title: "Crane's Head", category: "Sumi-e Painting" },
  { num: 45, title: "Sleepy Cat", category: "Sumi-e Painting" },
  { num: 46, title: "Rocks", category: "Sumi-e Painting" },
  { num: 47, title: "Swimming Fish", category: "Sumi-e Painting" },
  { num: 48, title: "Penguin", category: "Sumi-e Painting" },
  { num: 49, title: "Rabbit", category: "Sumi-e Painting" },
  { num: 50, title: "Seashells", category: "Sumi-e Painting" },
  { num: 51, title: "Bee – Two Colors", category: "Sumi-e Painting" },
  { num: 52, title: "Butterfly – Two Colors", category: "Sumi-e Painting" },
  { num: 53, title: "Tulip – Two Colors", category: "Sumi-e Painting" },
  { num: 54, title: "Ink Wash", category: "Sumi-e Painting" },
  { num: 55, title: "Nature Landscape – Two Colors", category: "Sumi-e Painting" },
  { num: 56, title: "Nature Bird & Branches – Multiple Colors", category: "Sumi-e Painting" },
  { num: 57, title: "Name Chop (Seal, Artist Signature)", category: "Sumi-e Painting" },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Materials & Tools": "bg-honey/10 text-honey",
  "Beginner Brushstrokes": "bg-kids-blue/10 text-kids-blue",
  "Ancient Chinese Script": "bg-creative-pink/10 text-creative-pink",
  "Sumi-e Painting": "bg-sage/10 text-sage",
};

const GALLERY_IMAGES = [
  { src: "/images/painting/original-06.jpg", alt: "Painting Curriculum for Children book cover", caption: "57 Master Brushstroke Lessons, Inspired by Sumi-e & Ancient Chinese Script" },
  { src: "/images/painting/original-02.jpg", alt: "Painting shelf with materials", caption: "A prepared painting environment for independent exploration" },
  { src: "/images/painting/original-13.jpg", alt: "Children painting outdoors with watercolors", caption: "Painting happens everywhere — indoors and out" },
  { src: "/images/painting/original-03.jpg", alt: "Children painting in a classroom", caption: "Real classrooms, real brushstrokes, real joy" },
  { src: "/images/painting/original-08.jpg", alt: "Children practicing brushstrokes", caption: "Foundation brushstrokes build confident painters" },
  { src: "/images/painting/original-09.jpg", alt: "Curriculum spread showing bamboo technique", caption: "Step-by-step technique demonstrations" },
  { src: "/images/painting/original-04.jpg", alt: "Teacher with children painting", caption: "Observation and guidance, not direction" },
];

export function PaintingClient({ siteMapEntry }: PaintingClientProps) {
  const product = getProductById("painting-curriculum");
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
        overline="Curriculum"
        headline={
          <>
            57 painting studios that turn{" "}
            <span className="text-honey italic">first brushstrokes</span> into{" "}
            <span className="text-honey italic">confident expression.</span>
          </>
        }
        subheadline="A Science Art Method™ Painting Studio Application by Nature of Art®. Comprehensive curriculum organized by increasing brushstroke and material complexity — inspired by Sumi-e and Ancient Chinese Script."
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "See What's Inside", href: "#whats-included" }}
        trustBadges={[
          product.ageRange ? `Ages ${product.ageRange}` : undefined,
          product.format,
        ].filter(Boolean) as string[]}
        annotation="Every child is an artist."
        annotationAuthor="Pablo Picasso"
        image={"/images/painting/original-06.jpg"}
        imageAlt="Painting Curriculum for Children book cover"
      />

      <SectionTransition variant="swatches" height="md" />

      {/* Trust Bar */}
      <section className="border-y border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-charcoal/60">
            {[
              "Paperback + Digital options",
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
              "You want to offer painting, but it quickly becomes messy, random, or overly adult-directed. You are not sure which materials to buy, what order to teach skills, or how to step back without losing structure.",
              "You have seen beautiful Montessori art environments online, but replicating them feels overwhelming. You need a system, not another Pinterest board.",
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
                A sequenced system for confident instruction
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {[
              {
                title: "Prepare the environment",
                description:
                  "Learn exactly which materials to select, how to organize them, and how to maintain the painting shelf for independent use.",
              },
              {
                title: "Present the invitation",
                description:
                  "Use clear, simple presentations that spark curiosity and respect the child's autonomy.",
              },
              {
                title: "Let the child explore",
                description:
                  "Step back and observe. The curriculum teaches you what to look for and how to respond.",
              },
              {
                title: "Observe growth",
                description:
                  "Document developmental progress and know exactly when to introduce the next studio experience.",
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
          PAINTING GALLERY
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ivory">
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Inside the Studio
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                Painting in Action
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Real children, real classrooms, real brushstroke exploration. These images capture the hands-on learning that happens when paint meets the prepared environment.
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
                Everything you need to teach with confidence — from first presentation to advanced exploration.
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
          57 STUDIOS AT A GLANCE
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
                57 Studios at a Glance
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Organized by increasing brushstroke and material complexity. From paintbrush anatomy to Sumi-e mastery.
              </p>
            </div>
          </ScrollReveal>

          {["Materials & Tools", "Beginner Brushstrokes", "Ancient Chinese Script", "Sumi-e Painting"].map(
            (category) => {
              const lessons = PAINTING_LESSONS.filter((l) => l.category === category);
              return (
                <div key={category} className="mb-10 last:mb-0">
                  <ScrollReveal>
                    <h3 className="text-sm font-semibold text-charcoal/60 uppercase tracking-wider mb-4">
                      {category}
                    </h3>
                  </ScrollReveal>
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.03}>
                    {lessons.map((lesson) => (
                      <StaggerItem key={lesson.num}>
                        <div className="flex items-center gap-3 bg-canvas/60 border border-linen rounded-lg px-4 py-3 hover:bg-canvas transition-colors">
                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              CATEGORY_COLORS[category]
                            }`}
                          >
                            {lesson.num}
                          </span>
                          <span className="text-sm text-charcoal/90 font-medium leading-snug">
                            {lesson.title}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              );
            }
          )}
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
                    "Montessori guides who want a sequenced painting program",
                    "Homeschool parents seeking structure and confidence",
                    "Art teachers new to Montessori philosophy",
                    "Early childhood educators who value process over product",
                    "School leaders building a comprehensive art curriculum",
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
                    "Those looking for craft projects with predetermined outcomes",
                    "Educators who prefer teacher-directed art with no child autonomy",
                    "Anyone seeking a one-time activity book rather than a curriculum",
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
                  src="/images/clay-modeling/original-14.jpg"
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
                    Spramani Elaun is a Montessori art educator and founder of Nature of Art®. She has spent over two decades refining curriculum in real Montessori classrooms.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Her Science Art Method™ bridges the gap between art pedagogy and Montessori practice, giving educators a clear sequence for bringing visual arts into the prepared environment.
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
            question: "Do I need to be a Montessori teacher to use this?",
            answer:
              "No. While the curriculum is designed with Montessori principles in mind, homeschool parents, art teachers, and early childhood educators of all backgrounds will find it accessible and adaptable.",
          },
          {
            question: "What age range is this for?",
            answer:
              "The curriculum is designed for children ages 3–12, with studio experiences organized by increasing brushstroke and material complexity.",
          },
          {
            question: "What materials do I need?",
            answer:
              "You will need basic watercolor and tempera paints, quality brushes in various sizes, watercolor paper, palettes, and a few organization tools. A complete materials list is included with the curriculum.",
          },
          {
            question: "Is this a digital download or a printed book?",
            answer:
              "Both options are available. You can purchase the spiral-bound printed book with free U.S. shipping, or the digital PDF for instant download.",
          },
          {
            question: "Can I use this in a classroom setting?",
            answer:
              "Absolutely. The curriculum is designed for both classroom and homeschool use.",
          },
          {
            question: "What is the refund policy?",
            answer:
              "We offer a 30-day satisfaction guarantee for the printed version only. Digital curriculum purchases cannot be refunded.",
          },
          {
            question: "Does this curriculum certify me to teach the Science Art Method™?",
            answer:
              "No. Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™ certification program.",
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
        title="Start teaching painting with confidence"
        description="Explore the Kids Painting curriculum and bring structured, joyful art experiences into your environment."
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "View All Curriculum", href: "/curriculum" }}
      />
    </>
  );
}
