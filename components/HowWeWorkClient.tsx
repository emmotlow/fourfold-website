"use client";

import MotionCard from "@/components/MotionCard";
import MotionFadeIn from "@/components/MotionFadeIn";
import { IconCode, IconFactory, IconRefresh, IconTag } from "@/components/CardIcon";

const differentiators = [
  {
    icon: <IconCode />,
    title: "Engineers who\u2019ve mastered AI development.",
    body: "Our senior engineers don\u2019t use AI as autocomplete. They\u2019ve mastered how to structure code properly, prevent hallucination-related bugs, and use AI tools to produce enterprise-grade output.",
  },
  {
    icon: <IconFactory />,
    title: "A software factory that coordinates everything.",
    body: "Pact tracks progress, detects risks, routes decisions, manages quality gates, and keeps your team informed, all automatically.",
  },
  {
    icon: <IconRefresh />,
    title: "Your second engagement is faster than your first.",
    body: "Our system learns your organization: approval chains, security requirements, compliance needs, team preferences. That knowledge compounds.",
  },
  {
    icon: <IconTag />,
    title: "Outcome-based pricing.",
    body: "$5K for a working product. We charge for the outcome, not hours. Our incentive is to deliver, not to extend.",
  },
];

export function DifferentiatorCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {differentiators.map((item, i) => (
        <MotionCard
          key={item.title}
          delay={i * 0.1}
          className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm h-full"
        >
          <div className="w-9 h-9 text-gold mb-4">{item.icon}</div>
          <h3 className="font-bold text-navy mb-3">{item.title}</h3>
          <p className="text-slate-600 leading-relaxed text-sm">{item.body}</p>
        </MotionCard>
      ))}
    </div>
  );
}

const deliverables = [
  "A working product that real users can interact with",
  "Full code ownership, your IP, no lock-in",
  "A technical roadmap with clear documentation of what was built, how it\u2019s structured, and where to go next",
  "A software factory that already knows your business via Pact",
];

export function DeliverablesList() {
  return (
    <ul className="space-y-5 text-lg text-slate-600">
      {deliverables.map((item, i) => (
        <MotionFadeIn key={item} delay={i * 0.08} direction="left">
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
              <svg
                className="w-3.5 h-3.5 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        </MotionFadeIn>
      ))}
    </ul>
  );
}

const steps = [
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
    body: "AI agents handle the production work. Senior engineers handle the architecture and quality. The factory handles the coordination, tracking, and risk detection.",
  },
  {
    step: "4",
    title: "You decide what\u2019s next.",
    body: "Two weeks later, you have a functional product you can demo, test with customers, or show investors. We deliver a technical roadmap so you know exactly where to go from here.",
  },
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

      {steps.map((item, i) => (
        <MotionFadeIn key={item.step} delay={i * 0.12} direction="left">
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
        </MotionFadeIn>
      ))}
    </div>
  );
}
