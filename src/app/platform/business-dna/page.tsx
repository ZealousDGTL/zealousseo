import type { Metadata } from "next";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Cpu, Database, Eye, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Business DNA — The Foundation of Agentic Intelligence",
  description:
    "Business DNA is the structured intelligence framework Zealous Digital uses to architect your search topology. Four pillars: Strategic Mission, Action Engine, Memory Bank, and Metric Transparency.",
  openGraph: {
    title: "Business DNA | Zealous Digital",
    description:
      "The structured intelligence framework behind every Zealous Digital deployment. Four pillars that transform your brand into a machine-readable, AI-retrievable entity.",
    url: "https://zealousseo.com/platform/business-dna",
  },
  alternates: { canonical: "https://zealousseo.com/platform/business-dna" },
};

const pillars = [
  {
    id: "01",
    icon: Eye,
    name: "Strategic Mission",
    agent: "The Hand",
    role: "Strategy & Governance",
    description:
      "Your brand's core purpose, competitive positioning, and governance parameters — formalized into machine-readable directives. This is the north star that every content signal, schema node, and conversion path is aligned to.",
    outputs: [
      "Brand positioning document",
      "Competitive differentiation map",
      "Governance guardrails",
      "Target entity definitions",
    ],
  },
  {
    id: "02",
    icon: Zap,
    name: "Action Engine",
    agent: "The Creator",
    role: "Brand & Design",
    description:
      "The execution layer of your topology. The Action Engine converts strategic directives into deployed infrastructure — content, schema, architecture, and automation — without the traditional implementation queue.",
    outputs: [
      "Autonomous content deployment",
      "Real-time schema injection",
      "Conversion hub configuration",
      "Multi-channel distribution logic",
    ],
  },
  {
    id: "03",
    icon: Database,
    name: "Memory Bank",
    agent: "The Researcher",
    role: "Technical Depth",
    description:
      "Your owned data layer — CRM records, behavioral signals, historical performance, and competitive intelligence. The Memory Bank ensures that every decision made by the Action Engine is grounded in your actual business reality, not generic market averages.",
    outputs: [
      "Proprietary data warehouse",
      "Behavioral signal tracking",
      "Historical performance archive",
      "Competitive intelligence feed",
    ],
  },
  {
    id: "04",
    icon: Cpu,
    name: "Metric Transparency",
    agent: "The Publisher",
    role: "Distribution & Scale",
    description:
      "The reporting and accountability layer. Every deployment is tracked against defined KPIs — not vanity metrics, but commercial outcomes: citation velocity, lead conversion rate, time-to-deployment, and revenue attribution.",
    outputs: [
      "Real-time performance dashboard",
      "Citation and retrieval tracking",
      "Revenue attribution reporting",
      "Structural health monitoring",
    ],
  },
];

