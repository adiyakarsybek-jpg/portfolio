import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from './ui.js';
import { projects as projectsEn } from '../data/projects.js';
import { expertise as expertiseEn } from '../data/expertise.js';
import { initiatives as initiativesEn } from '../data/initiatives.js';
import * as en from '../data/site.js';
import { projectsRu } from '../data/ru/projects.js';
import * as ru from '../data/ru/content.js';

export const LANGS = [
  { id: 'en', label: 'EN', name: 'English' },
  { id: 'ru', label: 'RU', name: 'Русский' },
];

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};
export { store };

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => (store.get('ak-lang') === 'ru' ? 'ru' : 'en')); // English by default
  useEffect(() => {
    document.documentElement.lang = lang;
    store.set('ak-lang', lang);
  }, [lang]);
  const t = useCallback(
    (key, vars) => {
      let s = ui[lang][key] ?? ui.en[key] ?? key;
      if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
      return s;
    },
    [lang],
  );
  const value = useMemo(() => ({ lang, setLang: setLangState, t }), [lang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/* ---- Merge Russian text over the English data (missing fields fall back to English) ---- */
const mergeList = (base, over) => base.map((b, i) => ({ ...b, ...(over?.[i] || {}) }));

const ruTitles = (list = []) => list.map((x) => ({ ...x, title: x.titleRu || x.title }));

function localizeProject(p, lang) {
  if (lang !== 'ru') return p;
  const { captions, ...rest } = projectsRu[p.slug] || {};
  return {
    ...p,
    ...rest,
    gallery: p.gallery.map((g, i) => ({ ...g, caption: captions?.[i] ?? g.caption })),
    docs: ruTitles(p.docs),
    links: ruTitles(p.links),
  };
}

function buildContent(lang) {
  const isRu = lang === 'ru';
  const projects = projectsEn.map((p) => localizeProject(p, lang));
  return {
    site: isRu ? { ...en.site, ...ru.siteRu } : en.site,
    contact: isRu ? { ...en.contact, ...ru.contactRu } : en.contact,
    bio: isRu ? ru.bioRu : en.bio,
    trajectory: isRu ? mergeList(en.trajectory, ru.trajectoryRu) : en.trajectory,
    education: isRu ? mergeList(en.education, ru.educationRu) : en.education,
    recognition: isRu ? mergeList(en.recognition, ru.recognitionRu) : en.recognition,
    teaching: isRu ? mergeList(en.teaching, ru.teachingRu) : en.teaching,
    media: isRu ? en.media.map((g) => ({ ...g, title: g.titleRu || g.title, items: ruTitles(g.items) })) : en.media,
    expertise: isRu ? expertiseEn.map((e) => ({ ...e, ...(ru.expertiseRu[e.id] || {}) })) : expertiseEn,
    initiatives: isRu ? initiativesEn.map((i) => ({ ...i, ...(ru.initiativesRu[i.name] || {}) })) : initiativesEn,
    projects,
    featured: projects.filter((p) => p.featured),
    archive: projects.filter((p) => !p.featured),
  };
}

const cache = {};
export function useContent() {
  const { lang } = useLang();
  return (cache[lang] ||= buildContent(lang));
}
