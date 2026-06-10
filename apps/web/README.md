# Web App

Frontend de la aplicacion.

## Responsabilidad

- Implementar la interfaz de usuario con Astro + TypeScript.
- Consumir la API NestJS mediante HTTP.
- Mantener componentes, vistas y servicios del frontend separados.
- No contener secretos ni variables privadas.
- Usar solo variables publicas seguras, como `PUBLIC_API_BASE_URL`.

## Fuera de alcance

- Acceso directo a MongoDB.
- Logica de negocio propia del backend.
- Validaciones de seguridad exclusivas del servidor.
- Autenticacion hasta que exista estrategia aprobada.

## Estado

La aplicacion Astro ya esta inicializada con una pagina inicial minima.

## Stack actual

- Astro.
- TypeScript.
- Salida estatica por defecto.

## Comandos

Desde la raiz del repositorio:

```bash
pnpm dev:web
pnpm build
pnpm preview:web
```
