import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/60 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Fourfold"
                width={120}
                height={48}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-slate-400 text-sm max-w-xs leading-relaxed">
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
                className="text-slate-500 hover:text-navy text-sm transition-colors"
              >
                How We Work
              </Link>
              <Link
                href="/outcome-driven-management"
                className="text-slate-500 hover:text-navy text-sm transition-colors"
              >
                Our Approach
              </Link>
              <Link
                href="/#contact"
                className="text-slate-500 hover:text-navy text-sm transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Fourfold. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
