
document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.MVV_CONFIG;
  const $ = (s, el=document) => el.querySelector(s);
  const $$ = (s, el=document) => [...el.querySelectorAll(s)];

  $("#company-name").textContent = cfg.company.name;
  $("#company-tagline").textContent = cfg.company.tagline;

  const products = $("#products");
  cfg.products.forEach((p, i) => {
    const article = document.createElement("article");
    article.className = "product reveal";
    article.id = p.id;
    article.innerHTML = `
      <div class="product-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-body">
        <div class="eyebrow">${p.kicker}</div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="chips">${p.capabilities.map(c => `<span class="chip">${c}</span>`).join("")}</div>
      </div>`;
    products.appendChild(article);
  });

  const docs = $("#docs");
  cfg.documents.forEach(d => {
    const a = document.createElement("a");
    a.className = "doc reveal";
    a.href = d.file;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `<div><small>${d.type}</small><strong>${d.title}</strong></div><span aria-hidden="true">↗</span>`;
    docs.appendChild(a);
  });

  $("#contact-name").textContent = cfg.contact.name;
  $("#contact-title").textContent = cfg.contact.title;
  $("#contact-phone").textContent = cfg.contact.phoneDisplay;
  $("#contact-phone").href = `tel:${cfg.contact.phoneE164}`;
  $("#contact-email").textContent = cfg.contact.email;
  $("#contact-email").href = `mailto:${cfg.contact.email}`;
  $("#contact-web").textContent = "mvv.com.mx";
  $("#contact-web").href = cfg.company.website;
  $("#whatsapp").href = `https://wa.me/${cfg.contact.phoneE164.replace("+","")}?text=${encodeURIComponent(cfg.contact.whatsappMessage)}`;

  const nav = $(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20));
  $(".menu-btn").addEventListener("click", () => $(".nav-links").classList.toggle("open"));
  $$(".nav-links a").forEach(a => a.addEventListener("click", () => $(".nav-links").classList.remove("open")));

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
  }, {threshold: .12});
  $$(".reveal").forEach(el => io.observe(el));

  $("#year").textContent = new Date().getFullYear();
});
