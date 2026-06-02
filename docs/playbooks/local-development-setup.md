# Local Development Setup

## Objetivo

Preparar el entorno local para desarrollar el proyecto sin acoplarlo al equipo, sin exponer servicios locales a internet y sin subir secretos al repositorio.

## Herramientas requeridas

- Node.js LTS.
- npm incluido con Node.js.
- pnpm mediante Corepack.
- Git.
- Cuenta de MongoDB Atlas.
- Editor de codigo.

## Versiones validadas en este equipo

Validado el 2026-06-02:

```text
Node.js: v24.16.0
npm: 11.13.0
pnpm: 10.0.0
Git: 2.54.0.windows.1
```

Node.js `v24.16.0` coincide con la version LTS publicada por Node.js al momento de esta validacion.

## Comandos de validacion

Ejecutar desde la raiz del repositorio:

```bash
node --version
npm.cmd --version
pnpm.cmd --version
git --version
git status --short
```

En Windows PowerShell puede aparecer un bloqueo para `npm.ps1` o `pnpm.ps1` por Execution Policy. En ese caso, usar los shims `.cmd`:

```bash
npm.cmd --version
pnpm.cmd --version
```

No cambiar la Execution Policy global sin entender el impacto. Si se decide cambiarla, debe documentarse el motivo y preferir alcance `CurrentUser`.

## pnpm y Corepack

El repositorio fija el gestor con:

```json
"packageManager": "pnpm@10.0.0"
```

Corepack puede descargar esa version la primera vez que se ejecuta `pnpm.cmd`.

## MongoDB Atlas para desarrollo

La estrategia aprobada es usar MongoDB Atlas desde el inicio.

Variables previstas:

```text
MONGODB_URI=
MONGODB_DB_NAME=song_repertoire_dev
```

Reglas:

- No guardar connection strings reales en Git.
- Usar una base de datos de desarrollo separada de produccion.
- Usar un usuario dedicado con permisos minimos.
- Revisar IP access list en Atlas.
- Documentar cualquier excepcion.

## Archivo local de entorno

Cuando exista backend, se creara un archivo local no versionado, por ejemplo:

```text
apps/api/.env
```

Ese archivo debe basarse en `.env.example`, pero con valores reales solo en la maquina local o en Render.

## Docker

Docker no se usa en esta etapa.

Solo se evaluara Docker para MongoDB local si MongoDB Atlas no resulta viable para desarrollo, y requerira aprobacion explicita.

## Validacion de la etapa

- Node.js LTS disponible.
- npm disponible.
- pnpm disponible mediante `pnpm.cmd`.
- Git disponible.
- No se crearon secretos.
- MongoDB Atlas queda definido como estrategia local.
- Docker queda fuera de alcance por ahora.
