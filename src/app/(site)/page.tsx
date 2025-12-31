"use client";

import { useRouter } from "next/navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import content from "@/data/content.json";

export default function PortfolioPage() {
  const router = useRouter();
  const projects = content.projects;

  return (
    <PortfolioGrid
      projects={projects}
      onProjectClick={(projectId) => router.push(`/proyectos/${projectId}`)}
    />
  );
}
