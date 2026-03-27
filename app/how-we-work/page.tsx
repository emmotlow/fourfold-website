import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "How We Work | Fourfold.ai Software Factory",
  description:
    "Senior engineers and AI agents build your product on Pact, an agentic software factory. See the two-week process, what you get, and why it's different.",
  openGraph: {
    title: "How We Work | Fourfold.ai Software Factory",
    description:
      "Senior engineers and AI agents build your product on Pact, an agentic software factory. See the two-week process, what you get, and why it's different.",
    url: "https://fourfold.ai/how-we-work",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fourfold MVP Development",
  provider: {
    "@type": "Organization",
    name: "Fourfold",
    url: "https://fourfold.ai",
  },
  description:
    "Two-week MVP development powered by senior engineers using AI-assisted development and Pact for project coordination. $5K flat fee, working product delivered.",
  offers: {
    "@type": "Offer",
    price: "5000",
    priceCurrency: "USD",
    description: "Two-week MVP engagement with outcome-based pricing",
  },
  serviceType: "Software Development",
  areaServed: "Worldwide",
  dateModified: "2026-03-20",
};

export default function HowWeWork() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── Section 1: Hero (Navy Dark) ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-12 right-16 w-48 h-48 rounded-full border border-white/[0.04] animate-float" />
          <div className="absolute bottom-16 left-20 w-32 h-32 rounded-full border border-gold/[0.08] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gold/[0.04] blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 relative z-10">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
              Fast doesn&rsquo;t mean
              <br />
              <span className="text-gold">reckless.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-lg md:text-xl text-blue-200/70 max-w-2xl leading-relaxed mb-10">
              Fourfold delivers working products in two weeks by combining senior
              engineers who&rsquo;ve mastered AI-assisted development with custom
              AI agents based on your business context.
            </p>
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

      {/* ── Section 2: The Process (White) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              How It Works
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200" />

            {[
              {
                step: "1",
                title: "Tell us your idea.",
                body: "Not a business plan. Just the problem you\u2019re solving, who it\u2019s for, and what \u201Cworking\u201D looks like.",
              },
              {
                step: "2",
                title: "We scope it together.",
                body: "Within 48 hours, we define the MVP: the smallest version of your product that proves the concept.",
              },
              {
                step: "3",
                title: "We build it.",
                body: "Senior engineers build your product on Pact, your agentic software factory. AI agents handle the production work. Engineers handle the architecture and quality. The factory handles the coordination, tracking, and risk detection.",
              },
              {
                step: "4",
                title: "You decide what\u2019s next.",
                body: "Two weeks later, you have a functional product you can demo, test with customers, or show investors. We deliver a technical roadmap so you know exactly where to go from here.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 120}>
                <div className="relative flex gap-6 pb-14 last:pb-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-navy-dark flex items-center justify-center font-display font-bold text-lg relative z-10 shadow-md shadow-gold/20">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: What Makes This Different (Sand) ── */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              Why Fourfold delivers differently.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Engineers who\u2019ve mastered AI development.",
                body: "Our senior engineers don\u2019t use AI as autocomplete. They\u2019ve mastered how to structure code properly, prevent hallucination-related bugs, and use AI tools to produce enterprise-grade output.",
              },
              {
                title: "A software factory that coordinates everything.",
                body: "Every engagement runs on Pact, your agentic software factory. The factory tracks progress, detects risks, routes decisions, manages quality gates, and keeps your team informed, all automatically.",
              },
              {
                title: "Your second engagement is faster than your first.",
                body: "Pact learns your organization: approval chains, security requirements, compliance needs, team preferences. That knowledge compounds. Contractors start fresh every time. Pact remembers.",
              },
              {
                title: "Outcome-based pricing.",
                body: "$5K for a working product. We charge for the engagement, not hours. Our incentive is to deliver, not to extend.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-5" />
                  <h3 className="font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: What You Get (White) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              What you walk away with.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <ul className="space-y-4 text-lg text-slate-600">
              {[
                "A working product that real users can interact with",
                "Full code ownership, your IP, no lock-in",
                "A technical roadmap with clear documentation of what was built, how it\u2019s structured, and where to go next",
                "A software factory that already knows your business via Pact",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 5: CTA (Navy Dark) ── */}
      <section className="py-24 md:py-32 bg-navy-dark grain text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to build?
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
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
