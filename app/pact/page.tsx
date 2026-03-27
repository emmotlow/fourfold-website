import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Your Agentic Software Factory | Pact by Fourfold.ai",
  description:
    "Pact is an agentic software factory: AI agents, a coordination engine, and institutional memory in one production system. Two weeks. Enterprise quality.",
  openGraph: {
    title: "Your Agentic Software Factory | Pact by Fourfold.ai",
    description:
      "Pact is an agentic software factory: AI agents, a coordination engine, and institutional memory in one production system. Two weeks. Enterprise quality.",
    url: "https://fourfold.ai/pact",
  },
};

export default function PactPage() {
  return (
    <>
      {/* ── Section 1: Hero (Navy Dark) ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-12 right-16 w-48 h-48 rounded-full border border-white/[0.04] animate-float" />
          <div className="absolute bottom-16 left-20 w-32 h-32 rounded-full border border-gold/[0.08] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gold/[0.04] blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 relative z-10">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              Fourfold runs on{" "}
              <span className="text-gold">Pact.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="font-display text-xl md:text-2xl text-blue-200/80 mb-6 max-w-2xl">
              An agentic software factory that continuously builds software
              for your team.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-blue-200/60 max-w-2xl leading-relaxed mb-6">
              Pact is a coordinated system of AI agents, senior engineers, and
              organizational knowledge that continuously produces software
              tailored to your company.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg text-blue-200/60 max-w-2xl leading-relaxed">
              You don&rsquo;t manage the factory. You don&rsquo;t even see most
              of it. You just see the result: working software, delivered fast,
              built to your standards.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: Three Layers (White) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              Three layers. One system.
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              {
                title: "AI Agents",
                body: "Pact's agents handle the production work. They spec features, write code, run tests, conduct reviews, generate documentation, and manage deployments. Each agent is purpose-built for its role. Together, they produce the volume of output that used to require a full engineering team.",
              },
              {
                title: "Coordination Engine",
                body: "Agents alone aren't enough. Pact routes work through quality gates, manages approval workflows, sequences dependencies, and surfaces risks before they become blockers. It integrates with your existing tools and meets your team where they already work.",
              },
              {
                title: "Institutional Memory",
                body: "This is what separates Pact from a collection of AI tools. Every engagement builds a model of your organization: your approval chains, compliance requirements, data structures, security standards, and team preferences. That model persists and improves. Your second engagement is faster than your first. Your third is faster still.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="bg-sand p-8 rounded-2xl border border-slate-200/80">
                  <div className="w-8 h-0.5 bg-gold mb-5" />
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400}>
            <p className="text-lg text-slate-600 leading-relaxed mt-12 text-center">
              Read about Outcome-Driven Management (ODM), the operating
              framework behind everything Pact does.
            </p>
          </FadeIn>
          <FadeIn delay={500}>
            <div className="mt-8 text-center">
              <Link
                href="/blog/outcome-driven-management"
                className="inline-flex items-center border-2 border-navy text-navy px-7 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-all duration-300"
              >
                More on ODM
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
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 3: Pact + Fourfold CTA (Navy Dark) ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden grain py-24 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Pact is the platform. Fourfold is how you access it.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="text-lg text-blue-200/60 leading-relaxed space-y-6 mb-10 text-center max-w-2xl mx-auto">
              <p>
                When you work with Fourfold, you get a senior engineer who makes
                the judgment calls, the architectural decisions, and the quality
                guarantees. Behind that engineer is Pact: handling the production
                volume, the coordination, and the institutional memory that makes
                everything move faster.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-10">
              Ready to Build?
            </h3>
          </FadeIn>
          <FadeIn delay={300}>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-gold text-navy-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
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
          </FadeIn>
        </div>
      </section>
    </>
  );
}
