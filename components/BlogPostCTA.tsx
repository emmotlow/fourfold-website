import Link from "next/link";

export default function BlogPostCTA() {
  return (
    <aside className="border-l-4 border-gold bg-sand rounded-r-2xl p-8 md:p-10 mt-16">
      <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
        We&rsquo;re building this.
      </h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        Fourfold is Pact&rsquo;s AI-managed consultancy. We deliver working
        software products in two weeks for $5K, powered by the production system
        described above. If you&rsquo;ve got an idea, tell us about it.
      </p>
      <Link
        href="/#contact"
        className="inline-flex items-center text-gold-dark hover:text-gold font-semibold transition-colors"
      >
        Tell Us Your Idea
        <svg
          className="ml-2 w-5 h-5"
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
      </Link>
    </aside>
  );
}
