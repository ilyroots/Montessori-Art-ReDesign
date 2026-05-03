// ============================================================
// Legal Disclaimers — Nature of Art®
// ============================================================
// Reusable legal text blocks for curriculum, training, and certification pages.
// All text extracted from current public-facing legal pages and sales pages.
// Source of truth: montessori-art.com/terms-of-service/
// ============================================================

export const SCIENCE_ART_METHOD_DISCLAIMER =
  "Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™ certification program.";

export const CURRICULUM_METHOD_DISCLAIMER =
  "This curriculum demonstrates application of the Science Art Method™ but does not teach diagnostic decision-making, developmental sequencing, or instructional judgment. Those are taught inside The Art Teaching Blueprint Certification.";

export const TRAINING_USE_RESTRICTION =
  "This training is for personal professional development only. Completion does not authorize you to train, certify, or credential other educators, or to represent the Science Art Method™ as your own teaching system.";

export const CERTIFICATION_GOVERNANCE =
  "Certified Art Teaching Blueprint educators may teach visual arts directly to children. They may not train, certify, or credential other educators. They may not reproduce, rebrand, or present the Science Art Method™ as a school-developed or Montessori-authored system.";

export const DIGITAL_PRODUCT_POLICY =
  "Digital curriculum and training purchases cannot be refunded. Printed materials carry a 30-day satisfaction guarantee.";

export const REFUND_POLICY_PRINTED_ONLY =
  "30-day satisfaction guarantee for printed version only. Digital curriculum cannot be refunded.";

export const COPYRIGHT_NOTICE =
  "All materials are copyrighted by Nature of Art®. Licensed for individual classroom use with children only. No permission is granted to train other educators, create derivative works, or redistribute as a training model.";

export const INDIVIDUAL_USE_LICENSE =
  "Materials are licensed for individual classroom or homeschool use with children. Institutional licenses are available upon request.";

export interface LegalBlock {
  id: string;
  label: string;
  text: string;
  appliesTo: ("curriculum" | "training" | "certification" | "book" | "all")[];
}

export const legalBlocks: LegalBlock[] = [
  {
    id: "science-art-method",
    label: "Science Art Method™ Disclaimer",
    text: SCIENCE_ART_METHOD_DISCLAIMER,
    appliesTo: ["curriculum", "book"],
  },
  {
    id: "curriculum-method",
    label: "Curriculum Method Disclaimer",
    text: CURRICULUM_METHOD_DISCLAIMER,
    appliesTo: ["curriculum"],
  },
  {
    id: "training-restriction",
    label: "Training Use Restriction",
    text: TRAINING_USE_RESTRICTION,
    appliesTo: ["training"],
  },
  {
    id: "certification-governance",
    label: "Certification Governance",
    text: CERTIFICATION_GOVERNANCE,
    appliesTo: ["certification"],
  },
  {
    id: "digital-policy",
    label: "Digital Product Policy",
    text: DIGITAL_PRODUCT_POLICY,
    appliesTo: ["curriculum", "training", "certification", "book"],
  },
  {
    id: "refund-printed",
    label: "Refund Policy",
    text: REFUND_POLICY_PRINTED_ONLY,
    appliesTo: ["curriculum", "book"],
  },
  {
    id: "copyright",
    label: "Copyright Notice",
    text: COPYRIGHT_NOTICE,
    appliesTo: ["all"],
  },
  {
    id: "individual-license",
    label: "Individual Use License",
    text: INDIVIDUAL_USE_LICENSE,
    appliesTo: ["curriculum", "training", "book"],
  },
];

export function getLegalBlocksFor(type: LegalBlock["appliesTo"][number]): LegalBlock[] {
  return legalBlocks.filter((b) => b.appliesTo.includes(type) || b.appliesTo.includes("all"));
}
