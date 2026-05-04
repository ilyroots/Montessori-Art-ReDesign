export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

// ------------------------------------------------------------------
// Main Navigation — Clean grouped structure
// ------------------------------------------------------------------

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Academy",
    href: "/academy",
    children: [
      { label: "Start Free", href: "/academy/start", description: "Begin your art learning path" },
      { label: "Memberships", href: "/academy/pricing", description: "Unlock full curriculum access" },
      { label: "Dashboard Demo", href: "/academy/dashboard", description: "Preview your learning space" },
      { label: "Art Box & Bundles", href: "/academy/bundles", description: "Curated art supply kits" },
      { label: "Teacher Path", href: "/academy/certification", description: "Professional certification" },
    ],
  },
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
      { label: "Art Books", href: "/bookstore", description: "Guides & curriculum books" },
      { label: "Art Store", href: "/art-supplies", description: "Montessori art materials" },
      { label: "Bundles", href: "/academy/bundles", description: "Curated supply kits" },
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

export const navCta = {
  label: "Start Free",
  href: "/academy/start",
};

// ------------------------------------------------------------------
// Footer Navigation
// ------------------------------------------------------------------

export const footerNavigation = {
  offers: [
    { label: "Academy", href: "/academy" },
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
