import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Fourfold.ai",
  description:
    "Thought leadership on agentic software factories, AI-powered delivery, and the future of services from the Fourfold team.",
  openGraph: {
    title: "Blog | Fourfold.ai",
    description:
      "Thought leadership on agentic software factories, AI-powered delivery, and the future of services from the Fourfold team.",
    url: "https://fourfold.ai/blog",
  },
};

export default function BlogIndex() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0">
          <div className="absolute top-16 right-20 w-40 h-40 rounded-full border border-white/[0.04] animate-float" />
          <div className="absolute bottom-12 left-1/4 w-64 h-64 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <Image
            src="/blog-grid-pattern.png"
            alt=""
            fill
            className="object-cover opacity-[0.5]"
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight">
              Blog
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-sand rounded-2xl border border-slate-200/80 p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-display text-2xl font-bold text-slate-900 mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-gold-dark font-semibold text-sm mt-4">
                    Read more
                    <svg
                      className="ml-1.5 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
