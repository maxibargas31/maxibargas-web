/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobNav = document.getElementById('mob-nav');

if (hamburger && mobNav) {
  const setOpen = (open: boolean) => {
    hamburger.classList.toggle('is-open', open);
    mobNav.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger.addEventListener('click', () => setOpen(!hamburger.classList.contains('is-open')));
  mobNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.classList.contains('is-open')) {
      setOpen(false);
      hamburger.focus();
    }
  });
}

/* ── NAV SCROLL ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
