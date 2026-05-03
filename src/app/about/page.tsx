import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  BookOpen,
  GraduationCap,
  Palette,
  ShoppingBag,
  Mail,
  Video,
  Award,
  Users,
  MapPin,
} from "lucide-react";

export const metadata = createMetadata({
  title: "About — Nature of Art®",
  description:
    "Learn about Spramani Elaun, founder of Nature of Art®, and our mission to bring meaningful visual arts into the Montessori environment.",
});

const serviceCategories = [
  { icon: <Users size={20} />, label: "Keynotes" },
  { icon: <Users size={20} />, label: "Workshops" },
  { icon: <Award size={20} />, label: "Venue Sponsorship" },
  { icon: <Palette size={20} />, label: "Corporate Creative Events" },
  { icon: <GraduationCap size={20} />, label: "Teacher Art Training" },
  { icon: <Video size={20} />, label: "Video Training" },
  { icon: <ShoppingBag size={20} />, label: "Art Supplies" },
  { icon: <Award size={20} />, label: "Art Teaching Blueprint" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-4">
              Welcome to Nature of Art®
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-[-0.02em] mb-6">
              About Nature of Art®
            </h1>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              Montessori provides the learning environment.
              <br />
              <span className="text-honey font-semibold">Nature of Art® provides the art pedagogy.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] max-w-lg mx-auto relative rounded-card overflow-hidden shadow-card bg-canvas">
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                  <div className="text-center">
                    <Palette size={64} className="mx-auto mb-4" />
                    <p className="text-sm font-medium">Spramani Elaun Portrait</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                  About the Founder
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-5">
                  Meet Spramani Elaun
                </h2>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>
                    Spramani Elaun is an author and art curriculum developer from San Diego.
                    She is a homeschooling mom, an art teacher, and the founder of Nature of Art®
                    Art School & Art Supply company.
                  </p>
                  <p>
                    Her method is based on long-term observation and practice around how children
                    process art. She has helped teachers and parents around the world bring
                    meaningful visual arts into the lives of children.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:Info@Spramani.com"
                    className="inline-flex items-center gap-2 text-sm text-honey hover:text-earth-brown transition-colors"
                  >
                    <Mail size={16} />
                    Info@Spramani.com
                  </a>
                  <span className="inline-flex items-center gap-2 text-sm text-charcoal/60">
                    <MapPin size={16} />
                    Solana Beach, CA
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/nature.of.art"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-charcoal/70 hover:text-honey transition-colors"
                  >
                    Facebook
                  </a>
                  <span className="text-charcoal/30">·</span>
                  <span className="text-sm text-charcoal/70">@Nature.of.Art.Kids</span>
                  <span className="text-charcoal/30">·</span>
                  <a
                    href="https://www.linkedin.com/in/ecokidsart/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-charcoal/70 hover:text-honey transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About the Company */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                What We Do
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">
                About Nature of Art®
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen size={22} />,
                title: "Art Books",
                desc: "Authoritative guides on Montessori art education for your classroom or home shelf.",
                href: "/bookstore",
              },
              {
                icon: <GraduationCap size={22} />,
                title: "Art Curriculums",
                desc: "Complete, sequenced curriculum for painting, drawing, clay, and color theory.",
                href: "/curriculum",
              },
              {
                icon: <Video size={22} />,
                title: "Video Training",
                desc: "On-demand trainings for your art environment and teaching practice.",
                href: "/training",
              },
              {
                icon: <Award size={22} />,
                title: "Art Certification",
                desc: "The Art Teaching Blueprint™ — professional certification in Montessori art education.",
                href: "/certification",
              },
              {
                icon: <ShoppingBag size={22} />,
                title: "Art Supplies Online",
                desc: "Premium safe non-toxic art supplies curated for the Montessori environment.",
                href: "/art-supplies",
              },
              {
                icon: <Mail size={22} />,
                title: "Email Art Newsletter",
                desc: "Get art inspiration, lessons, and updates delivered to your inbox.",
                href: "/newsletter",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <Link
                  href={item.href}
                  className="group block bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-all duration-300 h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center mb-4 text-honey">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/70">{item.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">
                How We Support Educators
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {serviceCategories.map((service) => (
                <span
                  key={service.label}
                  className="inline-flex items-center gap-2 bg-paper border border-linen rounded-full px-4 py-2 text-sm text-charcoal/80"
                >
                  <span className="text-honey">{service.icon}</span>
                  {service.label}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 text-center">
              <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
                From keynotes and workshops to venue sponsorship and corporate creative events,
                Nature of Art® offers a range of services to bring art education to your community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                  Professional Development
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-5">
                  Grow Your Art Teaching Practice
                </h2>
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>
                    Nature of Art® provides video training and professional development for
                    Montessori guides, homeschool parents, and art educators.
                  </p>
                  <p>
                    Whether you are just starting out or looking to deepen your practice,
                    our trainings meet you where you are and give you practical tools you
                    can use immediately.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/training"
                    className="inline-flex items-center justify-center rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                  >
                    View Trainings
                  </Link>
                  <Link
                    href="/certification"
                    className="inline-flex items-center justify-center rounded-button border border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-paper transition-colors"
                  >
                    Explore Certification
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-canvas rounded-card p-8 border border-linen">
                <h3 className="font-serif text-xl font-semibold text-ink mb-4">
                  The Art Teaching Blueprint™
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  Our comprehensive certification program for educators who want to teach
                  visual arts with confidence, sequence, and developmental understanding.
                </p>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <span className="text-honey mt-0.5">✓</span>
                    7-week online professional training
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-honey mt-0.5">✓</span>
                    60+ professional training videos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-honey mt-0.5">✓</span>
                    Digital PDF workbook
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-honey mt-0.5">✓</span>
                    50 CPD hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-honey mt-0.5">✓</span>
                    Printed certificate
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-20 sm:py-28 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-bee-yellow font-semibold mb-3">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-5">
              Connect With Nature of Art®
            </h2>
            <p className="text-canvas/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Have questions about curriculum, training, or certification? We would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:Info@Spramani.com"
                className="inline-flex items-center gap-2 rounded-button bg-bee-yellow px-6 py-3 text-sm font-semibold text-ink hover:bg-bee-yellow/90 transition-colors"
              >
                <Mail size={16} />
                Info@Spramani.com
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-button border border-paper/30 px-6 py-3 text-sm font-semibold text-paper hover:bg-paper/10 transition-colors"
              >
                Contact Form
              </Link>
            </div>
            <p className="mt-6 text-xs text-canvas/50">
              Nature of Art®, P.O. Box 443, Solana Beach, CA 92075
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
