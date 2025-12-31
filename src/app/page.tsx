import PortfolioGrid from "@/components/PortfolioGrid";
import { getProjects, getStrapiURL } from "@/lib/strapi";

export default async function Home() {
  // 1. Pedimos los datos frescos a Strapi
  const strapiData = await getProjects();

  // 2. Preparamos los datos para la grilla
  const projects = strapiData.map((item: any) => {
    
    // --- Lógica de Imagen Destacada vs Portada ---
    // Si subiste una 'featuredImage', usamos esa. Si no, usamos 'cover'.
    const featuredUrl = item.featuredImage?.url;
    const coverUrl = item.cover?.url;
    
    const finalImageUrl = featuredUrl || coverUrl;

    // Convertimos la URL relativa (/uploads/...) a absoluta (http://localhost...)
    const imageToShow = finalImageUrl ? getStrapiURL(finalImageUrl) : null;

    return {
      id: item.slug || String(item.id),
      slug: item.slug,
      title: item.title,
      // Si tienes un campo de cliente úsalo, si no, texto fijo
      category: item.client || "Diseño", 
      image: imageToShow, 
    };
  });

  return (
    <main>
      {/* Ya no pasamos 'onProjectClick' porque PortfolioGrid debe usar <Link> o su propio router */}
      <PortfolioGrid projects={projects} />
    </main>
  );
}