"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { useHeroIntersection } from "@/components/HeroIntersectionContext";
import content from "@/data/content.json";

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const { setHeroIntersecting } = useHeroIntersection();

  const { project, prevProject, nextProject } = useMemo(() => {
    const projects = content.projects;
    const currentIndex = projects.findIndex((item) => item.id === projectId);
    const currentProject = currentIndex >= 0 ? projects[currentIndex] : undefined;
    const prev =
      currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
    const next =
      currentIndex >= 0 && currentIndex < projects.length - 1
        ? projects[currentIndex + 1]
        : projects[0];
    return { project: currentProject, prevProject: prev, nextProject: next };
  }, [projectId]);

  if (!project) {
    return null;
  }

  return (
    <ProjectDetail
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
      onNavigateToProject={(id) => router.push(`/proyectos/${id}`)}
      onHeroIntersection={setHeroIntersecting}
    />
  );
}
