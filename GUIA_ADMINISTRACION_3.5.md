# Guía de administración — MVV Experience 3.5 Stable

## Archivo principal de administración
Los cambios frecuentes se realizan en `config.js`.

## Mostrar u ocultar precios
```javascript
showPrices: true
```
Muestra los precios.

```javascript
showPrices: false
```
Oculta completamente los bloques de inversión y la nota comercial relacionada.

## Otros interruptores
- `showCurrentProposals`: propuestas vigentes.
- `showTSB`: documentos TSB y sus botones.
- `showOCB`: documentos OCB y sus botones.
- `showContact`: sección de contacto.
- `showC11`: módulo C11.
- `showWhatsapp`: botón de WhatsApp.
- `showEmailButton`: botón de correo.
- `showWebsite`: sitio web del contacto.
- `showVcard`: descarga de vCard.

## Cambiar precios
Edite `prices.tactical` y `prices.command` en `config.js`.

## Cambiar contacto
Edite el bloque `contact` en `config.js`.

## Sustituir documentos
Puede reemplazar un PDF conservando el mismo nombre y ruta, o actualizar su ruta en el bloque `docs`.

## Publicar en GitHub
1. Edite o sustituya el archivo.
2. Pulse `Commit changes`.
3. Espere a que GitHub Pages termine el despliegue.
4. Recargue la página. En Safari, la versión 3.5 vuelve a solicitar `config.js` en cada carga y recarga automáticamente las pestañas restauradas desde memoria.

## Confirmar la versión
En el pie de página debe aparecer:
`Experience 3.5 Stable · Build 2026.08.05`.

## Seguridad
No coloque contraseñas dentro de `config.js` o `script.js`. Un panel administrativo con usuarios requiere autenticación de servidor y se plantea para una versión futura.
