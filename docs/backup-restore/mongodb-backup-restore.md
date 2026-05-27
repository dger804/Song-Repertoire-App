# MongoDB Backup And Restore

## Objetivo

Definir una base para proteger datos de MongoDB desde etapas tempranas.

## Estrategia inicial

MongoDB Atlas sera la opcion preferida. Se revisaran las capacidades de backup disponibles segun el plan utilizado.

## Backups manuales

Cuando se apruebe el entorno y existan datos relevantes, se documentaran comandos con herramientas oficiales como `mongodump`.

No se deben guardar dumps con datos reales dentro del repositorio.

## Restore

Antes de depender de la aplicacion para datos importantes, se debe probar restauracion en una base de datos de prueba.

## Checklist

- [ ] Identificar base de datos de origen.
- [ ] Confirmar credenciales seguras.
- [ ] Crear backup.
- [ ] Guardar backup fuera del repositorio.
- [ ] Restaurar en base de prueba.
- [ ] Validar datos restaurados.
- [ ] Documentar fecha y resultado.

## Riesgos

- Creer que existe backup sin haber probado restore.
- Guardar backups con datos reales en Git.
- Usar credenciales con permisos excesivos.
- Restaurar sobre produccion por error.
