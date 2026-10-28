# Adiya Karsybek — Portfolio (Prototype V2)

React 18 + Vite + Tailwind CSS. No backend, CMS or API keys. Fonts are self-hosted.

## Run / build
```bash
npm install
npm run dev            # local preview at http://localhost:5173
npm run build          # static site in /dist  → upload to Netlify, Vercel, GitHub Pages, any static host
npm run build:single   # one self-contained HTML file in /dist-single (for sharing a preview)
```

## Where to edit content (no React knowledge needed)
| What | English | Russian |
|---|---|---|
| Name, intro, biography, education, awards, talks, contact | `src/data/site.js` | `src/data/ru/content.js` |
| Projects (Selected Work, Archive, case studies) | `src/data/projects.js` | `src/data/ru/projects.js` |
| Five expertise areas | `src/data/expertise.js` | `src/data/ru/content.js` (`expertiseRu`) |
| Initiatives | `src/data/initiatives.js` | `src/data/ru/content.js` (`initiativesRu`) |
| Interface labels (menu, buttons, headings) | `src/i18n/ui.js` → `en` | `src/i18n/ui.js` → `ru` |

The English files hold the structure (images, status, links, order). The Russian files hold only text,
matched by project `slug` (or expertise `id` / initiative `name`). Any Russian field that is missing falls back
to English. Image captions in Russian go in `captions: [...]`, in the same order as the gallery.

## Language and palette switchers
- **EN / RU** sits in the header. English is the default; the choice is remembered in the browser.
- **Palette A / B / C / V1** floats in the bottom-right corner (prototype only). A = Electric Pink,
  B = Dusty Rose, C = Pink & Burgundy, V1 = original cobalt for comparison.
- All colours are tokens in `src/index.css` under `[data-palette='a']` etc.
- To lock in a final palette: set `DEFAULT_PALETTE` in `src/theme/palettes.js` and remove `<PaletteSwitch />` from `src/App.jsx`.

## Fonts
English: Archivo (display, wide and condensed) + Instrument Sans (body).
Russian: Unbounded (display) + Roboto Flex (condensed headings) + Onest (body). IBM Plex Mono for labels in both.
All are self-hosted via @fontsource packages.

**Placeholders:** any text wrapped in `[square brackets]` shows on the site as a dashed blue placeholder.
Replace it with real text and the styling disappears automatically. Search the data files for `[` to find everything still to confirm.

**Contact:** set `email`, `linkedin`, `cvUrl` in `src/data/site.js` (they are `null` now). Put the CV PDF in `/public` and set `cvUrl: 'cv.pdf'`.

## Images
1. Put images in `src/assets/projects/<project-slug>/` (JPG/PNG/WebP, ~1500px wide, under ~400 KB).
2. List them in that project's `gallery` in `projects.js`:
   ```js
   gallery: [
     { src: 'undp-petropavlovsk/01.jpg', caption: 'Flood-risk map of the city.' },
     { src: 'undp-petropavlovsk/02.jpg', caption: 'Workshop with the akimat.', fit: 'contain' },
   ]
   ```
   The first image is the cover. `fit: 'contain'` shows the whole image (use for portrait report pages).
3. An empty `gallery: []` shows a generated cartographic placeholder.

Portrait: replace the placeholder block in `src/components/Sections.jsx` (search "PLACEHOLDER").

Images currently in the site come from the 2024 PDF portfolio. Gehl Architects' blue pages were deliberately left out; the KSA and Addis Ababa internship work is confidential and has no images.

## Structure
```
src/
  data/          ← all editable content
  assets/        ← project images
  components/    Hero (header + hero map), Work (grid, filters, archive),
                 CaseStudy (reusable template), Sections (expertise,
                 initiatives, about, contact, footer), primitives
  App.jsx        hash routing: #work, #about … and #project-<slug>
  index.css      design tokens (colours, fonts)
```
Routing uses the URL hash, so it works on any static host with no server rules.
