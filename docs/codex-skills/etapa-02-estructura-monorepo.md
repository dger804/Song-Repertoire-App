# Skill Aprendida: Definicion De Estructura Monorepo

## Nombre de la skill

Definir limites de monorepo para una aplicacion Astro + NestJS.

## Cuando se aplica

Cuando un proyecto tendra frontend, backend, paquetes compartidos, documentacion y despliegue en un mismo repositorio.

## Que problema resuelve

Evita mezclar responsabilidades entre frontend, backend y paquetes compartidos. Tambien prepara el proyecto para builds separados en Render.

## Procedimiento paso a paso

1. Confirmar que el repositorio este limpio.
2. Crear `apps/web` para frontend.
3. Crear `apps/api` para backend.
4. Crear `packages/shared` para tipos compartidos futuros.
5. Documentar responsabilidades de cada carpeta.
6. Confirmar que `pnpm-workspace.yaml` cubra `apps/*` y `packages/*`.
7. Documentar la estructura en `docs/architecture`.
8. Validar que no haya codigo prematuro.
9. Crear commit pequeno.

## Comandos usados

```bash
git status --short
mkdir -p apps/web apps/api packages/shared
git add .
git diff --cached --check
git commit -m "chore: define monorepo structure"
```

## Archivos modificados

- `apps/web/README.md`
- `apps/api/README.md`
- `packages/shared/README.md`
- `docs/architecture/002-monorepo-structure.md`
- `docs/codex-skills/etapa-01-inicializacion-repositorio.md`
- `docs/codex-skills/etapa-02-estructura-monorepo.md`
- `README.md`

## Errores comunes

- Inicializar frameworks antes de definir limites.
- Poner logica de backend en frontend.
- Compartir demasiado en `packages/shared`.
- Agregar dependencias sin necesidad.
- Crear una estructura acoplada al despliegue.

## Checklist de validacion

- [ ] Existe `apps/web`.
- [ ] Existe `apps/api`.
- [ ] Existe `packages/shared`.
- [ ] Cada carpeta tiene responsabilidad documentada.
- [ ] No hay dependencias nuevas.
- [ ] No hay codigo de aplicacion prematuro.
- [ ] El workspace de pnpm cubre las carpetas.

## Riesgos de seguridad

- Ubicar secretos en carpetas compartidas.
- Permitir que el frontend conozca configuracion privada del backend.
- Crear paquetes compartidos con logica sensible.

## Criterio para considerar la skill dominada

Puedes definir una estructura monorepo clara, reversible y preparada para crecimiento sin introducir frameworks ni dependencias antes de tiempo.
