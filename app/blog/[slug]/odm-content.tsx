import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function ODMContent() {
  return (
    <>
      {/* Intro (new) */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background illustration */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/blog-odm-target.webp"
            alt=""
            fill
            className="object-cover opacity-[0.25] scale-150 -translate-x-[5%]"
          />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  We built Pact on a simple conviction: management should measure
                  what matters, not what&rsquo;s easy to count. Most organizations
                  track tasks, hours, and status updates. None of those tell you
                  whether the actual business result is on track.
                </p>
                <p>
                  That&rsquo;s why we developed Outcome-Driven Management (ODM),
                  the operating framework behind everything Pact does. Here&rsquo;s
                  how it works, and why it matters more now than ever.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section: Modern Work */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Modern Work Has Changed,{" "}
              <span className="text-slate-400">
                but Management Hasn&rsquo;t.
              </span>
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn>
              <p>
                Modern organizations are flatter, faster, and more complex than
                ever.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <p>
                Work happens horizontally, but management thinks vertically.
                Companies are designed hierarchically, but critical work
                increasingly happens across departments, outside traditional
                supervisory view. This creates dropped balls, inflated costs, and
                underperforming teams.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p>
                Silos measure everything except what matters. Function-specific
                tools measure accountability within departments while completely
                missing accountability toward organizational goals. Engineering
                celebrates story points while sales misses revenue targets.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p>
                Critical information disappears into communication overload.
                Conversations between teammates, customers, and vendors become
                invisible to management hierarchy, severing the connection between
                daily work and end goals.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: Rule-driven processes */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Rule-driven processes inherently introduce risk to achievement of
              valuable business results.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Management&rsquo;s fundamental purpose is coordinating valuable
              business results. However, most organizations are failing at this
              basic function because they rely on static, rule-driven processes,
              which is compounded by the characteristics of the modern
              organization. The problem is two-fold:
            </p>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={200}>
              <div className="bg-sand border-l-4 border-gold rounded-r-2xl p-6">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    1. Rule-driven processes detach tasks from the outcome
                    they&rsquo;re meant to achieve.
                  </strong>{" "}
                  They are often built around what mattered in the past and not
                  what actually matters today. Rule-driven processes were designed
                  for a slower, more predictable world. However, technology
                  advancements are driving us to work faster in increasingly
                  complex environments.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-sand border-l-4 border-gold rounded-r-2xl p-6">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    2. Rule-driven processes that assume long lead times will
                    strangle organizations as AI accelerates work velocity.
                  </strong>{" "}
                  When a feature can be AI-generated in 10 minutes, relying on
                  weekly or monthly reviews kills momentum, stalls innovation, and
                  reduces outcome success rates.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: ODM Framework */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              ODM is a framework designed to make outcomes, not rules,{" "}
              <span className="text-gold-dark">the atomic unit of work.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              Outcome-Driven Management (ODM) is a measurement system that closes
              key gaps in existing management frameworks and is designed to be
              continuous, fast, and cost-effective by aligning with the way people
              work in modern organizations. ODM can be implemented using existing
              systems of record and integrated with your data sets naturally.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-8">
              ODM&rsquo;s Core Concepts
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Outcomes, Not Tasks.",
                body: "Every piece of work is defined by what it aims to achieve, not what\u2019s being done. Outcomes offer a universal method to evaluate progress of any organizational goal.",
              },
              {
                title: "Ownership Across Silos.",
                body: "By creating an objective layer for management that transcends silos, everyone can understand the context of their work, and simultaneously be held accountable in a transparent way.",
              },
              {
                title: "Real-Time Escalation.",
                body: "Proactive course correction is enabled through automatic identification of when work is at risk of missing its intended outcome.",
              },
              {
                title: "Power of Chains.",
                body: "Outcomes create dependency chains. When measuring many outcomes together, the data can be used to build a reputation system. This can be applied to people management, agent evaluation, tool selection, and team structure.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={200 + i * 100}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 h-full">
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Three Forces */}
      <section className="py-24 md:py-32 bg-navy grain text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-14 leading-tight">
              Three forces make ODM essential:
            </h2>
          </FadeIn>
          <div className="space-y-8">
            {[
              {
                label: "Acceleration",
                body: "AI compresses timelines from weeks to hours. Your review processes need to match your development speed, not your legacy assumptions.",
              },
              {
                label: "Accountability",
                body: "When employees can generate unlimited code or content with AI, traditional performance metrics become worthless. Measuring quality over quantity is more important than ever.",
              },
              {
                label: "Agents",
                body: "Agentic AI will support or replace human workers in certain areas of business, which requires comprehensive alignment mechanisms to ensure these agents deliver business outcomes, not just tasks.",
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 120}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center font-display font-bold text-gold text-lg">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-white text-lg mb-1">
                      {item.label}
                    </h3>
                    <p className="text-blue-200/60 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section: The Algorithm */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              ODM Implementation:{" "}
              <span className="text-slate-400">The Algorithm</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Outcomes must have two characteristics:
            </p>
          </FadeIn>
          <div className="space-y-4 mb-10">
            <FadeIn delay={150}>
              <div className="bg-sand border-l-4 border-gold rounded-r-2xl p-6">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">1. Measurable:</strong>{" "}
                  An outcome is something important that can succeed or fail,
                  unlike tasks, which can only be measured in volume, not value.
                  Must provide clear satisfaction conditions and expected
                  completion dates.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="bg-sand border-l-4 border-gold rounded-r-2xl p-6">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">2. Assignment:</strong>{" "}
                  Tied to a responsible agent (person or AI). The accountable
                  party understands why something needs completion and can assess
                  success or failure.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={300}>
            <div className="bg-navy-dark/5 border border-slate-200/80 rounded-2xl p-6">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-display font-bold text-navy">
                  Example:
                </span>{" "}
                Instead of measuring &ldquo;story points&rdquo; (output), measure
                &ldquo;VP of Product approves the new feature release&rdquo;
                (outcome).
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={350}>
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mt-14 mb-8">
              The ODM Algorithm
            </p>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200" />
            {[
              "Turn goals into measurable outcomes consistently and early, specifying what needs to be done, when and by whom.",
              "Identify blockers explicitly, from work tracking systems (e.g. Notion, JIRA, etc), or implicitly from conversations (e.g. Slack, Teams, emails, transcripts, etc).",
              "Recognize recursion: Each blocker becomes someone else\u2019s outcome, creating organic multi-level networks across silos and management systems.",
            ].map((text, i) => (
              <FadeIn key={i} delay={400 + i * 120}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-navy-dark flex items-center justify-center font-display font-bold relative z-10 shadow-md shadow-gold/20">
                    {i + 1}
                  </div>
                  <p className="text-slate-600 leading-relaxed pt-2">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Outcome Manager */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              How Everyone Becomes an{" "}
              <span className="text-gold-dark">
                &ldquo;Outcome Manager&rdquo;
              </span>{" "}
              with ODM
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn>
              <p>
                As AI radically alters how work gets done, executives, heads of
                function, and business leads need visibility into their most
                critical outcomes while adapting to rapidly changing technology.
                Consistently defining and tracking outcomes has historically been
                difficult, however, AI now defines outcomes directly from existing
                data sources continuously. (see{" "}
                <a
                  href="https://withpact.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-dark hover:text-gold underline underline-offset-2 transition-colors"
                >
                  www.withpact.com
                </a>
                )
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mt-10 mb-4">
                With ODM, business owners get what they actually need
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <ul className="space-y-3">
                {[
                  "Real-time visibility in business terms they care about",
                  "Accurate delivery estimates and risk assessments",
                  "Conversation summaries focused on business impact",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="mt-10 bg-navy-dark/5 border border-slate-200/80 rounded-2xl p-6">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-display font-bold text-navy">
                  Example:
                </span>{" "}
                A sales deal requires legal contract review, engineering
                technology enablement, and executive term approval. The
                salesperson is responsible for removing customer blockers but has
                limited influence over internal stakeholders. Traditional
                management tracks departmental metrics: sales stage, story points
                delivered, legal hours billed. None of these predict the actual
                outcome, which is deal closure. ODM focuses on the ultimate
                outcome and aligns all activities across all stakeholders and
                systems.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section: Who Benefits */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-12 leading-tight">
              Who Benefits Most From ODM
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              {
                title: "Organizations Using AI Agents",
                body: "When employees can create unlimited emails, documents, and code with AI assistance, ODM becomes the key to accurately assessing performance by measuring actual business results.",
              },
              {
                title: "Services Companies",
                body: "Drive higher customer satisfaction and renewal rates by tracking work in customer terms. ODM handles project management overhead while producing accurate stakeholder updates automatically.",
              },
              {
                title: "Executives",
                body: 'Semantic management allows understanding of all work simultaneously, creating opportunities for savings and eliminating duplicate functions. ODM continuously identifies, analyzes, and correlates individual tasks with large-scale goals, creating an organizational "X-ray."',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="bg-sand p-7 rounded-2xl border border-slate-200/80">
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Getting Started (updated closing) */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Getting Started with ODM
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn>
              <p>
                ODM can be implemented in a week in small teams and then scaled
                across entire organizations. Pact is the AI management layer that
                makes ODM operational: tracking outcomes, surfacing risks,
                coordinating work across people and AI agents, and compounding
                organizational knowledge with every engagement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
