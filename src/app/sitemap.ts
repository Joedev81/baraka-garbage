import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barakagarbageservices.co.ke";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/request-pickup`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      priority: 0.3,
    },
  ];
}