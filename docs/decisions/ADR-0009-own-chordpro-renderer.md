# ADR-0009: Renderer Propio De ChordPro Basico

## Estado

Aprobado.

## Contexto

La pagina de cancion necesita mostrar acordes en su sitio, pero ChordSheetJS usa licencia GPL-2.0-only. Mantener esa dependencia en el frontend puede condicionar la licencia del proyecto si se distribuye la app.

Para el MVP no se necesita transposicion, importacion avanzada ni un editor musical completo. El requisito inmediato es pintar acordes sobre letra de forma simple y mantener abierta la decision futura del sistema de partituras.

## Decision

Se retira `chordsheetjs` del paquete web y se implementa un renderer propio de ChordPro basico en `/song/?id=<songId>`.

El renderer soporta:

- acordes inline con sintaxis `[C]Texto [G]aqui`;
- lineas de texto sin acordes;
- lineas en blanco;
- directivas simples como `{comment: ...}`, `{key: ...}`, `{capo: ...}`, `{tempo: ...}` y `{soc}`.

El render se construye con nodos DOM y `textContent`, no con HTML generado desde strings. `youtubeUrl` y `sheetMusicUrl` se mantienen como campos opcionales independientes.

## Consecuencias

- El MVP deja de depender de una libreria GPL para pintar acordes.
- La app mantiene un formato de entrada conocido y facil de migrar.
- Las funciones avanzadas de ChordPro quedan fuera de alcance por ahora.
- La transposicion y el sistema definitivo de partituras siguen pendientes.

## Riesgos

- Canciones con sintaxis ChordPro avanzada pueden no renderizar exactamente como en herramientas especializadas.
- Acordes escritos en formato "acordes sobre palabras" se muestran como texto plano hasta que se decida soportarlos.
- El renderer propio requerira pruebas especificas cuando se agreguen transposicion, edicion visual o modo presentacion.
