(() => {
  const config = window.MVV_CONFIG || {};
  document.querySelectorAll('[data-doc]').forEach(link => {
    const key = link.dataset.doc;
    if (config.docs && config.docs[key]) {
      link.href = config.docs[key];
      link.target = '_blank';
      link.rel = 'noopener';
    }
  });
  const wa = document.getElementById('whatsapp');
  if (wa && config.contact?.whatsapp) {
    wa.href = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola, me interesa conocer las soluciones MVV.')}`;
    wa.target = '_blank'; wa.rel = 'noopener';
  }
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelector('.nav-dropdown > button')?.addEventListener('click', (e) => {
    if (window.innerWidth <= 980) e.currentTarget.parentElement.classList.toggle('open');
  });
  document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
