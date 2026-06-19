# Skill Aprendida: Limpieza De Referencias Al Eliminar

## Nombre de la skill

Mantener integridad referencial basica al borrar categorias y canciones.

## Cuando se aplica

Cuando el MVP usa documentos MongoDB relacionados por ids y aun no tiene transacciones, eventos de dominio ni versionado de cambios.

## Que problema resuelve

Evita referencias huerfanas que confunden la UI:

- una categoria eliminada deja de aparecer en `categoryIds` de canciones;
- una cancion eliminada deja de aparecer dentro de repertorios;
- la UI actualiza su estado local sin esperar un refresh completo;
- la vista de repertorio no conserva canciones borradas.

## Procedimiento paso a paso

1. Registrar el modelo dependiente en el modulo que ejecuta el borrado.
2. Inyectar el modelo dependiente en el service.
3. Reutilizar el mismo `ObjectId` parseado para borrar y limpiar referencias.
4. En `DELETE /categories/:id`, hacer `$pull` del id en `songs.categoryIds`.
5. En `DELETE /songs/:id`, hacer `$pull` del id en `repertoires.songs`.
6. Actualizar el estado local del frontend al borrar una cancion.
7. Mantener la respuesta del endpoint compatible con `{ deleted: true, id }`.
8. Documentar la regla como integridad basica, no como transaccion completa.
9. Validar build, pruebas disponibles y API real con datos temporales.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Borrar una categoria temporal la retira de una cancion temporal.
- Borrar una cancion temporal la retira de un repertorio temporal.
- El frontend elimina la cancion borrada de los repertorios en memoria.
- Se levanto una API temporal contra Atlas en un puerto alterno.
- La prueba creo y limpio categoria, cancion y repertorio temporales.

## Archivos modificados

- `apps/api/src/categories/`
- `apps/api/src/songs/`
- `apps/web/src/pages/app.astro`
- `apps/api/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/codex-skills/etapa-25-limpieza-referencias-eliminar.md`
- `README.md`

## Checklist de validacion

- [x] `DELETE /categories/:id` limpia `songs.categoryIds`.
- [x] `DELETE /songs/:id` limpia `repertoires.songs`.
- [x] La respuesta publica de los deletes sigue siendo compatible.
- [x] El frontend no mantiene canciones borradas dentro de repertorios locales.
- [x] La documentacion explica que no son transacciones completas.
