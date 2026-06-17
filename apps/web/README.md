# Web App

Frontend de la aplicacion.

## Responsabilidad

- Implementar la interfaz de usuario con Astro + TypeScript.
- Consumir la API NestJS mediante HTTP.
- Mantener componentes, vistas y servicios del frontend separados.
- No contener secretos ni variables privadas.
- Usar solo variables publicas seguras, como `PUBLIC_API_BASE_URL`.

## Fuera de alcance

- Acceso directo a MongoDB.
- Logica de negocio propia del backend.
- Validaciones de seguridad exclusivas del servidor.
- Autenticacion hasta que exista estrategia aprobada.

## Estado

La aplicacion Astro ya tiene landing publica y una pantalla local de trabajo en `/app`.

## Stack actual

- Astro.
- TypeScript.
- Salida estatica por defecto.
- Integracion HTTP con la API usando `PUBLIC_API_BASE_URL`.
- Inferencia local de API cuando `PUBLIC_API_BASE_URL` queda vacio.

## Pantallas actuales

- `/`: landing promocional.
- `/app`: dashboard local de repertorios.

La pantalla `/app` permite:

- ver un dashboard con listado y conteos de repertorios/canciones;
- ver repertorios y canciones en formato de tarjetas;
- agregar canciones, editar o eliminar repertorios desde cada tarjeta;
- buscar repertorios por nombre o descripcion;
- iniciar un nuevo repertorio desde el dashboard;
- abrir un repertorio existente para editarlo;
- listar categorias desde la API;
- crear categorias;
- editar y eliminar categorias;
- listar canciones desde la API;
- buscar canciones por titulo o letra;
- filtrar canciones por categoria;
- ocultar canciones ya agregadas al repertorio abierto;
- crear canciones con categorias asociadas;
- editar y eliminar canciones;
- seleccionar canciones existentes;
- ordenar canciones dentro de un repertorio;
- reordenar canciones seleccionadas arrastrando el asa visual de la tarjeta;
- mantener botones Subir/Bajar como fallback de ordenamiento;
- crear etiquetas internas dentro del repertorio;
- asignar etiquetas internas a canciones del repertorio;
- crear repertorios en MongoDB Atlas mediante la API;
- editar y eliminar repertorios.

## Comandos

Desde la raiz del repositorio:

```bash
pnpm dev:web
pnpm build
pnpm preview:web
```

Para probar desde otro dispositivo en la red privada, iniciar el frontend con host publico local:

```bash
pnpm dev:web:network
```

Si `PUBLIC_API_BASE_URL` queda vacio, `/app` usa el mismo host del navegador y puerto `3000` para llamar la API. Por ejemplo, si se abre `http://100.x.y.z:4321/app`, la UI llamara `http://100.x.y.z:3000`.
