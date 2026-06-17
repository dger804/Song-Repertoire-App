# ADR-0006: Modelo De Cancion Letra Primero

## Estado

Aprobado.

## Contexto

La aplicacion necesita trabajar ya con canciones dentro de repertorios, pero la representacion final de acordes sobre la letra aun no esta decidida. El objetivo futuro es usar un repositorio o renderer que permita pintar los acordes en su posicion correcta dentro de la cancion.

Agregar campos o sintaxis de acordes demasiado pronto puede producir migraciones innecesarias y acoplar el MVP a un formato que tal vez no sea el definitivo.

## Decision

Durante el MVP, `Song` mantiene:

- `title`
- `author`
- `lyrics`
- `notes`
- `categoryIds`

`lyrics` es texto plano de letra. `author` y `notes` son metadata editorial simple: sirven para identificar autoria y registrar observaciones libres, pero no representan acordes, tono, transposicion ni estructura musical.

No se agregan campos de acordes, transposicion, tono, bloques musicales ni metadata de presentacion hasta elegir una estrategia dedicada.

## Consecuencias

- La UI de creacion/edicion de canciones trabaja con titulo, autor, letra, notas y categorias.
- La busqueda puede usar titulo, autor, letra y notas sin interpretar acordes.
- El futuro renderer de acordes debera partir de una decision explicita de formato.
- La migracion futura podra ser deliberada en vez de accidental.

## Riesgos

- Algunas canciones reales pueden necesitar acordes antes de que exista el renderer.
- Puede ser tentador pegar acordes dentro de `lyrics`; si se hace, sera contenido libre, no estructura soportada por el sistema.
- La decision futura debe contemplar importacion, edicion visual, transposicion y render responsivo.
