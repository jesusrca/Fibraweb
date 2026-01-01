"use client";

import { useRouter } from "next/navigation";
import BlogList from "@/components/BlogList";
import type { BlogPost } from "@/data/blog";

export default function BlogListClientWrapper({
  blogPosts,
}: {
  blogPosts: BlogPost[];
}) {
  const router = useRouter();

  return (
    <BlogList
      blogPosts={blogPosts}
      onBlogPostClick={(postId) => router.push(`/blog/${postId}`)}
    />
  );
}
