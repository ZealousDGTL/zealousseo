import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zealous Digital Solutions | ESTD 2016",
  description: "Full-service digital solutions to enhance your online presence. From website design and targeted Meta and Google Ads to SEO, mobile optimization, and conversion rate optimization.",
  keywords: ["digital marketing", "SEO", "web design", "PPC", "Google Ads", "Meta Ads"],
  authors: [{ name: "Zealous Digital Solutions" }],
  creator: "Zealous Digital",
  publisher: "Zealous Digital Solutions",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Zealous Digital Solutions | ESTD 2016",
    description: "Full-service digital solutions to enhance your online presence.",
    type: "website",
    locale: "en_US",
    url: "https://zealousdigital.com",
    siteName: "Zealous Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zealous Digital Solutions | ESTD 2016",
    description: "Full-service digital solutions to enhance your online presence.",
    creator: "@zealousdigital",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zealous Digital Solutions",
              "url": "https://zealousdigital.com",
              "logo": "https://zealousdigital.com/logo.png",
              "description": "Full-service digital solutions to enhance your online presence.",
              "foundingDate": "2016",
              "sameAs": ["https://github.com/ZealousDGTL", "https://linkedin.com/company/zealousdigital"]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-white text-zinc-900 min-h-screen font-sans`}
      >
        <CookieConsent />
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              {/* Fingerprint Icon - Orange */}
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path 
                    d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2zm0 32c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14-6.268 14-14 14z" 
                    fill="#FF5500"
                    opacity="0.2"
                  />
                  <path 
                    d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" 
                    fill="#FF5500"
                    opacity="0.4"
                  />
                  <path 
                    d="M20 14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" 
                    fill="#FF5500"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">ZEALOUS</span>
                <span className="text-[10px] tracking-widest text-zinc-400 -mt-1">DIGITAL</span>
              </div>
            </a>
            
            {/* Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <a href="/" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">Home</a>
              <a href="/about" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">About</a>
              <a href="/blog" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">Blog</a>
              <a href="/services" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">Services</a>
              <a href="/privacy" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">Privacy</a>
              <a href="/contact" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">Contact</a>
              <a href="/contact" className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors shadow-sm">
                Get Started
              </a>
            </div>
          </nav>
        </header>
        
        <main className="pt-20">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-zinc-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 relative">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <path d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2z" fill="#FF5500" opacity="0.3"/>
                      <path d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8z" fill="#FF5500" opacity="0.5"/>
                      <path d="M20 14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" fill="#FF5500"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-bold tracking-tight">ZEALOUS</span>
                    <span className="text-[10px] tracking-widest text-zinc-500 block -mt-1">DIGITAL</span>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Full-service digital solutions to enhance your online presence.
                </p>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4 text-zinc-200">Services</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><a href="/services" className="hover:text-orange-500 transition-colors">SEO</a></li>
                  <li><a href="/services" className="hover:text-orange-500 transition-colors">Web Design</a></li>
                  <li><a href="/services" className="hover:text-orange-500 transition-colors">PPC Advertising</a></li>
                  <li><a href="/services" className="hover:text-orange-500 transition-colors">Content Marketing</a></li>
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h4 className="font-semibold mb-4 text-zinc-200">Company</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><a href="/about" className="hover:text-orange-500 transition-colors">About Us</a></li>
                  <li><a href="/blog" className="hover:text-orange-500 transition-colors">Blog</a></li>
                  <li><a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="/cookies" className="hover:text-orange-500 transition-colors">Cookie Policy</a></li>
                  <li><a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
                </ul>
              </div>
              
              {/* Connect */}
              <div>
                <h4 className="font-semibold mb-4 text-zinc-200">Connect</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li><a href="#" className="hover:text-orange-500 transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-zinc-500 text-sm">
                © {new Date().getFullYear()} Zealous Digital Solutions. All rights reserved.
              </div>
              <div className="text-zinc-600 text-xs font-mono">
                ESTD 2016
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
