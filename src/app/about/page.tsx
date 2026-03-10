import type { Metadata } from "next";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { BrandTicker } from "@/components/BrandTicker";
import { Globe, Shield, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Decentralized by Design",
  description:
    "Zealous Digital is a collective of visibility engineers and agentic architects. We are not a traditional agency — we build permanent search infrastructure your business owns forever.",
  openGraph: {
    title: "About Zealous Digital — Decentralized by Design",
    description:
      "A collective of visibility engineers and agentic architects focused on one objective: ownership of the search lifecycle.",
    url: "https://zealousseo.com/about",
  },
  alternates: { canonical: "https://zealousseo.com/about" },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
            <FloatingNav />

            {/* About Hero */}
            <header className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#F03E2F]/5 blur-[100px] rounded-full" />

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div>
                        <div className="font-mono text-xs tracking-[0.3em] text-[#F03E2F] mb-6 uppercase">Company // Origin</div>
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] font-serif italic text-white">
                            Decentralized <br /> by Design.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            Zealous Digital is not a traditional agency. We are a collective of visibility engineers and agentic architects focused on one objective: ownership of the search lifecycle.
                        </p>
                    </div>
                </div>
            </header>

            {/* Core Values / Philosophy */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: Zap, title: "Speed-to-Impact", desc: "We eliminate the implementation queue. Our topologies move from architecture to deployment in weeks, not quarters." },
                        { icon: Shield, title: "Unbiased Governance", desc: "Every line of code and every semantic signal is validated against corporate-grade guardrails and IT oversight." },
                        { icon: Globe, title: "Global Intelligence", desc: "Our units operate across the digital grid, ensuring your visibility is consistent across all engines and LLMs." }
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.05] transition-all group">
                            <div className="w-14 h-14 bg-[#F03E2F]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#F03E2F]/20 group-hover:scale-110 transition-transform">
                                <item.icon size={26} className="text-[#F03E2F]" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 font-serif italic">{item.title}</h2>
                            <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* The "Units" Section */}
            <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-serif italic leading-[1.1]">
                            The Intelligence Behind <br /> the Topology.
                        </h2>
                        <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
                            Our team is composed of multidisciplinary agents who understand that the future of search isn&apos;t just about keywords—it&apos;s about infrastructure. We combine deep linguistic analysis with brutalist code optimization to build systems that LLMs love.
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-4xl font-bold mb-2 font-mono">100+</div>
                                <div className="text-xs text-[#F03E2F] uppercase tracking-widest font-mono">Engines Mapped</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2 font-mono">2.5s</div>
                                <div className="text-xs text-[#F03E2F] uppercase tracking-widest font-mono">Deployment Speed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2 font-mono">0.0%</div>
                                <div className="text-xs text-[#F03E2F] uppercase tracking-widest font-mono">Structural Debt</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center grayscale hover:grayscale-0 hover:border-[#F03E2F]/30 transition-all cursor-crosshair gap-3 p-6">
                                <Users size={40} className="text-gray-700" />
                                <div className="text-center">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#F03E2F]">The Hand</div>
                                    <div className="text-xs text-gray-600 mt-1">Strategy &amp; Governance</div>
                                </div>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center grayscale hover:grayscale-0 hover:border-[#F03E2F]/30 transition-all cursor-crosshair gap-3 p-6">
                                <Users size={40} className="text-gray-700" />
                                <div className="text-center">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#F03E2F]">The Publisher</div>
                                    <div className="text-xs text-gray-600 mt-1">Distribution &amp; Scale</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center grayscale hover:grayscale-0 hover:border-[#F03E2F]/30 transition-all cursor-crosshair gap-3 p-6">
                                <Users size={40} className="text-gray-700" />
                                <div className="text-center">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#F03E2F]">The Creator</div>
                                    <div className="text-xs text-gray-600 mt-1">Brand &amp; Design</div>
                                </div>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center grayscale hover:grayscale-0 hover:border-[#F03E2F]/30 transition-all cursor-crosshair gap-3 p-6">
                                <Users size={40} className="text-gray-700" />
                                <div className="text-center">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#F03E2F]">The Researcher</div>
                                    <div className="text-xs text-gray-600 mt-1">Technical Depth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-24">
                <BrandTicker />
            </div>

            <Footer />
        </main>
    );
}
