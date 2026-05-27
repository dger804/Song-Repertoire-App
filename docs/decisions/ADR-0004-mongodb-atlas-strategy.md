# ADR-0004: Estrategia MongoDB Atlas

## Estado

Aprobado.

## Contexto

Se prefiere usar MongoDB Atlas desde desarrollo para reducir diferencias con produccion en Render.

## Decision

Usar MongoDB Atlas desde el inicio, con bases de datos separadas por entorno:

```text
song_repertoire_dev
song_repertoire_prod
```

La aplicacion usara variables de entorno:

```text
MONGODB_URI
MONGODB_DB_NAME
```

## Alternativa de contingencia

Si Atlas no resulta viable para desarrollo, se evaluara Docker solo para MongoDB local con aprobacion explicita.

## Seguridad

- No versionar connection strings reales.
- Usar usuarios de base de datos con permisos minimos.
- Revisar IP access list.
- Documentar backup y restore.
