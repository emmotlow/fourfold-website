import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import TallyEmbed from "@/components/TallyEmbed";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fourfold",
  url: "https://fourfold.ai",
  logo: "https://fourfold.ai/logo.png",
  description:
    "Fourfold pairs your market expertise with senior engineers operating at AI speed. We build real, functional products — $5K, two weeks, a working product at the end.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://fourfold.ai/#contact",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Fourfold.ai — Your idea. Our engineering. A working product in two weeks.",
  url: "https://fourfold.ai",
  description:
    "Fourfold builds working software products in two weeks for $5K. Senior engineers at AI speed, custom AI agents for coordination, outcome-based pricing.",
  dateModified: "2026-03-20",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build an MVP with Fourfold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$5K flat fee. Outcome-based pricing — we charge for the engagement, not hours. You know the cost upfront.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a working product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two weeks. Days 1-2 are scoping, days 3-5 are architecture and build, days 6-9 are feature build and integration, and day 10 is delivery with a technical roadmap.",
      },
    },
    {
      "@type": "Question",
      name: "What do I get at the end of a Fourfold engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A working product (functional software, not wireframes), full code ownership with no lock-in, a technical roadmap for v2, real-time project visibility throughout, and an honest assessment of next steps.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Fourfold for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aspiring entrepreneurs with an idea, small business owners who see a product opportunity, industry experts making the leap to build software, and anyone who wants to validate an idea before making a full investment.",
      },
    },
    {
      "@type": "Question",
      name: "What is Pact?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pact is the coordination platform behind Fourfold. It orchestrates AI agents, senior engineers, and your organizational context into a single delivery pipeline. It handles coordination, quality gates, and approvals, and learns your organization so every engagement is faster than the last.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Section 1: Hero (Navy Dark) ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-8 w-72 h-72 rounded-full border border-white/[0.04] animate-float" />
          <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold/[0.06] blur-[100px]" />
          <div className="absolute bottom-16 left-1/4 w-40 h-40 rounded-full border border-gold/[0.08] animate-float-slow" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full border border-white/[0.03] animate-float" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-36 relative z-10">
          <FadeIn>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-8">
              Your idea.
              <br />
              Our engineering.
              <br />
              <span className="text-gold">Two weeks.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-lg md:text-xl text-blue-200/70 max-w-2xl leading-relaxed mb-12">
              Fourfold builds working software products in two weeks for $5K. You
              bring the market expertise. We bring a production system that turns
              it into enterprise-grade software.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <Link
              href="#contact"
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
          <FadeIn delay={450}>
            <p className="mt-10 text-base text-blue-200/50 border-l-2 border-gold/40 pl-4 max-w-lg">
              We recently helped a client go from kickoff to working demo in 4
              days. By week 2, they were onboarding customers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: Why You (White) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              You already have the hardest part figured out.
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn delay={100}>
              <p>
                The best products don&rsquo;t come from people who know how to
                code. They come from people who deeply understand a problem.
                You&rsquo;ve done the research. You know what needs to exist. You
                just need a team that can build it without burning six months and
                six figures to find out if it works.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <div className="mt-10">
              <Link
                href="/how-we-work"
                className="inline-flex items-center border-2 border-navy text-navy px-7 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-all duration-300"
              >
                See How We Build
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

      {/* ── Section 3: Why Us (Sand) ── */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              A production system, not a dev shop.
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn delay={100}>
              <p>
                Fourfold isn&rsquo;t a freelancer with AI tools. Every engagement
                runs on Pact, a coordination platform that orchestrates AI agents,
                senior engineers, and your team&rsquo;s context into a single
                delivery pipeline.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p>
                The agents build. The engineers make judgment calls. The platform
                handles coordination, quality gates, and approvals. And it learns
                your organization, so every engagement is faster and more precise
                than the last.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={300}>
            <div className="mt-10">
              <Link
                href="/pact"
                className="inline-flex items-center border-2 border-navy text-navy px-7 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-all duration-300"
              >
                Meet the Platform
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

      {/* ── Section 4: Why Now (White) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              The economics of building changed.{" "}
              <span className="text-slate-400">Most people missed it.</span>
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn delay={100}>
              <p>
                A year ago, building a software product meant six figures and six
                months before you knew if anyone wanted it. AI rewrote that math.
                A senior engineer on Pact can now build in days what used to take
                a team weeks.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p>
                The gap between &ldquo;I have an idea&rdquo; and &ldquo;I have a
                product&rdquo; has never been smaller.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={300}>
            <div className="mt-12 border-l-4 border-gold bg-sand rounded-r-2xl p-8 md:p-10 shadow-sm">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-navy leading-tight">
                $5K. Two weeks.{" "}
                <span className="text-gold-dark">A working product.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 5: Tally Form (Navy Dark) ── */}
      <section
        id="contact"
        className="py-24 md:py-32 bg-navy-dark grain text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Tell Us Your Idea
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-blue-200/60 mb-12">
              A few sentences is plenty. We&rsquo;ll get back to you within 48
              hours.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 p-8 md:p-12">
              <TallyEmbed />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="mt-8 text-blue-200/40 text-sm">
              No commitment. No jargon. Just a real conversation about your idea.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
