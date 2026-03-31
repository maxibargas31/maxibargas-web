/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobNav    = document.getElementById('mob-nav');
if (hamburger && mobNav) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('is-open');
    mobNav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => {
  revealObserver.observe(el);
});

/* ── NAV SCROLL ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── WHATSAPP BOOKING ── */
window.enviarWhatsApp = function(e) {
  e.preventDefault();
  const nombre   = document.getElementById('nombre')?.value.trim();
  const servicio = document.getElementById('servicio')?.value;
  const dia      = document.getElementById('dia')?.value;
  const horario  = document.getElementById('horario')?.value;
  const telefono = '598091364790';
  const texto =
    `Hola Maxi! Quiero reservar un turno 🌿\n\n` +
    `👤 Nombre: ${nombre}\n` +
    `💆 Servicio: ${servicio}\n` +
    `📅 Día: ${dia}\n` +
    `🕐 Horario: ${horario}\n\n` +
    `Quedo esperando tu confirmación. ¡Gracias!`;
  window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`, '_blank');
};

/* ── CONTACT FORM ── */
window.enviarContacto = function(e) {
  e.preventDefault();
  const nombre       = document.getElementById('nombre')?.value.trim();
  const email        = document.getElementById('email')?.value.trim();
  const motivo       = document.getElementById('motivo')?.value;
  const organizacion = document.getElementById('organizacion')?.value.trim();
  const mensaje      = document.getElementById('mensaje')?.value.trim();
  const telefono     = '598091364790';
  const texto =
    `Hola Maxi! Te escribo desde el sitio web 🌿\n\n` +
    `👤 Nombre: ${nombre}\n` +
    `📧 Email: ${email}\n` +
    `📌 Motivo: ${motivo}\n` +
    (organizacion ? `🏢 Organización: ${organizacion}\n` : '') +
    `\n💬 Mensaje:\n${mensaje}`;
  window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`, '_blank');
};
