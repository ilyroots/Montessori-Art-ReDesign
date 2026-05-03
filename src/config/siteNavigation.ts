export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Curriculum",
    href: "/curriculum",
    children: [
      { label: "Painting", href: "/curriculum/painting" },
      { label: "Drawing", href: "/curriculum/drawing" },
      { label: "Color Theory", href: "/curriculum/color-theory" },
      { label: "Clay Modeling", href: "/curriculum/clay-modeling" },
      { label: "Painting Work", href: "/curriculum/painting-work" },
      { label: "Crafting & Building", href: "/curriculum/crafting-building" },
    ],
  },
  {
    label: "Training",
    href: "/training",
    children: [
      { label: "Homeschooling Art", href: "/training/homeschooling-art" },
      { label: "Infant & Toddler Art", href: "/training/infant-toddler-art" },
      { label: "Art Shelf Setup", href: "/training/art-shelf" },
      { label: "Process-Based Art", href: "/training/process-based-art" },
      { label: "Positive Art Talk", href: "/training/positive-art-talk" },
      { label: "Nature Art", href: "/training/nature-art" },
    ],
  },
  { label: "Certification", href: "/certification" },
  { label: "Books", href: "/bookstore" },
  { label: "Art Supplies", href: "/art-supplies" },
  { label: "Free Resources", href: "/free-resources" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const navCta = {
  label: "Explore Curriculum",
  href: "/curriculum",
};

export const footerNavigation = {
  offers: [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Training", href: "/training" },
    { label: "Certification", href: "/certification" },
    { label: "Books", href: "/bookstore" },
    { label: "Art Supplies", href: "/art-supplies" },
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
