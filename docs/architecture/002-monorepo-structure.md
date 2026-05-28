# Monorepo Structure

## Objetivo

Definir los limites de carpetas del monorepo antes de inicializar las aplicaciones.

## Estructura

```text
song-repertoire-app/
  apps/
    web/
      README.md
    api/
      README.md
  packages/
    shared/
      README.md
  docs/
  scripts/
  .github/
  package.json
  pnpm-workspace.yaml
  render.yaml
```

## Limites

### `apps/web`

Frontend Astro. No accede directamente a MongoDB ni contiene secretos.

### `apps/api`

Backend NestJS. Expone API REST, valida entradas y accede a MongoDB mediante Mongoose.

### `packages/shared`

Espacio futuro para tipos compartidos. No debe usarse para logica de negocio ni crecer sin necesidad real.

### `docs`

Documentacion tecnica, decisiones, seguridad, despliegue, backup/restore y skills aprendidas.

### `scripts`

Scripts operativos o de validacion. No debe contener secretos.

## Reglas de evolucion

- Inicializar Astro solo en la etapa correspondiente.
- Inicializar NestJS solo en la etapa correspondiente.
- No agregar dependencias hasta que exista una razon clara.
- Mantener commits pequenos por etapa.
- Documentar decisiones arquitectonicas con ADR.

## Validacion

La estructura es valida si:

- `pnpm-workspace.yaml` incluye `apps/*` y `packages/*`.
- Las carpetas principales existen.
- Cada carpeta inicial tiene una responsabilidad documentada.
- No hay codigo de aplicacion prematuro.
