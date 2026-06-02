import type { MetadataRoute } from "next";

/**
 * Dynamic Sitemap Generator for C4L Foundation
 * Supports localization (vi, en) for all public routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://c4lfoundation.org";
  
  const locales = ["vi", "en"];
  const paths = [
    "", // Homepage
    "/about",
    "/apply",
    "/transparency",
    "/journal",
    "/contact",
    "/hybrid-4l"
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" || path === "/journal" ? "daily" : "weekly",
        priority: path === "" ? 1.0 : path === "/apply" ? 0.9 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
