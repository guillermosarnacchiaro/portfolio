export const projects = [
  {
    name: 'WordWork',
    category: 'Proyecto principal',
    status: 'Aplicación full stack · UTN',
    description:
      'Plataforma de mensajería orientada a equipos de trabajo, con autenticación, conversaciones privadas, grupos y perfiles de usuario.',
    highlights: [
      'Registro, verificación y recuperación de cuenta',
      'Chats privados y grupos con roles',
      'Mensajes con estados de entrega y lectura',
      'Interfaz responsive con tema claro y oscuro',
    ],
    technologies: ['React 19', 'Express 5', 'MongoDB', 'JWT', 'Node.js'],
    proofPoints: ['Arquitectura en capas', 'Frontend + Backend', 'Desplegado'],
    demoUrl: 'https://wordwork-frontend.vercel.app/',
    frontendUrl: 'https://github.com/guillermosarnacchiaro/WordWork-frontend',
    backendUrl: 'https://github.com/guillermosarnacchiaro/WordWork-backend',
  },
  {
    name: 'LUMA',
    category: 'E-commerce',
    status: 'Frontend · Proyecto reciente',
    description:
      'Tienda editorial de indumentaria con una experiencia de compra completa, desde la exploración del catálogo hasta la gestión del carrito.',
    highlights: [
      'Catálogo con búsqueda, filtros y ordenamiento',
      'Detalle de producto con talles y colores',
      'Favoritos y carrito persistentes',
      'Interfaz responsive para todos los dispositivos',
    ],
    technologies: ['React 19', 'Vite', 'JavaScript', 'CSS', 'LocalStorage'],
    proofPoints: ['Diseño responsive', 'Estado persistente', 'UX de e-commerce'],
    demoUrl: 'https://ecommerce-base-self.vercel.app/',
    frontendUrl: 'https://github.com/guillermosarnacchiaro/ecommerce-base',
  },
]
