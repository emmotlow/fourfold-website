import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import BlogPostCTA from "@/components/BlogPostCTA";
import { blogPosts, getPost } from "@/lib/blog-posts";
import ODMContent from "./odm-content";
import PlanorizeContent from "./planorize-content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Fourfold.ai`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Fourfold.ai`,
      description: post.excerpt,
      url: `https://fourfold.ai/blog/${post.slug}`,
      type: "article",
    },
  };
}

const contentMap: Record<string, React.ComponentType> = {
  planorize: PlanorizeContent,
  "outcome-driven-management": ODMContent,
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Content = contentMap[post.slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: "Fourfold",
      url: "https://fourfold.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "Fourfold",
      url: "https://fourfold.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://fourfold.ai/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fourfold.ai/blog/${post.slug}`,
    },
    datePublished: post.date,
    dateModified: post.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-56 h-56 rounded-full border border-white/[0.04] animate-float" />
          <div className="absolute bottom-12 right-24 w-32 h-32 rounded-full border border-gold/[0.08] animate-float-slow" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-gold/[0.04] blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 relative z-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-6">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              &middot; {post.author}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight max-w-4xl">
              {post.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Content ── */}
      <article className="bg-white">
        {Content ? <Content /> : null}

        <section className="pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto px-6">
            <BlogPostCTA />
          </div>
        </section>
      </article>
    </>
  );
}
