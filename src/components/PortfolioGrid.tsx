"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Project } from "../data/projects";

interface PortfolioGridProps {
  projects: Project[];
  onProjectClick: (projectId: string) => void;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
    container: undefined // Use window/document as container
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full cursor-pointer group"
      style={{ position: 'relative' }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="relative shrink-0 w-full overflow-hidden"
        style={{ height: `${project.thumbnailHeight}px` }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.img
          alt={project.title}
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={project.thumbnail}
          style={{ y }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        
        {/* Cursor personalizado "LOOK" que sigue el mouse */}
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
            x: { duration: 0 },
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
        <motion.p
          className="capitalize font-['TWK_Everett:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[18px] text-nowrap"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.p>
        <motion.div
          className="flex items-center justify-center relative shrink-0 size-[24px]"
          style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}
          whileHover={{ rotate: 45, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex-none rotate-[90deg]">
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

export default function PortfolioGrid({ projects, onProjectClick }: PortfolioGridProps) {
  // Split projects into 3 columns
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
      style={{ position: 'relative' }}
    >
      <div className="relative flex flex-row items-center size-full" style={{ position: 'relative' }}>
        <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-center px-[20px] md:px-[40px] py-[15px] md:py-[25px] relative w-full bg-[#faf9f3]" style={{ position: 'relative' }}>
          {/* Mobile: Single Column */}
          <div className="md:hidden content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" style={{ position: 'relative' }}>
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onClick={() => onProjectClick(project.id)}
              />
            ))}
          </div>

          {/* Desktop: Three Columns */}
          {/* Column 1 */}
          <div className="hidden md:flex content-stretch flex-col gap-[24px] items-start relative shrink-0 flex-1 max-w-[440px] self-start" style={{ position: 'relative' }}>
            {column1.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx * 3}
                onClick={() => onProjectClick(project.id)}
              />
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="hidden md:flex content-stretch flex-col gap-[24px] items-start relative shrink-0 flex-1 max-w-[440px] self-start" style={{ position: 'relative' }}>
            {column2.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx * 3 + 1}
                onClick={() => onProjectClick(project.id)}
              />
            ))}
          </div>
          
          {/* Column 3 */}
          <div className="hidden md:flex content-stretch flex-col gap-[24px] items-start relative shrink-0 flex-1 max-w-[440px] self-start" style={{ position: 'relative' }}>
            {column3.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx * 3 + 2}
                onClick={() => onProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}