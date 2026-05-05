import { createMetadata } from "@/lib/seo";
import { LeadMagnetPageTemplate } from "@/components/templates/LeadMagnetPageTemplate";
import { phasesOfArtDevelopmentExtract } from "@/config/publicContentExtract";

export const metadata = createMetadata({
  title: "Free Videos: Phases of Art Development",
  description:
    "Register to watch 3 free videos covering art development from toddler through elementary years. For Montessori guides, parents, and educators.",
});

const whatYoullLearn = [
  "Toddler art development — scribbles, marks, and sensory exploration.",
  "Ages 3–6 — symbolic representation, color discovery, and form.",
  "Ages 6–12 — realistic drawing, technique, and creative expression.",
  "How to support each phase with the right materials and language.",
];

const audience = [
  "Montessori guides",
  "Homeschool parents",
  "Early childhood educators",
  "Art teachers",
  "School leaders",
];

const relatedResources = [
  {
    title: "Color Mixing Video",
    href: "/free-resources/color-mixing-video",
    description: "Free video on how to set up one color prompt and engage students.",
    type: "free-resource" as const,
  },
  {
    title: "Storybook Art Video",
    href: "/free-resources/storybook-art-video",
    description: "Learn to theme art activities easily with storytime books.",
    type: "free-resource" as const,
  },
  {
    title: "Drawing Curriculum",
    href: "/curriculum/drawing",
    description: "Structured drawing studio experiences from scribble to form.",
    type: "curriculum" as const,
  },
  {
    title: "Painting Curriculum",
    href: "/curriculum/painting",
    description: "57 sequenced painting studio experiences for the Montessori environment.",
    type: "curriculum" as const,
  },
];

export default function PhasesOfArtDevelopmentPage() {
  return (
    <LeadMagnetPageTemplate
      resource={phasesOfArtDevelopmentExtract}
      whatYoullLearn={whatYoullLearn}
      audience={audience}
      relatedResources={relatedResources}
      integrationStatus="fallback-external"
      heroImage="/images/elementary-painting-classroom.jpg"
    />
  );
}
