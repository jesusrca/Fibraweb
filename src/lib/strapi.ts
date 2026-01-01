type StrapiImage = {
  data?: {
    attributes?: {
      url?: string;
    };
  };
};

type StrapiResponse<T> = {
  data: T[];
};

export type StrapiEntity<T> = T & {
  id: number;
  attributes?: T;
};

type StrapiProjectService = {
  name?: string;
};

type StrapiProjectCredit = {
  role?: string;
  name?: string;
};

export type StrapiProjectAttributes = {
  title?: string;
  slug?: string;
  description?: unknown;
  services?: StrapiProjectService[] | string[];
  year?: string;
  credits?: StrapiProjectCredit[];
  cover?: StrapiImage | { url?: string };
  gallery?: { data?: { attributes?: { url?: string } }[] } | Array<{ url?: string }>;
  featuredImage?: { url?: string };
  client?: string;
  thumbnailHeight?: number;
};

type BlogPostContentBlock = {
  __component?: string;
  content?: string;
  caption?: string;
  items?: string[];
  image?: StrapiImage;
};

export type StrapiBlogPostAttributes = {
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: StrapiImage | { url?: string };
  author?: { name?: string; role?: string };
  date?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  content?: BlogPostContentBlock[];
};

export function getStrapiURL(path = "") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const baseUrl = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!baseUrl) {
    throw new Error("STRAPI_URL or NEXT_PUBLIC_STRAPI_URL is not set");
  }
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function getProjects() {
  const url = getStrapiURL("/api/projects?populate=*");
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }
  const json = (await response.json()) as StrapiResponse<
    StrapiEntity<StrapiProjectAttributes>
  >;

  return json.data;
}

export async function getBlogPosts() {
  const url = getStrapiURL("/api/blog-posts");
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
  }
  const json = (await response.json()) as StrapiResponse<
    StrapiEntity<StrapiBlogPostAttributes>
  >;
  return json.data;
}

export function mapBlogPosts(
  rawPosts: Array<StrapiEntity<StrapiBlogPostAttributes>>,
) {
  return rawPosts.map((item) => {
    const attr = item.attributes || item;
    const coverData = attr.coverImage?.data || attr.coverImage;
    const coverUrl =
      (coverData as { attributes?: { url?: string }; url?: string })?.attributes
        ?.url || (coverData as { url?: string })?.url;

    const contentBlocks = Array.isArray(attr.content) ? attr.content : [];
    const content = contentBlocks
      .map((block: BlogPostContentBlock) => {
        const type = block.__component?.split(".")[1];
        if (!type) return null;
        if (type === "image") {
          const imageData = block.image?.data || block.image;
          const imageUrl =
            imageData?.attributes?.url || imageData?.url || "";
          if (!imageUrl) return null;
          return {
            type: "image" as const,
            content: getStrapiURL(imageUrl),
            caption: block.caption || "",
          };
        }
        if (type === "list") {
          return {
            type: "list" as const,
            content: block.items || [],
          };
        }
        if (type === "paragraph") {
          return {
            type: "paragraph" as const,
            content: block.content || "",
          };
        }
        if (type === "heading") {
          return {
            type: "heading" as const,
            content: block.content || "",
          };
        }
        if (type === "quote") {
          return {
            type: "quote" as const,
            content: block.content || "",
          };
        }
        return null;
      })
      .filter(Boolean);

    return {
      id: attr.slug || String(item.id),
      title: attr.title || "Blog",
      excerpt: attr.excerpt || "",
      coverImage: coverUrl ? getStrapiURL(coverUrl) : "",
      author: {
        name: attr.author?.name || "",
        role: attr.author?.role || "",
      },
      date: attr.date || "",
      readTime: attr.readTime || "",
      category: attr.category || "",
      tags: Array.isArray(attr.tags) ? attr.tags : [],
      content,
    };
  });
}
