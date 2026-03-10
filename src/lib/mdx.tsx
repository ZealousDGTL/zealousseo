import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import React from "react";
import { FeatureRow, ImageCollage } from "@/components/mdx-components";

export const CONTENT_PATH = path.join(process.cwd(), "content/services");

export const getPostBySlug = async (slugOptions: string[]) => {
    const normalizedSlug = slugOptions.join("/");
    const filePath = path.join(CONTENT_PATH, `${normalizedSlug}.mdx`);

    try {
        const source = fs.readFileSync(filePath, "utf8");
        const { content, frontmatter } = await compileMDX<{
            title: string;
            description: string;
            schemaEntityUrl: string;
        }>({
            source,
            components: {
                h1: (props) => <h1 {...props} className="text-7xl font-serif italic mb-12" />,
                h2: (props) => <h2 {...props} className="text-5xl font-serif italic mt-32 mb-12" />,
                h3: (props) => <h3 {...props} className="text-4xl font-serif italic mt-24 mb-8 text-[#F03E2F]" />,
                p: (props) => <p {...props} className="text-2xl text-gray-400 font-light leading-relaxed mb-12" />,
                FeatureRow,
                ImageCollage,
            },
            options: {
                parseFrontmatter: true,
            },
        });

        return { content, frontmatter, slug: normalizedSlug };
    } catch (e) {
        console.error("MDX Compilation Error:", e);
        return null;
    }
};

export const getAllSlugs = () => {
    const slugs: string[][] = [];

    const walkSync = (dir: string, baseSlug: string[] = []) => {
        if (!fs.existsSync(dir)) return;
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                walkSync(fullPath, [...baseSlug, file]);
            } else if (file.endsWith(".mdx")) {
                const slug = file.replace(/\.mdx$/, "");
                if (slug === "index") {
                    slugs.push([...baseSlug]);
                } else {
                    slugs.push([...baseSlug, slug]);
                }
            }
        }
    };

    walkSync(CONTENT_PATH);
    return slugs;
};
