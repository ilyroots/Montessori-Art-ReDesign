import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LayeredSection } from "@/components/sections/LayeredSection";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { Mail, MapPin, Facebook, Instagram, Linkedin, BookOpen, ShoppingBag, Palette, Newspaper } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact — Nature of Art®",
  description:
    "Get in touch with Spramani Elaun and the Nature of Art® team. Questions about curriculum, training, certification, or art supplies? We are here to help.",
});

const contactOptions = [
  {
    icon: <BookOpen size={20} />,
    title: "Curriculum Questions",
    description: "Ask about painting, drawing, clay, or color theory curriculum.",
    href: "/curriculum",
  },
  {
    icon: <ShoppingBag size={20} />,
    title: "Bookstore Questions",
    description: "Inquiries about books, editions, or bulk orders.",
    href: "/bookstore",
  },
  {
    icon: <Palette size={20} />,
    title: "Art Supplies",
    description: "Questions about materials, store orders, or shipping.",
    href: "/art-supplies",
  },
  {
    icon: <Newspaper size={20} />,
    title: "Training & Certification",
    description: "Learn about professional development and certification.",
    href: "/certification",
  },
  {
    icon: <Mail size={20} />,
    title: "General Contact",
    description: "Anything else — we are happy to point you in the right direction.",
    href: "mailto:Info@Spramani.com",
    external: true,
  },
];

export default function ContactPage() {
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
            <span className="section-label mb-4 justify-center">Get in Touch</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-[-0.02em] mb-5">
              Contact Nature of Art®
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Questions about curriculum, books, training, certification, or art supplies?
              Reach out and we will help point you in the right direction.
            </p>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="md" />

      {/* Contact Options */}
      <LayeredSection variant="paper" withTexture className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeUp">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {contactOptions.map((option) => {
                const Comp = option.external ? "a" : Link;
                return (
                  <Comp
                    key={option.title}
                    href={option.href}
                    {...(option.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group block bg-paper border border-linen rounded-card p-5 hover:shadow-card-hover hover:border-honey/30 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-honey mb-3 group-hover:bg-honey/10 transition-colors">
                      {option.icon}
                    </div>
                    <h3 className="font-semibold text-ink text-sm mb-1 group-hover:text-honey transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-xs text-charcoal/60 leading-relaxed">
                      {option.description}
                    </p>
                  </Comp>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="sm" />

      {/* Form + Details */}
      <LayeredSection variant="ivory" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <ScrollReveal variant="slideLeft" className="lg:col-span-7">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-2">
                  Send a Message
                </h2>
                <p className="text-charcoal/70 mb-8">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal variant="slideRight" delay={0.1} className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:Info@Spramani.com"
                      className="flex items-start gap-3 text-charcoal/80 hover:text-honey transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-honey shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ink">Email</p>
                        <p className="text-sm">Info@Spramani.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 text-charcoal/80">
                      <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-honey shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ink">Address</p>
                        <p className="text-sm">
                          Nature of Art®<br />
                          P.O. Box 443<br />
                          Solana Beach, CA 92075
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.facebook.com/nature.of.art"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-button bg-paper border border-linen px-4 py-2.5 text-sm text-charcoal/80 hover:border-honey/40 hover:text-ink transition-colors"
                    >
                      <Facebook size={16} />
                      Facebook
                    </a>
                    <span className="inline-flex items-center gap-2 rounded-button bg-paper border border-linen px-4 py-2.5 text-sm text-charcoal/80">
                      <Instagram size={16} />
                      @Nature.of.Art.Kids
                    </span>
                    <a
                      href="https://www.linkedin.com/in/ecokidsart/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-button bg-paper border border-linen px-4 py-2.5 text-sm text-charcoal/80 hover:border-honey/40 hover:text-ink transition-colors"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="bg-canvas/50 border border-linen rounded-card p-5">
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    <strong className="text-ink">Note:</strong> Our contact form connects to our CRM system.
                    If you experience any issues, please email us directly at{" "}
                    <a href="mailto:Info@Spramani.com" className="text-honey hover:underline">
                      Info@Spramani.com
                    </a>.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </LayeredSection>
    </>
  );
}
