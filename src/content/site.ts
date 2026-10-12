/**
 * Dati aziendali — unica fonte per header, footer, contatti e Schema.org.
 * I valori marcati TBC vanno confermati con il cliente prima della messa online.
 */
export const TBC = (what: string) => `[DA CONFERMARE: ${what}]`;

export const site = {
  name: 'Di Lallo Carpenteria',
  legalName: 'Di Lallo Carpenteria', // TBC: ragione sociale esatta
  url: 'https://www.carpenteriadilallo.com',
  tagline: 'Carpenteria metallica su misura a Scafati',
  vat: '05559490650',
  phone: {
    display: '+39 393 942 9566',
    href: 'tel:+393939429566',
    e164: '+393939429566',
  },
  whatsapp: 'https://wa.me/393939429566',
  email: null as string | null, // [DA DEFINIRE] — sarà @carpenteriadilallo.com
  emailPlaceholder: '[DA DEFINIRE]@carpenteriadilallo.com',
  address: {
    street: "Via A. Sant'Agostino 1",
    postalCode: '84018',
    city: 'Scafati',
    province: 'SA',
    region: 'Campania',
    country: 'IT',
  },
  // Coordinate approssimative del centro di Scafati — TBC con il punto esatto del laboratorio
  geo: { lat: 40.7536, lng: 14.5276 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Via+A.+Sant'Agostino+1,+84018+Scafati+SA",
  hours: TBC('orari di apertura del laboratorio'),
  owners: TBC('nomi dei titolari, padre e figlio'),
  since: TBC('anno di inizio attività'),
  instagram: TBC('URL profilo Instagram'),
  area: {
    confirmed: ['Scafati', 'Provincia di Salerno'],
    tbc: TBC('anche area napoletana / vesuviana?'),
    // Comuni citati nella sezione "Zona servita". Solo provincia di Salerno finché non confermato.
    towns: [
      'Scafati',
      'Angri',
      "Sant'Egidio del Monte Albino",
      'Pagani',
      'Nocera Inferiore',
      'Nocera Superiore',
      'San Marzano sul Sarno',
      'San Valentino Torio',
      'Sarno',
      'Corbara',
      'Cava de’ Tirreni',
      'Salerno',
    ],
  },
} as const;

export const nav = [
  { href: '/lavori', label: 'Lavori' },
  { href: '/carpenteria', label: 'Carpenteria' },
  { href: '/cancelli-e-serrande', label: 'Cancelli e serrande' },
  { href: '/recinzioni-plasmate', label: 'Recinzioni' },
  { href: '/chi-siamo', label: 'Chi siamo' },
] as const;
