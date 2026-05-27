# ADR-0001: Monorepo

## Estado

Aprobado.

## Contexto

El producto tendra frontend, backend, tipos compartidos futuros, documentacion, scripts y configuracion de despliegue. Estos elementos evolucionan juntos.

## Decision

Usar un monorepo con `pnpm`.

Estructura base:

```text
apps/web
apps/api
packages/shared
docs
scripts
```

## Consecuencias positivas

- Mantiene frontend, backend y documentacion en un solo historial.
- Facilita commits pequenos por etapa.
- Permite compartir tipos en el futuro.
- Simplifica trazabilidad entre API y UI.

## Consecuencias negativas

- Requiere configurar correctamente workspaces.
- Los comandos de Render deben apuntar a la app correcta.
