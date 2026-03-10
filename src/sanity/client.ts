import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project-id";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Scaffold component to integrate seamlessly with the Sanity Data Layer in Phase 8
// Exposing this client so React Server Components can query structured data directly
export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Ensure fresh data for AI Agents and Operational Systems
});
