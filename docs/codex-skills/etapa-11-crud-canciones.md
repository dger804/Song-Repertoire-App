# Skill Aprendida: CRUD Inicial De Canciones

## Nombre de la skill

Implementar CRUD de canciones con DTOs, validacion y referencias a categorias.

## Cuando se aplica

Cuando el CRUD de categorias ya define el patron de controller, service y DTOs, y el MVP necesita administrar canciones.

## Que problema resuelve

Permite crear, consultar, actualizar y eliminar canciones, incluyendo letra y categorias asociadas mediante IDs de MongoDB.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Crear DTOs de creacion y actualizacion.
3. Crear `SongsService`.
4. Crear `SongsController`.
5. Validar IDs de canciones y categorias como `ObjectId`.
6. Registrar controller y service en `SongsModule`.
7. Documentar endpoints y verificacion local.
8. Ejecutar `pnpm build:api` y `pnpm build`.
9. Crear commit pequeno.
10. Hacer push si el hito funciona.

## Endpoints agregados

```text
GET    /songs
GET    /songs/:id
POST   /songs
PATCH  /songs/:id
DELETE /songs/:id
```

## Archivos modificados

- `apps/api/src/songs/`
- `apps/api/README.md`
- `docs/playbooks/local-api-verification.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/codex-skills/etapa-11-crud-canciones.md`
- `README.md`

## Errores comunes

- Permitir `categoryIds` sin validar `ObjectId`.
- Omitir limite de longitud para letras.
- Repetir IDs de categoria en una cancion.
- Probar contra Atlas con datos de produccion.

## Checklist de validacion

- [ ] `pnpm build:api` termina correctamente.
- [ ] `pnpm build` termina correctamente.
- [ ] `POST /songs` acepta titulo, letra y categorias.
- [ ] `GET /songs` lista canciones.
- [ ] No se agregaron secretos.

## Riesgos de seguridad

- Los endpoints aun no tienen autenticacion ni autorizacion.
- El backend debe aplicar permisos antes de usar la app con datos reales.
- La UI no debe considerarse una barrera de seguridad.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes repetir el patron CRUD con DTOs y referencias, manteniendo validacion y documentando pruebas locales contra Atlas.
