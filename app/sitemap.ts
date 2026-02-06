import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ipogmptracker.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",   
    "/ipo",
    "/ipo/current-ipo",
    "/ipo/listed-ipo",
    "/ipo/upcoming-ipo",
    "/ipo-allotment-status",
    "/ipo-event-calendar",
    "/sme-ipo",
    "/sme-ipo/current-ipo",
    "/sme-ipo/listed-ipo",
    "/sme-ipo/upcoming-ipo",
    "/blog",
    "/broker",
    "/buyback",
    "/buyback/closed-buyback",
    "/buyback/current-buyback",
    "/buyback/upcoming-buyback",
    "/faqs",
    
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
