import Link from "next/link";
import Image from "next/image";
import { SITE_TITLE } from "@/lib/config";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/subscribe", label: "Subscribe" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-slate-900/80 bg-slate-950/90">
      {/* Gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-violet-500/40" />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 text-xs text-slate-500 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] md:items-center">
          {/* Left: logo + mini tagline */}
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-7 w-7">
                <Image
                  src="/homoadapticus-logo.svg"
                  alt="Homo Adapticus logo"
                  fill
                  sizes="28px"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                {SITE_TITLE}
              </span>
            </Link>
            <p className="max-w-xs text-[11px] text-slate-500">
              Essays and experiments for people who adapt on purpose in a
              rapidly shifting world.
            </p>
          </div>

          {/* Middle: mini nav + copyright */}
          <div className="flex flex-col items-center gap-3 text-center md:gap-2">
            <nav className="flex flex-wrap justify-center gap-3 text-[11px] text-slate-400">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-sky-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="text-[11px] text-slate-600">
              © {year} {SITE_TITLE}. All rights reserved.
            </p>
          </div>

          {/* Right: external links + subscribe */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex flex-wrap justify-center gap-4 text-[11px] text-slate-400">
              <a
                href="https://www.linkedin.com/in/amareteklay/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-300"
              >
                LinkedIn
              </a>
              <a
                href="https://amareteklay.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-300"
              >
                amareteklay.com
              </a>
            </div>
            <Link
              href="/subscribe"
              className="mt-1 inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-[11px] font-medium text-slate-300 transition hover:border-sky-400 hover:text-sky-200"
            >
              Get new essays by email →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
