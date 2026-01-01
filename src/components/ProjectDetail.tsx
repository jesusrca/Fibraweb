"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Project, ProjectMedia } from "../data/projects";

interface ProjectDetailProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
  onNavigateToProject: (projectId: string) => void;
  onHeroIntersection?: (isIntersecting: boolean) => void;
}

interface MediaItemProps {
  media: ProjectMedia;
  index: number;
}

function MediaItem({ media, index }: MediaItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
    container: undefined // Use window/document as container
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div
      ref={itemRef}
      className="relative w-full flex items-center justify-center"
      style={{ 
        position: 'relative',
        minHeight: '100vh',
        display: 'flex', 
        margin: 0, 
        padding: 0, 
        lineHeight: 0, 
        fontSize: 0,
        border: 'none',
        outline: 'none',
        boxSizing: 'border-box'
      }}
      data-name={media.type === 'video' ? 'video' : `Foto ${index + 1}`}
    >
      {media.type === 'image' ? (
        <img
          alt=""
          className="pointer-events-none"
          style={{ 
            display: 'block', 
            margin: 0, 
            padding: 0, 
            border: 'none', 
            outline: 'none',
            width: '100%',
            height: 'auto',
            minHeight: '100vh',
            objectFit: 'cover'
          }}
          src={media.src}
          loading="lazy"
        />
      ) : (
        <video
          autoPlay
          className=""
          controlsList="nodownload"
          loop
          muted
          playsInline
          style={{ 
            display: 'block', 
            margin: 0, 
            padding: 0, 
            border: 'none', 
            outline: 'none',
            width: '100%',
            height: 'auto',
            minHeight: '100vh',
            objectFit: 'cover'
          }}
        >
          <source src={media.src} />
        </video>
      )}
    </div>
  );
}

