import { createMetadata } from "@/lib/seo";
import ColorTheoryClient from "./ColorTheoryClient";

export const metadata = createMetadata({
  title: "Color Theory — Montessori Art Curriculum",
  description:
    "Interactive color mixing atelier for Montessori art education. Explore primary, secondary, and tertiary colors through hands-on digital experiments.",
});

export default function ColorTheoryPage() {
  return <ColorTheoryClient />;
}
