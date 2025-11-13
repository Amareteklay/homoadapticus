import { PageShell } from "@/components/layout/page-shell";

export const dynamic = "force-static";

export default function SubscribePage() {
  return (
    <PageShell maxWidth="max-w-md">
      <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          Stay ahead of the curve, gently.
        </h1>
        <p className="text-sm text-slate-300">
          Get new essays, experiments, and field notes from Homo Adapticus. No
          spam, no growth hacks—just thoughtful signals in a noisy world.
        </p>
        <ul className="space-y-1 text-xs text-slate-400">
          <li>• Deep dives on adaptation, AI, and complex systems.</li>
          <li>• Reflections from real-world research and practice.</li>
          <li>• Occasional experiments and prompts to try yourself.</li>
        </ul>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="w-full rounded-2xl border border-sky-500/80 bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-100 hover:bg-sky-500/30"
          >
            Join the list
          </button>
        </form>
        <p className="text-[11px] text-slate-500">
          You can plug this form into your email provider of choice later. For
          now, it&apos;s a design placeholder.
        </p>
      </div>
    </PageShell>
  );
}
