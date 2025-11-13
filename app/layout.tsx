import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";

export const metadata = {
 metadataBase: new URL("https://homoadapticus.com"),
  title: {
    default: "Homo Adapticus",
    template: "%s | Homo Adapticus",
  },
  description:
    "Essays, experiments, and tools for living as Homo Adapticus in a rapidly changing world.",
  openGraph: {
    title: "Homo Adapticus",
    description:
      "A journal of intelligent change at the intersection of adaptation, AI, and complex systems.",
    url: "https://homoadapticus.com",
    siteName: "Homo Adapticus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homo Adapticus",
    description:
      "Essays and experiments for people who adapt on purpose.",
  },
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
