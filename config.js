/* ============================================================
   MVV EXPERIENCE 2.0 — CONFIGURACIÓN CENTRAL
   Modifique aquí precios, datos de contacto y rutas de archivos.
   No es necesario editar index.html para estos cambios.
   ============================================================ */

window.MVV_CONFIG = {
  company: {
    name: "MVV Soluciones Integrales",
    email: "informes@mvv.com.mx",
    phone1: "+52 55 2654 4462",
    phone2: "+52 55 4370 8747",
    website: "www.mvv.com.mx",
    location: "Ciudad de México, México"
  },
  pricing: [
    {
      name: "MVV Sentinel Tactical",
      subtitle: "Sentinel Air + Connect + Services",
      price: "$1,720,000.00 + IVA",
      scope: ["Vigilancia aérea persistente", "Conectividad móvil", "Integración, capacitación y soporte"],
      recommended: false
    },
    {
      name: "MVV Sentinel Command",
      subtitle: "Tactical + Sentinel Command Mobile",
      price: "$12,872,000.00 + IVA",
      scope: ["Incluye unidad Ford F-550 2026", "Centro C2 móvil", "Integración y puesta en operación"],
      recommended: true
    },
    {
      name: "MVV Sentinel Enterprise",
      subtitle: "Arquitectura integral y evolución tecnológica",
      price: "Requiere análisis de proyecto",
      scope: ["Infraestructura crítica", "Operaciones permanentes", "Diseño a la medida"],
      recommended: false
    }
  ],
  docs: {
    technical: "assets/docs/Propuesta_Tecnica_MVV_Sentinel.pdf",
    commercial: "assets/docs/Propuesta_Comercial_MVV_Sentinel.pdf",
    fotokite: "assets/docs/Fotokite_Datasheet.pdf",
    c2: "assets/docs/C2_Movil_Datasheet.pdf"
  }
};
