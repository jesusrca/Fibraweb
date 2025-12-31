"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail"; // Tu componente visual actual
import { useHeroIntersection } from "@/components/HeroIntersectionContext";

export default function ProjectClientWrapper({ allProjects, currentSlug }: { allProjects: any[], currentSlug: string }) {
  const router = useRouter();
  const { setHeroIntersecting } = useHeroIntersection();

  const { project, prevProject, nextProject } = useMemo(() => {
    // Buscamos por slug
    const currentIndex = allProjects.findIndex((p) => p.slug === currentSlug);
    
    // Lógica circular (si es el último, el siguiente es el primero)
    const currentProject = currentIndex >= 0 ? allProjects[currentIndex] : null;
    const prev = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
    const next = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

    return { project: currentProject, prevProject: prev, nextProject: next };
  }, [currentSlug, allProjects]);

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <ProjectDetail
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
      // Navegamos usando el slug
      onNavigateToProject={(slug) => router.push(`/proyectos/${slug}`)}
      onHeroIntersection={setHeroIntersecting}
    />
  );
}