# Skill Aprendida: Arquitectura Portable Con Astro, NestJS, MongoDB Atlas Y Render

## Nombre de la skill

Arquitectura portable para aplicacion TypeScript con Render y MongoDB Atlas.

## Cuando se aplica

Cuando se quiere iniciar una aplicacion web moderna con frontend y backend separados, despliegue gestionado en Render y base de datos MongoDB Atlas.

## Que problema resuelve

Evita acoplar el proyecto a infraestructura local, NAS, Tailscale, Hostinger o rutas absolutas. Permite empezar localmente y desplegar en una plataforma gestionada con posibilidad de migracion futura.

## Procedimiento paso a paso

1. Definir alcance inicial sin autenticacion si no existe estrategia de seguridad.
2. Aprobar stack frontend, backend y base de datos.
3. Elegir monorepo y gestor de paquetes.
4. Definir entornos: local, Render y futuro.
5. Documentar decisiones con ADRs.
6. Crear playbook de seguridad.
7. Definir estrategia de MongoDB Atlas.
8. Documentar migracion futura.
9. Documentar backup y restore.

## Comandos usados

Durante la etapa de definicion no se ejecutaron comandos de aplicacion. La documentacion se materializa en la etapa de inicializacion.

## Archivos modificados

La skill se documenta en `docs/codex-skills/etapa-00-arquitectura-local-render.md`.

## Errores comunes

- Implementar autenticacion demasiado pronto.
- Subir `.env` real.
- Usar CORS abierto en produccion.
- Acoplar URLs a localhost.
- Asumir capacidades de Render sin documentarlas.
- Usar la misma base de datos para desarrollo y produccion.

## Checklist de validacion

- [ ] Monorepo aprobado.
- [ ] pnpm aprobado.
- [ ] Astro aprobado.
- [ ] NestJS aprobado.
- [ ] MongoDB Atlas aprobado.
- [ ] Render aprobado.
- [ ] NAS, Tailscale y Hostinger fuera de alcance.
- [ ] Autenticacion fuera del MVP inicial.
- [ ] Seguridad documentada.
- [ ] Migracion futura documentada.

## Riesgos de seguridad

- Exponer secretos.
- Configurar CORS de forma permisiva.
- Permitir accesos amplios en Atlas.
- No probar restore.
- Exponer stack traces.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes definir una arquitectura portable, explicar sus decisiones, documentar riesgos y preparar el repositorio sin generar codigo prematuro ni secretos.
