# ADR-0003: Render Como Primer Despliegue

## Estado

Aprobado.

## Contexto

El proyecto no usara NAS, Tailscale ni Hostinger en esta fase. Se requiere una plataforma manejada para desplegar frontend y backend sin administrar infraestructura propia.

## Decision

Usar Render como primera plataforma de despliegue:

- Astro como Static Site.
- NestJS como Web Service.
- MongoDB Atlas como base de datos externa.

## Consideraciones

- Variables de entorno se configuran en Render, no en Git.
- La API debe escuchar en el puerto esperado por Render.
- CORS debe permitir solo origenes aprobados.
- Se debe documentar build command, start command y health checks.

## Riesgos

- Configuracion incorrecta de variables.
- CORS demasiado permisivo.
- Builds rotos por rutas de monorepo mal definidas.
- Problemas de allowlist entre Render y MongoDB Atlas.
