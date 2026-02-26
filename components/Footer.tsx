import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Fourfold"
                width={120}
                height={48}
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-blue-200/50 text-sm max-w-xs leading-relaxed">
              Your idea. Our engineering. A working product in two weeks.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-4 font-semibold">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              <Link
                href="/how-we-work"
                className="text-blue-200/60 hover:text-white text-sm transition-colors"
              >
                How We Work
              </Link>
              <Link
                href="/outcome-driven-management"
                className="text-blue-200/60 hover:text-white text-sm transition-colors"
              >
                Our Approach
              </Link>
              <Link
                href="/#contact"
                className="text-blue-200/60 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/40 text-sm">
            &copy; {new Date().getFullYear()} Fourfold. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
