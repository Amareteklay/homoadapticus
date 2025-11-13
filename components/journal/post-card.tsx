import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 shadow-sm transition hover:border-sky-500/60 hover:bg-slate-900/90"
    >
      <div className="space-y-3">
        {post.category && (
          <span className="inline-flex rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 group-hover:bg-slate-800/80">
            {post.category}
          </span>
        )}
        <h3 className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-sky-100">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-xs text-slate-400">{post.summary}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
        <span>{post.readTime ?? "8 min read"}</span>
        <span className="inline-flex items-center gap-1 text-slate-400 group-hover:text-sky-300">
          Read
          <span aria-hidden>↗</span>
        </span>
      </div>
    </Link>
  );
}
