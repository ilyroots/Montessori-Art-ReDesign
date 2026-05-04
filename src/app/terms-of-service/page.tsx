import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LayeredSection } from "@/components/sections/LayeredSection";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { Mail, AlertTriangle } from "lucide-react";

export const metadata = createMetadata({
  title: "Terms of Service — Nature of Art®",
  description:
    "Terms, usage permissions, copyright notices, and method-use restrictions for Nature of Art® materials and services.",
});

const toc = [
  { id: "use-of-content", label: "1. Use of Website Content" },
  { id: "copyright", label: "2. Copyright Notice" },
  { id: "content-use", label: "3. Website Content Use Notice" },
  { id: "pdf-policy", label: "4. PDF Download Policy" },
  { id: "purchases", label: "5. Purchases and Payments Policy" },
  { id: "video-courses", label: "6. Video Courses and Certifications Policy" },
  { id: "lifetime-access", label: "7. Digital Lifetime Access Notice" },
  { id: "tax", label: "8. Tax Exemption Policy" },
  { id: "data-responsibility", label: "9. Digital Data Responsibility Notice" },
  { id: "arbitration", label: "10. Notice of Arbitration Agreement and Class Action Waiver" },
  { id: "warranty", label: "11. Disclaimer of Warranty Clause" },
];

