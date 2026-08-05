# Guía de administración — MVV Experience 4.0 Frontier Edition

## Sentinel Frontier
Todos los cambios habituales se realizan en `config.js`.

### Mostrar u ocultar la solución
```javascript
showFrontier: true
```
- `true`: muestra la opción del menú y la tarjeta.
- `false`: oculta ambas.

### Mostrar u ocultar todos los precios
```javascript
showPrices: true
```

### Cambiar el precio de Frontier
```javascript
frontier: {
  label: 'Inversión desde',
  amount: '$720,000 MXN',
  note: '+ IVA ...'
}
```

### Cambiar título, subtítulo o descripción
Modificar el bloque:
```javascript
frontier: {
  title: 'MVV Sentinel Frontier',
  subtitle: '...',
  description: '...'
}
```

### Sustituir el OCB-203
Reemplazar el archivo:
`assets/documents/ocb/OCB-203.pdf`

Conservar exactamente el mismo nombre evita modificar el código.

## Publicación en GitHub
1. Sustituir los archivos del repositorio con los de esta versión.
2. Hacer `Commit changes`.
3. Esperar la publicación de GitHub Pages.
4. Verificar el pie de página: `Experience 4.0 Frontier Edition · Build 2026.08.05`.