export default function ProjectDetail({ project, prevProject, nextProject, onNavigateToProject, onHeroIntersection }: ProjectDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Detect when hero is in viewport (for changing header color)
  useEffect(() => {
    if (!heroRef.current || !onHeroIntersection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          onHeroIntersection(entry.isIntersecting);
        });
      },
      { 
        threshold: 0,
        rootMargin: "-89px 0px 0px 0px" // Account for header height
      }
    );

    observer.observe(heroRef.current);

    return () => {
      observer.disconnect();
    };
  }, [onHeroIntersection]);

  return (
    <motion.div
      className="relative shrink-0 w-full bg-[#faf9f3]"
      data-name="Portafolio interna"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'relative' }}
    >
      {/* Hero Image - Full Width, Behind Header */}
      <motion.div
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden -mt-[89px] md:-mt-[89px] pt-[89px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </motion.div>

      {/* Project Info Section */}
      <motion.div
        className="px-[20px] md:px-[40px] pt-[60px] md:pt-[100px] pb-[80px] md:pb-[120px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-[1800px] mx-auto">
          {/* Title */}
          <motion.h1
            className="text-[48px] md:text-[80px] lg:text-[120px] xl:text-[160px] uppercase leading-[0.9] text-[#3b3b3b] mb-[60px] md:mb-[80px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {project.title}
          </motion.h1>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[60px] lg:gap-[100px]">
            {/* Description */}
            {project.description && (
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="font-['TWK_Everett:Regular',sans-serif] text-[18px] md:text-[22px] lg:text-[26px] text-[#3b3b3b] leading-[1.6] max-w-[900px]">
                  {project.description}
                </p>
              </motion.div>
            )}

            {/* Services & Year */}
            <motion.div
              className="flex flex-col gap-[30px] md:gap-[40px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {project.services && project.services.length > 0 && (
                <div>
                  <h3 className="text-[14px] md:text-[16px] uppercase tracking-wider text-[#3b3b3b]/50 mb-[12px] md:mb-[16px]">
                    Services
                  </h3>
                  <div className="flex flex-wrap gap-[8px] md:gap-[12px]">
                    {project.services.map((service, idx) => (
                      <motion.span
                        key={idx}
                        className="font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b] uppercase"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + idx * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.05, color: '#000' }}
                      >
                        {service}
                        {idx < project.services!.length - 1 && <span className="text-[#3b3b3b]/30 ml-[8px] md:ml-[12px]">/</span>}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {project.year && (
                <div>
                  <h3 className="text-[14px] md:text-[16px] uppercase tracking-wider text-[#3b3b3b]/50 mb-[12px] md:mb-[16px]">
                    Year
                  </h3>
                  <p className="text-[32px] md:text-[48px] uppercase text-[#3b3b3b]">
                    {project.year}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Media Gallery - Full Width */}
      <div className="relative w-full block m-0 p-0" style={{ position: 'relative', display: 'block', margin: 0, padding: 0, lineHeight: 0 }}>
        {project.media.map((media, index) => (
          <MediaItem key={index} media={media} index={index} />
        ))}
      </div>

      {/* Credits Section */}
      {project.credits && project.credits.length > 0 && (
        <motion.div
          className="px-[20px] md:px-[40px] py-[80px] md:py-[140px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-[1800px] mx-auto">
            {/* Credits Title */}
            <motion.div
              className="mb-[60px] md:mb-[80px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-[32px] md:text-[48px] lg:text-[64px] uppercase text-[#3b3b3b] leading-[0.9]">
                Credits
              </h2>
            </motion.div>

            {/* Credits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[60px]">
              {project.credits.map((credit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  className="group"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-[12px] md:text-[14px] uppercase tracking-[0.1em] text-[#3b3b3b]/40 mb-[8px] md:mb-[12px]">
                      {credit.role}
                    </h3>
                    <p className="font-['TWK_Everett:Regular',sans-serif] text-[20px] md:text-[24px] lg:text-[28px] text-[#3b3b3b] leading-[1.2]">
                      {credit.name}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Project Navigation */}
      <ProjectNavigation 
        prevProject={prevProject}
        nextProject={nextProject}
        onNavigate={onNavigateToProject}
      />
    </motion.div>
  );
}

interface ProjectNavigationProps {
  prevProject?: Project;
  nextProject?: Project;
  onNavigate: (projectId: string) => void;
}

function ProjectNavigation({ prevProject, nextProject, onNavigate }: ProjectNavigationProps) {
  const [hoveredProject, setHoveredProject] = useState<'prev' | 'next' | null>(null);

  return (
    <motion.div
      className="relative px-[20px] md:px-[40px] py-[80px] md:py-[120px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 gap-[20px] md:gap-[40px]">
          {/* Previous Project */}
          {prevProject && (
            <motion.button
              onClick={() => onNavigate(prevProject.id)}
              onMouseEnter={() => setHoveredProject('prev')}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group text-left overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background Image on Hover */}
              <motion.div
                className="absolute inset-0 z-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ 
                  opacity: hoveredProject === 'prev' ? 1 : 0,
                  scale: hoveredProject === 'prev' ? 1 : 1.2
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-full" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src={prevProject.thumbnail} 
                    alt={prevProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 py-[40px] md:py-[60px]">
                <motion.p 
                  className="text-[48px] md:text-[64px] lg:text-[96px] uppercase tracking-[0.1em] text-[#3b3b3b]"
                  animate={{ 
                    x: hoveredProject === 'prev' ? -10 : 0,
                    color: hoveredProject === 'prev' ? '#000000' : '#3b3b3b'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Prev
                </motion.p>
              </div>
            </motion.button>
          )}

          {/* Next Project */}
          {nextProject && (
            <motion.button
              onClick={() => onNavigate(nextProject.id)}
              onMouseEnter={() => setHoveredProject('next')}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group text-right overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background Image on Hover */}
              <motion.div
                className="absolute inset-0 z-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ 
                  opacity: hoveredProject === 'next' ? 1 : 0,
                  scale: hoveredProject === 'next' ? 1 : 1.2
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-full" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src={nextProject.thumbnail} 
                    alt={nextProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 py-[40px] md:py-[60px]">
                <motion.p 
                  className="text-[48px] md:text-[64px] lg:text-[96px] uppercase tracking-[0.1em] text-[#3b3b3b]"
                  animate={{ 
                    x: hoveredProject === 'next' ? 10 : 0,
                    color: hoveredProject === 'next' ? '#000000' : '#3b3b3b'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Next
                </motion.p>
              </div>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
