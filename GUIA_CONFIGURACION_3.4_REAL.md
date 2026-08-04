# MVV Experience 3.4 REAL — Guía de configuración

Edite solamente `config.js` y realice un commit en GitHub.

## Mostrar u ocultar precios

```javascript
showPrices: false,
```

- `false`: oculta completamente los bloques de inversión y la nota comercial.
- `true`: muestra los importes configurados en `prices`.

## Mostrar u ocultar módulos

```javascript
showCurrentProposals: false,
showTSB: true,
showOCB: true,
showContact: true,
showC11: true,
showCommercialNote: true,
showWhatsapp: true,
showEmailButton: true,
showWebsite: true,
showVcard: true
```

Use únicamente `true` o `false`, en minúsculas y sin comillas.

## Cambiar precios

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
  }
}
```

## Cambiar contacto

Modifique los valores dentro de `contact`. Para WhatsApp use solo dígitos, sin `+`, espacios ni guiones.

## Publicación

1. Guarde `config.js`.
2. Haga **Commit changes** en GitHub.
3. Espere a que finalice GitHub Pages.
4. Abra el sitio normalmente. El archivo `index.html` ya carga `config.js` y `script.js` con un identificador nuevo de caché.

## Importante

No cambie los nombres de las propiedades. No elimine comas ni llaves. Conserve una copia de respaldo antes de editar.
