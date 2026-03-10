import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { getBlogPost, getBlogSlugs } from "@/lib/blogParser";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, User, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
    const slugs = getBlogSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) return { title: "Not Found" };

    const url = `https://zealousseo.com/blog/${slug}`;
    const title = `${post.frontmatter.title} | Zealous Digital`;

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.frontmatter.title,
        description: post.frontmatter.description,
        datePublished: post.frontmatter.date,
        url,
        author: {
            "@type": "Organization",
            name: post.frontmatter.author || "Zealous Digital",
        },
        publisher: {
            "@type": "Organization",
            name: "Zealous Digital",
            logo: "https://zealousseo.com/og-image.png",
        },
    };

    return {
        title,
        description: post.frontmatter.description,
        openGraph: {
            title,
            description: post.frontmatter.description,
            url,
            type: "article",
            publishedTime: post.frontmatter.date,
        },
        alternates: { canonical: url },
        other: {
            "application/ld+json": JSON.stringify(blogSchema),
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) notFound();

    const { content, frontmatter } = post;
    const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#F03E2F] selection:text-white pt-24 font-sans overflow-x-hidden">
            <FloatingNav />

            {/* Post Hero */}
            <header className="relative w-full pt-32 pb-20 px-6 border-b border-white/5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(240,62,47,0.05),transparent_70%)]" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#F03E2F] hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                        / Root / Insights / {slug}
                    </Link>

                    <div className="flex items-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                            <Calendar size={12} className="text-[#F03E2F]" /> {formattedDate}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                            <User size={12} className="text-[#F03E2F]" /> {frontmatter.author || "Research Team"}
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.95] font-serif italic">
                        {frontmatter.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
                        {frontmatter.description}
                    </p>
                </div>
            </header>

            {/* Article Structure */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-20">
                <article className="relative">
                    <div className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-serif prose-headings:italic prose-headings:tracking-tight
                        prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light
                        prose-a:text-[#F03E2F] prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-strong:font-bold
                        prose-blockquote:border-[#F03E2F] prose-blockquote:bg-white/[0.02] prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl
                        prose-code:text-[#F03E2F] prose-code:bg-[#F03E2F]/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded
                    ">
                        {content}
                    </div>

                    {/* Post Utility Footer */}
                    <div className="mt-24 pt-12 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-[#F03E2F] transition-colors">
                                <Share2 size={14} /> Share Article
                            </button>
                        </div>
                        <Link href="/contact" className="text-sm font-bold text-[#F03E2F] hover:text-white transition-colors flex items-center gap-2 group">
                            Book a Strategy Session <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </article>

                {/* Sidebar Navigation */}
                <aside className="hidden lg:block space-y-12 sticky top-32 h-fit">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#F03E2F]">Table of Contents</h4>
                        <nav className="space-y-2 text-sm text-gray-500 font-light">
                            <p className="hover:text-white cursor-pointer transition-colors">— Executive Summary</p>
                            <p className="hover:text-white cursor-pointer transition-colors">— Infrastructure Audit</p>
                            <p className="hover:text-white cursor-pointer transition-colors">— Generative Impact</p>
                            <p className="hover:text-white cursor-pointer transition-colors">— Deployment Strategy</p>
                        </nav>
                    </div>

                    <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                        <h4 className="text-xs font-bold mb-4 font-serif italic">Need a Custom Audit?</h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">
                            We analyze your existing semantic footprint and provide a deployment roadmap for agentic search.
                        </p>
                        <Link
                            href="/contact"
                            className="block w-full text-center py-3 bg-[#F03E2F] text-white rounded-xl text-xs font-bold hover:bg-red-600 transition-colors"
                        >
                            Get Free Audit
                        </Link>
                    </div>
                </aside>
            </div>

            <Footer />
        </main>
    );
}
