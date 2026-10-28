import { LANGS, useLang } from '../i18n/index.jsx';

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
              lang === l.id ? 'border-line text-ink' : 'border-transparent text-mute hover:text-ink'
            }`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}
