import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://builttorank.ca";

export const metadata: Metadata = {
  title: "Web Design & SEO for GTA Trades | Built to Rank",
  description:
    "Built to Rank builds custom websites and gets trades businesses across the GTA found on Google. Web design + SEO for plumbers, roofers, landscapers, and contractors. Get a free quote.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Web Design & SEO for GTA Trades | Built to Rank",
    description:
      "Custom websites and SEO for trades businesses across the GTA. Plumbers, roofers, landscapers, contractors. Free quote.",
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Built to Rank",
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Built to Rank — Web Design & SEO for GTA Trades" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & SEO for GTA Trades | Built to Rank",
    description: "Custom websites and SEO for trades businesses across the GTA.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Built to Rank",
  "description": "Custom web design and SEO for trades businesses across the GTA, Ontario.",
  "url": siteUrl,
  "telephone": "+16476578525",
  "email": "builttorank@hotmail.com",
  "founder": { "@type": "Person", "name": "Arjan Dhillon" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brampton",
    "addressRegion": "ON",
    "addressCountry": "CA",
  },
  "areaServed": [
    "Brampton", "Mississauga", "Caledon", "Bolton",
    "Vaughan", "Peel Region", "Greater Toronto Area",
  ],
  "serviceType": ["Web Design", "Web Development", "Local SEO", "SEO Optimization"],
  "priceRange": "$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${bebasNeue.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
