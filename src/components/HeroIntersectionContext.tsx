"use client";

import { createContext, useContext, useState } from "react";

type HeroIntersectionContextValue = {
  isHeroIntersecting: boolean;
  setHeroIntersecting: (isIntersecting: boolean) => void;
};

const HeroIntersectionContext = createContext<HeroIntersectionContextValue | undefined>(
  undefined,
);

export function HeroIntersectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHeroIntersecting, setHeroIntersecting] = useState(false);

  return (
    <HeroIntersectionContext.Provider
      value={{ isHeroIntersecting, setHeroIntersecting }}
    >
      {children}
    </HeroIntersectionContext.Provider>
  );
}

export function useHeroIntersection() {
  const context = useContext(HeroIntersectionContext);
  if (!context) {
    throw new Error("useHeroIntersection must be used within HeroIntersectionProvider");
  }
  return context;
}
