# ✍️ Blog Management Guide: Zealous Digital

Your blog is built on a high-performance **MDX (Markdown + React)** foundation. This means your content is stored as code, which is ideal for performance and SEO, but can also be easily managed.

## How to Add a New Post

1. **Navigate to Content**: Open the directory `content/blog/`.
2. **Create File**: Create a new file named `your-post-slug.mdx` (e.g., `the-future-of-aeo.mdx`).
3. **Add Frontmatter**: Every post must start with a metadata block like this:
   ```markdown
   ---
   title: "Defining the Topology of Visibility"
   description: "How we reconstruct the semantic graph for the AI era."
   date: "2026-03-09"
   author: "The Hand"
   ---
   ```
4. **Write Content**: Use standard Markdown for your post. You can also use React components if needed.

## Pro Tips for Content Depth (EEAT)
- **Entities**: Mention specific technologies (Next.js, Pinecone, Vercel) and concepts (RAG, Neural Retrieval).
- **Internal Links**: Always link to at least 2 service pages using format: `[Service Name](/services/path/to/service)`.
- **FAQ**: Included a "Frequently Asked Questions" section at the bottom of long-form posts to improve Answer Engine captures.

## Future: Headless CMS Integration
If you want a visual dashboard to manage posts without touching code, we recommend integrating **Sanity.io**.
- **Steps**:
    1. Create a Sanity account.
    2. Define your "Post" schema.
    3. Update `src/lib/blogParser.ts` to fetch from the Sanity API instead of the local filesystem.
    4. Your content remains yours, but you get a beautiful editing UI.

## Lead Tracking
All blog posts automatically include the tracking infrastructure defined in `src/components/Tracking.tsx`. No extra work is needed to track readers.
