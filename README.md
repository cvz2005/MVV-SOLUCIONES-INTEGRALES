# MVV EXPERIENCE 2.1 STABLE

Versión modular lista para GitHub Pages.

## Publicación
1. Descomprima el ZIP.
2. Suba **el contenido de la carpeta**, no la carpeta contenedora, a la raíz de la rama `main`.
3. En GitHub: **Settings → Pages → Deploy from a branch → main / root**.
4. Espere a que finalice el flujo `pages build and deployment`.

## Estructura
- `index.html`: página principal.
- `config.js`: datos de contacto, precios y rutas de documentos.
- `assets/css/styles.css`: diseño.
- `assets/js/app.js`: navegación, animaciones y carga de configuración.
- `assets/docs/`: documentos PDF.
- `assets/contact/`: vCard descargable.
- `assets/images/`: imágenes, logotipo y QR.

## Actualizar PDFs
Sustituya el PDF dentro de `assets/docs/` conservando exactamente el mismo nombre. No es necesario editar el HTML.

## Actualizar contacto o precios
Edite únicamente `config.js`.

## Contacto incorporado
Carlos Vázquez · Director Comercial · +52 55 4370 8747 · carlos.vazquez@mvv.com.mx · mvv.com.mx
