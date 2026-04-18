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

export const metadata: Metadata = {
  title: "Built to Rank | Web Design & SEO for Local Trades — GTA",
  description:
    "Built to Rank builds custom websites and gets trades businesses in Peel Region and the GTA found on Google. Web design + SEO for plumbers, roofers, landscapers, and contractors.",
  openGraph: {
    title: "Built to Rank | Web Design & SEO for Local Trades — GTA",
    description:
      "Custom websites and SEO for trades businesses in Peel Region and the GTA.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${bebasNeue.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
