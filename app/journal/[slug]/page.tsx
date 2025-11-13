import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { ReadingProgress } from "@/components/journal/reading-progress";

const CONTENT_DIR = path.join(process.cwd(), "content", "journal");

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export const dynamic = "force-static";

export default async function PostPage({ params }: { params: Params }) {
  const fullPath = path.join(CONTENT_DIR, `${params.slug}.mdx`);
  if (!fs.existsSync(fullPath)) return notFound();

  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);

  const date = data.date ?? "";
  const readTime = data.readTime ?? "8 min read";
  const category = data.category ?? "Essay";
  const title = data.title ?? params.slug;
  const summary = data.summary ?? "";

  return (
    <>
      <ReadingProgress />
      <PageShell maxWidth="max-w-3xl">
        <article className="space-y-10">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Adapticus Journal • {category}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              {title}
            </h1>
            {summary && (
              <p className="max-w-xl text-sm text-slate-300">{summary}</p>
            )}
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
              {date && <span>{date}</span>}
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </header>

          <div className="prose prose-invert prose-slate max-w-none text-sm leading-relaxed">
            <MDXRemote source={content} />
          </div>
        </article>
      </PageShell>
    </>
  );
}
