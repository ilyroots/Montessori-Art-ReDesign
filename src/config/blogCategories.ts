export interface BlogCategory {
  id: string;
  label: string;
  description: string;
  slug: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "painting",
    label: "Painting",
    description: "Lessons, materials, and guidance for teaching painting.",
    slug: "painting",
  },
  {
    id: "drawing",
    label: "Drawing",
    description: "Developing drawing skills in the Montessori environment.",
    slug: "drawing",
  },
  {
    id: "clay",
    label: "Clay",
    description: "Three-dimensional art and clay modeling.",
    slug: "clay",
  },
  {
    id: "color-theory",
    label: "Color Theory",
    description: "Teaching children to understand and use color.",
    slug: "color-theory",
  },
  {
    id: "art-shelf",
    label: "Art Shelf",
    description: "Preparing the art environment and materials.",
    slug: "art-shelf",
  },
  {
    id: "process-art",
    label: "Process Art",
    description: "Process-based creative exploration.",
    slug: "process-art",
  },
  {
    id: "montessori-environment",
    label: "Montessori Environment",
    description: "Integrating art into the prepared environment.",
    slug: "montessori-environment",
  },
  {
    id: "homeschool",
    label: "Homeschool Art",
    description: "Art education for homeschooling families.",
    slug: "homeschool",
  },
  {
    id: "infant-toddler",
    label: "Infant & Toddler",
    description: "Art experiences for the youngest learners.",
    slug: "infant-toddler",
  },
];
