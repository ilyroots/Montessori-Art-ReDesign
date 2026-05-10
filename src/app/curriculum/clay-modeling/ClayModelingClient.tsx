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

interface ClayModelingClientProps {
  siteMapEntry?: ExistingPageEntry;
}

const CLAY_LESSONS = [
  { num: 1, title: "Introduction to Man's First Tool", category: "Foundation" },
  { num: 2, title: "Kneading Clay – Ceramic Basics", category: "Foundation" },
  { num: 3, title: "Sphere – Geometric Round Form", category: "Beginner Forms" },
  { num: 4, title: "Log to Snake", category: "Beginner Forms" },
  { num: 5, title: "Spaghetti – Length Experiment", category: "Beginner Forms" },
  { num: 6, title: "Egg – Organic Round Form", category: "Beginner Forms" },
  { num: 7, title: "Pancake – Flat Form", category: "Beginner Forms" },
  { num: 8, title: "Cylinder – Geometric Round and Flat Form", category: "Beginner Forms" },
  { num: 9, title: "Cone – Geometric Round and Flat Form", category: "Beginner Forms" },
  { num: 10, title: "Cube – Geometric Flat Form", category: "Beginner Forms" },
  { num: 11, title: "Coil to Spiral – Geometric Round Form", category: "Beginner Forms" },
  { num: 12, title: "Cookie Cutter Shapes – Embellishing", category: "Beginner Forms" },
  { num: 13, title: "Attaching & Joining", category: "Beginner Forms" },
  { num: 14, title: "Coil to Snail – Organic Form", category: "Beginner Forms" },
  { num: 15, title: "Pinch Pot – Hand Forming", category: "Beginner Forms" },
  { num: 16, title: "Bird, Eggs, Nest – Attaching and Texture", category: "Beginner Forms" },
  { num: 17, title: "Human – Hand Modeling", category: "Intermediate Sculpture" },
  { num: 18, title: "Mouse – Proportions and Attaching", category: "Intermediate Sculpture" },
  { num: 19, title: "Sea Turtle – Proportions, Carving, and Texture", category: "Intermediate Sculpture" },
  { num: 20, title: "Impressions with Trace Fossil Seashells", category: "Intermediate Sculpture" },
  { num: 21, title: "Fruits – Attaching and Texture", category: "Intermediate Sculpture" },
  { num: 22, title: "Coil Pot", category: "Advanced Construction" },
  { num: 23, title: "Slabs", category: "Advanced Construction" },
  { num: 24, title: "Leaf – Impressions", category: "Advanced Construction" },
  { num: 25, title: "Fish – Textures", category: "Advanced Construction" },
  { num: 26, title: "Landscape – Relief", category: "Advanced Construction" },
  { num: 27, title: "Slab Box – 4 Walls", category: "Advanced Construction" },
  { num: 28, title: "Canoe – Carving", category: "Advanced Construction" },
  { num: 29, title: "Luminary – Tea Light Candle Holder", category: "Advanced Construction" },
];

