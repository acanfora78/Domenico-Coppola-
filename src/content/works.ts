import type { ImageKey } from './images';
import { TBC } from './site';

export type WorkCategory =
  | 'cancelli'
  | 'serrande'
  | 'recinzioni'
  | 'ringhiere'
  | 'pensiline'
  | 'strutture'
  | 'infissi'
  | 'arredo';

export const workCategories: Record<WorkCategory, string> = {
  cancelli: 'Cancelli',
  serrande: 'Serrande',
  recinzioni: 'Recinzioni',
  ringhiere: 'Ringhiere',
  pensiline: 'Pensiline e tettoie',
  strutture: 'Strutture',
  infissi: 'Infissi blindati',
  arredo: 'Arredo esterno',
};

export type Work = {
  id: string;
  title: string;
  category: WorkCategory;
  location: string;
  type: string;
  image: ImageKey;
  featured?: boolean;
};

/**
 * Portfolio. Le località sono da confermare: le foto attuali non hanno dati di cantiere.
 */
export const works: Work[] = [
  {
    id: 'cancello-scorrevole-doghe',
    title: 'Cancello scorrevole a doghe',
    category: 'cancelli',
    location: TBC('comune'),
    type: 'Residenziale · scorrevole',
    image: 'cancelloScorrevoleDoghe01',
    featured: true,
  },
  {
    id: 'recinzione-ornamentale',
    title: 'Recinzione ornamentale',
    category: 'recinzioni',
    location: TBC('comune'),
    type: 'Residenziale · ferro lavorato',
    image: 'recinzioneOrnamentale',
    featured: true,
  },
  {
    id: 'cancello-battente-classico',
    title: 'Cancello carrabile a due ante',
    category: 'cancelli',
    location: TBC('comune'),
    type: 'Residenziale · battente',
    image: 'cancelloBattenteClassico',
    featured: true,
  },
  {
    id: 'ringhiera-tortiglione',
    title: 'Ringhiera con barre a tortiglione',
    category: 'ringhiere',
    location: TBC('comune'),
    type: 'Residenziale · balcone',
    image: 'ringhieraSaldatura',
    featured: true,
  },
  {
    id: 'telaio-strutturale',
    title: 'Telaio in profilati d’acciaio',
    category: 'strutture',
    location: TBC('comune'),
    type: 'Strutture · civile',
    image: 'strutturaTelaio',
  },
  {
    id: 'recinzione-lance',
    title: 'Recinzione con puntali a lancia',
    category: 'recinzioni',
    location: TBC('comune'),
    type: 'Residenziale · giardino',
    image: 'recinzioneLance01',
  },
  {
    id: 'cancello-lamelle',
    title: 'Cancello a lamelle orizzontali',
    category: 'cancelli',
    location: TBC('comune'),
    type: 'Residenziale · scorrevole',
    image: 'cancelloScorrevoleDoghe02',
  },
  {
    id: 'recinzione-doghe',
    title: 'Recinzione a doghe su muretto',
    category: 'recinzioni',
    location: TBC('comune'),
    type: 'Residenziale · privacy',
    image: 'recinzioneDoghe',
  },
  {
    id: 'serranda-commerciale',
    title: 'Serranda avvolgibile',
    category: 'serrande',
    location: TBC('comune'),
    type: 'Commerciale · manutenzione',
    image: 'serrandaLavorazione',
  },
];

export const featuredWorks = works.filter((w) => w.featured);
