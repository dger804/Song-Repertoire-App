# Skill Aprendida: Drag And Drop Inicial En Repertorio

## Nombre de la skill

Agregar reordenamiento con Pragmatic Drag and Drop a canciones seleccionadas dentro de un repertorio.

## Cuando se aplica

Cuando la app ya tiene tarjetas de canciones seleccionadas, orden persistido en `songs.order` y botones de fallback para mover canciones.

## Que problema resuelve

Permite ordenar visualmente canciones dentro de un repertorio sin depender solo de botones:

- cada cancion seleccionada se muestra como tarjeta;
- el asa visual de la tarjeta inicia el arrastre;
- la tarjeta completa funciona como destino;
- el orden local se recalcula con `reorder`;
- al guardar el repertorio, el backend persiste `songs.order`;
- los botones Subir/Bajar siguen disponibles como fallback.

## Procedimiento paso a paso

1. Instalar `@atlaskit/pragmatic-drag-and-drop` en `apps/web`.
2. Importar `draggable`, `dropTargetForElements`, `monitorForElements`, `combine` y `reorder`.
3. Crear una funcion de limpieza para desmontar listeners al re-renderizar la lista.
4. Registrar cada asa como elemento draggable.
5. Registrar cada tarjeta seleccionada como drop target.
6. En `monitorForElements.onDrop`, mover la cancion origen hacia la tarjeta destino.
7. Recalcular `order` desde 1 despues de cada reordenamiento.
8. Mantener los botones Subir/Bajar como fallback.
9. Validar build.
10. Probar creacion temporal de canciones, ordenamiento y persistencia por API.
11. Limpiar datos temporales.

## Comandos usados

```bash
pnpm.cmd --filter @song-repertoire/web add @atlaskit/pragmatic-drag-and-drop
pnpm.cmd build
```

## Verificacion realizada

- `pnpm build` termina correctamente con permisos fuera del sandbox.
- `/app` carga con `Atlas conectado`.
- Se crearon canciones temporales desde la UI.
- Se agregaron canciones temporales al repertorio abierto desde tarjetas.
- Se reordeno la seleccion con botones fallback.
- Se creo un repertorio temporal por API con orden `Coda`, `Alfa`, `Bravo`.
- El API devolvio el repertorio con `songs.order` igual a `1`, `2`, `3`.
- Se eliminaron repertorio y canciones temporales.

## Nota de prueba

El navegador integrado de Codex no disparo eventos nativos HTML5 con `cua.drag`, aunque los elementos quedaron registrados con `draggable=true`. Para una prueba automatizada completa de drag nativo, agregar una suite e2e dedicada con Playwright completo.

## Archivos modificados

- `apps/web/package.json`
- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/decisions/ADR-0007-card-ui-and-pragmatic-dnd-path.md`
- `docs/codex-skills/etapa-20-drag-drop-repertorio.md`
- `README.md`
- `pnpm-lock.yaml`

## Checklist de validacion

- [x] La dependencia queda registrada con pnpm.
- [x] La lista seleccionada desmonta listeners antes de re-renderizar.
- [x] El asa visual queda registrada como `draggable`.
- [x] La tarjeta seleccionada queda registrada como drop target.
- [x] El orden se recalcula desde 1.
- [x] Los botones Subir/Bajar siguen funcionando.
- [x] `pnpm build` termina correctamente.
- [x] La persistencia de `songs.order` se verifica contra el API.
