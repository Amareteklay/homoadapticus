import { PageShell } from "@/components/layout/page-shell";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/journal/post-card";

export const dynamic = "force-static";

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <PageShell maxWidth="max-w-5xl">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
          The Adapticus Journal
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Essays on adaptation, AI, and resilient futures.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Long-form reflections, experiments, and field notes for people trying to
          live as Homo Adapticus in a world of accelerating change.
        </p>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </PageShell>
  );
}
