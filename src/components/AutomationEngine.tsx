"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
    {
        id: "01",
        title: "Redefine",
        subtitle: "Brand Identity Redefinition",
        description: "We audit your digital DNA and reconstruct your brand for the agentic era. Neural retrieval and semantic authority become your foundation. By aligning your core mission with AEO-friendly signals, we ensure your brand is the primary node in the global knowledge graph.",
        points: ["EEAT Architecture Optimization", "Semantic Graph Mapping & Entity Linking", "Authority Benchmarking vs. Fortune 500 Benchmarks"],
    },
    {
        id: "02",
        title: "Upgrade",
        subtitle: "Automation-Ready Deployment",
        description: "Transitioning legacy stacks to high-fidelity, automation-first infrastructure. Built for performance, orchestrated for intelligence. Our MACH-certified stacks eliminate technical debt, allowing for rapid-patching and real-time content injection across all edge nodes.",
        points: ["Vercel Edge & Cloudflare Workers Integration", "Structured Content Models for Headless Delivery", "Real-time Patching & Hot-Swapping Infrastructure"],
    },
    {
        id: "03",
        title: "Rebuild",
        subtitle: "Orchestration Architecture",
        description: "Bespoke development of AI-native platforms. Ownership over rented dependencies. Boutique precision for enterprise-scale search lifecycles. We build the private LLM layers and retrieval-augmented generation (RAG) pipelines that turn your data into a competitive moat.",
        points: ["Custom AI Search Engines (RAG)", "Neural Retrieval & Embedding Layers", "Deeper Digital Ownership of Private Cloud Infra"],
    },
    {
        id: "04",
        title: "Scale",
        subtitle: "Automation at Scale",
        description: "Unlocking exponential growth through high-fidelity automation. Every workflow is a search signal; every agent is an authority. We deploy multi-agent organizations that handle the heavy lifting of content distribution, lead capture, and technical monitoring.",
        points: ["Multi-Agent Orgs (The Hand, Creator, Researcher)", "Autonomous Content Loops & Social Orchestration", "Global Index Dominance via Programmatic SEO"],
    },
    {
        id: "05",
        title: "Power",
        subtitle: "Any-App Integration",
        description: "Seamlessly power any application with your proprietary AI search engine. Integration across MCP servers and professional toolkits (SDK/CLI). Your infrastructure becomes a portable intelligence layer that can be deployed to mobile, web, or legacy desktop environments.",
        points: ["MCP Server Bridges (Notion, Pinecone, Slack)", "Agent Toolkit SDKs for Rapid Prototyping", "Infinite Integrations via Standardized APIs"],
    },
];

export function AutomationEngine() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="bg-black py-24 md:py-48 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Interactive Controls */}
                <div className="space-y-4">
                    <div className="mb-12">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl jumbo-title mb-6">
                            Programmable <span className="text-[#F03E2F]">Automation</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-xl">
                            From brand redefinition to global automation, we build the engine that powers your future.
                        </p>
                    </div>

                    <div className="space-y-2 border-l border-white/10">
                        {STEPS.map((step, idx) => (
                            <button
                                key={step.id}
                                onMouseEnter={() => setActiveStep(idx)}
                                className={`w-full text-left px-8 py-6 transition-all duration-300 relative group ${activeStep === idx ? "bg-white/5 border-l-4 border-[#F03E2F]" : "border-l-4 border-transparent"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-sm font-mono ${activeStep === idx ? "text-[#F03E2F]" : "text-gray-600"}`}>
                                        {step.id}
                                    </span>
                                    <span className={`text-2xl md:text-3xl font-serif ${activeStep === idx ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
                                        {step.title}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Content View */}
                <div className="relative min-h-[500px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-zinc-900/40 p-12 rounded-3xl border border-white/5 backdrop-blur-xl"
                        >
                            <div className="mb-8">
                                <span className="text-[#F03E2F] font-mono tracking-widest uppercase text-sm mb-4 block">
                                    {STEPS[activeStep].subtitle}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
                                    {STEPS[activeStep].description}
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {STEPS[activeStep].points.map((point) => (
                                    <li key={point} className="flex items-center gap-4 text-xl text-gray-400">
                                        <span className="w-2 h-2 rounded-full bg-[#F03E2F]" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Node Visual Placeholder */}
                            <div className="mt-12 pt-12 border-t border-white/10 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 border border-white/20 rounded-md text-xs font-mono">TRIGGER</div>
                                    <div className="px-4 py-2 border border-white/20 rounded-md text-xs font-mono">FUNCTION</div>
                                    <div className="px-4 py-2 border border-[#F03E2F] rounded-md text-xs font-mono text-[#F03E2F]">OUTPUT</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
