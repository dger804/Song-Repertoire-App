# Skill Aprendida: Inicializacion De Astro En Monorepo

## Nombre de la skill

Inicializar Astro dentro de `apps/web` en un monorepo pnpm.

## Cuando se aplica

Cuando el proyecto ya tiene una estructura monorepo definida y se quiere crear el primer frontend real sin mezclar responsabilidades con backend o paquetes compartidos.

## Que problema resuelve

Permite pasar de una carpeta documentada a una aplicacion web ejecutable, manteniendo scripts reproducibles desde la raiz y sin introducir secretos ni dependencias fuera del frontend.

## Procedimiento paso a paso

1. Verificar que Git este limpio antes de iniciar.
2. Crear `apps/web/package.json` con nombre de workspace.
3. Agregar scripts locales `dev`, `build` y `preview`.
4. Agregar `astro.config.mjs` y `tsconfig.json`.
5. Crear una pagina inicial en `src/pages/index.astro`.
6. Instalar dependencias con `pnpm --filter @song-repertoire/web add astro typescript`.
7. Agregar scripts raiz para operar el frontend desde el monorepo.
8. Ejecutar `pnpm build`.
9. Actualizar README de la raiz y README del frontend.
10. Crear commit pequeno.

## Comandos usados

```bash
pnpm.cmd --filter @song-repertoire/web add astro typescript
pnpm.cmd build
git status --short
```

## Archivos modificados

- `package.json`
- `pnpm-lock.yaml`
- `apps/web/package.json`
- `apps/web/astro.config.mjs`
- `apps/web/tsconfig.json`
- `apps/web/src/pages/index.astro`
- `apps/web/README.md`
- `README.md`
- `docs/codex-skills/etapa-04-inicializacion-astro.md`

## Errores comunes

- Usar `npm` o `yarn` aunque el repo fija `pnpm`.
- Instalar dependencias en la raiz cuando pertenecen solo a `apps/web`.
- Inicializar Astro con archivos genericos sin ajustar el dominio del proyecto.
- Agregar secretos o variables privadas al frontend.
- Mezclar llamadas directas a MongoDB desde la aplicacion web.

## Checklist de validacion

- [ ] `apps/web/package.json` existe.
- [ ] Astro esta instalado en el workspace del frontend.
- [ ] `pnpm-lock.yaml` fue generado por pnpm.
- [ ] `pnpm build` termina correctamente.
- [ ] El frontend no contiene secretos.
- [ ] El frontend no accede directamente a MongoDB.

## Riesgos de seguridad

- Exponer valores privados usando variables `PUBLIC_*`.
- Implementar reglas de autorizacion en el frontend antes del backend.
- Confiar en validaciones de UI como unica barrera de seguridad.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes inicializar una app Astro dentro de un monorepo pnpm, dejar scripts operativos desde la raiz y validar el build sin romper los limites entre frontend, backend y paquetes compartidos.
