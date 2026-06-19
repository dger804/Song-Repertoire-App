# Skill Aprendida: Vista De Repertorio Con Letras

## Nombre de la skill

Agregar una vista de lectura de repertorio sin convertirla aun en modo presentacion.

## Cuando se aplica

Cuando la app ya puede crear repertorios con canciones ordenadas y necesita revisar el resultado guardado de forma completa.

## Que problema resuelve

Permite comprobar un repertorio desde el frontend sin entrar al editor:

- muestra nombre y descripcion del repertorio;
- muestra etiquetas internas del repertorio;
- muestra canciones en orden;
- muestra autor, letra completa y notas por cancion;
- muestra etiquetas internas asignadas a cada cancion del repertorio;
- mantiene la decision de letra primero sin introducir acordes.

## Procedimiento paso a paso

1. Agregar estado para el repertorio en vista.
2. Agregar un panel de lectura en `/app`.
3. Agregar accion `Ver` en cada tarjeta de repertorio.
4. Resolver cada `songId` contra la biblioteca ya cargada en frontend.
5. Renderizar canciones normalizadas por orden.
6. Renderizar etiquetas internas del repertorio y de cada cancion.
7. Preservar saltos de linea de la letra con una vista de texto plano.
8. Actualizar documentacion de frontend y dominio.
9. Validar build y pruebas disponibles.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Cada tarjeta de repertorio tiene accion `Ver`.
- La vista muestra nombre, descripcion, conteos y etiquetas.
- Las canciones aparecen en el orden del repertorio.
- La letra completa conserva saltos de linea.
- Las notas y autor aparecen si existen.
- El render incluye un estado para avisar si una cancion referenciada ya no existe en biblioteca.
- Browser abrio `/app` en `http://localhost:4321`.
- Browser confirmo API conectada, accion `Ver`, una cancion renderizada, un bloque de letra y cierre de vista.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/codex-skills/etapa-23-vista-repertorio-letras.md`
- `README.md`

## Checklist de validacion

- [x] El boton `Ver` abre la vista del repertorio correcto.
- [x] El boton `Cerrar vista` limpia la vista activa.
- [x] Las canciones se renderizan ordenadas.
- [x] La letra completa se lee como texto plano.
- [x] La documentacion diferencia vista de repertorio y modo presentacion futuro.
