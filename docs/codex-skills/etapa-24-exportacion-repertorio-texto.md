# Skill Aprendida: Exportacion De Repertorio En Texto

## Nombre de la skill

Generar una salida de texto plano para repertorios desde la vista local.

## Cuando se aplica

Cuando la app ya muestra un repertorio completo y se necesita compartirlo, copiarlo o guardarlo sin implementar aun PDF ni modo presentacion.

## Que problema resuelve

Permite usar un repertorio fuera de la UI:

- copiar repertorio como texto;
- descargar repertorio como `.txt`;
- incluir canciones en orden;
- incluir autor, etiquetas internas, letra y notas;
- mantener el backend intacto porque no se persiste un nuevo dato.

## Procedimiento paso a paso

1. Agregar acciones visibles solo cuando hay repertorio abierto.
2. Crear un builder de texto plano desde el repertorio en vista.
3. Resolver canciones por `songId` contra la biblioteca ya cargada.
4. Mantener el orden normalizado del repertorio.
5. Incluir etiquetas internas del repertorio y de cada cancion.
6. Copiar usando Clipboard API y fallback local.
7. Descargar con `Blob`, URL temporal y nombre de archivo seguro.
8. Documentar que esta salida no reemplaza PDF ni modo presentacion.
9. Validar build, pruebas disponibles y flujo en navegador.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd test
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `pnpm test` termina correctamente con el placeholder actual.
- `Copiar texto` aparece al abrir un repertorio.
- `Descargar TXT` aparece al abrir un repertorio.
- El texto generado incluye nombre, descripcion, etiquetas, canciones, letra y notas.
- El cierre de vista oculta las acciones de exportacion.
- Browser abrio `/app` en `http://localhost:4321`.
- Browser confirmo que `Copiar texto` copia el repertorio al portapapeles.
- Browser confirmo que `Descargar TXT` ejecuta el handler y muestra feedback.
- Browser no reporto errores de consola.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/codex-skills/etapa-24-exportacion-repertorio-texto.md`
- `README.md`

## Checklist de validacion

- [x] El boton `Copiar texto` copia el repertorio abierto.
- [x] El boton `Descargar TXT` ejecuta el flujo de descarga con nombre seguro.
- [x] La salida respeta el orden de canciones.
- [x] La salida incluye etiquetas internas asignadas.
- [x] La documentacion diferencia texto plano, PDF y modo presentacion.
