import { useMemo, useState } from 'react';
import { useContent, useLang } from '../i18n/index.jsx';
import { LangSwitch } from './Controls.jsx';
import { Arrow } from './primitives.jsx';

export const NAV = ['work', 'expertise', 'initiatives', 'about', 'contact'];

export function Header() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky z-50 bg-paper/95 backdrop-blur-sm border-b border-rule" style={{ top: 'env(safe-area-inset-top, 0px)' }}>
      <div className="gutter mx-auto max-w-sheet flex items-center justify-between h-14">
        <a href="#top" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="display text-[20px] leading-none">AK</span>
          <span className="label text-graphite hidden sm:inline">{t('header.tagline')}</span>
        </a>
        <div className="flex items-center gap-6 lg:gap-8">
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-5 lg:gap-7">
            {NAV.map((n) => (
              <li key={n}>
                <a href={`#${n}`} className="label text-ink hover:text-accent-ink transition-colors">{t(`nav.${n}`)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <LangSwitch className="md:border-l md:border-rule md:pl-6" />
        <button
          type="button"
          className="chip md:hidden label border border-strong px-3 py-1.5"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t('menu.close') : t('menu.open')}
        </button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="md:hidden border-t border-rule bg-paper">
        <ul className="gutter py-4">
          {NAV.map((n, i) => (
            <li key={n} className="border-b border-rule last:border-0">
              <a href={`#${n}`} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-3">
                <span className="display-condensed text-[34px] uppercase">{t(`nav.${n}`)}</span>
                <span className="label text-mute tabular">{lang === 'ru' ? 'А' : 'A'}-0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* Abstract street-grid fragment: a figure-ground drawing, not a real map. */
function CityGrid() {
  const { t } = useLang();
  const { blocks, parks } = useMemo(() => {
    let s = 7;
    const r = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
    const blocks = [];
    const parks = [];
    const cols = [];
    let x = -60;
    while (x < 900) { const w = 46 + r() * 38; cols.push([x, w]); x += w + (cols.length % 4 === 3 ? 22 : 9); }
    const rows = [];
    let y = -60;
    while (y < 760) { const h = 40 + r() * 30; rows.push([y, h]); y += h + (rows.length % 3 === 2 ? 20 : 9); }
    rows.forEach(([by, bh], ri) =>
      cols.forEach(([bx, bw], ci) => {
        // river corridor: skip blocks near the curve
        const cx = bx + bw / 2, cy = by + bh / 2;
        const riverY = 520 - cx * 0.28 + Math.sin(cx / 120) * 40;
        if (Math.abs(cy - riverY) < 52) return;
        const v = r();
        if (v < 0.07) { parks.push({ x: bx, y: by, w: bw, h: bh, k: `${ri}-${ci}` }); return; }
        if (v > 0.8) {
          // subdivide into two plots
          const split = bw * (0.4 + r() * 0.2);
          blocks.push({ x: bx, y: by, w: split - 3, h: bh, k: `${ri}-${ci}a` });
          blocks.push({ x: bx + split + 3, y: by, w: bw - split - 3, h: bh, k: `${ri}-${ci}b` });
        } else blocks.push({ x: bx, y: by, w: bw, h: bh, k: `${ri}-${ci}` });
      }),
    );
    return { blocks, parks };
  }, []);

  const riverPath = useMemo(() => {
    const pts = [];
    for (let x = -80; x <= 900; x += 20) pts.push(`${x},${(520 - (x + 30) * 0.28 + Math.sin((x + 30) / 120) * 40).toFixed(1)}`);
    return 'M' + pts.join(' L');
  }, []);

  return (
    <svg viewBox="0 0 800 640" className="w-full h-full block" role="img" aria-label={t('hero.map.aria')}>
      <defs>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="rgb(var(--ink))" strokeWidth="1" strokeOpacity="0.55" />
        </pattern>
        <clipPath id="frame"><rect x="0" y="0" width="800" height="640" /></clipPath>
      </defs>
      <g clipPath="url(#frame)">
        <g transform="rotate(-9 400 320)">
          {blocks.map((b) => (
            <rect key={b.k} x={b.x} y={b.y} width={b.w} height={b.h} fill="rgb(var(--map-block))" />
          ))}
          {parks.map((b) => (
            <rect key={b.k} x={b.x} y={b.y} width={b.w} height={b.h} fill="url(#hatch)" stroke="rgb(var(--ink))" strokeWidth="0.8" />
          ))}
          <path d={riverPath} fill="none" stroke="rgb(var(--paper))" strokeWidth="64" />
          <path d={riverPath} fill="none" stroke="rgb(var(--ink))" strokeWidth="0.8" strokeDasharray="1 5" transform="translate(0 -22)" />
          <path d={riverPath} fill="none" stroke="rgb(var(--ink))" strokeWidth="0.8" strokeDasharray="1 5" transform="translate(0 22)" />
        </g>
        {/* study area */}
        <polygon className="map-draw" points="300,150 560,118 612,300 470,392 318,346" fill="rgb(var(--mark))" style={{ fillOpacity: 'var(--mark-op)' }} stroke="rgb(var(--line))" strokeWidth="2.5" strokeDasharray="10 6" />
        <circle cx="452" cy="250" r="7" fill="rgb(var(--accent))" stroke="rgb(var(--line))" strokeWidth="1.5" />
        <circle cx="452" cy="250" r="20" fill="none" stroke="rgb(var(--line))" strokeWidth="1.5" />
        {/* transect */}
        <line x1="70" y1="560" x2="740" y2="72" stroke="rgb(var(--line))" strokeWidth="1.5" />
        <g fontFamily="var(--font-mono)" fontSize="13" fill="rgb(var(--accent))">
          <rect x="44" y="560" width="26" height="22" fill="rgb(var(--accent))" stroke="rgb(var(--line))" />
          <text x="51" y="576" fill="rgb(var(--on-accent))">A</text>
          <rect x="740" y="52" width="30" height="22" fill="rgb(var(--accent))" stroke="rgb(var(--line))" />
          <text x="746" y="68" fill="rgb(var(--on-accent))">A′</text>
        </g>
        {/* north arrow */}
        <g transform="translate(748 590)">
          <circle r="22" fill="rgb(var(--paper))" stroke="rgb(var(--ink))" />
          <path d="M0 -15 L7 10 L0 5 L-7 10Z" fill="rgb(var(--ink))" />
          <text y="-28" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="rgb(var(--ink))">N</text>
        </g>
      </g>
    </svg>
  );
}

export function Hero() {
  const { t, lang } = useLang();
  const { site, featured } = useContent();
  const [first, ...rest] = site.name.split(' ');
  const links = [
    ['work', t('hero.link.work'), t('hero.link.work.meta', { n: lang === 'ru' ? featured.length : String(featured.length).padStart(2, '0') })],
    ['about', t('hero.link.about'), t('hero.link.about.meta')],
    ['contact', t('hero.link.contact'), t('hero.link.contact.meta')],
  ];
  return (
    <section id="top" aria-label={site.name} className="relative">
      <div className="gutter mx-auto max-w-sheet pt-6 md:pt-10 pb-14 md:pb-24">
        {/* title block */}
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 label text-mute border-b border-rule pb-3 tabular">
          <span className="col-span-6 md:col-span-3">{t('hero.portfolio')}</span>
          <span className="col-span-6 md:col-span-3 text-right md:text-left">
            {t('sheet')} {lang === 'ru' ? 'А' : 'A'}-00 / {t('hero.index')}
          </span>
          <span className="hidden md:block md:col-span-3">{site.base}</span>
          <span className="hidden md:block md:col-span-3 text-right">{site.coordinates}</span>
        </div>

        <h1 className="display uppercase text-[calc(var(--ds)*clamp(50px,11.6vw,184px))] mt-6 md:mt-10">
          <span className="block">{first}</span>
          <span className="block">
            {rest.join(' ')}
            <span className="mark-dot" aria-hidden="true" />
          </span>
        </h1>

        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-10 mt-8 md:mt-12">
          <div className="col-span-12 lg:col-span-5 flex flex-col">
            <p className="display-condensed uppercase text-[clamp(28px,3.4vw,46px)]">
              {site.role[0]}
              <br />
              <span className="role-accent">{site.role[1]}</span>
            </p>
            <p className="mt-6 text-[19px] md:text-[21px] leading-[1.45] text-graphite max-w-[36ch]">{site.intro}</p>
            <ul className="mt-10 border-t border-strong">
              {links.map(([id, label, meta]) => (
                <li key={id} className="border-b border-rule">
                  <a href={`#${id}`} className="group flex items-center justify-between gap-4 py-3.5 hover:text-accent-ink transition-colors">
                    <span className="text-[18px] font-medium flex items-center gap-3">
                      <Arrow className="transition-transform group-hover:translate-x-1" />
                      {label}
                    </span>
                    <span className="label text-mute text-right">{meta}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <figure className="col-span-12 lg:col-span-7 lg:-mt-6">
            <div className="relative aspect-[5/4] w-full max-w-full border border-strong bg-paper overflow-hidden">
              <CityGrid />
            </div>
            <figcaption className="flex justify-between gap-4 mt-2 label text-mute">
              <span>{t('hero.fig')}</span>
              <span className="hidden sm:inline text-right">{t('hero.fig.note')}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
