import { getBlogPosts, mapBlogPosts } from "@/lib/strapi";
import BlogPostClientWrapper from "./BlogPostClientWrapper";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const rawPosts = await getBlogPosts();
  const blogPosts = mapBlogPosts(rawPosts);
  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    return <div className="p-20 text-center">Post no encontrado</div>;
  }

  return <BlogPostClientWrapper blogPost={blogPost} />;
}
