# Skill Aprendida: Renderer Propio De ChordPro Basico

## Nombre de la skill

Reemplazar una dependencia GPL por un renderer propio de acordes basicos.

## Cuando se aplica

Cuando el MVP necesita pintar acordes sobre letra, pero una libreria externa condiciona la licencia del proyecto o agrega mas complejidad de la necesaria.

## Que problema resuelve

Mantiene la pagina de cancion funcional sin depender de ChordSheetJS:

- conserva el campo `chordSheet`;
- renderiza sintaxis ChordPro basica con acordes inline;
- usa `textContent` para evitar HTML generado desde contenido de usuario;
- conserva YouTube y partitura opcionales;
- deja transposicion y partituras como decisiones futuras.

## Procedimiento paso a paso

1. Retirar la dependencia del paquete web con `pnpm remove`.
2. Eliminar imports y estilos generados por la libreria.
3. Parsear lineas con tokens `[acorde]` y texto asociado.
4. Crear columnas DOM con acorde y letra.
5. Renderizar directivas simples como comentarios o tono.
6. Mantener texto plano como fallback natural cuando no hay acordes.
7. Actualizar ADRs y README.
8. Validar build, pruebas disponibles y flujo en Browser.

## Comandos usados

```bash
pnpm.cmd --store-dir C:\Users\dger804w\AppData\Local\pnpm\store\v10 --filter @song-repertoire/web remove chordsheetjs
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Browser abrio `/song/?id=<songId>` en `http://localhost:4321`.
- Browser confirmo markup propio `.chord-sheet`, `.chord-line`, `.chord-symbol` y `.chord-lyric`.
- Browser confirmo que no queda markup de ChordSheetJS en la pagina renderizada.
- Browser confirmo que YouTube y partitura se muestran cuando sus URLs existen.
- Browser confirmo que YouTube, partitura y notas se ocultan cuando sus campos quedan vacios.
- Browser confirmo ancho movil de 390 px sin scroll horizontal.
- Browser no reporto errores ni warnings de consola.
- La cancion temporal de prueba fue eliminada de la API.

## Archivos modificados

- `apps/web/package.json`
- `apps/web/src/pages/song/index.astro`
- `pnpm-lock.yaml`
- `README.md`
- `apps/web/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/decisions/ADR-0008-song-detail-chordsheet-and-media.md`
- `docs/decisions/ADR-0009-own-chordpro-renderer.md`
- `docs/codex-skills/etapa-32-pagina-cancion-chordsheet-media.md`
- `docs/codex-skills/etapa-33-renderer-propio-chordpro.md`

## Checklist de validacion

- [x] `chordsheetjs` ya no aparece en `package.json` ni `pnpm-lock.yaml`.
- [x] La pagina de cancion renderiza acordes inline.
- [x] La pagina conserva video y partitura opcionales.
- [x] La vista movil no genera scroll horizontal.
