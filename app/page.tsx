import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { getFeaturedPosts } from "@/lib/posts";
import { PostCard } from "@/components/journal/post-card";

export const dynamic = "force-static";

export default async function HomePage() {
  const featured = getFeaturedPosts();

  return (
    <PageShell maxWidth="max-w-6xl">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
            Homo Adapticus • Journal of Intelligent Change
          </span>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Designing a life that{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              adapts faster than the world changes.
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Essays, experiments, and tools at the intersection of AI, complexity,
            and human resilience. Written for people who refuse to be spectators
            of the future.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/journal"
              className="inline-flex items-center rounded-full border border-sky-500/80 bg-sky-500/10 px-5 py-2.5 text-sm font-medium text-sky-100 shadow-sm backdrop-blur transition hover:bg-sky-500/20"
            >
              Read the Journal
            </Link>
            <Link
              href="/subscribe"
              className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-200"
            >
              Get new essays by email →
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            No spam. Just thoughtful signals in a noisy world.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/40 via-cyan-400/20 to-violet-500/30 blur-2xl" />
            <div className="absolute inset-[18%] rounded-[40%] border border-slate-600/60 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_60px_rgba(56,189,248,0.35)]" />
            <div className="absolute inset-[32%] rounded-full border border-sky-400/60" />
            <div className="absolute inset-[46%] rounded-full border border-slate-600/60" />
            <div className="absolute left-1/2 top-[18%] h-2 w-2 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(125,211,252,0.9)]" />
            <div className="absolute right-[16%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(216,180,254,0.9)]" />
            <div className="absolute bottom-[18%] left-[24%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Featured essays
          </h2>
          <Link
            href="/journal"
            className="text-xs font-medium text-slate-400 hover:text-sky-300"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
