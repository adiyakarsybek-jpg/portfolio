/* =====================================================================
   PROJECTS — single source of truth for the Work grid, Archive and
   case-study pages.

   EDITING RULES
   • Any text wrapped in square brackets, e.g. "[Outcome to be confirmed]",
     is rendered as a visible editorial placeholder (dashed cobalt style).
     Replace it with real text and the placeholder styling disappears.
   • Images: put files in  src/assets/projects/<slug>/  and list them in
     `gallery` as "<slug>/<file>.jpg". The first image is the cover.
     Add  fit: 'contain'  to an image to show the whole page (good for
     portrait report pages) instead of cropping it.
     Leave `gallery: []` to show a generated cartographic placeholder.
   • `status`   : 'completed' | 'ongoing' | 'academic' | 'initiative' | 'concept' | 'confidential'
   • `expertise`: ids from src/data/expertise.js — drives filters and the
     links from the Expertise section.
   • `featured: true` puts the project in Selected Work; otherwise it
     appears in the Archive index.
   ===================================================================== */

export const projects = [
  /* ------------------------------------------------------------------ 01 */
  {
    slug: 'undp-petropavlovsk',
    featured: true,
    title: 'Urban Resilience & Climate Adaptation',
    client: 'UNDP Kazakhstan',
    location: 'Petropavlovsk, Kazakhstan',
    years: '2025–2026',
    status: 'ongoing',
    statusNote: '[Confirm: ongoing or completed]',
    themes: ['Climate Adaptation', 'Urban Resilience', 'Strategic Planning'],
    expertise: ['strategy', 'climate', 'partnerships'],
    placeholder: 'contours',
    summary: '[One-sentence summary of the assignment to be added]',
    context: '[Project context to be confirmed — e.g. the city, the climate risks addressed and why UNDP initiated the work.]',
    challenge: '[Challenge to be confirmed]',
    role: '[My role and responsibilities to be confirmed]',
    approach: ['[Methodology step to be confirmed]', '[Stakeholder engagement approach to be confirmed]'],
    outputs: ['[Key output to be confirmed]'],
    outcomes: '[Outcome to be confirmed]',
    collaborators: ['UNDP Kazakhstan', '[Other partners to be confirmed]'],
    gallery: [],
    credits: '[Confirm which materials may be shown publicly]',
  },

  /* ------------------------------------------------------------------ 02 */
  {
    slug: 'bi-group-landscape',
    featured: true,
    title: 'Landscape Product Strategy',
    client: 'BI Group',
    location: 'Kazakhstan',
    years: '2025–2026',
    status: 'ongoing',
    statusNote: '[Confirm: ongoing or completed]',
    themes: ['Product Strategy', 'Urban Development', 'Landscape'],
    expertise: ['strategy', 'partnerships'],
    placeholder: 'blocks',
    summary: '[One-sentence summary of the assignment to be added]',
    context: '[Project context to be confirmed — the developer’s portfolio and why a landscape product strategy was needed.]',
    challenge: '[Challenge to be confirmed]',
    role: '[My role and responsibilities to be confirmed]',
    approach: ['[Methodology step to be confirmed]'],
    outputs: ['[Key output to be confirmed]'],
    outcomes: '[Outcome to be confirmed]',
    collaborators: ['[Internal teams / consultants to be confirmed]'],
    gallery: [],
    credits: '[Confirm confidentiality and which materials may be shown]',
  },

  /* ------------------------------------------------------------------ 03 */
  {
    slug: 'unicef-inclusive-play',
    featured: true,
    title: 'Inclusive Play Spaces',
    client: 'UNICEF Kazakhstan — Play Spaces for All',
    location: 'Kazakhstan',
    years: '2021–2022',
    status: 'completed',
    themes: ['Inclusive Design', 'Policy', 'Research'],
    expertise: ['inclusion', 'research'],
    summary:
      'A national methodological guide for planning, designing and delivering playgrounds that work for every child, including children with disabilities.',
    context:
      'Within UNICEF’s Play Spaces for All initiative, our team was funded from November 2021 to March 2022 to look at how play spaces in Kazakhstan are planned and built. Despite efforts toward inclusion, most playgrounds still did not cater to all children.',
    challenge:
      'Turn international good practice into guidance that is practical for Kazakh municipalities and compatible with the national legislative framework for playgrounds and accessibility.',
    role: 'I led the research and managed the project.',
    approach: [
      'A dual review: global best practice in inclusive play alongside an audit of Kazakhstan’s existing play spaces.',
      'Analysis of the national legislative framework for playgrounds and inclusion, to locate where regulation needed improvement.',
      'Standard solutions and design prototypes for kindergarten and park playgrounds, giving clear planning and design guidance.',
      'An online forum where government officials, educators, parents and international experts discussed the future of play spaces in Kazakhstan.',
    ],
    outputs: [
      'Methodological guide on organising inclusive play spaces in the Republic of Kazakhstan — 38 pages, in Russian and Kazakh',
      'Planning and design framework and principles for inclusive playgrounds',
      'Design prototypes for kindergarten and park playgrounds',
      'National online forum on inclusive play',
    ],
    outcomes: '[Adoption or use of the guide by municipalities to be confirmed]',
    collaborators: ['UNICEF Kazakhstan', '[Project team / firm to be confirmed]'],
    gallery: [
      { src: 'unicef/01.jpg', fit: 'contain', caption: 'Who needs inclusive play spaces — opening chapter of the guide.' },
      { src: 'unicef/02.jpg', caption: 'Key principles, illustrated.' },
      { src: 'unicef/03.jpg', caption: 'Prototype: kindergarten playground.' },
      { src: 'unicef/04.jpg', caption: 'Principles for creating inclusive playgrounds — from exclusion to inclusion.' },
      { src: 'unicef/05.jpg', caption: 'Prototype: park playground.' },
    ],
    credits: 'Pages from the published guide. Developed in Russian and Kazakh.',
  },

  /* ------------------------------------------------------------------ 04 */
  {
    slug: 'wealmaty',
    featured: true,
    title: 'Urban Governance & Community Engagement',
    client: 'WeAlmaty — British Council, KBTU, Almaty Akimat, Almaty Development Centre',
    location: 'Almaty, Kazakhstan',
    years: '2017–2020',
    status: 'completed',
    themes: ['Community Engagement', 'Urban Governance', 'Partnerships'],
    expertise: ['partnerships', 'research'],
    summary:
      'A three-year, EU-funded programme helping the City of Almaty work with civil society on culture, business and active citizenship.',
    context:
      'WeAlmaty supported the City of Almaty in realising its development vision to 2020, helping local government leaders work with civil society. It was designed and run by a coalition of the British Council, the Kazakh-British Technical University, the Almaty Akimat and the Almaty Development Centre, and funded by a European Union grant.',
    challenge:
      'Build a working relationship between city government and citizens at a time when public participation in urban development was new for Almaty.',
    role:
      'I managed the project on behalf of the Almaty Development Centre and set the agenda and themes of its events.',
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
    credits: 'Event photographs are published in open access by WeAlmaty and the British Council.',
  },

  /* ------------------------------------------------------------------ 05 */
  {
    slug: 'q88-concept-plans',
    featured: true,
    title: 'Urban Development Strategies',
    client: 'Q88 — Association of Urbanists of Kazakhstan',
    location: 'Pavlodar & Atyrau, Kazakhstan',
    years: '2021–2022',
    status: 'completed',
    themes: ['Strategic Planning', 'Urban Development', 'Policy'],
    expertise: ['strategy', 'research'],
    summary:
      'Concept plans giving two city administrations a multi-year programme for urban development, public space and green infrastructure.',
    context:
      'Local authorities in Pavlodar and Atyrau needed a structured programme for city development. Atyrau, home to the country’s main oil refinery, faced a shortage of quality public space, a lack of green infrastructure and a poorly maintained river. In Pavlodar the focus was on public spaces, the embankment and the central streets.',
    challenge:
      'Translate city-wide diagnosis into a programme that local authorities could act on within a three- to five-year horizon.',
    role:
      'Pavlodar: site analysis, work with the community and authorship of the final report. Atyrau: desk research and authorship of the final report.',
    approach: [
      'Site analysis and fieldwork in Pavlodar, including engagement with local residents.',
      'Desk research on Atyrau’s urban structure, public spaces and river corridor.',
      'Framing proposals as a development programme rather than a single masterplan.',
    ],
    outputs: [
      'Pavlodar concept plan, 2022–2025 — 136 pages',
      'Atyrau concept plan, 2021–2025 — 45 pages',
      'Both reports written in Russian',
    ],
    outcomes: '[Adoption and implementation status to be confirmed]',
    collaborators: ['Q88', '[Local authority partners to be confirmed]'],
    gallery: [
      { src: 'q88/01.jpg', caption: 'Pavlodar 2022–2025: conceptual approaches — report cover.' },
      { src: 'q88/02.jpg', caption: 'Atyrau 2021–2025: conceptual approaches — report cover.' },
      { src: 'q88/03.jpg', caption: 'Pavlodar: forming urban connections between districts.' },
      { src: 'q88/04.jpg', caption: 'Atyrau: urban infrastructure priorities.' },
    ],
    credits: 'Report pages. Developed in Russian.',
  },

  /* ------------------------------------------------------------------ 06 */
  {
    slug: 'gehl-almaty-public-space',
    featured: true,
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
      'The guideline describes the public spaces of Almaty — squares, parks and streets. It has two kinds of pages: white pages, developed by the team representing the City of Almaty, and blue pages, developed by Gehl Architects.',
    challenge:
      'Give the city a shared typology of public spaces and streets that could guide future design decisions.',
    role:
      'Working as an urbanist for the city side, I assisted colleagues from Gehl Architects with street typology research and, under their supervision, developed the typology of Almaty’s streets.',
    approach: [
      'Research into Almaty’s existing street network and public spaces.',
      'Typology of public spaces, developed by the city team.',
      'Street design principles based on Jan Gehl’s studies.',
    ],
    outputs: [
      'Public space guideline for Almaty — 52 pages, in Russian',
      'Typology of seven street types in Almaty',
      'Strategic principles for urban mobility',
    ],
    outcomes: '[Use of the guideline in city projects to be confirmed]',
    collaborators: ['Gehl Architects', 'City of Almaty', 'Almaty Development Centre'],
    gallery: [
      { src: 'gehl/01.jpg', fit: 'contain', caption: 'Organising urban space: core principles — guideline cover.' },
      { src: 'gehl/02.jpg', caption: 'Street types in Almaty.' },
      { src: 'gehl/03.jpg', caption: 'Street types in Almaty (continued).' },
    ],
    credits: 'Only the city team’s white pages are shown. Gehl Architects’ blue pages remain their property.',
  },

  /* ------------------------------------------------------------------ 07 */
  {
    slug: 'ayel-qala',
    featured: true,
    title: 'Gender-Inclusive Cities Initiative',
    client: 'Ayel&Qala',
    location: 'Kazakhstan',
    years: '2025–present',
    status: 'initiative',
    themes: ['Gender Inclusion', 'Urban Advocacy', 'Community'],
    expertise: ['inclusion', 'partnerships'],
    placeholder: 'dots',
    summary:
      'An initiative advancing gender-inclusive urban development and women’s participation in shaping cities.',
    context: '[Why Ayel&Qala was founded and the gap it addresses — to be added]',
    challenge: '[Challenge to be confirmed]',
    role: '[Founder / co-founder — exact role to be confirmed]',
    approach: ['[Programme or activity to be added]'],
    outputs: ['[Events, publications or projects to be added]'],
    outcomes: '[Outcome to be confirmed]',
    collaborators: ['[Partners to be confirmed]'],
    gallery: [],
    credits: '',
  },

  /* ------------------------------------------------------------------ 08 */
  {
    slug: 'ucl-gender-leadership',
    featured: true,
    title: 'Gender, Leadership & Urban Planning',
    client: 'UCL, The Bartlett School of Planning',
    location: 'London / Kazakhstan',
    years: '2024–2025',
    status: 'academic',
    themes: ['Research', 'Gender', 'Planning Leadership'],
    expertise: ['inclusion', 'research'],
    placeholder: 'lines',
    summary: '[Research question in one sentence — to be added]',
    context: '[Research context to be added]',
    challenge: '[Research question to be confirmed]',
    role: '[Author — confirm whether dissertation or post-graduation research]',
    approach: ['[Research methods to be confirmed — e.g. interviews, policy review]'],
    outputs: ['[Dissertation / paper title to be confirmed]'],
    outcomes: '[Recognition linked to this research to be confirmed]',
    collaborators: ['[Supervisor to be confirmed]'],
    gallery: [],
    credits: '',
  },

  /* ================================================================
     ARCHIVE — earlier professional work and academic projects (2016–2024)
     ================================================================ */
  {
    slug: 'vision-zero-pavlodar',
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
    collaborators: ['Q88', 'Kantai City Planning', '[Confirm partners]'],
    gallery: [
      { src: 'vision-zero/01.jpg', caption: 'Report cover.' },
      { src: 'vision-zero/02.jpg', caption: 'Street design as the basis of the Vision Zero plan.' },
      { src: 'vision-zero/03.jpg', caption: 'Results of Vision Zero Almaty used as a reference.' },
      { src: 'vision-zero/04.jpg', caption: 'Pavlodar streets proposed for redesign.' },
    ],
    credits: 'Report pages. Developed in Russian.',
  },
  {
    slug: 'ush-tut-pocket-park',
    title: 'Ush Tut Pocket Park',
    client: 'Urban planner and designer position',
    location: 'Turkistan, Kazakhstan',
    years: '2020',
    status: 'concept',
    themes: ['Co-design', 'Public Space', 'Placemaking'],
    expertise: ['inclusion', 'partnerships'],
    summary: 'A pocket park co-designed with neighbours and named after the three mulberry trees on the site.',
    context:
      'The site was home to three mulberry trees — “Ush Tut” in Kazakh — which became the basis for the park’s name, identity and branding.',
    challenge: 'Produce a delivery-ready concept with local residents. The project was not built: local authorities judged it not viable and no sponsor was found.',
    role: 'I developed the project, including all placemaking ideas. Colleagues helped organise co-design events and produce AutoCAD drawings.',
    approach: [
      'Co-design events with local neighbours.',
      'Site analysis, design concept, visualisation and detailed design.',
      'A play structure built around the tapchan, a traditional Central Asian canopy.',
    ],
    outputs: ['Concept report — 40 pages, in Russian, five chapters'],
    outcomes: 'Not implemented.',
    collaborators: ['Local residents', '[Colleagues to be credited]'],
    gallery: [
      { src: 'ush-tut/01.jpg', caption: 'Visualisation of one of the park views.' },
      { src: 'ush-tut/02.jpg', caption: 'Play structure with a tapchan canopy.' },
      { src: 'ush-tut/03.jpg', caption: 'Wayfinding and branding details.' },
      { src: 'ush-tut/04.jpg', caption: 'Masterplan with furniture locations.' },
    ],
    credits: 'Concept report. Developed in Russian.',
  },
  {
    slug: 'thamesmead',
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
    credits: 'Group academic work, UCL.',
  },
  {
    slug: 'kings-square',
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
    credits: 'Individual academic work, UCL.',
  },
  {
    slug: 'biophilic-urbanism',
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
    credits: 'Individual academic work, UCL.',
  },
  {
    slug: 'wembley-park',
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
    credits: 'Group academic work, UCL.',
  },
  {
    slug: 'south-poplar',
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
    credits: 'Group academic work, UCL.',
  },
  {
    slug: 'dar-internship',
    title: 'TOD Benchmarking & City Centre Masterplan',
    client: 'Internship — Dar, London',
    location: 'Addis Ababa / Saudi Arabia',
    years: '2024',
    status: 'confidential',
    themes: ['Transit-Oriented Development', 'Masterplanning'],
    expertise: ['research'],
    summary: 'Research on transit-oriented development with a gender and informality lens, and graphics for a city-centre masterplan.',
    context: 'A benchmarking exercise of TOD cases in Tokyo, Contra Costa, Pune and Addis Ababa to guide interventions on four sites in Addis Ababa; and graphics for two districts of a city-centre masterplan in Saudi Arabia.',
    challenge: 'Fast-paced client work on two international projects.',
    role: 'I researched TOD precedents with attention to gender mainstreaming and informality, and produced district diagrams in Illustrator and AutoCAD.',
    approach: ['Comparative benchmarking of four TOD cases.', 'A colour and graphic system for five districts.'],
    outputs: ['Contributions to confidential client reports'],
    outcomes: 'Confidential — no material shown.',
    collaborators: ['Dar'],
    gallery: [],
    placeholder: 'lines',
    credits: 'Both reports are confidential.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);
