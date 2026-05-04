"use client";

import { UserPlus, Route, PlayCircle, CheckSquare, Save, Unlock } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

const steps = [
  { icon: <UserPlus size={22} />, title: "Create a free account", description: "No credit card. No commitment. Just your name and email." },
  { icon: <Route size={22} />, title: "Choose a learning path", description: "Pick from Color Mixing, Art Shelf, Clay Play, Drawing, or Teacher Preview." },
  { icon: <PlayCircle size={22} />, title: "Watch a short lesson", description: "Each lesson is 10–30 minutes with clear, warm instruction." },
  { icon: <CheckSquare size={22} />, title: "Complete a hands-on art task", description: "Paint, mix, build, draw — every lesson includes a real creative task." },
  { icon: <Save size={22} />, title: "Save your progress", description: "Check off tasks, save quiz scores, and see your dashboard grow." },
  { icon: <Unlock size={22} />, title: "Unlock the next step", description: "Complete lessons to unlock the next, or upgrade for full access." },
];

export function AcademyHowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">How It Works</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em]">
              Six simple steps to creative confidence
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="bg-paper border border-linen rounded-card p-6 h-full hover:shadow-card-hover transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-honey/10 flex items-center justify-center text-honey">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-charcoal/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-semibold text-ink mb-1">{step.title}</h3>
                <p className="text-sm text-charcoal/70">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
