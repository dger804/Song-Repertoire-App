# Skill Aprendida: Renderer Compartido En Repertorios

## Nombre de la skill

Compartir el renderer propio de ChordPro basico entre pagina de cancion y vista de repertorio.

## Cuando se aplica

Cuando una vista nueva ya renderiza acordes correctamente, pero otras superficies de lectura siguen mostrando solo `lyrics`.

## Que problema resuelve

Evita que repertorios y exportaciones queden desalineados:

- extrae el renderer propio a `apps/web/src/lib/chord-renderer.js`;
- usa el mismo renderer en `/song/?id=<songId>`;
- hidrata los bloques de canciones dentro de la vista de repertorio;
- la exportacion de repertorio prefiere `chordSheet` sobre `lyrics`;
- mantiene `lyrics` como fallback cuando no hay acordes.

## Procedimiento paso a paso

1. Crear un modulo frontend para construir el DOM del chord sheet.
2. Mover los estilos globales del renderer a una funcion `ensureChordRendererStyles()`.
3. Reemplazar el parser local de `/song/` por el modulo compartido.
4. Agregar placeholders por `songId` en la vista de repertorio.
5. Hidratar cada placeholder con `buildChordSheet()`.
6. Actualizar exportacion de repertorio para usar `chordSheet || lyrics`.
7. Validar build, pruebas disponibles y flujo en Browser.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Browser verifico `/app` con API local simulada en `localhost:3000`.
- Browser confirmo que la vista de repertorio hidrata `.chord-line`, `.chord-symbol` y `.chord-lyric`.
- Browser confirmo que `/song/?id=<songId>` sigue renderizando acordes con el mismo helper.
- Browser confirmo que copiar repertorio exporta `chordSheet` en vez de caer a `lyrics`.
- Browser confirmo ancho movil de 390 px sin scroll horizontal.
- Browser no reporto errores ni warnings de consola.
- MongoDB Atlas no se pudo usar en esta verificacion porque rechazo la IP actual por allowlist.

## Archivos modificados

- `apps/web/src/lib/chord-renderer.js`
- `apps/web/src/pages/app.astro`
- `apps/web/src/pages/song/index.astro`
- `apps/web/README.md`
- `README.md`
- `docs/codex-skills/etapa-34-renderer-compartido-repertorios.md`

## Checklist de validacion

- [x] La pagina de cancion sigue renderizando acordes.
- [x] La vista de repertorio renderiza `chordSheet` cuando existe.
- [x] La exportacion de repertorio usa `chordSheet` cuando existe.
- [x] La vista movil no genera scroll horizontal.
