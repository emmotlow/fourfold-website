import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-12 right-16 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-16 left-20 w-24 h-24 border border-white rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Fast doesn&rsquo;t mean reckless.
            <br />
            <span className="text-blue-200">Here&rsquo;s how we deliver.</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Fourfold delivers working products in two weeks by combining senior
            engineers who&rsquo;ve mastered AI-assisted development with custom
            Pact AI agents that replace traditional project management overhead.
            Every engagement follows a structured 10-day process: scoping,
            architecture, build, integration, and delivery with a technical
            roadmap.
          </p>
        </div>
      </section>

      <article>
      {/* ── Section 1: Delivery Model ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
            A Delivery Model Built for AI Speed
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              Traditional dev shops run on a model designed before AI: large
              teams, long timelines, hourly billing, and layers of coordination
              overhead. Project managers managing account managers managing
              delivery leads, each adding cost and slowing things down.
            </p>
            <p>
              We rebuilt that model around two things:{" "}
              <span className="font-semibold text-slate-800">
                senior engineers who&rsquo;ve mastered AI-assisted development
              </span>
              , and{" "}
              <span className="font-semibold text-slate-800">
                custom AI agents that replace the coordination overhead with
                intelligent automation
              </span>
              . The result is faster, leaner, and more transparent &mdash;
              without sacrificing quality.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Custom AI Agents ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Custom AI Agents for Your Project
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Every Fourfold engagement is supported by Pact AI agents,
            purpose-built and customized for each customer and project.
            These aren&rsquo;t generic dashboards or rigid workflows.
            They&rsquo;re intelligent agents that handle the bulk of management
            work, freeing our team (and yours) to focus on what actually moves
            the project forward.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-8">
            What the agents do:
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Align on deliverables, progress, risks, and blockers",
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
              >
                <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-slate-600 leading-relaxed">
            This is how we deliver in two weeks what takes others months. Our
            engineers build faster, and our AI agents eliminate the coordination
            overhead that slows everyone else down.
          </p>
        </div>
      </section>

      {/* ── Section 3: Two-Week Process ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14 tracking-tight text-center">
            The Two-Week Process
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Week 1 */}
            <div>
              <div className="inline-block bg-navy text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Week 1: Discovery, Architecture &amp; Build
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Days 1&ndash;2: Scoping
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    We define the MVP together. What&rsquo;s the core
                    functionality? Who&rsquo;s the user? What does success look
                    like? Focused scope, maximum learning, minimum build.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Days 3&ndash;5: Architecture &amp; Build
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Engineers choose the right stack, set up the foundation, and
                    begin building. Your Pact AI agents are live from day one, so
                    you see real progress without asking for it.
                  </p>
                </div>
              </div>
            </div>

            {/* Week 2 */}
            <div>
              <div className="inline-block bg-navy text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Week 2: Build, Review &amp; Deliver
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Days 6&ndash;9: Feature Build &amp; Integration
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Core features come together. AI-generated code is reviewed by
                    senior engineers for quality, security, and scalability. You
                    see working functionality throughout the week.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Day 10: Delivery &amp; Roadmap
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    You receive a working product: deployed, functional, and
                    ready for real users. We also deliver a technical roadmap for
                    v2 if you decide to keep going.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: What You Get ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 tracking-tight text-center">
            What You Get
          </h2>
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
              >
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </article>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to build?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center bg-white text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
          >
            Tell Us Your Idea
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
