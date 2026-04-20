import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://builttorank.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
  ];
}
