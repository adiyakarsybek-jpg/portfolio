/* =====================================================================
   PROJECTS — single source of truth for the Work grid, Archive and
   case-study pages. Russian text lives in src/data/ru/projects.js.

   EDITING RULES
   • Text in [square brackets] is shown as a visible placeholder.
   • `art`     : the generated cover drawing (see src/components/ProjectArt.jsx):
                 flood · landscape · play · network · twin · streets · women ·
                 research · crossing · trees · contours · blocks · leaves ·
                 stadium · river · transit · homes
   • `gallery` : photos shown inside the case study (collapsed by default).
                 Files live in src/assets/projects/<slug>/. `fit: 'contain'`
                 shows the whole image instead of cropping it.
   • `docs`    : downloadable files in /public/docs/… (title + titleRu).
   • `links`   : external pages — kind: site · social · article · video ·
                 event · award (title + titleRu).
   • `status`  : 'completed' | 'ongoing' | 'academic' | 'initiative' | 'concept' | 'confidential'
   • `expertise`: ids from src/data/expertise.js (filters + Expertise links).
   • `featured: true` → Selected Work; otherwise → Archive.
   ===================================================================== */

const portfolioDoc = (slug) => ({
  title: 'Project pages from the 2024 portfolio (PDF)',
  titleRu: 'Страницы проекта из портфолио 2024 (PDF)',
  file: `docs/projects/portfolio-2024_${slug}.pdf`,
});

