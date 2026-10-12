/**
 * Geometria condivisa tra il disegno SVG (HeroDrawing.astro) e lo script della hero.
 * Coordinate nel sistema del prospetto: viewBox 1200 × 800, quota terreno y = 700.
 */
export type Box = [number, number, number, number];

/** Inquadratura generale e inquadrature per stato (rapporto 3:2) */
export const VIEW_FULL: Box = [0, 40, 1200, 800];
export const VIEW_STATES: Box[] = [
  [-150, 360, 720, 480], // 01 cancello
  [300, 180, 720, 480], // 02 ringhiera
  [290, 275, 720, 480], // 03 pensilina
  [670, 360, 720, 480], // 04 recinzione plasma
  [230, 163, 840, 560], // 05 struttura
];

/** Su mobile l'area del disegno è verticale: inquadrature quadrate più strette */
export const VIEW_STATES_MOBILE: Box[] = [
  [48, 420, 360, 360],
  [510, 260, 300, 300],
  [500, 360, 300, 300],
  [860, 420, 340, 340],
  [350, 143, 600, 600],
];

/** Punto di "saldatura" dove scocca la scintilla a forma completata */
export const SPARK_POINTS: [number, number][] = [
  [228, 632],
  [714, 398],
  [606, 478],
  [1096, 604],
  [639, 441],
];

/** Scansione dello scroll: intro, 5 segmenti, finale con tutto montato */
export const TIMING = {
  intro: 0.05,
  seg: 0.165,
  draw: 0.55, // frazione del segmento dedicata al disegno
  finale: 0.885,
};
