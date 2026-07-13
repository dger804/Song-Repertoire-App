# Skill Aprendida: Previsualizacion De Acordes En Formulario

## Nombre de la skill

Agregar previsualizacion local de ChordPro basico al formulario de canciones.

## Cuando se aplica

Cuando el frontend ya tiene un renderer propio de acordes y se necesita validar visualmente el contenido antes de guardar una cancion.

## Que problema resuelve

Reduce la ida y vuelta entre crear una cancion y abrir su pagina de detalle:

- reutiliza `buildChordSheet()` dentro del formulario de `/app`;
- muestra el resultado de `chordSheet` mientras se escribe;
- usa `lyrics` como fallback visual cuando todavia no hay acordes;
- limpia la previsualizacion al cancelar o guardar;
- evita duplicar logica de renderizado.

## Procedimiento paso a paso

1. Agregar un panel de previsualizacion debajo del campo `chordSheet`.
2. Registrar referencias DOM para el panel y su contenido.
3. Crear una funcion `updateSongChordPreview()`.
4. Renderizar con `buildChordSheet(chordSheet || lyrics)`.
5. Actualizar la vista previa al escribir, editar, cancelar y resetear el formulario.
6. Mantener estilos compactos y con scroll horizontal para lineas largas.
7. Validar build, pruebas disponibles y revision visual.

## Comandos usados

```bash
pnpm.cmd --filter @song-repertoire/web build
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm.cmd --filter @song-repertoire/web build` termina correctamente.
- `pnpm.cmd build` termina correctamente.
- `pnpm.cmd test` termina correctamente con el placeholder actual.
- Browser verifico `/app` con API local simulada en `localhost:3000`.
- Browser confirmo que la previsualizacion aparece al escribir letra simple.
- Browser confirmo que `chordSheet` tiene prioridad sobre `lyrics`.
- Browser confirmo que editar una cancion existente carga acordes y comentarios.
- Browser confirmo que cancelar la edicion limpia y oculta la previsualizacion.
- Browser confirmo ancho movil de 390 px sin scroll horizontal.
- Browser no reporto errores ni warnings de consola.
- La API simulada fue apagada al terminar la verificacion.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `README.md`
- `docs/codex-skills/etapa-35-previsualizacion-acordes-formulario.md`

## Checklist de validacion

- [x] La previsualizacion aparece al escribir letra o acordes.
- [x] El campo `chordSheet` tiene prioridad sobre `lyrics`.
- [x] Editar una cancion carga la previsualizacion.
- [x] Cancelar o guardar limpia la previsualizacion.
- [x] El build del frontend termina correctamente.
