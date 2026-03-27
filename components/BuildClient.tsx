"use client";

import MotionFadeIn from "@/components/MotionFadeIn";
import MotionCard from "@/components/MotionCard";

const painPoints = [
  "I built it in Bubble, but it\u2019s too slow to scale.",
  "I used Cursor/Lovable/Bolt, but I\u2019m stuck.",
  "I hired a freelancer and got burned.",
];

export function PainPointCards() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {painPoints.map((text, i) => (
        <MotionCard
          key={i}
          delay={i * 0.1}
          className="border-l-4 border-gold bg-sand rounded-r-2xl p-8 h-full flex items-center"
        >
          <p className="font-display text-lg font-bold text-slate-900 leading-snug">
            &ldquo;{text}&rdquo;
          </p>
        </MotionCard>
      ))}
    </div>
  );
}

const steps = [
  {
    step: "1",
    label: "Tell us what you\u2019ve got.",
    detail: "A few sentences and a screenshot. That\u2019s it.",
  },
  {
    step: "2",
    label: "We scope the MVP.",
    detail: "48 hours. You\u2019ll know the $5K scope.",
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

export function BuildProcessStrip() {
  return (
    <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
      {/* Connecting line (desktop only) */}
      <div className="hidden md:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gold/30" />
      {/* Connecting line (mobile only) */}
      <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gold/30" />

      {steps.map((item, i) => (
        <MotionFadeIn key={item.step} delay={i * 0.1}>
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
        </MotionFadeIn>
      ))}
    </div>
  );
}
