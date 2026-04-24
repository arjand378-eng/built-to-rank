import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAllPostSlugs, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found | Built to Rank" };

  const base = "https://builttorank.ca";
  return {
    title: `${post.title} | Built to Rank`,
    description: post.description,
    alternates: { canonical: `${base}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${base}/blog/${slug}`,
      images: [{ url: `${base}/og-image.jpg`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${base}/og-image.jpg`],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const base = "https://builttorank.ca";

  const isoDate = new Date(post.date).toISOString().split("T")[0];

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": isoDate,
    "author": {
      "@type": "Person",
      "name": "Arjan Dhillon",
      "url": `${base}/about`,
    },
    "image": { "@type": "ImageObject", "url": `${base}/og-image.jpg`, "width": 1200, "height": 630 },
    "publisher": {
      "@type": "Organization",
      "name": "Built to Rank",
      "url": base,
      "logo": { "@type": "ImageObject", "url": `${base}/logo.webp`, "width": 512, "height": 512 },
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${base}/blog/${slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${base}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `${base}/blog/${slug}` },
    ],
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        <section
          className="relative pt-40 pb-16 px-6 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 60%,#080810 100%)" }}
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(109,40,217,0.1) 0%, transparent 65%)" }} />
          <div className="relative max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <Badge variant="outline" className="border-violet-700/30 bg-violet-900/15 text-violet-400 text-[0.68rem] tracking-widest uppercase">
                {post.category}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock size={11} /> {post.readTime}
              </div>
            </div>
            <h1 className="text-foreground leading-tight mb-4"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.2rem,5vw,3.5rem)", letterSpacing: "0.02em" }}>
              {post.title}
            </h1>
            <p className="text-sm text-muted-foreground">{post.date} &middot; Built to Rank</p>
          </div>
        </section>

        <section className="py-16 px-6" style={{ background: "#080810" }}>
          <div className="max-w-3xl mx-auto">
            <Separator className="mb-12 opacity-30" />
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-foreground prose-headings:mt-8 prose-headings:mb-3
                prose-p:text-white/85 prose-p:leading-relaxed
                prose-li:text-white/85 prose-li:leading-relaxed
                prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300
                prose-strong:text-white
                prose-ul:list-disc prose-ul:pl-5"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
            <Separator className="mt-16 mb-10 opacity-30" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/blog" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={14} /> All Posts
              </Link>
              <p className="text-center text-sm text-muted-foreground sm:text-right">
                Want me to review your site or Google Business Profile?
              </p>
              <a href="/contact" className={cn(buttonVariants({ size: "sm" }), "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2")}>
                Get a Free Audit <ArrowRight size={13} weight="bold" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
