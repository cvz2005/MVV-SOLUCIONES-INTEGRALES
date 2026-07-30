(() => {
  const cfg = window.MVV_CONFIG || {};
  const header = document.querySelector('#site-header');
  const menu = document.querySelector('#nav-menu');
  const toggle = document.querySelector('.nav-toggle');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  toggle?.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  document.querySelectorAll('.nav-link-button').forEach(btn => btn.addEventListener('click', () => btn.closest('.nav-item')?.classList.toggle('open')));
  document.querySelectorAll('#nav-menu a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open')); }));

  document.querySelectorAll('[data-doc]').forEach(el => { const key = el.dataset.doc; if (cfg.docs?.[key]) el.href = cfg.docs[key]; });
  const pricingGrid = document.querySelector('#pricing-grid');
  (cfg.pricing || []).forEach(item => { const article = document.createElement('article'); article.className = `price-card reveal${item.recommended ? ' recommended' : ''}`; article.innerHTML = `${item.recommended ? '<span class="badge">RECOMENDADA</span>' : ''}<p class="eyebrow">Configuración</p><h3>${item.name}</h3><p>${item.subtitle}</p><div class="price">${item.price}</div><ul>${item.scope.map(x => `<li>${x}</li>`).join('')}</ul>`; pricingGrid?.appendChild(article); });

  const c = cfg.contact || {}, co = cfg.company || {};
  const setText=(s,v)=>{const e=document.querySelector(s);if(e)e.textContent=v||''};
  const setHref=(s,v)=>{const e=document.querySelector(s);if(e)e.href=v||'#'};
  setText('#contact-name',c.name); setText('#contact-title',c.title); setText('#phone-link',c.phone); setHref('#phone-link',`tel:${c.phoneRaw}`); setText('#contact-email',c.email); setHref('#contact-email',`mailto:${c.email}`); setText('#website-link',co.websiteLabel); setHref('#website-link',co.website); setHref('#whatsapp-link',c.whatsapp); setHref('#email-link',`mailto:${c.email}?subject=Solicitud%20de%20información%20-%20MVV%20Soluciones%20Integrales`); setHref('#vcard-link',c.vcard); const qr=document.querySelector('#contact-qr'); if(qr&&c.qr)qr.src=c.qr;

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const year=document.querySelector('#year'); if(year)year.textContent=new Date().getFullYear();
})();
