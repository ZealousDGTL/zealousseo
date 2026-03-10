"use client";

import Link from "next/link";
import { ArrowRight, Network } from "lucide-react";
import { motion } from "framer-motion";

const serviceDescriptions: Record<string, string> = {
    "conversion-hubs": "Turn high-intent visitors into paying clients with precision-tuned conversion architectures built for AI-era search behavior.",
    "seo-site-architecture": "Structural design that makes every page a semantic node — optimized for crawlers, humans, and generative AI alike.",
    "revenue-orchestration": "End-to-end pipeline design that connects traffic, leads, and closed deals into a single measurable revenue flywheel.",
    "crm-implementation": "CRM systems that capture, score, and route every lead with zero manual overhead — fully integrated with your stack.",
    "technical-seo": "Crawl infrastructure, Core Web Vitals, and entity markup tuned to satisfy both search engines and LLM training corpora.",
    "content-engine": "A sustainable content operation that builds topical authority and drives compound organic growth month over month.",
    "programmatic-seo": "Scalable page generation targeting thousands of long-tail queries — high volume, high relevance, high ROI.",
    "entity-building": "Establish your brand as a recognized, citable entity in the semantic web — the foundation of AI-era visibility.",
    "schema-signals": "Structured data implementations that give search engines and LLMs unambiguous context about your business.",
    "ai-search-opt": "Position your brand as the canonical answer in ChatGPT, Perplexity, and Google AI Overviews for your most valuable queries.",
};

const categoryDescriptions: Record<string, string> = {
    "generative-visibility": "Dominate Answer Engines. Own the AI-era knowledge graph.",
    "identity-architecture": "Build structural authority that scales from 10 pages to 10,000.",
    "operational-orchestration": "Turn visibility into revenue without the implementation queue.",
    "visibility-strategy": "Engineer the search lifecycle as a permanent, governed asset.",
};

interface ServicesGridProps {
    groupedServices: Record<string, string[][]>;
    categoryIcons: Record<string, React.ReactNode>;
}

export function ServicesGrid({ groupedServices, categoryIcons }: ServicesGridProps) {
    return (
        <div className="flex flex-col space-y-32">
            {Object.entries(groupedServices).map(([category, items], catIdx) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    {/* Category Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <div className="flex items-center gap-3 text-[#F03E2F] mb-6">
                            {categoryIcons[category] || <Network size={20} />}
                            <span className="font-mono text-[10px] uppercase tracking-widest bg-[#F03E2F]/10 px-2 py-1 rounded">
                                Module {String(catIdx + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6 capitalize tracking-tight font-serif italic">
                            {category.replace(/-/g, " ")}
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8 pr-8">
                            {categoryDescriptions[category] ?? "Precision deployment targeting growth-critical KPIs."}
                        </p>
                    </div>

                    {/* Node Cards */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((slugArray, idx) => {
                            const pathString = slugArray.join("/");
                            const slug = slugArray[slugArray.length - 1];
                            const title = slug.replace(/-/g, " ");
                            const desc = serviceDescriptions[slug] ?? "Precision deployment targeting growth-critical KPIs.";

                            return (
                                <Link
                                    key={pathString}
                                    href={`/services/${pathString}`}
                                    className="group relative flex flex-col justify-between bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-[#F03E2F]/30 transition-all duration-500 h-[320px] overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#F03E2F] group-hover:border-[#F03E2F] transition-all duration-500">
                                                <Network size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="font-mono text-[9px] uppercase tracking-tighter text-gray-600 group-hover:text-gray-400 transition-colors">
                                                Active Node // {idx + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-500 capitalize">
                                            {title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                                            {desc}
                                        </p>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                        <span className="font-mono text-[10px] uppercase text-gray-500 group-hover:text-white transition-colors tracking-widest">
                                            Deploy Protocol
                                        </span>
                                        <ArrowRight size={18} className="text-[#F03E2F] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                                    </div>

                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#F03E2F]/0 group-hover:bg-[#F03E2F]/5 blur-[60px] rounded-full transition-all duration-500" />
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