export default function BusinessDNAPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
      <FloatingNav />

      {/* Hero */}
      <header className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(240,62,47,0.08),transparent_70%)] blur-[80px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="font-mono text-xs tracking-[0.3em] text-[#F03E2F] mb-6 uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#F03E2F]" />
            Platform // Intelligence Framework
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] font-serif italic">
            Business DNA.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
            Every Zealous Digital deployment is built on a structured intelligence framework we call{" "}
            <strong className="text-white">Business DNA</strong> — the formalized representation of your brand, goals, and
            competitive position in a form that AI systems can understand, retrieve, and cite.
          </p>
        </div>
      </header>

      {/* What is Business DNA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-serif italic leading-[1.1]">
              What is Business DNA?
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
              In traditional SEO, agencies optimize for keywords. In the AI era, you must optimize for{" "}
              <strong className="text-white">entity recognition</strong> — the ability of machines to understand
              exactly who you are, what you do, and why you are the authoritative source on a topic.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
              Business DNA is the structured data layer that makes this possible. It encodes your brand&apos;s
              strategic identity, operational logic, institutional knowledge, and performance metrics into a format
              that powers every layer of your{" "}
              <Link href="/services" className="text-[#F03E2F] hover:underline">
                Topology of Visibility
              </Link>
              .
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Without Business DNA, your infrastructure is generic. With it, every piece of content, every schema
              node, and every conversion path is calibrated to your specific competitive position.
            </p>
          </div>
          <div className="p-10 bg-white/[0.02] border border-white/10 rounded-[3rem]">
            <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-8">
              [ DNA INIT // ZEALOUS ENGINE ]
            </div>
            <div className="space-y-4 font-mono text-sm">
              <p><span className="text-[#F03E2F]">LOADING</span> Strategic Mission ............ <span className="text-green-500">OK</span></p>
              <p><span className="text-[#F03E2F]">LOADING</span> Action Engine ................. <span className="text-green-500">OK</span></p>
              <p><span className="text-[#F03E2F]">LOADING</span> Memory Bank ................... <span className="text-green-500">OK</span></p>
              <p><span className="text-[#F03E2F]">LOADING</span> Metric Transparency ........... <span className="text-green-500">OK</span></p>
              <p className="pt-4 border-t border-white/10 text-white">
                _ TOPOLOGY READY. ENTITY LOCKED.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="font-mono text-xs tracking-[0.3em] text-[#F03E2F] mb-4 uppercase">The Four Pillars</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-serif italic">
              How Business DNA is structured.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-10 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:border-[#F03E2F]/30 hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-[#F03E2F]/10 rounded-2xl flex items-center justify-center border border-[#F03E2F]/20 group-hover:scale-110 transition-transform">
                    <pillar.icon size={26} className="text-[#F03E2F]" />
                  </div>
                  <span className="font-mono text-4xl font-bold text-white/10">{pillar.id}</span>
                </div>

                <div className="mb-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#F03E2F] mb-1">
                    {pillar.agent} — {pillar.role}
                  </div>
                  <h3 className="text-2xl font-bold font-serif italic">{pillar.name}</h3>
                </div>

                <p className="text-gray-500 leading-relaxed font-light mb-8 text-sm">{pillar.description}</p>

                <div className="space-y-2">
                  {pillar.outputs.map((output) => (
                    <div key={output} className="flex items-center gap-3 text-xs text-gray-600">
                      <div className="w-1 h-1 rounded-full bg-[#F03E2F]" />
                      {output}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it connects to services */}
      <section className="py-32 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif italic mb-16 text-center">
            Business DNA powers every service.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                service: "AI Search Optimization",
                href: "/services/generative-visibility/ai-search-opt",
                connection: "Strategic Mission defines the entity graph; the Memory Bank feeds the retrieval layer.",
              },
              {
                service: "Content Engine",
                href: "/services/visibility-strategy/content-engine",
                connection: "Action Engine deploys content. The Researcher monitors trends. The Publisher distributes at scale.",
              },
              {
                service: "CRM Implementation",
                href: "/services/operational-orchestration/crm-implementation",
                connection: "The Memory Bank is the CRM. All behavioral data flows back into the topology.",
              },
              {
                service: "Technical SEO",
                href: "/services/visibility-strategy/technical-seo",
                connection: "Metric Transparency surfaces crawl health. Action Engine patches issues autonomously.",
              },
              {
                service: "Conversion Hubs",
                href: "/services/identity-architecture/conversion-hubs",
                connection: "Action Engine configures conversion logic against the Strategic Mission's priority objectives.",
              },
              {
                service: "Revenue Orchestration",
                href: "/services/operational-orchestration/revenue-orchestration",
                connection: "Metric Transparency closes the loop — revenue data feeds back into qualification logic.",
              },
            ].map((item) => (
              <Link
                key={item.service}
                href={item.href}
                className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:border-[#F03E2F]/30 transition-all group"
              >
                <h3 className="font-serif italic text-lg font-bold mb-3 group-hover:text-[#F03E2F] transition-colors flex items-center justify-between">
                  {item.service}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#F03E2F]" />
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.connection}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-serif italic mb-8">
            Ready to encode your Business DNA?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Every deployment begins with a Business DNA session — a structured discovery process that transforms your
            brand&apos;s knowledge into a machine-readable intelligence framework.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-bold hover:bg-[#F03E2F] hover:text-white transition-all duration-300"
          >
            Start Your DNA Session <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
