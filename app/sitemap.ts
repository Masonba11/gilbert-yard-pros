import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gilbertyardpros.com";

  const services = [
    "pavers-gilbert",
    "artificial-turf-gilbert",
    "irrigation-gilbert",
    "tree-trimming-gilbert",
    "yard-clean-up-gilbert",
    "weed-control-gilbert",
    "landscape-maintenance-gilbert",
    "lawn-care-gilbert",
    "landscape-design-gilbert",
    "hardscaping-gilbert",
    "landscape-lighting-gilbert",
    "landscape-rock-gilbert",
  ];

  const serviceAreas = ["gilbert", "mesa", "chandler", "san-tan-valley"];

  const blogPosts = [
    "best-artificial-turf-gilbert",
    "irrigation-system-maintenance",
    "paver-installation-guide",
    "desert-landscaping-tips",
    "tree-trimming-season",
    "water-efficient-landscaping",
  ];

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...serviceAreas.map((area) => ({
      url: `${baseUrl}/service-areas/${area}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return routes;
}
