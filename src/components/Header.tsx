"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import LogoParallax from "./LogoParallax";

interface HeaderProps {
  currentPage: string;
  lightMode?: boolean;
}

export default function Header({ currentPage, lightMode = false }: HeaderProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar header si:
      // 1. Estamos en el top (primeros 100px)
      // 2. O si hacemos scroll hacia arriba
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigate = (page: 'portfolio' | 'blog' | 'nosotros' | 'contacto') => {
    setIsMenuOpen(false);
    const routeMap = {
      portfolio: "/",
      blog: "/blog",
      nosotros: "/nosotros",
      contacto: "/contacto",
    } as const;
    router.push(routeMap[page]);
  };

  const menuItems = [
    { name: 'Portfolio', page: 'portfolio' as const },
    { name: 'Blog', page: 'blog' as const },
    { name: 'About us', page: 'nosotros' as const },
    { name: 'Contact', page: 'contacto' as const }
  ];

  // Define colors based on lightMode
  const textColor = lightMode ? 'text-white' : 'text-[#3b3b3b]';
  const bgColor = lightMode ? 'bg-transparent' : 'bg-[#faf9f3]';

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className={`h-[89px] md:h-[89px] h-[70px] sticky top-0 z-50 w-full ${bgColor} transition-colors duration-300`} 
            data-name="Header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex flex-col items-center justify-center size-full relative z-10">
              <div className="content-stretch flex flex-col items-center justify-center px-[20px] md:px-[40px] py-[15px] md:py-[25px] relative size-full">
                <div className="content-stretch flex justify-between items-center relative shrink-0 w-full" data-name="Header">
                  <button
                    onClick={() => handleNavigate('portfolio')}
                    className="leading-[normal] not-italic relative shrink-0 w-[80px] h-[30px] md:w-[120px] md:h-[40px] flex items-center cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    <LogoParallax lightMode={lightMode} />
                  </button>
                  
                  {/* Desktop Menu */}
                  <div className={`hidden md:flex content-stretch gap-[60px] items-center leading-[normal] not-italic relative shrink-0 ${textColor} text-[16px] text-nowrap uppercase transition-colors duration-300`} data-name="Ítems">
                    <button 
                      onClick={() => handleNavigate('portfolio')}
                      className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      <span className={`${currentPage === 'portfolio' ? "font-['TWK_Everett:Bold',sans-serif]" : "font-['TWK_Everett:Regular',sans-serif]"}`}>
                        Portfolio
                      </span>
                      <span className="font-['TWK_Everett:Bold',sans-serif] invisible absolute top-0 left-0" aria-hidden="true">
                        Portfolio
                      </span>
                    </button>
                    <button 
                      onClick={() => handleNavigate('blog')}
                      className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      <span className={`${currentPage === 'blog' ? "font-['TWK_Everett:Bold',sans-serif]" : "font-['TWK_Everett:Regular',sans-serif]"}`}>
                        Blog
                      </span>
                      <span className="font-['TWK_Everett:Bold',sans-serif] invisible absolute top-0 left-0" aria-hidden="true">
                        Blog
                      </span>
                    </button>
                    <button 
                      onClick={() => handleNavigate('nosotros')}
                      className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      <span className={`${currentPage === 'nosotros' ? "font-['TWK_Everett:Bold',sans-serif]" : "font-['TWK_Everett:Regular',sans-serif]"}`}>
                        About us
                      </span>
                      <span className="font-['TWK_Everett:Bold',sans-serif] invisible absolute top-0 left-0" aria-hidden="true">
                        About us
                      </span>
                    </button>
                    <ContactMenuItem 
                      onClick={() => handleNavigate('contacto')}
                      isActive={currentPage === 'contacto'}
                      lightMode={lightMode}
                    />
                  </div>

                  {/* Mobile Hamburger Button */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden relative w-[40px] h-[40px] flex flex-col items-center justify-center gap-[6px] cursor-pointer z-50"
                    aria-label="Toggle menu"
                  >
                    <motion.span
                      className={`w-[28px] h-[2px] ${lightMode ? 'bg-white' : 'bg-[#3b3b3b]'} rounded-full transition-colors duration-300`}
                      animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    <motion.span
                      className={`w-[28px] h-[2px] ${lightMode ? 'bg-white' : 'bg-[#3b3b3b]'} rounded-full transition-colors duration-300`}
                      animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span
                      className={`w-[28px] h-[2px] ${lightMode ? 'bg-white' : 'bg-[#3b3b3b]'} rounded-full transition-colors duration-300`}
                      animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            {/* Color Layers - 4 capas con efecto cascada */}
            
            {/* Layer 1 - Purple (background, enters FIRST visually, leaves last) */}
            <motion.div
              className="absolute inset-0 bg-[#9A96EB] z-[1]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                delay: 0,
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
            
            {/* Layer 2 - Pink */}
            <motion.div
              className="absolute inset-0 bg-[#FF86AA] z-[2]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                delay: 0.15,
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
            
            {/* Layer 3 - Green */}
            <motion.div
              className="absolute inset-0 bg-[#00804C] z-[3]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                delay: 0.3,
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* Layer 4 - Yellow (top layer, enters LAST visually, leaves first after content) */}
            <motion.div
              className="absolute inset-0 bg-[#FDF164] z-[4]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                delay: 0.45,
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* Menu Items - On top of everything, disappears FIRST */}
            <motion.div 
              className="absolute inset-0 z-[10] flex flex-col items-center justify-center h-full px-[40px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0.95,
                duration: 0.3,
              }}
            >
              <nav className="flex flex-col items-center gap-[40px] w-full">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.page}
                    onClick={() => handleNavigate(item.page)}
                    className={`text-[48px] leading-none uppercase font-['TWK_Everett:Bold',sans-serif] text-[#3b3b3b] relative overflow-hidden`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      delay: 1.0 + index * 0.08,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {currentPage === item.page && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#3b3b3b]"
                        layoutId="underline"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface ContactMenuItemProps {
  onClick: () => void;
  isActive: boolean;
  lightMode?: boolean;
}

function ContactMenuItem({ onClick, isActive, lightMode = false }: ContactMenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mainTextColor = lightMode ? 'text-white' : 'text-[#3b3b3b]';

  return (
    <button 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative shrink-0 cursor-pointer overflow-visible ${isActive ? "font-['TWK_Everett:Bold',sans-serif]" : "font-['TWK_Everett:Regular',sans-serif]"}`}
    >
      {/* Main Text */}
      <span className={`relative z-10 ${mainTextColor} transition-colors duration-300`}>Lets talk!</span>
      
      {/* Layer Effects - Colors from Fibra logo */}
      {/* Layer 1 - Green */}
      <motion.span
        className="absolute top-0 left-0 text-[#00804C] pointer-events-none"
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={isHovered ? { 
          opacity: 0.6, 
          x: -2, 
          y: -2 
        } : { 
          opacity: 0, 
          x: 0, 
          y: 0 
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        Lets talk!
      </motion.span>

      {/* Layer 2 - Yellow */}
      <motion.span
        className="absolute top-0 left-0 text-[#FDF164] pointer-events-none"
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={isHovered ? { 
          opacity: 0.5, 
          x: -4, 
          y: -4 
        } : { 
          opacity: 0, 
          x: 0, 
          y: 0 
        }}
        transition={{ 
          duration: 0.3,
          delay: 0.05,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        Lets talk!
      </motion.span>

      {/* Layer 3 - Pink */}
      <motion.span
        className="absolute top-0 left-0 text-[#FF86AA] pointer-events-none"
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={isHovered ? { 
          opacity: 0.4, 
          x: -6, 
          y: -6 
        } : { 
          opacity: 0, 
          x: 0, 
          y: 0 
        }}
        transition={{ 
          duration: 0.3,
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        Lets talk!
      </motion.span>

      {/* Layer 4 - Purple */}
      <motion.span
        className="absolute top-0 left-0 text-[#9A96EB] pointer-events-none"
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={isHovered ? { 
          opacity: 0.3, 
          x: -8, 
          y: -8 
        } : { 
          opacity: 0, 
          x: 0, 
          y: 0 
        }}
        transition={{ 
          duration: 0.3,
          delay: 0.15,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        Lets talk!
      </motion.span>
    </button>
  );
}
