"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import BlogPost from "@/components/BlogPost";
import content from "@/data/content.json";

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const blogPost = useMemo(
    () => content.blogPosts.find((post) => post.id === postId),
    [postId],
  );

  if (!blogPost) {
    return null;
  }

  return (
    <BlogPost
      blogPost={blogPost}
      onNavigateToBlogList={() => router.push("/blog")}
    />
  );
}
