# Skill Aprendida: Schemas Mongoose Del Dominio MVP

## Nombre de la skill

Definir schemas Mongoose iniciales para usuarios, categorias, canciones y repertorios.

## Cuando se aplica

Cuando la API ya tiene conexion MongoDB configurada y necesita preparar persistencia antes de exponer endpoints CRUD.

## Que problema resuelve

Permite fijar la forma persistente del dominio y sus indices iniciales sin adelantar controladores, DTOs ni autorizacion.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Agregar `@song-repertoire/shared` como dependencia workspace de la API.
3. Crear schema `User` usando roles compartidos.
4. Crear schema `Category`.
5. Crear schema `Song` con referencias a categorias.
6. Crear schema `Repertoire` con subdocumentos ordenados.
7. Registrar schemas mediante modulos NestJS.
8. Importar los modulos en `AppModule`.
9. Ejecutar `pnpm build:api` y `pnpm build`.
10. Documentar que aun no hay CRUD ni autorizacion ejecutable.
11. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd --filter @song-repertoire/api add @song-repertoire/shared@workspace:*
pnpm.cmd build:api
pnpm.cmd build
```

## Archivos modificados

- `apps/api/package.json`
- `apps/api/src/app.module.ts`
- `apps/api/src/users/`
- `apps/api/src/categories/`
- `apps/api/src/songs/`
- `apps/api/src/repertoires/`
- `apps/api/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/codex-skills/etapa-09-schemas-mongoose-dominio.md`
- `README.md`
- `pnpm-lock.yaml`

## Errores comunes

- Exponer endpoints antes de tener DTOs y reglas de permisos.
- Duplicar roles en API en vez de importarlos de `packages/shared`.
- Guardar contrasenas o credenciales sin estrategia de autenticacion.
- Crear indices unicos sin pensar en normalizacion de nombres.

## Checklist de validacion

- [ ] `pnpm build:api` termina correctamente.
- [ ] `pnpm build` termina correctamente.
- [ ] `User` usa `USER_ROLES` desde shared.
- [ ] No hay endpoints CRUD prematuros.
- [ ] No se agregaron secretos ni archivos `.env`.

## Riesgos de seguridad

- Tratar los roles persistidos como autorizacion completa antes de implementar guards.
- Permitir asignacion masiva de campos sensibles en futuros DTOs.
- Crear usuarios reales antes de definir bootstrap del primer administrador.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes registrar schemas Mongoose para el dominio inicial, compilar la API y dejar claro que persistencia no equivale todavia a endpoints ni autorizacion.
