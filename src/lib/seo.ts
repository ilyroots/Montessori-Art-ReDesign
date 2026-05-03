import type { Metadata } from "next";

export interface SeoProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  image = "/images/og-default.jpg",
  canonical,
  noIndex = false,
}: SeoProps): Metadata {
  const siteName = "Nature of Art — Montessori Art Education";
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  return {
    metadataBase: new URL("https://montessori-art.com"),
    title: fullTitle,
    description,
    ...(canonical && { alternates: { canonical } }),
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const defaultMetadata = createMetadata({
  title: "Nature of Art — Montessori Art Education",
  description:
    "Teach children visual arts with structure, freedom, and wonder. Curriculum, certification, and resources for Montessori guides, homeschool families, and educators.",
});
