import { createMetadata } from "@/lib/seo";
import { CertificationUpsell } from "@/components/academy/CertificationUpsell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap, ClipboardCheck, Users, BookOpen } from "lucide-react";

export const metadata = createMetadata({
  title: "Teacher Certification — Nature of Art Academy",
  description: "From guided lessons to professional art teaching. Preview the Art Teaching Blueprint certification pathway.",
});

const checklistItems = [
  "Complete the Teacher Certification Preview path",
  "Observe children in an art environment",
  "Design a prepared art shelf",
  "Teach a sequenced lesson from the curriculum",
  "Submit practicum documentation",
  "Receive feedback from a certified mentor",
];

export default function AcademyCertificationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ivory">
        <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage uppercase tracking-wider mb-5">
                <GraduationCap size={12} />
                Professional Pathway
              </span>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6">
                From Guided Lessons to{" "}
                <span className="text-honey">Professional Art Teaching</span>
              </h1>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-8">
                The Nature of Art Academy is the beginning. For educators ready to go deeper, 
                the Art Teaching Blueprint certification offers a complete professional pathway.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/certification/art-teaching-blueprint"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-7 py-3.5 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
                >
                  View Certification
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/academy/path/teacher-certification-preview"
                  className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-7 py-3.5 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors"
                >
                  Preview Teacher Path
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What the path includes */}
      <section className="py-20 sm:py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em]">
                What the Teacher Path Includes
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: <BookOpen size={24} />, title: "Full Curriculum", desc: "Painting, Drawing, Color Theory, and Clay Modeling curricula with implementation guides." },
              { icon: <Users size={24} />, title: "Classroom Setup", desc: "Step-by-step guides for preparing art environments in Montessori and traditional classrooms." },
              { icon: <ClipboardCheck size={24} />, title: "Practicum", desc: "Observational practicum checklist with mentor feedback and reflection prompts." },
              { icon: <GraduationCap size={24} />, title: "Certification", desc: "Art Teaching Blueprint certificate and professional listing upon completion." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-paper border border-linen rounded-card p-6 h-full hover:shadow-card-hover transition-shadow duration-200">
                  <div className="w-10 h-10 rounded-full bg-honey/10 flex items-center justify-center text-honey mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal/70">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Practicum checklist */}
          <ScrollReveal>
            <div className="bg-paper border border-linen rounded-card p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="font-serif text-xl font-semibold text-ink mb-5">Practicum Checklist</h3>
              <ul className="space-y-3">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <Check size={16} className="mt-0.5 text-sage shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CertificationUpsell />
    </>
  );
}
