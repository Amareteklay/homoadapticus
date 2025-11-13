import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime?: string;
  category?: string;
  featured?: boolean;
  startHere?: boolean;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "journal");

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const full = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      summary: data.summary ?? "",
      date: data.date ?? "",
      readTime: data.readTime,
      category: data.category,
      featured: data.featured ?? false,
      startHere: data.startHere ?? false,
    } as PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedPosts(limit = 3): PostMeta[] {
  const all = getAllPosts();
  const featured = all.filter((p) => p.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export function getStartHerePosts(limit = 3): PostMeta[] {
  const all = getAllPosts();
  const start = all.filter((p) => p.startHere);
  return (start.length ? start : all).slice(0, limit);
}
