import type { Metadata } from "next";
import "@/styles/index.css";
import { HeroIntersectionProvider } from "@/components/HeroIntersectionContext";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Fibra",
  description: "Fibra web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <HeroIntersectionProvider>
          <SiteShell>{children}</SiteShell>
        </HeroIntersectionProvider>
      </body>
    </html>
  );
}
