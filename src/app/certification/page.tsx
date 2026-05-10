import { CertificationPageTemplate } from "@/components/templates/CertificationPageTemplate";
import { getPageByNewPath } from "@/config/existingSiteMap";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Art Teaching Blueprint Certification",
  description:
    "Professional certification for educators who want to teach children visual arts with confidence, sequence, and developmental understanding.",
});

// Fallback to legacy Leadpages until native checkout is verified.
const siteMapEntry = getPageByNewPath("/certification");

export default function CertificationPage() {
  return (
    <CertificationPageTemplate
      siteMapEntry={siteMapEntry}
      heroHeadline={
        <>
          Teach children visual arts with{" "}
          <span className="text-bee-yellow">confidence</span>, sequence, and
          developmental understanding.
        </>
      }
      heroSubheadline="The Art Teaching Blueprint™ is a professional development certification for educators ready to lead meaningful, structured, and joyful art experiences in the Montessori environment."
      primaryCtaLabel="Request Program Details"
      primaryCtaHref={siteMapEntry?.fallbackExternalUrl || "/contact"}
      stats={[
        { label: "CPD Hours", value: "50+" },
        { label: "Training Videos", value: "60+" },
        { label: "Access Period", value: "3 Years" },
        { label: "Certificate", value: "Included" },
      ]}
      problemParagraphs={[
        "You may have a teaching credential, a Montessori diploma, or years of classroom experience — but when it comes to visual arts, you are often left to figure it out alone.",
        "Without a clear sequence, art becomes either too structured (adult-directed crafts) or too loose (messy free-for-all). Neither serves the child.",
        "The Art Teaching Blueprint™ fills this gap with a complete certification that gives you the confidence, curriculum knowledge, and practical skills to lead exceptional art experiences.",
      ]}
      modules={[
        {
          number: "01",
          title: "Foundations of Montessori Art",
          description:
            "Understand the intersection of Montessori philosophy and visual arts pedagogy.",
        },
        {
          number: "02",
          title: "The Prepared Art Environment",
          description:
            "Design, organize, and maintain an art space that fosters independence and creativity.",
        },
        {
          number: "03",
          title: "Sequenced Skill Building",
          description:
            "Learn how to introduce materials and techniques in a logical, developmental sequence.",
        },
        {
          number: "04",
          title: "Process-Based Art Practices",
          description:
            "Honor the child's creative process while providing just enough structure for growth.",
        },
        {
          number: "05",
          title: "Observation & Documentation",
          description:
            "Develop systems for tracking artistic development and planning next steps.",
        },
        {
          number: "06",
          title: "Curriculum Design & Implementation",
          description:
            "Create a customized art curriculum for your specific classroom or program.",
        },
      ]}
      outcomes={[
        "Design and maintain a prepared art environment",
        "Present art materials using Montessori principles",
        "Sequence lessons for painting, drawing, clay, and color theory",
        "Facilitate process-based art without taking over",
        "Observe and document children's artistic development",
        "Create a customized art curriculum for any setting",
        "Advocate for art education within your school or community",
      ]}
      whoItsFor={[
        "Montessori guides seeking art specialization",
        "Homeschool parents building a comprehensive art program",
        "Art teachers new to Montessori environments",
        "Early childhood educators passionate about visual arts",
        "School leaders developing staff art competency",
        "Anyone who believes children deserve quality art education",
      ]}
      whoItsNotFor={[
        "Those looking for a quick weekend workshop",
        "Educators unwilling to engage with child-led practices",
        "Anyone seeking craft templates rather than pedagogy",
      ]}
      licensingText="The Art Teaching Blueprint™ Certification is a professional development credential in visual arts education. Certified facilitators may teach visual arts directly to children. They may not train, certify, or credential other educators, nor reproduce or rebrand the Science Art Method™. It does not replace an AMI or AMS Montessori credential, but complements any early childhood or elementary teaching background."
      testimonials={[]}
      trustBadges={[
        "7-week professional program",
        "Self-paced online training",
        "Certificate on completion",
      ]}
      faqItems={[
        {
          question: "What is the Art Teaching Blueprint Certification?",
          answer:
            "It is a comprehensive professional development program that certifies educators to teach visual arts to children using Montessori-aligned, developmentally appropriate methods.",
        },
        {
          question: "How long does the program take?",
          answer:
            "The program is designed as a 7-week online training. Most participants complete it at their own pace. You have three years of access to all materials.",
        },
        {
          question: "Is this a Montessori certification?",
          answer:
            "This is an art education certification grounded in Montessori principles. It does not replace an AMI or AMS Montessori credential, but it complements any early childhood or elementary teaching background.",
        },
        {
          question: "Do I receive a certificate?",
          answer:
            "Yes. Upon successful completion, you receive a certificate recognizing your professional development in Montessori art education.",
        },
        {
          question: "What can certified facilitators do?",
          answer:
            "Certified facilitators may teach visual arts directly to children. They may not train, certify, or credential other educators, nor reproduce or rebrand the Science Art Method™.",
        },
      ]}
    />
  );
}
