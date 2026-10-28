import { useEffect, useLayoutEffect, useState } from 'react';
import { Header, Hero } from './components/Hero.jsx';
import { Work } from './components/Work.jsx';
import { About, Contact, Expertise, Footer, Initiatives, Media } from './components/Sections.jsx';
import { CaseStudy } from './components/CaseStudy.jsx';
import { useLang } from './i18n/index.jsx';

/* Hash routing (works on any static host, no server config):
   #project-<slug>  -> case-study view
   #<section-id>    -> home, scrolled to that section            */
const readRoute = () => {
  const h = decodeURIComponent(window.location.hash.slice(1));
  if (h.startsWith('project-')) return { view: 'project', slug: h.slice(8), section: null };
  return { view: 'home', slug: null, section: h || null };
};

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const { t } = useLang();
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const onHash = () => setRoute(readRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useLayoutEffect(() => {
    if (route.view === 'project') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const p = document.title;
      return () => (document.title = p);
    }
    if (route.section) {
      const el = document.getElementById(route.section);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top: Math.max(0, y), behavior: 'instant' });
      }
    }
  }, [route]);

  const filterAndScroll = (id) => {
    setFilter(id);
    if (window.location.hash === '#work') setRoute(readRoute());
    else window.location.hash = 'work';
  };

  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[80] bg-ink text-paper px-3 py-2 label">
        {t('skip')}
      </a>
      <Header />
      {route.view === 'project' ? (
        <CaseStudy key={route.slug} slug={route.slug} />
      ) : (
        <main>
          <Hero />
          <Work filter={filter} setFilter={setFilter} />
          <Expertise onFilter={filterAndScroll} />
          <Initiatives />
          <About />
          <Media />
        </main>
      )}
      <Contact />
      <Footer />
    </>
  );
}
