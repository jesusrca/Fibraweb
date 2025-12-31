"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingIntro from "@/components/LoadingIntro";
import PageTransition from "@/components/PageTransition";
import { useHeroIntersection } from "@/components/HeroIntersectionContext";

function getCurrentPage(pathname: string | null) {
  if (!pathname) return "portfolio";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/nosotros")) return "nosotros";
  if (pathname.startsWith("/contacto")) return "contacto";
  return "portfolio";
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isHeroIntersecting } = useHeroIntersection();
  const [initialLoad, setInitialLoad] = useState(true);
  const [showLoadingIntro, setShowLoadingIntro] = useState(true);

  useEffect(() => {
    if (!showLoadingIntro) {
      const timer = setTimeout(() => {
        setInitialLoad(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [showLoadingIntro]);

  const currentPage = useMemo(() => getCurrentPage(pathname), [pathname]);
  const lightMode = pathname?.startsWith("/proyectos/")
    ? isHeroIntersecting
    : false;

  return (
    <div
      className="bg-[#faf9f3] content-stretch flex flex-col items-start relative size-full min-h-screen"
      style={{ position: "relative" }}
    >
      <AnimatePresence>
        {showLoadingIntro && (
          <LoadingIntro onComplete={() => setShowLoadingIntro(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>{initialLoad && <PageTransition />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="w-full flex flex-col relative bg-[#faf9f3]"
        style={{ position: "relative" }}
      >
        <Header currentPage={currentPage} lightMode={lightMode} />

        <div style={{ position: "relative", width: "100%" }}>{children}</div>

        <Footer />
      </motion.div>
    </div>
  );
}
