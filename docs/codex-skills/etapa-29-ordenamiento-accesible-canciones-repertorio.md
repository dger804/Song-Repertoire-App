# Skill Aprendida: Ordenamiento Accesible De Canciones En Repertorio

## Nombre de la skill

Pulir el ordenamiento de canciones seleccionadas dentro de un repertorio.

## Cuando se aplica

Cuando el editor de repertorios ya permite seleccionar canciones y se necesita que el orden sea claro, usable y verificable antes de guardar.

## Que problema resuelve

Mejora el flujo de organizacion del repertorio:

- las canciones seleccionadas se renderizan como items de lista;
- cada tarjeta conserva numero de orden estable;
- el asa de arrastre usa `@atlaskit/pragmatic-drag-and-drop` con `dragHandle`;
- los botones Subir/Bajar quedan como fallback accesible;
- los limites de Subir/Bajar se deshabilitan cuando no aplican;
- los estados visuales de foco, arrastre y destino quedan mas claros;
- el listado no genera scroll horizontal en movil.

## Procedimiento paso a paso

1. Mantener el estado de canciones seleccionadas como fuente unica del orden.
2. Renderizar cada cancion seleccionada con `role="listitem"` y etiqueta accesible.
3. Registrar la tarjeta completa como `draggable` y el boton `::` como `dragHandle`.
4. Mantener `dropTargetForElements` en cada tarjeta.
5. Reusar `reorder()` para recalcular el arreglo y actualizar `order`.
6. Deshabilitar Subir/Bajar cuando la tarjeta esta al inicio o al final.
7. Limpiar clases de drag/drop al desmontar o terminar el gesto.
8. Validar build, pruebas disponibles y flujo en Browser.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Browser abrio `/app` en `http://localhost:4321/app/` y confirmo `Atlas conectado`.
- Browser agrego dos canciones al editor de repertorio.
- Browser confirmo `role="listitem"`, asa `BUTTON`, `is-dnd-ready` y limites deshabilitados en Subir/Bajar.
- Browser confirmo que Subir reordena las canciones y muestra feedback.
- Browser confirmo ancho movil de 390 px sin scroll horizontal.
- Browser no reporto errores de consola.
- El Browser interno no logro sintetizar un gesto nativo de drag para Atlaskit; se verifico la configuracion DOM y el fallback funcional por botones.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-29-ordenamiento-accesible-canciones-repertorio.md`
- `README.md`

## Checklist de validacion

- [x] Las canciones seleccionadas se exponen como lista accesible.
- [x] El asa de arrastre existe solo cuando hay mas de una cancion.
- [x] Subir/Bajar respetan limites de primera y ultima posicion.
- [x] El fallback por botones actualiza el orden.
- [x] La vista movil no genera scroll horizontal.
