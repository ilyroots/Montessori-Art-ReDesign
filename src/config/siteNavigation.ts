export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

// ------------------------------------------------------------------
// Main Navigation — Public migration site only
// ------------------------------------------------------------------
// Academy / subscription / membership / dashboard items are removed
// from public nav. Academy exists at /academy for future work but is
// not promoted in the public launch.
// ------------------------------------------------------------------

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Curriculum",
    href: "/curriculum",
    children: [
      { label: "Painting", href: "/curriculum/painting", description: "Sequenced painting lessons" },
      { label: "Drawing", href: "/curriculum/drawing", description: "Developmental drawing path" },
      { label: "Color Theory", href: "/curriculum/color-theory", description: "Understanding color mixing" },
      { label: "Clay Modeling", href: "/curriculum/clay-modeling", description: "Sculpture & hand-building" },
      { label: "Painting Work", href: "/curriculum/painting-work", description: "Montessori elementary focus" },
    ],
  },
  {
    label: "Shop",
    href: "/art-supplies",
    children: [
      { label: "All Supplies", href: "/art-supplies", description: "Browse all art materials" },
      { label: "Paints", href: "/art-supplies/paints", description: "Safe non-toxic paints" },
      { label: "Drawing", href: "/art-supplies/drawing", description: "Pencils, crayons & more" },
      { label: "Clay", href: "/art-supplies/clay", description: "Modeling & sculpture" },
      { label: "Art Books", href: "/bookstore", description: "Guides & curriculum books" },
    ],
  },
  {
    label: "Resources",
    href: "/free-resources",
    children: [
      { label: "Blog", href: "/blog", description: "Art education insights" },
      { label: "Free Resources", href: "/free-resources", description: "Downloads & checklists" },
      { label: "Video Training", href: "/training", description: "On-demand art lessons" },
      { label: "Newsletter", href: "/newsletter", description: "Weekly art inspiration" },
    ],
  },
  { label: "About", href: "/about" },
];

// ------------------------------------------------------------------
// Nav CTA — Removed Academy CTA. No public CTA in nav for now.
// ------------------------------------------------------------------
export const navCta = {
  label: "",
  href: "",
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
