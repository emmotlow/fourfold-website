import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Accordion from "@/components/Accordion";
import BuildTallyEmbed from "@/components/BuildTallyEmbed";

export const metadata: Metadata = {
  title: "Build Your MVP in Two Weeks for $5K | Fourfold",
  description:
    "Outgrew your no-code tool? Fourfold's senior engineers build production-grade MVPs in two weeks for $5K. Bring your Bubble app, Figma mockup, or idea. We'll build the rest.",
  alternates: {
    canonical: "https://www.fourfold.ai/build",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fourfold.ai/build",
    siteName: "Fourfold.ai",
    title: "Build Your MVP in Two Weeks for $5K | Fourfold",
    description:
      "Outgrew your no-code tool? Fourfold's senior engineers build production-grade MVPs in two weeks for $5K. Bring your Bubble app, Figma mockup, or idea. We'll build the rest.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fourfold.ai — Build Your MVP in Two Weeks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your MVP in Two Weeks for $5K | Fourfold",
    description:
      "Outgrew your no-code tool? Fourfold's senior engineers build production-grade MVPs in two weeks for $5K. Bring your Bubble app, Figma mockup, or idea. We'll build the rest.",
    images: ["/og-image.png"],
  },
};

const faqItems = [
  {
    question: "$5K sounds too cheap. What's the catch?",
    answer:
      "No catch. AI collapsed the cost of building software. We pass those economics to you. All AI tooling and token costs are included in the $5K.",
  },
  {
    question: "I already have a Bubble/no-code app. Can you work with that?",
    answer:
      "Yes. We'll review what you've built and rebuild the core in production code. You won't start from zero.",
  },
  {
    question: "Who actually builds this?",
    answer:
      "Senior engineers who've mastered AI-assisted development. Every line is human-reviewed.",
  },
  {
    question: "What does the engagement actually look like?",
    answer:
      "We start with a kickoff call. Then you get a dedicated WhatsApp group where you share thoughts, feedback, and priorities in real time. Our AI agents listen to the conversation and keep the engineering team aligned, so you're always in the loop without status meetings.",
  },
  {
    question: "What happens after the MVP is delivered?",
    answer:
      "You own everything. Code, deployment, documentation. If you want ongoing support, we offer a $1K/month plan that covers hosting, maintenance, and limited feature adjustments. Or take it to your own team. No lock-in.",
  },
];

const steps = [
  {
    step: "1",
    label: "Tell us what you've got.",
    detail: "A few sentences and a screenshot. That's it.",
  },
  {
    step: "2",
    label: "We scope the MVP.",
    detail: "48 hours. You'll know the $5K scope.",
  },
  {
    step: "3",
    label: "We build it.",
    detail: "Senior engineers. AI speed. Two weeks.",
  },
  {
    step: "4",
    label: "You own a working product.",
    detail: "Code, deployment, documentation. All yours.",
  },
];

export default function BuildPage() {
  return (
    <>
      {/* ── Section 1: Hero (Navy Dark) ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-8 w-72 h-72 rounded-full border border-white/[0.04] animate-float" />
          <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold/[0.06] blur-[100px]" />
          <div className="absolute bottom-16 left-1/4 w-40 h-40 rounded-full border border-gold/[0.08] animate-float-slow" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-36 relative z-10">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[0.95] tracking-tight mb-8">
              You did the hard part.
              <br />
              Now let&rsquo;s build the real thing.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-blue-200/70 max-w-2xl leading-relaxed mb-12">
              Fourfold turns your existing work, wireframes, Bubble apps, Figma
              files, or even a napkin sketch, into a production-grade product in
              two weeks for $5K.
            </p>
          </FadeIn>
          <FadeIn delay={350}>
            <Link
              href="#contact"
              className="inline-flex items-center bg-gold text-navy-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
            >
              Tell Us What You&rsquo;ve Built So Far
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

      {/* ── Section 2: The Problem / Recognition Cards (White) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-navy text-sm font-semibold tracking-[0.2em] uppercase mb-6 text-center">
              &ldquo;I keep hitting walls because I&rsquo;m not an
              engineer.&rdquo;
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              Sound familiar?
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              "I built it in Bubble, but it's too slow to scale.",
              "I used Cursor/Lovable/Bolt, but I'm stuck.",
              "I hired a freelancer and got burned.",
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="border-l-4 border-gold bg-sand rounded-r-2xl p-8 h-full flex items-center">
                  <p className="font-display text-lg font-bold text-slate-900 leading-snug">
                    &ldquo;{text}&rdquo;
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Proof / Case Study (Navy Dark) ── */}
      <section className="py-24 md:py-32 bg-navy-dark grain text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gold-light mb-12 leading-tight text-center">
              What $5K and two weeks actually produces.
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="border-l-4 border-gold bg-white/[0.05] backdrop-blur-sm rounded-r-2xl p-8 md:p-10">
              <p className="font-display text-xl md:text-2xl italic text-white leading-relaxed mb-6">
                &ldquo;Fourfold built in 2 weeks what another vendor quoted at 4
                months.&rdquo;
              </p>
              <p className="text-gold-light text-sm font-semibold mb-3">
                &mdash; Whitney Elliott, Owner, Planorize
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-center mt-10">
              <Link
                href="/blog/planorize"
                className="text-gold hover:text-gold-light text-sm font-semibold transition-colors"
              >
                Read the full case study &rarr;
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 4: How It Works / Process Strip (Sand) ── */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-12 text-center">
              You&rsquo;ve already tried. Now let&rsquo;s actually build it.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gold/30" />
            {/* Connecting line (mobile only) */}
            <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gold/30" />

            {steps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 100}>
                <div className="relative flex md:flex-col md:items-center md:text-center gap-5 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-navy-dark flex items-center justify-center font-display font-bold text-lg relative z-10 shadow-md shadow-gold/20">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-sm text-slate-500">{item.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={450}>
            <div className="mt-12 text-center">
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
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 5: Why Now (White) ── */}
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
                A senior engineer can now build in days what used to take
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

      {/* ── Section 6: FAQ Accordion (Sand) ── */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              The questions you&rsquo;re already asking.
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <Accordion items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* ── Section 6: CTA / Form (Navy Dark) ── */}
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
              You&rsquo;ve put in the work. Let&rsquo;s finish it.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-blue-200/60 mb-12">
              Tell us what you&rsquo;ve built so far. A few sentences is plenty.
              We&rsquo;ll get back to you within 48 hours.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 p-8 md:p-12">
              <BuildTallyEmbed />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="mt-8 text-blue-200/40 text-sm">
              No commitment. No jargon. Just a real conversation about what
              you&rsquo;ve built and where you want it to go.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
