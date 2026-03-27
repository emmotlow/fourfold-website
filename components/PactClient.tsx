"use client";

import MotionCard from "@/components/MotionCard";
import { IconCpu, IconNetwork, IconBrain } from "@/components/CardIcon";

const layers = [
  {
    icon: <IconCpu />,
    title: "AI Agents",
    body: "Pact\u2019s agents handle the production work. They spec features, write code, run tests, conduct reviews, generate documentation, and manage deployments. Each agent is purpose-built for its role. Together, they produce the volume of output that used to require a full engineering team.",
  },
  {
    icon: <IconNetwork />,
    title: "Coordination Engine",
    body: "Agents alone aren\u2019t enough. Pact routes work through quality gates, manages approval workflows, sequences dependencies, and surfaces risks before they become blockers. It integrates with your existing tools and meets your team where they already work.",
  },
  {
    icon: <IconBrain />,
    title: "Institutional Memory",
    body: "This is what separates Pact from a collection of AI tools. Every engagement builds a model of your organization: your approval chains, compliance requirements, data structures, security standards, and team preferences. That model persists and improves. Your second engagement is faster than your first. Your third is faster still.",
  },
];

export function PactLayerCards() {
  return (
    <div className="space-y-6">
      {layers.map((item, i) => (
        <MotionCard
          key={item.title}
          delay={i * 0.12}
          className="bg-sand p-8 rounded-2xl border border-slate-200/80"
        >
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-10 h-10 text-gold mt-0.5">
              {item.icon}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          </div>
        </MotionCard>
      ))}
    </div>
  );
}
