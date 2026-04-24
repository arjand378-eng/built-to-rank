import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const base = "https://builttorank.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,                      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/proof/peel-excavation`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`,                   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...pages, ...posts];
}
