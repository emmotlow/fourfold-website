import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fourfold.ai | Your Agentic Software Factory",
  description:
    "Working software products in two weeks for $5K. Fourfold's agentic software factory coordinates AI agents and senior engineers to build enterprise-grade products fast.",
  metadataBase: new URL("https://fourfold.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fourfold.ai",
    siteName: "Fourfold.ai",
    title: "Fourfold.ai | Your Agentic Software Factory",
    description:
      "Working software products in two weeks for $5K. Fourfold's agentic software factory coordinates AI agents and senior engineers to build enterprise-grade products fast.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fourfold.ai — A working product in two weeks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fourfold.ai | Your Agentic Software Factory",
    description:
      "Working software products in two weeks for $5K. Fourfold's agentic software factory coordinates AI agents and senior engineers to build enterprise-grade products fast.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="antialiased font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
