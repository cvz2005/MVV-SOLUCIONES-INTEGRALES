(() => {
  const config = window.MVV_CONFIG || {};
  const cacheVersion = config.cacheVersion || config.version || '1';
  const appendVersion = (url) => {
    if (!url || /^(https?:|mailto:|tel:|#)/i.test(url)) return url;
    return `${url}${url.includes('?') ? '&' : '?'}v=${encodeURIComponent(cacheVersion)}`;
  };
  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
  };
  document.querySelectorAll('[data-bind]').forEach((el) => {
    let value = config;
    for (const key of el.dataset.bind.split('.')) value = value?.[key];
    if (value !== undefined && value !== null) el.textContent = value;
  });
  document.querySelectorAll('[data-doc]').forEach((link) => {
    const url = config.docs?.[link.dataset.doc];
    if (url) { link.href = appendVersion(url); link.target = '_blank'; link.rel = 'noopener'; }
  });
  const proposals = document.getElementById('current-proposals');
  if (proposals) proposals.hidden = config.visibility?.showCurrentProposals !== true;
  const tsbFamily = document.querySelector('.docs .family-title:not(.operational)');
  const tsbGrid = tsbFamily?.nextElementSibling;
  if (config.visibility?.showTSB === false) { if (tsbFamily) tsbFamily.hidden = true; if (tsbGrid) tsbGrid.hidden = true; }
  const ocbFamily = document.querySelector('.docs .family-title.operational');
  const ocbGrid = ocbFamily?.nextElementSibling;
  if (config.visibility?.showOCB === false) { if (ocbFamily) ocbFamily.hidden = true; if (ocbGrid) ocbGrid.hidden = true; }
  const contactSection = document.getElementById('contacto');
  if (contactSection && config.visibility?.showContact === false) contactSection.hidden = true;
  if (config.visibility?.showPrices === false) {
    document.querySelectorAll('.investment').forEach((box) => { box.innerHTML = `<small>${config.prices?.hiddenMessage || 'Inversión bajo consulta'}</small>`; });
  }
  const c = config.contact || {};
  setText('#contact-name', c.name); setText('#contact-company', c.company); setText('#contact-phone', c.phoneDisplay); setText('#contact-email', c.email); setText('#contact-website', c.websiteDisplay);
  const phone = document.getElementById('contact-phone'); if (phone && c.phoneLink) phone.href = `tel:${c.phoneLink}`;
  const email = document.getElementById('contact-email'); if (email && c.email) email.href = `mailto:${c.email}`;
  const emailButton = document.getElementById('email-button'); if (emailButton && c.email) emailButton.href = `mailto:${c.email}`;
  const website = document.getElementById('contact-website'); if (website && c.websiteUrl) website.href = c.websiteUrl;
  const vcard = document.getElementById('contact-vcard'); if (vcard && c.vcard) vcard.href = appendVersion(c.vcard);
  const wa = document.getElementById('whatsapp');
  if (wa && c.whatsapp) { wa.href = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.whatsappMessage || 'Hola, me interesa conocer las soluciones MVV.')}`; wa.target = '_blank'; wa.rel = 'noopener'; }
  document.querySelectorAll('img[src]').forEach((img) => { const src = img.getAttribute('src'); if (src && !src.includes('?v=') && !/^(https?:|data:)/i.test(src)) img.src = appendVersion(src); });
  const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  document.querySelector('.nav-dropdown > button')?.addEventListener('click', (e) => { if (window.innerWidth <= 980) e.currentTarget.parentElement.classList.toggle('open'); });
  document.querySelectorAll('.main-nav a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
