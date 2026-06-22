# Skill Aprendida: Pagina De Cancion Con ChordSheetJS Y Multimedia

## Estado

Superada por la etapa 33. Se retiro ChordSheetJS por su licencia GPL-2.0-only y se reemplazo por un renderer propio de ChordPro basico.

## Nombre de la skill

Abrir canciones en una pagina propia con acordes, video y partitura opcional.

## Cuando se aplica

Cuando la biblioteca de canciones ya existe y se necesita una vista de lectura mas completa que la tarjeta compacta del dashboard.

## Que problema resuelve

Separa la administracion de canciones de la lectura musical:

- cada tarjeta abre `/song/?id=<songId>`;
- el detalle renderiza letra con acordes usando ChordSheetJS;
- `lyrics` queda como respaldo cuando no hay `chordSheet`;
- YouTube y partitura aparecen solo si la cancion tiene URL;
- el sistema final de partituras queda documentado como pendiente;
- la exportacion de cancion usa el texto con acordes cuando existe.

## Procedimiento paso a paso

1. Agregar `chordsheetjs` al paquete web.
2. Extender `Song`, schema y DTOs con `chordSheet`, `youtubeUrl` y `sheetMusicUrl`.
3. Conectar los campos nuevos en el formulario de canciones.
4. Crear `/song/?id=<songId>` y cargar cancion/categorias desde la API.
5. Parsear ChordPro o acordes sobre letra con ChordSheetJS.
6. Escapar el contenido antes de formatear HTML.
7. Normalizar URLs de YouTube a `embed`.
8. Mostrar partitura como `iframe` mas enlace externo.
9. Validar build, pruebas disponibles y flujo en Browser.

## Comandos usados

```bash
pnpm.cmd --filter @song-repertoire/web add chordsheetjs
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Browser abrio `/song/?id=<songId>` en `http://localhost:4321`.
- Browser confirmo markup `.chord-sheet` renderizado por ChordSheetJS.
- Browser confirmo que el video de YouTube se normaliza a URL `embed`.
- Browser confirmo que la partitura se muestra cuando existe `sheetMusicUrl`.
- Browser confirmo que video, partitura y notas se ocultan cuando sus campos quedan vacios.
- Browser confirmo que `/app` muestra tarjetas con enlace `Ver` hacia `/song/?id=<songId>`.
- Browser confirmo ancho movil de 390 px sin scroll horizontal.
- Browser no reporto errores ni warnings de consola.
- La cancion temporal de prueba fue eliminada de la API.

## Archivos modificados

- `apps/api/src/songs/dto/create-song.dto.ts`
- `apps/api/src/songs/dto/update-song.dto.ts`
- `apps/api/src/songs/song.schema.ts`
- `apps/api/src/songs/songs.service.ts`
- `apps/web/package.json`
- `apps/web/src/pages/app.astro`
- `apps/web/src/pages/song/index.astro`
- `packages/shared/src/index.ts`
- `pnpm-lock.yaml`
- `README.md`
- `apps/web/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/decisions/ADR-0006-lyrics-first-song-model.md`
- `docs/decisions/ADR-0008-song-detail-chordsheet-and-media.md`
- `docs/codex-skills/etapa-32-pagina-cancion-chordsheet-media.md`

## Checklist de validacion

- [x] La tarjeta de cancion abre una pagina nueva.
- [x] La pagina renderiza acordes con ChordSheetJS.
- [x] Si no hay video, la seccion no aparece.
- [x] Si no hay partitura, la seccion no aparece.
- [x] La vista movil no genera scroll horizontal.
