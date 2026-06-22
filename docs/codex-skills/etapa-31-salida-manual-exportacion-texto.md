# Skill Aprendida: Salida Manual Para Exportacion De Texto

## Nombre de la skill

Agregar una salida manual reutilizable cuando el navegador bloquea el portapapeles.

## Cuando se aplica

Cuando la app ya genera texto exportable, pero `navigator.clipboard` o `execCommand("copy")` pueden fallar por permisos, origen local o restricciones del navegador.

## Que problema resuelve

Evita que el usuario pierda la exportacion:

- intenta copiar automaticamente como antes;
- si falla, muestra el texto generado en un `textarea` readonly;
- enfoca y selecciona el texto para copia manual;
- funciona para canciones y repertorios;
- permite cerrar la salida manual;
- limpia la salida cuando se cierra la vista asociada;
- mantiene las descargas `.txt` sin cambios.

## Procedimiento paso a paso

1. Agregar un bloque `manual-export` oculto fuera del grid principal.
2. Registrar `manualExport`, `manualExportText`, `manualExportTitle` y `closeManualExport`.
3. Crear `showManualExportText(title, text)` para abrir, enfocar y seleccionar.
4. Crear `hideManualExportText()` para cerrar y limpiar el textarea.
5. En copia exitosa, cerrar la salida manual.
6. En copia fallida, mostrar el texto generado y feedback de advertencia.
7. Cerrar la salida manual al cerrar detalle de cancion o vista de repertorio.
8. Validar build, pruebas disponibles y flujo en Browser.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- Browser abrio `/app` en `http://localhost:4321/app/` y confirmo `Atlas conectado`.
- Browser confirmo que copiar una cancion muestra salida manual cuando el portapapeles falla.
- Browser confirmo que la salida manual de cancion incluye titulo y categorias.
- Browser confirmo que cerrar la salida manual la oculta y limpia el texto.
- Browser confirmo que copiar un repertorio muestra salida manual cuando el portapapeles falla.
- Browser confirmo que la salida manual de repertorio incluye nombre y canciones.
- Browser confirmo ancho movil de 390 px sin scroll horizontal.
- Browser no reporto errores de consola.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-31-salida-manual-exportacion-texto.md`
- `README.md`

## Checklist de validacion

- [x] La salida manual aparece solo cuando se necesita.
- [x] La salida manual enfoca el textarea.
- [x] Canciones y repertorios usan el mismo fallback.
- [x] El cierre limpia la salida manual.
- [x] La vista movil no genera scroll horizontal.
