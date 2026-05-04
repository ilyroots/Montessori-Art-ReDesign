import { createMetadata } from "@/lib/seo";
import { primaryStoreCategories, supportStorePages, storeNotice } from "@/config/storeCategories";
import { ArtSuppliesClient } from "./ArtSuppliesClient";

export const metadata = createMetadata({
  title: "Art Supplies",
  description:
    "Premium safe non-toxic art supplies, curriculum materials, and teaching resources for Montessori and children's art environments.",
});

export default function ArtSuppliesPage() {
  return (
    <ArtSuppliesClient
      categories={primaryStoreCategories}
      supportLinks={supportStorePages}
      notice={storeNotice}
    />
  );
}
