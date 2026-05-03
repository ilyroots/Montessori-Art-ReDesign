import Link from "next/link";
import { ArrowRight, Check, Award, BookOpen, Video, Users, Clock, Shield, X } from "lucide-react";
import { getProductById } from "@/config/products";
import { BuyButton } from "@/components/commerce/BuyButton";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Art Teaching Blueprint Certification",
  description:
    "Professional certification for educators who want to teach children visual arts with confidence, sequence, and developmental understanding.",
});

const product = getProductById("art-teaching-blueprint")!;

const faqItems = [
  {
    question: "What is the Art Teaching Blueprint Certification?",
    answer:
      "It is a comprehensive professional development program that certifies educators to teach visual arts to children using Montessori-aligned, developmentally appropriate methods.",
  },
  {
    question: "How long does the program take?",
    answer:
      "Most participants complete the program in 8–12 weeks, studying at their own pace. You have lifetime access to all materials.",
  },
  {
    question: "Is this a Montessori certification?",
    answer:
      "This is an art education certification grounded in Montessori principles. It does not replace an AMI or AMS Montessori credential, but it complements any early childhood or elementary teaching background.",
  },
  {
    question: "Do I receive a physical certificate?",
    answer:
      "Yes. Upon successful completion, you receive a digital certificate for immediate use and a physical certificate mailed to your address.",
  },
  {
    question: "Can I use this certification to get a job?",
    answer:
      "Many schools specifically seek teachers with art specialization. This certification demonstrates your commitment and expertise in visual arts education.",
  },
  {
    question: "What if I am not satisfied?",
    answer:
      "We offer a 30-day satisfaction guarantee. If the program is not right for you, contact us for a full refund.",
  },
];

const testimonials = [
  {
    quote:
      "This certification gave me the language and structure I needed to advocate for art in my school. My director immediately noticed the difference.",
    author: "Sandra K.",
    role: "Lower Elementary Guide",
    location: "Denver, CO",
  },
  {
    quote:
      "I have a fine arts degree but no teaching background. This program bridged the gap beautifully. I now run the art program at our Montessori school.",
    author: "Thomas M.",
    role: "Art Specialist",
    location: "Toronto, Canada",
  },
  {
    quote:
      "The community access alone is worth the investment. Connecting with other educators who care this deeply about children's art has been transformative.",
    author: "Aisha B.",
    role: "Homeschool Educator",
    location: "London, UK",
  },
];

const modules = [
  {
    number: "01",
    title: "Foundations of Montessori Art",
    desc: "Understand the intersection of Montessori philosophy and visual arts pedagogy.",
  },
  {
    number: "02",
    title: "The Prepared Art Environment",
    desc: "Design, organize, and maintain an art space that fosters independence and creativity.",
  },
  {
    number: "03",
    title: "Sequenced Skill Building",
    desc: "Learn how to introduce materials and techniques in a logical, developmental sequence.",
  },
  {
    number: "04",
    title: "Process-Based Art Practices",
    desc: "Honor the child's creative process while providing just enough structure for growth.",
  },
  {
    number: "05",
    title: "Observation & Documentation",
    desc: "Develop systems for tracking artistic development and planning next steps.",
  },
  {
    number: "06",
    title: "Curriculum Design & Implementation",
    desc: "Create a customized art curriculum for your specific classroom or program.",
  },
];

