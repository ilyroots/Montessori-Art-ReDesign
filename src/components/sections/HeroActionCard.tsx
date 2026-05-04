"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Palette, GraduationCap } from "lucide-react";
import { easeOutExpo } from "@/components/motion/motionVariants";

const actions = [
  {
    icon: <Play size={16} />,
    label: "Start Your Free Art Path",
    description: "Color Mixing Starter",
    href: "/academy/start",
    color: "bg-bee-yellow/15 text-honey border-bee-yellow/20",
  },
  {
    icon: <GraduationCap size={16} />,
    label: "Explore the Academy",
    description: "Guided learning paths",
    href: "/academy",
    color: "bg-kids-blue/10 text-kids-blue border-kids-blue/20",
  },
  {
    icon: <Palette size={16} />,
    label: "Find Curriculum",
    description: "Home, homeschool, or classroom",
    href: "/curriculum",
    color: "bg-creative-pink/10 text-creative-pink border-creative-pink/20",
  },
  {
    icon: <BookOpen size={16} />,
    label: "Preview Lesson Paths",
    description: "See what's inside",
    href: "/training",
    color: "bg-sage/20 text-earth-brown border-sage/30",
  },
];

export function HeroActionCard() {
  return (
    <motion.div
      className="w-full max-w-xl mx-auto"
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: easeOutExpo }}
    >
      <div className="bg-paper border border-linen rounded-2xl shadow-lifted p-2">
        {actions.map((action, i) => (
          <motion.div
            key={action.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: easeOutExpo }}
          >
            <Link
              href={action.href}
              className="flex items-center gap-3 p-3.5 rounded-xl hover:bg-canvas/40 transition-colors group"
            >
              <div
                className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ${action.color} group-hover:scale-105 transition-transform`}
              >
                {action.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ink group-hover:text-honey transition-colors">
                  {action.label}
                </p>
                <p className="text-xs text-charcoal/50">{action.description}</p>
              </div>
              <ArrowRight
                size={16}
                className="text-charcoal/30 group-hover:text-honey group-hover:translate-x-1 transition-all"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
