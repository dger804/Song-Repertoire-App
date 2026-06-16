# ADR-0007: Tarjetas Primero Y Drag And Drop Despues

## Estado

Aprobado.

## Contexto

La aplicacion necesita evolucionar hacia una experiencia visual donde repertorios y canciones se manejen como tarjetas. Tambien se quiere usar `@atlaskit/pragmatic-drag-and-drop` para arrastrar canciones, reordenar repertorios y preparar interacciones mas naturales.

Pragmatic Drag and Drop puede usarse con vanilla TypeScript, por lo que encaja con Astro. Aun asi, instalar y conectar drag and drop antes de estabilizar la forma visual de las tarjetas puede mezclar demasiados cambios.

## Decision

Primero se implementa el modelo visual de tarjetas y las etiquetas internas de repertorio.

El drag and drop queda como siguiente hito dedicado, usando:

- `@atlaskit/pragmatic-drag-and-drop`
- `@atlaskit/pragmatic-drag-and-drop/element/adapter`
- utilidades de reordenamiento del paquete cuando aplique

## Consecuencias

- Las tarjetas actuales pueden convertirse en elementos `draggable` sin redisenar toda la vista.
- Las etiquetas internas ya existen antes de introducir agrupaciones o drop zones.
- El hito de drag and drop podra enfocarse en interaccion, accesibilidad y persistencia de orden.

## Riesgos

- Las tarjetas aun no tienen drag and drop real.
- El hito futuro debe validar teclado, estados de arrastre y fallback para dispositivos tactiles.
- El orden persistido debe seguir guardandose en `songs.order`.
