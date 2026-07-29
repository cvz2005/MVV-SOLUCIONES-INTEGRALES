# MVV Sentinel Web 1.0

Sitio estático listo para abrir, probar y publicar. No requiere servidor, base de datos ni instalación de dependencias.

## Vista previa local

Abra `index.html` con un navegador. Para evitar restricciones del navegador con archivos locales, también puede ejecutar:

```bash
python3 -m http.server 8080
```

Después abra `http://localhost:8080`.

## Ediciones rápidas

- **Precios y configuraciones:** `script.js`, bloque `pricingConfig`.
- **Textos institucionales, valores, experiencia y contacto:** `index.html`.
- **Colores, tipografía, tamaños y diseño:** `styles.css`, variables al inicio.
- **PDF:** reemplace el archivo correspondiente en `assets/docs/` conservando su nombre.
- **Imágenes:** reemplace archivos en `assets/img/` conservando su nombre.
- **C11 Seguridad Inteligente:** actualmente aparece como “En proceso”. Busque `C11 Seguridad Inteligente` en `index.html` para habilitarlo cuando esté listo.

## Estructura

- `index.html`: contenido y navegación.
- `styles.css`: diseño responsivo.
- `script.js`: precios, animaciones y menú móvil.
- `assets/img/`: imágenes.
- `assets/docs/`: documentos PDF.

## Publicación

### Claude
Puede subir la carpeta o el ZIP completo para revisión y solicitar cambios sobre los tres archivos principales. Para una vista previa funcional, Claude debe conservar la estructura de carpetas.

### GitHub Pages / Cloudflare Pages / Netlify
Suba el contenido de esta carpeta a la raíz del proyecto. No se requiere comando de compilación. El directorio de publicación es `/`.

## Recomendación de seguridad comercial

Antes de compartir públicamente, confirme si los precios deben quedar visibles. Para ocultarlos temporalmente, cambie `price` en `script.js` por “Disponible bajo solicitud”.
