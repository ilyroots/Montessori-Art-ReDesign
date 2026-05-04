"use client";

import { Heart, Home, School, Building2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const audiences = [
  { icon: <Heart size={24} />, title: "Families", description: "Parents and caregivers who want guided, meaningful art experiences at home." },
  { icon: <Home size={24} />, title: "Homeschool", description: "Homeschool educators looking for structured, Montessori-aligned art curriculum." },
  { icon: <School size={24} />, title: "Teachers", description: "Classroom teachers who need sequenced lessons, printables, and implementation support." },
  { icon: <Building2 size={24} />, title: "Schools", description: "School leaders building art programs with professional development and certification pathways." },
];

export function AcademyAudienceCards() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">Who the Academy Is For</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.06}>
          {audiences.map((a) => (
            <StaggerItem key={a.title}>
              <div className="bg-paper border border-linen rounded-card p-6 text-center h-full hover:shadow-card-hover transition-shadow duration-200">
                <div className="w-12 h-12 rounded-full bg-honey/10 flex items-center justify-center text-honey mx-auto mb-4">
                  {a.icon}
                </div>
                <h3 className="font-semibold text-ink mb-2">{a.title}</h3>
                <p className="text-sm text-charcoal/70">{a.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
