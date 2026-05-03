export interface LegacyUrlEntry {
  oldUrl: string;
  newPath: string;
  platform: string;
  status: "planned" | "implemented" | "tested";
  priority: "high" | "medium" | "low";
  notes?: string;
}

export const legacyUrls: LegacyUrlEntry[] = [
  {
    oldUrl: "https://spramani.lpages.co/all-my-books/",
    newPath: "/bookstore",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
    notes: "Books landing",
  },
  {
    oldUrl: "https://spramani.lpages.co/painting-curriculum-sales-page-/",
    newPath: "/curriculum/painting",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
    notes: "Top curriculum page",
  },
  {
    oldUrl: "https://spramani.lpages.co/drawing-curriculum/",
    newPath: "/curriculum/drawing",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://spramani.lpages.co/color-theory-curriculum-sales-page/",
    newPath: "/curriculum/color-theory",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://spramani.lpages.co/clay-modeling-curriculum/",
    newPath: "/curriculum/clay-modeling",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://spramani.lpages.co/arttraining2020-waitlist/",
    newPath: "/certification",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
    notes: "Certification interest",
  },
  {
    oldUrl: "https://spramani.lpages.co/artteachingblueprint/",
    newPath: "/certification/art-teaching-blueprint",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
    notes: "Certification detail",
  },
  {
    oldUrl: "https://keap.page/hj952/homeschooling-art-where-to-start.html",
    newPath: "/training/homeschooling-art",
    platform: "Keap",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://keap.page/hj952/infant-toddler-webinar.html",
    newPath: "/training/infant-toddler-art",
    platform: "Keap",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://keap.page/hj952/new-landing-page3.html",
    newPath: "/training/art-shelf",
    platform: "Keap",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://keap.page/hj952/process-based-video-training.html",
    newPath: "/training/process-based-art",
    platform: "Keap",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://keap.page/hj952/positive-artful-talk-vide-training.html",
    newPath: "/training/positive-art-talk",
    platform: "Keap",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://keap.page/hj952/theming-art-the-natural-world.html",
    newPath: "/training/nature-art",
    platform: "Keap",
    status: "planned",
    priority: "high",
  },
  {
    oldUrl: "https://spramani.lpages.co/color-mixing-free-video-lesson/",
    newPath: "/free-resources/color-mixing-video",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
    notes: "Lead magnet",
  },
  {
    oldUrl: "https://spramani.lpages.co/phases-of-development-art-project-video-course",
    newPath: "/free-resources/phases-of-art-development",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
    notes: "Lead magnet",
  },
  {
    oldUrl: "https://spramani.lpages.co/how-to-talk-3-6-children-about-art-early-childhood",
    newPath: "/free-resources/storybook-art-video",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
    notes: "Lead magnet",
  },
  {
    oldUrl: "https://keap.page/hj952/painting-work-art-album.html",
    newPath: "/curriculum/painting-work",
    platform: "Keap",
    status: "planned",
    priority: "high",
    notes: "Companion album to Kids Painting",
  },
  {
    oldUrl: "https://spramani.lpages.co/october-online-training/",
    newPath: "/training/painting-key-lessons",
    platform: "Leadpages",
    status: "planned",
    priority: "high",
    notes: "Painting Key Lessons 101",
  },
];
