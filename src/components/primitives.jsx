import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/index.jsx';

/* Renders a string; any [bracketed text] becomes a visible editorial placeholder. */
export function T({ children, as: Tag = 'span', className = '' }) {
  const { t } = useLang();
  if (typeof children !== 'string') return <Tag className={className}>{children}</Tag>;
  const parts = children.split(/(\[[^\]]+\])/g).filter(Boolean);
  return (
    <Tag className={className}>
      {parts.map((part, i) =>
        part.startsWith('[') && part.endsWith(']') ? (
          <span key={i} className="tbc" title={t('ph.title')}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </Tag>
  );
}

export const isPlaceholder = (s) => typeof s === 'string' && /^\[.*\]$/.test(s.trim());

/* Settles content into place when it scrolls into view. Always visible at rest. */
export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const ref = useRef(null);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) return; // already on screen
    setPending(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPending(false);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${pending ? 'pending' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/* Section header styled as a drawing-sheet title block. */
export function SectionHead({ sheet, title, aside, id }) {
  const { t, lang } = useLang();
  const no = lang === 'ru' ? sheet.replace(/^A/, 'А') : sheet;
  return (
    <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 border-t border-strong pt-3 mb-10 md:mb-16">
      <div className="col-span-4 md:col-span-2 label text-mute tabular">{t('sheet')} {no}</div>
      <h2 id={id} className="col-span-8 md:col-span-7 section-title display-condensed text-[clamp(40px,7vw,104px)] uppercase break-words">
        {title}
        <span className="mark-dot" aria-hidden="true" />
      </h2>
      {aside && <div className="col-span-12 md:col-span-3 label text-mute md:text-right mt-3 md:mt-0">{aside}</div>}
    </div>
  );
}

export function StatusChip({ status, className = '' }) {
  const { t } = useLang();
  if (!status) return null;
  const strong = status === 'ongoing' || status === 'initiative';
  return (
    <span
      className={`chip label inline-flex items-center gap-1.5 px-2 py-[3px] border ${
        strong ? 'border-line text-accent-ink' : 'border-rule text-graphite'
      } ${className}`}
    >
      {status === 'ongoing' && <span className="w-1.5 h-1.5 rounded-full bg-accent ring-1 ring-line" aria-hidden="true" />}
      {t(`status.${status}`)}
    </span>
  );
}

/* ---------- Generated cartographic placeholders (replace with real images) ---------- */
function rng(seed) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function PlaceholderArt({ seed = 'x', motif = 'blocks', label = true, slug, ink = 'rgb(var(--ink))', accent = 'rgb(var(--accent))', edge = 'rgb(var(--line))', bg = 'bg-sheet' }) {
  const { t } = useLang();
  const r = rng(seed + motif);
  const W = 400, H = 300;
  let art = null;

  if (motif === 'contours') {
    const cx = 120 + r() * 160, cy = 110 + r() * 80;
    const rings = Array.from({ length: 13 }, (_, i) => {
      const base = 14 + i * 17;
      const pts = Array.from({ length: 40 }, (_, k) => {
        const a = (k / 40) * Math.PI * 2;
        const rr = base * (1 + 0.16 * Math.sin(a * 3 + i * 0.4) + 0.07 * Math.sin(a * 5 + seed.length));
        return `${(cx + Math.cos(a) * rr * 1.25).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`;
      });
      return <polygon key={i} points={pts.join(' ')} fill="none" stroke={ink} strokeOpacity={0.5} strokeWidth={0.7} />;
    });
    art = (
      <>
        {rings}
        <path d={`M-10 ${240 + r() * 30} C 120 ${170 + r() * 40}, 230 ${300}, 410 ${150 + r() * 40}`} fill="none" stroke={edge} strokeWidth={9} />
        <path d={`M-10 ${240 + r() * 30} C 120 ${170 + r() * 40}, 230 ${300}, 410 ${150 + r() * 40}`} fill="none" stroke={accent} strokeWidth={6} />
      </>
    );
  } else if (motif === 'dots') {
    const items = [];
    for (let y = 18; y < H; y += 18)
      for (let x = 18; x < W; x += 18) {
        const hit = r() > 0.86;
        items.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={hit ? 4 : 1.4} fill={hit ? accent : ink} fillOpacity={hit ? 1 : 0.45} stroke={hit ? edge : 'none'} strokeWidth={1} />);
      }
    art = <>{items}</>;
  } else if (motif === 'lines') {
    const items = [];
    for (let y = 22, i = 0; y < H - 10; y += 14, i++) {
      const w = 60 + r() * 300;
      items.push(<rect key={i} x={22} y={y} width={w} height={5} fill={r() > 0.88 ? accent : ink} fillOpacity={0.75} />);
    }
    art = <>{items}</>;
  } else {
    const items = [];
    let y = 8;
    while (y < H) {
      const h = 26 + r() * 40;
      let x = 8;
      while (x < W) {
        const w = 24 + r() * 60;
        const v = r();
        items.push(
          <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h}
            fill={v > 0.93 ? accent : v > 0.3 ? ink : 'none'}
            fillOpacity={v > 0.93 ? 1 : 0.85}
            stroke={v > 0.93 ? edge : ink} strokeOpacity={v > 0.93 ? 1 : v > 0.3 ? 0 : 0.35} strokeWidth={v > 0.93 ? 1.2 : 0.7} />,
        );
        x += w + 8;
      }
      y += h + 8;
    }
    art = <>{items}</>;
  }

  return (
    <div className={`relative w-full h-full ${bg} overflow-hidden`} data-placeholder="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
        {art}
      </svg>
      {label && (
        <span title={slug ? `Add images to src/assets/projects/${slug}/` : undefined} className="absolute left-2 bottom-2 label bg-paper/90 text-accent-ink px-1.5 py-0.5 border border-dashed border-accent-ink">
          {t('ph.image')}
        </span>
      )}
    </div>
  );
}

export const Arrow = ({ className = '' }) => (
  <svg viewBox="0 0 20 20" className={`inline-block w-[0.9em] h-[0.9em] ${className}`} aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
