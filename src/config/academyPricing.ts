// ============================================================
// Academy Pricing Tiers — Config-driven interval pricing
// ============================================================
// TODO: Replace with Stripe / CMS integration when backend ready.
//
// Display pattern (ethical, transparent):
// - Large: effective monthly price
// - Small: actual billed amount + billing period
// - Badge: savings % for non-monthly plans
// - Annual is selected by default and visually recommended
// ============================================================

import type { AcademyTier } from "./academyLessons";

export type BillingInterval = "monthly" | "sixMonth" | "annual";

export interface IntervalPrice {
  interval: BillingInterval;
  effectiveMonthly: string; // "$6.75"
  effectiveMonthlyLabel: string; // "per month"
  billedAmount: string; // "$81"
  billedLabel: string; // "billed yearly"
  savingsLabel?: string; // "Save 25%"
  recommended?: boolean;
}

export interface PricingTier {
  id: AcademyTier;
  name: string;
  badge: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaAction: "start-free" | "demo-upgrade" | "view-path";
  prices: Record<BillingInterval, IntervalPrice>;
  popular?: boolean;
}

export const billingIntervalLabels: Record<BillingInterval, string> = {
  monthly: "Monthly",
  sixMonth: "6 Months",
  annual: "Annual",
};

export const academyPricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free Starter",
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
    prices: {
      monthly: {
        interval: "monthly",
        effectiveMonthly: "$0",
        effectiveMonthlyLabel: "forever",
        billedAmount: "$0",
        billedLabel: "no billing",
      },
      sixMonth: {
        interval: "sixMonth",
        effectiveMonthly: "$0",
        effectiveMonthlyLabel: "forever",
        billedAmount: "$0",
        billedLabel: "no billing",
      },
      annual: {
        interval: "annual",
        effectiveMonthly: "$0",
        effectiveMonthlyLabel: "forever",
        billedAmount: "$0",
        billedLabel: "no billing",
      },
    },
  },
  {
    id: "family",
    name: "Family Studio",
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
    ctaLabel: "Demo Family Studio",
    ctaAction: "demo-upgrade",
    popular: true,
    prices: {
      monthly: {
        interval: "monthly",
        effectiveMonthly: "$9",
        effectiveMonthlyLabel: "/ month",
        billedAmount: "$9",
        billedLabel: "billed monthly",
      },
      sixMonth: {
        interval: "sixMonth",
        effectiveMonthly: "$7.50",
        effectiveMonthlyLabel: "/ month",
        billedAmount: "$45",
        billedLabel: "billed every 6 months",
        savingsLabel: "Save 17%",
      },
      annual: {
        interval: "annual",
        effectiveMonthly: "$6.75",
        effectiveMonthlyLabel: "/ month",
        billedAmount: "$81",
        billedLabel: "billed yearly",
        savingsLabel: "Save 25%",
        recommended: true,
      },
    },
  },
  {
    id: "studioPlus",
    name: "Studio Plus / Art Box",
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
    ctaLabel: "Demo Studio Plus",
    ctaAction: "demo-upgrade",
    prices: {
      monthly: {
        interval: "monthly",
        effectiveMonthly: "$29",
        effectiveMonthlyLabel: "/ month",
        billedAmount: "$29",
        billedLabel: "billed monthly",
      },
      sixMonth: {
        interval: "sixMonth",
        effectiveMonthly: "$24",
        effectiveMonthlyLabel: "/ month",
        billedAmount: "$144",
        billedLabel: "billed every 6 months",
        savingsLabel: "Save 17%",
      },
      annual: {
        interval: "annual",
        effectiveMonthly: "$21.75",
        effectiveMonthlyLabel: "/ month",
        billedAmount: "$261",
        billedLabel: "billed yearly",
        savingsLabel: "Save 25%",
        recommended: true,
      },
    },
  },
  {
    id: "teacher",
    name: "Teacher / Certification",
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
    prices: {
      monthly: {
        interval: "monthly",
        effectiveMonthly: "Premium",
        effectiveMonthlyLabel: "pathway",
        billedAmount: "—",
        billedLabel: "pricing pending verification",
      },
      sixMonth: {
        interval: "sixMonth",
        effectiveMonthly: "Premium",
        effectiveMonthlyLabel: "pathway",
        billedAmount: "—",
        billedLabel: "pricing pending verification",
      },
      annual: {
        interval: "annual",
        effectiveMonthly: "Premium",
        effectiveMonthlyLabel: "pathway",
        billedAmount: "—",
        billedLabel: "pricing pending verification",
      },
    },
  },
];
