import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  url = "https://institutsandzak.org",
  type = "website",
}: GenerateMetadataProps): Metadata {
  const fullTitle = `${title} | Institut Sandžak`;
  
  return {
    title: fullTitle,
    description,
    keywords: [
      "Sandžak",
      "istraživanje",
      "edukacija",
      "Novi Pazar",
      ...keywords,
    ].join(", "),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Institut Sandžak",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "bs_BA",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}