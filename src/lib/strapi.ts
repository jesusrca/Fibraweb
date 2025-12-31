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

export function getStrapiURL(path = "") {
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
  const json = (await response.json()) as StrapiResponse<{
    id: number;
    attributes: {
      title?: string;
      slug?: string;
      description?: string;
      services?: string[];
      year?: string;
      credits?: { role: string; name: string }[];
      cover?: StrapiImage;
      gallery?: { data?: { attributes?: { url?: string } }[] };
    };
  }>;

  return json.data;
}
