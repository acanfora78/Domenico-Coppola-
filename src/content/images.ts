/**
 * REGISTRO IMMAGINI — unico punto da toccare per lo shooting definitivo.
 *
 * Ogni voce ha un id semantico usato in tutto il sito. Per sostituire una foto:
 *   1. metti il file nuovo in src/assets/ (es. src/assets/shooting/cancello-01.jpg)
 *   2. cambia l'import qui sotto
 * Le voci con `src: null` vengono rese come placeholder tecnico con `label`.
 *
 * NOTA: le foto in src/assets/temp/ provengono dal sito attuale. Diverse sembrano
 * immagini stock e non lavori Di Lallo: vanno sostituite prima della pubblicazione.
 */
import type { ImageMetadata } from 'astro';

import struttura01 from '@/assets/temp/109892893.jpg';
import officinaMola from '@/assets/temp/110983302.jpg';
import officinaScintille from '@/assets/temp/113485382.jpg';
import recinzioneOrnamentale from '@/assets/temp/119438768.jpg';
import serrandaLavorazione from '@/assets/temp/134007650.jpg';
import recinzioneLance01 from '@/assets/temp/18026380.jpg';
import cancelloScorrevoleDoghe01 from '@/assets/temp/198282974.jpg';
import cancelloBattenteClassico from '@/assets/temp/219092739.jpg';
import recinzioneDoghe from '@/assets/temp/230552547.jpg';
import cancelloScorrevoleDoghe02 from '@/assets/temp/231243429.jpg';
import officinaBanco from '@/assets/temp/233930731.jpg';
import recinzioneLance02 from '@/assets/temp/234593365.jpg';
import ringhieraSaldatura from '@/assets/temp/75100801.jpg';

export type Img = {
  src: ImageMetadata | null;
  alt: string;
  /** Etichetta del placeholder (anche didascalia tecnica) */
  label: string;
  /** true = sorgente debole: mai a tutto schermo */
  lowRes?: boolean;
};

const img = (src: ImageMetadata | null, alt: string, label: string, lowRes = false): Img => ({
  src,
  alt,
  label,
  lowRes,
});

export const images = {
  // — Laboratorio
  officinaBanco: img(
    officinaBanco,
    'Fabbro al banco da lavoro mentre taglia un profilo con la smerigliatrice, scintille nella penombra del laboratorio',
    'Laboratorio — taglio al banco',
  ),
  officinaScintille: img(
    officinaScintille,
    'Scintille arancioni durante la molatura di un telaio in ferro',
    'Laboratorio — molatura telaio',
  ),
  officinaMola: img(
    officinaMola,
    'Mano con guanto da lavoro che rifinisce un profilato in ferro con la smerigliatrice angolare',
    'Laboratorio — rifinitura profilo',
  ),

  // — Cancelli e serrande
  cancelloScorrevoleDoghe01: img(
    cancelloScorrevoleDoghe01,
    'Cancello scorrevole in ferro a doghe orizzontali color antracite davanti a un garage',
    'Cancello scorrevole a doghe',
  ),
  cancelloScorrevoleDoghe02: img(
    cancelloScorrevoleDoghe02,
    'Cancello scorrevole moderno a lamelle orizzontali tra due pilastri intonacati',
    'Cancello scorrevole a lamelle',
  ),
  cancelloBattenteClassico: img(
    cancelloBattenteClassico,
    'Cancello carrabile a due ante con profilo ad arco e punte decorative, tra pilastri in muratura',
    'Cancello battente a due ante',
  ),
  serrandaLavorazione: img(
    serrandaLavorazione,
    'Intervento con smerigliatrice sul telaio di una serranda avvolgibile, scintille in primo piano',
    'Serranda — intervento in opera',
  ),

  // — Recinzioni
  recinzioneOrnamentale: img(
    recinzioneOrnamentale,
    'Dettaglio di recinzione in ferro battuto con volute, punte e barre a tortiglione',
    'Recinzione ornamentale',
  ),
  recinzioneLance01: img(
    recinzioneLance01,
    'Recinzione in ferro con aste verticali e puntali a lancia lungo un giardino',
    'Recinzione con puntali a lancia',
  ),
  recinzioneLance02: img(
    recinzioneLance02,
    'Fila di aste in ferro con puntali a lancia controluce al tramonto',
    'Recinzione — dettaglio puntali',
  ),
  recinzioneDoghe: img(
    recinzioneDoghe,
    'Recinzione a doghe orizzontali scure su muretto bianco con pilastri',
    'Recinzione a doghe orizzontali',
    true, // formato panoramico basso: niente usi a tutto schermo
  ),

  // — Ringhiere
  ringhieraSaldatura: img(
    ringhieraSaldatura,
    'Saldatura in opera di una ringhiera con barre a tortiglione ed elementi a gabbia',
    'Ringhiera — saldatura in opera',
  ),

  // — Strutture
  strutturaTelaio: img(
    struttura01,
    'Telaio in profilati di acciaio visto dal basso contro il cielo',
    'Struttura metallica — telaio',
  ),

  // — Placeholder: foto da scattare nello shooting
  phPlasma: img(null, '', 'FOTO — Pannello taglio plasma, dettaglio decoro'),
  phPensilina: img(null, '', 'FOTO — Pensilina in ferro e vetro, ingresso'),
  phSoppalco: img(null, '', 'FOTO — Soppalco in acciaio, interno'),
  phArredo: img(null, '', 'FOTO — Fioriera / panchina in ferro'),
  phBlindato: img(null, '', 'FOTO — Infisso blindato, vista esterna'),
  phRitratto: img(null, '', 'FOTO — Ritratto padre e figlio in laboratorio'),
  phRinghieraScala: img(null, '', 'FOTO — Ringhiera scala interna'),
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof images;
