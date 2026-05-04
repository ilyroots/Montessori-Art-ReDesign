import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LayeredSection } from "@/components/sections/LayeredSection";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { InteractiveCard } from "@/components/visual/InteractiveCard";
import { homepageExtract } from "@/config/publicContentExtract";
import { blogCategories } from "@/config/blogCategories";
import { ArrowRight, Newspaper } from "lucide-react";

export const metadata = createMetadata({
  title: "Blog — Art Teaching Notes & Resources | Nature of Art®",
  description:
    "Articles and ideas for teaching children visual arts through prepared environments, materials, observation, and process. By Spramani Elaun and Nature of Art®.",
});

// Featured posts from verified homepage extraction
const featuredPosts = homepageExtract.featuredBlogPosts.map((post) => ({
  ...post,
  // Fallback to original WordPress URL until content is migrated
  fallbackUrl: `https://montessori-art.com/${post.slug}/`,
  excerpt: "Full article content pending WordPress export.",
  image: undefined,
}));

// Map categories to simple display colors
const categoryStyles: Record<string, string> = {
  Drawing: "bg-kids-blue/10 text-kids-blue",
  Clay: "bg-earth-brown/10 text-earth-brown",
  Curriculum: "bg-honey/10 text-honey",
  Painting: "bg-creative-pink/10 text-creative-pink",
  "Art Shelf": "bg-sage/10 text-sage",
  Homeschool: "bg-bee-yellow/15 text-honey",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <LayeredSection
        variant="swatches"
        withWash
        withShapes
        className="py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal variant="fadeUp">
            <span className="section-label mb-4 justify-center">Notes & Resources</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-[-0.02em] mb-5">
              Art Teaching Notes
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Articles and ideas for teaching children visual arts through prepared environments,
              materials, observation, and process.
            </p>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="md" />

      {/* Featured Articles */}
      <LayeredSection variant="paper" withTexture className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em]">
                  Featured Articles
                </h2>
                <p className="text-charcoal/70 mt-2">
                  Verified posts from the current Nature of Art® archive.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08} variant="fadeUp">
                <InteractiveCard hoverLift={-4}>
                  <a
                    href={post.fallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-paper border border-linen rounded-card overflow-hidden hover:shadow-card-hover transition-all duration-200"
                  >
                    <div className="relative aspect-[16/9] w-full bg-canvas overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-14 h-14 mx-auto rounded-full bg-canvas flex items-center justify-center text-charcoal/20 mb-2">
                            <Newspaper size={28} />
                          </div>
                          <span className="text-xs text-charcoal/40">Image pending migration</span>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-block text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${
                            categoryStyles[post.category] ?? "bg-canvas text-charcoal"
                          }`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-honey transition-colors leading-snug mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-charcoal/60 line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-honey group-hover:text-earth-brown transition-colors">
                        Read on original site
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </a>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="mt-8 bg-bee-yellow/10 border border-bee-yellow/20 rounded-card p-5">
              <p className="text-sm text-charcoal/70 leading-relaxed">
                <strong className="text-ink">Note:</strong> Full blog post content and images are pending
                WordPress export. These cards link to the original posts on{" "}
                <a
                  href="https://montessori-art.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-honey hover:underline"
                >
                  montessori-art.com
                </a>{" "}
                until the migration is complete.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="sm" />

      {/* Categories */}
      <LayeredSection variant="ivory" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-3">
                Browse by Topic
              </h2>
              <p className="text-charcoal/70 max-w-xl mx-auto">
                Topics we write about. Full category archives will be available after blog migration.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {blogCategories.map((cat) => (
              <span
                key={cat.id}
                className="inline-flex items-center gap-1.5 rounded-button bg-paper border border-linen px-4 py-2 text-sm text-charcoal/80"
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="sm" />

      {/* Newsletter CTA */}
      <LayeredSection variant="canvas" withTexture className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fadeUp">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-4">
              Get New Articles by Email
            </h2>
            <p className="text-charcoal/70 mb-8">
              Join the Nature of Art® newsletter to receive art teaching notes and resource updates.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-8 py-4 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
            >
              Join the Newsletter
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="sm" />

      {/* Related Paths */}
      <LayeredSection variant="paper" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-10">
              <h2 className="font-serif text-xl font-semibold text-ink tracking-[-0.02em] mb-3">
                Explore More
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Art Books",
                description: "Curriculum guides and teaching references.",
                href: "/bookstore",
              },
              {
                title: "Painting Curriculum",
                description: "Sequenced painting lessons for Montessori.",
                href: "/curriculum/painting",
              },
              {
                title: "Art Supplies",
                description: "Materials for the prepared environment.",
                href: "/art-supplies",
              },
            ].map((item) => (
              <ScrollReveal key={item.href} variant="fadeUp">
                <Link
                  href={item.href}
                  className="group block bg-paper border border-linen rounded-card p-6 hover:shadow-card-hover hover:border-honey/30 transition-all duration-200 text-center"
                >
                  <h3 className="font-semibold text-ink group-hover:text-honey transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60">{item.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </LayeredSection>
    </>
  );
}
