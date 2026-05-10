import { PaintingClient } from "./PaintingClient";
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
  return <PaintingClient siteMapEntry={siteMapEntry} />;
}
