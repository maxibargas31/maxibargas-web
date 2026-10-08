/* ═══════════════════════════════════════════════════════
   MAXI BARGAS — CONFIGURACIÓN CENTRAL
   Único lugar para datos comerciales y de marca.
   Cambiar un valor acá lo actualiza en todo el sitio.
   ═══════════════════════════════════════════════════════ */

export const siteUrl = 'https://maxibargas.com';

/* ── MARCA ── */
export const brand = {
  name: 'Maxi Bargas',
  method: 'Kine4Life',
  role: 'Kinesiólogo terapéutico',
  roles: 'Kinesiólogo · Masajista terapéutico · Entrenador',
  attention: 'Atención individual 1 a 1',
  city: 'Ciudad de la Costa',
  country: 'Uruguay',
  countryCode: 'UY',
  locale: 'es_UY',
} as const;

/* ── CONTACTO ── */
export const contact = {
  email: 'maxibargas31@gmail.com',
  whatsapp: {
    e164: '59891364790', // formato internacional sin "+" ni 0 inicial (lo usa wa.me)
    display: '091 364 790',
  },
} as const;

/** Genera el link de WhatsApp. Es el ÚNICO lugar donde se arma una URL wa.me. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${contact.whatsapp.e164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Mensajes predefinidos de WhatsApp. */
export const whatsappMessages = {
  kine4life: 'Hola Maxi, quiero consultar sobre el Programa Kine4Life',
  cuerpoActivo: 'Hola Maxi, quiero saber más sobre el programa Cuerpo Activo',
  evaluacion: 'Hola Maxi, quiero una evaluación',
} as const;

/* ── RESERVAS ── */
export const booking = {
  calendly: {
    masaje: 'https://calendly.com/maxibargas31/masaje-terapeutico',
  },
  /** Días de atención (servicios, contacto). */
  days: [
    { name: 'Lunes', short: 'Lun', available: true },
    { name: 'Martes', short: 'Mar', available: false },
    { name: 'Miércoles', short: 'Mié', available: true },
    { name: 'Jueves', short: 'Jue', available: false },
    { name: 'Viernes', short: 'Vie', available: true },
  ],
  /** Turnos (servicios). */
  slots: [
    { time: '9:00', label: 'Mañana' },
    { time: '10:30', label: 'Mañana' },
    { time: '12:00', label: 'Mediodía' },
    { time: '16:00', label: 'Tarde' },
    { time: '17:30', label: 'Tarde' },
  ],
} as const;

/** "Lunes, Miércoles y Viernes" */
export function availableDaysText(): string {
  const names = booking.days.filter((d) => d.available).map((d) => d.name);
  return names.length > 1 ? `${names.slice(0, -1).join(', ')} y ${names.at(-1)}` : names.join('');
}

/* ── SERVICIOS ── */
export const services = {
  masaje: {
    name: 'Masaje Terapéutico',
    price: '$1.300',
    duration: '60 minutos',
    durationShort: '60 min',
    booking: booking.calendly.masaje,
  },
  kine4life: {
    name: 'Programa Kine4Life',
    price: 'Consultar',
    duration: '3 meses',
    whatsappMessage: whatsappMessages.kine4life,
  },
  cuerpoActivo: {
    name: 'Cuerpo Activo',
    price: 'Consultar',
    frequency: '2 sesiones semanales',
    href: '/cuerpo-activo',
    whatsappMessage: whatsappMessages.cuerpoActivo,
  },
} as const;

/* ── NAVEGACIÓN ── */
// Blog quitado temporalmente del menú hasta que tenga contenido real.
export const nav = [
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' },
] as const;

/* ── SEO POR DEFECTO ── */
export const seo = {
  defaultTitle: 'Maxi Bargas — Kinesiología Terapéutica · Ciudad de la Costa',
  // TODO(SEO): description neutra temporal. Reemplazar por copy definitivo.
  defaultDescription: 'Maxi Bargas, kinesiólogo terapéutico en Ciudad de la Costa, Uruguay.',
} as const;

/* ── V2 (Kine4Life) ── */
// Menú de la Home V2. Las demás páginas siguen con `nav` hasta migrar su diseño.
export const navV2 = [
  { label: 'Método', href: '/#metodo' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Contacto', href: '/contacto' },
] as const;

// Destinos de los CTA de la V2 (provisorios, centralizados para cambiarlos fácil).
export const ctaV2 = {
  // No existe todavía un evento de Calendly para evaluación: por ahora va a WhatsApp.
  evaluacion: whatsappLink(whatsappMessages.evaluacion),
  // "Agendar" lleva a las opciones para empezar.
  agendar: '/#empezar',
  contame: '/#contame',
  masaje: booking.calendly.masaje,
  proceso: '/servicios',
  whatsapp: whatsappLink(),
} as const;
