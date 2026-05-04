"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Palette,
  BookOpen,
  Paintbrush,
  Pencil,
  Shapes,
  PenTool,
  FileText,
  Scissors,
  GraduationCap,
  Library,
  Newspaper,
  ExternalLink,
  ArrowRight,
  Truck,
  ShieldCheck,
  MapPin,
  HelpCircle,
  User,
  ShoppingCart,
  Mail,
  Tag,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { StoreCategory } from "@/config/storeCategories";

// Map category IDs to Lucide icons
const categoryIcons: Record<string, React.ReactNode> = {
  paints: <Palette size={24} />,
  "art-curriculum": <BookOpen size={24} />,
  "painting-materials": <Paintbrush size={24} />,
  drawing: <Pencil size={24} />,
  clay: <Shapes size={24} />,
  crayons: <PenTool size={24} />,
  paper: <FileText size={24} />,
  crafts: <Scissors size={24} />,
  "art-teaching-books": <GraduationCap size={24} />,
  "art-books": <Library size={24} />,
  "art-blog-articles": <Newspaper size={24} />,
};

// Map support link IDs to icons
const supportIcons: Record<string, React.ReactNode> = {
  "about-us": <User size={16} />,
  returns: <Tag size={16} />,
  shipping: <Truck size={16} />,
  "site-help": <HelpCircle size={16} />,
  "my-cart": <ShoppingCart size={16} />,
  "my-account": <User size={16} />,
  contact: <Mail size={16} />,
  newsletter: <Mail size={16} />,
};

interface ArtSuppliesClientProps {
  categories: StoreCategory[];
  supportLinks: StoreCategory[];
  notice: {
    headline: string;
    shipping: string;
    tagline: string;
    storefrontUrl: string;
  };
}

