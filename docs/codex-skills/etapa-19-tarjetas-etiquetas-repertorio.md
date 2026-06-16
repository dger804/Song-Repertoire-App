# Skill Aprendida: Tarjetas Y Etiquetas Internas De Repertorio

## Nombre de la skill

Convertir repertorios y canciones hacia tarjetas y agregar etiquetas internas a repertorios.

## Cuando se aplica

Cuando la app ya tiene CRUD de canciones/repertorios y necesita una base visual y de datos para drag and drop y organizacion interna.

## Que problema resuelve

Permite organizar un repertorio sin crear categorias globales artificiales:

- repertorios y canciones se presentan como tarjetas;
- cada repertorio puede tener etiquetas internas;
- cada cancion dentro del repertorio puede tener una o varias etiquetas;
- las etiquetas viajan con el repertorio en la API;
- el modelo queda listo para drag and drop en un hito posterior.

## Procedimiento paso a paso

1. Confirmar que el arbol de Git este limpio.
2. Agregar subdocumentos `tags` al schema de repertorios.
3. Agregar `tagIds` a cada cancion dentro de repertorio.
4. Validar DTOs de etiquetas y canciones etiquetadas.
5. Mantener `Song` sin cambios.
6. Agregar UI para crear/quitar etiquetas internas.
7. Agregar UI para asignar etiquetas a canciones seleccionadas.
8. Mostrar chips de etiquetas en tarjetas.
9. Validar `pnpm build`.
10. Probar creacion, edicion y limpieza de datos temporales.
11. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd build
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `/app` carga con `Atlas conectado`.
- Se creo una cancion temporal.
- Se creo una etiqueta interna dentro de un repertorio temporal.
- Se asigno la etiqueta interna a la cancion seleccionada.
- Se guardo y reabrio el repertorio con la etiqueta persistida.
- La tarjeta de repertorio mostro el chip de etiqueta y conteo.
- La prueba responsive movil no muestra overflow horizontal ni controles desbordados.
- Se eliminaron los datos temporales.

## Archivos modificados

- `apps/api/src/repertoires/`
- `apps/web/src/pages/app.astro`
- `packages/shared/src/index.ts`
- `apps/api/README.md`
- `apps/web/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/decisions/ADR-0007-card-ui-and-pragmatic-dnd-path.md`
- `docs/codex-skills/etapa-19-tarjetas-etiquetas-repertorio.md`
- `README.md`

## Checklist de validacion

- [x] `pnpm build` termina correctamente.
- [x] `/app` carga con `Atlas conectado`.
- [x] Se puede crear etiqueta interna en un repertorio.
- [x] Se puede asignar etiqueta interna a una cancion seleccionada.
- [x] Se puede guardar y reabrir el repertorio con etiquetas.
- [x] La tarjeta de repertorio muestra chips de etiquetas.
- [x] Se pueden eliminar los datos temporales.
- [x] No se agregaron campos de acordes a `Song`.
