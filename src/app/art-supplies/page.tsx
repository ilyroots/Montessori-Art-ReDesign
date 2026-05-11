import { createMetadata } from "@/lib/seo";
import { ArtSuppliesClient } from "./ArtSuppliesClient";

export const metadata = createMetadata({
  title: "Art Supplies — Safe Non-Toxic Materials for Kids",
  description:
    "Premium safe non-toxic art supplies, curriculum materials, and teaching resources for Montessori and children's art environments. Curated by Spramani Elaun.",
});

export default function ArtSuppliesPage() {
  return <ArtSuppliesClient />;
}
