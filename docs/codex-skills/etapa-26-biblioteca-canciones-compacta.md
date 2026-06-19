# Skill Aprendida: Biblioteca De Canciones Compacta

## Nombre de la skill

Convertir la biblioteca de canciones en tarjetas compactas enfocadas en titulo y categorias.

## Cuando se aplica

Cuando la lista de canciones ya tiene CRUD y busqueda, pero las tarjetas muestran demasiada letra/notas para una biblioteca de seleccion rapida.

## Que problema resuelve

Mejora el escaneo de canciones sin cambiar el modelo:

- cada tarjeta prioriza titulo;
- las categorias se muestran como chips visibles;
- el autor se conserva como metadata secundaria si existe;
- letra y notas siguen participando en busqueda aunque ya no ocupan espacio en la tarjeta;
- las acciones de agregar, editar y eliminar siguen disponibles.

## Procedimiento paso a paso

1. Mantener la busqueda existente por titulo, autor, letra y notas.
2. Quitar previews largos de letra/notas en la tarjeta de biblioteca.
3. Renderizar categorias como chips compactos.
4. Mostrar `Sin categoria` cuando la cancion no tenga categorias.
5. Ajustar la lista a un grid responsive de tarjetas.
6. Verificar que las acciones de tarjeta siguen funcionando.
7. Validar build y pruebas disponibles.
8. Probar visualmente en navegador local.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- La biblioteca muestra tarjetas mas compactas.
- Cada tarjeta muestra titulo y categorias.
- Las acciones de agregar, editar y eliminar siguen visibles.
- La busqueda por letra/notas sigue funcionando aunque esos campos no se vean en la tarjeta.
- Browser abrio `/app` en `http://localhost:4321`.
- Browser confirmo tarjetas de canciones, chips de categoria, cero previews de letra/notas y acciones visibles.
- Browser valido viewport movil sin overflow horizontal.
- Browser no reporto errores de consola.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-26-biblioteca-canciones-compacta.md`
- `README.md`

## Checklist de validacion

- [x] Las tarjetas de canciones no muestran preview de letra.
- [x] Las tarjetas de canciones no muestran preview de notas.
- [x] Las categorias se ven como chips.
- [x] La tarjeta se mantiene compacta en desktop y movil.
- [x] Las acciones de cancion siguen disponibles.
