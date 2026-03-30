import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  DifferentiatorCards,
  DeliverablesList,
  ProcessTimeline,
} from "@/components/HowWeWorkClient";

export const metadata: Metadata = {
  title: "How We Work | Fourfold.ai Software Factory",
  description:
    "Senior engineers and AI agents build your product on Pact, an agentic software factory. See the two-week process, what you get, and why it's different.",
  openGraph: {
    title: "How We Work | Fourfold.ai Software Factory",
    description:
      "Senior engineers and AI agents build your product on Pact, an agentic software factory. See the two-week process, what you get, and why it's different.",
    url: "https://fourfold.ai/how-we-work",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "MVP Software Development",
  name: "Fourfold MVP Development",
  provider: {
    "@type": "LocalBusiness",
    name: "Fourfold.ai",
    url: "https://fourfold.ai",
  },
  description:
    "Senior engineers operating at AI speed to build real, functional products from your market expertise.",
  offers: {
    "@type": "Offer",
    price: "5000.00",
    priceCurrency: "USD",
    description: "A working product in two weeks for $5K.",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "MVP Delivery",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "2-Week MVP Development",
          description:
            "Functional software including code ownership and a technical roadmap.",
        },
      },
    ],
  },
  areaServed: "Worldwide",
  dateModified: "2026-03-30",
};

export default function HowWeWork() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── Section 1: Hero (Navy Dark) ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0">
          <div className="absolute top-12 right-16 w-48 h-48 rounded-full border border-white/[0.04] animate-float" />
          <div className="absolute bottom-16 left-20 w-32 h-32 rounded-full border border-gold/[0.08] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gold/[0.04] blur-[100px]" />
        </div>
        {/* Background illustration */}
        <div className="absolute inset-0 z-[5] pointer-events-none -top-20">
          <Image
            src="/hero-how-we-work.png"
            alt=""
            fill
            className="object-cover opacity-[0.35]"
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 relative z-10">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
              Fast doesn&rsquo;t mean
              <br />
              <span className="text-gold">reckless.</span>
            </h1>
          </FadeIn>
          <div className="mt-16 md:mt-52 lg:mt-64">
            <FadeIn delay={450}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl shadow-lg border-l-4 border-gold">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                  Fourfold delivers working products in two weeks by combining senior
                  engineers who&rsquo;ve mastered AI-assisted development with an agentic software factory customized for your business.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Process (White) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              How It Works
            </h2>
          </FadeIn>
          <ProcessTimeline />
        </div>
      </section>

      {/* ── Section 3: What Makes This Different (Sand) ── */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 leading-tight text-center">
              Why Fourfold delivers differently.
            </h2>
          </FadeIn>
          <DifferentiatorCards />
        </div>
      </section>

      {/* ── Section 4: What You Get (White) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
              What you walk away with.
            </h2>
          </FadeIn>
          <DeliverablesList />
        </div>
      </section>

      {/* ── Section 5: CTA (Navy Dark) ── */}
      <section className="relative py-24 md:py-32 bg-navy-dark text-white text-center overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gold/[0.04] blur-[80px]" />
        </div>
        {/* Background mesh gradient */}
        <div className="absolute -inset-10 z-[5] pointer-events-none">
          <Image
            src="/mesh-gradient.png"
            alt=""
            fill
            className="object-cover opacity-[0.6] scale-110"
          />
        </div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to build?
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <Link
              href="/#contact"
              className="group inline-flex items-center bg-gold text-navy-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
            >
              Tell Us Your Idea
              <svg
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
    </>
  );
}
