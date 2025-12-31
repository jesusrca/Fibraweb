export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: BlogContent[];
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface BlogContent {
  type: 'paragraph' | 'heading' | 'image' | 'quote' | 'list';
  content: string | string[];
  caption?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'futuro-diseno-digital',
    title: 'El Futuro del Diseño Digital',
    excerpt: 'Exploramos las tendencias emergentes que están redefiniendo la manera en que diseñamos experiencias digitales en 2025.',
    coverImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1600&h=900&fit=crop',
    author: {
      name: 'María García',
      role: 'Creative Director'
    },
    date: '14 Dec 2024',
    readTime: '5 min',
    category: 'Design',
    tags: ['Design', 'Trends', 'Digital'],
    content: [
      {
        type: 'paragraph',
        content: 'El diseño digital ha evolucionado exponencialmente en los últimos años. Lo que antes era considerado vanguardista, ahora es el estándar. En este artículo, exploramos las tendencias que están moldeando el futuro de nuestro trabajo.'
      },
      {
        type: 'heading',
        content: 'Minimalismo con Propósito'
      },
      {
        type: 'paragraph',
        content: 'El minimalismo ya no se trata solo de eliminar elementos, sino de mantener únicamente lo esencial. Cada elemento debe tener un propósito claro y contribuir a la experiencia del usuario de manera significativa.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&h=900&fit=crop',
        caption: 'Diseño minimalista con propósito'
      },
      {
        type: 'heading',
        content: 'Animaciones Sutiles y Significativas'
      },
      {
        type: 'paragraph',
        content: 'Las microinteracciones y animaciones ya no son solo decorativas. Guían al usuario, proporcionan feedback y crean una experiencia fluida y natural que se siente casi tangible.'
      },
      {
        type: 'quote',
        content: 'El diseño no es solo cómo se ve o cómo se siente. El diseño es cómo funciona.'
      },
      {
        type: 'heading',
        content: 'Tipografía como Protagonista'
      },
      {
        type: 'paragraph',
        content: 'La tipografía está tomando un rol protagónico. Fuentes grandes, atrevidas y expresivas están reemplazando las imágenes como elemento principal de comunicación visual.'
      },
      {
        type: 'list',
        content: [
          'Tipografías custom y variables',
          'Jerarquías visuales claras',
          'Spacing generoso para mejor legibilidad',
          'Contraste dramático entre tamaños'
        ]
      },
      {
        type: 'paragraph',
        content: 'El futuro del diseño digital es emocionante. Nos espera un camino lleno de innovación, donde la tecnología y la creatividad se unen para crear experiencias que realmente importen.'
      }
    ]
  },
  {
    id: 'branding-era-digital',
    title: 'Branding en la Era Digital',
    excerpt: 'Cómo construir una identidad de marca sólida y coherente en un mundo cada vez más digital y fragmentado.',
    coverImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1600&h=900&fit=crop',
    author: {
      name: 'Carlos Mendoza',
      role: 'Brand Strategist'
    },
    date: '10 Dec 2024',
    readTime: '7 min',
    category: 'Branding',
    tags: ['Branding', 'Strategy', 'Identity'],
    content: [
      {
        type: 'paragraph',
        content: 'En un mundo digital donde la atención es el recurso más valioso, construir una marca memorable es más importante que nunca. La consistencia, autenticidad y diferenciación son clave.'
      },
      {
        type: 'heading',
        content: 'La Importancia de la Consistencia'
      },
      {
        type: 'paragraph',
        content: 'Una marca fuerte mantiene su esencia a través de todos los puntos de contacto. Desde el sitio web hasta las redes sociales, cada interacción debe reforzar la identidad de marca.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&h=900&fit=crop',
        caption: 'Consistencia visual en todos los canales'
      },
      {
        type: 'heading',
        content: 'Autenticidad ante Todo'
      },
      {
        type: 'paragraph',
        content: 'Los usuarios pueden detectar la falta de autenticidad a kilómetros de distancia. Las marcas que prosperan son aquellas que se mantienen fieles a sus valores y comunican con honestidad.'
      },
      {
        type: 'quote',
        content: 'Una marca no es lo que tú dices que es. Es lo que ellos dicen que es.'
      },
      {
        type: 'paragraph',
        content: 'El branding digital exitoso requiere una comprensión profunda de tu audiencia, una visión clara y la valentía de ser diferente.'
      }
    ]
  },
  {
    id: 'ux-centrado-usuario',
    title: 'UX Centrado en el Usuario',
    excerpt: 'Principios fundamentales para crear experiencias digitales que realmente resuelvan problemas y generen valor.',
    coverImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1600&h=900&fit=crop',
    author: {
      name: 'Ana López',
      role: 'UX Lead'
    },
    date: '5 Dec 2024',
    readTime: '6 min',
    category: 'UX/UI',
    tags: ['UX', 'User Research', 'Design Thinking'],
    content: [
      {
        type: 'paragraph',
        content: 'El diseño centrado en el usuario no es solo una metodología, es una filosofía. Requiere empatía, investigación y la humildad de aceptar que no siempre sabemos qué es mejor para nuestros usuarios.'
      },
      {
        type: 'heading',
        content: 'Investigación es Fundamental'
      },
      {
        type: 'paragraph',
        content: 'No puedes diseñar soluciones efectivas sin entender profundamente a tus usuarios. La investigación cualitativa y cuantitativa debe guiar cada decisión de diseño.'
      },
      {
        type: 'list',
        content: [
          'Entrevistas en profundidad con usuarios',
          'Testing de usabilidad continuo',
          'Análisis de métricas y comportamiento',
          'Mapeo de journey del usuario'
        ]
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&h=900&fit=crop',
        caption: 'El proceso de diseño centrado en el usuario'
      },
      {
        type: 'heading',
        content: 'Iterar, Iterar, Iterar'
      },
      {
        type: 'paragraph',
        content: 'El mejor diseño emerge a través de la iteración constante. Cada versión nos acerca más a la solución óptima, basándonos en feedback real de usuarios reales.'
      },
      {
        type: 'quote',
        content: 'Si no te avergüenzas de la primera versión de tu producto, lo lanzaste demasiado tarde.'
      },
      {
        type: 'paragraph',
        content: 'Crear experiencias excepcionales requiere dedicación, paciencia y un compromiso genuino con resolver los problemas de las personas.'
      }
    ]
  },
  {
    id: 'animaciones-web-modernas',
    title: 'Animaciones Web Modernas',
    excerpt: 'Guía completa sobre cómo implementar animaciones suaves y performantes que eleven la experiencia del usuario.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=900&fit=crop',
    author: {
      name: 'Diego Ruiz',
      role: 'Frontend Developer'
    },
    date: '1 Dec 2024',
    readTime: '8 min',
    category: 'Development',
    tags: ['Animation', 'Performance', 'Frontend'],
    content: [
      {
        type: 'paragraph',
        content: 'Las animaciones web han evolucionado de simples efectos decorativos a herramientas esenciales para la comunicación y la experiencia del usuario. Pero con gran poder viene gran responsabilidad.'
      },
      {
        type: 'heading',
        content: 'Performance es Prioritario'
      },
      {
        type: 'paragraph',
        content: 'Una animación hermosa que causa lag es peor que no tener animación. Debemos optimizar para 60fps en todos los dispositivos, utilizando transforms y opacity en lugar de propiedades que causan reflow.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop',
        caption: 'Código optimizado para animaciones performantes'
      },
      {
        type: 'heading',
        content: 'Propósito sobre Espectáculo'
      },
      {
        type: 'paragraph',
        content: 'Cada animación debe tener un propósito claro: guiar la atención, proporcionar feedback, mantener contexto o deleitar al usuario. Las animaciones sin propósito solo distraen.'
      },
      {
        type: 'list',
        content: [
          'Transiciones suaves entre estados',
          'Microinteracciones que dan feedback',
          'Scroll animations que revelan contenido',
          'Loading states que mantienen engagement'
        ]
      },
      {
        type: 'quote',
        content: 'La mejor animación es aquella que se siente natural, casi invisible.'
      },
      {
        type: 'paragraph',
        content: 'Dominar las animaciones web requiere práctica, pero el resultado vale la pena: experiencias que se sienten vivas y responden a cada interacción del usuario.'
      }
    ]
  }
];
