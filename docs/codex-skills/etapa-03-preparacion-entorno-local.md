# Skill Aprendida: Preparacion De Entorno Local

## Nombre de la skill

Preparar entorno local para monorepo Astro + NestJS + MongoDB Atlas.

## Cuando se aplica

Cuando se inicia un proyecto TypeScript con pnpm, frontend y backend separados, y MongoDB Atlas como base de datos de desarrollo.

## Que problema resuelve

Evita avanzar a frameworks sin comprobar herramientas base, gestor de paquetes, Git, estrategia de variables y base de datos.

## Procedimiento paso a paso

1. Verificar estado de Git.
2. Validar version de Node.js.
3. Validar npm.
4. Validar pnpm.
5. Resolver bloqueos de PowerShell usando shims `.cmd` antes de cambiar politicas.
6. Confirmar estrategia de MongoDB Atlas.
7. Documentar variables requeridas.
8. Confirmar que Docker no se usara sin aprobacion.
9. Documentar portabilidad de skills.
10. Crear commit pequeno.

## Comandos usados

```bash
node --version
npm.cmd --version
pnpm.cmd --version
git --version
git status --short
```

## Archivos modificados

- `docs/playbooks/local-development-setup.md`
- `docs/playbooks/codex-skills-portability.md`
- `docs/codex-skills/etapa-03-preparacion-entorno-local.md`
- `docs/architecture/001-runtime-environments.md`
- `README.md`

## Errores comunes

- Cambiar Execution Policy global sin necesidad.
- Instalar Docker por costumbre aunque Atlas ya fue aprobado.
- Crear `.env` real y subirlo.
- Usar la misma base de datos para desarrollo y produccion.
- Inicializar Astro o NestJS antes de completar la preparacion local.

## Checklist de validacion

- [ ] Node.js LTS validado.
- [ ] npm validado.
- [ ] pnpm validado.
- [ ] Git validado.
- [ ] MongoDB Atlas definido como estrategia de desarrollo.
- [ ] No hay secretos versionados.
- [ ] Docker no fue introducido.
- [ ] Portabilidad de skills documentada.

## Riesgos de seguridad

- Filtrar connection strings de Atlas.
- Configurar IP access list de Atlas demasiado amplia.
- Registrar secretos en logs.
- Copiar skills globales con informacion sensible de otros proyectos.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando puedes preparar y documentar un entorno local reproducible sin instalar herramientas innecesarias, sin secretos y sin adelantar etapas de implementacion.
