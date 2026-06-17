# ADR-0007: Tarjetas Primero Y Drag And Drop Despues

## Estado

Aprobado.

## Contexto

La aplicacion necesita evolucionar hacia una experiencia visual donde repertorios y canciones se manejen como tarjetas. Tambien se quiere usar `@atlaskit/pragmatic-drag-and-drop` para arrastrar canciones, reordenar repertorios y preparar interacciones mas naturales.

Pragmatic Drag and Drop puede usarse con vanilla TypeScript, por lo que encaja con Astro. Aun asi, instalar y conectar drag and drop antes de estabilizar la forma visual de las tarjetas puede mezclar demasiados cambios.

## Decision

Primero se implementa el modelo visual de tarjetas y las etiquetas internas de repertorio.

El primer hito de drag and drop se aplica al orden de canciones seleccionadas dentro de un repertorio, usando:

- `@atlaskit/pragmatic-drag-and-drop`
- `@atlaskit/pragmatic-drag-and-drop/element/adapter`
- `@atlaskit/pragmatic-drag-and-drop/reorder`

Las canciones se arrastran desde un asa visual dentro de la tarjeta seleccionada. La tarjeta completa funciona como drop target y los botones Subir/Bajar se mantienen como fallback.

## Consecuencias

- Las canciones seleccionadas ya pueden convertirse en elementos reordenables sin redisenar toda la vista.
- Las etiquetas internas ya existen antes de introducir agrupaciones o drop zones.
- El orden persistido sigue guardandose en `songs.order`.
- Queda una base concreta para arrastrar repertorios completos o agrupar canciones por etiquetas internas.

## Riesgos

- El hito futuro debe validar teclado, estados de arrastre avanzados y fallback para dispositivos tactiles.
- Drag and drop entre etiquetas internas requiere una decision de UX separada.
- Las pruebas automatizadas del navegador integrado pueden no disparar drag nativo HTML5; se debe complementar con prueba manual o una suite e2e dedicada cuando se agregue Playwright.
