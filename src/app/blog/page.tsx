"use client";

import { useRouter } from "next/navigation";
import BlogList from "@/components/BlogList";
import type { BlogPost as BlogPostType } from "@/data/blog";
import content from "@/data/content.json";

export default function BlogPage() {
  const router = useRouter();
  const blogPosts = content.blogPosts as BlogPostType[];

  return (
    <BlogList
      blogPosts={blogPosts}
      onBlogPostClick={(postId) => router.push(`/blog/${postId}`)}
    />
  );
}
