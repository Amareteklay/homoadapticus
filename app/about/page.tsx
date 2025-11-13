import { PageShell } from "@/components/layout/page-shell";
import Link from "next/link";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <PageShell maxWidth="max-w-3xl">
      <div className="space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            About
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            A philosophy of intelligent adaptation in a rapidly shifting world.
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Homo Adapticus is an ongoing experiment: how do we design lives,
            careers, and communities that not only survive change, but learn to
            thrive through it?
          </p>
        </header>

        <section className="space-y-4 text-sm text-slate-300">
          <p>
            This project lives at the intersection of AI, complex systems, and
            personal transformation. It is written for people who sense that
            business-as-usual ways of thinking are no longer enough, and who want
            language, tools, and metaphors for navigating what comes next.
          </p>
          <p>
            Instead of treating adaptation as a last resort, Homo Adapticus treats
            it as a craft. A set of skills. Something you can practice on purpose
            rather than stumble into by accident.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Principles of Homo Adapticus
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-xs font-semibold text-slate-100">
                Adapt Early
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Notice weak signals, run small experiments, and move before you
                feel ready.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-xs font-semibold text-slate-100">
                Adapt Consciously
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Make your reactions visible to yourself. Choose responses instead
                of defaulting to reflex.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-xs font-semibold text-slate-100">
                Adapt Across Domains
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Apply the same patterns of adaptation to your inner life, your
                relationships, and your work.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3 text-sm text-slate-300">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            If this resonates
          </h2>
          <p>
            Start with a few essays from the journal, then subscribe if you want
            to follow the experiments more closely.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/journal"
              className="rounded-full border border-sky-500/80 bg-sky-500/10 px-4 py-2 text-xs font-medium text-sky-100 hover:bg-sky-500/20"
            >
              Read the Journal
            </Link>
            <Link
              href="/subscribe"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 hover:border-sky-400 hover:text-sky-200"
            >
              Subscribe for new essays
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
