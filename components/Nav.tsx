"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/how-we-work", label: "How We Work" },
    { href: "/outcome-driven-management", label: "Our Approach" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Fourfold"
              width={160}
              height={64}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-navy font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-navy text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-navy-dark transition-colors"
            >
              Tell Us Your Idea
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-700 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav aria-label="Mobile navigation" className="md:hidden mt-4 pb-4 border-t border-slate-100 pt-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-600 hover:text-navy font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-navy text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-navy-dark transition-colors text-center"
            >
              Tell Us Your Idea
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
