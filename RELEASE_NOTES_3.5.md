# MVV Experience 3.5 Stable

## Objetivo
Consolidar la serie 3.x como una versión estable, administrable desde `config.js` y con una estrategia de actualización compatible con Safari.

## Cambios principales
- `config.js` se solicita con una marca de tiempo nueva en cada carga de página.
- Detección de restauración desde BFCache de Safari mediante el evento `pageshow`.
- CSS y `script.js` identificados con el build `3.5-stable-20260805`.
- Versión y build visibles en el encabezado y pie de página.
- Versión, build, precios, contacto, documentos y visibilidad continúan centralizados en `config.js`.
- No se añadió un inicio de sesión ficticio en JavaScript. Un panel privado real se reserva para una futura versión con autenticación de servidor.
- Sin cambios en el diseño, colores, imágenes ni estructura comercial.
