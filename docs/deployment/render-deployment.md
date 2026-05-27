# Render Deployment

## Objetivo

Documentar la estrategia inicial para desplegar en Render sin acoplar el proyecto a configuraciones locales.

## Servicios previstos

### Frontend

- Tipo: Static Site.
- Ruta: `apps/web`.
- Build command: se definira cuando exista la app Astro.
- Publish directory: se definira cuando exista la app Astro.

### Backend

- Tipo: Web Service.
- Ruta: `apps/api`.
- Build command: se definira cuando exista la app NestJS.
- Start command: se definira cuando exista la app NestJS.
- Health check: se definira cuando exista endpoint `/health`.

### Base de datos

- MongoDB Atlas.
- La cadena de conexion se configura en variables de entorno.

## Variables previstas

Frontend:

- `PUBLIC_API_BASE_URL`

Backend:

- `NODE_ENV`
- `PORT`
- `CORS_ORIGIN`
- `MONGODB_URI`
- `MONGODB_DB_NAME`

## Reglas

- No guardar secretos en GitHub.
- No usar Docker Compose como estrategia principal de produccion en Render.
- No asumir comandos finales hasta crear cada app.
- Documentar cada cambio de configuracion.

## Riesgos

- Builds rotos por rutas de monorepo.
- CORS mal configurado.
- Variables faltantes.
- Allowlist incorrecta entre Render y Atlas.
