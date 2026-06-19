# Skill Aprendida: Exportacion De Cancion En Texto

## Nombre de la skill

Exportar una cancion individual desde su panel de detalle.

## Cuando se aplica

Cuando la biblioteca ya tiene una vista de lectura para canciones y se necesita copiar o guardar una cancion sin abrir el editor.

## Que problema resuelve

Permite usar una cancion fuera de la UI:

- copiar cancion como texto;
- descargar cancion como `.txt`;
- incluir titulo, autor, categorias, letra y notas;
- reutilizar el flujo de portapapeles y descarga del repertorio;
- no agregar campos nuevos al modelo.

## Procedimiento paso a paso

1. Agregar acciones visibles solo cuando hay una cancion abierta en detalle.
2. Crear un builder de texto plano desde la cancion.
3. Incluir categorias resueltas desde la biblioteca cargada.
4. Reutilizar `copyTextToClipboard`, intentando primero la copia por seleccion y luego Clipboard API.
5. Descargar con `Blob`, URL temporal y nombre de archivo seguro.
6. Conectar eventos de copiar y descargar.
7. Validar build, pruebas disponibles y flujo en navegador.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Browser abrio `/app` en `http://localhost:4321/app/` y confirmo `Atlas conectado`.
- `Copiar texto` aparece al abrir una cancion y copia titulo, categorias y letra.
- `Descargar TXT` aparece al abrir una cancion y ejecuta el handler con feedback de descarga preparada.
- El Browser interno no soporta el evento nativo de descargas, pero no reporto errores de consola.
- El cierre de detalle oculta las acciones de exportacion.
- En ancho movil de 390 px, el detalle mantiene los controles visibles sin scroll horizontal.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-28-exportacion-cancion-texto.md`
- `README.md`

## Checklist de validacion

- [x] El boton `Copiar texto` copia la cancion abierta.
- [x] El boton `Descargar TXT` ejecuta el flujo de descarga.
- [x] La salida incluye categorias resueltas.
- [x] La salida incluye notas cuando existen.
- [x] Las acciones se ocultan al cerrar el detalle.
