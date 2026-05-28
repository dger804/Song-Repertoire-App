# Skill Aprendida: Inicializacion De Repositorio Y Documentacion Base

## Nombre de la skill

Inicializar un repositorio profesional con documentacion base antes de escribir codigo.

## Cuando se aplica

Cuando se inicia un proyecto nuevo y se necesita dejar claras las decisiones, restricciones, seguridad y estructura de trabajo antes de implementar.

## Que problema resuelve

Evita comenzar escribiendo codigo sin contexto, sin criterios de aceptacion y sin documentar riesgos o decisiones importantes.

## Procedimiento paso a paso

1. Verificar que el workspace este limpio.
2. Inicializar Git.
3. Crear README del proyecto.
4. Crear `.gitignore` y `.gitattributes`.
5. Crear `.env.example` sin secretos.
6. Crear documentacion inicial.
7. Crear ADRs iniciales.
8. Crear playbook de seguridad.
9. Validar que no existan secretos reales.
10. Crear un commit pequeno.

## Comandos usados

```bash
git init
git status --short
git add .
git diff --cached --check
git commit -m "docs: define local render architecture"
```

## Archivos modificados

- `README.md`
- `.env.example`
- `.gitignore`
- `.gitattributes`
- `package.json`
- `pnpm-workspace.yaml`
- `render.yaml`
- `docs/architecture/*`
- `docs/decisions/*`
- `docs/security/security-playbook.md`
- `docs/deployment/*`
- `docs/backup-restore/*`
- `docs/codex-skills/*`

## Errores comunes

- Subir `.env` real.
- Crear codigo antes de cerrar decisiones base.
- No documentar restricciones.
- No crear playbook de seguridad desde el inicio.
- No verificar el diff antes del commit.

## Checklist de validacion

- [ ] Git inicializado.
- [ ] `.gitignore` evita secretos y artefactos.
- [ ] `.env.example` no contiene secretos.
- [ ] Documentacion base creada.
- [ ] ADRs iniciales creados.
- [ ] Playbook de seguridad creado.
- [ ] Commit pequeno creado.

## Riesgos de seguridad

- Filtrar credenciales.
- Documentar connection strings reales.
- Mezclar valores locales con configuracion versionada.

## Criterio para considerar la skill dominada

Puedes iniciar un repositorio con trazabilidad, seguridad basica y decisiones documentadas sin escribir codigo de aplicacion prematuro.
