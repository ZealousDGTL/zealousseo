"use client";

import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { BrandTicker } from "@/components/BrandTicker";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import React from "react";

export default function ContactPage() {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate submission
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
            <FloatingNav />

            {/* Contact Hero */}
            <header className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(240,62,47,0.1),transparent_70%)] blur-[80px]" />

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#F03E2F] mb-6">
                                <Zap size={14} fill="#F03E2F" /> Status: Ready for Deployment
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] font-serif italic">
                                Let&apos;s Build <br /> Your Topology.
                            </h1>
                            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light mb-12">
                                Eliminate the implementation queue. Watch your ideas scale from backlog to breakthrough in weeks, not quarters.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: ShieldCheck, title: "Governance First", desc: "Corporate-grade security and guardrails on every deployment." },
                                    { icon: MessageSquare, title: "Talk to an Expert", desc: "Direct consultation with the agents building the future of search." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-[#F03E2F]">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        {/* Background Glow for Form */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#F03E2F]/20 to-transparent blur-3xl opacity-50" />

                        <div className="relative p-8 md:p-12 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl">
                            {status === "success" ? (
                                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-[#F03E2F] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(240,62,47,0.5)]">
                                        <Zap size={32} fill="white" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 font-serif italic">Signal Received.</h3>
                                    <p className="text-gray-400">An expert will be in touch within <span className="text-white font-mono">24h</span> to synchronize on your goals.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Identity</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03E2F] focus:ring-1 focus:ring-[#F03E2F]/50 transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03E2F] focus:ring-1 focus:ring-[#F03E2F]/50 transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Sector / Industry</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Fintech, E-commerce, SaaS"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03E2F] focus:ring-1 focus:ring-[#F03E2F]/50 transition-all placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Objective / Backlog</label>
                                        <textarea
                                            rows={4}
                                            placeholder="What objective are we deploying today?"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03E2F] focus:ring-1 focus:ring-[#F03E2F]/50 transition-all placeholder:text-gray-600 resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Turnstile Placeholder */}
                                    <div className="flex justify-center py-2">
                                        <div className="cf-turnstile" data-sitekey="YOUR_SITE_KEY_HERE" data-theme="dark"></div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#F03E2F] hover:text-white transition-all group disabled:opacity-50"
                                    >
                                        {status === "submitting" ? "Synchronizing..." : (
                                            <>Submit Signal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-gray-600 text-center font-mono leading-relaxed">
                                        BY SUBMITTING, YOU AGREE TO OUR GOVERNANCE PROTOCOLS.<br />
                                        PROTECTED BY CLOUDFLARE TURNSTILE.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Global Credential Layer */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <h2 className="text-2xl font-serif italic text-gray-400">Deployed within the world&apos;s leading tech ecosystems.</h2>
                </div>
                <BrandTicker />
            </div>

            <Footer />
        </main>
    );
}
