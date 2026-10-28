import { useState } from 'react';
import { useContent, useLang } from '../i18n/index.jsx';
import { cv } from '../data/cv.js';
import portrait from '../assets/about/portrait.jpg';
import { Arrow, PlaceholderArt, Reveal, SectionHead, T } from './primitives.jsx';

const sheetNo = (lang, n) => `${lang === 'ru' ? 'А' : 'A'}-${n}`;

/* ------------------------------------------------------------------ EXPERTISE */
export function Expertise({ onFilter }) {
  const { t } = useLang();
  const { expertise, featured } = useContent();
  return (
    <section aria-labelledby="expertise" className="bg-paper">
      <div className="gutter mx-auto max-w-sheet py-16 md:py-28">
        <SectionHead sheet="A-02" id="expertise" title={t('expertise.title')} aside={t('expertise.aside')} />
        <ol>
          {expertise.map((e) => {
            const related = featured.filter((p) => p.expertise.includes(e.id));
            return (
              <Reveal as="li" key={e.id} className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-4 border-t border-rule py-8 md:py-10">
                <span className="col-span-2 md:col-span-1 display text-[calc(var(--ds)*clamp(28px,3vw,44px))] tabular"><span className="num-mark">{e.no}</span></span>
                <h3 className="col-span-10 md:col-span-5 display-condensed uppercase text-[clamp(28px,3.2vw,48px)] break-words min-w-0">{e.title}</h3>
                <div className="col-span-12 md:col-span-6 md:pl-6 md:border-l border-rule min-w-0">
                  <p className="text-[17px] text-graphite max-w-[56ch]">{e.text}</p>
                  {related.length > 0 && (
                    <div className="mt-5">
                      <p className="label text-mute mb-2">{t('expertise.related')}</p>
                      <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {related.map((p) => (
                          <li key={p.slug}>
                            <a href={`#project-${p.slug}`} className="ulink text-[15px]">
                              {p.client.split(' — ')[0]}: {p.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        onClick={() => onFilter(e.id)}
                        className="label mt-4 inline-flex items-center gap-2 text-accent-ink hover:text-ink transition-colors"
                      >
                        {t('expertise.show')} <Arrow />
                      </button>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- INITIATIVES */
const MOTIFS = ['dots', 'blocks', 'lines'];

export function Initiatives() {
  const { t, lang } = useLang();
  const { initiatives } = useContent();
  return (
    <section aria-labelledby="initiatives" className="inverse bg-band text-on-band">
      <div className="gutter mx-auto max-w-sheet py-16 md:py-28">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 border-t border-on-band/60 pt-3 mb-10 md:mb-16">
          <div className="col-span-4 md:col-span-2 label opacity-75 tabular">{t('sheet')} {sheetNo(lang, '03')}</div>
          <h2 id="initiatives" className="col-span-8 md:col-span-7 display-condensed text-[clamp(40px,7vw,104px)] uppercase text-band-head break-words">
            {t('initiatives.title')}
          </h2>
          <p className="col-span-12 md:col-span-3 opacity-85 text-[15px] mt-3 md:mt-0">{t('initiatives.intro')}</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-on-band/25 border border-on-band/25">
          {initiatives.map((it, i) => {
            const feature = i === 0;
            return (
              <li key={it.name} className={`flex flex-col min-w-0 ${feature ? 'bg-feature text-on-feature' : 'bg-band text-on-band'}`}>
                <div className="relative aspect-[16/9] border-b overflow-hidden" style={{ borderColor: 'color-mix(in srgb, currentColor 22%, transparent)' }}>
                  <PlaceholderArt
                    seed={it.name}
                    motif={MOTIFS[i % 3]}
                    label={false}
                    bg="bg-transparent"
                    ink={feature ? 'rgb(var(--on-feature))' : 'rgb(var(--on-band))'}
                    accent={feature ? 'rgb(var(--on-feature))' : 'rgb(var(--band-head))'}
                  />
                </div>
                <div className="p-5 md:p-7 flex flex-col flex-1">
                  <div className="flex justify-between gap-4 label">
                    <T>{it.role}</T>
                    <T className="text-right">{it.since}</T>
                  </div>
                  <h3 className="display uppercase text-[calc(var(--ds)*clamp(30px,3.2vw,46px))] mt-6 break-words">{it.name}</h3>
                  <p className="mt-4 text-[17px] opacity-90">{it.text}</p>
                  <ul className="flex flex-wrap gap-1.5 mt-6">
                    {it.focus.map((f) => (
                      <li key={f} className="chip label border px-2 py-1 opacity-90" style={{ borderColor: 'color-mix(in srgb, currentColor 45%, transparent)' }}>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {it.links?.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="label inline-flex items-center gap-1.5 border-b border-current pb-0.5 hover:opacity-75">
                        {l.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                    {it.project && (
                      <a href={`#project-${it.project}`} className="label inline-flex items-center gap-2 hover:underline underline-offset-4">
                        {t('initiatives.related')} <Arrow />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="label opacity-75 mt-4">{t('initiatives.note')}</p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- ABOUT */
function ListBlock({ title, items }) {
  return (
    <div className="min-w-0">
      <h3 className="label text-mute border-b border-strong pb-2 mb-1">{title}</h3>
      <ul>
        {items.map((it, i) => (
          <li key={i} className="py-3 border-b border-rule">
            <div className="flex justify-between gap-4 items-baseline">
              <T className="text-[16px] font-medium">{it.title}</T>
              {it.year && <span className="label text-mute tabular shrink-0">{it.year}</span>}
            </div>
            {it.place && <p className="text-[14px] text-graphite mt-0.5">{it.place}</p>}
            {it.note && (
              <p className="text-[13px] mt-1">
                <T>{it.note}</T>
              </p>
            )}
            {(it.doc || it.link) && (
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                {it.doc && (
                  <a href={it.doc.file} target="_blank" rel="noreferrer" download className="label text-accent-ink border-b border-current pb-0.5 hover:text-ink">
                    {it.doc.title} ↓
                  </a>
                )}
                {it.link && (
                  <a href={it.link.url} target="_blank" rel="noreferrer" className="label text-accent-ink border-b border-current pb-0.5 hover:text-ink">
                    {it.link.title} ↗
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* One expandable CV (EN or RU) with its download links */
function CvPanel({ data, lang }) {
  const [open, setOpen] = useState(false);
  const id = `cv-${lang}`;
  return (
    <div className="border-t border-strong" lang={lang}>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="group flex items-center gap-3 text-left"
        >
          <span aria-hidden="true" className={`w-8 h-8 shrink-0 inline-flex items-center justify-center border border-strong text-[18px] leading-none transition-colors ${open ? 'bg-accent border-accent text-on-accent' : 'group-hover:bg-sheet'}`}>
            {open ? '−' : '+'}
          </span>
          <span className="display-condensed uppercase text-[clamp(24px,2.6vw,34px)] card-title">{data.label}</span>
        </button>
        <div className="flex flex-wrap gap-2">
          {data.files.map((f) => (
            <a key={f.file} href={f.file} download target="_blank" rel="noreferrer" className="chip label border border-strong px-3 py-2 hover:bg-sel hover:text-on-sel hover:border-sel transition-colors">
              {f.title} ↓
            </a>
          ))}
        </div>
      </div>
      <div id={id} hidden={!open} className="pb-10">
        <p className="label text-accent-ink">{data.headline}</p>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-8 mt-6">
          <div className="col-span-12 lg:col-span-4 min-w-0">
            <h4 className="label text-mute border-b border-strong pb-2">{data.profileTitle}</h4>
            <p className="text-[15px] text-graphite mt-3">{data.profile}</p>
            <h4 className="label text-mute border-b border-strong pb-2 mt-8">{data.expertiseTitle}</h4>
            <ul className="flex flex-wrap gap-1.5 mt-3">
              {data.expertise.map((e) => (
                <li key={e} className="chip label border border-rule px-2 py-1 text-graphite">{e}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-8 min-w-0">
            <h4 className="label text-mute border-b border-strong pb-2">{data.experienceTitle}</h4>
            <ol>
              {data.experience.map((x, i) => (
                <li key={i} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1 py-4 border-b border-rule">
                  <span className="label text-mute tabular pt-1">{x.period}</span>
                  <div className="min-w-0">
                    <p className="text-[17px] font-medium leading-snug">{x.role}</p>
                    <p className="text-[14px] text-accent-ink mt-0.5">
                      {x.org}
                      {x.place ? ` · ${x.place}` : ''}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {x.points.map((pt, k) => (
                        <li key={k} className="text-[14px] text-graphite pl-4 relative before:content-['–'] before:absolute before:left-0">{pt}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
            <h4 className="label text-mute border-b border-strong pb-2 mt-8">{data.educationTitle}</h4>
            <ul>
              {data.education.map((e, i) => (
                <li key={i} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1 py-4 border-b border-rule">
                  <span className="label text-mute tabular pt-1">{e.period}</span>
                  <div>
                    <p className="text-[16px] font-medium">{e.title}</p>
                    <p className="text-[14px] text-accent-ink mt-0.5">{e.org}</p>
                    {e.note && <p className="text-[14px] text-graphite mt-1.5">{e.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <h4 className="label text-mute border-b border-strong pb-2 mt-8">{data.moreTitle}</h4>
            <ul className="mt-2 space-y-2">
              {data.more.map((m, k) => (
                <li key={k} className="text-[14px] text-graphite pl-4 relative before:content-['–'] before:absolute before:left-0">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const { t } = useLang();
  const { bio, site, trajectory, education, recognition, teaching } = useContent();
  return (
    <section aria-labelledby="about" className="column-rules">
      <div className="gutter mx-auto max-w-sheet py-16 md:py-28">
        <SectionHead sheet="A-04" id="about" title={t('about.title')} aside={t('about.aside')} />

        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-10">
          <figure className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="aspect-[4/5] w-full max-w-full border border-strong bg-sheet relative overflow-hidden">
              {/* Portrait — replace src/assets/about/portrait.jpg to change it */}
              <img src={portrait} alt={site.name} className="absolute inset-0 w-full h-full object-cover object-top" />
              <span aria-hidden="true" className="absolute left-0 bottom-0 w-12 h-12 bg-accent" />
            </div>
            <figcaption className="label text-mute mt-2">{site.name} · {site.base}</figcaption>
          </figure>

          <div className="col-span-12 lg:col-span-8 lg:pl-6 min-w-0">
            <Reveal>
              <p className="text-[clamp(22px,2.4vw,32px)] leading-[1.3] font-medium max-w-[36ch]">{bio.lead}</p>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-5 text-[17px] text-graphite">
              {bio.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'md:col-span-2 max-w-[66ch]' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Trajectory, drawn as a transect */}
        <div className="mt-16 md:mt-24">
          <p className="label text-mute mb-4">{t('about.transect')}</p>
          <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-y-6 md:gap-x-6">
            <span aria-hidden="true" className="hidden md:block absolute left-0 right-0 top-[9px] h-px bg-line" />
            <span aria-hidden="true" className="md:hidden absolute top-0 bottom-0 left-[8px] w-px bg-line" />
            {trajectory.map((s, i) => (
              <li key={i} className="relative pl-8 md:pl-0 md:pt-8 min-w-0">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 w-[18px] h-[18px] border-2 border-line ${i === trajectory.length - 1 ? 'bg-accent' : 'bg-paper'}`}
                  style={{ borderRadius: 'var(--mark-radius)' }}
                />
                <p className="display-condensed uppercase text-[30px] break-words">{s.place}</p>
                <p className="label text-accent-ink tabular mt-1">{s.years}</p>
                <p className="text-[14px] text-graphite mt-2">{s.note}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <ListBlock title={t('about.education')} items={education} />
          <ListBlock title={t('about.recognition')} items={recognition} />
          <ListBlock title={t('about.teaching')} items={teaching} />
        </div>

        {/* CV — expandable, in both languages, with downloads */}
        <div className="mt-16 md:mt-24" aria-labelledby="cv-title">
          <h3 id="cv-title" className="label text-mute mb-3">{t('about.cv.title')}</h3>
          <CvPanel data={cv.en} lang="en" />
          <CvPanel data={cv.ru} lang="ru" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- MEDIA */
export function Media() {
  const { t } = useLang();
  const { media } = useContent();
  const total = media.reduce((n, g) => n + g.items.length, 0);
  return (
    <section aria-labelledby="media" className="bg-paper">
      <div className="gutter mx-auto max-w-sheet py-16 md:py-28">
        <SectionHead sheet="A-05" id="media" title={t('media.title')} aside={t('media.aside', { n: total })} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-14">
          {media.map((g) => (
            <Reveal key={g.id} className="min-w-0">
              <h3 className="flex items-baseline justify-between gap-4 border-b border-strong pb-2">
                <span className="display-condensed uppercase text-[clamp(22px,2.2vw,30px)]">{g.title}</span>
                <span className="label text-accent-ink tabular">{String(g.items.length).padStart(2, '0')}</span>
              </h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.url} className="border-b border-rule">
                    <a href={it.url} target="_blank" rel="noreferrer" className="group grid grid-cols-[1fr_auto] gap-x-4 py-3">
                      <span className="min-w-0">
                        <span className="label text-mute block">
                          {t(`kind.${it.kind}`)} · {it.outlet}
                          {it.year ? ` · ${it.year}` : ''}
                        </span>
                        <span className="text-[16px] leading-snug block mt-1">
                          <span className="card-title">{it.title}</span>
                        </span>
                      </span>
                      <span className="label text-accent-ink pt-1" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- CONTACT */
function ContactRow({ label, value, href, external = true }) {
  return (
    <div className="grid grid-cols-12 gap-x-4 py-4 border-b items-baseline" style={{ borderColor: 'color-mix(in srgb, currentColor 30%, transparent)' }}>
      <span className="col-span-4 md:col-span-3 label opacity-80">{label}</span>
      <span className="col-span-8 md:col-span-9 text-[18px] md:text-[22px] break-words">
        {href ? (
          <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className="ulink select-all">
            {value}
          </a>
        ) : (
          <span className="select-all">{value}</span>
        )}
      </span>
    </div>
  );
}

export function Contact() {
  const { t, lang } = useLang();
  const { contact } = useContent();
  const wa = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(t('contact.whatsapp.message'))}`;
  return (
    <section aria-labelledby="contact" className="inverse bg-contact text-on-contact">
      <div className="gutter mx-auto max-w-sheet py-16 md:py-28">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 border-t pt-3" style={{ borderColor: 'color-mix(in srgb, currentColor 70%, transparent)' }}>
          <span className="col-span-12 md:col-span-2 label opacity-80">{t('sheet')} {sheetNo(lang, '06')}</span>
          <div className="col-span-12 md:col-span-10 min-w-0">
            <h2 id="contact" className="display uppercase text-contact-head text-[calc(var(--ds)*clamp(44px,8.6vw,140px))] mt-4 md:mt-0 break-words">
              {t('contact.title')}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-10 mt-10 md:mt-16">
          <div className="col-span-12 md:col-span-5 md:col-start-3">
            <p className="text-[20px] leading-[1.45] max-w-[38ch]">{t('contact.text')}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={`mailto:${contact.email}`} className="chip inline-flex items-center gap-3 bg-on-contact text-contact px-6 py-4 label text-[12px] hover:opacity-85 transition-opacity">
                {t('contact.cta')} <Arrow />
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="chip inline-flex items-center gap-3 border-2 border-current px-6 py-4 label text-[12px] hover:bg-on-contact hover:text-contact transition-colors">
                {t('contact.whatsapp')} <Arrow />
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 min-w-0">
            <ContactRow label={t('contact.email')} value={contact.email} href={`mailto:${contact.email}`} external={false} />
            <ContactRow label="WhatsApp" value={contact.phone} href={wa} />
            <ContactRow label="LinkedIn" value="adiya-karsybek-urbanist" href={contact.linkedin} />
            <ContactRow label={t('contact.telegram')} value={contact.telegramHandle} href={contact.telegram} />
            <ContactRow label={t('contact.based')} value={contact.location} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const { site } = useContent();
  return (
    <footer className="bg-ink text-paper">
      <div className="gutter mx-auto max-w-sheet py-6 flex flex-col md:flex-row gap-2 justify-between label opacity-75">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.base}</span>
        <span className="tabular">{site.coordinates}</span>
      </div>
    </footer>
  );
}
