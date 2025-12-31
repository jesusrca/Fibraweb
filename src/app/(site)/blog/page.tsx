"use client";

import { useRouter } from "next/navigation";
import BlogList from "@/components/BlogList";
import content from "@/data/content.json";

export default function BlogPage() {
  const router = useRouter();
  const blogPosts = content.blogPosts;

  return (
    <BlogList
      blogPosts={blogPosts}
      onBlogPostClick={(postId) => router.push(`/blog/${postId}`)}
    />
  );
}
