import { createMetadata } from "@/lib/seo";
import { getPageByNewPath } from "@/config/existingSiteMap";
import { ClayModelingClient } from "./ClayModelingClient";

export const metadata = createMetadata({
  title: "Kids Clay Modeling — Montessori Art Curriculum",
  description:
    "A structured clay modeling curriculum with 29 studio experiences organized by increasing material handling and sculptural complexity. Science Art Method™ by Nature of Art®.",
});

export default function ClayModelingCurriculumPage() {
  const siteMapEntry = getPageByNewPath("/curriculum/clay-modeling");
  return <ClayModelingClient siteMapEntry={siteMapEntry} />;
}
