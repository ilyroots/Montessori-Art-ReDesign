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
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { storeCategories, storeProducts, getTopLevelCategories, getProductsByCategory } from "@/config/storeProducts";
import { ProductCard } from "@/components/store/ProductCard";

const categoryIcons: Record<string, React.ReactNode> = {
  paints: <Palette size={22} />,
  drawing: <Pencil size={22} />,
  clay: <Shapes size={22} />,
  crayons: <PenTool size={22} />,
  paper: <FileText size={22} />,
  crafts: <Scissors size={22} />,
  "art-books": <Library size={22} />,
  "art-curriculum-top": <GraduationCap size={22} />,
};

export function ArtSuppliesClient() {
  const topCategories = getTopLevelCategories();
  const featuredProducts = storeProducts
    .filter((p) => p.priceVerified && p.price > 0)
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-ivory">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal variant="blurIn">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-bee-yellow/15 border border-bee-yellow/20 px-3 py-1 text-xs font-semibold text-honey uppercase tracking-wider mb-5">
                  <ShieldCheck size={12} />
                  Premium Safe Non-Toxic
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.05} variant="blurIn">
                <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6">
                  Art Supplies for{" "}
                  <span className="text-honey">Prepared</span> Creative Environments
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1} variant="blurIn">
                <p className="text-lg text-charcoal/70 leading-relaxed max-w-xl mb-8">
                  Curated by art teacher and mom Spramani Elaun. Every product is
                  child-safe, non-toxic, and chosen to support Montessori, Waldorf,
                  and homeschool art programs.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15} variant="blurIn">
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="#categories"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-honey text-white font-medium rounded-xl hover:bg-honey/90 transition-colors shadow-lg shadow-honey/20"
                  >
                    <ShoppingBag size={18} />
                    Browse Categories
                  </Link>
                  <a
                    href="https://atosb-raxtf.volusion.store/default.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-linen text-charcoal font-medium rounded-xl hover:border-honey/30 hover:text-honey transition-colors"
                  >
                    <ExternalLink size={18} />
                    Original Store
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2} variant="blurIn">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-dramatic border border-linen/50">
                    <Image
                      src="/images/painting-work/lesson-2-painting-lesson-card.jpg"
                      alt="Children painting with safe non-toxic art supplies"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-paper rounded-2xl p-4 shadow-soft border border-linen/50">
                    <p className="font-serif text-2xl font-medium text-honey">50+</p>
                    <p className="text-xs text-charcoal/60">Products curated</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="categories" className="py-16 sm:py-20 bg-paper border-y border-linen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink tracking-tight">
                Shop by Category
              </h2>
              <p className="mt-3 text-charcoal/60 max-w-xl mx-auto">
                Everything you need for your atelier, classroom, or homeschool art shelf.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {topCategories.map((cat, i) => {
              const count = getProductsByCategory(cat.id).length;
              return (
                <ScrollReveal key={cat.id} delay={i * 0.05}>
                  <Link
                    href={`/art-supplies/${cat.slug}`}
                    className="group block p-5 sm:p-6 bg-white rounded-2xl border border-linen/60 hover:border-honey/30 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-canvas flex items-center justify-center text-honey mb-4 group-hover:bg-honey/10 transition-colors">
                      {categoryIcons[cat.id] || <ShoppingBag size={22} />}
                    </div>
                    <h3 className="font-serif text-base font-medium text-ink group-hover:text-honey transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-charcoal/50 mt-1">{count} products</p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      {featuredProducts.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink tracking-tight">
                  Featured Supplies
                </h2>
                <p className="mt-2 text-charcoal/60">
                  Hand-picked favorites from the store.
                </p>
              </div>
              <Link
                href="/art-supplies/paints"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-honey hover:text-honey/80 transition-colors"
              >
                View all
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {featuredProducts.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  categorySlug={product.categoryIds[0]}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Store Info ── */}
      <section className="py-16 sm:py-20 bg-paper border-t border-linen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-5 h-5 text-honey" />
              </div>
              <h3 className="font-serif text-lg font-medium text-ink mb-2">Curated & Safe</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Every product is personally selected by Spramani Elaun for safety, quality, and educational value.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center mx-auto mb-4">
                <Palette className="w-5 h-5 text-honey" />
              </div>
              <h3 className="font-serif text-lg font-medium text-ink mb-2">Montessori Aligned</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Materials support process-based, child-led art exploration in prepared environments.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-5 h-5 text-honey" />
              </div>
              <h3 className="font-serif text-lg font-medium text-ink mb-2">Teacher Approved</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Used in classrooms, homeschools, and studios worldwide for over a decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-ink text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
            Ready to stock your art shelf?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Browse our full catalog of safe, non-toxic art supplies. New checkout coming soon — 
            for now, complete your purchase through our trusted Volusion store.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/art-supplies/paints"
              className="inline-flex items-center gap-2 px-6 py-3 bg-honey text-white font-medium rounded-xl hover:bg-honey/90 transition-colors"
            >
              Start Shopping
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://atosb-raxtf.volusion.store/default.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              Volusion Store
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
