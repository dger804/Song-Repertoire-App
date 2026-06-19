# Skill Aprendida: Detalle De Cancion Desde Biblioteca

## Nombre de la skill

Agregar una vista de lectura para canciones cuando la biblioteca usa tarjetas compactas.

## Cuando se aplica

Cuando las tarjetas de canciones priorizan seleccion rapida y ya no muestran letra ni notas completas.

## Que problema resuelve

Mantiene la biblioteca compacta sin perder acceso al contenido:

- cada tarjeta puede abrir `Ver`;
- la vista muestra titulo, autor, categorias, letra y notas;
- la tarjeta activa queda marcada como `En detalle`;
- editar y eliminar siguen disponibles desde la tarjeta;
- la busqueda por letra/notas sigue funcionando aunque esos campos vivan en el detalle.

## Procedimiento paso a paso

1. Agregar estado `viewingSongId`.
2. Crear un panel de detalle en la columna de canciones.
3. Agregar boton `Ver` en cada tarjeta de cancion.
4. Renderizar autor, categorias, letra completa y notas.
5. Reutilizar chips de categoria y bloque de letra ya existentes.
6. Refrescar el detalle al editar canciones o categorias.
7. Cerrar el detalle si se elimina la cancion activa.
8. Validar build, pruebas disponibles y flujo en navegador.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Cada tarjeta de cancion tiene accion `Ver`.
- La accion `Ver` abre el detalle correcto.
- El detalle muestra letra completa y notas si existen.
- `Cerrar detalle` limpia la cancion activa.
- No hay overflow horizontal en movil.
- Browser abrio `/app` en `http://localhost:4321`.
- Browser confirmo botones `Ver`, detalle con letra, chip de categoria y tarjeta marcada como `En detalle`.
- Browser confirmo cierre del detalle.
- Browser no reporto errores de consola.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-27-detalle-cancion-biblioteca.md`
- `README.md`

## Checklist de validacion

- [x] El boton `Ver` abre el detalle.
- [x] El boton `Cerrar detalle` limpia la vista activa.
- [x] La tarjeta activa muestra `En detalle`.
- [x] La letra completa se ve en el panel de detalle.
- [x] Las acciones de cancion siguen disponibles.
