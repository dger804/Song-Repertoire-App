# ADR-0002: Stack Astro, NestJS Y MongoDB

## Estado

Aprobado.

## Contexto

Se busca una aplicacion moderna, portable y adecuada para aprendizaje profesional con TypeScript.

## Decision

Usar:

- Astro + TypeScript para frontend.
- NestJS + TypeScript para backend.
- MongoDB + Mongoose para persistencia.
- MongoDB Atlas como opcion preferida para desarrollo y Render.

## Alternativas descartadas en esta fase

- PHP.
- MySQL.
- WordPress.
- Hostinger como hosting principal.
- NAS.
- Tailscale.

## Consecuencias

- La aplicacion queda alineada con un stack moderno TypeScript.
- Render puede alojar frontend y backend como servicios separados.
- Atlas permite evitar administrar MongoDB manualmente al desplegar.
