import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <PageShell maxWidth="max-w-md">
      <div className="space-y-6 text-center">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            404 • Off the map
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
            This path hasn&apos;t evolved yet.
          </h1>
          <p className="text-sm text-slate-300">
            The page you&apos;re looking for doesn&apos;t exist, or it&apos;s still
            in the adaptation pipeline. In the meantime, you can:
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <Link
            href="/"
            className="rounded-2xl border border-sky-500/80 bg-sky-500/15 px-4 py-2 font-medium text-sky-100 hover:bg-sky-500/25"
          >
            Return to the front page
          </Link>
          <Link
            href="/journal"
            className="rounded-2xl border border-slate-700 px-4 py-2 font-medium text-slate-200 hover:border-sky-400 hover:text-sky-200"
          >
            Explore the Adapticus Journal
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
