import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LayeredSection } from "@/components/sections/LayeredSection";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { Mail, Eye, Keyboard, Monitor, MessageSquare } from "lucide-react";

export const metadata = createMetadata({
  title: "Accessibility Statement — Nature of Art®",
  description:
    "Information about accessibility support and how to contact Nature of Art® about accessibility issues.",
});

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero */}
      <LayeredSection
        variant="swatches"
        withWash
        withShapes
        className="py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal variant="fadeUp">
            <span className="section-label mb-4 justify-center">Accessibility</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-[-0.02em] mb-5">
              Accessibility Statement
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Information about accessibility support and how to contact Nature of Art®
              about accessibility issues.
            </p>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="md" />

      {/* Content */}
      <LayeredSection variant="paper" withTexture className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-6">
              <p>
                We are committed to ensuring digital accessibility for all visitors, including people with disabilities.
                We continually work to improve the user experience for everyone and aim to apply relevant accessibility standards wherever possible.
              </p>
              <p>
                Our website is designed to be compatible with commonly used assistive technologies and modern web browsers.
                While we strive to make all pages and content accessible, some content may not yet fully meet the highest accessibility standards.
                We are actively working to identify and address these areas.
              </p>
              <p>
                If you experience difficulty accessing any part of this website, need content in an alternative format,
                or have suggestions for improving accessibility, we welcome your feedback.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Block */}
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="mt-12 bg-canvas/50 border border-linen rounded-card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Contact Us About Accessibility
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="mailto:Info@Spramani.com"
                  className="inline-flex items-center gap-2 rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                >
                  <Mail size={16} />
                  Info@Spramani.com
                </a>
                <span className="text-sm text-charcoal/70">
                  Spramani Elaun — Nature of Art®
                </span>
              </div>
              <p className="mt-4 text-sm text-charcoal/70">
                We will do our best to respond promptly and provide the information or assistance you need.
              </p>
            </div>
          </ScrollReveal>

          {/* Accessibility Features */}
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <div className="mt-12">
              <h2 className="font-serif text-xl font-semibold text-ink mb-6">
                Accessibility Features We Consider
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Eye size={18} />,
                    title: "Readable Contrast",
                    description: "Text and backgrounds are chosen for comfortable reading.",
                  },
                  {
                    icon: <Keyboard size={18} />,
                    title: "Keyboard Navigation",
                    description: "Interactive elements are accessible without a mouse.",
                  },
                  {
                    icon: <Monitor size={18} />,
                    title: "Responsive Layout",
                    description: "Pages adapt to different screen sizes and zoom levels.",
                  },
                  {
                    icon: <MessageSquare size={18} />,
                    title: "Clear Labels",
                    description: "Forms and buttons have descriptive labels and instructions.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 bg-paper border border-linen rounded-card p-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-canvas flex items-center justify-center text-honey shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-ink text-sm">{feature.title}</h3>
                      <p className="text-xs text-charcoal/60 mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Pending Verification Note */}
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="mt-12 bg-bee-yellow/10 border border-bee-yellow/20 rounded-card p-5">
              <p className="text-sm text-charcoal/70 leading-relaxed">
                <strong className="text-ink">Note:</strong> This accessibility statement is based on the current
                original website content. A comprehensive accessibility audit and WCAG conformance assessment
                are pending. If you require specific accessibility documentation or have compliance questions,
                please contact us directly.
              </p>
            </div>
          </ScrollReveal>

          {/* Related Links */}
          <ScrollReveal variant="fadeUp" delay={0.25}>
            <div className="mt-12 pt-8 border-t border-linen">
              <h2 className="font-serif text-lg font-semibold text-ink mb-4">
                Related Pages
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-button bg-paper border border-linen px-4 py-2 text-sm text-charcoal/80 hover:border-honey/40 transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/terms-of-service"
                  className="inline-flex items-center gap-1.5 rounded-button bg-paper border border-linen px-4 py-2 text-sm text-charcoal/80 hover:border-honey/40 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 rounded-button bg-paper border border-linen px-4 py-2 text-sm text-charcoal/80 hover:border-honey/40 transition-colors"
                >
                  About
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </LayeredSection>
    </>
  );
}
