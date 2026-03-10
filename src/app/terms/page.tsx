import type { Metadata } from "next";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The governing logic for Zealous Digital deployments and advisory units. Service terms, IP ownership, and governance compliance protocols.",
  alternates: { canonical: "https://zealousseo.com/terms" },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
            <FloatingNav />
            <section className="max-w-4xl mx-auto px-6 py-32">
                <header className="mb-20">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F03E2F] mb-6">Operational Framework v1.0</div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] font-serif italic mb-8">Terms of Service.</h1>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">The governing logic for our digital deployments and advisory units.</p>
                </header>

                <div className="prose prose-invert prose-lg max-w-none 
                    prose-headings:font-serif prose-headings:italic prose-headings:tracking-tight
                    prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light
                    prose-strong:text-white
                ">
                    <h2>Service Deployment</h2>
                    <p>Zealous Digital provides agentic search services, revenue orchestration, and technical SEO audits as defined in individual Statements of Work. All deployments are subject to our [Governance & IT Oversight](/services/visibility-strategy/technical-seo) parameters.</p>

                    <h2>Intellectual Property</h2>
                    <p>Our methodologies, frameworks, and [Content Engine](/services/visibility-strategy/content-engine) logic remain the property of Zealous Digital. Clients are granted a non-exclusive license to utilize these outputs for the duration of the engagement.</p>

                    <h2>Limitation of Liability</h2>
                    <p>Search algorithms are dynamic and subject to change without notice. While we utilize modern [AI Search Optimization](/services/generative-visibility/ai-search-opt) techniques to maximize visibility, Zealous Digital is not liable for fluctuations in third-party engine performance.</p>

                    <h2>Governance Compliance</h2>
                    <p>Clients agree to utilize our [Conversion Hubs](/services/identity-architecture/conversion-hubs) and [CRM Implementations](/services/operational-orchestration/crm-implementation) in accordance with all local laws and regulations relating to data privacy and digital marketing.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