const GALLERY_IMAGES = [
  { src: "/images/clay-modeling/original-12.jpg", alt: "Collection of clay forms on display tiles", caption: "29 studio forms, sequenced from simple to complex" },
  { src: "/images/clay-modeling/original-04.jpg", alt: "Child creating a colorful clay figure", caption: "Children engage with clay independently" },
  { src: "/images/clay-modeling/original-10.jpg", alt: "Clay turtle sculpture", caption: "Sculptural exploration emerges over time" },
  { src: "/images/clay-modeling/original-08.jpg", alt: "Children working with clay in a classroom", caption: "Real classrooms, real engagement" },
  { src: "/images/clay-modeling/original-06.jpg", alt: "Curriculum page showing Sequence 11", caption: "Step-by-step technique demonstrations" },
  { src: "/images/clay-modeling/original-07.jpg", alt: "Curriculum page showing Sequence 22", caption: "Project descriptions and teacher prep" },
  { src: "/images/clay-modeling/original-13.jpg", alt: "Child's hands shaping clay", caption: "Fine motor development through tactile exploration" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Foundation: "bg-honey/10 text-honey",
  "Beginner Forms": "bg-kids-blue/10 text-kids-blue",
  "Intermediate Sculpture": "bg-creative-pink/10 text-creative-pink",
  "Advanced Construction": "bg-sage/10 text-sage",
};

export function ClayModelingClient({ siteMapEntry }: ClayModelingClientProps) {
  const product = getProductById("clay-modeling-curriculum");
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
            29 clay studio experiences that build{" "}
            <span className="text-honey italic">form, confidence,</span> and{" "}
            <span className="text-honey italic">sculptural thinking.</span>
          </>
        }
        subheadline="A Science Art Method™ Clay Modeling Curriculum by Nature of Art®. Structured lessons organized by increasing material handling and sculptural complexity — from first touch to independent three-dimensional exploration."
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "See What's Inside", href: "#whats-included" }}
        trustBadges={[
          product.ageRange ? `Ages ${product.ageRange}` : undefined,
          product.format,
        ].filter(Boolean) as string[]}
        annotation="The hand is the instrument of the mind."
        annotationAuthor="Maria Montessori"
        image={"/images/clay-modeling/original-05.jpg"}
        imageAlt="Kids Clay Modeling Curriculum book cover"
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
              "You want to offer clay in your classroom, but you are not sure where to begin. The materials feel messy, the techniques seem advanced, and you worry children will just make a mess rather than learn.",
              "You have seen beautiful clay projects online, but replicating them feels overwhelming. You need a clear sequence — not another Pinterest board of adult-directed crafts.",
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
                  "Learn exactly which clay materials to select, how to organize them, and how to maintain the clay workspace for independent use. 80% of lessons use easy-to-find modeling clay.",
              },
              {
                title: "Present the invitation",
                description:
                  "Use clear, simple presentations that spark curiosity. Each lesson includes demonstration photos, technique steps, and teacher preparation notes.",
              },
              {
                title: "Let the child explore",
                description:
                  "Step back and observe. The curriculum supports independent clay modeling rather than copying forms or producing predetermined outcomes.",
              },
              {
                title: "Observe growth",
                description:
                  "Document developmental progress through 29 sequenced studios. Know exactly when a child is ready for the next sculptural challenge.",
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
          CLAY GALLERY — Custom immersive section
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
                Clay in Action
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Real children, real classrooms, real sculptural exploration. These images capture the hands-on learning that happens when clay meets the prepared environment.
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
                Everything you need to teach clay modeling with confidence — from first presentation to advanced sculptural exploration.
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
          29 STUDIOS AT A GLANCE — Custom scope section
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
                29 Studios at a Glance
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Organized by increasing material handling and sculptural complexity. Each studio builds upon the last.
              </p>
            </div>
          </ScrollReveal>

          {/* Category tabs */}
          {["Foundation", "Beginner Forms", "Intermediate Sculpture", "Advanced Construction"].map(
            (category) => {
              const lessons = CLAY_LESSONS.filter((l) => l.category === category);
              return (
                <div key={category} className="mb-10 last:mb-0">
                  <ScrollReveal>
                    <h3 className="text-sm font-semibold text-charcoal/60 uppercase tracking-wider mb-4">
                      {category}
                    </h3>
                  </ScrollReveal>
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.04}>
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
                    "Montessori guides who want a sequenced clay modeling program",
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
          ABOUT INSTRUCTOR — With real photo
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
                    Spramani Elaun is an artist, homeschool mom, art teacher, and art studio owner. When she decided to teach art to children over twenty years ago, she struggled to find any art curriculum appropriate for children.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Today, she has taught tens of thousands of children art through her traveling art studio, attending some of the largest education conferences in all pedagogies, hosting the largest homeschool conference art studio nationally, and after-school visual art programming.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    She became really good at teaching children, which led her to write 7 art education books. She now travels internationally and trains teachers how to bring art literacy into their classrooms. She has spent thousands of hours perfecting art lessons for children of all ages.
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
              "The curriculum is designed for children ages 3–12, with studio experiences organized by increasing material handling and sculptural complexity.",
          },
          {
            question: "What materials do I need?",
            answer:
              "All tools are beginner level. 80% of all lessons are done with easy-to-find modeling clay. 20% of the lessons recommend earth pottery clay, but can be done with air-dry modeling clay. A complete materials list is included with every lesson.",
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
        title="Start teaching clay modeling with confidence"
        description="Explore the Kids Clay Modeling curriculum and bring structured, joyful sculptural experiences into your environment."
        primaryCta={{ label: primaryCtaLabel, href: fallbackUrl || "#" }}
        secondaryCta={{ label: "View All Curriculum", href: "/curriculum" }}
      />
    </>
  );
}
