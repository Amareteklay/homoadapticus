import { PageShell } from "@/components/layout/page-shell";

export const dynamic = "force-static";

export default function SubscribePage() {
  return (
    <PageShell maxWidth="max-w-md">
      <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-sm">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
            Stay ahead of the curve, gently.
          </h1>
          <p className="text-sm text-slate-300">
            A slow, thoughtful newsletter about adaptation, AI, and designing a
            life that can bend without breaking.
          </p>
        </div>

        <ul className="space-y-1 text-xs text-slate-400">
          <li>• Essays before they appear on the site.</li>
          <li>• Field notes from research and real-world experiments.</li>
          <li>• Occasional prompts to stress-test your future self.</li>
        </ul>

        <form className="space-y-3">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-300"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl border border-sky-500/80 bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-100 hover:bg-sky-500/30"
          >
            Join Homo Adapticus
          </button>
        </form>

        <p className="text-[11px] text-slate-500">
          No spam, no growth hacks. Just an occasional, carefully written signal
          when there&apos;s something worth your attention.
        </p>
      </div>
    </PageShell>
  );
}
