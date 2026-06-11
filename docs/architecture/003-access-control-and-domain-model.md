# Access Control And Domain Model

## Objetivo

Definir contratos iniciales de roles y entidades del MVP antes de implementar persistencia, CRUD o autenticacion.

## Principio

Los roles deben existir en el modelo desde el inicio, pero no deben confundirse con autenticacion implementada. Hasta que exista login, los roles son contratos de dominio y reglas futuras de autorizacion.

## Roles

| Rol | Responsabilidad |
| --- | --- |
| `owner` | Administracion completa del sistema. |
| `supervisor` | Gestion de usuarios y contenido musical. |
| `moderator` | Gestion de canciones, categorias y repertorios. |
| `regular` | Consulta de biblioteca y repertorios permitidos. |

## Permisos iniciales

| Permiso | Roles |
| --- | --- |
| `manageUsers` | `owner`, `supervisor` |
| `manageSongs` | `owner`, `supervisor`, `moderator` |
| `manageCategories` | `owner`, `supervisor`, `moderator` |
| `manageRepertoires` | `owner`, `supervisor`, `moderator` |
| `readLibrary` | `owner`, `supervisor`, `moderator`, `regular` |

## Entidades del MVP

### Usuario

- `id`
- `displayName`
- `role`
- `isActive`

### Categoria

- `id`
- `name`
- `description`

### Cancion

- `id`
- `title`
- `lyrics`
- `categoryIds`

### Repertorio

- `id`
- `name`
- `description`
- `songs`

### Cancion En Repertorio

- `songId`
- `order`

## Reglas de implementacion futura

- El frontend puede usar roles para adaptar navegacion, pero la autorizacion real debe vivir en backend.
- Los endpoints de escritura deberan validar permisos en NestJS.
- Los DTOs deberan validar forma y limites de entrada.
- Los modelos de MongoDB no deben aceptar campos sensibles por asignacion masiva.
- El primer usuario administrador requerira una estrategia explicita de bootstrap.

## Persistencia inicial

La API define schemas Mongoose para estas colecciones:

| Coleccion | Schema | Indices iniciales |
| --- | --- | --- |
| `users` | `User` | `role`, `isActive` |
| `categories` | `Category` | `name` unico |
| `songs` | `Song` | `title`, `categoryIds` |
| `repertoires` | `Repertoire` | `name`, `songs.songId` |

`categories`, `songs` y `repertoires` ya exponen CRUD con DTOs y validacion global. Las reglas de autorizacion ejecutables siguen pendientes.
