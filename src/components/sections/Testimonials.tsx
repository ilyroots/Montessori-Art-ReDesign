"use client";

import { Quote } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location?: string;
}

export interface TestimonialsProps {
  items: TestimonialItem[];
  title?: string;
}

export function Testimonials({
  items,
  title = "What educators are saying",
}: TestimonialsProps) {
  return (
    <section className="py-20 sm:py-28 bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink text-center mb-12 tracking-[-0.02em]">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-paper border border-linen rounded-card p-6 sm:p-8 flex flex-col"
            >
              <Quote size={24} className="text-honey/30 mb-4" />
              <blockquote className="text-charcoal/90 leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-ink text-sm">
                  {item.author}
                </p>
                <p className="text-xs text-charcoal/60 mt-0.5">
                  {item.role}
                  {item.location && `, ${item.location}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
