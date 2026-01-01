"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

// 1. Definimos la forma de los datos que vienen de Strapi
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string | null;
}

interface PortfolioGridProps {
  projects: Project[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleNavigation = () => {
    // Navegamos usando el SLUG del proyecto
    router.push(`/proyectos/${project.slug}`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full cursor-pointer group"
      onClick={handleNavigation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        // CAMBIO: Usamos aspect-ratio en lugar de altura fija en pixeles
        className="relative shrink-0 w-full overflow-hidden aspect-[3/4] bg-gray-200" 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {project.image ? (
          <motion.img
            alt={project.title}
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={project.image}
            style={{ y }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        ) : (
          // Placeholder por si no hay imagen
          <div className="flex items-center justify-center size-full text-gray-400">
            Sin imagen
          </div>
        )}
        
        {/* Cursor personalizado "LOOK" */}
        <motion.div
          className="absolute pointer-events-none z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
            x: mousePosition.x - 40,
            y: mousePosition.y - 20
          }}
          transition={{ 
            opacity: { duration: 0.2 },
            scale: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 },
            x: { duration: 0 }, // Movimiento instantáneo para seguir al mouse
            y: { duration: 0 }
          }}
        >
          <div className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
            <p className="text-white text-[14px] uppercase font-['TWK_Everett:Bold',sans-serif] tracking-wider">
              LOOK
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div>
          <motion.p
            className="capitalize font-['TWK_Everett:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[18px] text-nowrap"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.p>
          {/* Mostramos la categoría si existe */}
          <p className="text-sm text-gray-500 mt-1">{project.category}</p>
        </div>

        <motion.div
          className="flex items-center justify-center relative shrink-0 size-[24px]"
          whileHover={{ rotate: 45, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex-none rotate-[90deg]">
             {/* Flecha SVG */}
            <div className="relative size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="arrow-up-left">
                  <path d="M17 17L7 7" id="Vector" stroke="var(--stroke-0, #3B3B3B)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 17V7H17" id="Vector_2" stroke="var(--stroke-0, #3B3B3B)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  // Dividimos los proyectos en 3 columnas para efecto Masonry
  // Nota: Si hay pocos proyectos, se llenará primero la columna 1, luego la 2, etc.
  const column1 = projects.filter((_, i) => i % 3 === 0);
  const column2 = projects.filter((_, i) => i % 3 === 1);
  const column3 = projects.filter((_, i) => i % 3 === 2);

  return (
    <motion.div
      className="relative shrink-0 w-full"
      data-name="Portafolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-row items-center size-full">
        <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-center px-[20px] md:px-[40px] py-[15px] md:py-[25px] relative w-full bg-[#faf9f3]">
          
          {/* Mobile: Una sola columna */}
          <div className="md:hidden content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
              />
            ))}
          </div>

          {/* Desktop: Tres Columnas */}
          
          {/* Columna 1 */}
          <div className="hidden md:flex content-stretch flex-col gap-[24px] items-start relative shrink-0 flex-1 max-w-[440px] self-start">
            {column1.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx * 3}
              />
            ))}
          </div>
          
          {/* Columna 2 */}
          <div className="hidden md:flex content-stretch flex-col gap-[24px] items-start relative shrink-0 flex-1 max-w-[440px] self-start">
            {column2.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx * 3 + 1}
              />
            ))}
          </div>
          
          {/* Columna 3 */}
          <div className="hidden md:flex content-stretch flex-col gap-[24px] items-start relative shrink-0 flex-1 max-w-[440px] self-start">
            {column3.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx * 3 + 2}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
