import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Tracking } from "@/components/Tracking";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://zealousseo.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AI Search Visibility & Agentic Automation | Zealous Digital",
    template: "%s | Zealous Digital",
  },
  description:
    "We architect permanent search infrastructure your business owns forever. AI Search Optimization, Entity Building, Technical SEO, and Revenue Orchestration — deployed in weeks, owned for life.",
  openGraph: {
    type: "website",
    siteName: "Zealous Digital",
    title: "AI Search Visibility & Agentic Automation | Zealous Digital",
    description:
      "Architect permanent search infrastructure. Position your brand as the canonical answer in ChatGPT, Perplexity, and Google AI Overviews.",
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zealous Digital — AI Search Visibility & Agentic Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Visibility & Agentic Automation | Zealous Digital",
    description:
      "Architect permanent search infrastructure. Position your brand as the canonical answer in ChatGPT, Perplexity, and Google AI Overviews.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zealous Digital",
    url: "https://zealousseo.com",
    logo: "https://zealousseo.com/og-image.png",
    description:
      "AI Search Visibility and Agentic Automation consultancy. We architect permanent search infrastructure — AI Search Optimization, Entity Building, Technical SEO, and Revenue Orchestration.",
    sameAs: [
      "https://linkedin.com/company/zealous-digital",
      "https://twitter.com/zealous_digital",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      url: "https://zealousseo.com/contact",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${manrope.variable} ${instrumentSerif.variable} font-sans`}>
        <Tracking />
        {children}
      </body>
    </html>
  );
}
