import { createMetadata } from "@/lib/seo";
import { LeadMagnetPageTemplate } from "@/components/templates/LeadMagnetPageTemplate";
import { storybookArtVideoExtract } from "@/config/publicContentExtract";

export const metadata = createMetadata({
  title: "Free Video: Theme Art Activities With Storybooks",
  description:
    "Free 1-hour video training with Spramani Elaun. Learn easy ways to teach art lessons and secrets to theming art with storytime books. For Montessori guides and parents.",
});

const whatYoullLearn = [
  "How to theme art activities easily with storytime books.",
  "Quick planning ideas for scheduling art activities.",
  "Easy ways to teach art lessons that children love.",
  "Secrets to connecting literacy and visual arts.",
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
    title: "Color Mixing Video",
    href: "/free-resources/color-mixing-video",
    description: "Free video on how to set up one color prompt and engage students.",
    type: "free-resource" as const,
  },
  {
    title: "Phases of Art Development",
    href: "/free-resources/phases-of-art-development",
    description: "3 free videos covering art development from toddler through elementary.",
    type: "free-resource" as const,
  },
  {
    title: "Nature Art Training",
    href: "/training/nature-art",
    description: "Learn to theme art activities around the natural world.",
    type: "curriculum" as const,
  },
  {
    title: "Painting Curriculum",
    href: "/curriculum/painting",
    description: "57 sequenced painting studio experiences for the Montessori environment.",
    type: "curriculum" as const,
  },
];

export default function StorybookArtVideoPage() {
  return (
    <LeadMagnetPageTemplate
      resource={storybookArtVideoExtract}
      whatYoullLearn={whatYoullLearn}
      audience={audience}
      relatedResources={relatedResources}
      integrationStatus="fallback-external"
      heroImage="/images/children-painting-classroom.jpg"
    />
  );
}
