# GUÍA DE ACTUALIZACIÓN — MVV Experience 3.3

Los cambios frecuentes se realizan en `config.js`, sin editar `index.html`.

## Cambiar precios
Edite `prices.tactical` o `prices.command`. Puede cambiar `label`, `amount` y `note`.

## Ocultar precios
Cambie `showPrices: true` por `showPrices: false`.

## Mostrar u ocultar Propuestas vigentes
- `showCurrentProposals: false`: ocultas.
- `showCurrentProposals: true`: visibles.

## Cambiar contacto
Edite el bloque `contact`: nombre, empresa, correo, teléfono visible, enlace telefónico, WhatsApp y sitio web.

`whatsapp` debe contener solo números, sin `+`, espacios o guiones.

## Actualizar PDFs
Sustituya el PDF conservando el mismo nombre dentro de:
- `assets/documents/tsb/`
- `assets/documents/ocb/`

También puede modificar las rutas en el bloque `docs` de `config.js`.

## Mostrar u ocultar TSB u OCB
Use `showTSB` y `showOCB` dentro de `visibility`.

## Evitar caché
Cambie `cacheVersion` en `config.js` al publicar una revisión. Para cambios en CSS o JavaScript, actualice también `?v=` en las tres referencias al final/inicio de `index.html`.

## Publicación en GitHub
1. Sustituya los archivos modificados.
2. Haga Commit changes.
3. Espere GitHub Pages.
4. Revise en ventana privada.

## Respaldo
Conserve siempre el ZIP estable anterior.
