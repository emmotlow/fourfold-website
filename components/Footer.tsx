import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Fourfold"
              width={120}
              height={48}
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} Fourfold. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
