# Skill Aprendida: CRUD Inicial De Repertorios

## Nombre de la skill

Implementar CRUD de repertorios con canciones ordenadas.

## Cuando se aplica

Cuando ya existen CRUD de categorias y canciones, y el MVP necesita agrupar canciones en repertorios con orden de interpretacion.

## Que problema resuelve

Permite crear, consultar, actualizar y eliminar repertorios que contienen referencias a canciones y un orden numerico para cada una.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Crear DTO para item de cancion en repertorio.
3. Crear DTOs de creacion y actualizacion de repertorio.
4. Crear `RepertoiresService`.
5. Crear `RepertoiresController`.
6. Validar IDs de repertorio y canciones como `ObjectId`.
7. Registrar controller y service en `RepertoiresModule`.
8. Documentar endpoints y prueba local.
9. Ejecutar `pnpm build:api` y `pnpm build`.
10. Crear commit pequeno y hacer push si el hito funciona.

## Endpoints agregados

```text
GET    /repertoires
GET    /repertoires/:id
POST   /repertoires
PATCH  /repertoires/:id
DELETE /repertoires/:id
```

## Archivos modificados

- `apps/api/src/repertoires/`
- `apps/api/README.md`
- `docs/playbooks/local-api-verification.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/codex-skills/etapa-12-crud-repertorios.md`
- `README.md`

## Errores comunes

- Permitir canciones sin `order`.
- Aceptar IDs de cancion no validos.
- Confundir orden visual con orden persistido.
- Probar con datos de produccion.

## Checklist de validacion

- [ ] `pnpm build:api` termina correctamente.
- [ ] `pnpm build` termina correctamente.
- [ ] `POST /repertoires` acepta nombre y canciones ordenadas.
- [ ] `GET /repertoires` lista repertorios.
- [ ] No se agregaron secretos.

## Riesgos de seguridad

- Los endpoints aun no tienen autenticacion ni autorizacion.
- El backend debe validar permisos antes de usar datos reales.
- El primer flujo de usuarios/roles aun no protege estos endpoints.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes crear un recurso compuesto con subdocumentos validados y mantener el patron REST del MVP.
