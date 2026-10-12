/**
 * Shree Music Academy — High-Performance Motion & Animation Engine
 * 
 * Features:
 * - Native IntersectionObserver with auto-unobserve (zero scroll overhead).
 * - GPU-accelerated transforms & opacity only (60-120fps compositor thread).
 * - Automatic stagger calculation for lists and card grids.
 * - Strict prefers-reduced-motion accessibility compliance.
 * - Progressive enhancement: Content is visible by default if JS/observer is inactive.
 */

export function initMotion() {
  if (typeof window === 'undefined') return () => {};

  // Check user motion preferences
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.documentElement.classList.add('reduced-motion');
    return () => {};
  }

  // Mark HTML as motion-enhanced
  document.documentElement.classList.add('motion-ready');

  // Selectors for elements to animate on scroll
  const selectorList = [
    // Data attribute explicit animations
    '[data-motion]',
    '.motion-fade-up',
    '.motion-fade-in',
    '.motion-scale',
    '.motion-stagger',

    // Home Page sections
    '.intro-eyebrow-wrapper',
    '.intro-heading',
    '.intro-description',
    '.intro-cta-row',
    '.intro-photo-card',
    '.intro-card',
    '.courses-header-wrapper',
    '.course-card',
    '.inst-header',
    '.inst-card',
    '.approach-visual-wrapper',
    '.approach-header',
    '.approach-principle-card',
    '.gallery-header',
    '.gallery-card',
    '.cta-eyebrow-wrapper',
    '.cta-heading',
    '.cta-description',
    '.cta-actions',
    '.cta-features-strip',

    // About Us Page sections
    '.about-hero-content',
    '.about-hero-image-card',
    '.about-story-image-card',
    '.about-story-content',
    '.about-purpose-left',
    '.about-purpose-card',
    '.about-philosophy-header',
    '.about-principle-card',
    '.about-environment-left',
    '.about-env-large-tile',
    '.about-env-stacked-tile',

    // Courses Page sections
    '.courses-hero-content',
    '.courses-hero-image-card',
    '.courses-section-header-centered',
    '.course-tier-card',
    '.course-skill-item',
    '.course-inst-card',

    // Gallery Page sections
    '.gallery-intro-container',
    '.gallery-filter-tabs',

    // Contact Us Page sections
    '.contact-header-block',
    '.contact-info-card',
    '.contact-form-card',
    '.contact-map-card'
  ];

  const selector = selectorList.join(', ');
  const elements = Array.from(document.querySelectorAll(selector));

  if (!elements.length) return () => {};

  // Auto-assign stagger delays to parent grids/containers
  const staggerParents = document.querySelectorAll(
    '.intro-cards-row, .courses-cards-grid, .inst-grid, .approach-principles-stack, .gallery-grid, ' +
    '.about-purpose-cards-wrap, .about-philosophy-grid, .about-env-stacked-tiles, ' +
    '.courses-tiers-grid, .courses-skills-row, .courses-inst-row, .gallery-photo-grid, ' +
    '.cta-features-strip, .motion-stagger'
  );

  staggerParents.forEach((parent) => {
    const children = Array.from(parent.children);
    children.forEach((child, index) => {
      child.style.setProperty('--stagger-index', index);
      child.style.setProperty('--stagger-delay', `${Math.min(index * 90, 450)}ms`);
    });
  });

  // IntersectionObserver configuration with pre-fetch margin
  const observerOptions = {
    root: null,
    rootMargin: '50px 0px 50px 0px',
    threshold: 0.01
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight + 50 && rect.bottom > -50) {
      requestAnimationFrame(() => {
        el.classList.add('is-revealed');
      });
    } else {
      observer.observe(el);
    }
  });

  // Fail-safe: Guarantee that no essential element stays hidden
  const safetyTimer = setTimeout(() => {
    elements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        el.classList.add('is-revealed');
      }
    });
  }, 450);

  // Return cleanup function
  return () => {
    clearTimeout(safetyTimer);
    observer.disconnect();
  };
}
