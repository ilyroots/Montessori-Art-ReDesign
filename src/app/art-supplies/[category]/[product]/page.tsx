import { notFound } from "next/navigation";
import {
  getProductById,
  getCategoryBySlug,
  storeProducts,
  storeCategories,
} from "@/config/storeProducts";
import { createMetadata } from "@/lib/seo";
import { ProductDetailClient } from "./ProductDetailClient";

interface ProductPageProps {
  params: Promise<{ category: string; product: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; product: string }[] = [];
  for (const product of storeProducts) {
    for (const catId of product.categoryIds) {
      const cat = storeCategories.find((c) => c.id === catId);
      if (cat) {
        params.push({ category: cat.slug, product: product.id });
      }
    }
  }
  // Deduplicate
  return params.filter(
    (v, i, a) => a.findIndex((t) => t.category === v.category && t.product === v.product) === i
  );
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { product } = await params;
  const p = getProductById(product);
  if (!p) return {};
  return createMetadata({
    title: `${p.name} — Art Supplies`,
    description: p.description,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product } = await params;
  const cat = getCategoryBySlug(category);
  const prod = getProductById(product);

  if (!cat || !prod || !prod.categoryIds.includes(cat.id)) {
    notFound();
  }

  return <ProductDetailClient product={prod} category={cat} />;
}
