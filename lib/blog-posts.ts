export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "planorize",
    title: "Planorize: From Six Tools to One App in 10 Days",
    date: "2026-03-25",
    author: "Fourfold.ai",
    excerpt:
      "How Pact helped a professional organizing business replace a six-tool workflow with one AI-powered app in 10 days.",
  },
  {
    slug: "outcome-driven-management",
    title: "Outcome-Driven Management: A New Operating System for Work",
    date: "2026-03-20",
    author: "Fourfold.ai",
    excerpt:
      "ODM makes outcomes, not tasks, the atomic unit of work. The operating framework behind Pact, Fourfold's agentic software factory.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
