"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import svgPaths from "@/imports/svg-85he65ozzg";

interface LoadingIntroProps {
  onComplete: () => void;
}

export default function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const [showLogo, setShowLogo] = useState(true);
  const easeStandard = [0.25, 0.46, 0.45, 0.94] as const;

  useEffect(() => {
    // Después de 1.5 segundos, comenzar la animación de salida
    const timer = setTimeout(() => {
      setShowLogo(false);
      // Esperar a que termine la animación de salida antes de llamar onComplete
      setTimeout(onComplete, 400);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const layerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      z: -200,
      rotateX: 45,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      z: i * 30, // Cada capa tiene diferente profundidad Z
      rotateX: 0,
      transition: {
        // Invertir el delay: amarillo primero (4), luego rosa (3), rojo (2), morado (1), verde (0)
        delay: (4 - i) * 0.08,
        duration: 0.5,
        ease: easeStandard,
      }
    }),
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: easeStandard,
      }
    }
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#faf9f3] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={showLogo ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-[600px] h-[300px]"
        style={{ perspective: 1000 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative size-full">
          <svg 
            className="block size-full scale-[0.7] md:scale-100" 
            fill="none" 
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 2223 1014"
            style={{ transform: 'translateZ(0)' }}
          >
            <g clipPath="url(#clip0_intro)" id="Group 1">
              {/* Capa 1 - Verde (fondo) */}
              <motion.g 
                id="Vector"
                variants={layerVariants}
                custom={0}
                style={{ transformOrigin: "center" }}
              >
                <mask fill="white" id="path-1-inside-1_intro">
                  <path d={svgPaths.p8342a80} />
                </mask>
                <path 
                  d={svgPaths.p8342a80} 
                  fill="#00804C" 
                  mask="url(#path-1-inside-1_intro)" 
                  stroke="#1D1D1D" 
                  strokeWidth="4.87449" 
                />
              </motion.g>
              
              {/* Capa 2 - Morado */}
              <motion.g 
                id="Vector_2"
                variants={layerVariants}
                custom={1}
                style={{ transformOrigin: "center" }}
              >
                <mask fill="white" id="path-2-inside-2_intro">
                  <path d={svgPaths.p12942900} />
                </mask>
                <path 
                  d={svgPaths.p12942900} 
                  fill="#9A96EB" 
                  mask="url(#path-2-inside-2_intro)" 
                  stroke="#1D1D1D" 
                  strokeWidth="4.87449" 
                />
              </motion.g>
              
              {/* Capa 3 - Rojo */}
              <motion.g 
                id="Vector_3"
                variants={layerVariants}
                custom={2}
                style={{ transformOrigin: "center" }}
              >
                <mask fill="white" id="path-3-inside-3_intro">
                  <path d={svgPaths.p39830300} />
                </mask>
                <path 
                  d={svgPaths.p39830300} 
                  fill="#FF5545" 
                  mask="url(#path-3-inside-3_intro)" 
                  stroke="#1D1D1D" 
                  strokeWidth="4.87449" 
                />
              </motion.g>
              
              {/* Capa 4 - Rosa */}
              <motion.g 
                id="Vector_4"
                variants={layerVariants}
                custom={3}
                style={{ transformOrigin: "center" }}
              >
                <mask fill="white" id="path-4-inside-4_intro">
                  <path d={svgPaths.pdc26580} />
                </mask>
                <path 
                  d={svgPaths.pdc26580} 
                  fill="#FF86AA" 
                  mask="url(#path-4-inside-4_intro)" 
                  stroke="#1D1D1D" 
                  strokeWidth="4.87449" 
                />
              </motion.g>
              
              {/* Capa 5 - Amarillo (frente) */}
              <motion.g 
                id="Vector_5"
                variants={layerVariants}
                custom={4}
                style={{ transformOrigin: "center" }}
              >
                <mask fill="white" id="path-5-inside-5_intro">
                  <path d={svgPaths.p3f984f80} />
                </mask>
                <path 
                  d={svgPaths.p3f984f80} 
                  fill="#FDF164" 
                  mask="url(#path-5-inside-5_intro)" 
                  stroke="#1D1D1D" 
                  strokeWidth="10" 
                />
              </motion.g>
            </g>
            <defs>
              <clipPath id="clip0_intro">
                <rect fill="white" height="1013.07" width="2222.77" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
