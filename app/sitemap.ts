import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fourfold.ai",
      lastModified: new Date("2026-02-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://fourfold.ai/how-we-work",
      lastModified: new Date("2026-02-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fourfold.ai/outcome-driven-management",
      lastModified: new Date("2026-02-25"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
