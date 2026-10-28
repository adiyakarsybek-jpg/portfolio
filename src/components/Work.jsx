import { useContent, useLang } from '../i18n/index.jsx';
import { ProjectArt } from './ProjectArt.jsx';
import { Arrow, Reveal, SectionHead, StatusChip, T } from './primitives.jsx';

const pad = (n) => String(n).padStart(2, '0');

// Asymmetric layout when unfiltered: [span, aspect] per position.
const LAYOUT = [
  ['md:col-span-8', 'aspect-[16/10]'],
  ['md:col-span-4', 'aspect-[16/10] md:aspect-[4/5]'],
  ['md:col-span-4', 'aspect-[16/10] md:aspect-[4/5]'],
  ['md:col-span-8', 'aspect-[16/10]'],
  ['md:col-span-6', 'aspect-[4/3]'],
  ['md:col-span-6', 'aspect-[4/3]'],
  ['md:col-span-8', 'aspect-[16/10]'],
  ['md:col-span-4', 'aspect-[16/10] md:aspect-[4/5]'],
];

export function Cover({ project, className = '' }) {
  return (
    <div className={`plate relative overflow-hidden border border-rule ${className}`}>
      <ProjectArt project={project} className="absolute inset-0" />
    </div>
  );
}

function ProjectCard({ project, index, layout }) {
  const { t } = useLang();
  const [span, aspect] = layout;
  return (
    <Reveal as="li" className={`col-span-12 ${span} min-w-0`} delay={(index % 2) * 80}>
      <a href={`#project-${project.slug}`} className="group block" aria-label={`${project.client} — ${project.title}. ${t('work.open.aria')}`}>
        <Cover project={project} className={`${aspect} w-full`} />
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-baseline mt-3 label">
          <span className="text-accent-ink tabular">{pad(index + 1)}</span>
          <span className="text-graphite truncate">{project.client.split(' — ')[0]}</span>
          <span className="text-mute tabular">{project.years}</span>
        </div>
        <h3 className="display-condensed uppercase text-[clamp(26px,2.9vw,40px)] mt-2 break-words">
          <span className="card-title">{project.title}</span>
        </h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-3">
          <span className="label text-mute">{project.location}</span>
          {project.status !== 'completed' && <StatusChip status={project.status} />}
        </div>
        <p className="label text-graphite mt-2">{project.themes.join(' / ')}</p>
        <span className="label inline-flex items-center gap-2 mt-4 text-accent-ink opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 transition-all">
          {t('work.read')} <Arrow />
        </span>
      </a>
    </Reveal>
  );
}

export function Work({ filter, setFilter }) {
  const { t } = useLang();
  const { featured, expertise } = useContent();
  const list = filter ? featured.filter((p) => p.expertise.includes(filter)) : featured;
  const options = [{ id: null, short: t('work.filter.all') }, ...expertise];

  return (
    <section aria-labelledby="work" className="column-rules">
      <div className="gutter mx-auto max-w-sheet py-16 md:py-28">
        <SectionHead
          sheet="A-01"
          id="work"
          title={t('work.title')}
          aside={t('work.count', { n: pad(list.length), total: pad(featured.length) })}
        />

        <div className="flex flex-wrap gap-2 mb-10 md:mb-14" role="group" aria-label={t('work.filter.aria')}>
          {options.map((o) => {
            const active = filter === o.id;
            return (
              <button
                key={o.id ?? 'all'}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(o.id)}
                className={`chip label px-3 py-2 border transition-colors ${
                  active ? 'bg-sel text-on-sel border-sel' : 'border-rule text-graphite hover:border-strong hover:text-ink bg-paper'
                }`}
              >
                {o.no && <span className={`${active ? 'opacity-70' : 'text-accent-ink'} mr-1.5`}>{o.no}</span>}
                {o.short}
              </button>
            );
          })}
        </div>

        <ul className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-14 md:gap-y-20">
          {list.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={featured.indexOf(p)}
              layout={filter ? ['md:col-span-6', 'aspect-[4/3]'] : LAYOUT[i % LAYOUT.length]}
            />
          ))}
        </ul>

        <Archive />
      </div>
    </section>
  );
}

function Archive() {
  const { t, lang } = useLang();
  const { archive } = useContent();
  const typeLabel = (s) => (s === 'academic' ? t('type.academic') : s === 'concept' ? t('type.concept') : t(`status.${s}`));
  const A = lang === 'ru' ? 'А' : 'A';
  return (
    <div className="mt-24 md:mt-36" aria-labelledby="archive">
      <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 border-t border-strong pt-3 mb-6">
        <span className="col-span-12 md:col-span-2 label text-mute">{t('sheet')} {A}-01.1</span>
        <h3 id="archive" className="section-title col-span-12 md:col-span-6 display-condensed uppercase text-[clamp(30px,4vw,56px)]">
          {t('archive.title')}
        </h3>
        <p className="col-span-12 md:col-span-4 text-graphite text-[15px] mt-2 md:mt-0">{t('archive.intro')}</p>
      </div>

      <div className="hidden md:grid grid-cols-12 gap-x-6 label text-mute py-2 border-b border-strong">
        <span className="col-span-1">{t('archive.col.no')}</span>
        <span className="col-span-4">{t('archive.col.project')}</span>
        <span className="col-span-3">{t('archive.col.context')}</span>
        <span className="col-span-2">{t('archive.col.location')}</span>
        <span className="col-span-1">{t('archive.col.year')}</span>
        <span className="col-span-1 text-right">{t('archive.col.type')}</span>
      </div>
      <ul>
        {archive.map((p, i) => {
          const Row = p.status === 'confidential' ? 'div' : 'a';
          return (
            <li key={p.slug} className="border-b border-rule">
              <Row
                {...(Row === 'a' ? { href: `#project-${p.slug}` } : {})}
                className={`group grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-1 py-4 items-baseline ${Row === 'a' ? 'hover:bg-sheet' : ''} transition-colors`}
              >
                <span className="col-span-2 md:col-span-1 label text-accent-ink tabular">{A}{pad(i + 9)}</span>
                <span className="col-span-10 md:col-span-4 text-[19px] font-medium min-w-0">
                  <span className="card-title">{p.title}</span>
                  {Row === 'a' && <Arrow className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </span>
                <span className="col-span-10 col-start-3 md:col-start-auto md:col-span-3 text-[14px] text-graphite">{p.client}</span>
                <span className="col-span-10 col-start-3 md:col-start-auto md:col-span-2 label text-mute">{p.location}</span>
                <span className="col-span-4 col-start-3 md:col-start-auto md:col-span-1 label text-mute tabular">{p.years}</span>
                <span className="col-span-6 md:col-span-1 label md:text-right text-graphite">{typeLabel(p.status)}</span>
              </Row>
            </li>
          );
        })}
      </ul>
      <p className="label text-mute mt-4">
        <T>{t('archive.note')}</T>
      </p>
    </div>
  );
}
