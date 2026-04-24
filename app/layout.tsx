import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import Script from "next/script";
import MobileCTA from "./components/MobileCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
  title: "Web Design & SEO for Trades | Built to Rank",
  description:
    "Built to Rank builds custom websites and local SEO foundations for trades businesses. Work directly with the builder. Get a free website audit.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Web Design & SEO for Trades | Built to Rank",
    description:
      "Custom websites and SEO foundations for trades businesses. Work directly with the builder. Free written audit.",
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Built to Rank",
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Built to Rank — Web Design & SEO for Trades" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & SEO for Trades | Built to Rank",
    description: "Custom websites and SEO foundations for trades businesses.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

// sameAs: add your GBP share URL here once builttorank.ca is live in the profile
// Go to business.google.com → Share → Copy link → paste below
const gbpUrl = "https://share.google/gc3SvARSXMq9mtw2o";

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Built to Rank",
  "description": "Custom web design and local SEO for trades businesses across the GTA, Ontario. Plumbers, roofers, HVAC, landscapers, and contractors.",
  "url": siteUrl,
  "image": `${siteUrl}/og-image.jpg`,
  "telephone": "+16476578525",
  "email": "info@builttorank.ca",
  "founder": { "@type": "Person", "name": "Arjan Dhillon" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brampton",
    "addressRegion": "ON",
    "addressCountry": "CA",
    "postalCode": "L6X 0R3",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.7315,
    "longitude": -79.7624,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
  ],
  "areaServed": [
    "Brampton", "Mississauga", "Caledon", "Bolton",
    "Vaughan", "Peel Region", "Greater Toronto Area",
  ],
  "serviceType": [
    "Web Design", "Web Development",
    "Local SEO", "SEO Optimization",
    "Google Business Profile Optimization",
  ],
  "knowsAbout": [
    "Local SEO for trades businesses",
    "Web design for contractors",
    "Google Business Profile optimization",
    "Next.js web development",
  ],
  ...(gbpUrl ? { "sameAs": [gbpUrl] } : {}),
  "priceRange": "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Built to Rank",
  "url": siteUrl,
  "description": "Web design and local SEO for trades businesses in the GTA.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${plusJakartaSans.variable} ${bebasNeue.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <MobileCTA />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
