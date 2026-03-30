import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function BlogPostCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-navy-dark text-white text-center overflow-hidden">
      <div className="grain absolute inset-0" />
      {/* Background mesh gradient */}
      <div className="absolute -inset-10 z-[5] pointer-events-none">
        <Image
          src="/mesh-gradient.webp"
          alt=""
          fill
          className="object-cover opacity-[0.6] scale-110"
        />
      </div>
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <FadeIn>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            We built the factory.
          </h3>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-lg text-blue-200/60 leading-relaxed mb-10">
            Fourfold runs on Pact, an agentic software factory that delivers
            working software products in two weeks for $5K. You bring the idea. The
            factory handles the rest. If you&rsquo;ve got something worth building,
            tell us about it.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
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
  );
}
