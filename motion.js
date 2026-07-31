(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const body = document.body;
  const hero = document.querySelector('.hero');
  const header = document.querySelector('.site-header');
  const typeText = document.querySelector('.type-text');
  const compactViewport = window.matchMedia('(max-width: 920px)');

  body.classList.add('motion-ready');

  const revealGroups = [
    { selector: '.manifesto > div:not(.manifesto-visual)', direction: 'left' },
    { selector: '.manifesto-visual', direction: 'right' },
    { selector: '.section-intro > *', direction: 'up' },
    { selector: '.service-item', direction: 'up', step: 90 },
    { selector: '.work-heading > *', direction: 'up' },
    { selector: '.browser-mockup', direction: 'left' },
    { selector: '.work-meta', direction: 'right' },
    { selector: '.process-heading > *', direction: 'left' },
    { selector: '.process-list li', direction: 'right', step: 85 },
    { selector: '.contact-inner > *', direction: 'up', step: 70 },
    { selector: '.footer > *', direction: 'up', step: 55 }
  ];

  const revealElements = [];
  revealGroups.forEach(({ selector, direction, step = 70 }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add('reveal');
      element.dataset.reveal = direction;
      element.style.setProperty('--reveal-delay', `${Math.min(index * step, 280)}ms`);
      revealElements.push(element);
    });
  });

  const showAll = () => revealElements.forEach((element) => element.classList.add('is-visible'));

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    showAll();
  }

  const typeHeroLine = () => {
    if (!typeText) return;
    const content = typeText.dataset.type || typeText.textContent;
    if (reduceMotion.matches) {
      typeText.textContent = content;
      return;
    }

    const characters = Array.from(content);
    typeText.textContent = '';
    typeText.classList.add('is-typing');
    let index = 0;

    const typeNext = () => {
      typeText.textContent += characters[index];
      index += 1;
      if (index < characters.length) {
        window.setTimeout(typeNext, 82 + Math.random() * 55);
      } else {
        window.setTimeout(() => typeText.classList.remove('is-typing'), 1100);
      }
    };

    window.setTimeout(typeNext, 650);
  };

  let frameRequested = false;
  const updateHeroMotion = () => {
    frameRequested = false;
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
    if (!hero || reduceMotion.matches) {
      hero?.style.removeProperty('--hero-copy-opacity');
      hero?.style.removeProperty('--hero-copy-shift');
      hero?.style.removeProperty('--hero-board-opacity');
      hero?.style.removeProperty('--hero-board-shift');
      return;
    }

    const distance = Math.max(hero.offsetHeight * 0.78, 1);
    const progress = Math.min(Math.max(window.scrollY / distance, 0), 1);
    hero.style.setProperty('--hero-copy-opacity', String(1 - progress * 0.9));
    hero.style.setProperty('--hero-copy-shift', `${progress * -42}px`);
    hero.style.setProperty('--hero-board-opacity', compactViewport.matches ? '1' : String(1 - progress * 0.68));
    hero.style.setProperty('--hero-board-shift', `${progress * (compactViewport.matches ? 12 : 58)}px`);
  };

  const requestHeroMotion = () => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateHeroMotion);
  };

  window.addEventListener('scroll', requestHeroMotion, { passive: true });
  window.addEventListener('resize', requestHeroMotion, { passive: true });
  reduceMotion.addEventListener?.('change', () => {
    if (reduceMotion.matches) showAll();
    requestHeroMotion();
  });
  compactViewport.addEventListener?.('change', requestHeroMotion);

  typeHeroLine();
  requestHeroMotion();
})();
