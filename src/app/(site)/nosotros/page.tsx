"use client";

import { motion } from "motion/react";
import content from "@/data/content.json";

function resolveAssetUrl(source?: string) {
  if (!source) return undefined;
  if (source.startsWith("figma:asset/")) {
    const filename = source.split("/").pop();
    return filename ? `/assets/${filename}` : source;
  }
  return source;
}

export default function AboutPage() {
  const aboutContent = content.about;
  const heroImage =
    resolveAssetUrl(aboutContent?.heroImage) ||
    aboutContent?.galleryImages?.[0];

  return (
    <motion.div
      key="nosotros"
      style={{ position: "relative" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="w-full h-[50vh] md:h-[70vh] overflow-hidden relative"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {heroImage && (
          <motion.img
            src={heroImage}
            alt="Equipo Fibra"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        )}
      </motion.div>

      <div className="px-[20px] md:px-[40px] py-[60px] md:py-[100px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[100px] mb-[60px] md:mb-[120px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1
              className="text-[48px] md:text-[72px] lg:text-[96px] xl:text-[120px] uppercase leading-[0.9] text-[#3b3b3b]"
              dangerouslySetInnerHTML={{
                __html: aboutContent?.title || "About<br />us",
              }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-[#3b3b3b] leading-relaxed mb-6 md:mb-8">
              {aboutContent?.paragraph1 ||
                "Fibra is what we've made of—the invisible thread that defines us. We bring each brand's essence to life, giving it personality that goes beyond the senses—sparking emotions, shifting perspectives, transforming its world."}
            </p>
            <p className="font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-[#3b3b3b] leading-relaxed mb-8 md:mb-12">
              {aboutContent?.paragraph2 ||
                "Fibra deeply understands a brand's reason for being, feels its urgency to exist, and creates it to move everyone who experiences it."}
            </p>

            {(aboutContent?.tagline || "Latin design<br />with heart") && (
              <motion.p
                className="font-mono text-[14px] md:text-[16px] tracking-wider text-[#3b3b3b] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                dangerouslySetInnerHTML={{
                  __html: aboutContent?.tagline || "Latin design<br />with heart",
                }}
              />
            )}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-[20px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {(aboutContent?.galleryImages && aboutContent.galleryImages.length > 0
            ? aboutContent.galleryImages
            : []
          ).map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <img
                src={img}
                alt={`Trabajo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
