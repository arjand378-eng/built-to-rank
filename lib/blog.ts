import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  description: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        readTime: data.readTime as string,
        category: data.category as string,
        excerpt: data.excerpt as string,
        description: data.description as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    readTime: data.readTime as string,
    category: data.category as string,
    excerpt: data.excerpt as string,
    description: data.description as string,
    contentHtml,
  };
}
