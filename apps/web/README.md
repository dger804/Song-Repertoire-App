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

La aplicacion Astro ya tiene landing publica y una pantalla local de trabajo en `/app`.

## Stack actual

- Astro.
- TypeScript.
- Salida estatica por defecto.
- Integracion HTTP con la API usando `PUBLIC_API_BASE_URL`.

## Pantallas actuales

- `/`: landing promocional.
- `/app`: constructor local de repertorios.

La pantalla `/app` permite:

- listar canciones desde la API;
- crear canciones;
- seleccionar canciones existentes;
- ordenar canciones dentro de un repertorio;
- crear repertorios en MongoDB Atlas mediante la API.

## Comandos

Desde la raiz del repositorio:

```bash
pnpm dev:web
pnpm build
pnpm preview:web
```
