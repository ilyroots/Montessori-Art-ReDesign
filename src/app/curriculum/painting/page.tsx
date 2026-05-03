import Link from "next/link";
import { ArrowRight, Check, BookOpen, Video, FileText, Users, Clock, Paintbrush, GraduationCap } from "lucide-react";
import { getProductById } from "@/config/products";
import { BuyButton } from "@/components/commerce/BuyButton";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Painting Curriculum — Montessori Art Lessons",
  description:
    "A sequenced curriculum that introduces brushstrokes, color, materials, and process step by step. For Montessori guides, homeschool parents, and art educators.",
});

const product = getProductById("painting-curriculum")!;

const faqItems = [
  {
    question: "Do I need to be a Montessori teacher to use this?",
    answer:
      "No. While the curriculum is designed with Montessori principles in mind, homeschool parents, art teachers, and early childhood educators of all backgrounds will find it accessible and adaptable.",
  },
  {
    question: "What age range is this for?",
    answer:
      "The curriculum is designed for children ages 3–12, with specific lesson adaptations for early childhood (3–6) and elementary (6–12) levels.",
  },
  {
    question: "What materials do I need?",
    answer:
      "You will need basic watercolor and tempera paints, quality brushes in various sizes, watercolor paper, palettes, and a few organization tools. A complete material list is included with the curriculum.",
  },
  {
    question: "Is this a digital download?",
    answer:
      "Yes. You receive instant access to downloadable lesson plans, printable resources, and video presentations.",
  },
  {
    question: "Can I use this in a classroom setting?",
    answer:
      "Absolutely. The curriculum is designed for both classroom and homeschool use. Many Montessori schools use it as their primary painting program.",
  },
];

const testimonials = [
  {
    quote:
      "Finally, a painting curriculum that feels prepared and purposeful. My students are more confident and creative than ever.",
    author: "Maria T.",
    role: "Montessori Guide",
    location: "Portland, OR",
  },
  {
    quote:
      "I was overwhelmed by art before this. Now I have a clear sequence and my children ask to paint every day.",
    author: "Jennifer L.",
    role: "Homeschool Mom",
    location: "Austin, TX",
  },
  {
    quote:
      "The lesson videos alone are worth the price. Spramani explains each presentation with such clarity.",
    author: "David R.",
    role: "Art Specialist",
    location: "Chicago, IL",
  },
];

