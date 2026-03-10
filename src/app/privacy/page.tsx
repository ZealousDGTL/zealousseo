import type { Metadata } from "next";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Zealous Digital manages, protects, and governs data within our ecosystem. SOC 2 Type II-aligned data sovereignty protocols.",
  alternates: { canonical: "https://zealousseo.com/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
            <FloatingNav />
            <section className="max-w-4xl mx-auto px-6 py-32">
                <header className="mb-20">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F03E2F] mb-6">Governance Protocol v1.0</div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] font-serif italic mb-8">Privacy Policy.</h1>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">How we manage, protect, and govern data within the Zealous Digital ecosystem.</p>
                </header>

                <div className="prose prose-invert prose-lg max-w-none 
                    prose-headings:font-serif prose-headings:italic prose-headings:tracking-tight
                    prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light
                    prose-strong:text-white
                ">
                    <h2>Data Sovereignty</h2>
                    <p>At Zealous Digital, we treat client data as a strategic asset. We do not sell, trade, or otherwise transfer your identifiable information to outside parties. This refers specifically to data harvested via our [Conversion Hubs](/services/identity-architecture/conversion-hubs) or telemetry systems.</p>

                    <h2>Information Collection</h2>
                    <p>We collect information through various nodes, including contact forms, search queries, and engagement signals. This data is used specifically to train your [Content Engine](/services/visibility-strategy/content-engine) and optimize your [AI Search Optimization](/services/generative-visibility/ai-search-opt) campaigns.</p>

                    <h2>Security Protocols</h2>
                    <p>We implement a variety of security measures to maintain the safety of your personal and corporate information. Our infrastructure is designed with <strong>SOC 2 Type II</strong> intentions, ensuring that governance is baked into every layer of our deployment pipeline.</p>

                    <h2>Cloudflare Turnstile</h2>
                    <p>This site is protected by Cloudflare Turnstile. Its use is subject to the Cloudflare Privacy Policy and Terms of Use. We use Turnstile to ensure that our lead flows are high-fidelity and protected from automated bot interference.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
