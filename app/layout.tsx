import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";

export const metadata = {
  title: "Homo Adapticus",
  description: "Essays, experiments, and tools for living as Homo Adapticus.",
  icons: {
    icon: "/favicon.ico",     
    shortcut: "/favicon.ico",
    apple: "/favicon.png"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
           <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
