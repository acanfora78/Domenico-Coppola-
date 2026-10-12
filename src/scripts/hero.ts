import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenis } from './smooth';
import { VIEW_FULL, VIEW_STATES, VIEW_STATES_MOBILE, SPARK_POINTS, TIMING } from '@/components/home/hero-geometry';

gsap.registerPlugin(ScrollTrigger);

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function initHero() {
  // La modalità animata è decisa in <head> (classe html.motion): senza, resta la vista sequenziale.
  if (!document.documentElement.classList.contains('motion')) return;

  const hero = document.querySelector<HTMLElement>('#hero');
  if (!hero) return;
  const svg = hero.querySelector<SVGSVGElement>('.hero-svg')!;
  const use = hero.querySelector<SVGUseElement>('.hero-use')!;
  const title = hero.querySelector<HTMLElement>('.hero-title')!;
  const fill = hero.querySelector<HTMLElement>('.hero-progress-fill')!;
  const tav = hero.querySelector<HTMLElement>('.hero-tav')!;
  const panels = [...hero.querySelectorAll<HTMLElement>('[data-panel]')];
  const ticks = [...hero.querySelectorAll<HTMLButtonElement>('[data-tick]')];
  const spark = hero.querySelector<SVGGElement>('.spark')!;
  const sparkGlow = spark.querySelector('.spark-glow')!;
  const sparkRays = spark.querySelector('.spark-rays')!;
  const sparkCore = spark.querySelector('.spark-core')!;
  const desktop = window.matchMedia('(min-width: 1024px)');

  const { intro, seg, draw, finale } = TIMING;
  const starts = [0, 1, 2, 3, 4].map((i) => intro + i * seg);
  const prevD = [1, 1, 1, 1, 1];
  let facadeDraw = 1;
  let current = -1;
  let lastP = 0;

  const boxFor = (k: number) =>
    (k >= 1 && k <= 5 ? (desktop.matches ? VIEW_STATES : VIEW_STATES_MOBILE)[k - 1] : VIEW_FULL).join(' ');

  // — Scintilla: one-shot, indipendente dalla velocità di scroll
  const fireSpark = (i: number) => {
    const [x, y] = SPARK_POINTS[i];
    spark.setAttribute('transform', `translate(${x} ${y})`);
    gsap.killTweensOf([spark, sparkGlow, sparkRays, sparkCore]);
    gsap
      .timeline()
      .set(spark, { opacity: 1 })
      .fromTo(sparkGlow, { scale: 0.2, opacity: 0.7 }, { scale: 1.8, opacity: 0, duration: 0.7, ease: 'power2.out' }, 0)
      .fromTo(sparkRays, { scale: 0.3, opacity: 1, rotate: 0 }, { scale: 1.35, opacity: 0, rotate: 12, duration: 0.55, ease: 'power3.out' }, 0)
      .fromTo(sparkCore, { opacity: 1 }, { opacity: 0, duration: 0.9, ease: 'power1.in' }, 0)
      .set(spark, { opacity: 0 });
  };

  const setState = (k: number) => {
    if (k === current) return;
    current = k;
    hero.dataset.state = String(k);
    panels.forEach((p) => {
      const on = Number(p.dataset.panel) === k;
      p.classList.toggle('is-active', on);
      p.inert = !on;
    });
    ticks.forEach((t) => {
      const n = Number(t.dataset.tick);
      if (n === Math.min(k, 5) && k > 0) t.setAttribute('aria-current', 'step');
      else t.removeAttribute('aria-current');
    });
    tav.textContent = String(Math.min(k, 5)).padStart(2, '0');
    gsap.to(svg, { attr: { viewBox: boxFor(k) }, duration: 1.3, ease: 'power3.inOut', overwrite: true });
  };

  const render = (p: number) => {
    const forward = p >= lastP;
    lastP = p;
    const s = use.style;

    for (let i = 0; i < 5; i++) {
      const d = 1 - clamp01((p - starts[i]) / (seg * draw));
      let o: number;
      // Nel finale la struttura resta in trasparenza, così si leggono tutti gli elementi montati
      if (p >= finale) o = i === 4 ? 1 - 0.65 * clamp01((p - finale) / 0.05) : clamp01((p - finale) / 0.05);
      else o = i === 4 ? 1 : 1 - clamp01((p - (starts[i] + seg - 0.025)) / 0.025);
      s.setProperty(`--d${i + 1}`, d.toFixed(4));
      s.setProperty(`--o${i + 1}`, o.toFixed(3));
      if (forward && prevD[i] > 0.002 && d <= 0.002) fireSpark(i);
      prevD[i] = d;
    }

    // Stato 05: facciata in trasparenza ("ai raggi X") per leggere la struttura
    const xray = clamp01((p - starts[4]) / 0.03) - clamp01((p - finale) / 0.04);
    s.setProperty('--fo', (1 - 0.72 * xray).toFixed(3));

    if (desktop.matches) {
      const q = clamp01(p / intro);
      title.style.transform = `scale(${1 - 0.36 * q})`;
    } else {
      title.style.transform = '';
    }
    fill.style.transform = `scaleY(${p.toFixed(4)})`;

    const k = p < intro ? 0 : p >= finale ? 6 : Math.min(5, Math.floor((p - intro) / seg) + 1);
    setState(k);
  };

  // — Disegno iniziale della facciata (al caricamento, non legato allo scroll)
  const facade = { v: facadeDraw };
  gsap.to(facade, {
    v: 0,
    duration: 2.4,
    ease: 'power2.inOut',
    delay: 0.15,
    onUpdate: () => {
      facadeDraw = facade.v;
      use.style.setProperty('--df', facadeDraw.toFixed(4));
    },
  });

  const st = ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => render(self.progress),
    onRefresh: (self) => render(self.progress),
  });

  if (lenis) lenis.on('scroll', ScrollTrigger.update);

  // — Indicatore cliccabile: porta allo stato completato
  ticks.forEach((t) => {
    t.addEventListener('click', () => {
      const i = Number(t.dataset.tick) - 1;
      const target = st.start + (starts[i] + seg * draw + 0.01) * (st.end - st.start);
      if (lenis) lenis.scrollTo(target, { duration: 1.6 });
      else window.scrollTo({ top: target });
    });
  });

  render(st.progress);
}
