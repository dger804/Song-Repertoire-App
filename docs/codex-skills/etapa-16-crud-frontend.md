# Skill Aprendida: CRUD Editable En Frontend

## Nombre de la skill

Convertir la pantalla local de Astro en una administracion CRUD para categorias, canciones y repertorios.

## Cuando se aplica

Cuando la API ya expone `POST`, `PATCH` y `DELETE`, y la UI solo permite crear registros.

## Que problema resuelve

Permite corregir datos desde la aplicacion sin tocar MongoDB ni usar comandos manuales:

- editar categorias;
- eliminar categorias;
- editar canciones y sus categorias;
- eliminar canciones;
- editar repertorios y su orden de canciones;
- eliminar repertorios.

## Procedimiento paso a paso

1. Verificar que el arbol de Git este limpio.
2. Confirmar los DTOs de update en la API.
3. Reutilizar los formularios existentes para modo creacion y modo edicion.
4. Agregar botones `Editar` y `Eliminar` a las filas.
5. Agregar botones `Cancelar edicion`.
6. Usar `PATCH` cuando exista un registro en edicion.
7. Usar `DELETE` con confirmacion antes de borrar.
8. Actualizar el estado local luego de cada operacion.
9. Renderizar de nuevo listas y seleccion de canciones.
10. Validar build completo.
11. Probar el flujo CRUD contra la API local y Atlas con datos temporales.
12. Limpiar los datos temporales.
13. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd build
```

## Verificacion realizada

- `/app` carga con `Atlas conectado`.
- Se puede crear una categoria.
- Se puede editar una categoria.
- Se puede crear una cancion con categoria.
- Se puede editar una cancion y sus categorias.
- Se puede crear un repertorio con canciones.
- Se puede editar un repertorio existente.
- Se puede eliminar repertorio, cancion y categoria con confirmacion inline.
- No quedan datos temporales.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-16-crud-frontend.md`
- `README.md`

## Errores comunes

- Olvidar guardar si el formulario esta en modo edicion.
- Resetear el estado de edicion antes de decidir si el feedback debe decir creado o actualizado.
- Dejar canciones seleccionadas apuntando a una cancion eliminada.
- Crear botones dentro de filas sin clases propias y heredar estilos incorrectos.

## Checklist de validacion

- [x] `pnpm build` termina correctamente.
- [x] El modo edicion cambia los textos de botones.
- [x] `PATCH` actualiza categorias, canciones y repertorios.
- [x] `DELETE` elimina categorias, canciones y repertorios.
- [x] La UI actualiza listas sin recargar la pagina.
- [x] No se agregaron secretos.

## Riesgos de seguridad

- La UI sigue sin autenticacion.
- Las acciones destructivas deben protegerse con roles cuando exista login.
- El backend sigue siendo la fuente real de autorizacion futura.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando el usuario puede crear, corregir y eliminar los tres recursos principales del MVP desde `/app`, manteniendo la base de datos limpia tras pruebas temporales.
