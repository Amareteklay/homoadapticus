"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // ⬅️ add this import

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/subscribe", label: "Subscribe" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand: logo + wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-7 w-7 sm:h-8 sm:w-8">
            <Image
              src="/homoadapticus-logo.svg"
              alt="Homo Adapticus logo"
              fill
              priority
            />
          </div>
          <span className="text-sm font-semibold tracking-tight bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Homo Adapticus
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-xs text-slate-400">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "transition hover:text-sky-300",
                  active ? "text-sky-300" : ""
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
