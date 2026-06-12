# Skill Aprendida: Prueba Local Y Tailscale

## Nombre de la skill

Preparar la app local para probarla desde el PC y desde un dispositivo en la red privada.

## Cuando se aplica

Cuando la app ya tiene un flujo usable en `/app` y se necesita probar desde navegador local o desde un celular conectado por Tailscale.

## Que problema resuelve

Evita que el frontend apunte a `localhost` desde el celular y permite declarar varios origenes CORS sin abrir la API a cualquier sitio.

## Procedimiento paso a paso

1. Verificar que la API responde en `/health`.
2. Mantener secretos solo en `.env` local.
3. Permitir que `CORS_ORIGIN` acepte varios origenes separados por coma.
4. Dejar `PUBLIC_API_BASE_URL` vacio si se quiere inferir la API desde el host del navegador.
5. Iniciar la API en el puerto `3000`.
6. Iniciar Astro con `pnpm dev:web:network` para pruebas desde otro dispositivo.
7. Abrir `/app` desde `localhost` o desde la IP/MagicDNS de Tailscale.
8. Validar que la UI muestre `Atlas conectado`.

## Comandos usados

```bash
pnpm.cmd build
pnpm.cmd dev:web:network
```

## Verificacion realizada

- La API respondio `status: ok` y `database: connected`.
- `pnpm.cmd build` termino correctamente.
- El frontend compilo usando URL de API inferida cuando `PUBLIC_API_BASE_URL` queda vacio.
- La API compilo usando `corsOrigins` como lista.

## Archivos modificados

- `.env.example`
- `apps/api/src/config/environment.ts`
- `apps/api/src/main.ts`
- `apps/api/README.md`
- `package.json`
- `apps/web/src/pages/app.astro`
- `apps/web/README.md`
- `docs/playbooks/local-api-verification.md`
- `docs/playbooks/local-development-setup.md`
- `docs/codex-skills/etapa-15-prueba-local-tailscale.md`
- `README.md`

## Errores comunes

- Abrir la app desde el celular y mantener `PUBLIC_API_BASE_URL=http://localhost:3000`.
- Olvidar agregar el origen Tailscale a `CORS_ORIGIN`.
- Iniciar Astro solo en `localhost` y esperar que otro dispositivo pueda verlo.
- Exponer el servicio local fuera de una red privada.

## Checklist de validacion

- [x] `/health` responde contra Atlas.
- [x] `pnpm build` termina correctamente.
- [x] `CORS_ORIGIN` admite multiples origenes.
- [x] La UI puede inferir `http://<host>:3000`.
- [x] No se agregaron secretos.

## Riesgos de seguridad

- La app sigue sin autenticacion.
- No se debe usar `CORS_ORIGIN=*` en esta fase.
- Tailscale se usa como mecanismo de prueba privada, no como dependencia formal de produccion.

## Criterio para considerar la skill dominada

La skill se considera dominada cuando la app puede probarse localmente y queda preparada para abrirse desde un dispositivo Tailscale sin cambiar codigo ni exponer credenciales.
