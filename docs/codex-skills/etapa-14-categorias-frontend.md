# Skill Aprendida: Categorias En Frontend

## Nombre de la skill

Integrar categorias de la API en la pantalla local de Astro.

## Cuando se aplica

Cuando el backend ya expone CRUD de categorias y las canciones aceptan `categoryIds`, pero la UI todavia no permite crear categorias ni asociarlas a canciones.

## Que problema resuelve

Permite avanzar el MVP sin salir del navegador:

- crear categorias desde `/app`;
- listar categorias existentes;
- seleccionar categorias al crear canciones;
- mostrar las categorias asociadas a cada cancion.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Confirmar endpoints disponibles en la API.
3. Cargar `/categories` junto con `/health`, `/songs` y `/repertoires`.
4. Agregar estado local para categorias.
5. Crear formulario de categorias en `/app`.
6. Renderizar checkboxes de categorias en el formulario de canciones.
7. Enviar `categoryIds` al crear canciones.
8. Mostrar nombres de categorias en la lista de canciones.
9. Validar build web y build completo.
10. Probar la UI contra la API local y Atlas con datos temporales.
11. Limpiar datos temporales.
12. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd build:web
pnpm.cmd build
```

## Verificacion realizada

- `/app` carga con `Atlas conectado`.
- Se puede crear una categoria desde la UI.
- La categoria aparece en la lista de categorias.
- La categoria aparece como opcion al crear canciones.
- Se puede crear una cancion con esa categoria seleccionada.
- La cancion muestra la categoria en el listado.
- Se puede crear un repertorio con esa cancion.
- Los datos temporales fueron eliminados desde la API.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-14-categorias-frontend.md`
- `README.md`

## Errores comunes

- Olvidar recargar categorias luego de crear una nueva.
- Mostrar solo IDs de categorias en vez de nombres.
- Enviar `categoryIds` como texto separado por comas en vez de arreglo.
- Probar desde `127.0.0.1` cuando CORS esta limitado a `localhost`.

## Checklist de validacion

- [x] `pnpm build:web` termina correctamente.
- [x] `pnpm build` termina correctamente.
- [x] `/app` carga categorias desde la API.
- [x] Se puede crear una categoria desde la UI.
- [x] Se puede crear una cancion con categorias seleccionadas.
- [x] Se puede crear un repertorio con la cancion categorizada.
- [x] No se agregaron secretos.

## Riesgos de seguridad

- La UI sigue sin autenticacion.
- La autorizacion para crear categorias debe quedar en backend cuando se implemente login.
- Los roles de supervisor, moderador y usuario regular siguen documentados, no aplicados.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando una categoria creada desde la UI puede asociarse a una cancion y verse reflejada en la lista de canciones sin tocar MongoDB directamente.
