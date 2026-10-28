import { useEffect, useState } from 'react';
import { useContent, useLang } from '../i18n/index.jsx';
import { img } from '../lib/images.js';
import { Arrow, Reveal, StatusChip, T } from './primitives.jsx';
import { Cover } from './Work.jsx';

function Block({ no, label, children }) {
  return (
    <Reveal className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-3 border-t border-rule py-8 md:py-12">
      <div className="col-span-12 md:col-span-3 label text-mute">
        <span className="text-accent-ink tabular mr-2">{no}</span>
        {label}
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-7 min-w-0">{children}</div>
    </Reveal>
  );
}

function Lightbox({ item, onClose }) {
  const { t } = useLang();
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!item) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[70] bg-ink/95 flex flex-col"
      style={{ padding: 'max(16px, env(safe-area-inset-top, 0px)) max(16px, env(safe-area-inset-right, 0px)) max(16px, env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px))' }}
      onClick={onClose}
    >
      <div className="flex justify-between items-center text-paper label pb-3 gap-4">
        <span className="truncate">{item.caption}</span>
        <button type="button" className="border border-paper/60 px-3 py-1.5 shrink-0" onClick={onClose} autoFocus>
          {t('case.close')}
        </button>
      </div>
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <img src={img(item.src)} alt={item.caption} className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
}

