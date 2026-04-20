import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}> = {
  "why-trades-businesses-need-a-website-peel-region": {
    title: "Why Every Trades Business in Peel Region Needs a Website in 2026",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Business",
    content: (
      <div className="flex flex-col gap-6">
        <p>If you are a plumber, roofer, landscaper, or contractor in Peel Region and you do not have a professional website, you are losing jobs to your competitors every single day. Not occasionally. Every day.</p>
        <p>Here is what is actually happening: when a homeowner in Brampton needs a plumber at 9pm, they open Google and search "plumber near me." Google shows them three or four businesses at the top. Those businesses get the call. If your business is not there, you do not exist as far as that customer is concerned.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">The Search Is Already Happening Without You</h2>
        <p>Most trades business owners underestimate how often their potential customers search online. People in Mississauga, Brampton, and Caledon are searching for local contractors dozens of times per day. They are searching on their phones from job sites, from their kitchens at night, from their cars. They are not opening the Yellow Pages. They are not asking their neighbour. They are Googling it.</p>
        <p>A professional website puts you in front of those searches. Without one, you are invisible to the majority of people looking to hire someone like you right now.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">A Facebook Page Is Not Enough</h2>
        <p>A lot of trades businesses rely on a Facebook page and word of mouth. That works to a point. But Facebook does not show up in Google search results the way a proper website does. Word of mouth has a ceiling. A website has no ceiling. It works for you 24 hours a day, seven days a week, while you are on the job site.</p>
        <p>Your website is your best salesperson. It answers questions, builds trust, and gets people to call you, all without you lifting a finger.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">What a Real Website Does for a Trades Business</h2>
        <p>A professionally built website does several things that a Facebook page and a basic Google listing simply cannot:</p>
        <ul className="flex flex-col gap-2 list-none">
          {[
            "It ranks on Google for the exact searches your customers are typing",
            "It shows your work, your services, and your service area clearly",
            "It builds instant credibility when someone lands on it",
            "It has a contact form and phone number that converts visitors into booked jobs",
            "It works on every device, including the phones your customers are using",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-violet-400 mt-1">&#8594;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-4">Your Competitors Already Have One</h2>
        <p>The trades businesses getting the most calls in Brampton and Mississauga right now are not necessarily the best at their trade. They are the ones that show up on Google with a clean, fast, professional website. Some of them are not even that good. But they are showing up and you are not, so they are getting the call.</p>
        <p>The good news is that the bar is still relatively low in the trades industry in Peel Region. Most existing websites for local contractors are outdated, slow, and built on cheap templates. A quality custom website stands out immediately.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">The Bottom Line</h2>
        <p>Every month you operate without a proper website is a month of leads going to your competitors. The investment in a professional website pays for itself with a single new client in most trades. After that, every lead it generates is pure profit.</p>
        <p>If you are a trades business in Peel Region and you are ready to start getting found online, get in touch for a free quote. No pressure, no hard sell. Just a real conversation about your business.</p>
      </div>
    ),
  },

  "local-seo-contractors-brampton": {
    title: "Local SEO for Contractors: How to Rank on Google in Your City",
    date: "February 28, 2026",
    readTime: "7 min read",
    category: "SEO",
    content: (
      <div className="flex flex-col gap-6">
        <p>Local SEO is the process of getting your business to show up in Google search results when people near you search for your service. For a plumber in Brampton, that means showing up when someone in Brampton searches "plumber near me" or "emergency plumber Brampton." For a roofer in Mississauga, it means ranking for "roofing contractor Mississauga."</p>
        <p>It is the most important form of marketing for any local trades business. Here is a complete, no-fluff breakdown of how it works and what you need to do.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">Google Business Profile: Your Most Important Asset</h2>
        <p>Before anything else, you need a fully completed and verified Google Business Profile. This is the card that shows up on the right side of Google search results, in Google Maps, and in the local pack (the three businesses that show near the top of local searches).</p>
        <p>Your Google Business Profile should include your exact business name, address, phone number, hours, website link, services, and photos of your work. The more complete it is, the better. Reviews are also a major factor. A business with 30 Google reviews showing an average of 4.8 stars will outrank a competitor with 5 reviews almost every time.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">On-Page SEO: Telling Google What You Do and Where</h2>
        <p>Your website needs to clearly tell Google what you do and where you do it. This means using the right keywords in the right places. For a roofing contractor in Brampton, your homepage title might be "Roofing Contractor in Brampton, ON | [Your Company Name]." Your page content should naturally mention the services you offer and the cities you serve.</p>
        <p>The most important on-page elements are:</p>
        <ul className="flex flex-col gap-2 list-none">
          {[
            "Title tags: the title that appears in browser tabs and Google results",
            "Meta descriptions: the short summary under your link in search results",
            "H1 heading: the main heading on each page",
            "Body content: naturally mentions your services and service area",
            "Image alt text: describes your images for Google",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-violet-400 mt-1">&#8594;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-4">Schema Markup: Speaking Google's Language</h2>
        <p>Schema markup is structured data you add to your website that helps Google understand exactly what your business is, what services you offer, and where you are located. It is invisible to visitors but very visible to Google. A properly configured LocalBusiness schema with your NAP (name, address, phone), service area, and service list gives you a significant edge over competitors who do not have it.</p>
        <p>Most template websites and cheap web design shops skip schema entirely. It is one of the reasons professionally built sites rank faster.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">Consistency Is Everything</h2>
        <p>Your business name, address, and phone number need to be identical everywhere online: your website, Google Business Profile, Facebook, local directories, and any other listing. Even small differences like "St." versus "Street" or "647-555-0101" versus "+1 647 555 0101" can hurt your rankings. Google is looking for consistency as a signal of legitimacy.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">Patience and Consistency Win</h2>
        <p>Local SEO is not something that happens overnight. Most businesses see meaningful results within three to six months of implementing proper SEO. The businesses that rank at the top of Google for local searches have usually been consistently building their online presence for months or years.</p>
        <p>The good news: if you start now and your competitors are not doing this, you can outrank them within a few months with the right setup. The window to be an early mover in local trades SEO in the GTA is still open.</p>
      </div>
    ),
  },

  "what-trades-website-must-have-2026": {
    title: "5 Things Your Trades Business Website Must Have (And Most Don't)",
    date: "February 10, 2026",
    readTime: "4 min read",
    category: "Web Design",
    content: (
      <div className="flex flex-col gap-6">
        <p>Most trades business websites fail for the same reasons. They are slow. They are hard to use on a phone. They bury the phone number. They have no clear call to action. A website that does not convert visitors into calls is not an asset. It is a liability.</p>
        <p>Here are the five things every trades business website needs to actually generate leads.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">1. Mobile-First Design</h2>
        <p>Over 70 percent of searches for local trades businesses happen on a mobile phone. If your website is hard to use on a phone, most of your potential customers are bouncing immediately and calling your competitor instead.</p>
        <p>Mobile-first does not mean your site just barely works on mobile. It means it was designed for mobile from the ground up. Text is readable without zooming. Buttons are big enough to tap. The phone number is one tap to call. The contact form is easy to fill out on a touchscreen.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">2. Fast Loading Speed</h2>
        <p>Google uses page speed as a ranking factor. More importantly, customers will not wait for a slow site. If your website takes more than three seconds to load, a significant portion of visitors will leave before it even finishes loading.</p>
        <p>Fast loading means optimized images, clean code, a proper hosting setup, and no unnecessary plugins or scripts bloating the page. A well-built custom site loads in under two seconds on most connections.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">3. A Clear, Prominent Contact Method</h2>
        <p>Your phone number should be visible immediately when someone lands on your site, ideally in the top navigation bar and again above the fold on the homepage. Your contact form should be simple. Name, phone, email, and a brief description of the job. That is all you need. Anything more creates friction and reduces conversions.</p>
        <p>Every page should make it easy to contact you. Do not make people hunt for your phone number.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">4. Proof of Your Work</h2>
        <p>Trades customers want to see that you have done the job before. Photos of completed projects, a portfolio section, before and after shots, these all build trust immediately. Even a few good photos of real jobs you have completed will outperform stock photography every time.</p>
        <p>If you can get even one or two written reviews or testimonials on the site, even better. Social proof is one of the strongest conversion factors for local trades businesses.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">5. SEO Built In From Day One</h2>
        <p>A beautiful website that nobody can find on Google is not doing its job. SEO needs to be part of the build from the beginning, not added later as an afterthought. That means proper title tags, meta descriptions, schema markup, a sitemap, and content that actually contains the keywords your customers are searching for.</p>
        <p>The difference between a site built with SEO in mind and one built without it is the difference between ranking on page one within three months or not ranking at all.</p>

        <h2 className="text-2xl font-bold text-foreground mt-4">The Bottom Line</h2>
        <p>A website that is fast, mobile-friendly, easy to contact through, shows proof of your work, and is built for SEO will outperform 90 percent of competitor sites in the trades industry. Most local competitors are missing two or three of these. Get all five right and you will be the obvious choice when someone searches for your trade in your city.</p>
      </div>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

const descriptions: Record<string, string> = {
  "why-trades-businesses-need-a-website-peel-region":
    "If you're a plumber, roofer, or landscaper in Peel Region without a website, you're handing jobs to competitors every day. Here's exactly why — and how to fix it.",
  "local-seo-contractors-brampton":
    "Local SEO is how trades businesses in Brampton and Mississauga show up when customers search. A complete, no-fluff guide to ranking on Google in your city.",
  "what-trades-website-must-have-2026":
    "Most trades business websites fail because they're missing the basics. Here are 5 things that separate a website that gets calls from one that just sits there.",
};

const base = "https://builttorankk.netlify.app";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found | Built to Rank" };
  return {
    title: `${post.title} | Built to Rank`,
    description: descriptions[slug] ?? post.title,
    alternates: { canonical: `${base}/blog/${slug}` },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6" style={{ background: "#080810" }}>
          <div className="text-center flex flex-col items-center gap-4">
            <h1 className="text-foreground" style={{ fontFamily: "var(--font-bebas)", fontSize: "4rem", letterSpacing: "0.02em" }}>
              Post Not Found
            </h1>
            <Link href="/blog" className={cn(buttonVariants({ variant: "outline" }), "border-white/10 hover:bg-violet-900/20")}>
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
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
            <div className="text-base leading-relaxed text-white/85">
              {post.content}
            </div>
            <Separator className="mt-16 mb-10 opacity-30" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/blog" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={14} /> All Posts
              </Link>
              <a href="/contact" className={cn(buttonVariants({ size: "sm" }), "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2")}>
                Get a Free Quote <ArrowRight size={13} weight="bold" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
