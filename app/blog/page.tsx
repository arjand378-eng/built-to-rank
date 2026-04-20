import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Built to Rank — Web Design & SEO Tips for GTA Trades",
  description: "Practical guides on web design, local SEO, and digital marketing for trades businesses across the GTA.",
  alternates: { canonical: "https://builttorank.ca/blog" },
};

const posts = [
  {
    slug: "why-trades-businesses-need-a-website-peel-region",
    title: "Why Every Trades Business in Peel Region Needs a Website in 2026",
    excerpt: "If you're a plumber, roofer, or landscaper in Peel Region and you don't have a website, you're handing jobs to your competitors every day. Here's exactly why that's happening and how to fix it.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Business",
  },
  {
    slug: "local-seo-contractors-brampton",
    title: "Local SEO for Contractors: How to Rank on Google in Your City",
    excerpt: "Local SEO is how trades businesses in Brampton and Mississauga show up when potential customers search. This is the complete, no-fluff guide to getting found.",
    date: "February 28, 2026",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    slug: "what-trades-website-must-have-2026",
    title: "5 Things Your Trades Business Website Must Have (And Most Don't)",
    excerpt: "Most trades business websites fail because they're missing the basics. Here's what separates a website that gets calls from one that just sits there.",
    date: "February 10, 2026",
    readTime: "4 min read",
    category: "Web Design",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-40 pb-12 px-6 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 60%,#080810 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(109,40,217,0.1) 0%, transparent 65%)" }}
          />
          <div className="relative max-w-6xl mx-auto">
            <p className="section-eyebrow mb-5">Blog</p>
            <h1
              className="text-foreground leading-none max-w-2xl"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem,7vw,5rem)",
                letterSpacing: "0.02em",
              }}
            >
              SEO & Web Design<br />
              <span className="text-muted-foreground">Guides for Trades.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-[56ch]">
              Practical advice on getting your trades business found online.
              No fluff, no jargon.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-20 px-6" style={{ background: "#080810" }}>
          <div className="max-w-6xl mx-auto">
            <Separator className="mb-14 opacity-30" />
            <ScrollReveal animation="fadeUp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <Card className="h-full rounded-2xl border-white/7 bg-card hover:border-violet-700/30 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,box-shadow] duration-300">
                    <CardContent className="p-7 flex flex-col gap-4 h-full">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className="border-violet-700/30 bg-violet-900/15 text-violet-400 text-[0.68rem] tracking-widest uppercase"
                        >
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock size={11} />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 flex-1">
                        <h2 className="text-base font-bold text-foreground leading-snug group-hover:text-violet-300 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                        <span className="flex items-center gap-1 text-xs font-semibold text-violet-400 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={11} weight="bold" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 px-6"
          style={{ background: "linear-gradient(135deg,rgba(109,40,217,0.08) 0%,rgba(79,70,229,0.04) 100%)" }}
        >
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <h2
              className="text-foreground leading-none"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "0.02em" }}
            >
              Ready to Get Your Business Online?
            </h2>
            <a
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6")}
            >
              Get a Free Quote <ArrowRight size={15} weight="bold" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
