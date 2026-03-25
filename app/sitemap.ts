import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fourfold.ai",
      lastModified: new Date("2026-03-20"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://fourfold.ai/how-we-work",
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fourfold.ai/pact",
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fourfold.ai/blog",
      lastModified: new Date("2026-03-20"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://fourfold.ai/blog/planorize",
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://fourfold.ai/blog/outcome-driven-management",
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
