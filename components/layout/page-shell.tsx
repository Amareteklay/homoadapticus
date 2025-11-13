import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  maxWidth?: string;
};

export function PageShell({ children, maxWidth = "max-w-4xl" }: PageShellProps) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className={`mx-auto ${maxWidth}`}>{children}</div>
    </section>
  );
}
