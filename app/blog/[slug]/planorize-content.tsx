import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function PlanorizeContent() {
  return (
    <>
      {/* At a Glance */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="bg-sand border border-slate-200/80 rounded-2xl p-8 md:p-10">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-8">
                At a Glance
              </p>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                {[
                  { label: "Industry", value: "Professional home and life organizing services" },
                  { label: "Team Size", value: "12 organizers" },
                  { label: "Engagement", value: "2-week MVP sprint" },
                  { label: "Fourfold Team", value: "1 Senior Full Stack Engineer" },
                  { label: "Key Tech", value: "AI/LLMs, PDF generation, multi-tenant architecture" },
                  { label: "Headline Result", value: "3\u20135 hours per organizer per week saved", highlight: true },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">
                      {item.label}
                    </p>
                    <p className={`font-semibold leading-snug ${item.highlight ? "text-gold-dark text-lg" : "text-slate-900"}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Quote callout */}
          <FadeIn delay={150}>
            <div className="border-l-4 border-gold bg-sand rounded-r-2xl p-8 md:p-10 mt-12">
              <p className="font-display text-xl md:text-2xl italic text-slate-900 leading-relaxed mb-4">
                &ldquo;Fourfold built in 2 weeks what another vendor had quoted at 4
                months.&rdquo;
              </p>
              <p className="text-gold-dark text-sm font-semibold">
                &mdash; Whitney Elliott, Owner, Planorize
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              The Challenge
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn>
              <p>
                Whitney is a franchisee of a professional home and life
                organizing business. Her 12-person team is in clients&rsquo;
                homes every day, photographing spaces, tracking projects,
                sharing recaps, and writing up new project quotes. And every
                single one of those tasks lived on a different platform.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <p>
                Photos piled up on personal phones until storage ran out.
                Project notes sat in one app, client comms in another, social
                media in a third. Nobody could search relevant past jobs for
                project quotes. The work itself was excellent, but the systems
                around it were duct tape.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p>
                Whitney was looking for a solution to streamline her
                team&rsquo;s operations, but it didn&rsquo;t exist. She had a
                vision for what she wanted and even talked to another vendor
                whose quote was too costly. So she tapped Fourfold to see if it
                could be built faster.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              The Solution
            </h2>
          </FadeIn>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <FadeIn>
              <p>
                Fourfold put a senior full stack engineer on the job. The sprint
                kicked off on a Monday. Two weeks later, Whitney had Planorize,
                a custom app that replaced her entire six-platform workflow.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <p>
                The engineer partnered directly with Whitney, checking in daily
                on what to prioritize next via WhatsApp. There wasn&rsquo;t a
                long requirements phase, just a running conversation about what
                would make the biggest difference, as quickly as possible. The
                codebase was AI-written, with the engineer directing and
                reviewing, and Whitney and her team testing.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mt-14 mb-8">
              What Shipped
            </p>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                title: "Photo capture & storage.",
                body: "Organizers shoot photos right in the app, with the ability to select which photos go into client recaps. No more running out of phone storage mid-job.",
              },
              {
                title: "Voice-to-Notes.",
                body: "Organizers dictate notes during visits instead of typing. The app captures everything in real time.",
              },
              {
                title: "Client project hub.",
                body: "Every job, organized by client, with full search. Need to pull up that kitchen reorg from October? Two taps.",
              },
              {
                title: "AI-powered recaps.",
                body: "One tap generates a professional PDF recap to send the client. Replaces the old copy-paste-into-email routine.",
              },
              {
                title: "AI-generated Instagram captions.",
                body: "AI writes captions and hashtags from the job photos. The 20-minute social media task now takes seconds.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={250 + i * 80}>
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

      {/* The Results */}
      <section className="py-24 md:py-32 bg-navy-dark grain text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
              The Results
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { metric: "36\u201360 hrs", label: "saved per week across the team" },
              { metric: "6 \u2192 1", label: "platforms consolidated into one app" },
              { metric: "2 weeks", label: "from Figma mockup to working product" },
            ].map((item, i) => (
              <FadeIn key={item.metric} delay={i * 120}>
                <div className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
                    {item.metric}
                  </p>
                  <p className="text-blue-200/60 text-sm leading-snug">
                    {item.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-lg text-blue-200/70 leading-relaxed space-y-6">
            <FadeIn delay={400}>
              <p>
                At 3&ndash;5 hours saved per organizer per week, the investment
                pays for itself almost instantly.
              </p>
            </FadeIn>
            <FadeIn delay={500}>
              <p>
                Every job is documented now. Searchable. Shareable. A client
                asks &ldquo;what did my pantry look like before?&rdquo; and
                someone can pull it up on the spot. Instagram, which used to be
                the thing that kept getting pushed to tomorrow, basically runs
                itself.
              </p>
            </FadeIn>
            <FadeIn delay={600}>
              <p>
                Whitney has plans to make Planorize available more broadly. For
                now, her team is operating more efficiently, more consistently,
                and more confidently.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-navy leading-tight">
              Your idea. Our engineering.{" "}
              <span className="text-gold-dark">Two weeks.</span>
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="mt-10">
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
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
