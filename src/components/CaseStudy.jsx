import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useContent, useLang } from '../i18n/index.jsx';
import { docPages, img } from '../lib/images.js';
import { Arrow, Reveal, StatusChip, T } from './primitives.jsx';
import { Cover } from './Work.jsx';

/* A project can carry a second brand colour (`brand.blue`, an "r g b" triplet).
   It is exposed as --blue on the page and used for numbers, rules and badges. */
const BLUE = 'rgb(var(--blue))';

const noSave = { onContextMenu: (e) => e.preventDefault(), draggable: false, onDragStart: (e) => e.preventDefault() };

function useEscape(onClose, extra) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else extra?.(e);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, extra]);
}

const overlayPad = {
  padding:
    'max(16px, env(safe-area-inset-top, 0px)) max(16px, env(safe-area-inset-right, 0px)) max(16px, env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px))',
};

function Block({ no, label, children, blue }) {
  return (
    <Reveal className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-3 border-t border-rule py-8 md:py-12">
      <div className="col-span-12 md:col-span-3 label text-mute">
        <span className={`tabular mr-2 ${blue ? '' : 'text-accent-ink'}`} style={blue ? { color: BLUE } : undefined}>{no}</span>
        {label}
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-7 min-w-0">{children}</div>
    </Reveal>
  );
}