export function ArtSuppliesClient({ categories, supportLinks, notice }: ArtSuppliesClientProps) {
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        {/* Decorative swatches */}
        <div className="hidden lg:block absolute top-24 right-[12%] w-8 h-8 rounded-full bg-bee-yellow/70 border-2 border-paper shadow-sm" />
        <div className="hidden lg:block absolute top-44 right-[8%] w-5 h-5 rounded-full bg-kids-blue/50 border-2 border-paper shadow-sm" />
        <div className="hidden lg:block absolute bottom-40 right-[18%] w-6 h-6 rounded-full bg-creative-pink/60 border-2 border-paper shadow-sm" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-bee-yellow/15 border border-bee-yellow/20 px-3 py-1 text-xs font-semibold text-honey uppercase tracking-wider mb-5">
                  <ShieldCheck size={12} />
                  Premium Safe Non-Toxic
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6">
                  Art Supplies for Prepared Creative Environments
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed max-w-xl mb-8">
                  Premium safe non-toxic art supplies, curriculum materials, and teaching resources for Montessori and children&apos;s art environments.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={notice.storefrontUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors duration-200"
                  >
                    Visit Current Store
                    <ExternalLink size={16} />
                  </a>
                  <Link
                    href="/bookstore"
                    className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-7 py-3.5 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors duration-200"
                  >
                    Explore Art Books
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <span className="text-xs text-charcoal/50">11 supply categories</span>
                  <span className="text-xs text-charcoal/50">USPS shipping</span>
                  <span className="text-xs text-charcoal/50">U.S. only</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={0.1} y={40}>
                <div className="relative aspect-[4/3] rounded-card bg-canvas border border-linen overflow-hidden shadow-card">
                  <Image
                    src="/images/art-shelf-painting.jpg"
                    alt="Art supplies arranged on a shelf for children's creative environment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-paper border border-linen rounded-card p-4 shadow-card-hover max-w-[160px] rotate-2 hidden sm:block">
                  <p className="font-hand text-sm text-creative-pink leading-snug">
                    &ldquo;Every child is an artist.&rdquo;
                  </p>
                  <p className="text-[10px] text-charcoal/40 mt-1">— Pablo Picasso</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Store Notice Banner ── */}
      <section className="border-y border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-charcoal/70">
            <span className="inline-flex items-center gap-1.5 font-medium text-ink">
              <MapPin size={14} className="text-honey" />
              {notice.headline}
            </span>
            <span className="hidden sm:inline text-charcoal/30">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Truck size={14} className="text-charcoal/50" />
              {notice.shipping}
            </span>
            <span className="hidden sm:inline text-charcoal/30">|</span>
            <span className="inline-flex items-center gap-1.5 text-honey font-medium">
              <ShieldCheck size={14} />
              {notice.tagline}
            </span>
          </div>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Browse by Category
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
                Store Categories
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" staggerDelay={0.06}>
            {categories.map((cat) => {
              const external = isExternal(cat.href);
              const Card = external ? "a" : Link;
              const cardProps = external
                ? { href: cat.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: cat.href };

              return (
                <StaggerItem key={cat.id}>
                  <Card
                    {...cardProps}
                    className="group block bg-paper border border-linen rounded-card p-6 h-full hover:shadow-card-hover transition-all duration-200 hover:border-honey/30"
                  >
                    <div className="w-12 h-12 rounded-full bg-bee-yellow/10 flex items-center justify-center text-honey mb-4 group-hover:bg-honey/20 transition-colors">
                      {categoryIcons[cat.id] ?? <Palette size={24} />}
                    </div>
                    <h3 className="font-semibold text-ink mb-1 group-hover:text-honey transition-colors flex items-center gap-1.5">
                      {cat.name}
                      {external && <ExternalLink size={12} className="text-charcoal/30" />}
                    </h3>
                    {cat.description && (
                      <p className="text-sm text-charcoal/60 line-clamp-2">{cat.description}</p>
                    )}
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Featured Supply Areas ── */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Curated Collections
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">
                Featured Supply Areas
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.06}>
                <div className="bg-paper border border-linen rounded-card overflow-hidden hover:shadow-card-hover transition-shadow duration-200">
                  {area.image ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-canvas">
                      <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] w-full bg-canvas flex items-center justify-center">
                      {area.icon}
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-semibold text-ink mb-1">{area.title}</h3>
                    <p className="text-sm text-charcoal/60 mb-4">{area.description}</p>
                    <a
                      href={area.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-honey hover:text-honey-dark transition-colors"
                    >
                      Browse current store selection
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why These Supplies ── */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-6">
              Materials for Prepared Creative Spaces
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
              Every item in the store is selected with child-centered art environments in mind. 
              Safe, simple materials that support process-based art, independence, and creative confidence.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left" staggerDelay={0.08}>
            {valueProps.map((prop) => (
              <StaggerItem key={prop.title}>
                <div className="bg-paper border border-linen rounded-card p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-bee-yellow/10 flex items-center justify-center text-honey mb-3">
                    {prop.icon}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{prop.title}</h3>
                  <p className="text-sm text-charcoal/70">{prop.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Store Help / Support ── */}
      <section className="py-16 sm:py-20 bg-ivory border-t border-linen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em]">
                Store Help & Support
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {supportLinks.map((link) => {
              const external = isExternal(link.href);
              const LinkComp = external ? "a" : Link;
              const props = external
                ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: link.href };

              return (
                <LinkComp
                  key={link.id}
                  {...props}
                  className="inline-flex items-center gap-2 rounded-button bg-paper border border-linen px-4 py-2.5 text-sm text-charcoal/80 hover:border-honey/40 hover:text-ink transition-colors"
                >
                  {supportIcons[link.id] ?? <HelpCircle size={14} />}
                  {link.name}
                  {external && <ExternalLink size={12} className="text-charcoal/30" />}
                </LinkComp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Related Paths ── */}
      <section className="py-16 sm:py-20 bg-canvas border-t border-linen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-3">
                Explore the Ecosystem
              </h2>
              <p className="text-charcoal/70">
                Supplies work best alongside curriculum, books, and training.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedPaths.map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.06}>
                <Link
                  href={item.href}
                  className="group block bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover transition-shadow duration-200 h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-honey mb-3 group-hover:bg-honey/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-ink mb-1 group-hover:text-honey transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60">{item.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <FinalCTA
        title="Ready to browse current supplies?"
        description="The existing store is still open while the new catalog is being prepared. Explore available materials and check back for updates."
        primaryCta={{
          label: "Visit Current Store",
          href: notice.storefrontUrl,
        }}
        secondaryCta={{
          label: "Explore Art Books",
          href: "/bookstore",
        }}
      />

      {/* ── Fine Print ── */}
      <section className="py-8 bg-ivory border-t border-linen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-charcoal/50 leading-relaxed">
            Purchases currently open in the existing Volusion store while the new catalog is being migrated.
            All inventory, pricing, and checkout remain on the legacy storefront until ecommerce integration is verified.
          </p>
        </div>
      </section>
    </>
  );
}

// ── Data ─────────────────────────────────────────────────────

const featuredAreas = [
  {
    title: "Paints",
    description: "Watercolor, tempera, and acrylic paints selected for child-safe creative exploration.",
    href: "https://atosb-raxtf.volusion.store/paints",
    image: "/images/child-watercolor-painting.jpg",
    icon: <Palette size={28} className="text-charcoal/20" />,
  },
  {
    title: "Drawing Materials",
    description: "Pencils, charcoal, pastels, and quality paper for mark-making and observation.",
    href: "https://atosb-raxtf.volusion.store/drawing",
    image: undefined,
    icon: <Pencil size={28} className="text-charcoal/20" />,
  },
  {
    title: "Clay",
    description: "Modeling clay and sculpting tools for sensory-rich three-dimensional exploration.",
    href: "https://atosb-raxtf.volusion.store/clay",
    image: undefined,
    icon: <Shapes size={28} className="text-charcoal/20" />,
  },
  {
    title: "Paper",
    description: "Watercolor paper, drawing paper, and specialty papers for every medium.",
    href: "https://atosb-raxtf.volusion.store/paper",
    image: undefined,
    icon: <FileText size={28} className="text-charcoal/20" />,
  },
  {
    title: "Art Teaching Books",
    description: "Guides and resources for educators building art programs in Montessori and homeschool settings.",
    href: "https://atosb-raxtf.volusion.store/art-teaching-books",
    image: undefined,
    icon: <GraduationCap size={28} className="text-charcoal/20" />,
  },
  {
    title: "Art Curriculum",
    description: "Complete curriculum materials for painting, drawing, clay, and color theory instruction.",
    href: "https://atosb-raxtf.volusion.store/art-curriculum",
    image: "/images/painting-curriculum.jpg",
    icon: <BookOpen size={28} className="text-charcoal/20" />,
  },
];

const valueProps = [
  {
    title: "Child-Centered",
    description: "Materials chosen for small hands, developing coordination, and independent use.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Process-Based",
    description: "Supplies that support exploration and discovery rather than rigid outcomes.",
    icon: <Paintbrush size={20} />,
  },
  {
    title: "Non-Toxic & Safe",
    description: "Premium safe non-toxic art supplies you can trust in any learning environment.",
    icon: <ShieldCheck size={20} />,
  },
];

const relatedPaths = [
  {
    title: "Art Books",
    description: "Curriculum guides and teaching references for your shelf.",
    href: "/bookstore",
    icon: <Library size={18} />,
  },
  {
    title: "Painting Curriculum",
    description: "Sequenced painting lessons for the Montessori environment.",
    href: "/curriculum/painting",
    icon: <Palette size={18} />,
  },
  {
    title: "About",
    description: "Learn about the Nature of Art method and mission.",
    href: "/about",
    icon: <User size={18} />,
  },
  {
    title: "Free Resources",
    description: "Video lessons, checklists, and guides to get started.",
    href: "/free-resources",
    icon: <Newspaper size={18} />,
  },
];
