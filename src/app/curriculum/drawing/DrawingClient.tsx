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

interface DrawingClientProps {
  siteMapEntry?: ExistingPageEntry;
}

const EARLY_CHILDHOOD_LESSONS = [
  { num: 1, title: "Doodling Lines" },
  { num: 2, title: "Zig Zag & Scratch Art" },
  { num: 3, title: "Crayon Leaf Rubbing" },
  { num: 4, title: "Curves Into Circle" },
  { num: 5, title: "Guided – Line to Straight Lines" },
  { num: 6, title: "Stick People" },
  { num: 7, title: "Guided – Snowflake Drawing" },
  { num: 8, title: "Guided – Leaf Drawing" },
  { num: 9, title: "Tracing – Geometric Shapes" },
  { num: 10, title: "Guided – Line to Round Shapes" },
  { num: 11, title: "Tracing – Silly Object" },
  { num: 12, title: "Guided – Hand Zen Doodle" },
  { num: 13, title: "Matisse Organic Shapes & Collage" },
  { num: 14, title: "Worksheet – Lines To Curve Shapes" },
  { num: 15, title: "Fish Drawings" },
  { num: 16, title: "Art Element Handouts – Line, Shape, Texture" },
];

const ELEMENTARY_LESSONS = [
  { num: 1, title: "Sketching" },
  { num: 2, title: "Guided – Drawing Geometric Shapes" },
  { num: 3, title: "Doodling Lines" },
  { num: 4, title: "Curves Into Circles" },
  { num: 5, title: "Guided – Line to Round Shapes" },
  { num: 6, title: "Guided – Line to Straight Lines" },
  { num: 7, title: "Zig Zag & Scratch Art" },
  { num: 8, title: "Stick People" },
  { num: 9, title: "Guided – Snowflake Drawing" },
  { num: 10, title: "Guided – Hand Zen Doodle" },
  { num: 11, title: "Crayon Leaf Rubbing" },
  { num: 12, title: "Worksheet – Lines To Curve Shapes" },
  { num: 13, title: "Guided – Leaf Drawing" },
  { num: 14, title: "Tracing – Geometric Shapes" },
  { num: 15, title: "Space Conundrum" },
  { num: 16, title: "Tracing – Silly Object" },
  { num: 17, title: "Spiral" },
  { num: 18, title: "Spiral Snake" },
  { num: 19, title: "The Golden Ratio" },
  { num: 20, title: "Horizon Line" },
  { num: 21, title: "Seed Shapes & Roots" },
  { num: 22, title: "Warm and Cool Color Discussion" },
  { num: 23, title: "Mandala Coloring" },
  { num: 24, title: "Complementary Color Discussion" },
  { num: 25, title: "Geometric Building Design" },
  { num: 26, title: "Concentric Circles" },
  { num: 27, title: "Mandala Design" },
  { num: 28, title: "Symmetry Discussion" },
  { num: 29, title: "Sketch Mirror Balance" },
  { num: 30, title: "Matisse Organic Shapes & Collage" },
  { num: 31, title: "Drawing Ellipses" },
  { num: 32, title: "Beetle Bug Drawing" },
  { num: 33, title: "Pencil Doodles" },
  { num: 34, title: "Free Hand Sketch Proportions" },
  { num: 35, title: "Fish Drawings" },
  { num: 36, title: "Pencil Value Shading" },
  { num: 37, title: "3D Crystal Coloring" },
  { num: 38, title: "Bee Drawing" },
  { num: 39, title: "Still Life" },
  { num: 40, title: "One Point Perspective" },
  { num: 41, title: "3D Cube" },
  { num: 42, title: "Nature Journaling & Handouts" },
  { num: 43, title: "3D Drawings & Form Handouts" },
  { num: 44, title: "Art Element Handouts – Line, Shape, Texture, Form" },
];

const GALLERY_IMAGES = [
  { src: "/images/drawing/original-04.jpg", alt: "Drawing Early Childhood Curriculum book cover", caption: "Early Childhood Edition — 16 foundational lessons" },
  { src: "/images/drawing/original-11.jpg", alt: "Drawing Elementary Curriculum book cover", caption: "Elementary Edition — 47 sequential lessons" },
  { src: "/images/drawing/original-06.jpg", alt: "Student Hand Zen doodle artwork", caption: "Student artwork emerges through guided exploration" },
  { src: "/images/drawing/original-03.jpg", alt: "Curriculum spread showing Spiral Snake lesson", caption: "Step-by-step technique demonstrations" },
  { src: "/images/drawing/original-16.jpg", alt: "Children drawing in a classroom", caption: "Real classrooms, real engagement" },
  { src: "/images/drawing/original-15.jpg", alt: "Crayon curves and circles exercise", caption: "Foundation skills build confident mark-making" },
  { src: "/images/drawing/original-13.jpg", alt: "The 5 Domains of Art Curriculum", caption: "Drawing is one of five core art domains" },
];

