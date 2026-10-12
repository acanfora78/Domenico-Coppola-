import Lenis from 'lenis';

/**
 * Smooth scroll globale. Disattivato con prefers-reduced-motion.
 * Singleton: gli altri script lo importano da qui (es. hero → ScrollTrigger).
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const lenis: Lenis | null = reduce
  ? null
  : new Lenis({
      autoRaf: true,
      anchors: { offset: -80 },
      lerp: 0.11,
    });
