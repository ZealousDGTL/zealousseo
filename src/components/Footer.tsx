import Link from "next/link";

const services = [
    { name: "AI Search Opt", href: "/services/generative-visibility/ai-search-opt" },
    { name: "Entity Building", href: "/services/generative-visibility/entity-building" },
    { name: "Schema Signals", href: "/services/generative-visibility/schema-signals" },
    { name: "Programmatic SEO", href: "/services/visibility-strategy/programmatic-seo" },
    { name: "Content Engine", href: "/services/visibility-strategy/content-engine" },
    { name: "Technical SEO", href: "/services/visibility-strategy/technical-seo" },
    { name: "Site Architecture", href: "/services/identity-architecture/seo-site-architecture" },
    { name: "Conversion Hubs", href: "/services/identity-architecture/conversion-hubs" },
    { name: "Revenue Orchestration", href: "/services/operational-orchestration/revenue-orchestration" },
    { name: "CRM Implementation", href: "/services/operational-orchestration/crm-implementation" },
];

export function Footer() {
    return (
        <footer className="bg-black text-white py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
                <div className="md:col-span-2">
                    <Link href="/" className="group flex items-center gap-4 mb-8">
                        <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                            <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl rotate-12 group-hover:rotate-0 transition-all duration-500">
                                <span className="text-[#F03E2F] font-instrument italic text-2xl font-black -rotate-12 group-hover:rotate-0 transition-all duration-500">Z.</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-instrument italic text-2xl tracking-tighter text-white leading-none">
                                Zealous<span className="text-[#F03E2F]">.</span>
                            </span>
                        </div>
                    </Link>
                    <p className="text-gray-500 max-w-sm leading-relaxed text-lg mb-8">
                        Engineering high-performance lead engines and AI infrastructure for businesses that demand digital ownership.
                    </p>
                    <div className="text-sm font-mono text-gray-600 uppercase tracking-widest">
                        <span className="text-[#F03E2F]">Location:</span> On the Grid // Decentralized by Design
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-[0.2em] mb-8">Capabilities</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        {services.map((service) => (
                            <li key={service.name}>
                                <Link href={service.href} className="hover:text-[#F03E2F] transition-colors">{service.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-[0.2em] mb-8">Platform</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><Link href="/about" className="hover:text-[#F03E2F] transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-[#F03E2F] transition-colors">Documentation</Link></li>
                        <li><Link href="/contact" className="hover:text-[#F03E2F] transition-colors">System Status</Link></li>
                        <li><Link href="/contact" className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white mt-4 block text-center hover:bg-white/10 transition-all">Get Started</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-gray-600">
                <p>© 2026 Zealous Digital Solutions. All Rights Reserved.</p>
                <div className="flex space-x-8 mt-6 md:mt-0">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Legal</Link>
                    <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
            </div>
        </footer>
    );
}
