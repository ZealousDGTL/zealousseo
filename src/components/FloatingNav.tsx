"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export function FloatingNav() {
    const [scrolled, setScrolled] = useState(false);
    const [showServices, setShowServices] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Main nav */}
            <nav
                className={`transition-all duration-500 ${scrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4"
                    : "bg-transparent py-8"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-4">
                        <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl rotate-12 group-hover:rotate-0 transition-all duration-500">
                                <span className="text-[#F03E2F] font-instrument italic text-4xl font-black -rotate-12 group-hover:rotate-0 transition-all duration-500">Z.</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-instrument italic text-4xl tracking-tighter text-white leading-none">
                                Zealous<span className="text-[#F03E2F]">.</span>
                            </span>
                            <span className="text-[9px] font-mono text-gray-400 tracking-[0.5em] uppercase">Digital Orchestration</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
                        <div
                            className="relative"
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                        >
                            <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 py-2">
                                Capabilities
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${showServices ? "rotate-180" : ""}`}>
                                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {showServices && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-64 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl"
                                    >
                                        <div className="grid gap-2">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/platform" className="text-gray-400 hover:text-white transition-colors">Platform</Link>
                        <Link href="/about" className="text-gray-400 hover:text-white transition-colors">Company</Link>
                        <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Insights</Link>

                        <Link href="/contact" className="relative group overflow-hidden bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-[#F03E2F] hover:text-white transition-all duration-300">
                            <span className="relative z-10">Get Your Engine</span>
                        </Link>
                    </div>

                    <button className="md:hidden text-white p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}
