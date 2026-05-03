import { CurriculumSalesPageTemplate } from "@/components/templates/CurriculumSalesPageTemplate";
import { getPageByNewPath } from "@/config/existingSiteMap";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kids Painting — Montessori Art Curriculum",
  description:
    "A comprehensive painting curriculum with 57 studio experiences. Spiral-bound book or digital PDF. Science Art Method™ by Nature of Art®.",
});

// TODO: Connect this page to Keap checkout URL after Keap inventory is complete.
//       The fallbackExternalUrl preserves the legacy Leadpages sales path
//       until native checkout is mapped in integrations.ts.
const siteMapEntry = getPageByNewPath("/curriculum/painting");

export default function PaintingCurriculumPage() {
  return (
    <CurriculumSalesPageTemplate
      productId="painting-curriculum"
      siteMapEntry={siteMapEntry}
      heroHeadline={
        <>
          57 painting studio experiences that feel{" "}
          <span className="text-terracotta italic">prepared, purposeful,</span>{" "}
          and child-led.
        </>
      }
      heroSubheadline="A Science Art Method™ Painting Studio Application by Nature of Art®. Comprehensive curriculum organized by increasing brushstroke and material complexity."
      problemParagraphs={[
        "You want to offer painting, but it quickly becomes messy, random, or overly adult-directed. You are not sure which materials to buy, what order to teach skills, or how to step back without losing structure.",
        "You have seen beautiful Montessori art environments online, but replicating them feels overwhelming. You need a system, not another Pinterest board.",
      ]}
      methodSteps={[
        {
          title: "Prepare the environment",
          description:
            "Learn exactly which materials to select, how to organize them, and how to maintain the painting shelf for independent use.",
        },
        {
          title: "Present the invitation",
          description:
            "Use clear, simple presentations that spark curiosity and respect the child's autonomy.",
        },
        {
          title: "Let the child explore",
          description:
            "Step back and observe. The curriculum teaches you what to look for and how to respond.",
        },
        {
          title: "Observe growth",
          description:
            "Document developmental progress and know exactly when to introduce the next studio experience.",
        },
      ]}
      // Features are pulled from products.ts (verified) — no invented claims
      whoItsFor={[
        "Montessori guides who want a sequenced painting program",
        "Homeschool parents seeking structure and confidence",
        "Art teachers new to Montessori philosophy",
        "Early childhood educators who value process over product",
        "School leaders building a comprehensive art curriculum",
      ]}
      whoItsNotFor={[
        "Those looking for craft projects with predetermined outcomes",
        "Educators who prefer teacher-directed art with no child autonomy",
        "Anyone seeking a one-time activity book rather than a curriculum",
      ]}
      instructorBio={[
        "Spramani Elaun is a Montessori art educator and founder of Nature of Art®. She has spent over two decades refining curriculum in real Montessori classrooms.",
        "Her Science Art Method™ bridges the gap between art pedagogy and Montessori practice, giving educators a clear sequence for bringing visual arts into the prepared environment.",
      ]}
      // No invented testimonials — only include verified testimonials from public pages
      testimonials={[]}
      faqItems={[
        {
          question: "Do I need to be a Montessori teacher to use this?",
          answer:
            "No. While the curriculum is designed with Montessori principles in mind, homeschool parents, art teachers, and early childhood educators of all backgrounds will find it accessible and adaptable.",
        },
        {
          question: "What age range is this for?",
          answer:
            "The curriculum is designed for children ages 3–12, with studio experiences organized by increasing brushstroke and material complexity.",
        },
        {
          question: "What materials do I need?",
          answer:
            "You will need basic watercolor and tempera paints, quality brushes in various sizes, watercolor paper, palettes, and a few organization tools. A complete materials list is included with the curriculum.",
        },
        {
          question: "Is this a digital download or a printed book?",
          answer:
            "Both options are available. You can purchase the spiral-bound printed book with free U.S. shipping, or the digital PDF for instant download.",
        },
        {
          question: "Can I use this in a classroom setting?",
          answer:
            "Absolutely. The curriculum is designed for both classroom and homeschool use.",
        },
        {
          question: "What is the refund policy?",
          answer:
            "We offer a 30-day satisfaction guarantee for the printed version only. Digital curriculum purchases cannot be refunded.",
        },
        {
          question: "Does this curriculum certify me to teach the Science Art Method™?",
          answer:
            "No. Purchase of curriculum does not grant permission to teach or represent the Science Art Method™. The Science Art Method™ is taught through The Art Teaching Blueprint™ certification program.",
        },
      ]}
    />
  );
}
