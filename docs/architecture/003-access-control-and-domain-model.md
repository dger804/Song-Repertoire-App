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
- `author`
- `lyrics`
- `notes`
- `categoryIds`

El MVP guarda la cancion como letra simple con metadata editorial basica: autor y notas libres. La representacion con acordes en posicion queda diferida a una decision posterior de renderer/repositorio especializado, para no mezclar el modelo actual con un formato que aun no esta elegido.

### Repertorio

- `id`
- `name`
- `description`
- `tags`
- `songs`

### Etiqueta En Repertorio

- `tagId`
- `name`
- `color`

Las etiquetas de repertorio son internas al repertorio. No reemplazan a las categorias globales de canciones; sirven para organizar una lista concreta.

La vista de repertorio del MVP es una lectura operativa del repertorio guardado: muestra canciones en orden, letra completa, autor, notas y etiquetas internas asignadas. No es todavia un modo de presentacion ni define el futuro formato de acordes.

La exportacion inicial de repertorio es texto plano generado en el frontend desde los datos ya cargados. Sirve para ensayo, revision o compartir rapidamente, sin adelantar la decision de PDF ni modo presentacion.

### Cancion En Repertorio

- `songId`
- `order`
- `tagIds`

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
| `songs` | `Song` | `title`, `author`, `categoryIds` |
| `repertoires` | `Repertoire` | `name`, `songs.songId` |

`categories`, `songs` y `repertoires` ya exponen CRUD con DTOs y validacion global. Las reglas de autorizacion ejecutables siguen pendientes.

Los borrados aplican limpieza referencial basica: eliminar una categoria la retira de las canciones, y eliminar una cancion la retira de los repertorios. Esta regla evita referencias huerfanas sin introducir todavia transacciones ni versionado de cambios.
