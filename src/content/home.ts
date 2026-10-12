/**
 * Testi della Home. Frasi brevi, da artigiano. Niente slogan da agenzia.
 */

/** Stati della hero: l'ordine segue il disegno (vedi components/home/HeroDrawing.astro) */
export const heroStates = [
  {
    n: '01',
    name: 'Cancelli',
    line: 'Battente o scorrevole, misurato sul vano reale. Cerniere e guide scelte per durare decenni.',
    href: '/cancelli-e-serrande',
    cta: 'Cancelli e serrande',
    quote: 'L 3200',
  },
  {
    n: '02',
    name: 'Ringhiere',
    line: 'Montanti a passo costante, corrimano continuo, ancoraggi a regola. Sicure prima che belle.',
    href: '/ringhiere',
    cta: 'Ringhiere',
    quote: 'H 1000',
  },
  {
    n: '03',
    name: 'Pensiline',
    line: 'Una copertura sopra la porta che regge pioggia e vento. Tiranti dimensionati, non improvvisati.',
    href: '/pensiline-e-tettoie',
    cta: 'Pensiline e tettoie',
    quote: 'L 2400',
  },
  {
    n: '04',
    name: 'Recinzioni plasmate',
    line: 'Lamiera tagliata al plasma su vostro disegno. Il decoro diventa confine.',
    href: '/recinzioni-plasmate',
    cta: 'Recinzioni plasmate',
    quote: 'Passo 2000',
  },
  {
    n: '05',
    name: 'Strutture e soppalchi',
    line: 'Colonne, travi, controventi. Carpenteria per edifici civili e industriali, montata da noi.',
    href: '/carpenteria',
    cta: 'Carpenteria metallica',
    quote: 'HEA · IPE',
  },
] as const;

export const process = [
  {
    n: '01',
    title: 'Sopralluogo',
    text: 'Veniamo sul posto. Prendiamo le misure vere, guardiamo muri, pendenze, ancoraggi. Ascoltiamo cosa vi serve.',
  },
  {
    n: '02',
    title: 'Progetto',
    text: 'Disegno quotato, scelta di profili, spessori e finitura. Un preventivo chiaro, voce per voce.',
  },
  {
    n: '03',
    title: 'Laboratorio',
    text: 'Taglio, saldatura, molatura, trattamento anticorrosione. Tutto nel nostro laboratorio di Scafati.',
  },
  {
    n: '04',
    title: 'Posa',
    text: 'Montiamo noi, con la nostra squadra. Controlliamo piombi, aperture e chiusure prima di andarcene.',
  },
] as const;
