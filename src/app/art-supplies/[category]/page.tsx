import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getCategoryById,
  getProductsByCategory,
  getSubCategories,
  storeCategories,
} from "@/config/storeProducts";
import { createMetadata } from "@/lib/seo";
import { CategoryClient } from "./CategoryClient";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return storeCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return createMetadata({
    title: `${cat.name} — Art Supplies`,
    description: cat.description,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const products = getProductsByCategory(cat.id);
  const subCategories = getSubCategories(cat.id);
  const parentCategory = cat.parentId ? getCategoryById(cat.parentId) : undefined;

  return (
    <CategoryClient
      category={cat}
      products={products}
      subCategories={subCategories}
      parentCategory={parentCategory}
    />
  );
}
