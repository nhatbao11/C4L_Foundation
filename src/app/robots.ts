import type { MetadataRoute } from "next";

/**
 * Dynamic robots.txt Generator for C4L Foundation
 * Optimizes web crawler indexing and links to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://c4lfoundation.org";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/static/", "/_next/image/", "/favicon.ico"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
