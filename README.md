# Song Repertoire App

Aplicacion web personal para gestionar canciones, categorias y repertorios musicales.

## Objetivo

Construir una aplicacion moderna, segura, mantenible y portable usando:

- Frontend: Astro + TypeScript.
- Backend: NestJS + TypeScript.
- Base de datos: MongoDB + Mongoose.
- Desarrollo local: Node.js, pnpm, Git y MongoDB Atlas desde el inicio.
- Despliegue futuro: por definir; Render queda documentado como opcion inicial evaluada.
- Control de versiones: Git + GitHub.

## Alcance inicial

El MVP inicial cubrira:

- CRUD de canciones.
- Letra de canciones.
- Categorias.
- Repertorios.
- Relacion canciones-repertorios.
- Orden de canciones dentro de repertorios.
- Roles base para usuarios futuros.

Queda fuera del MVP inicial:

- login y autenticacion;
- registro por email;
- recuperacion de contrasena;
- repertorios privados por usuario;
- dominio propio;
- exportacion PDF;
- modo presentacion;
- acordes y transposicion.

## Restricciones de esta fase

- No usar NAS.
- No usar Tailscale como dependencia del proyecto sin una decision documentada.
- No usar Hostinger como hosting principal.
- No usar PHP ni MySQL como stack principal.
- No usar Docker Compose como estrategia principal de produccion en Render.
- No exponer servicios locales a internet.
- No subir secretos, credenciales ni tokens al repositorio.
- No implementar autenticacion hasta aprobar una estrategia de seguridad.
- No aplicar workarounds sin autorizacion explicita.

## Estructura prevista

```text
song-repertoire-app/
  apps/
    web/
    api/
  packages/
    shared/
  docs/
    architecture/
    decisions/
    security/
    playbooks/
    codex-skills/
    deployment/
    backup-restore/
  scripts/
  .github/
    workflows/
  .env.example
  .gitignore
  README.md
  render.yaml
  package.json
  pnpm-workspace.yaml
```

## Documentacion inicial

- Arquitectura: `docs/architecture/000-system-overview.md`
- Entornos: `docs/architecture/001-runtime-environments.md`
- Estructura monorepo: `docs/architecture/002-monorepo-structure.md`
- Roles y dominio: `docs/architecture/003-access-control-and-domain-model.md`
- Decisiones: `docs/decisions/`
- Seguridad: `docs/security/security-playbook.md`
- Render: `docs/deployment/render-deployment.md`
- Migracion futura: `docs/deployment/migration-plan.md`
- Backup y restore: `docs/backup-restore/mongodb-backup-restore.md`
- Preparacion local: `docs/playbooks/local-development-setup.md`
- Portabilidad de skills: `docs/playbooks/codex-skills-portability.md`
- Skills aprendidas: `docs/codex-skills/`

## Estado

Etapa actual completada: Etapa 7 - Roles compartidos y estrategia local-first con Atlas.
