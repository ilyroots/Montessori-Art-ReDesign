import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MagneticPills } from "@/components/motion/MagneticPills";
import { LayeredSection } from "@/components/sections/LayeredSection";
import { GlobalReachSection } from "@/components/sections/GlobalReachSection";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { FloatingAccentShapes } from "@/components/motion/FloatingAccentShapes";
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
    "Learn about Spramani Elaun, founder of Nature of Art®, and our mission to bring meaningful visual arts into the Montessori environment through the Science Art Method™.",
});

const serviceCategories = [
  {
    icon: <Users size={20} />,
    label: "Keynotes",
    description:
      "Inspiring talks on Montessori art education for conferences, schools, and educator gatherings.",
  },
  {
    icon: <Users size={20} />,
    label: "Workshops",
    description:
      "Hands-on art workshops for educators, parents, and Montessori classrooms.",
  },
  {
    icon: <Award size={20} />,
    label: "Venue Sponsorship",
    description:
      "Partner with Nature of Art® to bring professional art education experiences to your venue.",
  },
  {
    icon: <Palette size={20} />,
    label: "Corporate Creative Events",
    description:
      "Team-building art experiences designed for organizations and companies.",
  },
  {
    icon: <GraduationCap size={20} />,
    label: "Teacher Art Training",
    description:
      "Professional development training to build confidence in teaching visual arts.",
  },
  {
    icon: <Video size={20} />,
    label: "Video Training",
    description:
      "On-demand video courses for art environment setup and teaching practice.",
  },
  {
    icon: <ShoppingBag size={20} />,
    label: "Art Supplies",
    description:
      "Premium safe non-toxic art materials curated for the Montessori environment.",
  },
  {
    icon: <Award size={20} />,
    label: "Art Teaching Blueprint",
    description:
      "Comprehensive 7-week certification program in Montessori art education.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <LayeredSection
        variant="swatches"
        withWash
        withShapes
        className="py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal variant="fadeUp">
            <span className="section-label mb-6 justify-center">
              Welcome to Nature of Art®
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-ink tracking-[-0.02em] mb-6">
              About Nature of Art®
            </h1>
            <p className="text-lg sm:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              Montessori provides the learning environment.
              <br />
              <span className="text-honey font-semibold">Nature of Art® provides the art pedagogy.</span>
            </p>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="md" />

      {/* About the Author */}
      <LayeredSection
        variant="paper"
        withTexture
        withWash
        className="py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FloatingAccentShapes />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal variant="slideLeft" className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] relative img-mask-rounded shadow-editorial overflow-hidden">
                  <Image
                    src="/images/spramani-elaun.png"
                    alt="Spramani Elaun, founder of Nature of Art®, surrounded by Montessori art materials and her published books"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent pointer-events-none" />
                </div>
                {/* Decorative secondary image */}
                <div className="absolute -bottom-6 -right-6 w-32 h-40 sm:w-40 sm:h-48 img-mask-rounded-alt shadow-editorial border-4 border-paper overflow-hidden hidden lg:block">
                  <Image
                    src="/images/spramani-with-book.jpg"
                    alt="Spramani Elaun with her art teaching book"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.15} className="lg:col-span-7">
              <div className="lg:pl-4">
                <span className="section-label mb-4">
                  About the Founder
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  Meet Spramani Elaun
                </h2>
                <div className="space-y-4 text-charcoal/80 leading-relaxed text-base sm:text-lg">
                  <p>
                    Spramani Elaun is an author and art curriculum developer from San Diego.
                    She is a homeschooling mom, an art teacher, and the founder of Nature of Art®
                    Art School & Art Supply company.
                  </p>
                  <p>
                    Her method — the <strong className="text-ink">Science Art Method™</strong> — is based on
                    long-term observation and practice around how children process art. She has
                    helped teachers and parents around the world bring meaningful visual arts
                    into the lives of children.
                  </p>
                  <p>
                    For over two decades, her work has reached educators, schools, and families
                    across multiple continents through curriculum, training, books, and a
                    distinctive visual arts approach.
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
      </LayeredSection>

      <SectionTransition variant="swatches" height="lg" />

      {/* Global Reach */}
      <GlobalReachSection />

      <SectionTransition variant="swatches" height="md" />

      {/* About the Company */}
      <LayeredSection
        variant="ivory"
        withWash
        className="py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-14">
              <span className="section-label justify-center mb-4">
                What We Do
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
                About Nature of Art®
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-grid">
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
              <ScrollReveal key={item.title} delay={i * 0.06} variant="scaleUp">
                <Link
                  href={item.href}
                  className="group block card-editorial p-6 h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center mb-4 text-honey group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="md" />

      {/* Services */}
      <LayeredSection
        variant="canvas"
        withTexture
        withShapes
        className="py-16 sm:py-20 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-8">
              <span className="section-label justify-center mb-4">
                Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] leading-tight">
                How We Support Educators
              </h2>
              <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
                From keynotes and workshops to venue sponsorship and corporate creative events,
                Nature of Art® offers a range of services to bring art education to your community.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn">
            <MagneticPills items={serviceCategories} />
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="lg" />

      {/* Professional Development */}
      <LayeredSection
        variant="swatches"
        withWash
        className="py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal variant="slideLeft" className="lg:col-span-7">
              <div>
                <span className="section-label mb-4">
                  Professional Development
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  Grow Your Art Teaching Practice
                </h2>
                <div className="space-y-4 text-charcoal/80 leading-relaxed text-base sm:text-lg">
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

            <ScrollReveal variant="slideRight" delay={0.15} className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/3] relative img-mask-rounded-alt shadow-editorial overflow-hidden">
                  <Image
                    src="/images/children-painting-classroom.jpg"
                    alt="Children engaged in painting in a Montessori classroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-honey/5 to-transparent pointer-events-none" />
                </div>
                {/* Certification card overlay */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 max-w-[260px] card-editorial p-5 hidden sm:block">
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                    The Art Teaching Blueprint™
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-3">
                    Our comprehensive certification program for educators who want to teach
                    visual arts with confidence, sequence, and developmental understanding.
                  </p>
                  <ul className="space-y-1.5 text-sm text-charcoal/70">
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="md" />

      {/* Connect */}
      <LayeredSection
        variant="ink"
        withShapes
        className="py-20 sm:py-28 bg-gradient-ink"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <FloatingAccentShapes className="opacity-40" />
          <ScrollReveal variant="fadeUp">
            <span className="section-label justify-center mb-4 text-bee-yellow">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 text-paper">
              Connect With Nature of Art®
            </h2>
            <p className="text-canvas/80 max-w-2xl mx-auto leading-relaxed mb-8 text-base sm:text-lg">
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
      </LayeredSection>
    </>
  );
}