export const projects = [
  /* ------------------------------------------------------------------ 01 */
  {
    slug: 'undp-petropavlovsk',
    featured: true,
    art: 'flood',
    title: 'Urban Resilience & Climate Adaptation',
    client: 'UNDP Kazakhstan',
    location: 'Petropavlovsk, Kazakhstan',
    years: '2025–present',
    status: 'ongoing',
    themes: ['Climate Adaptation', 'Disaster Risk Reduction', 'Master Planning'],
    expertise: ['strategy', 'climate', 'partnerships'],
    summary:
      'A concept for Petropavlovsk’s master plan that builds climate adaptation and disaster risk reduction into the city’s long-term planning.',
    context:
      'Petropavlovsk is exposed to annual flooding of the Esil River. With UNDP Kazakhstan, the city is bringing a climate-change and disaster risk reduction (DRR) methodology into municipal planning and decision-making.',
    challenge:
      'Turn an international climate and DRR methodology into planning decisions a city administration can adopt, and make the approach replicable for other cities in the region.',
    role:
      'As National Consultant for Urban Planning and Climate Resilience, I lead the technical adaptation of the methodology, author the concept for the master plan and line-manage a team of two planners.',
    approach: [
      'Adapting UNDP’s climate-change and DRR methodology to municipal master planning.',
      'Coordinating local government, ministries, UNDP and international technical experts, and aligning their strategies.',
      'Analytical materials and strategic options for scaling the approach to other cities in the region.',
      'A concept note and funding application for an urban climate-resilience project.',
    ],
    outputs: [
      'Concept for the Petropavlovsk Master Plan with climate adaptation, DRR and resilience measures',
      'Concept note and funding application for an urban climate-resilience project, UNDP Kazakhstan',
    ],
    outcomes: '[Project ongoing — results to be added]',
    collaborators: ['UNDP Kazakhstan', 'Petropavlovsk city administration', 'International experts in resilient cities and DRR'],
    gallery: [],
    docs: [],
    links: [],
    credits: '[Confirm which materials may be shown publicly]',
  },

  /* ------------------------------------------------------------------ 02 */
  {
    slug: 'bi-group-landscape',
    featured: true,
    art: 'landscape',
    title: 'Landscape Master Plan Product',
    client: 'BI Group (BI Development)',
    location: 'Astana, Kazakhstan',
    years: '2025–2026',
    status: 'completed',
    themes: ['Product Strategy', 'Green Infrastructure', 'Standards'],
    expertise: ['strategy', 'climate', 'partnerships'],
    summary:
      'A new corporate unit for landscape and green-infrastructure master planning at Kazakhstan’s largest developer.',
    context:
      'BI Group develops residential and mixed-use districts across Kazakhstan. The company set up a new product line for landscape master planning across its projects.',
    challenge:
      'Bring corporate landscape standards in line with sustainability goals and international practice, and make them work across the company and its design partners.',
    role:
      'As Manager for Landscape Master Plan Product Development, I established and led the new unit and supervised its landscape designers.',
    approach: [
      'Research and gap analysis of corporate landscape standards against international practice.',
      'A resident-participation survey to ground landscape planning in community needs.',
      'Digitalisation of design standards and landscape design processes, including Revit.',
      'Company-wide rollout together with design firms.',
    ],
    outputs: [
      'Updated corporate landscape standards and regulations',
      'Resident survey — first phase of data collection completed',
      'Digital design standards for landscape projects',
    ],
    outcomes: '[Outcome to be confirmed]',
    collaborators: ['BI Group design and development teams', 'Partner design firms'],
    gallery: [],
    docs: [],
    links: [],
    credits: '[Confirm confidentiality and which materials may be shown]',
  },

  /* ------------------------------------------------------------------ 03 */
  {
    slug: 'unicef-inclusive-play',
    featured: true,
    art: 'play',
    title: 'Inclusive Play Spaces',
    client: 'UNICEF Kazakhstan — Play Spaces for All',
    location: 'Kazakhstan',
    years: '2021–2022',
    status: 'completed',
    themes: ['Inclusive Design', 'Policy', 'Research'],
    expertise: ['inclusion', 'research'],
    summary:
      'A national methodological guide for planning, designing and delivering playgrounds that work for every child, including children with disabilities and chronic illness.',
    context:
      'Within UNICEF’s Play Spaces for All initiative, Q88 delivered a $50,000 UNICEF-funded project from November 2021 to March 2022, in cooperation with the Ministry of Labour and Social Protection. Despite efforts toward inclusion, most playgrounds in Kazakhstan still did not cater to all children.',
    challenge:
      'Turn international good practice into guidance that is practical for Kazakh municipalities and compatible with the national legislative framework for playgrounds and accessibility.',
    role: 'I managed the project across the full cycle, from proposal to delivery, and led the research.',
    approach: [
      'A dual review: global best practice in inclusive play alongside an audit of Kazakhstan’s existing play spaces.',
      'Analysis of the national legislative framework for playgrounds and inclusion, to locate where regulation needed improvement.',
      'Standard solutions and design prototypes for kindergarten and park playgrounds, for children with disabilities and chronic illness.',
      'An online forum, presented with UNICEF, where government officials, educators, parents and international experts discussed the future of play spaces.',
    ],
    outputs: [
      'Methodological guide on organising inclusive play spaces in the Republic of Kazakhstan — 38 pages, in Russian and Kazakh',
      'Planning and design framework and principles for inclusive playgrounds',
      'Design prototypes for kindergarten and park playgrounds',
      'National online forum on inclusive play, presented with UNICEF',
    ],
    outcomes: 'The research findings were published by UNICEF and covered by national media. [Adoption of the guide by municipalities to be confirmed]',
    collaborators: ['UNICEF Kazakhstan', 'Q88', 'Ministry of Labour and Social Protection of Kazakhstan'],
    gallery: [
      { src: 'unicef/01.jpg', fit: 'contain', caption: 'Who needs inclusive play spaces — opening chapter of the guide.' },
      { src: 'unicef/02.jpg', caption: 'Key principles, illustrated.' },
      { src: 'unicef/03.jpg', caption: 'Prototype: kindergarten playground.' },
      { src: 'unicef/04.jpg', caption: 'Principles for creating inclusive playgrounds — from exclusion to inclusion.' },
      { src: 'unicef/05.jpg', caption: 'Prototype: park playground.' },
    ],
    docs: [portfolioDoc('unicef-inclusive-play')],
    links: [
      {
        kind: 'article',
        title: 'UNICEF press release: what inclusive playgrounds should be like',
        titleRu: 'Пресс-релиз ЮНИСЕФ: какими должны быть инклюзивные детские площадки',
        url: 'https://www.unicef.org/kazakhstan/Пресс-релизы/юнисеф-и-казахстанские-урбанисты-рассказали-какими-должны-быть-инклюзивные-детские',
      },
      {
        kind: 'article',
        title: 'Zakon.kz: playgrounds don’t interest children over 10 — study results',
        titleRu: 'Zakon.kz: детские площадки неинтересны детям старше 10 лет — исследование',
        url: 'https://www.zakon.kz/sobytiia/6007989-detskie-ploshchadki-v-kazakhstane-ne-interesny-rebenku-starshe-10-let-issledovanie.html',
      },
      {
        kind: 'article',
        title: 'Kazinform: urbanists on a comfortable city for all',
        titleRu: 'Казинформ: «Урбанисты: комфортный город для всех»',
        url: 'https://www.inform.kz/ru/urbanisty-komfortnyy-gorod-dlya-vseh_a3909889',
      },
    ],
    credits: 'Pages from the published guide. Developed in Russian and Kazakh.',
  },

  /* ------------------------------------------------------------------ 04 */
  {
    slug: 'wealmaty',
    featured: true,
    art: 'network',
    title: 'Urban Governance & Community Engagement',
    client: 'WeAlmaty — British Council, KBTU, Almaty Akimat, Almaty Development Centre',
    location: 'Almaty, Kazakhstan',
    years: '2017–2020',
    status: 'completed',
    themes: ['Community Engagement', 'Urban Governance', 'Partnerships'],
    expertise: ['partnerships', 'research'],
    summary:
      'A three-year, $400,000 EU-funded programme helping the City of Almaty work with civil society on culture, business and active citizenship.',
    context:
      'WeAlmaty supported the City of Almaty in realising its development vision to 2020, helping local government leaders work with civil society. It was run by a coalition of the British Council, the Kazakh-British Technical University, the Almaty Akimat and the Almaty Development Centre, and funded by a European Union grant.',
    challenge:
      'Build a working relationship between city government and citizens at a time when public participation in urban development was new for Almaty.',
    role:
      'I helped establish and deliver the project on behalf of the Almaty Development Centre, and set the agenda and themes of its events.',
    approach: [
      'Large public forums that brought citizens into the conversation about urban development for the first time.',
      'Workshops in which selected citizens developed their own urban proposals.',
      'A small-grants programme, selected jointly with the Akimat, the British Council and KBTU.',
      'Thematic events with partners, including the “Almaty — City for Children” forum with UNICEF and local teenagers.',
    ],
    outputs: [
      'Five major forums and three citizen workshops',
      'One festival and many smaller events',
      'Ten urban projects awarded grants of €5,000 each',
      'Three study visits to the UK',
    ],
    outcomes: '[Longer-term effects on city practice to be confirmed]',
    collaborators: ['British Council', 'Kazakh-British Technical University', 'Almaty Akimat', 'Almaty Development Centre', 'UNICEF (City for Children forum)', 'European Union (funder)'],
    gallery: [
      { src: 'wealmaty/01.jpg', caption: 'First WeAlmaty event, 2017 — engaging citizens in urban development.' },
      { src: 'wealmaty/02.jpg', caption: 'Citizen workshop, 2018.' },
      { src: 'wealmaty/03.jpg', caption: 'With colleagues from the Akimat, British Council and KBTU at the grants selection.' },
      { src: 'wealmaty/04.jpg', caption: '“Almaty — City for Children” forum, organised with UNICEF.' },
    ],
    docs: [portfolioDoc('wealmaty')],
    links: [
      { kind: 'site', title: 'WeAlmaty on the British Council website', titleRu: 'WeAlmaty на сайте Британского Совета', url: 'https://www.britishcouncil.kz/wealmaty/about' },
      { kind: 'social', title: 'WeAlmaty on Facebook', titleRu: 'WeAlmaty в Facebook', url: 'https://www.facebook.com/wealmaty/' },
    ],
    credits: 'Event photographs are published in open access by WeAlmaty and the British Council.',
  },

  /* ------------------------------------------------------------------ 05 */
  {
    slug: 'q88-concept-plans',
    featured: true,
    art: 'twin',
    title: 'Urban Development Strategies',
    client: 'Q88 — Association for Sustainable Territorial Development',
    location: 'Pavlodar & Atyrau, Kazakhstan',
    years: '2021–2022',
    status: 'completed',
    themes: ['Strategic Planning', 'Urban Development', 'Co-design'],
    expertise: ['strategy', 'research', 'partnerships'],
    summary:
      'Concept plans giving two city administrations a multi-year programme for urban development, public space and green infrastructure.',
    context:
      'Local authorities in Pavlodar and Atyrau needed a structured programme for city development. Atyrau, home to the country’s main oil refinery, faced a shortage of quality public space, a lack of green infrastructure and a poorly maintained river. In Pavlodar the focus was on public spaces, the embankment and the central streets.',
    challenge:
      'Translate city-wide diagnosis into a programme that local authorities could act on within a three- to five-year horizon.',
    role:
      'As Lead Urban Planner and co-founder of Q88: in Pavlodar, site analysis, work with residents and the final report; in Atyrau, desk research and the final report.',
    approach: [
      'Site analysis and fieldwork in Pavlodar, with participatory co-design events for residents, professional bodies and public institutions.',
      'Desk research on Atyrau’s urban structure, public spaces and river corridor.',
      'Proposals framed as a development programme rather than a single masterplan.',
    ],
    outputs: [
      'Pavlodar concept plan, 2022–2025 — 136 pages',
      'Atyrau concept plan, 2021–2025 — 45 pages',
      'Both reports written in Russian',
    ],
    outcomes: '[Adoption and implementation status to be confirmed]',
    collaborators: ['Q88', 'Akimats of Pavlodar region and Pavlodar city', '[Atyrau partners to be confirmed]'],
    gallery: [
      { src: 'q88/01.jpg', caption: 'Pavlodar 2022–2025: conceptual approaches — report cover.' },
      { src: 'q88/02.jpg', caption: 'Atyrau 2021–2025: conceptual approaches — report cover.' },
      { src: 'q88/03.jpg', caption: 'Pavlodar: forming urban connections between districts.' },
      { src: 'q88/04.jpg', caption: 'Atyrau: urban infrastructure priorities.' },
    ],
    docs: [portfolioDoc('q88-concept-plans')],
    links: [
      { kind: 'site', title: 'Q88 Association website', titleRu: 'Сайт ассоциации Q88', url: 'https://q88.kz/ru' },
      { kind: 'article', title: 'Pavon.kz on the Pavlodar concept', titleRu: 'Pavon.kz о концепции для Павлодара', url: 'https://pavon.kz/post/view/72064' },
      { kind: 'article', title: 'Pavon.kz: Pavlodar city development', titleRu: 'Pavon.kz: развитие Павлодара', url: 'https://pavon.kz/post/view/72057' },
      { kind: 'video', title: 'Interview on the development of Pavlodar (YouTube)', titleRu: 'Интервью о развитии Павлодара (YouTube)', url: 'https://www.youtube.com/watch?v=l-qercBzrJM' },
      { kind: 'social', title: 'Q88 Telegram channel post', titleRu: 'Публикация в Telegram-канале Q88', url: 'https://kaz.tgstat.com/channel/@Association_q88/3142' },
    ],
    credits: 'Report pages. Developed in Russian.',
  },

  /* ------------------------------------------------------------------ 06 */
  {
    slug: 'gehl-almaty-public-space',
    featured: true,
    art: 'streets',
    title: 'Public Space Guidelines',
    client: 'City of Almaty with Gehl Architects',
    location: 'Almaty, Kazakhstan',
    years: '2016–2019',
    status: 'completed',
    themes: ['Public Space', 'Research', 'Urban Mobility'],
    expertise: ['research', 'strategy'],
    summary:
      'Guidelines for Almaty’s squares, parks and streets, developed by the city team in collaboration with Gehl Architects.',
    context:
      'The guideline describes the public spaces of Almaty — squares, parks and streets. It has two kinds of pages: white pages, developed by the team representing the City of Almaty, and blue pages, developed by Gehl Architects. The collaboration also covered the regeneration of Almaty’s Golden Square.',
    challenge:
      'Give the city a shared typology of public spaces and streets that could guide future design decisions.',
    role:
      'As Senior Architect–Urbanist at the Almaty Urban Studies / Development Centre, I assisted colleagues from Gehl Architects with street typology research and, under their supervision, developed the typology of Almaty’s streets.',
    approach: [
      'Research into Almaty’s existing street network and public spaces.',
      'Typology of public spaces, developed by the city team.',
      'Street design principles based on Jan Gehl’s studies.',
    ],
    outputs: [
      'Public space guideline for Almaty — 52 pages, in Russian',
      'Typology of seven street types in Almaty',
      'Strategic principles for urban mobility',
      'Contribution to Almaty’s first 10 km BRT corridor',
    ],
    outcomes: '[Use of the guideline in city projects to be confirmed]',
    collaborators: ['Gehl Architects', 'City of Almaty', 'Almaty Development Centre'],
    gallery: [
      { src: 'gehl/01.jpg', fit: 'contain', caption: 'Organising urban space: core principles — guideline cover.' },
      { src: 'gehl/02.jpg', caption: 'Street types in Almaty.' },
      { src: 'gehl/03.jpg', caption: 'Street types in Almaty (continued).' },
    ],
    docs: [],
    links: [],
    credits: 'Only the city team’s white pages are shown. Gehl Architects’ blue pages remain their property.',
  },

  /* ------------------------------------------------------------------ 07 */
  {
    slug: 'ayel-qala',
    featured: true,
    art: 'women',
    title: 'Women in Urban Development Network',
    client: 'Ayel&Qala',
    location: 'Kazakhstan & Central Asia',
    years: '2025–present',
    status: 'initiative',
    themes: ['Gender Inclusion', 'Leadership', 'Community'],
    expertise: ['inclusion', 'partnerships'],
    summary:
      'A professional network advancing women’s leadership in urban development across Kazakhstan and Central Asia.',
    context: 'Ayel&Qala brings together women working in urban planning and development for networking, knowledge exchange and the promotion of leaders in the field. [Founding story to be added]',
    challenge: '[Challenge to be confirmed]',
    role: 'Founder.',
    approach: ['Networking and peer support for women in the urban sector.', 'Knowledge exchange and public events.', 'Promoting women leaders in the field.'],
    outputs: ['[Events, publications or projects to be added]'],
    outcomes: '[Outcome to be confirmed]',
    collaborators: ['[Partners to be confirmed]'],
    gallery: [],
    docs: [],
    links: [
      { kind: 'social', title: 'Ayel&Qala on Telegram', titleRu: 'Ayel&Qala в Telegram', url: 'https://t.me/ayelmenqala' },
      { kind: 'social', title: 'Ayel&Qala on Instagram', titleRu: 'Ayel&Qala в Instagram', url: 'https://www.instagram.com/p/DYpP0UCgrMD/' },
    ],
    credits: '',
  },

  /* ------------------------------------------------------------------ 08 */
  {
    slug: 'ucl-gender-leadership',
    featured: true,
    art: 'research',
    title: 'Women in Planning: Gender, Leadership & Decision-Making',
    client: 'UCL, The Bartlett School of Planning',
    location: 'London / Kazakhstan',
    years: '2023–2024',
    status: 'academic',
    themes: ['Research', 'Gender', 'Planning Leadership'],
    expertise: ['inclusion', 'research'],
    summary:
      'Master’s dissertation on women in the urban planning profession in Kazakhstan and their influence on decision-making.',
    context:
      'Written for the Master of Planning in City Planning at The Bartlett School of Planning, UCL, an RTPI- and RICS-accredited programme, studied with a Bolashak scholarship from the Government of Kazakhstan.',
    challenge: '[Research question in one sentence — to be added]',
    role: 'Author. Supervisor: Dr Susan Moore, The Bartlett, UCL.',
    approach: ['[Research methods to be confirmed — e.g. interviews, policy review]'],
    outputs: [
      'Dissertation graded High Distinction',
      'Presented at an Academy of Urbanism webinar (UK)',
      'Presented at the practice–academic conference “Women & Planning: From Theory to Practice”, Leeds, 2024',
    ],
    outcomes:
      'Awarded the Pumarino Prize 2023/24 for the best planning dissertation by an MPlan or MRes student at The Bartlett, and shortlisted for the RTPI Award for Research Excellence (Student Dissertation).',
    collaborators: ['The Bartlett School of Planning, UCL'],
    gallery: [{ src: 'ucl-gender-leadership/01.jpg', fit: 'contain', caption: 'Pumarino Prize 2023/24 certificate, The Bartlett School of Planning, UCL.' }],
    docs: [],
    links: [
      { kind: 'award', title: 'UCL Bartlett: inaugural Pumarino Prize for the best MPlan/MRes dissertation', titleRu: 'UCL Bartlett: первая премия Pumarino за лучшую диссертацию MPlan/MRes', url: 'https://www.ucl.ac.uk/bartlett/news/2025/jun/award-inaugural-pumarino-prize-best-mplanmres-dissertation-2023-24' },
      { kind: 'award', title: 'RTPI Awards for Research Excellence — Adiya Karsybek, UCL', titleRu: 'RTPI Awards for Research Excellence — Адия Карсыбек, UCL', url: 'https://www.rtpi.org.uk/events-training-and-awards/awards/rtpi-awards-for-research-excellence/adiya-karsybek-ucl/' },
      { kind: 'event', title: 'Academy of Urbanism webinar — dissertation presentation', titleRu: 'Вебинар Академии урбанизма — презентация диссертации', url: 'https://www.theaou.org/events/december-coffee-break' },
      { kind: 'article', title: 'Town Planning Review — Leeds conference, 2024', titleRu: 'Town Planning Review — конференция в Лидсе, 2024', url: 'https://www.liverpooluniversitypress.co.uk/doi/full/10.3828/tpr.2024.49' },
      { kind: 'social', title: 'The Bartlett School of Planning on X', titleRu: 'The Bartlett School of Planning в X', url: 'https://x.com/UCL_BSP/status/1942965006821191981' },
    ],
    credits: '',
  },

  /* ================================================================
     ARCHIVE — earlier professional work and academic projects
     ================================================================ */
  {
    slug: 'vision-zero-almaty',
    art: 'crossing',
    title: 'Vision Zero Almaty',
    client: 'AlmatyElectroTrans',
    location: 'Almaty, Kazakhstan',
    years: '2019–2020',
    status: 'completed',
    themes: ['Road Safety', 'Public Transport', 'Street Design'],
    expertise: ['strategy', 'research'],
    summary: 'Implementation of the Vision Zero road-safety programme in Almaty, redesigning major streets around public and active transport.',
    context: 'Almaty adopted Vision Zero to reduce deaths and serious injuries on its streets, with priority for public transport, walking and cycling.',
    challenge: 'Move from a policy commitment to redesigned streets, coordinated across city departments.',
    role: 'As Manager for Transport Infrastructure Development, I coordinated implementation of the programme and managed a team of four specialists.',
    approach: [
      'Redesign of seven major streets with safer layouts and priority for public and active transport.',
      'Integrated design and monitoring measures.',
      'Internal qualitative research on organisational reform, presented to the company board and city authorities.',
    ],
    outputs: ['Seven redesigned streets', 'Recommendations on organisational reform'],
    outcomes: 'Contributed to a reduction in annual traffic fatalities in Almaty from 71 to 25.',
    collaborators: ['AlmatyElectroTrans', 'City of Almaty'],
    gallery: [],
    docs: [],
    links: [
      { kind: 'article', title: 'Kaztag: results of Almaty’s transport and pedestrian transformation', titleRu: 'Kaztag: результаты трансформации транспортно-пешеходной инфраструктуры Алматы', url: 'https://kaztag.kz/ru/news/rezultaty-transformatsii-transportno-peshekhodnoy-infrastruktury-almaty-budut-zametny-k-kontsu-goda-akimat' },
    ],
    credits: '',
  },
  {
    slug: 'vision-zero-pavlodar',
    art: 'crossing',
    title: 'Vision Zero Pavlodar',
    client: 'Road safety programme for the city of Pavlodar',
    location: 'Pavlodar, Kazakhstan',
    years: '2021–2022',
    status: 'completed',
    themes: ['Road Safety', 'Street Design', 'Policy'],
    expertise: ['research', 'strategy'],
    summary: 'A plan to improve road safety in Pavlodar by putting people, not vehicle capacity, at the centre of street planning.',
    context:
      'From January to August 2021, 13 people died and 282 were injured on Pavlodar’s roads (figures cited in the report). In post-socialist cities transport efficiency has traditionally been measured by road capacity and vehicle numbers; international practice prioritises mobility of people and access to public transport.',
    challenge: 'Shift the city’s approach from moving vehicles to protecting people, especially near schools and public facilities.',
    role: 'I carried out the research and wrote the report.',
    approach: [
      'Review of the Vision Zero Almaty programme and its results.',
      'Street design elements based on the NACTO Urban Street Design Guide.',
      'Identification of central streets in Pavlodar where street redesign could be applied.',
    ],
    outputs: ['Vision Zero plan for Pavlodar — 65 pages, in Russian', 'Target set by the plan: reduce traffic deaths and injuries by at least 30%'],
    outcomes: 'Partially implemented in several street redevelopment projects. [Details to be confirmed]',
    collaborators: ['Q88', 'Kantai City Planning'],
    gallery: [
      { src: 'vision-zero/01.jpg', caption: 'Report cover.' },
      { src: 'vision-zero/02.jpg', caption: 'Street design as the basis of the Vision Zero plan.' },
      { src: 'vision-zero/03.jpg', caption: 'Results of Vision Zero Almaty used as a reference.' },
      { src: 'vision-zero/04.jpg', caption: 'Pavlodar streets proposed for redesign.' },
    ],
    docs: [portfolioDoc('vision-zero-pavlodar')],
    links: [
      { kind: 'article', title: 'Kazinform: Vision Zero proposed for Kazakhstan', titleRu: 'Казинформ: «Безопасность на дорогах: концепцию Vision Zero предлагают внедрить в РК»', url: 'https://www.inform.kz/ru/bezopasnost-na-dorogah-koncepciyu-vision-zero-predlagayut-vnedrit-v-rk_a3920716' },
      { kind: 'article', title: 'Exclusive.kz: how Vision Zero could change Kazakhstan’s roads', titleRu: 'Exclusive.kz: как Vision Zero может изменить дороги Казахстана', url: 'https://exclusive.kz/smertelno-opasnye-ulicy-kak-vision-zero-mozhet-izmenit-dorogi-v-kazakhstane/' },
    ],
    credits: 'Report pages. Developed in Russian.',
  },
  {
    slug: 'ush-tut-pocket-park',
    art: 'trees',
    title: 'Ush Tut Pocket Park',
    client: 'Turkistan City Lab',
    location: 'Turkistan, Kazakhstan',
    years: '2020',
    status: 'concept',
    themes: ['Co-design', 'Public Space', 'Placemaking'],
    expertise: ['inclusion', 'partnerships'],
    summary: 'A pocket park co-designed with neighbours and named after the three mulberry trees on the site.',
    context:
      'One of seven urban design projects I led as Senior Urban Planner/Designer at Turkistan City Lab. The site was home to three mulberry trees — “Ush Tut” in Kazakh — which became the basis for the park’s name, identity and branding.',
    challenge: 'Produce a delivery-ready concept with local residents. The project was not built: local authorities judged it not viable and no sponsor was found.',
    role: 'I developed the project, including all placemaking ideas. Colleagues helped organise co-design events and produce AutoCAD drawings.',
    approach: [
      'Co-design events with local neighbours, including women, children and people with disabilities.',
      'Site analysis, design concept, visualisation and detailed design.',
      'A play structure built around the tapchan, a traditional Central Asian canopy.',
    ],
    outputs: ['Concept report — 40 pages, in Russian, five chapters'],
    outcomes: 'Not implemented.',
    collaborators: ['Turkistan City Lab', 'Local residents'],
    gallery: [
      { src: 'ush-tut/01.jpg', caption: 'Visualisation of one of the park views.' },
      { src: 'ush-tut/02.jpg', caption: 'Play structure with a tapchan canopy.' },
      { src: 'ush-tut/03.jpg', caption: 'Wayfinding and branding details.' },
      { src: 'ush-tut/04.jpg', caption: 'Masterplan with furniture locations.' },
    ],
    docs: [portfolioDoc('ush-tut-pocket-park')],
    links: [],
    credits: 'Concept report. Developed in Russian.',
  },
  {
    slug: 'converted-homes',
    art: 'homes',
    title: 'Converted Homes Study',
    client: 'UCL, The Bartlett School of Planning — Research Assistant',
    location: 'London, UK',
    years: '2024',
    status: 'completed',
    themes: ['Housing', 'Health', 'Qualitative Research'],
    expertise: ['research'],
    summary: 'Primary research on the health, well-being and climate-related impacts of permitted-development housing across England.',
    context: 'A research project led by Prof Ben Clifford and Prof Helen Pineo on homes created through permitted-development conversions.',
    challenge: 'Collect reliable first-hand evidence on living conditions in converted homes.',
    role: 'Research Assistant (May–December 2024).',
    approach: ['Semi-structured interviews with residents.', 'Systematic site observation.', 'Standardised home assessments under ethical research protocols.'],
    outputs: ['Qualitative data for the study'],
    outcomes: '[Publication to be linked when available]',
    collaborators: ['The Bartlett School of Planning, UCL'],
    gallery: [],
    docs: [],
    links: [],
    credits: '',
  },
  {
    slug: 'thamesmead',
    art: 'contours',
    title: 'Thamesmead Redevelopment',
    client: 'UCL — Plan Making Studio II',
    location: 'London, UK',
    years: '2024',
    status: 'academic',
    themes: ['Strategic Plan', 'Social Mobility', 'Governance'],
    expertise: ['strategy', 'inclusion'],
    summary: 'A strategic plan for the South East London estate, built around social mobility, the creative economy and co-creation.',
    context: 'A ten-week studio in which a team of six people with diverse backgrounds proposed a strategic plan for redeveloping Thamesmead.',
    challenge: 'Increase social mobility without triggering gentrification and displacement.',
    role: 'I developed the open space policies and the poster layouts. The team shared the conceptual framework, spatial strategy and plan.',
    approach: [
      'Site, regional and desktop research and analysis.',
      'Strategies for the local creative economy, housing and social infrastructure.',
      'Mitigation policies and a governance framework for co-creation.',
    ],
    outputs: ['Two strategic plan posters'],
    outcomes: 'Academic project.',
    collaborators: ['UCL studio team of six'],
    gallery: [
      { src: 'thamesmead/01.jpg', caption: 'Poster 1: strategic rationale for planning and spatial policies.' },
      { src: 'thamesmead/02.jpg', caption: 'Poster 2: tactical solutions and mitigation policies.' },
    ],
    docs: [portfolioDoc('thamesmead')],
    links: [],
    credits: 'Group academic work, UCL.',
  },
  {
    slug: 'kings-square',
    art: 'blocks',
    title: 'Kings Square Estate',
    client: 'UCL — Plan Making Studio I',
    location: 'Islington, London',
    years: '2024',
    status: 'academic',
    themes: ['Densification', 'Placemaking'],
    expertise: ['strategy'],
    summary: 'Plan-making through densification, combining new buildings with placemaking.',
    context: 'An open brief to increase the density of the Kings Square Estate in Islington.',
    challenge: 'Define density and densification first, then base plan-making on that definition.',
    role: 'Individual project.',
    approach: ['Hard densification: new buildings, infill and build-up.', 'Soft densification: placemaking that increases the number of people using the place.'],
    outputs: ['Report — 17 pages'],
    outcomes: 'Academic project.',
    collaborators: [],
    gallery: [
      { src: 'kings-square/01.jpg', caption: 'Masterplan showing additional development.' },
      { src: 'kings-square/02.jpg', caption: 'Hard and soft densification diagrams.' },
      { src: 'kings-square/03.jpg', caption: 'Placemaking masterplan.' },
    ],
    docs: [portfolioDoc('kings-square')],
    links: [],
    credits: 'Individual academic work, UCL.',
  },
  {
    slug: 'biophilic-urbanism',
    art: 'leaves',
    title: 'Biophilic Urbanism',
    client: 'UCL — Sustainable Futures by Design',
    location: 'Wandle Valley, London',
    years: '2023',
    status: 'academic',
    themes: ['Biophilic Design', 'Industrial Land', 'Climate'],
    expertise: ['climate'],
    summary: 'Urban and landscape interventions for a strategic industrial zone along the River Wandle.',
    context: 'A biophilic design approach applied to an industrial zone in South London.',
    challenge: 'Imagine how an industrial area could change over ten years through biophilic design.',
    role: 'Individual project.',
    approach: ['Urban and landscape interventions along the river valley.', 'A fictional interview with a worker, set ten years after implementation, to test the ideas.'],
    outputs: ['Two posters'],
    outcomes: 'Academic project.',
    collaborators: [],
    gallery: [
      { src: 'biophilic/01.jpg', fit: 'contain', caption: 'Poster 1: interventions in the industrial zone.' },
      { src: 'biophilic/02.jpg', caption: 'Poster 2: “creative writing” interview, ten years on.' },
    ],
    docs: [portfolioDoc('biophilic-urbanism')],
    links: [],
    credits: 'Individual academic work, UCL.',
  },
  {
    slug: 'wembley-park',
    art: 'stadium',
    title: 'Wembley Park',
    client: 'UCL — Urban Design: Place Making',
    location: 'London, UK',
    years: '2022',
    status: 'academic',
    themes: ['Urban Analysis', 'Spatial Segregation'],
    expertise: ['research', 'inclusion'],
    summary: 'Analysis of Wembley Park across six urban design dimensions, and a vision for a greener, more integrated place.',
    context: 'Site analysis across the temporal, perceptual, visual, morphological, social and functional dimensions.',
    challenge: 'Move Wembley Park from an entertainment hub to an integrated community space with equal access to green space.',
    role: 'I worked mainly on the social, visual and temporal dimensions, produced diagrams and delivered most presentations.',
    approach: ['Mapping equity and spatial segregation.', 'A shared vision and spatial integration ideas.'],
    outputs: ['Analysis report — 27 pages', 'Vision report — 12 pages'],
    outcomes: 'Academic project.',
    collaborators: ['UCL group'],
    gallery: [
      { src: 'wembley/01.jpg', caption: 'Vision diagram collage.' },
      { src: 'wembley/02.jpg', caption: 'Figure-ground of Wembley Park.' },
      { src: 'wembley/03.jpg', caption: 'Masterplan overview.' },
    ],
    docs: [portfolioDoc('wembley-park')],
    links: [],
    credits: 'Group academic work, UCL.',
  },
  {
    slug: 'south-poplar',
    art: 'river',
    title: 'South Poplar',
    client: 'UCL — Urban Design: Layout, Density and Typology',
    location: 'London, UK',
    years: '2022',
    status: 'academic',
    themes: ['Masterplan', 'Movement', 'Housing'],
    expertise: ['strategy'],
    summary: 'A masterplan for 1,000 homes, 50% affordable, designed for younger and future generations.',
    context: 'Full site analysis and design solutions for the South Poplar area.',
    challenge: 'A residential-led environment with safe, accessible homes and communal hubs for a diverse population.',
    role: 'I developed the transport analysis, the street design concept and the graphics.',
    approach: ['Movement analysis.', 'A new movement strategy and street design concept.'],
    outputs: ['Report — 32 pages'],
    outcomes: 'Academic project.',
    collaborators: ['UCL group'],
    gallery: [
      { src: 'south-poplar/01.jpg', caption: 'Collage for the report cover.' },
      { src: 'south-poplar/02.jpg', caption: 'Movement analysis.' },
      { src: 'south-poplar/03.jpg', caption: 'Section of the active embankment.' },
      { src: 'south-poplar/04.jpg', caption: 'Street sections developed for the report.' },
    ],
    docs: [portfolioDoc('south-poplar')],
    links: [],
    credits: 'Group academic work, UCL.',
  },
  {
    slug: 'dar-internship',
    art: 'transit',
    title: 'TOD Benchmarking & City Centre Masterplan',
    client: 'Dar Al-Handasah — Planning & Urban Design Intern',
    location: 'London, UK',
    years: '2024',
    status: 'confidential',
    themes: ['Transit-Oriented Development', 'Industrial Symbiosis', 'Masterplanning'],
    expertise: ['research'],
    summary: 'International benchmarking on transit-oriented development and industrial symbiosis, and graphics for a city-centre masterplan.',
    context:
      'A master’s placement in the planning and urban design department, working on master plans across EMEA, Europe and the Americas.',
    challenge: 'Fast-paced client work on several international projects.',
    role: 'I researched TOD precedents with attention to gender mainstreaming and informality, and produced client-facing diagrams.',
    approach: ['Comparative benchmarking of TOD and industrial-symbiosis cases.', 'A colour and graphic system for five districts.'],
    outputs: ['Contributions to confidential client reports'],
    outcomes: 'Confidential — no material shown.',
    collaborators: ['Dar Al-Handasah'],
    gallery: [],
    docs: [],
    links: [],
    credits: 'Client reports are confidential.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);
