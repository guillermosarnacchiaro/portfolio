# Sistema de diseño

## Concepto

Una interfaz sobria y precisa: simple por fuera, compleja por dentro. El 90 % de la experiencia utiliza tonos neutros; el azul identifica acciones principales y foco, mientras que violeta y celeste se reservan para detalles puntuales.

## Fundamentos

- Tipografía: Geist, pesos 400, 500, 600 y 700.
- Escala espacial: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96 y 128 px.
- Radios: tarjetas 24 px, botones 16 px, campos 14 px y badges redondos.
- Contenedor: máximo 1280 px; padding 20 px móvil, 24 px tablet y 32 px desktop.
- Transición estándar: 200 ms; tarjetas 250 ms.
- Grilla conceptual: 4 columnas móvil, 8 tablet y 12 desktop.

## Color

Los valores se encuentran en `src/styles/tokens.css`. Los componentes deben consumir únicamente tokens semánticos y nunca repetir códigos HEX.

El tema claro usa Slate y superficies blancas. El oscuro usa Zinc sin negro absoluto. Los estados mantienen los mismos valores en ambos temas para conservar significado.

## Tipografía responsiva

- Hero: `clamp(48px, 7vw, 72px)`, interlineado 1.05.
- H1: hasta 48 px.
- H2: hasta 36 px, interlineado 1.15.
- H3: hasta 28 px.
- Subtítulo: 20 px.
- Cuerpo: 16 px, interlineado 1.7.
- Texto pequeño: 14 px.
- Label: 12 px.

## Reglas de uso

- No incorporar decoración que no apoye jerarquía, comprensión o feedback.
- Todos los elementos interactivos requieren estados hover, focus-visible y disabled.
- El movimiento debe respetar `prefers-reduced-motion`.
- Las tarjetas solo se elevan 4 px en dispositivos que admiten hover.
- El contenido y la legibilidad tienen prioridad sobre efectos visuales.
