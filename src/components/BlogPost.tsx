"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import { BlogPost as BlogPostType } from "../data/blog";

interface BlogPostProps {
  blogPost: BlogPostType;
  onNavigateToBlogList: () => void;
}

export default function BlogPost({ blogPost, onNavigateToBlogList }: BlogPostProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blogPost.id]);

  return (
    <motion.div
      className="relative w-full bg-[#faf9f3]"
      style={{ position: 'relative' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section - Text Only */}
      <div className="relative w-full px-[20px] md:px-[40px] pt-[120px] md:pt-[160px] pb-[40px] md:pb-[60px]">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            className="flex items-center gap-[12px] mb-[20px] md:mb-[30px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-[12px] md:text-[14px] uppercase tracking-[0.15em] text-[#3b3b3b]/70">
              {blogPost.category}
            </span>
            <span className="text-[#3b3b3b]/40">•</span>
            <span className="text-[12px] md:text-[14px] text-[#3b3b3b]/70">
              {blogPost.readTime} read
            </span>
          </motion.div>

          <motion.h1
            className="text-[40px] md:text-[64px] lg:text-[80px] xl:text-[96px] uppercase leading-[0.95] text-[#3b3b3b] mb-[30px] md:mb-[40px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {blogPost.title}
          </motion.h1>

          <motion.div
            className="flex items-center gap-[20px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex-1">
              <p className="text-[16px] md:text-[18px] text-[#3b3b3b] mb-[4px]">
                {blogPost.author.name}
              </p>
              <p className="text-[14px] md:text-[16px] text-[#3b3b3b]/60">
                {blogPost.author.role}
              </p>
            </div>
            <span className="text-[14px] md:text-[16px] text-[#3b3b3b]/60">
              {blogPost.date}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        ref={heroRef}
        className="relative w-full mb-[60px] md:mb-[80px] px-[20px] md:px-[40px]"
        style={{ position: 'relative' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden bg-[#3b3b3b]/5">
            <img
              src={blogPost.coverImage}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.article
        className="px-[20px] md:px-[40px] py-[60px] md:py-[100px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-[800px] mx-auto">
          {/* Excerpt */}
          <motion.p
            className="font-['TWK_Everett:Regular',sans-serif] text-[20px] md:text-[26px] text-[#3b3b3b] leading-[1.6] mb-[60px] md:mb-[80px] border-l-[3px] border-[#3b3b3b] pl-[24px] md:pl-[32px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {blogPost.excerpt}
          </motion.p>

          {/* Content Blocks */}
          <div className="space-y-[40px] md:space-y-[60px]">
            {blogPost.content.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {block.type === 'paragraph' && (
                  <p className="font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[19px] text-[#3b3b3b] leading-[1.8]">
                    {block.content}
                  </p>
                )}

                {block.type === 'heading' && (
                  <h2 className="text-[28px] md:text-[36px] lg:text-[42px] uppercase leading-[1.1] text-[#3b3b3b] mt-[20px] mb-[10px]">
                    {block.content}
                  </h2>
                )}

                {block.type === 'image' && (
                  <div className="my-[60px] md:my-[80px]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#3b3b3b]/5 mb-[20px]">
                      <img
                        src={block.content as string}
                        alt={block.caption || ''}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {block.caption && (
                      <p className="text-[14px] md:text-[16px] text-[#3b3b3b]/60 text-center italic">
                        {block.caption}
                      </p>
                    )}
                  </div>
                )}

                {block.type === 'quote' && (
                  <blockquote className="my-[60px] md:my-[80px] px-[24px] md:px-[40px] py-[40px] md:py-[60px] border-l-[4px] border-[#3b3b3b] bg-[#3b3b3b]/[0.02]">
                    <p className="font-['TWK_Everett:Regular',sans-serif] text-[22px] md:text-[28px] lg:text-[32px] text-[#3b3b3b] leading-[1.4] italic">
                      {block.content}
                    </p>
                  </blockquote>
                )}

                {block.type === 'list' && (
                  <ul className="space-y-[16px] md:space-y-[20px] pl-[24px] md:pl-[32px]">
                    {(block.content as string[]).map((item, idx) => (
                      <li
                        key={idx}
                        className="font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[19px] text-[#3b3b3b] leading-[1.8] relative before:content-['—'] before:absolute before:left-[-24px] md:before:left-[-32px] before:text-[#3b3b3b]/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <motion.div
            className="mt-[80px] md:mt-[100px] pt-[40px] md:pt-[60px] border-t border-[#3b3b3b]/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-[12px]">
              {blogPost.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-[16px] md:px-[20px] py-[8px] md:py-[10px] text-[12px] md:text-[14px] uppercase tracking-[0.1em] text-[#3b3b3b] bg-[#3b3b3b]/5 hover:bg-[#3b3b3b] hover:text-white transition-colors duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.article>

      {/* Back Button */}
      <motion.div
        className="px-[20px] md:px-[40px] pb-[80px] md:pb-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[800px] mx-auto">
          <motion.button
            onClick={onNavigateToBlogList}
            className="group flex items-center gap-[16px] text-[14px] md:text-[16px] uppercase tracking-[0.1em] text-[#3b3b3b] hover:text-black transition-colors duration-300"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[24px]">←</span>
            <span>Back to Blog</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}