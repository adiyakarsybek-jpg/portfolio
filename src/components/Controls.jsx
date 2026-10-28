import { useEffect, useState } from 'react';
import { LANGS, store, useLang } from '../i18n/index.jsx';
import { DEFAULT_PALETTE, PALETTES } from '../theme/palettes.js';

/* EN / RU switcher — lives in the header on every page. */
export function LangSwitch({ className = '' }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t('lang.label')} className={`flex items-center label ${className}`}>
      {LANGS.map((l, i) => (
        <span key={l.id} className="flex items-center">
          {i > 0 && <span className="text-mute px-1.5" aria-hidden="true">/</span>}
          <button
            type="button"
            lang={l.id}
            aria-pressed={lang === l.id}
            aria-label={l.name}
            onClick={() => setLang(l.id)}
            className={`py-1 border-b-2 transition-colors ${
              lang === l.id ? 'border-accent text-ink' : 'border-transparent text-mute hover:text-ink'
            }`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}

export function usePalette() {
  const [palette, setPalette] = useState(() => {
    const saved = store.get('ak-palette');
    return PALETTES.some((p) => p.id === saved) ? saved : DEFAULT_PALETTE;
  });
  useEffect(() => {
    document.documentElement.dataset.palette = palette;
    store.set('ak-palette', palette);
  }, [palette]);
  return [palette, setPalette];
}

/* Prototype-only palette selector, fixed in the bottom-right corner. */
export function PaletteSwitch() {
  const { lang, t } = useLang();
  const [palette, setPalette] = usePalette();
  const current = PALETTES.find((p) => p.id === palette);
  return (
    <div
      className="fixed z-[65] bg-paper/95 backdrop-blur-sm border border-strong shadow-[0_1px_0_rgb(0_0_0/0.04)]"
      style={{
        right: 'max(12px, env(safe-area-inset-right, 0px))',
        bottom: 'max(12px, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex items-stretch">
        <span className="hidden sm:flex flex-col justify-center px-3 border-r border-rule">
          <span className="label text-mute leading-none">{t('palette.label')}</span>
          <span className="label text-ink mt-1 leading-none whitespace-nowrap">{current?.name[lang]}</span>
        </span>
        <div role="radiogroup" aria-label={t('palette.label')} className="flex">
          {PALETTES.map((p) => {
            const active = p.id === palette;
            return (
              <button
                key={p.id}
                type="button"
                role="radio"
                aria-checked={active}
                title={p.name[lang]}
                aria-label={`${t('palette.label')} ${p.letter}: ${p.name[lang]}`}
                onClick={() => setPalette(p.id)}
                className={`relative flex flex-col items-center justify-center gap-1 w-11 h-12 border-l border-rule first:border-l-0 transition-colors ${
                  active ? 'bg-sel text-on-sel' : 'text-ink hover:bg-sheet'
                }`}
              >
                <span className="flex" aria-hidden="true">
                  {p.swatch.map((c) => (
                    <span key={c} className="w-2.5 h-2.5 border border-black/20" style={{ background: c }} />
                  ))}
                </span>
                <span className="label leading-none">{p.letter}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