export function CaseStudy({ slug }) {
  const { t, lang } = useLang();
  const { projects, featured: featuredProjects, expertise } = useContent();
  const p = projects.find((x) => x.slug === slug);
  const [open, setOpen] = useState(null);
  const [showPhotos, setShowPhotos] = useState(false);

  if (!p) {
    return (
      <main className="gutter mx-auto max-w-sheet py-24">
        <p className="display-condensed text-[48px] uppercase">{t('case.notfound')}</p>
        <a href="#work" className="ulink mt-6 inline-block">{t('case.back')}</a>
      </main>
    );
  }

  const list = p.featured ? featuredProjects : projects.filter((x) => !x.featured && x.status !== 'confidential');
  const idx = list.indexOf(p);
  const next = list[(idx + 1) % list.length];
  const prev = list[(idx - 1 + list.length) % list.length];
  const number = p.featured ? String(featuredProjects.indexOf(p) + 1).padStart(2, '0') : t('case.archive');
  const areas = expertise.filter((e) => p.expertise.includes(e.id));

  const meta = [
    [t('case.meta.client'), p.client],
    [t('case.meta.location'), p.location],
    [t('case.meta.period'), p.years],
    [t('case.meta.status'), t(`status.${p.status}`) + (p.statusNote ? ' ' + p.statusNote : '')],
    [t('case.meta.themes'), p.themes.join(', ')],
  ];

  return (
    <main className="view-enter">
      <div className="gutter mx-auto max-w-sheet pt-6 md:pt-10">
        <nav aria-label="Breadcrumb" className="flex items-center justify-between label border-b border-rule pb-3">
          <a href="#work" className="inline-flex items-center gap-2 hover:text-accent-ink">
            <Arrow className="rotate-180" /> {t('case.all')}
          </a>
          <span className="text-mute tabular">{t('sheet')} {lang === 'ru' ? 'Б' : 'B'}-{number} / {t('case.label')}</span>
        </nav>

        <header className="grid grid-cols-12 gap-x-4 md:gap-x-6 mt-8 md:mt-14">
          <div className="col-span-12 md:col-span-2 label text-accent-ink tabular mb-4 md:mb-0">{number}</div>
          <div className="col-span-12 md:col-span-10 min-w-0">
            <p className="label text-graphite">{p.client}</p>
            <h1 className="display section-title uppercase text-[calc(var(--ds)*var(--ds)*clamp(44px,7.4vw,120px))] mt-3 break-words">{p.title}</h1>
            <div className="flex flex-wrap gap-2 mt-6">
              <StatusChip status={p.status} />
              {areas.map((a) => (
                <span key={a.id} className="chip label border border-rule px-2 py-[3px] text-graphite">{a.no} {a.short}</span>
              ))}
            </div>
            <p className="mt-8 text-[clamp(20px,2.2vw,28px)] leading-[1.35] max-w-[44ch] font-medium">
              <T>{p.summary}</T>
            </p>
          </div>
        </header>

        {/* Title-block metadata */}
        <dl className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-strong mt-12 md:mt-16 bg-sheet">
          {meta.map(([k, v]) => (
            <div key={k} className="border-r border-b border-strong p-3 md:p-4 min-w-0">
              <dt className="label text-mute">{k}</dt>
              <dd className="text-[15px] mt-1.5 break-words"><T>{v}</T></dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 md:mt-14">
          <Cover project={p} className="aspect-[16/9] w-full" />
        </div>

        <div className="mt-10 md:mt-16">
          <Block no="01" label={t('case.context')}><T as="p" className="text-[19px] leading-[1.6]">{p.context}</T></Block>
          <Block no="02" label={t('case.challenge')}><T as="p" className="text-[clamp(22px,2.3vw,30px)] leading-[1.3] font-medium">{p.challenge}</T></Block>
          <Block no="03" label={t('case.role')}><T as="p" className="text-[19px] leading-[1.6]">{p.role}</T></Block>
          <Block no="04" label={t('case.approach')}>
            <ol className="space-y-4">
              {p.approach.map((a, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] text-[17px] leading-[1.55]">
                  <span className="label text-accent-ink tabular pt-1">{t('case.steps')[i] || i + 1}.</span>
                  <T>{a}</T>
                </li>
              ))}
            </ol>
          </Block>
          <Block no="05" label={t('case.outputs')}>
            <ul className="border-t border-strong">
              {p.outputs.map((o, i) => (
                <li key={i} className="py-3 border-b border-rule text-[17px]"><T>{o}</T></li>
              ))}
            </ul>
          </Block>
          <Block no="06" label={t('case.outcomes')}>
            <T as="p" className="text-[clamp(22px,2.3vw,30px)] leading-[1.3] font-medium">{p.outcomes}</T>
          </Block>
          {p.collaborators?.length > 0 && (
            <Block no="07" label={t('case.collaborators')}>
              <ul className="flex flex-wrap gap-2">
                {p.collaborators.map((c) => (
                  <li key={c} className="chip text-[15px] border border-rule px-3 py-1.5 bg-sheet"><T>{c}</T></li>
                ))}
              </ul>
            </Block>
          )}
        </div>

        {/* Photos, documents and links */}
        <section aria-labelledby="materials" className="border-t border-strong pt-3 mt-6">
          <h2 id="materials" className="label text-mute mb-6">{t('case.materials')}</h2>

          {/* Photos — collapsed until opened */}
          {p.gallery.length > 0 ? (
            <div>
              <button
                type="button"
                aria-expanded={showPhotos}
                aria-controls="case-photos"
                onClick={() => setShowPhotos((v) => !v)}
                className="chip label inline-flex items-center gap-3 border border-strong px-4 py-3 hover:bg-sel hover:text-on-sel hover:border-sel transition-colors"
              >
                <span aria-hidden="true" className="text-[14px] leading-none">{showPhotos ? '−' : '+'}</span>
                {showPhotos ? t('case.photos.hide') : t('case.photos.show', { n: p.gallery.length })}
              </button>
              <ul id="case-photos" hidden={!showPhotos} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 mt-8">
                {p.gallery.map((g, i) => (
                  <li key={g.src}>
                    <button type="button" onClick={() => setOpen(g)} className="group block w-full text-left">
                      <div className="plate aspect-[4/3] overflow-hidden bg-sheet border border-rule">
                        <img src={img(g.src)} alt={g.caption} loading="lazy" className="w-full h-full object-contain p-2" />
                      </div>
                      <span className="label text-mute mt-2 block">{t('case.fig')} {i + 1} — {g.caption}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="label text-mute">{t('case.photos.none')}</p>
          )}

          {(p.docs.length > 0 || p.links.length > 0) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 mt-12">
              {p.docs.length > 0 && (
                <div className="min-w-0">
                  <h3 className="label text-mute border-b border-strong pb-2">{t('case.docs')}</h3>
                  <ul>
                    {p.docs.map((d) => (
                      <li key={d.file} className="border-b border-rule">
                        <a href={d.file} target="_blank" rel="noreferrer" download className="group flex items-center justify-between gap-4 py-3.5">
                          <span className="flex items-center gap-3 min-w-0">
                            <span className="label bg-accent text-on-accent px-1.5 py-0.5 shrink-0">PDF</span>
                            <span className="text-[16px] card-title">{d.title}</span>
                          </span>
                          <span className="label text-accent-ink shrink-0">{t('case.download')} ↓</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {p.links.length > 0 && (
                <div className="min-w-0">
                  <h3 className="label text-mute border-b border-strong pb-2">{t('case.links')}</h3>
                  <ul>
                    {p.links.map((l) => (
                      <li key={l.url} className="border-b border-rule">
                        <a href={l.url} target="_blank" rel="noreferrer" className="group grid grid-cols-[6.5rem_1fr_auto] items-baseline gap-3 py-3.5">
                          <span className="label text-mute">{t(`kind.${l.kind}`)}</span>
                          <span className="text-[16px] min-w-0 break-words card-title">{l.title}</span>
                          <span className="label text-accent-ink" aria-hidden="true">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {p.credits && (
            <p className="label text-mute mt-8 normal-case tracking-normal text-[12px]">
              <span className="uppercase tracking-[0.08em]">{t('case.credits')}</span>
              <T>{p.credits}</T>
            </p>
          )}
        </section>

        {/* Prev / next */}
        <nav aria-label={t('case.next')} className="grid grid-cols-1 md:grid-cols-2 border-t border-strong mt-16 md:mt-24">
          <a href={`#project-${prev.slug}`} className="group py-8 md:pr-6 border-b md:border-b-0 md:border-r border-rule">
            <span className="label text-mute inline-flex items-center gap-2"><Arrow className="rotate-180" /> {t('case.prev')}</span>
            <span className="block display-condensed uppercase text-[clamp(26px,3vw,42px)] mt-3 break-words"><span className="card-title">{prev.title}</span></span>
          </a>
          <a href={`#project-${next.slug}`} className="group py-8 md:pl-6 md:text-right">
            <span className="label text-mute inline-flex items-center gap-2">{t('case.next')} <Arrow /></span>
            <span className="block display-condensed uppercase text-[clamp(26px,3vw,42px)] mt-3 break-words"><span className="card-title">{next.title}</span></span>
          </a>
        </nav>
        <div className="border-t border-rule py-8 mb-10">
          <a href="#work" className="chip label inline-flex items-center gap-2 border border-strong px-4 py-3 hover:bg-sel hover:text-on-sel hover:border-sel transition-colors">
            <Arrow className="rotate-180" /> {t('case.back')}
          </a>
        </div>
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </main>
  );
}
