"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const total =
        document.body.scrollHeight - window.innerHeight || document.body.scrollHeight;
      const current = window.scrollY;
      const value = Math.min(100, Math.max(0, (current / total) * 100));
      setProgress(value);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-20 h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 transition-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
