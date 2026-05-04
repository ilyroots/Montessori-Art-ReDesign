"use client";

import Link from "next/link";
import { Check, ArrowRight, GraduationCap, BookOpen, Users, ClipboardCheck } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const features = [
  { icon: <BookOpen size={20} />, title: "Full Curriculum Access", description: "Painting, Drawing, Color Theory, and Clay Modeling curricula." },
  { icon: <Users size={20} />, title: "Classroom Implementation", description: "Guides for setting up art environments in Montessori and traditional classrooms." },
  { icon: <ClipboardCheck size={20} />, title: "Practicum Checklist", description: "Step-by-step observational practicum for certification readiness." },
  { icon: <GraduationCap size={20} />, title: "Art Teaching Blueprint", description: "Professional certification pathway with Spramani Elaun." },
];

export function CertificationUpsell() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
                Professional Development
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-5">
                From Guided Lessons to Professional Art Teaching
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The Nature of Art Academy is the beginning. For educators ready to go deeper, the Art Teaching Blueprint certification offers a complete professional pathway.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-honey/10 flex items-center justify-center text-honey shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink text-sm">{f.title}</h4>
                      <p className="text-xs text-charcoal/60">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/certification/art-teaching-blueprint"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                >
                  View Certification
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/academy/path/teacher-certification-preview"
                  className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-6 py-3 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors"
                >
                  Preview Teacher Path
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-card bg-canvas border border-linen overflow-hidden shadow-card flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-honey/10 flex items-center justify-center">
                    <GraduationCap size={36} className="text-honey" />
                  </div>
                  <p className="font-serif text-lg font-semibold text-ink">Art Teaching Blueprint</p>
                  <p className="text-sm text-charcoal/60 mt-1">Professional certification pathway</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-paper border border-linen rounded-card p-4 shadow-card-hover max-w-[180px]">
                <p className="text-xs text-charcoal/70">
                  &ldquo;The most comprehensive Montessori art training I have experienced.&rdquo;
                </p>
                <p className="text-[10px] text-charcoal/40 mt-1">— Certified Guide, California</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
