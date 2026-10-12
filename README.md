# Di Lallo Carpenteria — sito (bozza)

Astro + Tailwind CSS v4 · GSAP/ScrollTrigger · Lenis · deploy su Vercel (output statico).

## Avvio

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build di produzione in dist/
npm run preview  # serve dist/
npm run check    # type-check
```

## Dove stanno le cose

| Cosa | File |
| --- | --- |
| Dati aziendali (indirizzo, telefono, P.IVA, zona) | `src/content/site.ts` |
| **Tutte le immagini** (sostituzione shooting) | `src/content/images.ts` |
| Servizi (griglia, select del form) | `src/content/services.ts` |
| Lavori / portfolio | `src/content/works.ts` |
| Testi Home, stati della hero, processo | `src/content/home.ts` |
| Design token (colori, font, scala) | `src/styles/global.css` (`@theme`) |
| Disegno tecnico della hero | `src/components/home/HeroDrawing.astro` + `hero-geometry.ts` |
| Logica hero (scroll, scintilla, camera) | `src/scripts/hero.ts` |

## Segnaposto

Tutto ciò che va verificato col cliente è marcato `[DA CONFERMARE: …]` / `[DA DEFINIRE]` ed è
evidenziato in giallo tratteggiato nella pagina. Cerca `DA CONFERMARE` per trovarli tutti.

## Note

- Le foto in `src/assets/temp/` vengono dal sito attuale; alcune sembrano stock e vanno sostituite.
- Contrasto: il rosso brand `#AD2219` su nero è 2,8:1 → usato solo per fondi (testo off-white 5,8:1),
  linee e scintilla. Per testo rosso su scuro si usa `brand-ink` `#E5584A` (5,3:1).
- `prefers-reduced-motion`: niente smooth scroll, la hero diventa una sequenza statica di 5 tavole.
