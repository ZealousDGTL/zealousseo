import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { ServicePageClient } from "@/components/ServicePageClient";

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};

    const url = `https://zealousseo.com/services/${slug.join("/")}`;
    const title = `${post.frontmatter.title} | AI SEO Services`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: post.frontmatter.title,
        description: post.frontmatter.description,
        provider: {
            "@type": "Organization",
            name: "Zealous Digital",
            url: "https://zealousseo.com",
        },
        areaServed: "Global",
        serviceType: "Search Engine Optimization",
        url,
    };

    return {
        title,
        description: post.frontmatter.description,
        openGraph: {
            title,
            description: post.frontmatter.description,
            url,
            type: "article",
        },
        alternates: { canonical: url },
        other: {
            "application/ld+json": JSON.stringify(serviceSchema),
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    const { content, frontmatter } = post;
    const categoryPath = slug.length > 1 ? slug.slice(0, -1).join("/") : null;

    return (
        <ServicePageClient
            content={content}
            frontmatter={frontmatter}
            categoryPath={categoryPath}
        />
    );
}
