# Skill Aprendida: Configuracion De API Con MongoDB Atlas

## Nombre de la skill

Preparar NestJS para usar MongoDB Atlas con variables de entorno validadas.

## Cuando se aplica

Cuando el proyecto ya eligio MongoDB Atlas como base externa y necesita que el backend pueda conectarse sin versionar secretos.

## Que problema resuelve

Evita leer `process.env` de forma dispersa y prepara una conexion MongoDB centralizada antes de implementar CRUD.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Instalar `@nestjs/config`, `@nestjs/mongoose` y `mongoose` en `apps/api`.
3. Crear una funcion central para cargar y validar variables.
4. Configurar `ConfigModule` global.
5. Configurar `MongooseModule` con `MONGODB_URI` y `MONGODB_DB_NAME`.
6. Actualizar `/health` para reportar estado de base de datos.
7. Documentar `apps/api/.env` como archivo local no versionado.
8. Ejecutar build de API y build completo.
9. Crear commit pequeno.
10. Hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd --filter @song-repertoire/api add @nestjs/config @nestjs/mongoose mongoose
pnpm.cmd build:api
pnpm.cmd build
```

## Archivos modificados

- `.env.example`
- `apps/api/README.md`
- `apps/api/package.json`
- `apps/api/src/app.module.ts`
- `apps/api/src/main.ts`
- `apps/api/src/health.controller.ts`
- `apps/api/src/config/`
- `pnpm-lock.yaml`

## Errores comunes

- Versionar `apps/api/.env`.
- Usar un usuario de Atlas con permisos excesivos.
- Permitir CORS wildcard para probar rapido.
- Conectar MongoDB directamente desde Astro.
- Implementar CRUD antes de validar configuracion.

## Checklist de validacion

- [ ] `pnpm build:api` termina correctamente.
- [ ] `pnpm build` termina correctamente.
- [ ] La API falla temprano si falta `MONGODB_URI`.
- [ ] `.env.example` no contiene secretos.
- [ ] `apps/api/.env` sigue ignorado por Git.

## Riesgos de seguridad

- Filtrar connection strings en commits, logs o capturas.
- Usar allowlist de Atlas demasiado amplia.
- Exponer la API local a otros dispositivos sin CORS controlado.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando NestJS puede cargar configuracion centralizada, preparar Mongoose para Atlas y compilar sin depender de secretos versionados.
