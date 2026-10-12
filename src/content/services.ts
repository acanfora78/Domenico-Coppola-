import type { ImageKey } from './images';

export type ServiceSummary = {
  slug: string;
  href: string;
  name: string;
  /** Nome breve per select / menu */
  short: string;
  /** Una riga per griglia servizi */
  line: string;
  image: ImageKey;
};

/**
 * Servizi — l'ordine è quello della griglia in Home e del select nel form preventivo.
 * I contenuti estesi delle pagine servizio arrivano in fase 3.
 */
export const services: ServiceSummary[] = [
  {
    slug: 'cancelli-e-serrande',
    href: '/cancelli-e-serrande',
    name: 'Cancelli e serrande',
    short: 'Cancello / serranda',
    line: 'Battenti o scorrevoli, classici o essenziali. Disegnati sulla facciata, misurati in cantiere.',
    image: 'cancelloScorrevoleDoghe01',
  },
  {
    slug: 'recinzioni-plasmate',
    href: '/recinzioni-plasmate',
    name: 'Recinzioni plasmate',
    short: 'Recinzione',
    line: 'Pannelli con decori tagliati al plasma su vostro disegno. Privacy, confine, carattere.',
    image: 'recinzioneOrnamentale',
  },
  {
    slug: 'ringhiere',
    href: '/ringhiere',
    name: 'Ringhiere',
    short: 'Ringhiera',
    line: 'Balconi, terrazzi, scale. Montanti a passo regolare, saldature pulite, corrimano che si tocca volentieri.',
    image: 'ringhieraSaldatura',
  },
  {
    slug: 'pensiline-e-tettoie',
    href: '/pensiline-e-tettoie',
    name: 'Pensiline e tettoie',
    short: 'Pensilina / tettoia',
    line: 'Ingressi, posti auto, terrazzi. Struttura calcolata, tiranti e ancoraggi a vista o nascosti.',
    image: 'phPensilina',
  },
  {
    slug: 'carpenteria',
    href: '/carpenteria',
    name: 'Carpenteria metallica',
    short: 'Struttura / soppalco',
    line: 'Strutture per edifici civili e industriali, soppalchi, scale. Dal profilo grezzo alla posa.',
    image: 'strutturaTelaio',
  },
  {
    slug: 'infissi-blindati',
    href: '/infissi-blindati',
    name: 'Infissi blindati',
    short: 'Infisso blindato',
    line: 'Porte e finestre rinforzate per casa e attività. Telaio in acciaio, chiusure di sicurezza.',
    image: 'phBlindato',
  },
  {
    slug: 'arredo-esterno',
    href: '/carpenteria#arredo-esterno',
    name: 'Arredo esterno',
    short: 'Arredo esterno',
    line: 'Panchine, fioriere, elementi per giardini e spazi pubblici. Ferro che sta fuori tutto l’anno.',
    image: 'phArredo',
  },
];

export const serviceOptions = [...services.map((s) => s.short), 'Altro / non so'];
