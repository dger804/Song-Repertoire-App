# Skill Aprendida: CRUD Inicial De Categorias

## Nombre de la skill

Implementar el primer CRUD NestJS con DTOs, validacion global y Mongoose.

## Cuando se aplica

Cuando la API ya tiene conexion a MongoDB Atlas, schemas Mongoose y se necesita exponer el primer recurso del MVP.

## Que problema resuelve

Establece el patron de controller, service, DTOs y validacion antes de repetirlo para canciones y repertorios.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Instalar `class-validator` y `class-transformer`.
3. Activar `ValidationPipe` global con whitelist.
4. Crear DTOs de creacion y actualizacion.
5. Crear servicio de categorias con Mongoose.
6. Crear controller REST de categorias.
7. Validar IDs de MongoDB antes de consultar.
8. Documentar endpoints actuales.
9. Ejecutar `pnpm build:api` y `pnpm build`.
10. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd --filter @song-repertoire/api add class-validator class-transformer
pnpm.cmd build:api
pnpm.cmd build
```

## Endpoints agregados

```text
GET    /categories
GET    /categories/:id
POST   /categories
PATCH  /categories/:id
DELETE /categories/:id
```

## Archivos modificados

- `apps/api/package.json`
- `apps/api/src/main.ts`
- `apps/api/src/categories/`
- `apps/api/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/codex-skills/etapa-10-crud-categorias.md`
- `README.md`
- `pnpm-lock.yaml`

## Errores comunes

- Exponer endpoints de escritura sin DTOs.
- Aceptar campos extra por no usar whitelist.
- No validar `ObjectId` antes de consultar.
- Confundir CRUD inicial con autorizacion implementada.
- Probar contra Atlas con credenciales reales en logs.

## Checklist de validacion

- [ ] `pnpm build:api` termina correctamente.
- [ ] `pnpm build` termina correctamente.
- [ ] DTOs rechazan campos no permitidos.
- [ ] IDs invalidos devuelven error antes de consultar.
- [ ] No se agregaron secretos.

## Riesgos de seguridad

- Los endpoints aun no tienen autenticacion ni autorizacion.
- Cualquier prueba local con Atlas debe usar datos de desarrollo.
- El futuro control de permisos debe vivir en backend, no solo en UI.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes exponer un CRUD pequeño con DTOs, validacion global y Mongoose, dejando claro el limite de seguridad actual.
