import type { Metadata } from "next";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { BrandTicker } from "@/components/BrandTicker";
import { Box, Code2, Cpu, Database, Network } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Search Infrastructure Platform",
  description:
    "The Zealous Digital Topology Engine — MACH-certified, headless, edge-first search infrastructure. Deploy 10,000+ programmatic pages, inject schema in real-time, and own your digital visibility.",
  openGraph: {
    title: "Enterprise Search Infrastructure Platform | Zealous Digital",
    description:
      "Stop treating SEO as a campaign. Start treating it as a platform. Deploy and own your entire search lifecycle.",
    url: "https://zealousseo.com/platform",
  },
  alternates: { canonical: "https://zealousseo.com/platform" },
};

export default function PlatformPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
            <FloatingNav />

            {/* Platform Hero */}
            <header className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div>
                        <div className="font-mono text-xs tracking-[0.3em] text-[#F03E2F] mb-6 uppercase flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-[#F03E2F]" />
                            The Topology Engine
                        </div>
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] font-serif italic max-w-4xl">
                            Enterprise Search <br /> Infrastructure.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light mb-12">
                            Stop treating SEO as a campaign. Start treating it as a platform. Our Topology Engine automates the lifecycle of digital visibility across the entire web grid.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {["Vercel", "Sanity.io", "Cloudflare", "Next.js 15", "LangChain", "OpenAI"].map((tech) => (
                                <span key={tech} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Platform Features */}
            <section className="py-32 px-6 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                        <div>
                            <h2 className="text-4xl font-bold font-serif italic mb-8">System Architecture</h2>
                            <p className="text-gray-500 leading-relaxed font-light text-lg mb-8">
                                Our platform is built for high-scale semantic deployments. We bypass traditional CMS bottlenecks by utilizing headless architectures and edge computing, ensuring that your entities are propagated to search engines and LLMs in real-time.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Deterministic Crawl Paths", icon: Network },
                                    { title: "Real-time Schema Injection", icon: Code2 },
                                    { title: "Automated Lead Routing", icon: Database }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center group">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-[#F03E2F] group-hover:bg-[#F03E2F] group-hover:text-white transition-all">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="font-bold text-sm tracking-tight">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[16/10] bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="font-mono text-[10px] text-gray-700 space-y-2">
                                    <p>$ ZEALOUS_INIT --topology --governance</p>
                                    <p>{" > "} Deploying Semantic Engine: 100%</p>
                                    <p>{" > "} Injecting Schema Signals: Verified</p>
                                    <p>{" > "} Revenue Loop: Online</p>
                                    <p className="text-[#F03E2F]">_ SYSTEM STANDBY</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#F03E2F]/20 blur-3xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Scalability", icon: Box, desc: "Deploy 10,000+ programmatic pages without increasing your server response time." },
                            { title: "Compute", icon: Cpu, desc: "Utilize AI-driven analysis to cluster topics and identify intent gaps autonomously." },
                            { title: "Ownership", icon: Database, desc: "Maintain 100% control of your operational data within your own private CRM cloud." }
                        ].map((item, i) => (
                            <div key={i} className="text-center md:text-left px-4">
                                <item.icon className="mx-auto md:mx-0 mb-6 text-[#F03E2F]" size={32} />
                                <h4 className="text-xl font-bold mb-4 font-serif italic">{item.title}</h4>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business DNA CTA */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 p-12 bg-white/[0.02] border border-white/10 rounded-[3rem]">
                    <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#F03E2F] mb-4">Intelligence Framework</div>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif italic mb-4">Business DNA</h2>
                        <p className="text-gray-400 max-w-xl leading-relaxed font-light">
                            The structured intelligence layer that powers every deployment. Strategic Mission, Action Engine, Memory Bank, and Metric Transparency — encoded into your topology before a single line of infrastructure is written.
                        </p>
                    </div>
                    <Link
                        href="/platform/business-dna"
                        className="shrink-0 inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-[#F03E2F] hover:text-white transition-all duration-300 whitespace-nowrap"
                    >
                        Explore Business DNA <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <div className="py-24">
                <BrandTicker />
            </div>

            <Footer />
        </main>
    );
}
