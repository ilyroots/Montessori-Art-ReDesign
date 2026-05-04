import { createMetadata } from "@/lib/seo";
import { LeadMagnetPageTemplate } from "@/components/templates/LeadMagnetPageTemplate";
import { colorMixingVideoExtract } from "@/config/publicContentExtract";

export const metadata = createMetadata({
  title: "Watch Free Video: How to Set Up One Color Prompt",
  description:
    "Free video lesson on how to set up one color prompt and engage students with color invitations. For Montessori guides, homeschool parents, and early childhood educators.",
});

const whatYoullLearn = [
  "How to set up one simple color prompt.",
  "How to prepare a color invitation for children.",
  "How to encourage independent color exploration.",
  "How to make color work feel inviting and easy to begin.",
];

const audience = [
  "Montessori guides",
  "Homeschool parents",
  "Early childhood educators",
  "Art teachers",
  "Parents introducing art at home",
];

const relatedResources = [
  {
    title: "Phases of Art Development",
    href: "/free-resources/phases-of-art-development",
    description: "Understand how children progress through natural stages of artistic growth.",
    type: "free-resource" as const,
  },
  {
    title: "Storybook Art Video",
    href: "/free-resources/storybook-art-video",
    description: "Learn to theme art activities easily with storytime books.",
    type: "free-resource" as const,
  },
  {
    title: "Color Theory Curriculum",
    href: "/curriculum/color-theory",
    description: "37 sequential color exploration lessons for ages 3–12.",
    image: "/images/color-theory-curriculum.jpg",
    type: "curriculum" as const,
  },
  {
    title: "Painting Curriculum",
    href: "/curriculum/painting",
    description: "57 sequenced painting studio experiences for the Montessori environment.",
    image: "/images/painting-curriculum.jpg",
    type: "curriculum" as const,
  },
];

export default function ColorMixingVideoPage() {
  return (
    <LeadMagnetPageTemplate
      resource={colorMixingVideoExtract}
      whatYoullLearn={whatYoullLearn}
      audience={audience}
      relatedResources={relatedResources}
      integrationStatus="fallback-external"
      heroImage="/images/child-watercolor-painting.jpg"
    />
  );
}