/* Photo viewer: arrows, keyboard and swipe; images cannot be dragged or saved via the menu. */
function GalleryViewer({ items, index, onIndex, onClose }) {
  const { t } = useLang();
  const n = items.length;
  const go = useCallback((d) => onIndex((index + d + n) % n), [index, n, onIndex]);
  const onKey = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    },
    [go],
  );
  useEscape(onClose, onKey);
  const touch = useRef(null);
  const item = items[index];
  return (
    <div role="dialog" aria-modal="true" aria-label={item.caption} className="fixed inset-0 z-[70] bg-ink/95 flex flex-col select-none" style={overlayPad}>
      <div className="flex justify-between items-center text-paper label pb-3 gap-4">
        <span className="tabular shrink-0">{index + 1} / {n}</span>
        <button type="button" className="border border-paper/60 px-3 py-1.5 shrink-0 hover:bg-paper hover:text-ink" onClick={onClose} autoFocus>
          {t('case.close')}
        </button>
      </div>
      <div
        className="relative flex-1 min-h-0 flex items-center justify-center"
        onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touch.current == null) return;
          const dx = e.changedTouches[0].clientX - touch.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touch.current = null;
        }}
      >
        <img key={item.src} src={img(item.src)} alt={item.caption} className="max-w-full max-h-full object-contain view-enter" {...noSave} />
        {n > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label={t('case.prevPhoto')} className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-paper/90 text-ink flex items-center justify-center hover:bg-accent">
              <Arrow className="rotate-180" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t('case.nextPhoto')} className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 bg-paper/90 text-ink flex items-center justify-center hover:bg-accent">
              <Arrow />
            </button>
          </>
        )}
      </div>
      <p className="text-paper/85 text-[14px] pt-3 max-w-[80ch] mx-auto text-center inverse">
        <T>{item.caption}</T>
      </p>
      {n > 1 && (
        <div className="flex justify-center gap-2 pt-3 overflow-x-auto">
          {items.map((g, i) => (
            <button
              key={g.src}
              type="button"
              onClick={() => onIndex(i)}
              aria-label={`${i + 1}`}
              aria-current={i === index}
              className={`shrink-0 w-14 h-10 overflow-hidden border ${i === index ? 'border-accent' : 'border-paper/30 opacity-60 hover:opacity-100'}`}
            >
              <img src={img(g.src)} alt="" className="w-full h-full object-cover" {...noSave} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* Document reader: pages are images, stacked for scrolling; no file is offered. */
function DocReader({ doc, onClose }) {
  const { t } = useLang();
  const pages = docPages(doc.id);
  const [page, setPage] = useState(1);
  const scroller = useRef(null);
  useEscape(onClose);
  useEffect(() => {
    const root = scroller.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setPage(Number(e.target.dataset.page))), {
      root,
      rootMargin: '-45% 0px -45% 0px',
    });
    root.querySelectorAll('[data-page]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [doc.id]);
  const jump = (d) => {
    const target = scroller.current?.querySelector(`[data-page="${Math.min(pages.length, Math.max(1, page + d))}"]`);
    target?.scrollIntoView({ block: 'start' });
  };
  return (
    <div role="dialog" aria-modal="true" aria-label={doc.title} className="fixed inset-0 z-[70] bg-ink/95 flex flex-col" style={overlayPad} onContextMenu={(e) => e.preventDefault()}>
      <div className="flex flex-wrap items-center justify-between gap-3 text-paper pb-3 border-b border-paper/20">
        <div className="min-w-0 max-w-full">
          <p className="label text-paper/60">{t('case.viewonly')}</p>
          <p className="text-[15px] md:text-[17px] font-medium truncate">{doc.title}</p>
        </div>
        <div className="flex items-center gap-2 label">
          <button type="button" onClick={() => jump(-1)} className="border border-paper/40 w-9 h-9 flex items-center justify-center hover:bg-paper hover:text-ink" aria-label={t('case.prevPage')}>
            <Arrow className="-rotate-90" />
          </button>
          <span className="tabular px-1 min-w-[7rem] text-center">{t('case.page', { n: page, total: pages.length })}</span>
          <button type="button" onClick={() => jump(1)} className="border border-paper/40 w-9 h-9 flex items-center justify-center hover:bg-paper hover:text-ink" aria-label={t('case.nextPage')}>
            <Arrow className="rotate-90" />
          </button>
          <button type="button" onClick={onClose} autoFocus className="border border-paper/60 px-3 h-9 ml-2 hover:bg-paper hover:text-ink">
            {t('case.close')}
          </button>
        </div>
      </div>
      <div ref={scroller} className="flex-1 min-h-0 overflow-y-auto overscroll-contain py-4 select-none">
        <div className="mx-auto max-w-[900px] flex flex-col gap-4">
          {pages.map((src, i) => (
            <img
              key={src}
              data-page={i + 1}
              src={src}
              alt={`${doc.title} — ${i + 1}`}
              loading={i < 2 ? 'eager' : 'lazy'}
              width="1240"
              height="1754"
              className="w-full h-auto bg-white"
              {...noSave}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudy({ slug }) {
  const { t, lang } = useLang();
  const { projects, featured: featuredProjects, expertise } = useContent();
  const p = projects.find((x) => x.slug === slug);
  const [viewer, setViewer] = useState(null); // index of the open photo
  const [reader, setReader] = useState(null); // open view-only document
  const [showPhotos, setShowPhotos] = useState(false);

  if (!p) {
    return (
      <main className="gutter mx-auto max-w-sheet py-24">
        <p className="display-condensed text-[48px] uppercase">{t('case.notfound')}</p>
        <a href="#work" className="ulink mt-6 inline-block">{t('case.back')}</a>
      </main>
    );
  }

  const blue = Boolean(p.brand?.blue);
  const blueText = blue ? { color: BLUE } : undefined;
  const list = p.featured ? featuredProjects : projects.filter((x) => !x.featured && x.status !== 'confidential');
  const idx = list.indexOf(p);
  const next = list[(idx + 1) % list.length];
  const prev = list[(idx - 1 + list.length) % list.length];
  const number = p.featured ? String(featuredProjects.indexOf(p) + 1).padStart(2, '0') : t('case.archive');
  const areas = expertise.filter((e) => p.expertise.includes(e.id));
  const viewDocs = p.viewDocs || [];

  const meta = [
    [t('case.meta.client'), p.client],
    [t('case.meta.location'), p.location],
    [t('case.meta.period'), p.years],
    [t('case.meta.status'), t(`status.${p.status}`) + (p.statusNote ? ' ' + p.statusNote : '')],
    [t('case.meta.themes'), p.themes.join(', ')],
  ];

  const photoTile = (g, i, aspect = 'aspect-[4/3]', fit = 'object-contain p-2') => (
    <li key={g.src} className="min-w-0">
      <button type="button" onClick={() => setViewer(i)} className="group block w-full text-left">
        <div className={`plate ${aspect} overflow-hidden bg-sheet border border-rule`}>
          <img src={img(g.src)} alt={g.caption} loading="lazy" className={`w-full h-full ${fit}`} {...noSave} />
        </div>
        <span className="label text-mute mt-2 block">
          {t('case.fig')} {i + 1} — <T>{g.caption}</T>
        </span>
      </button>
    </li>
  );

  return (
    <main className="view-enter" style={blue ? { '--blue': p.brand.blue } : undefined}>
      <div className="gutter mx-auto max-w-sheet pt-6 md:pt-10">
        <nav aria-label="Breadcrumb" className="flex items-center justify-between label border-b border-rule pb-3">
          <a href="#work" className="inline-flex items-center gap-2 hover:text-accent-ink">
            <Arrow className="rotate-180" /> {t('case.all')}
          </a>
          <span className="text-mute tabular">{t('sheet')} {lang === 'ru' ? 'Б' : 'B'}-{number} / {t('case.label')}</span>
        </nav>

        <header className="grid grid-cols-12 gap-x-4 md:gap-x-6 mt-8 md:mt-14">
          <div className="col-span-12 md:col-span-2 label tabular mb-4 md:mb-0 flex md:flex-col gap-3 items-center md:items-start">
            <span className={blue ? '' : 'text-accent-ink'} style={blueText}>{number}</span>
            {blue && <span aria-hidden="true" className="block w-6 h-6 md:w-10 md:h-10" style={{ background: BLUE }} />}
          </div>
          <div className="col-span-12 md:col-span-10 min-w-0">
            <p className={`label ${blue ? '' : 'text-graphite'}`} style={blueText}>{p.client}</p>
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
        <dl className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-strong mt-12 md:mt-16 bg-sheet" style={blue ? { borderTop: `4px solid ${BLUE}` } : undefined}>
          {meta.map(([k, v]) => (
            <div key={k} className="border-r border-b border-strong p-3 md:p-4 min-w-0">
              <dt className="label text-mute">{k}</dt>
              <dd className="text-[15px] mt-1.5 break-words"><T>{v}</T></dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 md:mt-14">
          <Cover project={p} className="aspect-[16/9] w-full" water={blue ? BLUE : undefined} />
        </div>

        <div className="mt-10 md:mt-16">
          <Block blue={blue} no="01" label={t('case.context')}><T as="p" className="text-[19px] leading-[1.6]">{p.context}</T></Block>
          <Block blue={blue} no="02" label={t('case.challenge')}><T as="p" className="text-[clamp(22px,2.3vw,30px)] leading-[1.3] font-medium">{p.challenge}</T></Block>
          <Block blue={blue} no="03" label={t('case.role')}><T as="p" className="text-[19px] leading-[1.6]">{p.role}</T></Block>
          <Block blue={blue} no="04" label={t('case.approach')}>
            <ol className="space-y-4">
              {p.approach.map((a, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] text-[17px] leading-[1.55]">
                  <span className="label text-accent-ink tabular pt-1">{t('case.steps')[i] || i + 1}.</span>
                  <T>{a}</T>
                </li>
              ))}
            </ol>
          </Block>
          <Block blue={blue} no="05" label={t('case.outputs')}>
            <ul className="border-t border-strong">
              {p.outputs.map((o, i) => (
                <li key={i} className="py-3 border-b border-rule text-[17px] flex gap-3">
                  {blue && <span aria-hidden="true" className="mt-[0.55em] w-2 h-2 shrink-0" style={{ background: BLUE }} />}
                  <T>{o}</T>
                </li>
              ))}
            </ul>
          </Block>
          <Block blue={blue} no="06" label={t('case.outcomes')}>
            <T as="p" className="text-[clamp(22px,2.3vw,30px)] leading-[1.3] font-medium">{p.outcomes}</T>
          </Block>
          {p.collaborators?.length > 0 && (
            <Block blue={blue} no="07" label={t('case.collaborators')}>
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

          {p.gallery.length === 0 && <p className="label text-mute">{t('case.photos.none')}</p>}

          {/* Album: always open, with a swipeable viewer */}
          {p.gallery.length > 0 && p.album && (
            <div>
              <h3 className="label text-mute border-b border-strong pb-2 flex justify-between gap-4">
                <span>{t('case.album')}</span>
                <span className="tabular" style={blueText}>{String(p.gallery.length).padStart(2, '0')}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-8 mt-6">
                {p.gallery.map((g, i) => photoTile(g, i, 'aspect-[3/2]', 'object-cover'))}
              </ul>
            </div>
          )}

          {/* Photos — collapsed until opened */}
          {p.gallery.length > 0 && !p.album && (
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
                {p.gallery.map((g, i) => photoTile(g, i))}
              </ul>
            </div>
          )}

          {/* View-only official documents */}
          {viewDocs.length > 0 && (
            <div className="mt-14">
              <h3 className="label text-mute border-b border-strong pb-2 flex flex-wrap justify-between gap-x-4 gap-y-1">
                <span>{t('case.viewdocs')}</span>
                <span style={blueText}>{t('case.viewonly')}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 mt-6">
                {viewDocs.map((d) => {
                  const pages = docPages(d.id);
                  return (
                    <li key={d.id} className="min-w-0">
                      <button type="button" onClick={() => setReader(d)} className="group block w-full text-left">
                        <div className="plate relative aspect-[1/1.1] overflow-hidden border border-rule bg-white">
                          <img src={pages[0]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top" {...noSave} />
                          <span className="absolute left-0 top-0 label px-2 py-1 text-white" style={{ background: blue ? BLUE : 'rgb(var(--ink))' }}>
                            {t('case.pages', { n: pages.length })}
                          </span>
                        </div>
                        <p className="text-[17px] font-medium leading-snug mt-3"><span className="card-title">{d.title}</span></p>
                        <p className="text-[13px] text-graphite mt-1">{d.meta}</p>
                        <span className={`label inline-flex items-center gap-2 mt-3 ${blue ? '' : 'text-accent-ink'}`} style={blueText}>
                          {t('case.view')} <Arrow />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
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
                <div className={`min-w-0 ${p.docs.length === 0 ? 'lg:col-span-2' : ''}`}>
                  <h3 className="label text-mute border-b border-strong pb-2">{t('case.links')}</h3>
                  <ul>
                    {p.links.map((l) => {
                      const official = blue && l.kind === 'site';
                      return (
                        <li key={l.url} className="border-b border-rule">
                          <a href={l.url} target="_blank" rel="noreferrer" className="group grid grid-cols-[6.5rem_1fr_auto] items-baseline gap-3 py-3.5">
                            <span className={`label ${official ? '' : 'text-mute'}`} style={official ? blueText : undefined}>{t(`kind.${l.kind}`)}</span>
                            <span className="text-[16px] min-w-0 break-words card-title">{l.title}</span>
                            <span className={`label ${official ? '' : 'text-accent-ink'}`} style={official ? blueText : undefined} aria-hidden="true">↗</span>
                          </a>
                        </li>
                      );
                    })}
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
      {/* Overlays render on <body>: the animated page wrapper would otherwise become their containing block */}
      {viewer !== null && createPortal(<GalleryViewer items={p.gallery} index={viewer} onIndex={setViewer} onClose={() => setViewer(null)} />, document.body)}
      {reader && createPortal(<DocReader doc={reader} onClose={() => setReader(null)} />, document.body)}
    </main>
  );
}
