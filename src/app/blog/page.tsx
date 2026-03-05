import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Zealous Digital Solutions",
  description: "Insights and tips on digital marketing, SEO, web design, and online growth strategies.",
};

const blogPosts = [
  {
    slug: "seo-trends-2026",
    title: "SEO Trends to Watch in 2026",
    excerpt: "The digital landscape is evolving rapidly. Stay ahead with these emerging SEO strategies.",
    date: "March 2026",
    category: "SEO"
  },
  {
    slug: "website-speed-optimization",
    title: "Why Website Speed Matters More Than Ever",
    excerpt: "Performance impacts conversions, rankings, and user experience. Here's how to optimize.",
    date: "February 2026",
    category: "Web Design"
  },
  {
    slug: "local-seo-guide",
    title: "The Complete Guide to Local SEO",
    excerpt: "Dominate local search results and attract more customers in your area.",
    date: "January 2026",
    category: "SEO"
  },
  {
    slug: "conversion-rate-tips",
    title: "10 Conversion Rate Optimization Tips",
    excerpt: "Turn more visitors into customers with these proven CRO strategies.",
    date: "December 2025",
    category: "Marketing"
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
          Insights, strategies, and tips to grow your digital presence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="bg-zinc-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">{post.category}</span>
              <span className="text-xs text-zinc-400">{post.date}</span>
            </div>
            <h2 className="text-xl font-bold mb-3 hover:text-orange-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-zinc-600 mb-4">{post.excerpt}</p>
            <span className="text-sm font-semibold text-orange-600">Read More →</span>
          </article>
        ))}
      </div>
    </div>
  );
}
