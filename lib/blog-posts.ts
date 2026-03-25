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
      "We built Pact on a simple conviction: management should measure what matters, not what's easy to count. Here's how Outcome-Driven Management works, and why it matters more now than ever.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
