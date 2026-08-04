# Guía de configuración — MVV Experience 3.4

Toda la configuración cotidiana se realiza en `config.js`.

## 1. Mostrar u ocultar precios

```javascript
showPrices: true
```

- `true`: muestra los importes.
- `false`: sustituye los importes por el texto definido en `prices.hiddenMessage`.

Ejemplo:

```javascript
showPrices: false
```

## 2. Cambiar precios

```javascript
prices: {
  tactical: {
    label: 'Inversión desde',
    amount: '$1,525,000 MXN',
    note: '+ IVA'
  },
  command: {
    label: 'Inversión desde',
    amount: '$12,472,000 MXN',
    note: '+ IVA · Incluye Ford F-550 2026'
  },
  hiddenMessage: 'Configuración e inversión bajo consulta'
}
```

## 3. Mostrar u ocultar módulos

Dentro de `visibility`:

```javascript
showCurrentProposals: false,
showTSB: true,
showOCB: true,
showContact: true,
showWhatsapp: true,
showEmailButton: true,
showWebsite: true,
showVcard: true,
showC11: true,
showCommercialNote: true
```

Cambie únicamente `true` por `false` o viceversa. No use comillas.

## 4. Cambiar documentos

Mantenga las rutas dentro de `docs`:

```javascript
tsb101: 'assets/documents/tsb/TSB-101.pdf'
```

Puede sustituir el PDF conservando exactamente el mismo nombre y ruta. En ese caso no necesita cambiar el HTML.

## 5. Cambiar contacto

Edite únicamente el bloque `contact`:

```javascript
phoneDisplay: '+52 55 4370 8747',
phoneLink: '+525543708747',
whatsapp: '525543708747'
```

- `phoneDisplay`: formato visible.
- `phoneLink`: con `+` y código de país, sin espacios.
- `whatsapp`: solo números, con código de país.

## 6. Evitar caché

Cuando actualice imágenes o PDF sin cambiar su nombre, aumente:

```javascript
cacheVersion: '3.4.1'
```

Esto obliga al navegador a solicitar los archivos actualizados.

## 7. Publicar en GitHub

1. Modifique `config.js`.
2. Presione **Commit changes**.
3. Espere a que GitHub Pages termine la publicación.
4. Abra el sitio con `?v=3.4.1` durante la revisión inicial.

## 8. Recuperación

Conserve el ZIP anterior como respaldo. Si un cambio causa un problema, restaure `config.js`, `script.js` e `index.html` de la versión estable.
