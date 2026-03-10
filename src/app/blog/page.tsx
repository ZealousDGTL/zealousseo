import type { Metadata } from "next";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { getAllBlogPosts } from "@/lib/blogParser";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { BrandTicker } from "@/components/BrandTicker";
import React from "react";

export const metadata: Metadata = {
  title: "Insights — Agentic Search & AI Visibility",
  description:
    "Dispatches from the front lines of agentic search, Answer Engine Optimization, and automated governance. Practical intelligence for visibility engineers.",
  openGraph: {
    title: "Insights | Zealous Digital",
    description:
      "Dispatches from the front lines of agentic search and automated governance.",
    url: "https://zealousseo.com/blog",
  },
  alternates: { canonical: "https://zealousseo.com/blog" },
};

export default async function BlogIndexPage() {
    const posts = await getAllBlogPosts();

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
            <FloatingNav />

            {/* Insights Hero */}
            <header className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(240,62,47,0.05),transparent_60%)]" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div>
                        <div className="font-mono text-xs tracking-[0.3em] text-[#F03E2F] mb-6 uppercase flex items-center gap-3">
                            <span className="w-4 h-[1px] bg-[#F03E2F]" />
                            Intellectual Capital
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1] font-serif italic">
                            Insights.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light">
                            Dispatches from the front lines of agentic search and automated governance.
                        </p>
                    </div>
                </div>
            </header>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="sr-only">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: any) => (
                        <div key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group block h-full p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:bg-white/10 hover:border-[#F03E2F]/30 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 text-[#F03E2F] opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-widest text-gray-400">
                                        Analysis
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                                        {new Date(post.frontmatter.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:text-[#F03E2F] transition-colors font-serif italic">
                                    {post.frontmatter.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-10">
                                    {post.frontmatter.description}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                                        <User size={12} className="text-[#F03E2F]" /> {post.frontmatter.author || "Intelligence"}
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                                        5 min read
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Credential Bar */}
            <div className="border-t border-white/5 pt-24 pb-12">
                <BrandTicker />
            </div>

            {/* Footer CTA */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-[#F03E2F]/5 to-transparent border border-white/5 rounded-[3rem]">
                    <h2 className="text-4xl font-bold font-serif italic mb-6">Stay Ahead of the Curve.</h2>
                    <p className="text-gray-400 mb-10 leading-relaxed">
                        Join operators and visibility engineers receiving our weekly briefing on agentic search and AI infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 px-8 py-4 rounded-full min-w-[300px] focus:border-[#F03E2F] outline-none transition-colors"
                        />
                        <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-[#F03E2F] hover:text-white transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
