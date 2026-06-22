# ADR-0008: Detalle De Cancion Con ChordSheetJS Y Multimedia

## Estado

Aprobado.

## Contexto

El MVP ya permite crear canciones, agregarlas a repertorios y consultar letra simple. El siguiente paso necesita abrir cada cancion en una pagina propia y mostrar contenido musical mas rico sin decidir todavia el sistema final de partituras.

ChordSheetJS permite parsear y formatear letras con acordes en formatos comunes como ChordPro y acordes encima de la letra. Esto cubre el primer hito visual de canciones con acordes sin construir un renderer propio.

## Decision

`Song` agrega campos opcionales:

- `chordSheet`
- `youtubeUrl`
- `sheetMusicUrl`

`lyrics` se mantiene como letra simple y respaldo. La pagina `/song/?id=<songId>` carga la cancion desde la API, renderiza `chordSheet` con ChordSheetJS cuando existe y usa `lyrics` como fallback. El video de YouTube y la partitura se muestran solo si sus URLs existen y son URLs HTTP/HTTPS validas.

El sistema definitivo de partituras queda pendiente. `sheetMusicUrl` es un puente simple para probar el flujo visual con PDF, imagen u otro recurso embebible.

## Consecuencias

- Las tarjetas de canciones pueden abrir una pagina dedicada de lectura.
- El formulario de canciones ya captura letra con acordes, video y partitura.
- La exportacion de texto de cancion prefiere `chordSheet` y conserva `lyrics` como fallback.
- La busqueda de canciones incluye el texto con acordes.
- El frontend escapa el contenido antes de pasarlo al formatter HTML para evitar renderizar HTML pegado por usuarios.

## Riesgos

- ChordSheetJS no resuelve todavia transposicion, edicion visual avanzada ni sistema final de partituras.
- `sheetMusicUrl` puede apuntar a recursos que el navegador no permita embeber; por eso se conserva el enlace externo.
- Antes de distribucion publica o comercial se debe revisar la licencia de ChordSheetJS y su impacto en el proyecto.
