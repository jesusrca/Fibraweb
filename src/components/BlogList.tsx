"use client";

import { motion } from "motion/react";
import { BlogPost } from "../data/blog";

interface BlogListProps {
  blogPosts: BlogPost[];
  onBlogPostClick: (postId: string) => void;
}

export default function BlogList({ blogPosts, onBlogPostClick }: BlogListProps) {
  // Group posts by category for featured layout
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="relative w-full bg-[#faf9f3] pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px]">
      <div className="px-[20px] md:px-[40px]">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <motion.div
            className="mb-[60px] md:mb-[100px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[48px] md:text-[96px] lg:text-[128px] xl:text-[160px] uppercase leading-[0.9] text-[#3b3b3b] mb-[20px] md:mb-[30px]">
              Blog
            </h1>
            <p className="font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[20px] lg:text-[22px] text-[#3b3b3b]/70 max-w-[600px]">
              Reflexiones sobre diseño, tecnología y creatividad
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost ? (
            <motion.article
              className="mb-[80px] md:mb-[120px] group cursor-pointer"
              onClick={() => onBlogPostClick(featuredPost.id)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[60px] items-center">
                {/* Image */}
                <motion.div
                  className="relative overflow-hidden aspect-[16/10] bg-[#3b3b3b]/5"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-[12px] mb-[20px]">
                    <span className="text-[12px] md:text-[14px] uppercase tracking-[0.15em] text-[#3b3b3b]/50">
                      {featuredPost.category}
                    </span>
                    <span className="text-[#3b3b3b]/30">•</span>
                    <span className="text-[12px] md:text-[14px] text-[#3b3b3b]/50">
                      {featuredPost.readTime} read
                    </span>
                  </div>

                  <motion.h2
                    className="text-[36px] md:text-[48px] lg:text-[64px] uppercase leading-[0.95] text-[#3b3b3b] mb-[24px] md:mb-[32px]"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {featuredPost.title}
                  </motion.h2>

                  <p className="font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b]/70 leading-[1.6] mb-[24px] md:mb-[32px]">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-[16px]">
                    <div className="flex-1">
                      <p className="text-[14px] md:text-[16px] text-[#3b3b3b]">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-[12px] md:text-[14px] text-[#3b3b3b]/50">
                        {featuredPost.author.role}
                      </p>
                    </div>
                    <span className="text-[14px] text-[#3b3b3b]/50">
                      {featuredPost.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ) : (
            <div className="py-[60px] md:py-[80px] text-[#3b3b3b]/60">
              No hay posts todavía.
            </div>
          )}

          {/* Recent Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] md:gap-[60px]">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group cursor-pointer"
                onClick={() => onBlogPostClick(post.id)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#3b3b3b]/5 mb-[24px]">
                  <motion.img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-[12px] mb-[16px]">
                  <span className="text-[12px] uppercase tracking-[0.15em] text-[#3b3b3b]/50">
                    {post.category}
                  </span>
                  <span className="text-[#3b3b3b]/30">•</span>
                  <span className="text-[12px] text-[#3b3b3b]/50">
                    {post.readTime} read
                  </span>
                </div>

                {/* Title */}
                <motion.h3
                  className="text-[24px] md:text-[28px] lg:text-[32px] uppercase leading-[1.1] text-[#3b3b3b] mb-[16px]"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {post.title}
                </motion.h3>

                {/* Excerpt */}
                <p className="font-['TWK_Everett:Regular',sans-serif] text-[14px] md:text-[16px] text-[#3b3b3b]/70 leading-[1.6] mb-[20px]">
                  {post.excerpt}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between text-[12px] md:text-[14px]">
                  <span className="text-[#3b3b3b]">{post.author.name}</span>
                  <span className="text-[#3b3b3b]/50">{post.date}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
