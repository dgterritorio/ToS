(function () {
  function fixSearchLanguage() {
    const isEnglish = window.location.pathname.includes('/en/');
    const target = isEnglish ? 'Search' : 'Pesquisar';

    document.querySelectorAll(
      'input[type="search"], input[placeholder], input[aria-label], ' +
      'button[title], button[aria-label], a[title], a[aria-label]'
    ).forEach(function (element) {
      ['placeholder', 'aria-label', 'title'].forEach(function (attribute) {
        const value = element.getAttribute(attribute);
        if (value && /^(buscar|pesquisar|search)$/i.test(value.trim())) {
          element.setAttribute(attribute, target);
        }
      });
    });

    document.querySelectorAll('[data-md-component="search"] label').forEach(function (label) {
      if (/^(buscar|pesquisar|search)$/i.test(label.textContent.trim())) {
        label.textContent = target;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixSearchLanguage);
  } else {
    fixSearchLanguage();
  }

  new MutationObserver(fixSearchLanguage).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
