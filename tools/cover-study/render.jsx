// Builds the cover art-direction comparison page (current vs proposed).
// Usage: node tools/cover-study/build.mjs  → writes tools/cover-study/out/cover-study.html
import { renderToStaticMarkup } from 'react-dom/server';
import { ProjectArt as Live } from './ProjectArtLive.jsx';
import { ProjectArtV2 } from '../../src/components/ProjectArtV2.jsx';
import { projects } from '../../src/data/projects.js';

const pick = ['undp-petropavlovsk', 'unicef-inclusive-play', 'wealmaty'];
const aspect = { 'undp-petropavlovsk': '16 / 10', 'unicef-inclusive-play': '4 / 5', wealmaty: '16 / 10' };
const notes = {
  'undp-petropavlovsk': 'Flood-risk cartography: river banks, two floodplain lines, a dashed urban edge with a few blocks. Pink only marks the two places where the city meets the floodplain.',
  'unicef-inclusive-play': 'Four play spaces of different sizes joined by one continuous step-free path from the entrance. Pink marks the entrance and the accessible centre of the main space.',
  wealmaty: 'Four institutions, the EU grant and a field of citizens, all meeting at one platform — the programme — which is the only pink element.',
};

export function render() {
  return pick.map((slug, i) => {
    const p = projects.find((x) => x.slug === slug);
    const no = String(projects.filter((x) => x.featured).indexOf(p) + 1).padStart(2, '0');
    return {
      slug, no, title: p.title, client: p.client.split(' — ')[0], years: p.years, aspect: aspect[slug], note: notes[slug],
      live: renderToStaticMarkup(<Live project={p} className="absolute inset-0" />),
      next: renderToStaticMarkup(<ProjectArtV2 project={p} className="absolute inset-0" />),
    };
  });
}
