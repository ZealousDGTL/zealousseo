"use client";

import { motion } from "framer-motion";

const COMPARISON_ROWS = [
    {
        metric: "Response Latency",
        powerhouses: "48-72 Hours \nManual Review Cycles & Slow Approval Loops",
        zealous: "Instant Agentic \nReal-time Patching & Sub-second Execution",
    },
    {
        metric: "Content Workflows",
        powerhouses: "Legacy Manual Processes \nKeyword Stuffing & Surface SEO",
        zealous: "Native Semantic \nLLM-Guided Intent & Entity Mapping",
    },
    {
        metric: "Asset Longevity",
        powerhouses: "Rented Audience Access \nTotal Agency Dependency (High Attrition)",
        zealous: "In-House Engine \nUniversal Ownership & Permanent Infrastructure",
    },
    {
        metric: "Technical Grid",
        powerhouses: "Monolithic CMS Debt \nLocked in Proprietary Ecosystems",
        zealous: "MACH-Certified \nCloud-Native, Headless, and API-First",
    },
];

export function Comparison() {
    return (
        <section className="py-24 md:py-48 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Reference Header Style */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight">
                            Global Powerhouses <br />
                            <span className="text-[#F03E2F] italic">vs. Boutique Precision</span>
                        </h2>
                        <div className="mt-8 flex gap-8">
                            <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">
                                Comparative Technical Assessment — FY24-25
                            </span>
                        </div>
                    </div>
                    <div className="hidden lg:block text-right">
                        <p className="text-[10px] font-mono tracking-widest uppercase text-gray-600 max-w-[300px]">
                            Data sourced from proprietary Agentic benchmarking across 450+ high-competition enterprise verticals.
                        </p>
                    </div>
                </div>

                {/* Technical Comparison Table */}
                <div className="border-t border-white/10">
                    {COMPARISON_ROWS.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10 py-12 group hover:bg-white/[0.02] transition-colors px-4">
                            <div className="col-span-1 mb-8 md:mb-0">
                                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F03E2F] mb-4 block">Metric</span>
                                <h3 className="text-2xl md:text-3xl font-serif">{row.metric}</h3>
                            </div>

                            <div className="col-span-1 border-l-0 md:border-l border-white/10 md:pl-12 opacity-40 group-hover:opacity-60 transition-opacity">
                                <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-4 block">Powerhouses</span>
                                <p className="text-xl font-mono whitespace-pre-line tracking-tight text-gray-400">
                                    {row.powerhouses}
                                </p>
                            </div>

                            <div className="col-span-2 border-l-0 md:border-l-4 border-white/10 md:pl-12 bg-[#F03E2F]/5 py-8 md:py-0 rounded-2xl md:rounded-none group-hover:bg-[#F03E2F]/10 transition-colors">
                                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F03E2F] mb-4 block font-bold">Zealous SEO</span>
                                <p className="text-2xl md:text-4xl font-serif tracking-tight whitespace-pre-line">
                                    {row.zealous}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-6xl md:text-8xl font-serif mb-12">Core Orchestrations</h2>
                    <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-400">
                        Bespoke Agentic Capabilities
                    </p>
                </div>
            </div>
        </section>
    );
}
