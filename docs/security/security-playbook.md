# Security Playbook

## 1. Principios de seguridad

- No subir secretos al repositorio.
- Validar entradas en backend.
- Mantener CORS explicito.
- No exponer stack traces en produccion.
- No implementar autenticacion sin estrategia aprobada.
- Evitar paquetes innecesarios.
- Auditar dependencias durante el proceso.

## 2. Gestion de secretos

- `.env` y archivos equivalentes no se versionan.
- `.env.example` contiene nombres de variables y valores ficticios.
- Credenciales reales se configuran localmente y en Render.
- Connection strings reales de MongoDB Atlas no se registran en logs ni documentacion.

## 3. Variables de entorno

Variables previstas:

- `PUBLIC_API_BASE_URL`
- `NODE_ENV`
- `PORT`
- `CORS_ORIGIN`
- `MONGODB_URI`
- `MONGODB_DB_NAME`

Todas las variables criticas del backend deberan validarse antes de iniciar la aplicacion.

## 4. Seguridad de MongoDB Atlas

- Usar usuario dedicado para la aplicacion.
- Separar base de datos de desarrollo y produccion.
- Revisar permisos minimos.
- Revisar IP access list.
- No usar credenciales compartidas entre proyectos.
- Documentar backup y restore.

## 5. Seguridad del backend NestJS

- Usar DTOs y validacion.
- Rechazar datos inesperados.
- Configurar CORS de forma explicita.
- No exponer stack traces en produccion.
- Preparar rate limiting para endpoints sensibles futuros.
- Registrar errores sin secretos.
- Proteger contra patrones de NoSQL injection.

## 6. Seguridad del frontend Astro

- No almacenar secretos.
- No renderizar HTML no confiable sin justificacion.
- Escapar contenido dinamico.
- Mantener variables publicas separadas de variables privadas.

## 7. Seguridad en Render

- Configurar variables desde Render.
- Revisar logs despues del despliegue.
- Revisar dominios y CORS.
- Usar HTTPS de la plataforma.
- Documentar build y start commands.

## 8. Politica de backups

- Definir frecuencia de backup antes de tener datos importantes.
- Probar restore antes de depender del sistema.
- Documentar comandos y responsables.

## 9. Procedimiento de restore

El procedimiento inicial se documenta en `docs/backup-restore/mongodb-backup-restore.md`.

## 10. Auditoria de dependencias

- Ejecutar `pnpm audit` cuando existan dependencias.
- Revisar dependencias de frontend y backend.
- Activar Dependabot cuando el repositorio este en GitHub.
- Evaluar CodeQL cuando exista codigo suficiente.

## 11. Revision antes de exponer publicamente

- CORS restringido.
- Variables revisadas.
- Logs revisados.
- Health check disponible.
- Sin stack traces.
- Dependencias auditadas.

## 12. Checklist antes de dominio propio

- HTTPS activo.
- CORS actualizado al dominio final.
- Variables de entorno revisadas.
- Logs sin secretos.
- Backups definidos.

## 13. Checklist antes de autenticacion

- Estrategia de sesiones o tokens aprobada.
- Cookies seguras si aplica.
- CSRF evaluado.
- Rate limiting definido.
- Flujo de email revisado.
- Recuperacion de cuenta disenada.

## 14. Respuesta ante incidente

1. Identificar alcance.
2. Revocar credenciales afectadas.
3. Revisar logs.
4. Restaurar desde backup si aplica.
5. Documentar causa raiz.
6. Crear acciones preventivas.
