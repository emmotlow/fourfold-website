import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "How We Work — Fourfold.ai",
  description:
    "Fourfold delivers working products in two weeks by combining senior AI-assisted engineers with custom Pact AI agents. Structured 10-day process, $5K flat fee.",
  openGraph: {
    title: "How We Work — Fourfold.ai",
    description:
      "Fourfold delivers working products in two weeks by combining senior AI-assisted engineers with custom Pact AI agents. Structured 10-day process, $5K flat fee.",
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
    "Two-week MVP development powered by senior engineers using AI-assisted development and custom Pact AI agents for project coordination. $5K flat fee, working product delivered.",
  offers: {
    "@type": "Offer",
    price: "5000",
    priceCurrency: "USD",
    description: "Two-week MVP engagement with outcome-based pricing",
  },
  serviceType: "Software Development",
  areaServed: "Worldwide",
  dateModified: "2026-02-25",
};

export default function HowWeWork() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── Hero ── */}
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
            <p className="text-lg md:text-xl text-blue-200/70 max-w-2xl leading-relaxed">
              Fourfold delivers working products in two weeks by combining
              senior engineers who&rsquo;ve mastered AI-assisted development
              with custom Pact AI agents that replace traditional project
              management overhead. Every engagement follows a structured 10-day
              process: scoping, architecture, build, integration, and delivery
              with a technical roadmap.
            </p>
          </FadeIn>
        </div>
      </section>

      <article>
        {/* ── Section 1: Delivery Model ── */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
                A Delivery Model Built{" "}
                <span className="text-slate-400">for AI Speed</span>
              </h2>
            </FadeIn>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <FadeIn>
                <p>
                  Traditional dev shops run on a model designed before AI: large
                  teams, long timelines, hourly billing, and layers of
                  coordination overhead. Project managers managing account
                  managers managing delivery leads, each adding cost and slowing
                  things down.
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <p>
                  We rebuilt that model around two things:{" "}
                  <span className="font-semibold text-slate-900">
                    senior engineers who&rsquo;ve mastered AI-assisted
                    development
                  </span>
                  , and{" "}
                  <span className="font-semibold text-slate-900">
                    custom AI agents that replace the coordination overhead with
                    intelligent automation
                  </span>
                  . The result is faster, leaner, and more transparent &mdash;
                  without sacrificing quality.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Section 2: Custom AI Agents ── */}
        <section className="py-24 md:py-32 bg-sand">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Custom AI Agents{" "}
                <span className="text-slate-400">for Your Project</span>
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-lg text-slate-600 mb-14 leading-relaxed max-w-3xl">
                Every Fourfold engagement is supported by Pact AI agents,
                purpose-built and customized for each customer and project.
                These aren&rsquo;t generic dashboards or rigid workflows.
                They&rsquo;re intelligent agents that handle the bulk of
                management work, freeing our team (and yours) to focus on what
                actually moves the project forward.
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <p className="text-sm uppercase tracking-widest text-gold font-semibold mb-8">
                What the agents do
              </p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title:
                    "Align on deliverables, progress, risks, and blockers",
                  body: "The agents continuously monitor project activity and surface what matters to the right people at the right time. No weekly status calls where you find out about a problem days too late.",
                },
                {
                  title: "Detect risks automatically",
                  body: "Pact agents listen across your project: ticket comments, conversations, code activity. Issues that would normally surface at a retrospective get caught while there\u2019s still time to act.",
                },
                {
                  title: "Communicate where you already work",
                  body: "The agents integrate with your existing systems of record and meet your team where they are \u2014 whether that\u2019s Slack, Jira, email, or something else entirely. No new tools to adopt.",
                },
                {
                  title: "Escalate with context",
                  body: "When something needs human attention, the agents don\u2019t just send a notification. They provide context, recommended actions, and route it to the right person. It\u2019s a dedicated chief of staff for your project.",
                },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={200 + i * 100}>
                  <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <div className="w-8 h-0.5 bg-gold mb-4" />
                    <h4 className="font-bold text-navy mb-2 text-base">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={600}>
              <p className="mt-12 text-lg text-slate-600 leading-relaxed border-l-4 border-gold pl-6">
                This is how we deliver in two weeks what takes others months.
                Our engineers build faster, and our AI agents eliminate the
                coordination overhead that slows everyone else down.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── Section 3: Two-Week Process ── */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
                The Two-Week Process
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Week 1 */}
              <FadeIn>
                <div>
                  <div className="inline-block bg-navy text-white px-5 py-1.5 rounded-full text-sm font-semibold mb-8 tracking-wide">
                    Week 1: Discovery, Architecture &amp; Build
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                        Days 1&ndash;2: Scoping
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        We define the MVP together. What&rsquo;s the core
                        functionality? Who&rsquo;s the user? What does success
                        look like? Focused scope, maximum learning, minimum
                        build.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                        Days 3&ndash;5: Architecture &amp; Build
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Engineers choose the right stack, set up the foundation,
                        and begin building. Your Pact AI agents are live from
                        day one, so you see real progress without asking for it.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Week 2 */}
              <FadeIn delay={200}>
                <div>
                  <div className="inline-block bg-gold text-navy-dark px-5 py-1.5 rounded-full text-sm font-semibold mb-8 tracking-wide">
                    Week 2: Build, Review &amp; Deliver
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                        Days 6&ndash;9: Feature Build &amp; Integration
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Core features come together. AI-generated code is
                        reviewed by senior engineers for quality, security, and
                        scalability. You see working functionality throughout
                        the week.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                        Day 10: Delivery &amp; Roadmap
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        You receive a working product: deployed, functional, and
                        ready for real users. We also deliver a technical
                        roadmap for v2 if you decide to keep going.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Section 4: What You Get ── */}
        <section className="py-24 md:py-32 bg-navy grain text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-gold/[0.04] blur-[80px]" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-14 leading-tight text-center">
                What You Get
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "A working product",
                  body: "Functional software that real users can interact with. Not wireframes, not a pitch deck.",
                },
                {
                  title: "Full code ownership",
                  body: "Your product, your codebase, your IP. No lock-in.",
                },
                {
                  title: "A technical roadmap",
                  body: "Clear documentation of what was built, how it\u2019s structured, and where to go next.",
                },
                {
                  title: "Real-time visibility",
                  body: "AI-powered project coordination throughout, so you always know where things stand.",
                },
                {
                  title: "An honest assessment",
                  body: "If we think you should pivot, scale up, or walk away, we\u2019ll tell you.",
                },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 100}>
                  <div className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] p-7 rounded-2xl hover:bg-white/[0.08] transition-all duration-300 h-full">
                    <div className="w-8 h-0.5 bg-gold mb-4" />
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-200/60 leading-relaxed text-sm">
                      {item.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* ── CTA ── */}
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
