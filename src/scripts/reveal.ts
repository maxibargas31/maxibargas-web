/* ── SCROLL REVEAL ──
   El contenido solo se oculta si <html> tiene la clase .js (ver BaseLayout),
   así que sin JavaScript todo queda visible. */
const targets = document.querySelectorAll('[data-reveal], [data-stagger]');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -50px 0px' },
  );
  targets.forEach((el) => revealObserver.observe(el));
} else {
  targets.forEach((el) => el.classList.add('is-visible'));
}
