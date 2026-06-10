# Runtime Environments

## Desarrollo local

El entorno local usara:

- Node.js.
- pnpm.
- Git.
- MongoDB Atlas como base de datos preferida.

Docker no es obligatorio en esta fase. Solo se evaluara para MongoDB local si Atlas no resulta viable para desarrollo.

## Validacion local actual

Validado el 2026-06-02:

```text
Node.js: v24.16.0
npm: 11.13.0
pnpm: 10.0.0
Git: 2.54.0.windows.1
```

En Windows PowerShell, `npm.ps1` y `pnpm.ps1` pueden estar bloqueados por Execution Policy. Para validacion y comandos locales, usar `npm.cmd` y `pnpm.cmd` evita cambiar politicas globales.

## Despliegue futuro

El despliegue publico queda por definir. Render se mantiene como opcion documentada y evaluada, pero el desarrollo continuara primero como app local hasta validar el flujo principal.

Si se elige Render, los servicios previstos serian:

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

## Pruebas desde otros dispositivos

Probar desde un celular en la red local o mediante Tailscale puede ser util durante desarrollo, pero no queda aprobado como dependencia del proyecto en esta etapa.

Antes de adoptarlo se debe documentar:

- Alcance: solo desarrollo local o tambien demostraciones.
- Riesgos: exposicion de API, CORS, secretos locales y dispositivos autorizados.
- Reglas: no abrir puertos del router, no compartir credenciales y no tratar Tailscale como despliegue productivo.

## Restricciones

- No usar NAS.
- No usar Tailscale como dependencia del proyecto sin una decision documentada.
- No usar Hostinger en esta fase.
- No abrir puertos del router.
- No exponer servicios locales a internet.
