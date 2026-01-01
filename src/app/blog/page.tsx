import { getBlogPosts, mapBlogPosts } from "@/lib/strapi";
import BlogListClientWrapper from "./BlogListClientWrapper";

export default async function BlogPage() {
  const rawPosts = await getBlogPosts();
  const blogPosts = mapBlogPosts(rawPosts);

  return <BlogListClientWrapper blogPosts={blogPosts} />;
}
