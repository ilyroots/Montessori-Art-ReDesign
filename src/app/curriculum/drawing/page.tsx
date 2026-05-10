import { createMetadata } from "@/lib/seo";
import { getPageByNewPath } from "@/config/existingSiteMap";
import { DrawingClient } from "./DrawingClient";

export const metadata = createMetadata({
  title: "Drawing Curriculum — Montessori Art Education",
  description:
    "A structured drawing curriculum with Early Childhood (16 studios) and Elementary (47 studios) editions. Science Art Method™ by Nature of Art®.",
});

export default function DrawingCurriculumPage() {
  const siteMapEntry = getPageByNewPath("/curriculum/drawing");
  return <DrawingClient siteMapEntry={siteMapEntry} />;
}
