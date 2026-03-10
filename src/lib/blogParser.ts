import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { BlogFrontmatter } from "./blogMdx";

export const BLOG_CONTENT_PATH = path.join(process.cwd(), "content/blog");

export const getBlogPost = async (slug: string) => {
    const filePath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);

    try {
        const source = fs.readFileSync(filePath, "utf8");
        const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
            source,
            options: {
                parseFrontmatter: true,
            },
        });

        return { content, frontmatter, slug };
    } catch (e) {
        return null;
    }
};

export const getAllBlogPosts = async () => {
    if (!fs.existsSync(BLOG_CONTENT_PATH)) return [];

    const files = fs.readdirSync(BLOG_CONTENT_PATH).filter(f => f.endsWith('.mdx'));
    const posts = [];

    for (const file of files) {
        const slug = file.replace(/\.mdx$/, "");
        const post = await getBlogPost(slug);
        if (post) {
            posts.push(post);
        }
    }

    // Sort by date descending
    return posts.sort((a, b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
};

export const getBlogSlugs = () => {
    if (!fs.existsSync(BLOG_CONTENT_PATH)) return [];
    return fs.readdirSync(BLOG_CONTENT_PATH)
        .filter(f => f.endsWith('.mdx'))
        .map(f => f.replace(/\.mdx$/, ""));
};
