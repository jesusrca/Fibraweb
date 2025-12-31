import { getProjects, getStrapiURL } from "@/lib/strapi";
import ProjectClientWrapper from "./ProjectClientWrapper";

type RichTextNode = {
  type?: string;
  text?: string;
  children?: RichTextNode[];
};

function extractText(value: unknown): string | null {
  if (typeof value === "string") return value;
  if (!value) return null;
  if (Array.isArray(value)) {
    return value
      .map((node) => extractText(node))
      .filter(Boolean)
      .join(" ");
  }
  if (typeof value === "object") {
    const node = value as RichTextNode;
    if (node.text) return node.text;
    if (node.children) return extractText(node.children);
  }
  return null;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // 1. Obtenemos los datos crudos
  const strapiData = await getProjects();

  // 2. Mapeamos los datos (Adaptado para Strapi 5)
  const cleanProjects = strapiData.map((item: any) => {
    // NOTA: En Strapi 5, a veces los datos vienen directos en 'item' y no en 'item.attributes'
    // Esta línea intenta leer 'attributes' por si acaso, si no, usa 'item' directo.
    const attr = item.attributes || item;

    // --- Lógica de Imágenes (Strapi 5 suele simplificar esto también) ---
    // A veces la imagen viene en attr.cover.url directamente o dentro de data.
    // Usamos encadenamiento opcional (?.) para atrapar cualquiera de los casos.
    
    const coverData = attr.cover?.data || attr.cover;
    const coverUrl = coverData?.attributes?.url || coverData?.url;
    
    const coverImage = coverUrl ? getStrapiURL(coverUrl) : null;

    // --- Lógica de Galería ---
    const galleryData = attr.gallery?.data || attr.gallery;
    // Si es un array, lo mapeamos
    const galleryImages = Array.isArray(galleryData)
      ? galleryData.map((img: any) => {
          const imgUrl = img.attributes?.url || img.url;
          return imgUrl ? getStrapiURL(imgUrl) : "";
        }).filter(Boolean) // Quitamos strings vacíos
      : [];

    // --- Construcción del objeto Media para tu componente ---
    const media =
      galleryImages.length > 0
        ? galleryImages.map((src: string) => ({ type: "image" as const, src }))
        : coverImage
          ? [{ type: "image" as const, src: coverImage }]
          : [];

    return {
      // Usamos el slug como ID principal para la navegación
      id: attr.slug || String(item.id), 
      slug: attr.slug || String(item.id),
      title: attr.title || "Proyecto sin título",
      description: extractText(attr.description),
      services: Array.isArray(attr.services)
        ? attr.services.map((service: any) =>
            typeof service === "string" ? service : service?.name || "",
          ).filter(Boolean)
        : null,
      year: attr.year || null,
      credits: attr.credits || null,
      thumbnail: coverImage,
      media,
    };
  });

  return <ProjectClientWrapper allProjects={cleanProjects} currentSlug={id} />;
}
