import { useContent, useLang } from '../i18n/index.jsx';
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
                  <div className="mt-auto pt-8">
                    {it.project ? (
                      <a href={`#project-${it.project}`} className="label inline-flex items-center gap-2 hover:underline underline-offset-4">
                        {t('initiatives.related')} <Arrow />
                      </a>
                    ) : (
                      <span className="label opacity-80">
                        <T>{t('initiatives.nolink')}</T>
                      </span>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  const { t } = useLang();
  const { bio, contact, trajectory, education, recognition, speaking } = useContent();
  return (
    <section aria-labelledby="about" className="column-rules">
      <div className="gutter mx-auto max-w-sheet py-16 md:py-28">
        <SectionHead sheet="A-04" id="about" title={t('about.title')} aside={t('about.aside')} />

        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-10">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="aspect-[4/5] w-full max-w-full border border-strong bg-sheet relative overflow-hidden">
              {/* PLACEHOLDER: replace with a professional portrait (import an image and use <img>) */}
              <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <line x1="0" y1="0" x2="400" y2="500" stroke="var(--rule)" />
                <line x1="400" y1="0" x2="0" y2="500" stroke="var(--rule)" />
                <circle cx="200" cy="200" r="70" fill="none" stroke="rgb(var(--ink))" strokeOpacity="0.35" />
                <path d="M80 500 C 90 340, 310 340, 320 500" fill="none" stroke="rgb(var(--ink))" strokeOpacity="0.35" />
              </svg>
              <span className="absolute left-2 bottom-2 label bg-paper/90 text-accent-ink px-1.5 py-0.5 border border-dashed border-accent-ink">
                {t('about.portrait')}
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {contact.cvUrl ? (
                <a
                  href={contact.cvUrl}
                  className="chip label inline-flex items-center justify-between border border-strong px-4 py-3 hover:bg-sel hover:text-on-sel transition-colors"
                >
                  {t('about.cv')} <Arrow />
                </a>
              ) : (
                <span className="chip label inline-flex items-center justify-between gap-3 border border-dashed border-accent-ink text-accent-ink px-4 py-3" aria-disabled="true">
                  {t('about.cv.missing')} <span aria-hidden="true">PDF</span>
                </span>
              )}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:pl-6 min-w-0">
            <Reveal>
              <p className="text-[clamp(22px,2.4vw,32px)] leading-[1.3] font-medium max-w-[36ch]">{bio.lead}</p>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-5 text-[17px] text-graphite">
              {bio.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'md:col-span-2 max-w-[62ch]' : ''}>
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
          <ListBlock title={t('about.speaking')} items={speaking} />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- CONTACT */
function ContactRow({ label, value, href, placeholder }) {
  return (
    <div className="grid grid-cols-12 gap-x-4 py-4 border-b items-baseline" style={{ borderColor: 'color-mix(in srgb, currentColor 30%, transparent)' }}>
      <span className="col-span-4 md:col-span-3 label opacity-80">{label}</span>
      <span className="col-span-8 md:col-span-9 text-[18px] md:text-[22px] break-words select-all">
        {value ? (
          href ? (
            <a href={href} target="_blank" rel="noreferrer" className="ulink">
              {value}
            </a>
          ) : (
            value
          )
        ) : (
          <span className="font-mono text-[15px] border-b border-dashed border-current opacity-90">{placeholder}</span>
        )}
      </span>
    </div>
  );
}

export function Contact() {
  const { t, lang } = useLang();
  const { contact } = useContent();
  return (
    <section aria-labelledby="contact" className="inverse bg-contact text-on-contact">
      <div className="gutter mx-auto max-w-sheet py-16 md:py-28">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 border-t pt-3" style={{ borderColor: 'color-mix(in srgb, currentColor 70%, transparent)' }}>
          <span className="col-span-12 md:col-span-2 label opacity-80">{t('sheet')} {sheetNo(lang, '05')}</span>
          <div className="col-span-12 md:col-span-10 min-w-0">
            <h2 id="contact" className="display uppercase text-contact-head text-[calc(var(--ds)*clamp(44px,8.6vw,140px))] mt-4 md:mt-0 break-words">
              {t('contact.title')}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-10 mt-10 md:mt-16">
          <p className="col-span-12 md:col-span-5 md:col-start-3 text-[20px] leading-[1.45] max-w-[38ch]">{t('contact.text')}</p>
          <div className="col-span-12 md:col-span-5 min-w-0">
            <ContactRow label={t('contact.email')} value={contact.email} href={contact.email ? `mailto:${contact.email}` : null} placeholder={t('contact.email.missing')} />
            <ContactRow label={t('contact.linkedin')} value={contact.linkedin ? t('contact.linkedin.value') : null} href={contact.linkedin} placeholder={t('contact.linkedin.missing')} />
            <ContactRow label={t('contact.based')} value={contact.location} />
            <div className="mt-8">
              {contact.email ? (
                <a
                  href={`mailto:${contact.email}`}
                  className="chip inline-flex items-center gap-3 bg-on-contact text-contact px-6 py-4 label text-[12px] hover:opacity-85 transition-opacity"
                >
                  {t('contact.cta')} <Arrow />
                </a>
              ) : (
                <span className="chip inline-flex items-center gap-3 border border-dashed border-current px-6 py-4 label text-[12px]" aria-disabled="true">
                  {t('contact.cta.missing')}
                </span>
              )}
            </div>
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
      <div className="gutter mx-auto max-w-sheet pt-6 pb-24 md:pb-6 flex flex-col md:flex-row gap-2 justify-between label opacity-75">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{t('footer.proto')}</span>
        <span className="tabular md:mr-56">{site.coordinates}</span>
      </div>
    </footer>
  );
}
