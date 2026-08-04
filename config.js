/**
 * MVV Experience 3.4 REAL — Archivo central de configuración
 * Cambia únicamente los valores indicados. No borres comas ni llaves.
 */
window.MVV_CONFIG = {
  version: '3.4 REAL',
  cacheVersion: '3.4-real-20260804',

  visibility: {
    // false = oculta completamente los bloques de inversión.
    showPrices: false,

    // Biblioteca y módulos.
    showCurrentProposals: false,
    showTSB: true,
    showOCB: true,
    showContact: true,
    showC11: true,
    showCommercialNote: true,

    // Elementos específicos del contacto.
    showWhatsapp: true,
    showEmailButton: true,
    showWebsite: true,
    showVcard: true
  },

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
    ocb202: 'assets/documents/ocb/OCB-202.pdf'
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
