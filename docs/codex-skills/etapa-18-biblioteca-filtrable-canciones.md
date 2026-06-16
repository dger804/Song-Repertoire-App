# Skill Aprendida: Biblioteca Filtrable De Canciones

## Nombre de la skill

Mejorar la biblioteca de canciones para encontrar y agregar canciones al repertorio abierto.

## Cuando se aplica

Cuando `/app` ya puede crear repertorios y canciones, pero la lista de canciones crece y necesita busqueda, filtros y estado visual.

## Que problema resuelve

Permite trabajar mas rapido dentro del constructor de repertorios:

- buscar canciones por titulo o letra;
- filtrar canciones por categoria;
- filtrar canciones disponibles;
- marcar canciones ya agregadas al repertorio abierto;
- mantener la cancion como letra simple en el MVP.

## Procedimiento paso a paso

1. Confirmar que el arbol de Git este limpio.
2. Agregar controles de busqueda y categoria en la seccion `Canciones`.
3. Mantener los filtros en estado local.
4. Derivar la lista visible desde canciones, categorias y seleccion actual.
5. Deshabilitar `Agregar` cuando la cancion ya esta en el repertorio.
6. Actualizar la biblioteca cuando cambia la seleccion del repertorio.
7. Documentar la decision de letra primero y acordes futuros.
8. Validar `pnpm build`.
9. Probar busqueda, filtro, disponibilidad y limpieza de datos temporales.
10. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd build
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `/app` carga con `Atlas conectado`.
- Se creo una categoria temporal.
- Se creo una cancion temporal con letra simple y categoria.
- Se creo un repertorio temporal con esa cancion.
- La busqueda encontro la cancion por texto dentro de la letra.
- El filtro de categoria encontro la cancion asociada.
- Al abrir el repertorio, la cancion quedo marcada como `Agregada`.
- `Solo disponibles` oculto la cancion ya agregada.
- La prueba responsive movil no muestra overflow horizontal ni controles desbordados.
- Se eliminaron repertorio, cancion y categoria temporales.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/decisions/ADR-0006-lyrics-first-song-model.md`
- `docs/codex-skills/etapa-18-biblioteca-filtrable-canciones.md`
- `README.md`

## Checklist de validacion

- [x] `pnpm build` termina correctamente.
- [x] `/app` carga con `Atlas conectado`.
- [x] La biblioteca filtra por titulo o letra.
- [x] La biblioteca filtra por categoria.
- [x] `Solo disponibles` oculta canciones ya agregadas.
- [x] La cancion ya agregada aparece marcada como `Agregada`.
- [x] No se agregaron campos de acordes.
- [x] No quedaron datos temporales.
