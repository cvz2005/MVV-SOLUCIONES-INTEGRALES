/**
 * MVV Experience 4.0.1 Frontier Edition — Archivo central de configuración
 * Cambia únicamente los valores indicados. No borres comas ni llaves.
 */
window.MVV_CONFIG = {
  version: '4.0.1 Frontier Edition',
  build: '2026.08.05',
  cacheVersion: '4.0.1-frontier-20260805',

  visibility: {
    // false = oculta completamente los bloques de inversión.
    showPrices: false,

    // Biblioteca y módulos.
    showCurrentProposals: false,
    showTSB: true,
    showOCB: true,
    showContact: true,
    // Controla la tarjeta y opción de menú de MVV Sentinel Frontier.
    showFrontier: true,
    showCommercialNote: true,

    // Elementos específicos del contacto.
    showWhatsapp: true,
    showEmailButton: true,
    showWebsite: true,
    showVcard: true
  },

  frontier: {
    title: 'MVV Sentinel Frontier',
    subtitle: 'Vigilancia Autónoma para Accesos e Infraestructura Crítica.',
    description: 'Estación inteligente y autónoma para proteger accesos remotos, caminos rurales e infraestructura estratégica.'
  },

  prices: {
    frontier: {
      label: 'Inversión desde',
      amount: '$621,000 MXN',
      note: '+ IVA · Incluye MVV NOSSACEL Connect. El precio final depende de la ingeniería del sitio, sensores, capacidad energética y alcance operativo.'
    },
    tactical: {
      label: 'Inversión desde',
      amount: '$1,525,000 MXN',
      note: '+ IVA Incluye solución llave en mano con plataforma aérea, integración tecnológica, comunicaciones, capacitación operativa, documentación técnica, puesta en marcha y garantía. La configuración final podrá ajustarse de acuerdo con los requerimientos específicos del proyecto'
    },
    command: {
      label: 'Inversión desde',
      amount: '$12,472,000 MXN',
      note: '+ IVA · Incluye vehículo especializado, ingeniería, integración de sistemas, comunicaciones, estaciones de operación, capacitación, documentación técnica, puesta en marcha y garantía. La configuración podrá personalizarse conforme a los requerimientos operativos del cliente.'
    }
  },

  docs: {
    technical: 'assets/docs/Propuesta_Tecnica_MVV_Sentinel.pdf',
    commercial: 'assets/docs/Propuesta_Comercial_MVV_Sentinel.pdf',
    air: 'assets/docs/Fotokite_Datasheet.pdf',
    connect: 'assets/docs/IoT_Servicios_260724_143917.pdf',
    mobile: 'assets/docs/C2_Movil_Datasheet.pdf',
    tsb101: 'assets/documents/tsb/TSB-101.pdf',
    tsb102: 'assets/documents/tsb/TSB-102.pdf',
    tsb103: 'assets/documents/tsb/TSB-103.pdf',
    ocb201: 'assets/documents/ocb/OCB-201.pdf',
    ocb202: 'assets/documents/ocb/OCB-202.pdf',
    ocb203: 'assets/documents/ocb/OCB-203.pdf'
  },

  contact: {
    name: 'Carlos Vázquez',
    company: 'MVV Soluciones Integrales',
    vcard: 'assets/contact/Carlos_Vazquez_MVV.vcf',
    email: 'informes@mvv.com.mx',
    phoneDisplay: '+52 55 4370 8747',
    phoneLink: '+525543708747',
    whatsapp: '525543708747',
    websiteDisplay: 'www.mvv.com.mx',
    websiteUrl: 'https://www.mvv.com.mx',
    whatsappMessage: 'Hola, me interesa conocer las soluciones MVV.'
  }
};
