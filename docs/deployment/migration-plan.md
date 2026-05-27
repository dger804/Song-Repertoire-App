# Migration Plan

## Punto de partida

El proyecto inicia con:

```text
Desarrollo local + Render + MongoDB Atlas
```

## Principios

- No depender de rutas absolutas.
- No depender de IPs locales.
- No depender de un equipo especifico.
- Usar variables de entorno.
- Mantener documentados comandos de build y start.
- Mantener backup y restore documentados.

## Opciones futuras

### 1. Render con mejores planes

Escalar servicios existentes dentro de Render cuando el trafico o la disponibilidad lo requieran.

### 2. Render + MongoDB Atlas dedicado

Separar cluster de produccion y mejorar plan de Atlas si los datos o la carga crecen.

### 3. Railway + MongoDB Atlas

Migrar frontend/backend manteniendo la misma base Atlas y actualizando variables.

### 4. DigitalOcean App Platform + MongoDB Atlas

Crear servicios equivalentes para web y API, configurar variables y dominios.

### 5. VPS con Docker Compose

Solo considerar si se requiere control de infraestructura. Requiere hardening, backups, actualizaciones y monitoreo.

### 6. Kubernetes

Solo considerar si el proyecto realmente justifica orquestacion compleja.

## Checklist de migracion

- [ ] Exportar variables actuales.
- [ ] Verificar backups.
- [ ] Crear servicios equivalentes.
- [ ] Configurar CORS.
- [ ] Actualizar URL publica de API.
- [ ] Probar health check.
- [ ] Ejecutar auditoria de dependencias.
- [ ] Revisar logs.
