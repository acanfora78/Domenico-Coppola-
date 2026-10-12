const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Evidenzia i segnaposto [DA CONFERMARE: …] / [DA DEFINIRE] dentro un testo (usare con set:html) */
export const tbcHtml = (s: string) =>
  esc(s).replace(/\[(DA (?:CONFERMARE|DEFINIRE)[^\]]*)\]/g, '<span class="tbc">[$1]</span>');
