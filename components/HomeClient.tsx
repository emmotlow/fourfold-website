"use client";

import MotionCard from "@/components/MotionCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import MotionFadeIn from "@/components/MotionFadeIn";
import { IconUsers, IconRocket, IconLayers } from "@/components/CardIcon";

const whoCards = [
  {
    icon: <IconUsers />,
    title: "Teams without engineering bandwidth.",
    body: "Your marketing, sales, HR, or ops team knows exactly what tool they need. They just can\u2019t get on the engineering roadmap. Fourfold + Pact helps them ship without waiting.",
  },
  {
    icon: <IconRocket />,
    title: "Founders and solopreneurs.",
    body: "You want to ship a real product, not a slide deck. Fourfold gives you production-grade engineering capacity without hiring a team.",
  },
  {
    icon: <IconLayers />,
    title: "Companies that keep building.",
    body: "You don\u2019t need one app. You need an ongoing ability to turn ideas into working software. Pact compounds knowledge across engagements, so every engagement builds on the last.",
  },
];

const stats = [
  { value: 5, prefix: "$", suffix: "K", label: "Flat fee" },
  { value: 2, suffix: " weeks", label: "To a working product" },
  { value: 100, suffix: "%", label: "Code ownership" },
];

export default function HomeClient({ section }: { section?: "cards" }) {
  if (section === "cards") {
    return (
      <div className="grid sm:grid-cols-3 gap-6">
        {whoCards.map((item, i) => (
          <MotionCard
            key={item.title}
            delay={i * 0.1}
            className="bg-sand p-8 rounded-2xl border border-slate-200/80 shadow-sm h-full"
          >
            <div className="w-10 h-10 text-gold mb-5">{item.icon}</div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {item.body}
            </p>
          </MotionCard>
        ))}
      </div>
    );
  }

  // Stats bar (default)
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <MotionFadeIn key={stat.label} delay={i * 0.15} className="text-center">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark mb-2">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1.2}
                />
              </div>
              <div className="text-sm md:text-base text-slate-500 font-medium">
                {stat.label}
              </div>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
