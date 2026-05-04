// ============================================================
// Academy Pricing Tiers
// ============================================================
// TODO: Replace with Stripe / CMS integration when backend ready.
// ============================================================

import type { AcademyTier } from "./academyLessons";

export interface PricingTier {
  id: AcademyTier;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  badge: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaAction: "start-free" | "demo-upgrade" | "view-path";
  popular?: boolean;
}

export const academyPricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free Starter",
    priceMonthly: "$0",
    priceYearly: "$0",
    badge: "Free forever",
    description: "Start with guided sample lessons and save your progress.",
    features: [
      "Starter learning path",
      "Selected free video lessons",
      "Progress dashboard",
      "One printable activity",
      "Weekly art prompt placeholder",
      "Locked previews of paid lessons",
    ],
    ctaLabel: "Start Free",
    ctaAction: "start-free",
  },
  {
    id: "family",
    name: "Family Studio",
    priceMonthly: "$9",
    priceYearly: "$99",
    badge: "Best for families",
    description: "Guided art learning for parents, homeschool families, and children.",
    features: [
      "Full beginner academy",
      "Child-friendly lessons",
      "Parent guides",
      "Printables",
      "Mini quizzes",
      "Monthly art challenge",
      "Progress badges",
    ],
    ctaLabel: "Choose Family Studio",
    ctaAction: "demo-upgrade",
    popular: true,
  },
  {
    id: "studioPlus",
    name: "Studio Plus / Art Box",
    priceMonthly: "$29",
    priceYearly: "$299",
    badge: "Premium projects",
    description: "Deeper projects, seasonal units, and future supply kit options.",
    features: [
      "Everything in Family Studio",
      "Premium monthly project path",
      "Advanced lessons",
      "Supply lists",
      "Optional art box concept",
      "Bonus workbooks",
    ],
    ctaLabel: "Explore Studio Plus",
    ctaAction: "demo-upgrade",
  },
  {
    id: "teacher",
    name: "Teacher / Certification",
    priceMonthly: "Premium",
    priceYearly: "Premium",
    badge: "For educators",
    description: "Professional curriculum, classroom implementation, and certification pathway.",
    features: [
      "Teacher curriculum path",
      "Classroom implementation guides",
      "Art Teaching Blueprint preview",
      "Practicum checklist",
      "Consultation CTA",
      "Everything in Studio Plus",
    ],
    ctaLabel: "View Teacher Path",
    ctaAction: "view-path",
  },
];
