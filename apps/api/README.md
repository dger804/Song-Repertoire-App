# API App

Backend de la aplicacion.

## Responsabilidad

- Implementar la API REST con NestJS + TypeScript.
- Validar entradas mediante DTOs.
- Conectarse a MongoDB usando Mongoose.
- Centralizar manejo de errores.
- Configurar CORS de forma explicita.
- Validar variables de entorno.
- Prepararse para autenticacion futura sin implementarla todavia.

## Fuera de alcance

- Renderizado de interfaz.
- Secretos versionados.
- Conexion directa desde frontend a MongoDB.
- Autenticacion antes de aprobar estrategia de seguridad.

## Estado

La aplicacion NestJS ya esta inicializada con un endpoint `GET /health`.

## Stack actual

- NestJS.
- TypeScript.
- CORS explicito usando `CORS_ORIGIN`.
- Configuracion validada mediante variables de entorno.
- MongoDB Atlas mediante Mongoose.

## Modulos actuales

- `UsersModule`: schema de usuarios y roles.
- `CategoriesModule`: schema de categorias.
- `SongsModule`: schema de canciones.
- `RepertoiresModule`: schema de repertorios y orden de canciones.

Los modulos actuales registran schemas de persistencia. Los endpoints CRUD se implementaran en una etapa posterior con DTOs y autorizacion en backend.

## Comandos

Desde la raiz del repositorio:

```bash
pnpm dev:api
pnpm build:api
pnpm preview:api
```

## Entorno local

Crear un archivo local no versionado en:

```text
apps/api/.env
```

Variables requeridas:

```text
NODE_ENV=development
PORT=3000
CORS_ORIGIN=http://localhost:4321
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-host>/?retryWrites=true&w=majority
MONGODB_DB_NAME=song_repertoire_dev
```

No guardar credenciales reales en Git. `MONGODB_URI` debe usar un usuario de Atlas dedicado para desarrollo y permisos minimos.
