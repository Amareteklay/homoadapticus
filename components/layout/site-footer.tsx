// components/layout/site-footer.tsx
import Link from "next/link";
import Image from "next/image";
import { SITE_TITLE } from "@/lib/config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 text-xs text-slate-500 md:grid-cols-[minmax(0,1.4fr)_auto_minmax(0,1.4fr)] md:items-center">
          {/* Left: logo + mini tagline */}
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-7 w-7">
                <Image
                  src="/homoadapticus-logo.svg" // or .svg if that's your file
                  alt="Homo Adapticus logo"
                  fill
                  sizes="28px"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                {SITE_TITLE}
              </span>
            </Link>
            <p className="text-[11px] text-slate-500">
              Essays and experiments for people who adapt on purpose.
            </p>
          </div>

          {/* Center: copyright */}
          <div className="text-center text-[11px] text-slate-600">
            © {year} {SITE_TITLE}. All rights reserved.
          </div>

          {/* Right: external links */}
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
