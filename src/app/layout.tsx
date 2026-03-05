import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Zealous Digital Solutions | Enterprise Digital Performance",
  description: "Full-service digital solutions to enhance your online presence. From website design and targeted Meta and Google Ads to SEO, mobile optimization, and conversion rate optimization.",
  keywords: ["digital marketing", "SEO", "web design", "PPC", "Google Ads", "Meta Ads"],
  openGraph: {
    title: "Zealous Digital Solutions | Enterprise Digital Performance",
    description: "Full-service digital solutions to enhance your online presence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">
              Zealous<span className="text-indigo-500">.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-sm font-medium hover:text-indigo-400 transition-colors">Home</a>
              <a href="/about" className="text-sm font-medium hover:text-indigo-400 transition-colors">About</a>
              <a href="/services" className="text-sm font-medium hover:text-indigo-400 transition-colors">Services</a>
              <a href="/contact" className="text-sm font-medium hover:text-indigo-400 transition-colors">Contact</a>
              <a href="/contact" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-medium transition-colors">
                Get Started
              </a>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t border-white/10 bg-zinc-950 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <a href="/" className="text-xl font-bold tracking-tight">
                  Zealous<span className="text-indigo-500">.</span>
                </a>
                <p className="mt-4 text-zinc-400 text-sm">
                  Full-service digital solutions to enhance your online presence.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li><a href="/services" className="hover:text-white transition-colors">SEO</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Web Design</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">PPC Advertising</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Content Marketing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Zealous Digital Solutions. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
