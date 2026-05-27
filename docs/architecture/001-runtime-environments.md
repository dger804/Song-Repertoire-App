# Runtime Environments

## Desarrollo local

El entorno local usara:

- Node.js.
- pnpm.
- Git.
- MongoDB Atlas como base de datos preferida.

Docker no es obligatorio en esta fase. Solo se evaluara para MongoDB local si Atlas no resulta viable para desarrollo.

## Render

Render sera la primera plataforma de despliegue.

Servicios previstos:

- `apps/web` como Static Site.
- `apps/api` como Web Service.
- MongoDB Atlas como base de datos externa.

Variables sensibles se configuraran en Render y no se versionaran.

## Futuro

El proyecto debe poder evolucionar hacia:

- Render con mejores planes.
- MongoDB Atlas dedicado.
- Railway + MongoDB Atlas.
- DigitalOcean App Platform + MongoDB Atlas.
- VPS con Docker Compose si el proyecto lo justifica.
- Kubernetes solo si existe necesidad real de escala y operacion.

## Restricciones

- No usar NAS.
- No usar Tailscale.
- No usar Hostinger en esta fase.
- No abrir puertos del router.
- No exponer servicios locales a internet.
