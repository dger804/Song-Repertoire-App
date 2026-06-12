# Local API Verification

## Objetivo

Comprobar localmente que la API funciona contra MongoDB Atlas sin versionar secretos.

## Requisitos

Crear `apps/api/.env` con valores reales de desarrollo:

```text
NODE_ENV=development
PORT=3000
CORS_ORIGIN=http://localhost:4321
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-host>/?retryWrites=true&w=majority
MONGODB_DB_NAME=song_repertoire_dev
```

Para probar la UI desde otro dispositivo por Tailscale, `CORS_ORIGIN` puede incluir varios origenes separados por coma:

```text
CORS_ORIGIN=http://localhost:4321,http://100.x.y.z:4321
```

No subir este archivo a Git.

## Levantar API

```bash
pnpm dev:api
```

## Verificar salud

PowerShell:

```powershell
Invoke-RestMethod -Uri http://127.0.0.1:3000/health
```

La respuesta esperada debe incluir:

```text
status: ok
database: connected
```

## Probar categorias

```powershell
$category = Invoke-RestMethod `
  -Method Post `
  -Uri http://127.0.0.1:3000/categories `
  -ContentType 'application/json' `
  -Body '{"name":"Adoracion","description":"Canciones de adoracion"}'

Invoke-RestMethod -Uri http://127.0.0.1:3000/categories
Invoke-RestMethod -Uri "http://127.0.0.1:3000/categories/$($category._id)"
```

## Probar canciones

```powershell
$song = Invoke-RestMethod `
  -Method Post `
  -Uri http://127.0.0.1:3000/songs `
  -ContentType 'application/json' `
  -Body (@{
    title = 'Cancion de prueba'
    lyrics = 'Letra de prueba'
    categoryIds = @($category._id)
  } | ConvertTo-Json)

Invoke-RestMethod -Uri http://127.0.0.1:3000/songs
Invoke-RestMethod -Uri "http://127.0.0.1:3000/songs/$($song._id)"
```

## Probar repertorios

```powershell
$repertoire = Invoke-RestMethod `
  -Method Post `
  -Uri http://127.0.0.1:3000/repertoires `
  -ContentType 'application/json' `
  -Body (@{
    name = 'Repertorio de prueba'
    description = 'Repertorio creado para verificar la API'
    songs = @(
      @{
        songId = $song._id
        order = 1
      }
    )
  } | ConvertTo-Json -Depth 4)

Invoke-RestMethod -Uri http://127.0.0.1:3000/repertoires
Invoke-RestMethod -Uri "http://127.0.0.1:3000/repertoires/$($repertoire._id)"
```

## Limpiar datos de prueba

```powershell
Invoke-RestMethod -Method Delete -Uri "http://127.0.0.1:3000/repertoires/$($repertoire._id)"
Invoke-RestMethod -Method Delete -Uri "http://127.0.0.1:3000/songs/$($song._id)"
Invoke-RestMethod -Method Delete -Uri "http://127.0.0.1:3000/categories/$($category._id)"
```

## Validaciones esperadas

- Campos extra deben ser rechazados por whitelist.
- IDs invalidos deben responder con error de validacion.
- La API no debe imprimir `MONGODB_URI` ni credenciales en logs.
