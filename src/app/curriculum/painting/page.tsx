import { BookOpen, Video, FileText, Users, Clock, Check } from "lucide-react";
import { CurriculumSalesPageTemplate } from "@/components/templates/CurriculumSalesPageTemplate";
import { getPageByNewPath } from "@/config/existingSiteMap";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Painting Curriculum — Montessori Art Lessons",
  description:
    "A sequenced curriculum that introduces brushstrokes, color, materials, and process step by step. For Montessori guides, homeschool parents, and art educators.",
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
          Painting lessons that feel{" "}
          <span className="text-terracotta italic">prepared, purposeful,</span>{" "}
          and child-led.
        </>
      }
      heroSubheadline="A sequenced curriculum that introduces brushstrokes, color, materials, and process step by step. No more messy, random, or overly adult-directed painting sessions."
      problemParagraphs={[
        "You want to offer painting, but it quickly becomes messy, random, or overly adult-directed. You are not sure which materials to buy, what order to teach skills, or how to step back without losing structure.",
        "You have seen beautiful Montessori art environments online, but replicating them feels overwhelming. You need a system, not another Pinterest board.",
      ]}
      methodSteps={[
        {
          title: "Prepare the shelf",
          description:
            "Learn exactly which materials to select, how to organize them, and how to maintain the environment.",
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
            "Document developmental progress and know exactly when to introduce the next lesson.",
        },
      ]}
      includedFeatures={[
        {
          icon: <BookOpen size={22} />,
          title: "12 Sequenced Lessons",
          description:
            "From brush introduction to watercolor techniques to creative expression.",
        },
        {
          icon: <Video size={22} />,
          title: "Video Presentations",
          description:
            "Watch Spramani demonstrate each lesson with real children in a real classroom.",
        },
        {
          icon: <FileText size={22} />,
          title: "Printable Lesson Plans",
          description:
            "Downloadable PDFs with objectives, materials, procedure, and extensions.",
        },
        {
          icon: <Users size={22} />,
          title: "Observation Guides",
          description:
            "Know what to look for and how to document each child's artistic growth.",
        },
        {
          icon: <Clock size={22} />,
          title: "Material Lists",
          description:
            "Exact product recommendations with links and budget-friendly alternatives.",
        },
        {
          icon: <Check size={22} />,
          title: "Troubleshooting Guide",
          description:
            "Solutions for common challenges — messy sessions, reluctant painters, and more.",
        },
      ]}
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
        "Spramani has spent over two decades refining this curriculum in real Montessori classrooms. Every lesson has been tested, observed, and adjusted based on how children actually respond.",
        "She holds certifications in Montessori education and has trained thousands of teachers worldwide. Her work bridges the gap between art pedagogy and Montessori practice.",
      ]}
      testimonials={[
        {
          quote:
            "Finally, a painting curriculum that feels prepared and purposeful. My students are more confident and creative than ever.",
          author: "Maria T.",
          role: "Montessori Guide",
          location: "Portland, OR",
        },
        {
          quote:
            "I was overwhelmed by art before this. Now I have a clear sequence and my children ask to paint every day.",
          author: "Jennifer L.",
          role: "Homeschool Mom",
          location: "Austin, TX",
        },
        {
          quote:
            "The lesson videos alone are worth the price. Spramani explains each presentation with such clarity.",
          author: "David R.",
          role: "Art Specialist",
          location: "Chicago, IL",
        },
      ]}
      faqItems={[
        {
          question: "Do I need to be a Montessori teacher to use this?",
          answer:
            "No. While the curriculum is designed with Montessori principles in mind, homeschool parents, art teachers, and early childhood educators of all backgrounds will find it accessible and adaptable.",
        },
        {
          question: "What age range is this for?",
          answer:
            "The curriculum is designed for children ages 3–12, with specific lesson adaptations for early childhood (3–6) and elementary (6–12) levels.",
        },
        {
          question: "What materials do I need?",
          answer:
            "You will need basic watercolor and tempera paints, quality brushes in various sizes, watercolor paper, palettes, and a few organization tools. A complete material list is included with the curriculum.",
        },
        {
          question: "Is this a digital download?",
          answer:
            "Yes. You receive instant access to downloadable lesson plans, printable resources, and video presentations.",
        },
        {
          question: "Can I use this in a classroom setting?",
          answer:
            "Absolutely. The curriculum is designed for both classroom and homeschool use. Many Montessori schools use it as their primary painting program.",
        },
      ]}
    />
  );
}