export default function TermsPage() {
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
            <span className="section-label mb-4 justify-center">Legal</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-[-0.02em] mb-5">
              Terms of Service
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Terms, usage permissions, copyright notices, and method-use restrictions for Nature of Art® materials.
            </p>
          </ScrollReveal>
        </div>
      </LayeredSection>

      <SectionTransition variant="swatches" height="md" />

      {/* Content */}
      <LayeredSection variant="paper" withTexture className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Table of Contents */}
          <ScrollReveal variant="fadeUp">
            <nav className="mb-16 bg-canvas/40 border border-linen rounded-card p-6 sm:p-8">
              <h2 className="font-serif text-lg font-semibold text-ink mb-4">
                Table of Contents
              </h2>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-charcoal/70 hover:text-honey transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </ScrollReveal>

          <div className="space-y-16">
            {/* 1. Use of Website Content */}
            <section id="use-of-content">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  1. Use of Website Content
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <p>
                    Welcome to Nature of Art®! We are thrilled to have you join our creative community.
                    These terms outline how you may use our website, products, and services.
                    By accessing our site, you agree to the following guidelines, designed to protect and inspire us all.
                    Please read them carefully!
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Eligibility</h3>
                  <p>
                    Nature of Art® is for individuals who follow applicable laws and regulations.
                    If you are under 18, you will need parental or guardian consent to use our site.
                    Some features may require an account or additional verification.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Prohibited Activities</h3>
                  <p>To keep our space safe and respectful, these actions are not allowed:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Copying, redistributing, or misusing copyrighted materials without permission.</li>
                    <li>Trying to hack, disrupt, or compromise the website&apos;s systems.</li>
                    <li>Spamming, phishing, or engaging in other abusive activities.</li>
                    <li>Reselling Nature of Art® products or services without explicit authorization.</li>
                    <li>Uploading content that violates copyright laws or intellectual property rights.</li>
                  </ul>
                  <p>
                    Violating these terms could limit your access, lead to content removal, or even result in legal action.
                  </p>
                </div>

                <div className="mt-6 bg-bee-yellow/10 border border-bee-yellow/20 rounded-card p-5 flex gap-4">
                  <AlertTriangle size={20} className="text-honey shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      <strong className="text-ink">Science Art Method™ Notice:</strong>{" "}
                      The Science Art Method (SAM™) is a proprietary teaching system developed by Spramani Elaun.
                      While it is informed by child development and supports Montessori environments,
                      it is not part of the Montessori Method or any other and may not be adapted,
                      taught, or redistributed as a training model.
                    </p>
                    <p className="text-sm text-charcoal/60 mt-2">
                      A proprietary visual-arts teaching method developed by Spramani Elaun,
                      designed to support Montessori educators and all other pedagogies.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* 2. Copyright Notice */}
            <section id="copyright">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  2. Copyright Notice
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <p>
                    All of the content you see on this site — including images, text, videos, and artwork —
                    is protected under copyright © Spramani Elaun and Nature of Art® LLC.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You cannot download, reproduce, translate, republish, or copy any content without written permission.</li>
                    <li>Nature of Art® may update or delete content at any time.</li>
                    <li>Unauthorized use is strictly prohibited and can result in legal action.</li>
                    <li>This material is licensed for individual classroom use with children only.</li>
                    <li>It does not grant permission to train other educators, create derivative works, or present this method as a school-developed or Montessori-authored system.</li>
                  </ul>
                  <p>
                    If you suspect a copyright violation, please report it to us at{" "}
                    <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a>{" "}
                    or Nature of Art®, P.O. Box 443, Solana Beach, CA 92075.
                  </p>

                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Copyright FAQ</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-medium text-ink text-sm">What is protected under copyright?</dt>
                      <dd className="text-sm text-charcoal/70">Everything — from blogs and photos to videos and curriculum materials — is legally owned by Nature of Art®.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink text-sm">How can I use Nature of Art® materials?</dt>
                      <dd className="text-sm text-charcoal/70">Feel free to use them for personal or educational purposes, but do not share, copy, or sell them.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink text-sm">Can I share Nature of Art® content with others?</dt>
                      <dd className="text-sm text-charcoal/70">Yes! Share direct links to our site rather than distributing content yourself.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink text-sm">What happens if I violate copyright?</dt>
                      <dd className="text-sm text-charcoal/70">You may face restricted access, removal of content, or legal action.</dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>
            </section>

            {/* 3. Website Content Use Notice */}
            <section id="content-use">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  3. Website Content Use Notice
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <p>
                    Nature of Art® and the Nature of Art® for Kids logo are registered trademarks.
                    Unless you have written permission:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Do not upload, share, or sell our content online.</li>
                    <li>Do not redistribute or reproduce our copyrighted materials.</li>
                    <li>Do not create derivative works from our content.</li>
                  </ul>
                  <p>
                    You are welcome to share links to specific pages on our website.
                    Violating these rules may lead to legal action.
                    If you want to use materials beyond personal or educational purposes,
                    email <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a> for approval.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            {/* 4. PDF Download Policy */}
            <section id="pdf-policy">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  4. PDF Download Policy
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <p>We offer free PDFs under a personal use license. When downloading, you agree to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use the files only for individual, non-commercial purposes.</li>
                    <li>Avoid copying, distributing, or selling these resources.</li>
                  </ul>
                  <p>
                    Unauthorized use could result in legal consequences.
                    Contact <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a> if you need assistance.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            {/* 5. Purchases and Payments Policy */}
            <section id="purchases">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  5. Purchases and Payments Policy
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Product Descriptions</h3>
                  <p>
                    We aim for accuracy in all product details, but occasional errors may happen.
                    If you have questions, reach out to us for clarification before purchasing.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Payment Terms</h3>
                  <p>
                    Payments can be processed through Stripe, PayPal, or checks.
                    All transactions are in U.S. Dollars (USD).
                    International customers should check their currency conversion rates.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Refunds and Returns</h3>
                  <p><strong>Physical Products</strong> (e.g., art books or supplies):</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Refunds are available for unopened, unused items returned within 14 days.</li>
                    <li>Buyers are responsible for return shipping.</li>
                    <li>A restocking fee may apply.</li>
                  </ul>
                  <p><strong>Digital Products</strong> (e.g., e-books, PDFs):</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>All digital sales are final and non-refundable.</li>
                    <li>Please back up your purchases immediately.</li>
                  </ul>
                  <p><strong>Video Courses and Certifications:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>No refunds once access is granted.</li>
                  </ul>
                  <p>
                    For questions, contact us at{" "}
                    <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a>.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            {/* 6. Video Courses and Certifications Policy */}
            <section id="video-courses">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  6. Video Courses and Certifications Policy
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Access and Usage</h3>
                  <p>
                    Courses are for personal use only. Your purchase grants a single-user license,
                    so sharing or reselling is not allowed.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Requirements to Earn Certifications</h3>
                  <p>
                    You may need to complete all lessons or submit assignments as outlined per course.
                    Check individual product descriptions for specific criteria.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Disclaimer</h3>
                  <p>
                    Nature of Art® does not guarantee job placement or career advancement through certifications.
                  </p>
                  <p>
                    For help, email <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a>.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            {/* 7. Digital Lifetime Access Notice */}
            <section id="lifetime-access">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  7. Digital Lifetime Access Notice
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Definition</h3>
                  <p>
                    &ldquo;Lifetime access&rdquo; applies as long as the product remains supported by Nature of Art®.
                    It does not mean perpetual availability.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Updates or Retirements</h3>
                  <p>
                    Materials may be updated, replaced, or retired to maintain relevance.
                    Whenever possible, we will notify users in advance of significant changes.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">User Responsibility</h3>
                  <p>
                    To ensure consistent access, download and securely back up your purchases.
                    Need clarification? Contact{" "}
                    <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a>.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            {/* 8. Tax Exemption Policy */}
            <section id="tax">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  8. Tax Exemption Policy
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <p>
                    Organizations with tax-exempt status must provide documentation during account setup.
                    Approved tax-exempt accounts will not be charged sales tax.
                    Contact <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a> for help.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            {/* 9. Digital Data Responsibility Notice */}
            <section id="data-responsibility">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  9. Digital Data Responsibility Notice
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <p>
                    You are responsible for immediately downloading and storing purchased digital files.
                    Refunds or replacements for lost files are not available.
                    If you encounter initial download issues, contact{" "}
                    <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a>{" "}
                    within 7 days.
                  </p>
                  <p>Take steps to back up files securely.</p>
                </div>
              </ScrollReveal>
            </section>

            {/* 10. Arbitration Agreement */}
            <section id="arbitration">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  10. Notice of Arbitration Agreement and Class Action Waiver
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Arbitration Agreement</h3>
                  <p>
                    Disputes will be resolved through binding arbitration following the rules of the American Arbitration Association.
                    Arbitrations are based in Los Angeles, California.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Class Action Waiver</h3>
                  <p>
                    Disputes must be addressed individually — not as part of class or group proceedings.
                  </p>
                  <h3 className="font-semibold text-ink text-lg mt-6 mb-2">Jury Trial Waiver</h3>
                  <p>
                    You waive your right to a jury trial for any disputes related to Nature of Art®.
                  </p>
                  <p>By using our website, you agree to these terms.</p>
                </div>
              </ScrollReveal>
            </section>

            {/* 11. Disclaimer of Warranty */}
            <section id="warranty">
              <ScrollReveal variant="fadeUp">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-6">
                  11. Disclaimer of Warranty Clause
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
                  <p>
                    Nature of Art® provides materials &ldquo;as-is&rdquo; and without guarantees.
                    While we strive for accuracy, we do not promise perfect results,
                    uninterrupted services, or bug-free content.
                  </p>
                  <p>
                    Use materials responsibly and contact{" "}
                    <a href="mailto:info@Spramani.com" className="text-honey hover:underline">info@Spramani.com</a>{" "}
                    with any questions before purchasing.
                  </p>
                  <p className="font-medium text-ink">Thank you for choosing Nature of Art®</p>
                </div>
              </ScrollReveal>
            </section>
          </div>

          {/* Contact */}
          <ScrollReveal variant="fadeUp">
            <div className="mt-16 pt-10 border-t border-linen text-center">
              <p className="text-sm text-charcoal/70">
                Questions about these terms? Reach out at{" "}
                <a
                  href="mailto:info@Spramani.com"
                  className="inline-flex items-center gap-1 text-honey hover:underline"
                >
                  <Mail size={14} />
                  info@Spramani.com
                </a>
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/accessibility"
                  className="inline-flex items-center gap-1.5 rounded-button border border-linen px-5 py-2.5 text-sm text-charcoal/80 hover:border-honey/40 transition-colors"
                >
                  Accessibility Statement
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </LayeredSection>
    </>
  );
}
