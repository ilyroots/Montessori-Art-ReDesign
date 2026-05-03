export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ------------------------------------------------------------------
// Main Navigation — Matches current public site structure
// ------------------------------------------------------------------

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  {
    label: "Art Curriculum",
    href: "/curriculum",
    children: [
      { label: "Painting", href: "/curriculum/painting" },
      { label: "Painting Work / Montessori Elementary", href: "/curriculum/painting-work" },
      { label: "Clay Modeling", href: "/curriculum/clay-modeling" },
      { label: "Color Theory", href: "/curriculum/color-theory" },
      { label: "Drawing", href: "/curriculum/drawing" },
    ],
  },
  {
    label: "Video Training",
    href: "/training",
    children: [
      { label: "FREE – How to Set-Up One Color Prompt", href: "/free-resources/color-mixing-video" },
      { label: "FREE – Theme Art With Story Books", href: "/free-resources/storybook-art-video" },
      { label: "BUY – Homeschooling Art Starter", href: "/training/homeschooling-art" },
      { label: "VIDEO – Infant & Toddler Art Webinar", href: "/training/infant-toddler-art" },
      { label: "FREE – Phases of Art Development", href: "/free-resources/phases-of-art-development" },
      { label: "BUY – How To Stage An Art Shelf", href: "/training/art-shelf" },
      { label: "Process-Based Art Video Training", href: "/training/process-based-art" },
      { label: "BUY – Positive Art Talk", href: "/training/positive-art-talk" },
      { label: "BUY – Painting Key Lessons 101", href: "/training/painting-key-lessons" },
      { label: "BUY – Theme Art & The Natural World", href: "/training/nature-art" },
    ],
  },
  {
    label: "Art Certification",
    href: "/certification",
    children: [
      { label: "Montessori Art Certification", href: "/certification" },
    ],
  },
  { label: "Art Books", href: "/bookstore" },
  { label: "Art Store", href: "/art-supplies" },
  { label: "Newsletter", href: "/newsletter" },
];

export const navCta = {
  label: "Explore Curriculum",
  href: "/curriculum",
};

// ------------------------------------------------------------------
// Footer Navigation
// ------------------------------------------------------------------

export const footerNavigation = {
  offers: [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Training", href: "/training" },
    { label: "Certification", href: "/certification" },
    { label: "Art Books", href: "/bookstore" },
    { label: "Art Store", href: "/art-supplies" },
    { label: "Free Resources", href: "/free-resources" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};
