// Project data structure
export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  height?: number;
}

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailHeight: number;
  media: ProjectMedia[];
  description?: string;
  services?: string[];
  year?: string;
  credits?: {
    role: string;
    name: string;
  }[];
}

// Sample projects data
export const projects: Project[] = [
  {
    id: 'pandilla',
    title: 'The Power of La Pandilla',
    thumbnail: 'https://images.unsplash.com/photo-1709962228270-d5b87fb9bc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhbmRpbGxhJTIwcG93ZXIlMjBncm91cHxlbnwxfHx8fDE3NjU2NDM0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    thumbnailHeight: 250,
    description: 'Una campaña visual que celebra la fuerza de la comunidad latina y el poder transformador de la colaboración. Este proyecto explora la identidad cultural a través de colores vibrantes, tipografía bold y composiciones dinámicas que capturan la energía y pasión de nuestra gente.',
    services: ['Branding', 'Art Direction', 'Graphic Design', 'Social Media'],
    year: '2024',
    credits: [
      { role: 'Creative Director', name: 'María González' },
      { role: 'Art Director', name: 'Carlos Mendoza' },
      { role: 'Photographer', name: 'Ana Torres' },
      { role: 'Designer', name: 'Diego Ramírez' }
    ],
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1709962228270-d5b87fb9bc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhbmRpbGxhJTIwcG93ZXIlMjBncm91cHxlbnwxfHx8fDE3NjU2NDM0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', height: 816 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1709962228270-d5b87fb9bc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhbmRpbGxhJTIwcG93ZXIlMjBncm91cHxlbnwxfHx8fDE3NjU2NDM0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', height: 800 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1709962228270-d5b87fb9bc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhbmRpbGxhJTIwcG93ZXIlMjBncm91cHxlbnwxfHx8fDE3NjU2NDM0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', height: 816 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1709962228270-d5b87fb9bc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhbmRpbGxhJTIwcG93ZXIlMjBncm91cHxlbnwxfHx8fDE3NjU2NDM0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', height: 800 },
    ]
  },
  {
    id: 'branding-moderno',
    title: 'Branding Moderno',
    thumbnail: 'https://images.unsplash.com/photo-1760787545864-b468b6fe2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1NzUzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 360,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1760787545864-b468b6fe2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1NzUzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 720 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2NTYyOTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080', height: 800 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1762525984790-7349708a8894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc2NTU2MTY4NXww&ixlib=rb-4.1.0&q=80&w=1080', height: 650 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1662504510821-ae7577ad13dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcmludCUyMGRlc2lnbnxlbnwxfHx8fDE3NjU2Mjk5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 900 },
    ]
  },
  {
    id: 'packaging-creativo',
    title: 'Packaging Creativo',
    thumbnail: 'https://images.unsplash.com/photo-1748765968965-7e18d4f7192b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBhY2thZ2luZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1NTQyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 550,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1748765968965-7e18d4f7192b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBhY2thZ2luZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1NTQyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 800 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1682078234868-412ec5566118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzY1NTMwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 750 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1650793450119-3d608d0a9532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBwcm9kdWN0JTIwc2hvdHxlbnwxfHx8fDE3NjU2Mjk5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 900 },
    ]
  },
  {
    id: 'arte-digital',
    title: 'Arte Digital',
    thumbnail: 'https://images.unsplash.com/photo-1734725271662-6b9657ac54f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTU5NTAzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 360,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1734725271662-6b9657ac54f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTU5NTAzMXww&ixlib=rb-4.1.0&q=80&w=1080', height: 820 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NTYyMjUxMXww&ixlib=rb-4.1.0&q=80&w=1080', height: 750 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1759185423800-78e12803fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwZGVzaWduJTIwY29uY2VwdHxlbnwxfHx8fDE3NjU2Mjk5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 680 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1749456610797-8a1d4ecf6cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGNvbXBvc2l0aW9uJTIwZmxhdHxlbnwxfHx8fDE3NjU2Mjk5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 800 },
    ]
  },
  {
    id: 'poster-minimalista',
    title: 'Poster Minimalista',
    thumbnail: 'https://images.unsplash.com/photo-1621004805829-94ac33d1cd91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcG9zdGVyJTIwZGVzaWdufGVufDF8fHx8MTc2NTYxNjUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 550,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1621004805829-94ac33d1cd91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcG9zdGVyJTIwZGVzaWdufGVufDF8fHx8MTc2NTYxNjUwMHww&ixlib=rb-4.1.0&q=80&w=1080', height: 900 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1643649215570-6f61cddc3acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY1NTE4NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 720 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1744055858656-1d5a2de3f476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHR5cG9ncmFwaHl8ZW58MXx8fHwxNzY1NjI5OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080', height: 800 },
    ]
  },
  {
    id: 'estudio-grafico',
    title: 'Estudio Gráfico',
    thumbnail: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc2NTYyODYyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 250,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc2NTYyODYyMHww&ixlib=rb-4.1.0&q=80&w=1080', height: 650 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1NTY1NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 750 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1741466071751-c62474d2d3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NjU1OTAwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 850 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1765372860684-69f0e2524694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwc2V0dXB8ZW58MXx8fHwxNzY1NjI5OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080', height: 700 },
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design',
    thumbnail: 'https://images.unsplash.com/photo-1750056393306-ac672d0dbb8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY1NTk3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 550,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1750056393306-ac672d0dbb8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY1NTk3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 800 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1MjAzODV8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 720 },
    ]
  },
  {
    id: 'arquitectura-moderna',
    title: 'Arquitectura Moderna',
    thumbnail: 'https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTUyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 360,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTUyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 900 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1MjAzODV8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 650 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NTU3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080', height: 750 },
    ]
  },
  {
    id: 'fotografia-editorial',
    title: 'Fotografía Editorial',
    thumbnail: 'https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY1NTY2OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 550,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY1NTY2OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 850 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1627661366103-c36ff442c800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBob3RvZ3JhcGh5JTIwcG9ydHJhaXRzfGVufDF8fHx8MTc2NTYyOTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080', height: 720 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1765372860684-69f0e2524694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwc2V0dXB8ZW58MXx8fHwxNzY1NjI5OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080', height: 680 },
    ]
  },
  {
    id: 'oficina-creativa',
    title: 'Oficina Creativa',
    thumbnail: 'https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1Mzg2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 360,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1Mzg2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 750 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1741466071751-c62474d2d3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NjU1OTAwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 820 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1NTY1NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 700 },
    ]
  },
  {
    id: 'identidad-visual',
    title: 'Identidad Visual',
    thumbnail: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2NTYyOTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 250,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2NTYyOTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080', height: 650 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1760787545864-b468b6fe2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1NzUzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 800 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1762525984790-7349708a8894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc2NTU2MTY4NXww&ixlib=rb-4.1.0&q=80&w=1080', height: 720 },
    ]
  },
  {
    id: 'tipografia-color',
    title: 'Tipografía Color',
    thumbnail: 'https://images.unsplash.com/photo-1744055858656-1d5a2de3f476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHR5cG9ncmFwaHl8ZW58MXx8fHwxNzY1NjI5OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 360,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1744055858656-1d5a2de3f476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHR5cG9ncmFwaHl8ZW58MXx8fHwxNzY1NjI5OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080', height: 750 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1621004805829-94ac33d1cd91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcG9zdGVyJTIwZGVzaWdufGVufDF8fHx8MTc2NTYxNjUwMHww&ixlib=rb-4.1.0&q=80&w=1080', height: 850 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1662504510821-ae7577ad13dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcmludCUyMGRlc2lnbnxlbnwxfHx8fDE3NjU2Mjk5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 680 },
    ]
  },
  {
    id: 'proyecto-experimental',
    title: 'Proyecto Experimental',
    thumbnail: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NTYyMjUxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 550,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NTYyMjUxMXww&ixlib=rb-4.1.0&q=80&w=1080', height: 800 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1759185423800-78e12803fe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwZGVzaWduJTIwY29uY2VwdHxlbnwxfHx8fDE3NjU2Mjk5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 720 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1749456610797-8a1d4ecf6cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGNvbXBvc2l0aW9uJTIwZmxhdHxlbnwxfHx8fDE3NjU2Mjk5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 900 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1734725271662-6b9657ac54f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTU5NTAzMXww&ixlib=rb-4.1.0&q=80&w=1080', height: 750 },
    ]
  },
  {
    id: 'galeria-arte',
    title: 'Galería Arte',
    thumbnail: 'https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NTU3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 360,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NTU3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080', height: 680 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1MjAzODV8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 750 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTUyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 820 },
    ]
  },
  {
    id: 'proyecto-vanguardia',
    title: 'Proyecto Vanguardia',
    thumbnail: 'https://images.unsplash.com/photo-1643649215570-6f61cddc3acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY1NTE4NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHeight: 550,
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1643649215570-6f61cddc3acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY1NTE4NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 700 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1650793450119-3d608d0a9532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBwcm9kdWN0JTIwc2hvdHxlbnwxfHx8fDE3NjU2Mjk5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', height: 850 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1627661366103-c36ff442c800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBob3RvZ3JhcGh5JTIwcG9ydHJhaXRzfGVufDF8fHx8MTc2NTYyOTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080', height: 680 },
      { type: 'image', src: 'https://images.unsplash.com/photo-1682078234868-412ec5566118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzY1NTMwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080', height: 800 },
    ]
  },
];