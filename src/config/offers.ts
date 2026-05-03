export interface Offer {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "curriculum" | "training" | "certification" | "book" | "art-supplies" | "free-resource";
  price?: string;
  image?: string;
  badge?: string;
}

export const offers: Offer[] = [
  {
    id: "painting-curriculum",
    title: "Painting Curriculum",
    description: "A sequenced curriculum that introduces brushstrokes, color, materials, and process step by step.",
    href: "/curriculum/painting",
    category: "curriculum",
    price: "$97",
    badge: "Most Popular",
  },
  {
    id: "drawing-curriculum",
    title: "Drawing Curriculum",
    description: "Help children develop drawing skills with developmentally appropriate lessons and materials.",
    href: "/curriculum/drawing",
    category: "curriculum",
    price: "$97",
  },
  {
    id: "color-theory-curriculum",
    title: "Color Theory Curriculum",
    description: "Teach children to understand and use color with confidence through hands-on exploration.",
    href: "/curriculum/color-theory",
    category: "curriculum",
    price: "$97",
  },
  {
    id: "clay-modeling-curriculum",
    title: "Clay Modeling Curriculum",
    description: "Introduce three-dimensional art through clay work that builds fine motor skills and creativity.",
    href: "/curriculum/clay-modeling",
    category: "curriculum",
    price: "$97",
  },
  {
    id: "art-teaching-blueprint",
    title: "Art Teaching Blueprint",
    description: "Professional certification for educators who want to teach children visual arts with confidence.",
    href: "/certification/art-teaching-blueprint",
    category: "certification",
    price: "$497",
    badge: "Certification",
  },
];

export const audienceCards = [
  {
    id: "montessori-teachers",
    title: "Montessori Teachers",
    description: "Bring sequenced visual arts into your prepared environment with confidence and clarity.",
    image: "/images/audience-montessori.jpg",
  },
  {
    id: "homeschool-parents",
    title: "Homeschool Parents",
    description: "Give your child a rich art education at home with structure, freedom, and wonder.",
    image: "/images/audience-homeschool.jpg",
  },
  {
    id: "art-educators",
    title: "Art Educators",
    description: "Deepen your practice with Montessori-aligned pedagogy and developmental understanding.",
    image: "/images/audience-educators.jpg",
  },
  {
    id: "school-leaders",
    title: "School & Program Leaders",
    description: "Equip your staff with a proven art curriculum and professional certification pathway.",
    image: "/images/audience-leaders.jpg",
  },
];

export const offerCards = [
  {
    id: "curriculum",
    title: "Curriculum",
    description: "Complete lesson sequences for painting, drawing, clay, color theory, and more.",
    href: "/curriculum",
    image: "/images/offer-curriculum.jpg",
  },
  {
    id: "books",
    title: "Books",
    description: "Authoritative guides on Montessori art education for your classroom or home shelf.",
    href: "/bookstore",
    image: "/images/offer-books.jpg",
  },
  {
    id: "video-training",
    title: "Video Training",
    description: "On-demand trainings to help you set up your art environment and guide children.",
    href: "/training",
    image: "/images/offer-training.jpg",
  },
  {
    id: "certification",
    title: "Certification",
    description: "Earn your Art Teaching Blueprint certification and teach with professional confidence.",
    href: "/certification",
    image: "/images/offer-certification.jpg",
  },
  {
    id: "art-supplies",
    title: "Art Supplies",
    description: "Carefully selected materials that match the curriculum and Montessori philosophy.",
    href: "/art-supplies",
    image: "/images/offer-supplies.jpg",
  },
  {
    id: "free-resources",
    title: "Free Resources",
    description: "Start with free video lessons, checklists, and guides to transform your art practice.",
    href: "/free-resources",
    image: "/images/offer-free.jpg",
  },
];
