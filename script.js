/* ============================================================
   CONFIGURACIÓN EDITABLE MVV
   1) Cambia aquí precios, nombres y descripciones.
   2) Los importes se muestran exactamente como se escriben.
   3) Para ocultar un precio, usa price: "Proyecto especial".
   ============================================================ */
const pricingConfig = [
  {
    name: "MVV Sentinel Tactical",
    subtitle: "Sentinel Air + Connect + Services",
    price: "$1,720,000.00 + IVA",
    scope: ["Vigilancia aérea persistente", "Conectividad móvil", "Integración, capacitación y soporte"],
    recommended: false
  },
  {
    name: "MVV Sentinel Command",
    subtitle: "Tactical + Sentinel Mobile Command",
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
];

/* ============================================================
   RUTAS DE ARCHIVOS
   Para cambiar un PDF, reemplaza el archivo dentro de:
   assets/docs/
   Conserva el mismo nombre para no modificar el HTML.
   ============================================================ */

const pricingGrid = document.querySelector("#pricing-grid");
pricingConfig.forEach(item => {
  const card = document.createElement("article");
  card.className = `price-card reveal${item.recommended ? " recommended" : ""}`;
  card.innerHTML = `${item.recommended ? '<span class="badge">RECOMENDADA</span>' : ''}
    <p class="eyebrow">Configuración</p>
    <h3>${item.name}</h3>
    <p>${item.subtitle}</p>
    <div class="price">${item.price}</div>
    <ul>${item.scope.map(point => `<li>${point}</li>`).join("")}</ul>`;
  pricingGrid.appendChild(card);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelector("#year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
