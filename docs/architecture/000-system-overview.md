# System Overview

## Objetivo

La aplicacion debe gestionar canciones, categorias y repertorios musicales con una arquitectura moderna, portable y preparada para Render.

## Arquitectura aprobada

```text
Local development
  -> Astro web app
  -> NestJS REST API
  -> MongoDB Atlas

Render
  -> Astro Static Site
  -> NestJS Web Service
  -> MongoDB Atlas
```

## Componentes

### Frontend

- Astro + TypeScript.
- Aplicacion responsive.
- Consumo de API REST.
- Sin secretos.
- Variables publicas solo para valores seguros.

### Backend

- NestJS + TypeScript.
- API REST inicial.
- Modulos, controladores, servicios y DTOs.
- Validacion de entrada.
- Manejo centralizado de errores.
- CORS explicito.
- Variables de entorno validadas.

### Base de datos

- MongoDB con Mongoose.
- MongoDB Atlas como opcion preferida desde desarrollo.
- Bases de datos separadas para desarrollo y produccion.
- Conexion mediante variables de entorno.

## Alcance funcional inicial

- Canciones.
- Categorias.
- Repertorios.
- Relacion canciones-repertorios.
- Orden dentro de repertorios.

## Fuera del alcance inicial

- Autenticacion.
- Usuarios.
- Login.
- Confirmacion por email.
- Dominio propio.
- Exposicion de servicios locales.
- NAS, Tailscale y Hostinger.

## Principio de portabilidad

El proyecto no debe depender de rutas absolutas, IPs locales, equipo de desarrollo, NAS, Tailscale ni configuraciones manuales sin documentar.
