// Générateur statique sans dépendance. Sortie : public/
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';

const OUT = 'public';
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const list = d => (existsSync(d) ? readdirSync(d) : []);

function inline(t) {
  return esc(t)
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" rel="noopener">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
function md(src) {
  const out = []; let inList = false;
  const close = () => { if (inList) { out.push('</ul>'); inList = false; } };
  for (const line of src.split('\n')) {
    let m;
    if ((m = line.match(/^(#{1,4})\s+(.*)/))) { close(); out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); }
    else if ((m = line.match(/^\s*[-*]\s+(.*)/))) { if (!inList) { out.push('<ul>'); inList = true; } out.push(`<li>${inline(m[1])}</li>`); }
    else if (line.trim() === '') close();
    else { close(); out.push(`<p>${inline(line)}</p>`); }
  }
  close(); return out.join('\n');
}
function front(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return [{}, raw];
  const meta = {};
  for (const l of m[1].split('\n')) { const i = l.indexOf(':'); if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim(); }
  return [meta, m[2]];
}
const page = (title, body, root = '') => `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><link rel="stylesheet" href="${root}style.css"></head>
<body><header><a href="${root}index.html">Veille PM</a><nav><a href="${root}index.html#flash">Flash</a><a href="${root}index.html#weekly">Hebdo</a><a href="${root}index.html#monthly">Mensuel</a></nav></header>
<main>${body}</main></body></html>`;

rmSync(OUT, { recursive: true, force: true });
for (const d of ['flash', 'weekly', 'monthly']) mkdirSync(`${OUT}/${d}`, { recursive: true });
writeFileSync(`${OUT}/style.css`, readFileSync('scripts/style.css', 'utf8'));

const entries = { flash: [], weekly: [], monthly: [] };

for (const [dir, kind] of [['flash', 'flash'], ['monthly', 'monthly']]) {
  for (const f of list(dir).filter(f => f.endsWith('.md')).sort().reverse()) {
    const [meta, body] = front(readFileSync(`${dir}/${f}`, 'utf8'));
    const slug = f.replace(/\.md$/, ''); const title = meta.titre || slug;
    writeFileSync(`${OUT}/${kind}/${slug}.html`, page(title, `<article><h1>${esc(title)}</h1>${md(body)}</article>`, '../'));
    entries[kind].push({ slug, title });
  }
}

for (const f of list('data/weekly').filter(f => f.endsWith('.json')).sort().reverse()) {
  const d = JSON.parse(readFileSync(`data/weekly/${f}`, 'utf8'));
  const slug = f.replace(/\.json$/, '');
  const items = [...(d.items || [])].sort((a, b) => b.score - a.score);
  const rows = items.map(i => `<li class="item${i.signal_faible ? ' weak' : ''}">
<span class="score">${esc(Number(i.score).toFixed(1))}</span>
<div><a href="${esc(i.url)}" rel="noopener">${esc(i.titre)}</a>${i.signal_faible ? ' <em class="tag">signal faible</em>' : ''}
<div class="meta">${esc(i.theme)} · ${esc(i.type)} · ${esc(i.source)} · ${esc(i.date)}</div>
<p>${esc(i.resume)}</p><p class="sowhat"><strong>So what :</strong> ${esc(i.so_what)}</p></div></li>`).join('\n');
  writeFileSync(`${OUT}/weekly/${slug}.html`, page(`Collecte ${slug}`, `<article><h1>Collecte ${esc(slug)}</h1><ul class="items">${rows}</ul></article>`, '../'));
  entries.weekly.push({ slug, title: `Collecte ${slug} (${items.length} items)` });
}

const block = (id, label, kind, max) => `<section id="${id}"><h2>${label}</h2>${entries[kind].length
  ? `<ul>${entries[kind].slice(0, max).map(e => `<li><a href="${kind}/${e.slug}.html">${esc(e.title)}</a></li>`).join('')}</ul>`
  : '<p class="empty">Aucune édition pour l\'instant.</p>'}</section>`;
writeFileSync(`${OUT}/index.html`, page('Veille PM', `<h1>Veille PM</h1><p class="lead">Cloud, telco, hardware, produit, biotech, éco/finance. Sources de fond uniquement : preprints, essais, analyses, open source.</p>
${block('flash', 'Flash quotidiens', 'flash', 30)}${block('weekly', 'Collectes hebdomadaires', 'weekly', 26)}${block('monthly', 'Synthèses mensuelles', 'monthly', 24)}`));
console.log(`OK: ${entries.flash.length} flash, ${entries.weekly.length} hebdo, ${entries.monthly.length} mensuel`);
