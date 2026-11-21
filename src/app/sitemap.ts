import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://luongtuandung.id.vn",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}