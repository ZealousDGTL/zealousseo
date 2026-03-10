"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Workflow } from "lucide-react";

const PILLARS = [
    {
        title: "Pillar 1: Strategic Mission",
        desc: "Everything we build is aligned with your Business DNA. If a feature or content piece doesn't satisfy your core identity and authentic mission, we do not deploy it. This ensures 100% executive alignment and long-term brand authority in the AEO age.",
        verbatim: "Authenticity & Persuasion amidst the noise."
    },
    {
        title: "Pillar 2: Action Engine",
        desc: "We solve the 'Operational Overload' problem by integrating automation directly into your project management flow. Using headless CMS like Sanity and automation bridges like MCP, we move your backlog to breakthrough in record speed.",
        verbatim: "From Backlog to Breakthrough in weeks."
    },
    {
        title: "Pillar 3: Memory Bank",
        desc: "Digital ownership means owning your data. We build custom vectorized memory banks (Pinecone) that store every contract, research report, and technical audit. This provides your AI agents with a perfect, context-rich retrieval layer.",
        verbatim: "Context-rich memory for the AI Economy."
    },
    {
        title: "Pillar 4: Metric Transparency",
        desc: "We solve the 'Technical Visibility Deficit' through 100% accurate data observability. Our dashboards track search impressions, neural retrieval rates, and lead distribution in real-time. No more guessing; just pure, verifiable growth.",
        verbatim: "100% Accuracy. No black boxes."
    }
];

export function TheTopology() {
    return (
        <section className="py-24 md:py-48 bg-black text-white px-6 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] font-serif italic mb-8"
                        >
                            The Topology <br /> of <span className="text-[#F03E2F]">Visibility.</span>
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            Technical AEO isn’t just about rankings; it’s about the structural integrity of your brand's digital signal.
                        </p>
                    </div>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
                    {/* Main Narrative Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 md:row-span-2 bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 flex flex-col justify-end relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F03E2F]/10 blur-[120px] -z-10 group-hover:bg-[#F03E2F]/20 transition-all" />
                        <span className="text-[#F03E2F] font-mono text-xs uppercase tracking-[0.4em] mb-8 block">Foundational Thesis</span>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 max-w-xl">
                            We don't just optimize meta tags; <br />
                            <span className="text-gray-500 italic">we reconstruct your semantic graph.</span>
                        </h3>
                        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                            By mapping entities, building schema signals, and orchestrating content engines, we ensure that Answer Engines recognize your business as the definitive answer to complex user queries.
                        </p>
                    </motion.div>

                    {/* Operational Overload Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 md:row-span-1 bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between group"
                    >
                        <div className="p-3 bg-[#F03E2F]/10 rounded-xl w-fit text-[#F03E2F]">
                            <Workflow className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-4">Action Engine</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">From Backlog to Breakthrough in weeks, not months.</p>
                        </div>
                    </motion.div>

                    {/* AI Economy Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 md:row-span-1 bg-[#F03E2F] rounded-[3rem] p-10 flex flex-col justify-between group text-white"
                    >
                        <div className="p-3 bg-white/20 rounded-xl w-fit text-white">
                            <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-4">Memory Bank</h4>
                            <p className="text-sm text-white/80 leading-relaxed">Vectorized storage for context-rich AI retrieval layers.</p>
                        </div>
                    </motion.div>

                    {/* Transparency Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-4 md:row-span-1 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between group"
                    >
                        <div className="p-3 bg-[#F03E2F]/10 rounded-xl w-fit text-[#F03E2F]">
                            <Workflow className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-4">Metric Trace</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">100% Accuracy. No black boxes. Visible growth.</p>
                        </div>
                    </motion.div>

                    {/* Scale Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 md:row-span-1 bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 flex items-center justify-between group overflow-hidden"
                    >
                        <div className="max-w-md">
                            <h4 className="text-3xl font-bold mb-4">Unrestricted Crawl Velocity</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">MACH-certified architecture eliminates technical debt blocking indexation.</p>
                        </div>
                        <div className="hidden md:block">
                            <Globe className="w-24 h-24 text-white/5 group-hover:text-[#F03E2F]/20 transition-all duration-700 -rotate-12" />
                        </div>
                    </motion.div>
                </div>

                {/* Final CTA Strip */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="max-w-xl">
                        <span className="text-[#F03E2F] font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Deployment Protocol</span>
                        <h3 className="text-4xl font-bold tracking-tight mb-4">Audit Your Infrastructure</h3>
                    </div>
                    <button className="boutique-button bg-white text-black hover:bg-[#F03E2F] hover:text-white border-none">
                        Inaugurate Your Engine
                    </button>
                </div>
            </div>
        </section>
    );
}
