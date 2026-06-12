# Skill Aprendida: Constructor De Repertorios En Frontend

## Nombre de la skill

Conectar Astro con la API local para crear repertorios desde la UI.

## Cuando se aplica

Cuando el backend ya expone CRUD de canciones y repertorios, y el MVP necesita una primera pantalla usable para armar repertorios.

## Que problema resuelve

Permite validar el flujo principal desde el navegador:

- crear canciones;
- agregar canciones existentes al repertorio;
- ordenar canciones;
- crear repertorios persistidos en Atlas.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Reemplazar la pantalla estatica `/app` por una vista conectada a API.
3. Usar `PUBLIC_API_BASE_URL` para apuntar al backend.
4. Cargar `/health`, `/songs` y `/repertoires`.
5. Implementar creacion rapida de canciones.
6. Implementar seleccion y orden de canciones.
7. Implementar creacion de repertorios.
8. Validar build web y build completo.
9. Probar la UI en navegador contra Atlas con datos temporales.
10. Limpiar los datos temporales.
11. Crear commit pequeno y hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd build:web
pnpm.cmd build
```

## Verificacion realizada

- `/app` cargo en `localhost:4321`.
- La UI mostro `Atlas conectado`.
- Se creo una cancion temporal desde la UI.
- La cancion quedo seleccionada en el repertorio.
- Se creo un repertorio temporal desde la UI.
- Se verifico que el repertorio apareciera en pantalla.
- Los datos temporales fueron eliminados desde la API.

## Archivos modificados

- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/codex-skills/etapa-13-constructor-repertorios-frontend.md`
- `README.md`

## Errores comunes

- Abrir la UI desde `127.0.0.1` cuando CORS permite `localhost`.
- Olvidar que la pantalla usa `PUBLIC_API_BASE_URL`.
- Crear repertorios sin ordenar canciones.
- Dejar datos temporales de prueba en Atlas.

## Checklist de validacion

- [ ] `pnpm build:web` termina correctamente.
- [ ] `pnpm build` termina correctamente.
- [ ] `/app` carga canciones y repertorios desde la API.
- [ ] Se puede crear una cancion desde la UI.
- [ ] Se puede crear un repertorio con canciones seleccionadas.
- [ ] No se agregaron secretos.

## Riesgos de seguridad

- La UI no implementa autenticacion.
- La autorizacion real debe vivir en backend antes de usar datos reales sensibles.
- CORS debe mantenerse limitado al origen local aprobado.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando la pantalla local puede ejecutar el flujo principal del MVP contra la API y Atlas sin depender de acceso directo a MongoDB desde el frontend.
