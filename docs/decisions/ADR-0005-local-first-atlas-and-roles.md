# ADR-0005: Desarrollo Local Primero Con MongoDB Atlas Y Roles

## Estado

Aprobado.

## Contexto

El proyecto necesita avanzar como aplicacion local antes de decidir plataforma de despliegue publico. El usuario cuenta con Tailscale para pruebas personales desde celular, pero Tailscale no debe convertirse automaticamente en estrategia productiva ni en dependencia del proyecto.

Tambien se requiere que la aplicacion contemple roles desde el inicio, aunque el login y la autenticacion no se implementen todavia.

## Decision

Priorizar desarrollo local primero:

```text
Equipo local
  -> Astro web app
  -> NestJS REST API
  -> MongoDB Atlas
```

MongoDB Atlas sera la base de datos externa para desarrollo y futuros despliegues, con bases separadas por entorno.

El despliegue publico queda por definir. Render permanece como opcion evaluada, no como compromiso inmediato.

## Roles iniciales

La aplicacion contemplara estos roles:

- `owner`: control completo del sistema.
- `supervisor`: puede crear y administrar usuarios, canciones, categorias y repertorios.
- `moderator`: puede administrar contenido musical, pero no usuarios.
- `regular`: puede consultar la biblioteca y repertorios permitidos.

## Reglas

- No implementar login hasta aprobar la estrategia de autenticacion.
- No crear usuarios reales sin modelo de seguridad y almacenamiento definido.
- No versionar connection strings de Atlas.
- No abrir puertos del router.
- No tratar Tailscale como despliegue productivo.
- Documentar cualquier prueba desde celular antes de convertirla en flujo recomendado.

## Consecuencias

- El modelo de dominio debe incluir roles desde temprano.
- `packages/shared` puede alojar contratos pequenos compartidos entre frontend y backend.
- La API debera validar permisos en backend cuando existan endpoints de escritura.
- La UI puede mostrar superficies futuras de roles sin simular seguridad real.

## Riesgos

- Confundir roles visuales con autorizacion real.
- Configurar CORS de forma amplia para facilitar pruebas locales.
- Usar una base de datos de desarrollo con permisos excesivos.
- Exponer datos locales durante pruebas desde otros dispositivos.
