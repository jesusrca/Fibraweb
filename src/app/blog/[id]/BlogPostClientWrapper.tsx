"use client";

import { useRouter } from "next/navigation";
import BlogPost from "@/components/BlogPost";
import type { BlogPost as BlogPostType } from "@/data/blog";

export default function BlogPostClientWrapper({
  blogPost,
}: {
  blogPost: BlogPostType;
}) {
  const router = useRouter();

  return (
    <BlogPost
      blogPost={blogPost}
      onNavigateToBlogList={() => router.push("/blog")}
    />
  );
}
