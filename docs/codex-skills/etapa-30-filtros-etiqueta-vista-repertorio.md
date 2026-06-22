# Skill Aprendida: Filtros Por Etiqueta En Vista De Repertorio

## Nombre de la skill

Filtrar canciones de un repertorio por etiqueta interna desde la vista de lectura.

## Cuando se aplica

Cuando los repertorios ya tienen etiquetas internas y canciones con `tagIds`, pero la vista solo muestra esas etiquetas sin permitir navegar por ellas.

## Que problema resuelve

Convierte las etiquetas internas en una herramienta real de organizacion:

- muestra botones de filtro dentro de la vista del repertorio;
- incluye `Todas`, cada etiqueta interna y `Sin etiqueta` cuando aplica;
- muestra conteos por filtro;
- conserva copia y descarga del repertorio completo;
- mantiene estado local sin tocar el modelo ni la API;
- muestra un estado vacio cuando una etiqueta no tiene canciones;
- evita scroll horizontal en movil.

## Procedimiento paso a paso

1. Agregar `repertoireViewTagFilter` al estado local del frontend.
2. Reiniciar el filtro al abrir otro repertorio o cerrar la vista.
3. Validar que el filtro activo siga existiendo antes de renderizar.
4. Renderizar botones de filtro con `aria-pressed`.
5. Filtrar `repertoireSongs` por `tagIds` o por canciones sin etiquetas.
6. Mostrar conteo de canciones visibles cuando hay un filtro activo.
7. Conectar clicks del visor con delegacion de eventos.
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
- Browser abrio un repertorio existente con una etiqueta interna.
- Browser confirmo filtros `Todas`, `Entrada` y `Sin etiqueta` con conteos.
- Browser confirmo que una etiqueta sin canciones muestra `Sin canciones con esa etiqueta.`
- Browser confirmo que `Sin etiqueta` muestra la cancion correspondiente.
- Browser confirmo que `Todas` restaura la vista completa.
- Browser confirmo ancho movil de 390 px sin scroll horizontal.
- Browser no reporto errores de consola.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-30-filtros-etiqueta-vista-repertorio.md`
- `README.md`

## Checklist de validacion

- [x] El filtro `Todas` aparece activo por defecto.
- [x] Las etiquetas internas aparecen como filtros con conteo.
- [x] `Sin etiqueta` aparece cuando existen canciones sin etiqueta.
- [x] El estado vacio por etiqueta se muestra correctamente.
- [x] El filtro no modifica la exportacion del repertorio completo.
