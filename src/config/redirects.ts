export interface RedirectEntry {
  source: string;
  destination: string;
  permanent: boolean;
  platform?: string;
  notes?: string;
}

export const redirects: RedirectEntry[] = [
  // Leadpages → New site
  {
    source: "/all-my-books",
    destination: "/bookstore",
    permanent: true,
    platform: "Leadpages",
    notes: "Books landing page",
  },
  {
    source: "/painting-curriculum-sales-page-",
    destination: "/curriculum/painting",
    permanent: true,
    platform: "Leadpages",
    notes: "Top curriculum page",
  },
  {
    source: "/drawing-curriculum",
    destination: "/curriculum/drawing",
    permanent: true,
    platform: "Leadpages",
  },
  {
    source: "/color-theory-curriculum-sales-page",
    destination: "/curriculum/color-theory",
    permanent: true,
    platform: "Leadpages",
  },
  {
    source: "/clay-modeling-curriculum",
    destination: "/curriculum/clay-modeling",
    permanent: true,
    platform: "Leadpages",
  },
  {
    source: "/curriculum/color",
    destination: "/curriculum/color-theory",
    permanent: true,
    notes: "Canonical color theory path",
  },
  {
    source: "/curriculum/clay",
    destination: "/curriculum/clay-modeling",
    permanent: true,
    notes: "Canonical clay modeling path",
  },
  {
    source: "/arttraining2020-waitlist",
    destination: "/certification",
    permanent: true,
    platform: "Leadpages",
    notes: "Certification interest",
  },
  {
    source: "/artteachingblueprint",
    destination: "/certification/art-teaching-blueprint",
    permanent: true,
    platform: "Leadpages",
    notes: "Certification detail",
  },

  // Free resources
  {
    source: "/color-mixing-free-video-lesson",
    destination: "/free-resources/color-mixing-video",
    permanent: true,
    platform: "Leadpages",
  },
  {
    source: "/phases-of-development-art-project-video-course",
    destination: "/free-resources/phases-of-art-development",
    permanent: true,
    platform: "Leadpages",
  },
  {
    source: "/how-to-talk-3-6-children-about-art-early-childhood",
    destination: "/free-resources/storybook-art-video",
    permanent: true,
    platform: "Leadpages",
  },
];

// Keap pages use full URLs; handle in middleware or server config
export const externalRedirects: RedirectEntry[] = [
  {
    source: "https://keap.page/hj952/homeschooling-art-where-to-start.html",
    destination: "/training/homeschooling-art",
    permanent: true,
    platform: "Keap",
  },
  {
    source: "https://keap.page/hj952/infant-toddler-webinar.html",
    destination: "/training/infant-toddler-art",
    permanent: true,
    platform: "Keap",
  },
  {
    source: "https://keap.page/hj952/new-landing-page3.html",
    destination: "/training/art-shelf",
    permanent: true,
    platform: "Keap",
  },
  {
    source: "https://keap.page/hj952/process-based-video-training.html",
    destination: "/training/process-based-art",
    permanent: true,
    platform: "Keap",
  },
  {
    source: "https://keap.page/hj952/positive-artful-talk-vide-training.html",
    destination: "/training/positive-art-talk",
    permanent: true,
    platform: "Keap",
  },
  {
    source: "https://keap.page/hj952/theming-art-the-natural-world.html",
    destination: "/training/nature-art",
    permanent: true,
    platform: "Keap",
  },
];
