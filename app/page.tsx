import Link from "next/link";

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-12 w-40 h-40 border border-white rounded-full" />
          <div className="absolute top-48 right-24 w-28 h-28 border border-white rounded-full" />
          <div className="absolute bottom-24 left-1/4 w-20 h-20 border border-white rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-24 md:py-36 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Your idea. Our engineering.
            <br />
            <span className="text-blue-200">A working product in two weeks.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Fourfold builds working software products in two weeks for $5K. We
            pair your market expertise with senior engineers operating at AI
            speed, so you go from idea to functional MVP without the traditional
            six-figure investment.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center bg-white text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
          >
            Tell Us Your Idea
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-8 text-blue-200 text-base italic">
            We recently helped a client go from kickoff to working demo in 4
            days. By week 2, they were onboarding alpha testers.
          </p>
        </div>
      </section>

      {/* ── Section 1: Economics Changed ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
            The Economics of Building Changed. Most People Missed It.
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              A year ago, building a software product meant six figures and six
              months before you knew if anyone would use it. That math killed
              more good ideas than bad ones.
            </p>
            <p>
              AI rewrote that math. Today, a senior engineer using tools like
              Claude Code can build in days what used to take a full team months.
              One of our developers built a production booking platform, live and
              handling 1,000 daily users, in 50 hours. Another built a database
              tool over a weekend that outperforms products charging $100+/year.
            </p>
            <p>
              The gap between &ldquo;I have an idea&rdquo; and &ldquo;I have a
              product&rdquo; has never been smaller. But there&rsquo;s still a
              gap between having AI tools and knowing how to use them to build
              production software.{" "}
              <span className="font-semibold text-slate-800">
                That&rsquo;s where we come in.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: You Have the Hardest Part ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
            You Have the Hardest Part Figured Out
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              The best products don&rsquo;t come from people who know how to
              code. They come from people who deeply understand a problem: the
              entrepreneur who&rsquo;s spent years in an industry, the small
              business owner who sees an opportunity, the family business ready
              to build something new.
            </p>
            <p>
              You already have the market knowledge and the insight into what
              needs to exist. What you need is a technical partner who can turn
              that into a real product, fast and affordably.
            </p>
            <p className="text-xl font-semibold text-navy">
              Fourfold is that partner.
            </p>
            <p>
              We&rsquo;re not a dev shop that quotes months and bills by the
              hour. We&rsquo;re a lean engineering team operating at AI speed,
              with custom AI agents that coordinate your project and keep
              everyone aligned to outcomes from day one.
            </p>
          </div>
          <div className="mt-10 bg-navy text-white rounded-xl p-8 text-center">
            <p className="text-2xl md:text-3xl font-bold">
              $5K. Two weeks. A working product at the end.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: How It Works ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14 tracking-tight text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 p-6 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Fourfold Delivers Differently ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14 tracking-tight text-center">
            Why Fourfold Delivers Differently
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Who This Is For ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14 tracking-tight text-center">
            Who This Is For
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
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
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact Form ── */}
      <section id="contact" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Tell Us Your Idea
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            It starts here. Tell us what you&rsquo;re thinking. A few sentences
            is plenty. We&rsquo;ll get back to you within 48 hours.
          </p>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 md:p-12">
            <iframe
              data-tally-src="https://tally.so/embed/LZdzVv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              title="Tell Us Your Idea"
            />
          </div>

          <p className="mt-6 text-slate-500 text-sm">
            No commitment. No jargon. Just a real conversation about your idea.
          </p>
        </div>
      </section>
    </>
  );
}
