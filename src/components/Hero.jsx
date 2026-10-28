import { useState } from 'react';
import { useContent, useLang } from '../i18n/index.jsx';
import { LangSwitch } from './Controls.jsx';
import { Arrow } from './primitives.jsx';
import almatyMap from '../assets/about/almaty-map.webp';

export const NAV = ['work', 'expertise', 'initiatives', 'about', 'media', 'contact'];

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
              {/* Figure-ground map of central Almaty, from the 2024 portfolio */}
              <img src={almatyMap} alt={t('hero.map.aria')} className="map-in absolute inset-0 w-full h-full object-contain p-4 md:p-8" />
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
