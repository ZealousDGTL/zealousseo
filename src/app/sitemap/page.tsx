import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function SitemapPage() {
    const links = [
        { name: "Global Root", items: [{ name: "Homepage", href: "/" }, { name: "Insights", href: "/blog" }, { name: "About Company", href: "/about" }, { name: "Platform", href: "/platform" }, { name: "Contact Engine", href: "/contact" }] },
        { name: "Generative Visibility", items: [{ name: "AI Search Opt", href: "/services/generative-visibility/ai-search-opt" }, { name: "Entity Building", href: "/services/generative-visibility/entity-building" }, { name: "Schema Signals", href: "/services/generative-visibility/schema-signals" }] },
        { name: "Visibility Strategy", items: [{ name: "Programmatic SEO", href: "/services/visibility-strategy/programmatic-seo" }, { name: "Content Engine", href: "/services/visibility-strategy/content-engine" }, { name: "Technical SEO", href: "/services/visibility-strategy/technical-seo" }] },
        { name: "Identity Architecture", items: [{ name: "Site Architecture", href: "/services/identity-architecture/seo-site-architecture" }, { name: "Conversion Hubs", href: "/services/identity-architecture/conversion-hubs" }] },
        { name: "Operational Orchestration", items: [{ name: "Revenue Orchestration", href: "/services/operational-orchestration/revenue-orchestration" }, { name: "CRM Implementation", href: "/services/operational-orchestration/crm-implementation" }] },
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans">
            <FloatingNav />
            <section className="max-w-5xl mx-auto px-6 py-32">
                <header className="mb-20">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F03E2F] mb-6">Index Protocol</div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] font-serif italic mb-8">Sitemap.</h1>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">The complete topology of our digital infrastructure.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {links.map((group) => (
                        <div key={group.name} className="space-y-6">
                            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F03E2F] border-b border-[#F03E2F]/20 pb-4">{group.name}</h2>
                            <ul className="space-y-3">
                                {group.items.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-lg text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                            <span className="w-2 h-[1px] bg-white/20 group-hover:w-4 group-hover:bg-[#F03E2F] transition-all" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
