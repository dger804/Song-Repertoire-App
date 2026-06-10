# Skill Aprendida: Inicializacion De NestJS En Monorepo

## Nombre de la skill

Inicializar NestJS dentro de `apps/api` en un monorepo pnpm.

## Cuando se aplica

Cuando el proyecto ya tiene frontend inicializado y necesita un backend minimo, compilable y verificable antes de conectar base de datos o crear CRUD.

## Que problema resuelve

Permite crear una API NestJS funcional con un endpoint de salud, scripts reproducibles desde la raiz y CORS explicito sin adelantar decisiones de persistencia o autenticacion.

## Procedimiento paso a paso

1. Verificar que Git este limpio.
2. Crear `apps/api/package.json` con nombre de workspace.
3. Agregar scripts locales `dev`, `build` y `start`.
4. Crear configuracion TypeScript para compilar `src` hacia `dist`.
5. Crear `AppModule`.
6. Crear endpoint `GET /health`.
7. Configurar CORS usando `CORS_ORIGIN`.
8. Instalar dependencias con pnpm en `@song-repertoire/api`.
9. Ejecutar `pnpm build:api` y `pnpm build`.
10. Levantar la API compilada y verificar `GET /health`.
11. Actualizar README de la raiz y README de API.
12. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd --filter @song-repertoire/api add @nestjs/common @nestjs/core @nestjs/platform-express reflect-metadata rxjs
pnpm.cmd --filter @song-repertoire/api add -D @nestjs/cli typescript @types/node
pnpm.cmd build:api
pnpm.cmd build
```

## Archivos modificados

- `.gitignore`
- `package.json`
- `pnpm-lock.yaml`
- `apps/api/package.json`
- `apps/api/nest-cli.json`
- `apps/api/tsconfig.json`
- `apps/api/tsconfig.build.json`
- `apps/api/src/app.module.ts`
- `apps/api/src/health.controller.ts`
- `apps/api/src/main.ts`
- `apps/api/README.md`
- `README.md`
- `docs/codex-skills/etapa-05-inicializacion-nestjs.md`

## Errores comunes

- Instalar dependencias de API en el workspace equivocado.
- Dejar `PORT` sin validar.
- Configurar CORS como wildcard antes de definir seguridad.
- Usar un build que compila pero no deja un entrypoint estable.
- Conectar MongoDB antes de tener un health check basico.

## Checklist de validacion

- [ ] `apps/api/package.json` existe.
- [ ] NestJS esta instalado en el workspace de API.
- [ ] `pnpm build:api` termina correctamente.
- [ ] `pnpm build` termina correctamente.
- [ ] `apps/api/dist/main.js` existe tras el build.
- [ ] `GET /health` responde con `status: ok`.
- [ ] La API no contiene secretos.
- [ ] La API no implementa autenticacion prematura.

## Riesgos de seguridad

- Permitir origenes CORS no aprobados.
- Filtrar variables de entorno en logs.
- Introducir endpoints de escritura antes de tener validacion de DTOs.
- Agregar autenticacion improvisada sin estrategia aprobada.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes inicializar una API NestJS dentro de un monorepo pnpm, compilarla, arrancar el servidor compilado y verificar un endpoint de salud sin romper los limites del backend.
