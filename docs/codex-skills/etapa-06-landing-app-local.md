# Skill Aprendida: Landing Promocional Y App Local Inicial

## Nombre de la skill

Crear una entrada publica promocional y una primera pantalla de app local en Astro.

## Cuando se aplica

Cuando el proyecto necesita probarse localmente antes de decidir despliegue publico y no se quiere abrir directamente en login.

## Que problema resuelve

Separa la primera experiencia del usuario en dos superficies claras:

- `/`: landing promocional publica.
- `/app`: espacio inicial de producto local.

Esto evita introducir autenticacion prematura y permite validar la navegacion principal antes de construir CRUD o persistencia.

## Procedimiento paso a paso

1. Confirmar que el proyecto esta limpio.
2. Revisar restricciones actuales de despliegue y red.
3. Definir `/` como landing promocional.
4. Crear `/app` como pantalla local inicial sin login.
5. Mantener el contenido alineado con el dominio musical.
6. Documentar que el despliegue publico queda por definir.
7. Documentar que Tailscale requiere decision explicita antes de usarse como dependencia.
8. Ejecutar `pnpm build`.
9. Crear commit pequeno.
10. Hacer push si el hito funciona.

## Comandos usados

```bash
pnpm.cmd build
git status --short
```

## Archivos modificados

- `apps/web/src/pages/index.astro`
- `apps/web/src/pages/app.astro`
- `README.md`
- `docs/architecture/001-runtime-environments.md`
- `docs/codex-skills/etapa-06-landing-app-local.md`

## Errores comunes

- Crear login antes de aprobar estrategia de autenticacion.
- Tratar Tailscale como despliegue productivo.
- Cambiar la estrategia de hosting sin documentar la decision.
- Exponer la API local a otros dispositivos sin revisar CORS y secretos.

## Checklist de validacion

- [ ] `/` muestra una landing promocional.
- [ ] `/app` muestra la pantalla local inicial.
- [ ] No existe login obligatorio.
- [ ] `pnpm build` termina correctamente.
- [ ] La documentacion no trata Tailscale como estrategia aprobada.

## Riesgos de seguridad

- Abrir la app local a dispositivos no controlados.
- Configurar `CORS_ORIGIN` de forma demasiado amplia.
- Probar desde el celular usando datos sensibles antes de tener autenticacion.
- Confundir acceso por VPN privada con despliegue seguro.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes crear una primera experiencia local clara, con landing publica y app interna inicial, sin introducir login ni decisiones de red no aprobadas.
