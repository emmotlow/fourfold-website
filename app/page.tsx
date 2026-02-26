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
  dateModified: "2026-02-26",
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
        text: "$5K flat fee. Outcome-based pricing — we charge for the project, not developer hours. You know the cost upfront.",
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
      name: "What are Pact AI agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pact AI agents are custom AI agents assigned to every Fourfold engagement. They handle project coordination — aligning on deliverables, tracking progress, detecting risks, flagging blockers, and escalating intelligently. They integrate with your existing tools like Slack, Jira, and email.",
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

      {/* ── Hero ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden grain">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-8 w-72 h-72 rounded-full border border-white/[0.04] animate-float" />
          <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold/[0.06] blur-[100px]" />
          <div className="absolute bottom-16 left-1/4 w-40 h-40 rounded-full border border-gold/[0.08] animate-float-slow" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full border border-white/[0.03] animate-float" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 lg:py-48 relative z-10">
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
              Fourfold builds working software products in two weeks for $5K. We
              pair your market expertise with senior engineers operating at AI
              speed, so you go from idea to functional MVP without the
              traditional six-figure investment.
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
            <p className="mt-14 text-sm text-blue-200/50 border-l-2 border-gold/40 pl-4 max-w-lg">
              We recently helped a client go from kickoff to working demo in 4
              days. By week 2, they were onboarding alpha testers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 1: Economics Changed ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              The Economics of Building Changed.{" "}
              <span className="text-slate-400">Most People Missed It.</span>
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn>
              <p>
                A year ago, building a software product meant six figures and six
                months before you knew if anyone would use it. That math killed
                more good ideas than bad ones.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <p>
                AI rewrote that math. Today, a senior engineer using tools like
                Claude Code can build in days what used to take a full team
                months. One of our developers built a production booking
                platform, live and handling 1,000 daily users, in 50 hours.
                Another built a database tool over a weekend that outperforms
                products charging $100+/year.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p>
                The gap between &ldquo;I have an idea&rdquo; and &ldquo;I have a
                product&rdquo; has never been smaller. But there&rsquo;s still a
                gap between having AI tools and knowing how to use them to build
                production software.{" "}
                <span className="font-semibold text-slate-900">
                  That&rsquo;s where we come in.
                </span>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Section 2: You Have the Hardest Part ── */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              You Have the Hardest Part Figured Out
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn>
              <p>
                The best products don&rsquo;t come from people who know how to
                code. They come from people who deeply understand a problem: the
                entrepreneur who&rsquo;s spent years in an industry, the small
                business owner who sees an opportunity, the family business ready
                to build something new.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <p>
                You already have the market knowledge and the insight into what
                needs to exist. What you need is a technical partner who can turn
                that into a real product, fast and affordably.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="font-display text-2xl font-bold text-navy">
                Fourfold is that partner.
              </p>
            </FadeIn>
            <FadeIn delay={250}>
              <p>
                We&rsquo;re not a dev shop that quotes months and bills by the
                hour. We&rsquo;re a lean engineering team operating at AI speed,
                with custom AI agents that coordinate your project and keep
                everyone aligned to outcomes from day one.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={350}>
            <div className="mt-12 border-l-4 border-gold bg-white rounded-r-2xl p-8 md:p-10 shadow-sm">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-navy leading-tight">
                $5K. Two weeks.{" "}
                <span className="text-gold-dark">A working product.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 3: How It Works ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              How It Works
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200" />

            {[
              {
                step: "1",
                title: "Tell us your idea.",
                body: "Not a business plan. Just the problem you\u2019re solving, who it\u2019s for, and what \u201Cworking\u201D looks like. Fill out the form. It takes two minutes.",
              },
              {
                step: "2",
                title: "We scope it together.",
                body: "Within 48 hours, we define the MVP: the smallest version of your product that proves the concept. No jargon, no 47-page SOW.",
              },
              {
                step: "3",
                title: "We build it.",
                body: "Our senior engineers build your working product using the most advanced AI tools available. Custom AI agents keep you in the loop on progress, risks, and decisions throughout \u2014 without a single status meeting.",
              },
              {
                step: "4",
                title: "You decide what\u2019s next.",
                body: "Two weeks later, you have a functional product you can demo, test with customers, or show investors. Plus a clear technical roadmap and the evidence to decide whether this idea deserves your full investment.",
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
                    <p className="text-slate-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Fourfold Delivers Differently ── */}
      <section className="py-24 md:py-32 bg-navy grain text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight text-center">
              Why Fourfold Delivers Differently
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Engineers who\u2019ve mastered AI development",
                body: "Our developers don\u2019t use AI as autocomplete. They\u2019ve mastered how to structure code properly, prevent hallucinations, maintain consistency, and split tasks for maximum leverage. The result is production-quality software at a pace that experienced CTOs can barely believe.",
              },
              {
                title: "Custom AI agents for project coordination",
                body: "Every Fourfold engagement gets Pact AI agents customized for your project. These agents handle the bulk of management work that makes traditional projects slow and expensive: aligning on deliverables, tracking progress, detecting risks, flagging blockers, and escalating intelligently.",
              },
              {
                title: "Outcome-based pricing",
                body: "We charge for the project, not developer hours. Our incentive is to deliver a working product, not extend a timeline. You know the cost upfront.",
              },
              {
                title: "Senior review on every line",
                body: "AI writes code fast. Experienced engineers make sure it\u2019s the right code. Every line is reviewed for quality, security, and scalability.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] p-8 rounded-2xl hover:bg-white/[0.08] transition-all duration-300 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-5" />
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-blue-200/60 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Who This Is For ── */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              Who This Is For
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "You\u2019ve been sitting on an idea.",
                body: "You\u2019ve done the research. You know the problem exists. You just need someone to build it, and you\u2019re not ready to bet your savings on a six-month dev cycle.",
              },
              {
                title: "You run a business and see a product opportunity.",
                body: "You\u2019ve been successful doing things one way, and you see a chance to build a tool or platform that takes it further.",
              },
              {
                title: "You\u2019re an industry expert making the leap.",
                body: "You\u2019ve spent your career becoming the expert. Now you want to build the product your industry actually needs.",
              },
              {
                title: "You want to validate before you invest.",
                body: "A two-week MVP is the smartest beginning. You\u2019ll know whether the technology works, whether customers want it, and whether it deserves your next dollar.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact Form ── */}
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
              It starts here. Tell us what you&rsquo;re thinking. A few
              sentences is plenty. We&rsquo;ll get back to you within 48 hours.
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
