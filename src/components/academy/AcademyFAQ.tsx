"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const faqs = [
  {
    q: "Is the Academy really free to start?",
    a: "Yes. You can create a free account and access starter lessons without a credit card. Paid tiers unlock additional paths, printables, and features.",
  },
  {
    q: "What age is this for?",
    a: "Lessons are designed for children ages 3–12, with parent and teacher guidance. Some paths focus on early childhood, others on elementary.",
  },
  {
    q: "Do I need to be a Montessori teacher?",
    a: "Not at all. The Academy is built for parents, homeschool families, traditional teachers, and Montessori guides alike.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Yes. You can upgrade or change your tier at any time. Your progress is always saved.",
  },
  {
    q: "Are the supply kits required?",
    a: "No. Every lesson includes a materials list with easy-to-find alternatives. Supply kits are an optional convenience.",
  },
  {
    q: "How is this different from the existing curriculum?",
    a: "The Academy adds guided paths, progress tracking, quizzes, and community features on top of the proven Nature of Art curriculum.",
  },
];

export function AcademyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">Frequently Asked Questions</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-paper border border-linen rounded-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <span className="font-semibold text-ink text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-charcoal/40 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-charcoal/70 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
