(() => {
  const cfg = window.MVV_CONFIG || {};
  const header = document.querySelector('#site-header');
  const menu = document.querySelector('#nav-menu');
  const toggle = document.querySelector('.nav-toggle');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-link-button').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.nav-item')?.classList.toggle('open'));
  });
  document.querySelectorAll('#nav-menu a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
  }));

  document.querySelectorAll('[data-doc]').forEach(el => {
    const key = el.dataset.doc;
    if (cfg.docs?.[key]) el.href = cfg.docs[key];
  });

  const pricingGrid = document.querySelector('#pricing-grid');
  (cfg.pricing || []).forEach(item => {
    const article = document.createElement('article');
    article.className = `price-card reveal${item.recommended ? ' recommended' : ''}`;
    article.innerHTML = `${item.recommended ? '<span class="badge">RECOMENDADA</span>' : ''}
      <p class="eyebrow">Configuración</p>
      <h3>${item.name}</h3>
      <p>${item.subtitle}</p>
      <div class="price">${item.price}</div>
      <ul>${item.scope.map(x => `<li>${x}</li>`).join('')}</ul>`;
    pricingGrid?.appendChild(article);
  });

  const company = cfg.company || {};
  const contact = document.querySelector('#contact-card');
  if (contact) {
    contact.innerHTML = `
      <a href="mailto:${company.email}">${company.email}</a>
      <a href="tel:${(company.phone1||'').replace(/\s/g,'')}">${company.phone1}</a>
      <a href="tel:${(company.phone2||'').replace(/\s/g,'')}">${company.phone2}</a>
      <span>${company.website}</span>
      <span>${company.location}</span>
      <a class="btn btn-primary" href="mailto:${company.email}?subject=Solicitud%20de%20presentación%20ejecutiva">Solicitar presentación ejecutiva</a>`;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('metric')) animateMetric(entry.target);
      observer.unobserve(entry.target);
    });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  function animateMetric(el){
    const targetEl = el.querySelector('[data-count]');
    if (!targetEl) return;
    const target = Number(targetEl.dataset.count);
    const suffix = target === 360 ? '°' : '';
    const start = performance.now();
    const duration = 1000;
    const tick = now => {
      const p = Math.min((now-start)/duration,1);
      targetEl.textContent = Math.floor(target*p) + suffix;
      if(p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
