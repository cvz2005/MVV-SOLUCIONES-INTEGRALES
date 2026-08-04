(() => {
  'use strict';

  const config = window.MVV_CONFIG || {};
  const visibility = config.visibility || {};
  const cacheVersion = config.cacheVersion || config.version || '1';

  const appendVersion = (url) => {
    if (!url || /^(https?:|mailto:|tel:|#|data:)/i.test(url)) return url;
    return `${url}${url.includes('?') ? '&' : '?'}v=${encodeURIComponent(cacheVersion)}`;
  };

  const elements = (selector) => Array.from(document.querySelectorAll(selector));

  // Usa clase + atributo hidden + estilo inline para evitar que cualquier CSS reabra el elemento.
  const setVisible = (target, visible) => {
    const list = typeof target === 'string' ? elements(target) : [target].filter(Boolean);
    list.forEach((el) => {
      el.hidden = !visible;
      el.classList.toggle('mvv-config-hidden', !visible);
      if (!visible) {
        el.style.setProperty('display', 'none', 'important');
        el.setAttribute('aria-hidden', 'true');
      } else {
        el.style.removeProperty('display');
        el.removeAttribute('aria-hidden');
      }
    });
  };

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
  };

  const applyConfiguration = () => {
    // Textos configurables.
    elements('[data-bind]').forEach((el) => {
      let value = config;
      for (const key of el.dataset.bind.split('.')) value = value?.[key];
      if (value !== undefined && value !== null) el.textContent = value;
    });

    // Documentos configurables.
    elements('[data-doc]').forEach((link) => {
      const url = config.docs?.[link.dataset.doc];
      if (!url) return;
      link.href = appendVersion(url);
      link.target = '_blank';
      link.rel = 'noopener';
    });

    // PRECIOS: false los oculta completamente.
    setVisible('.investment', visibility.showPrices !== false);
    // La nota comercial solo tiene sentido cuando los precios están visibles.
    setVisible('.commercial-note', visibility.showPrices !== false && visibility.showCommercialNote !== false);

    // Propuestas, TSB y OCB.
    setVisible('#current-proposals', visibility.showCurrentProposals === true);
    setVisible('#tsb-library-title', visibility.showTSB !== false);
    setVisible('#tsb-library-grid', visibility.showTSB !== false);
    setVisible('#ocb-library-title', visibility.showOCB !== false);
    setVisible('#ocb-library-grid', visibility.showOCB !== false);
    // También oculta los botones de descarga relacionados fuera de la biblioteca.
    setVisible('[data-doc="tsb101"], [data-doc="tsb102"], [data-doc="tsb103"]', visibility.showTSB !== false);
    setVisible('[data-doc="ocb201"], [data-doc="ocb202"]', visibility.showOCB !== false);

    // Otros módulos.
    setVisible('#c11', visibility.showC11 !== false);
    setVisible('a[href="#c11"]', visibility.showC11 !== false);
    setVisible('#contacto', visibility.showContact !== false);
    setVisible('a[href="#contacto"]', visibility.showContact !== false);
    setVisible('#whatsapp', visibility.showContact !== false && visibility.showWhatsapp !== false);
    setVisible('#email-button', visibility.showContact !== false && visibility.showEmailButton !== false);
    setVisible('#contact-website', visibility.showContact !== false && visibility.showWebsite !== false);
    setVisible('#contact-vcard', visibility.showContact !== false && visibility.showVcard !== false);

    // Contacto.
    const c = config.contact || {};
    setText('#contact-name', c.name);
    setText('#contact-company', c.company);
    setText('#contact-phone', c.phoneDisplay);
    setText('#contact-email', c.email);
    setText('#contact-website', c.websiteDisplay);

    const phone = document.getElementById('contact-phone');
    if (phone && c.phoneLink) phone.href = `tel:${c.phoneLink}`;

    const email = document.getElementById('contact-email');
    if (email && c.email) email.href = `mailto:${c.email}`;

    const emailButton = document.getElementById('email-button');
    if (emailButton && c.email) emailButton.href = `mailto:${c.email}`;

    const website = document.getElementById('contact-website');
    if (website && c.websiteUrl) website.href = c.websiteUrl;

    const vcard = document.getElementById('contact-vcard');
    if (vcard && c.vcard) vcard.href = appendVersion(c.vcard);

    const wa = document.getElementById('whatsapp');
    if (wa && c.whatsapp) {
      wa.href = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.whatsappMessage || 'Hola, me interesa conocer las soluciones MVV.')}`;
      wa.target = '_blank';
      wa.rel = 'noopener';
    }

    // Versionado automático de imágenes locales.
    elements('img[src]').forEach((img) => {
      const src = img.getAttribute('src');
      if (src && !/[?&]v=/.test(src) && !/^(https?:|data:)/i.test(src)) img.src = appendVersion(src);
    });

    document.documentElement.dataset.mvvConfigApplied = 'true';
  };

  const initializeNavigation = () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    toggle?.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    document.querySelector('.nav-dropdown > button')?.addEventListener('click', (e) => {
      if (window.innerWidth <= 980) e.currentTarget.parentElement.classList.toggle('open');
    });

    elements('.main-nav a').forEach((a) => {
      a.addEventListener('click', () => nav?.classList.remove('open'));
    });
  };

  const initializeAnimations = () => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      elements('.reveal').forEach((el) => observer.observe(el));
    } else {
      elements('.reveal').forEach((el) => el.classList.add('visible'));
    }
  };

  const start = () => {
    applyConfiguration();
    initializeNavigation();
    initializeAnimations();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
