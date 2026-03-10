import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blogParser";

export async function Insights() {
    const posts = await getAllBlogPosts();
    const topPosts = posts.slice(0, 3);

    return (
        <section className="py-32 px-6 bg-[#FAFAFA] border-y border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Strategic Insights</h2>
                        <p className="text-xl text-gray-600">All Articles &rarr;</p>
                    </div>
                    <Link href="/blog" className="flex items-center text-[#F03E2F] font-bold text-lg hover:text-red-700 transition-colors">
                        View All <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full">
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="text-sm font-semibold text-[#F03E2F] uppercase tracking-wider mb-6">
                                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>
                                <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight group-hover:text-[#F03E2F] transition-colors">
                                    {post.frontmatter.title}
                                </h3>
                                <p className="text-gray-600 mb-10 flex-grow leading-relaxed">{post.frontmatter.description}</p>
                                <div className="mt-auto pt-6 border-t border-gray-100 font-semibold text-gray-900 flex items-center group-hover:text-[#F03E2F] transition-colors">
                                    Read Article <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
