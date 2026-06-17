# Skill Aprendida: Acciones Por Tarjeta En Repertorios

## Nombre de la skill

Mostrar repertorios como tarjetas accionables con agregar canciones, editar y eliminar.

## Cuando se aplica

Cuando el dashboard de repertorios ya existe y se quiere que cada repertorio tenga acciones parecidas a las tarjetas de canciones.

## Que problema resuelve

Evita que una unica accion "Abrir" mezcle intenciones distintas:

- agregar canciones a un repertorio existente;
- editar nombre, descripcion, etiquetas y orden;
- eliminar el repertorio desde la misma tarjeta.

## Procedimiento paso a paso

1. Separar la carga del repertorio en una funcion reutilizable.
2. Mantener el builder como fuente unica de edicion.
3. Crear una accion `Agregar canciones` que carga el repertorio y enfoca la biblioteca.
4. Crear una accion `Editar` que carga el repertorio y enfoca el formulario.
5. Mantener el control de eliminacion existente con confirmacion.
6. Mostrar metadatos del repertorio dentro de la tarjeta.
7. Mostrar una marca visual cuando el repertorio esta abierto.
8. Validar build y bundle compilado.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- El API local responde `/health` con base conectada.
- El bundle compilado contiene `Agregar canciones`, `data-add-repertoire-songs`, `Editando repertorio` y `Agrega canciones al repertorio`.
- El navegador integrado bloqueo la URL local con `ERR_BLOCKED_BY_CLIENT`; se intento verificar por Browser, pero la navegacion local fue bloqueada por el cliente.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `README.md`
- `docs/codex-skills/etapa-21-acciones-tarjeta-repertorios.md`

## Checklist de validacion

- [x] Cada tarjeta de repertorio muestra `Agregar canciones`.
- [x] Cada tarjeta de repertorio muestra `Editar`.
- [x] Cada tarjeta de repertorio conserva `Eliminar` con confirmacion.
- [x] La accion de agregar canciones carga el repertorio y enfoca la biblioteca.
- [x] La accion de editar carga el repertorio y enfoca el formulario.
- [x] La tarjeta activa muestra estado visual `Abierto`.
- [x] `pnpm build` termina correctamente.