export function DrawingClient({ siteMapEntry }: DrawingClientProps) {
  const product = getProductById("drawing-curriculum");
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
            Drawing studios that turn{" "}
            <span className="text-honey italic">scribbles</span> into{" "}
            <span className="text-honey italic">confident marks.</span>
          </>
        }
        subheadline="A Science Art Method™ Drawing Curriculum by Nature of Art®. Two editions — Early Childhood and Elementary — each organized by increasing material and skill complexity. From first marks to independent visual storytelling."
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "See What's Inside", href: "#whats-included" }}
        trustBadges={[
          "Ages 3–12 years",
          product.format,
          "Two Editions Available",
        ].filter(Boolean) as string[]}
        annotation="Every artist was first an amateur."
        annotationAuthor="Ralph Waldo Emerson"
        image={"/images/drawing/original-11.jpg"}
        imageAlt="Drawing Curriculum For Children book cover"
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
              "You want to teach drawing, but you are not sure where to begin. Children draw stick figures and then seem to stop progressing. You need a sequence, not just encouragement.",
              "You have seen beautiful children's drawings online, but replicating that skill feels mysterious. You need a system that breaks drawing down into observable, teachable steps.",
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
                  "Learn exactly which drawing materials to select, how to organize them, and how to maintain the drawing shelf for independent use. All tools are beginner level.",
              },
              {
                title: "Present the invitation",
                description:
                  "Use clear, simple presentations that spark curiosity. Each lesson includes demonstration steps, visual examples, and teacher preparation notes.",
              },
              {
                title: "Let the child explore",
                description:
                  "Step back and observe. The curriculum supports independent drawing exploration rather than copying images or producing predetermined outcomes.",
              },
              {
                title: "Observe growth",
                description:
                  "Document developmental progress through sequenced studios. Know exactly when a child is ready for the next drawing challenge — from lines to perspective.",
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
          DRAWING GALLERY
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
                Drawing in Action
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Real children, real classrooms, real mark-making exploration. These images capture the progression from first lines to confident visual expression.
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
                Everything you need to teach drawing with confidence — from first marks to advanced composition.
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
          EARLY CHILDHOOD SCOPE
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-paper">
        <div className="absolute inset-0 honeycomb-accent opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Early Childhood Edition
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                16 Foundational Studios
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Best for children ages 3–6 who are just beginning to explore mark-making. Builds from lines to shapes to simple representational drawing.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.04}>
            {EARLY_CHILDHOOD_LESSONS.map((lesson) => (
              <StaggerItem key={lesson.num}>
                <div className="flex items-center gap-3 bg-canvas/60 border border-linen rounded-lg px-4 py-3 hover:bg-canvas transition-colors">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-kids-blue/10 text-kids-blue">
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
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          ELEMENTARY SCOPE
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-ivory">
        <div className="absolute inset-0 honeycomb-accent opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Elementary Edition
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
                47 Sequential Studios
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Best for children ages 6–12 who are ready for more complex drawing concepts. From geometric shapes to perspective, shading, and still life.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.03}>
            {ELEMENTARY_LESSONS.map((lesson) => (
              <StaggerItem key={lesson.num}>
                <div className="flex items-center gap-3 bg-canvas/60 border border-linen rounded-lg px-4 py-3 hover:bg-canvas transition-colors">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-creative-pink/10 text-creative-pink">
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
      </section>

      <SectionTransition variant="swatches" height="md" />

      {/* ═══════════════════════════════════════════════════════════════
          DUAL PRICING CTA — 4 variants
          ═══════════════════════════════════════════════════════════════ */}
      {product.priceVariants && product.priceVariants.length > 1 && (
        <section className="py-16 sm:py-20 bg-canvas">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-3">
                  Choose Your Edition & Format
                </h2>
                <p className="text-charcoal/70">
                  Select the edition and format that works best for your teaching environment.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.priceVariants.map((variant, i) => (
                <ScrollReveal key={variant.format} delay={i * 0.08}>
                  <div className="bg-paper border border-linen rounded-card p-5 sm:p-6 text-center h-full flex flex-col">
                    <p className="text-sm font-medium text-charcoal/60 mb-2">{variant.format}</p>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
                      {variant.price}
                    </p>
                    <div className="flex-1" />
                    <Link
                      href={fallbackUrl || "#"}
                      className="block w-full text-center rounded-button bg-ink px-4 py-3 text-sm font-semibold text-paper hover:bg-ink-dark transition-colors"
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
                    "Montessori guides who want a sequenced drawing program",
                    "Homeschool parents seeking structure and confidence",
                    "Art teachers new to Montessori philosophy",
                    "Early childhood educators who value process over product",
                    "School leaders building a comprehensive art curriculum",
                    "Parents who want to support their child's natural drawing development",
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
                  src="/images/drawing/original-08.jpg"
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
                    Spramani Elaun is an artist, homeschool mom, art teacher, and art studio owner. When she decided to teach art to children over twenty years ago, she struggled to find any art curriculum appropriate for children.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Today, she has taught tens of thousands of children art through her traveling art studio, attending some of the largest education conferences in all pedagogies, hosting the largest homeschool conference art studio nationally, and after-school visual art programming.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    She became really good at teaching children, which led her to write 9 art education books. She now travels internationally and trains teachers how to bring art literacy into their classrooms. She has spent thousands of hours perfecting art lessons for children of all ages.
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
            question: "What age range is each edition for?",
            answer:
              "The Early Childhood edition is designed for ages 3–6 with 16 foundational studios. The Elementary edition is designed for ages 6–12 with 47 sequential studios that build complexity.",
          },
          {
            question: "What materials do I need?",
            answer:
              "All tools are beginner level. 80% of all lessons are done with easy-to-find drawing mediums like crayons, pencils, and markers. A complete materials list is included with every lesson.",
          },
          {
            question: "Is this a digital download or a printed book?",
            answer:
              "Both options are available for each edition. You can purchase the spiral-bound printed book with free U.S. shipping, or the digital PDF for instant download.",
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
        title="Start teaching drawing with confidence"
        description="Explore the Drawing Curriculum and bring structured, joyful visual art experiences into your environment."
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "View All Curriculum", href: "/curriculum" }}
      />
    </>
  );
}
