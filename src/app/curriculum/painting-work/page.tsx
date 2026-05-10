import { createMetadata } from "@/lib/seo";
import { getPageByNewPath } from "@/config/existingSiteMap";
import { PaintingWorkClient } from "./PaintingWorkClient";

export const metadata = createMetadata({
  title: "Painting Work Art Album — Montessori Elementary",
  description:
    "A Montessori Elementary Art Album with seven key painting lessons, full-color photography, paint facts, and artist techniques. Companion to Kids Painting. By Spramani Elaun.",
});

// TODO: Connect this page to Keap checkout URL after Keap inventory is complete.
//       The keapUrl preserves the legacy Keap sales path until native checkout is mapped.
const siteMapEntry = getPageByNewPath("/curriculum/painting-work");

export default function PaintingWorkPage() {
  return <PaintingWorkClient siteMapEntry={siteMapEntry} />;
}
