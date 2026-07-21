# Arquitectura

```text
src/
├── assets/              Recursos estáticos importados por la aplicación
│   ├── icons/
│   └── images/
├── components/
│   ├── layout/          Estructura global: navegación y pie
│   ├── sections/        Secciones de la página principal
│   └── ui/              Primitivas visuales reutilizables
├── context/             Estado global cuando resulte necesario
├── hooks/               Hooks reutilizables
├── pages/               Composición de rutas, sin lógica visual duplicada
├── styles/              Tokens y estilos globales futuros
└── utils/               Funciones puras y utilidades
```

## Reglas

- `App.jsx` define rutas; no contiene las secciones del portafolio.
- Las páginas componen secciones y layouts.
- Las secciones contienen narrativa propia y combinan componentes UI.
- Los componentes UI no conocen el contenido del portafolio.
- Los datos repetibles de proyectos, habilidades y experiencia se extraerán a archivos de datos cuando se defina el contenido real.
- Contextos, hooks y utilidades se incorporarán solo cuando exista un caso de uso; no se crearán abstracciones vacías.