export default function CertificationPage() {
  return (
    <>
      {/* Premium Hero */}
      <section className="bg-espresso text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-terracotta/20 border border-terracotta/30 rounded-full px-4 py-1.5 mb-6">
                <Award size={14} className="text-ochre" />
                <span className="text-xs font-semibold text-ochre uppercase tracking-wider">
                  Professional Certification
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-6">
                Teach children visual arts with{" "}
                <span className="text-ochre">confidence</span>, sequence, and
                developmental understanding.
              </h1>
              <p className="text-base sm:text-lg text-canvas/80 leading-relaxed max-w-xl mb-8">
                The Art Teaching Blueprint is a comprehensive certification for
                educators ready to lead meaningful, structured, and joyful art
                experiences in the Montessori environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <BuyButton
                  productId={product.id}
                  label={`Enroll Now — ${product.price}`}
                  className="bg-ochre hover:bg-ochre/90 text-espresso"
                />
                <Link
                  href="#program-overview"
                  className="inline-flex items-center justify-center rounded-button border border-paper/30 px-8 py-4 text-base font-semibold text-paper hover:bg-paper/10 transition-colors"
                >
                  Explore the Program
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-canvas/60">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> 8–12 weeks, self-paced
                </span>
                <span className="flex items-center gap-1">
                  <Video size={14} /> 6 core modules
                </span>
                <span className="flex items-center gap-1">
                  <Award size={14} /> Certificate on completion
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-card bg-paper/5 border border-paper/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-paper/20">
                  <div className="text-center">
                    <Award size={80} className="mx-auto mb-4" />
                    <p className="text-sm font-medium">Certification Preview</p>
                  </div>
                </div>
              </div>
              {product.originalPrice && (
                <div className="absolute -top-3 -right-3 bg-ochre text-espresso text-xs font-bold px-4 py-2 rounded-full shadow-soft">
                  Save {product.originalPrice}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Authority Bar */}
      <section className="border-y border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Certified Alumni", value: "2,000+" },
              { label: "Countries", value: "20+" },
              { label: "Years of Experience", value: "20+" },
              { label: "Satisfaction Rate", value: "98%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
                  {stat.value}
                </p>
                <p className="text-xs text-charcoal/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-6">
            Most educators never received training in how to teach art
          </h2>
          <div className="space-y-4 text-charcoal/80 leading-relaxed">
            <p>
              You may have a teaching credential, a Montessori diploma, or years of
              classroom experience — but when it comes to visual arts, you are often
              left to figure it out alone.
            </p>
            <p>
              Without a clear sequence, art becomes either too structured (adult-directed
              crafts) or too loose (messy free-for-all). Neither serves the child.
            </p>
            <p>
              The Art Teaching Blueprint fills this gap with a complete certification
              that gives you the confidence, curriculum knowledge, and practical skills
              to lead exceptional art experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Program Solution */}
      <section id="program-overview" className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-4">
              A complete system for art education leadership
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Six modules that take you from foundational philosophy to practical
              curriculum design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.number}
                className="bg-paper border border-linen rounded-card p-6 sm:p-8 relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 font-serif text-5xl font-bold text-terracotta/10">
                  {mod.number}
                </span>
                <h3 className="font-serif text-xl font-semibold text-espresso mb-2 relative">
                  {mod.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed relative">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Be Able To Do */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-6">
                What you&apos;ll be able to do
              </h2>
              <ul className="space-y-4">
                {[
                  "Design and maintain a prepared art environment",
                  "Present art materials using Montessori principles",
                  "Sequence lessons for painting, drawing, clay, and color theory",
                  "Facilitate process-based art without taking over",
                  "Observe and document children's artistic development",
                  "Create a customized art curriculum for any setting",
                  "Advocate for art education within your school or community",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 text-sage shrink-0" />
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper border border-linen rounded-card p-8">
              <div className="aspect-video bg-canvas rounded-card-sm flex items-center justify-center">
                <div className="text-center text-charcoal/30">
                  <Video size={48} className="mx-auto mb-3" />
                  <p className="text-sm font-medium">Program Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-paper border border-linen rounded-card p-8">
              <h3 className="font-serif text-2xl font-semibold text-espresso mb-6 flex items-center gap-2">
                <Check size={24} className="text-sage" />
                Who it&apos;s for
              </h3>
              <ul className="space-y-4">
                {[
                  "Montessori guides seeking art specialization",
                  "Homeschool parents building a comprehensive art program",
                  "Art teachers new to Montessori environments",
                  "Early childhood educators passionate about visual arts",
                  "School leaders developing staff art competency",
                  "Anyone who believes children deserve quality art education",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <Users size={16} className="mt-0.5 text-sage shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper border border-linen rounded-card p-8">
              <h3 className="font-serif text-2xl font-semibold text-espresso/40 mb-6 flex items-center gap-2">
                <X size={24} className="text-charcoal/30" />
                Who it&apos;s not for
              </h3>
              <ul className="space-y-4">
                {[
                  "Those looking for a quick weekend workshop",
                  "Educators unwilling to engage with child-led practices",
                  "Anyone seeking craft templates rather than pedagogy",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-charcoal/50">
                    <X size={16} className="mt-0.5 text-charcoal/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal / Licensing */}
      <section className="py-12 sm:py-16 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-paper border border-linen rounded-card p-6">
            <Shield size={24} className="text-dusty-blue shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-espresso mb-1">
                Licensing clarification
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                The Art Teaching Blueprint Certification is a professional development
                credential in visual arts education. It is not a state teaching license,
                nor does it replace AMI/AMS Montessori credentials. It certifies your
                expertise in art pedagogy within Montessori and progressive education
                contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials items={testimonials} title="What certified educators say" />

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Final CTA */}
      <FinalCTA
        title="Become a certified art educator"
        description="Join a global community of educators who teach children visual arts with confidence, structure, and wonder."
        primaryCta={{ label: `Enroll Now — ${product.price}`, href: "#" }}
        secondaryCta={{ label: "Download Program Guide", href: "#" }}
        variant="dark"
      />
    </>
  );
}
