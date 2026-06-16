# Skill Aprendida: Dashboard De Repertorios

## Nombre de la skill

Convertir el constructor local en una pantalla de trabajo centrada en repertorios.

## Cuando se aplica

Cuando ya existe CRUD funcional para repertorios, canciones y categorias, pero el flujo principal necesita partir desde el listado de repertorios.

## Que problema resuelve

Hace que `/app` se sienta como una herramienta diaria para preparar repertorios:

- muestra el listado de repertorios como primera seccion;
- permite buscar repertorios por nombre o descripcion;
- muestra conteos basicos de repertorios y canciones;
- permite iniciar un repertorio nuevo desde el dashboard;
- permite abrir un repertorio existente y cargarlo en el constructor;
- mantiene la seleccion de canciones como flujo para agregar canciones al repertorio abierto.

## Procedimiento paso a paso

1. Confirmar que el arbol de Git este limpio.
2. Reordenar `/app` para que el listado de repertorios sea la primera seccion.
3. Agregar boton `Nuevo repertorio` conectado al reset del formulario.
4. Agregar busqueda local sobre nombre y descripcion.
5. Reutilizar el estado de edicion como repertorio activo.
6. Marcar visualmente el repertorio abierto.
7. Mantener el constructor debajo del dashboard para editar nombre, descripcion, orden y canciones.
8. Validar `pnpm build`.
9. Probar la pantalla en navegador local con API y Atlas activos.
10. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd build
```

## Verificacion realizada

- `pnpm build` termina correctamente.
- `/app` compila como salida estatica de Astro.
- El dashboard queda como primera seccion de la pantalla.
- `/app` carga con `Atlas conectado`.
- Se puede crear una cancion temporal y agregarla a un repertorio nuevo.
- Se puede buscar, abrir y editar el repertorio desde el dashboard.
- Se puede eliminar el repertorio y la cancion temporal desde la UI.
- La prueba responsive movil no muestra overflow horizontal ni botones desbordados.
- No quedaron datos temporales.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-17-dashboard-repertorios.md`
- `README.md`

## Errores comunes

- Crear un segundo estado de repertorio activo cuando el estado de edicion ya representa ese flujo.
- Renderizar conteos solo al cargar datos y olvidar actualizarlos al crear o eliminar canciones.
- Dejar el formulario de repertorio en modo edicion despues de pulsar `Nuevo repertorio`.
- Usar busqueda que filtre solo por nombre y no por descripcion.

## Checklist de validacion

- [x] `pnpm build` termina correctamente.
- [x] `/app` carga con `Atlas conectado`.
- [x] El boton `Nuevo repertorio` limpia el constructor.
- [x] La busqueda filtra repertorios.
- [x] Abrir un repertorio lo marca como activo.
- [x] Se puede agregar una cancion al repertorio abierto y guardar.
- [x] No se agregaron secretos.

## Riesgos de seguridad

- La UI sigue sin autenticacion.
- Las acciones destructivas deben protegerse con roles cuando exista login.
- El backend debera validar autorizacion cuando se implemente usuarios reales.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando el usuario puede entrar a `/app`, ubicar un repertorio desde el dashboard, abrirlo, agregar o reordenar canciones y guardar cambios sin abandonar la pantalla.