export default function PaintingCurriculumPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-3">
                Curriculum
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-espresso leading-[1.05] mb-6">
                Painting lessons that feel{" "}
                <span className="italic">prepared, purposeful,</span> and
                child-led.
              </h1>
              <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-xl mb-8">
                A sequenced curriculum that introduces brushstrokes, color,
                materials, and process step by step. No more messy, random, or
                overly adult-directed painting sessions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <BuyButton
                  productId={product.id}
                  label={`Get Access — ${product.price}`}
                />
                <Link
                  href="#whats-included"
                  className="inline-flex items-center justify-center rounded-button border border-espresso px-8 py-4 text-base font-semibold text-espresso hover:bg-espresso hover:text-paper transition-colors"
                >
                  See What&apos;s Inside
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-charcoal/60">
                <span className="flex items-center gap-1">
                  <Users size={14} /> Ages {product.ageRange}
                </span>
                <span className="flex items-center gap-1">
                  <Video size={14} /> Video lessons included
                </span>
                <span className="flex items-center gap-1">
                  <FileText size={14} /> Printable resources
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-card bg-canvas border border-linen overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                  <div className="text-center">
                    <Paintbrush size={64} className="mx-auto mb-4" />
                    <p className="text-sm font-medium">Curriculum Preview</p>
                    <p className="text-xs mt-1">Painting materials and child artwork</p>
                  </div>
                </div>
              </div>
              {product.badge && (
                <div className="absolute -top-3 -right-3 bg-terracotta text-paper text-xs font-bold px-4 py-2 rounded-full shadow-soft">
                  {product.badge}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-charcoal/60">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-sage" />
              Instant digital access
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-sage" />
              Lifetime updates
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-sage" />
              30-day satisfaction guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-sage" />
              Used in 20+ countries
            </span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-6">
            Does this sound familiar?
          </h2>
          <div className="space-y-4 text-charcoal/80 leading-relaxed">
            <p>
              You want to offer painting, but it quickly becomes messy, random, or
              overly adult-directed. You are not sure which materials to buy, what
              order to teach skills, or how to step back without losing structure.
            </p>
            <p>
              You have seen beautiful Montessori art environments online, but
              replicating them feels overwhelming. You need a system, not another
              Pinterest board.
            </p>
          </div>
        </div>
      </section>

      {/* Solution / Method */}
      <section className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-2">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-6">
                A sequenced system for confident painting instruction
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Prepare the shelf",
                    desc: "Learn exactly which materials to select, how to organize them, and how to maintain the environment.",
                  },
                  {
                    title: "Present the invitation",
                    desc: "Use clear, simple presentations that spark curiosity and respect the child's autonomy.",
                  },
                  {
                    title: "Let the child explore",
                    desc: "Step back and observe. The curriculum teaches you what to look for and how to respond.",
                  },
                  {
                    title: "Observe growth",
                    desc: "Document developmental progress and know exactly when to introduce the next lesson.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-terracotta">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-espresso mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-charcoal/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-paper border border-linen rounded-card p-8">
              <div className="aspect-square bg-canvas rounded-card-sm flex items-center justify-center">
                <div className="text-center text-charcoal/30">
                  <Paintbrush size={48} className="mx-auto mb-3" />
                  <p className="text-sm font-medium">Method Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="whats-included" className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-4">
              What&apos;s Inside the Painting Curriculum
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Everything you need to teach painting with confidence — from first
              brushstrokes to advanced color exploration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen size={22} />,
                title: "12 Sequenced Lessons",
                desc: "From brush introduction to watercolor techniques to creative expression.",
              },
              {
                icon: <Video size={22} />,
                title: "Video Presentations",
                desc: "Watch Spramani demonstrate each lesson with real children in a real classroom.",
              },
              {
                icon: <FileText size={22} />,
                title: "Printable Lesson Plans",
                desc: "Downloadable PDFs with objectives, materials, procedure, and extensions.",
              },
              {
                icon: <Users size={22} />,
                title: "Observation Guides",
                desc: "Know what to look for and how to document each child's artistic growth.",
              },
              {
                icon: <Clock size={22} />,
                title: "Material Lists",
                desc: "Exact product recommendations with links and budget-friendly alternatives.",
              },
              {
                icon: <Check size={22} />,
                title: "Troubleshooting Guide",
                desc: "Solutions for common challenges — messy sessions, reluctant painters, and more.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center mb-4 text-terracotta">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-espresso mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-6">
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
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso/40 mb-6">
                Who this is not for
              </h2>
              <ul className="space-y-4">
                {[
                  "Those looking for craft projects with predetermined outcomes",
                  "Educators who prefer teacher-directed art with no child autonomy",
                  "Anyone seeking a one-time activity book rather than a curriculum",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-charcoal/40 text-lg leading-none shrink-0">
                      &times;
                    </span>
                    <span className="text-charcoal/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Spramani */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square max-w-sm mx-auto relative rounded-card bg-canvas border border-linen overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                  <div className="text-center">
                    <GraduationCap size={64} className="mx-auto mb-4" />
                    <p className="text-sm font-medium">Spramani Elaun</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-2">
                Your Instructor
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-4">
                Created by Spramani Elaun
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Spramani has spent over two decades refining this curriculum in
                real Montessori classrooms. Every lesson has been tested, observed,
                and adjusted based on how children actually respond.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                She holds certifications in Montessori education and has trained
                thousands of teachers worldwide. Her work bridges the gap between
                art pedagogy and Montessori practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials items={testimonials} title="What teachers are saying" />

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Final CTA */}
      <FinalCTA
        title="Start teaching painting with confidence"
        description="Join thousands of educators who have transformed their art environment with the Nature of Art Painting Curriculum."
        primaryCta={{ label: `Get Access — ${product.price}`, href: "#" }}
        secondaryCta={{ label: "View All Curriculum", href: "/curriculum" }}
      />
    </>
  );
}
