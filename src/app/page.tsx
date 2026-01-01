import PortfolioGrid from "@/components/PortfolioGrid";
import {
  getProjects,
  getStrapiURL,
  type StrapiEntity,
  type StrapiProjectAttributes,
} from "@/lib/strapi";

export default async function Home() {
  // 1. Pedimos los datos frescos a Strapi
  const strapiData = await getProjects();

  // 2. Preparamos los datos para la grilla
  const projects = strapiData.map(
    (item: StrapiEntity<StrapiProjectAttributes>) => {
      const attr = item.attributes || item;
      const featuredUrl = attr.featuredImage?.url;
      const coverData = attr.cover?.data || attr.cover;
      const coverUrl =
        (coverData as { attributes?: { url?: string }; url?: string })
          ?.attributes?.url || (coverData as { url?: string })?.url;

      const finalImageUrl = featuredUrl || coverUrl;
      const imageToShow = finalImageUrl ? getStrapiURL(finalImageUrl) : null;

      return {
        id: attr.slug || String(item.id),
        slug: attr.slug || String(item.id),
        title: attr.title || "Proyecto",
        category: attr.client || "Diseño",
        image: imageToShow,
      };
    },
  );

  return (
    <main>
      {/* Ya no pasamos 'onProjectClick' porque PortfolioGrid debe usar <Link> o su propio router */}
      <PortfolioGrid projects={projects} />
    </main>
  );
}
