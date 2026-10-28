import { build } from 'esbuild';
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(join(here, 'out'), { recursive: true });
await build({ entryPoints: [join(here, 'render.jsx')], bundle: true, platform: 'node', format: 'esm', outfile: join(here, 'out/render.mjs'), jsx: 'automatic', external: ['react', 'react-dom'], logLevel: 'error' });
const { render } = await import(pathToFileURL(join(here, 'out/render.mjs')).href + '?t=' + Date.now());
const rows = render();
const statsPath = join(here, 'out/stats.json');
const stats = existsSync(statsPath) ? JSON.parse(readFileSync(statsPath, 'utf8')) : {};
const pct = (s, k) => (s ? `${s[k].toFixed(0)}%` : '—');
const frame = (r, which, label) => {
  const s = stats[`${r.slug}-${which}`];
  return `<figure class="col">
    <figcaption class="label head"><span>${label}</span><span class="meta">ink ${pct(s, 'ink')} · pink ${pct(s, 'pink')}</span></figcaption>
    <div class="plate" style="aspect-ratio:${r.aspect}" data-frame="${r.slug}-${which}">${which === 'live' ? r.live : r.next}</div>
    <div class="card"><div class="label row"><span class="no">${r.no}</span><span>${r.client}</span><span class="yr">${r.years}</span></div>
    <h3>${r.title}</h3></div>
  </figure>`;
};
const html = `<title>Cover Art Study</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400..600&display=swap" rel="stylesheet">
<style>
:root{--paper:245 242 236;--sheet:251 249 245;--ink:22 22 22;--accent:245 0 135;--accent-ink:196 0 108;--mute:104 104 104;--rule:rgb(22 22 22/.16);
--font-mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;--font-display:'Archivo','Arial Narrow',Arial,sans-serif;--font-body:'Instrument Sans','Helvetica Neue',Arial,sans-serif;color-scheme:light}
body{background:rgb(var(--paper));color:rgb(var(--ink));font-family:var(--font-body);margin:0;line-height:1.5}
.wrap{max-width:1440px;margin:0 auto;padding-block:40px 80px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
@media(min-width:768px){.wrap{padding-left:max(48px,env(safe-area-inset-left,0px));padding-right:max(48px,env(safe-area-inset-right,0px))}}
.label{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase}
h1{font-family:var(--font-display);font-variation-settings:'wdth' 70;font-weight:700;text-transform:uppercase;font-size:clamp(40px,6vw,88px);line-height:.95;margin:12px 0 0;text-wrap:balance}
h1 i{font-style:normal;color:rgb(var(--accent))}
.intro{max-width:62ch;color:#3a3a3a;font-size:17px;margin-top:20px}
.top{border-top:1px solid rgb(var(--ink));padding-top:10px;display:flex;justify-content:space-between;gap:16px;color:rgb(var(--mute))}
section{margin-top:72px;border-top:1px solid rgb(var(--ink));padding-top:12px}
.sec{display:flex;justify-content:space-between;gap:16px;align-items:baseline;flex-wrap:wrap}
.sec .no{color:rgb(var(--accent-ink))}
.pair{display:grid;grid-template-columns:1fr;gap:28px;margin-top:20px}
@media(min-width:820px){.pair{grid-template-columns:1fr 1fr;gap:24px}.pair.portrait{grid-template-columns:minmax(0,420px) minmax(0,420px)}}
.col{margin:0;min-width:0}
.head{display:flex;justify-content:space-between;gap:12px;color:rgb(var(--mute));margin-bottom:8px}
.head span:first-child{color:rgb(var(--ink))}
.plate{position:relative;width:100%;max-width:100%;border:1px solid var(--rule);overflow:hidden;background:rgb(var(--sheet))}
.plate svg{display:block}
.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.w-full{width:100%}.h-full{height:100%}.overflow-hidden{overflow:hidden}.bg-sheet{background:rgb(var(--sheet))}
.card .row{display:grid;grid-template-columns:auto 1fr auto;gap:16px;margin-top:12px;color:#3a3a3a}
.card .no{color:rgb(var(--accent-ink))}.card .yr{color:rgb(var(--mute))}
.card h3{font-family:var(--font-display);font-variation-settings:'wdth' 70;font-weight:700;text-transform:uppercase;font-size:clamp(24px,2.6vw,36px);line-height:.95;margin:8px 0 0}
.note{max-width:70ch;color:#3a3a3a;font-size:15px;margin-top:18px}
ul.rules{margin:24px 0 0;padding:0;list-style:none;display:grid;gap:6px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
ul.rules li{border-top:1px solid var(--rule);padding-top:8px;font-size:14px;color:#3a3a3a}
</style>
<div class="wrap">
  <div class="top label"><span>Portfolio · Cover art direction</span><span>Study — not on the site yet</span></div>
  <h1>Project covers:<br>current <i>vs</i> proposed</h1>
  <p class="intro">Three covers redrawn as conceptual diagrams for an architecture and urban-research publication: mostly paper, fine ink linework, grey for context and the site pink only where the project’s point is. Frames use the same proportions as the cards on the site (01 and 04 are wide, 03 is tall). The ink and pink figures are measured shares of each frame’s pixels.</p>
  <ul class="rules">
    <li>No solid black masses — linework 0.5–1.2 units</li>
    <li>Pink marks one idea per project</li>
    <li>Mono labels name what the diagram shows</li>
    <li>Concepts, not maps or data</li>
  </ul>
  ${rows.map((r) => `<section><div class="sec"><span class="label"><span class="no">${r.no}</span> &nbsp;${r.client}</span><span class="label" style="color:rgb(var(--mute))">${r.aspect.replace(' / ', ':')} card</span></div>
  <div class="pair ${r.aspect === '4 / 5' ? 'portrait' : ''}">${frame(r, 'live', 'Current — live site')}${frame(r, 'next', 'Proposed')}</div>
  <p class="note">${r.note}</p></section>`).join('\n')}
</div>`;
writeFileSync(join(here, 'out/cover-study.html'), html);
console.log('ok', rows.length);
