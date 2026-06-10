# Skill Aprendida: Roles Compartidos Y Atlas Local-First

## Nombre de la skill

Definir roles compartidos y ajustar la estrategia local-first con MongoDB Atlas.

## Cuando se aplica

Cuando la aplicacion necesita contemplar permisos de usuario antes de implementar login, y el despliegue publico aun no esta decidido.

## Que problema resuelve

Evita construir CRUD sin modelo de acceso y evita confundir la eleccion de base de datos con la eleccion de hosting.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Confirmar que MongoDB Atlas ya es la estrategia de base de datos.
3. Actualizar decisiones para dejar Render como opcion evaluada, no compromiso inmediato.
4. Crear contratos compartidos de roles en `packages/shared`.
5. Definir permisos base por rol.
6. Documentar modelo de dominio inicial.
7. Mantener login y autenticacion fuera del alcance inmediato.
8. Ejecutar build de shared y build completo.
9. Crear commit pequeno.
10. Hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd install
pnpm.cmd build:shared
pnpm.cmd build
git status --short
```

## Archivos modificados

- `package.json`
- `pnpm-lock.yaml`
- `packages/shared/package.json`
- `packages/shared/tsconfig.json`
- `packages/shared/src/index.ts`
- `packages/shared/README.md`
- `docs/architecture/000-system-overview.md`
- `docs/architecture/003-access-control-and-domain-model.md`
- `docs/decisions/ADR-0003-render-first-deployment.md`
- `docs/decisions/ADR-0005-local-first-atlas-and-roles.md`
- `README.md`

## Errores comunes

- Implementar login antes de aprobar autenticacion.
- Usar roles solo en frontend y asumir que eso protege datos.
- Tratar Tailscale como despliegue.
- Guardar connection strings reales de Atlas en Git.
- Agregar abstracciones grandes al paquete shared.

## Checklist de validacion

- [ ] `packages/shared` compila.
- [ ] `pnpm build` termina correctamente.
- [ ] Los roles iniciales estan documentados.
- [ ] Render queda como opcion evaluada, no prioridad obligatoria.
- [ ] No se agregaron secretos.

## Riesgos de seguridad

- Crear usuarios sin estrategia de bootstrap.
- Permitir que moderadores administren usuarios por error.
- Usar una allowlist de Atlas demasiado amplia.
- Exponer API local sin CORS controlado.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes preparar roles y contratos compartidos sin implementar autenticacion prematura ni acoplar el proyecto a una plataforma de despliegue aun no elegida.
