import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/ServicesGrid";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, Network, Zap } from "lucide-react";

const slugs = [
    ["generative-visibility", "ai-search-opt"],
    ["generative-visibility", "entity-building"],
    ["generative-visibility", "schema-signals"],
    ["identity-architecture", "conversion-hubs"],
    ["identity-architecture", "seo-site-architecture"],
    ["operational-orchestration", "revenue-orchestration"],
    ["operational-orchestration", "crm-implementation"],
    ["visibility-strategy", "technical-seo"],
    ["visibility-strategy", "content-engine"],
    ["visibility-strategy", "programmatic-seo"],
];

const categoryIcons: Record<string, React.ReactNode> = {
    "generative-visibility": <Cpu size={20} />,
    "identity-architecture": <Layers size={20} />,
    "operational-orchestration": <Network size={20} />,
    "visibility-strategy": <Zap size={20} />,
};

const groupedServices = slugs.reduce((acc, slugArray) => {
    const category = slugArray[0];
    if (!acc[category]) acc[category] = [];
    acc[category].push(slugArray);
    return acc;
}, {} as Record<string, string[][]>);

export default function ServicesIndexPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans">
            <FloatingNav />

            {/* Topology Hero */}
            <header className="relative w-full pt-32 pb-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(240,62,47,0.05),transparent_70%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#F03E2F] mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#F03E2F]" />
                        System Topology [ v2.6.0 ]
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 font-serif italic">
                        Topology of <br />
                        <span className="text-gray-500">Agentic Operations.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light mb-12">
                        Engineering high-performance search infrastructure{" "}
                        <span className="text-white">without the implementation queue.</span>{" "}
                        Ten services. Four categories. Zero vendor lock-in.
                    </p>
                </div>
            </header>

            {/* Grid Section */}
            <section className="w-full py-24 px-6 max-w-7xl mx-auto">
                <ServicesGrid groupedServices={groupedServices} categoryIcons={categoryIcons} />
            </section>

            {/* Strategy CTA */}
            <section className="bg-black py-40 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F03E2F]/50 to-transparent" />
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 font-serif italic text-white">
                        Standardize on a single, governed growth system.
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-[#F03E2F] hover:text-white transition-all duration-300 scale-100 hover:scale-105"
                    >
                        Talk to an Expert <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
