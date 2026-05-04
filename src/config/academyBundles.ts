// ============================================================
// Academy Supply Bundles / Art Box Concepts
// ============================================================
// TODO: Replace with real product catalog / store integration.
// These are concept-only bundles for the prototype demo.
// ============================================================

export interface AcademyBundle {
  id: string;
  title: string;
  description: string;
  image?: string;
  items: string[];
  priceNote: string;
  status: "concept" | "notify-me" | "available";
  ctaLabel: string;
  relatedPathSlug?: string;
}

export const academyBundles: AcademyBundle[] = [
  {
    id: "color-mixing-starter-kit",
    title: "Color Mixing Starter Kit",
    description: "Everything a family needs to begin the Color Mixing Starter path.",
    image: "/images/color-theory-curriculum.jpg",
    items: [
      "Primary watercolor paints",
      "Mixing tray",
      "Child-safe brush set",
      "Color wheel printable",
      "Lesson path access placeholder",
      "Watercolor paper pad",
    ],
    priceNote: "Concept bundle — pricing TBD",
    status: "concept",
    ctaLabel: "Add to future bundle",
    relatedPathSlug: "color-mixing-starter",
  },
  {
    id: "clay-play-kit",
    title: "Clay Play Kit",
    description: "A sensory-rich clay exploration kit for toddlers and young children.",
    image: "/images/clay-play.jpg",
    items: [
      "Non-hardening modeling clay",
      "Wooden rolling tool",
      "Texture cards set",
      "Child observation guide",
      "Storage tray",
      "Cleanup cloth",
    ],
    priceNote: "Concept bundle — pricing TBD",
    status: "concept",
    ctaLabel: "Notify me when available",
    relatedPathSlug: "clay-play-basics",
  },
  {
    id: "art-shelf-starter-bundle",
    title: "Art Shelf Starter Bundle",
    description: "Curated materials and guides to set up an independent art shelf.",
    image: "/images/art-shelf-painting.jpg",
    items: [
      "Recommended shelf materials",
      "Printable labels set",
      "Setup guide booklet",
      "Parent/teacher video placeholder",
      "Material rotation calendar",
      "Cleanup routine card",
    ],
    priceNote: "Concept bundle — pricing TBD",
    status: "concept",
    ctaLabel: "Add to future bundle",
    relatedPathSlug: "art-shelf-setup",
  },
  {
    id: "teacher-curriculum-bundle",
    title: "Teacher Curriculum Bundle",
    description: "The complete curriculum set for classroom or homeschool implementation.",
    image: "/images/painting-curriculum.jpg",
    items: [
      "Painting Curriculum",
      "Drawing Curriculum",
      "Color Theory Curriculum",
      "Clay Modeling Curriculum",
      "Implementation guide",
      "Practicum checklist",
    ],
    priceNote: "See curriculum store for pricing",
    status: "available",
    ctaLabel: "View in Store",
    relatedPathSlug: "teacher-certification-preview",
  },
];
