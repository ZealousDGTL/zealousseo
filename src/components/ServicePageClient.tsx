"use client";

import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { BrandTicker } from "@/components/BrandTicker";
import { motion } from "framer-motion";
import React from "react";

interface ServicePageClientProps {
    content: React.ReactNode;
    frontmatter: {
        title: string;
        description: string;
    };
    categoryPath: string | null;
}

export function ServicePageClient({ content, frontmatter, categoryPath }: ServicePageClientProps) {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
            <FloatingNav />

            {/* Premium Service Hero */}
            <header className="relative w-full min-h-[60vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/neural-bg.png"
                        alt="Neural network topology visualization representing agentic search infrastructure"
                        className="w-full h-full object-cover opacity-30 grayscale blur-sm"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F03E2F] hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Topology
                        </Link>
                    </motion.div>

                    <div className="">
                        {categoryPath && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="font-mono text-[10px] tracking-[0.4em] text-[#F03E2F] mb-6 uppercase flex items-center gap-3"
                            >
                                <span className="w-8 h-[1px] bg-[#F03E2F]" />
                                {categoryPath.replace(/-/g, " ")}
                            </motion.div>
                        )}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.85] font-serif italic"
                        >
                            {frontmatter.title}.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-2xl md:text-3xl text-gray-400 max-w-3xl leading-snug font-light italic"
                        >
                            {frontmatter.description}
                        </motion.p>
                    </div>
                </div>
            </header>

            {/* Credential Bar */}
            <BrandTicker />

            <section className="relative w-full py-32 md:py-64 px-6 overflow-hidden">
                {/* Structural Grid Background Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 relative">
                    {/* Sidebar Metadata */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 border border-white/10 rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl"
                        >
                            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#F03E2F] mb-10 flex items-center gap-2">
                                <ShieldCheck size={14} /> Governance Protocol
                            </h4>
                            <ul className="space-y-6">
                                {[
                                    "Standardized Single System",
                                    "MACH-Certified Architecture",
                                    "SOC 2 Type II Compliance",
                                    "Granular Brand Permissions"
                                ].map((item, i) => (
                                    <li key={i} className="text-sm text-gray-300 font-medium flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#F03E2F]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-10 border border-white/10 rounded-[3rem] bg-white/[0.02] space-y-8"
                        >
                            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#F03E2F] flex items-center gap-2">
                                <Zap size={14} /> Deployment Timeline
                            </h4>
                            <ul className="space-y-5">
                                {[
                                    { phase: "Discovery & Audit", time: "1–2 weeks" },
                                    { phase: "Implementation", time: "2–6 weeks" },
                                    { phase: "QA & Launch", time: "1 week" },
                                    { phase: "Ongoing Optimisation", time: "Continuous" },
                                ].map((item) => (
                                    <li key={item.phase} className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400 font-light">{item.phase}</span>
                                        <span className="font-mono text-[10px] text-[#F03E2F] uppercase tracking-widest">{item.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-10 border border-white/10 rounded-[3rem] bg-white/[0.02] space-y-6"
                        >
                            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#F03E2F] flex items-center gap-2">
                                <ShieldCheck size={14} /> Success Metrics
                            </h4>
                            <ul className="space-y-4 text-sm text-gray-400 font-light">
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#F03E2F] mt-2 shrink-0" />Measurable visibility gains within 30 days</li>
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#F03E2F] mt-2 shrink-0" />Full data ownership transferred at launch</li>
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#F03E2F] mt-2 shrink-0" />Zero structural debt on delivery</li>
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#F03E2F] mt-2 shrink-0" />Infrastructure compounds — no recurring agency fees</li>
                            </ul>
                            <Link
                                href="/contact"
                                className="mt-6 block w-full text-center py-4 bg-[#F03E2F] text-white rounded-2xl text-xs font-bold hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Get Scoped &amp; Priced
                            </Link>
                        </motion.div>

                        <div className="p-10 border border-white/5 rounded-[3rem] bg-black">
                            <p className="text-[10px] text-gray-500 font-mono leading-relaxed uppercase tracking-tighter">
                                [ SYSTEM LOG // 0x4F92 ]<br />
                                Node initialized successfully.<br />
                                Deployment status: <span className="text-[#F03E2F]">OPTIMIZED</span>.
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <article className="lg:col-span-8 flex flex-col gap-8">
                        {/* TLDR Hub */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 bg-white/[0.03] border border-white/10 rounded-[4rem] backdrop-blur-sm relative overflow-hidden mb-24"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F03E2F]/5 blur-[100px]" />
                            <div className="flex items-center gap-2 text-[#F03E2F] font-mono text-[10px] uppercase tracking-[0.3em] mb-8">
                                <Zap size={14} fill="currentColor" /> Executive Directive
                            </div>
                            <h2 className="text-4xl font-serif italic mb-8">The Objective:</h2>
                            <p className="text-xl text-gray-300 font-light leading-relaxed">
                                {frontmatter.description}
                            </p>
                        </motion.div>

                        <div className="prose prose-invert prose-2xl max-w-none 
                            prose-headings:font-bold 
                            prose-headings:tracking-tighter 
                            prose-h1:text-7xl prose-h1:font-serif prose-h1:italic
                            prose-h2:text-5xl prose-h2:mt-32 prose-h2:mb-12
                            prose-p:text-gray-400 prose-p:leading-[1.6] prose-p:font-light
                            prose-li:text-gray-400 prose-li:mb-4
                            prose-strong:text-white prose-strong:font-bold
                            prose-a:text-[#F03E2F] prose-a:no-underline hover:prose-a:underline">
                            {content}
                        </div>

                        {/* Deployment FAQ */}
                        <div className="mt-32 pt-16 border-t border-white/10">
                            <h3 className="text-4xl font-serif italic mb-12">Service Intelligence (FAQ)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <h4 className="font-bold text-lg">What is the deployment velocity?</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">Most infrastructure patches are deployed within 72 hours. Complete reconstructions average 14 days from synchronization to global launch.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-lg">Is this MACH-certified?</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">Yes. Our framework adheres to Microservices, API-first, Cloud-native, and Headless standards, ensuring zero technical debt accumulation.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-lg">How does this impact AEO?</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">We optimize for Answer Engine Optimization. By mapping semantic entities and building schema signals, we ensure high retrieval probability across LLMs.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-lg">Do we maintain full ownership?</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">Total Digital Ownership. Zealous Digital hands over all keys, code repositories, and technical documentation upon successful system integration.</p>
                                </div>
                            </div>
                        </div>

                        {/* Related Services Linking Grid */}
                        <div className="mt-32 pt-16 border-t border-white/10">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-gray-600">Cross-Service Orchestration</h3>
                                <Link href="/services" className="text-[#F03E2F] text-xs font-mono uppercase tracking-widest hover:underline">View All Capabilities</Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Link href="/services/visibility-strategy/technical-seo" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-[#F03E2F]/50 transition-all group">
                                    <h4 className="font-serif italic text-lg mb-2 group-hover:text-[#F03E2F]">Technical SEO</h4>
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">Infra Integrity</p>
                                </Link>
                                <Link href="/services/generative-visibility/schema-signals" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-[#F03E2F]/50 transition-all group">
                                    <h4 className="font-serif italic text-lg mb-2 group-hover:text-[#F03E2F]">Schema Signals</h4>
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">Entity Graph</p>
                                </Link>
                                <Link href="/services/operational-orchestration/crm-implementation" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-[#F03E2F]/50 transition-all group">
                                    <h4 className="font-serif italic text-lg mb-2 group-hover:text-[#F03E2F]">CRM Hub</h4>
                                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">Rev-Ops</p>
                                </Link>
                            </div>
                        </div>

                        {/* Talk to an Expert CTA Block */}
                        <div className="mt-40 p-12 bg-white/[0.03] border border-white/10 rounded-[3rem] text-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F03E2F]/10 blur-[60px] group-hover:bg-[#F03E2F]/20 transition-all" />
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 font-serif italic">
                                Ready to scale with confidence?
                            </h2>
                            <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                                Standardize your operations on a single, governed system. Eliminate the implementation queue and watch your ideas hit the front page.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-bold hover:bg-[#F03E2F] hover:text-white transition-all duration-300 shadow-xl"
                            >
                                Talk to an Expert <ArrowRight size={20} />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}
