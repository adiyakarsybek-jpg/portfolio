/* =====================================================================
   SITE — identity, biography, education, recognition, contacts, media.
   Russian text for the same items: src/data/ru/content.js.
   Text in [square brackets] renders as a visible placeholder.
   Items with a `titleRu` field carry their own Russian title.
   ===================================================================== */

export const site = {
  name: 'Adiya Karsybek',
  role: ['Urban Strategist', 'Planning & Development Consultant'],
  tagline: 'Shaping cities through strategy, research, and collaboration.',
  intro:
    'I work at the intersection of urban planning, climate resilience, research, and strategic development, helping shape more inclusive and resilient cities.',
  base: 'Astana, Kazakhstan',
  coordinates: '51.1694° N  71.4491° E',
};

export const contact = {
  email: 'adiyakarsybek@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adiya-karsybek-urbanist/',
  telegram: 'https://t.me/urbanistka_adiyaka',
  telegramHandle: '@urbanistka_adiyaka',
  whatsapp: '77029800870', // digits only, used for https://wa.me/<number>
  phone: '+7 702 980 08 70',
  location: 'Astana, Kazakhstan',
};

export const bio = {
  lead:
    'Adiya Karsybek is a Kazakhstan-based urban planning and development professional working across urban strategy, research, policy, climate resilience, and collaborative initiatives.',
  paragraphs: [
    'My practice started on the city side. At the Almaty Urban Studies / Development Centre I helped set up Kazakhstan’s first urban studies centre, worked with Gehl Architects on Almaty’s public space guidelines and the Golden Square, and delivered WeAlmaty, an EU-funded programme that brought the Akimat, the British Council, a university and citizens to the same table. At AlmatyElectroTrans I coordinated Vision Zero, redesigning seven major streets as annual road deaths fell from 71 to 25.',
    'In Turkistan I led seven urban design projects at Turkistan City Lab. In 2021 I co-founded Q88, an association for sustainable territorial development, where I led concept plans for Pavlodar and Atyrau and a UNICEF-funded national guide to inclusive play spaces.',
    'A Master of Planning with Distinction at UCL’s Bartlett School of Planning, on a Bolashak scholarship, added strategic plan-making and research: my dissertation on women in Kazakhstan’s planning profession won the Pumarino Prize and was shortlisted for the RTPI Research Excellence Award. Back in Kazakhstan I built a landscape master plan unit at BI Group and now work with UNDP Kazakhstan on climate resilience for Petropavlovsk. I founded Ayel&Qala, a network for women in urban development.',
  ],
};

// A trajectory read like a transect: place, years, what happened there.
export const trajectory = [
  { place: 'Almaty', years: '2016–2020', note: 'Almaty Urban Studies / Development Centre — Gehl Architects collaboration, WeAlmaty; AlmatyElectroTrans — Vision Zero' },
  { place: 'Turkistan', years: '2020', note: 'Turkistan City Lab — seven urban design projects, including the Ush Tut pocket park' },
  { place: 'Astana', years: '2021–2022', note: 'Q88 co-founder — UNICEF inclusive play spaces, Pavlodar and Atyrau concept plans' },
  { place: 'London', years: '2022–2024', note: 'UCL, The Bartlett — Master of Planning, Distinction; Dar Al-Handasah; UCL research assistant' },
  { place: 'Kazakhstan', years: '2025–', note: 'UNDP Kazakhstan, BI Group, Ayel&Qala, YULA' },
];

export const education = [
  {
    title: 'Master of Planning (City Planning), with Distinction',
    place: 'University College London, The Bartlett School of Planning',
    year: '2024',
    image: { key: 'diploma', alt: 'UCL Master of Planning diploma, awarded 1 October 2024' },
  },
  { title: 'Bachelor of Architecture', place: 'Satbayev University, Almaty', year: '2016' },
  { title: 'Exchange programme in Architecture & Urban Design', place: 'Bialystok University of Technology, Poland', year: '2015–2016' },
];

export const recognition = [
  {
    title: 'Pumarino Prize 2023/24',
    place: 'Best planning dissertation by an MPlan or MRes student, The Bartlett School of Planning, UCL',
    year: '2025',
    image: { key: 'pumarino', alt: 'Pumarino Prize 2023/24 certificate, The Bartlett School of Planning, UCL' },
    link: { title: 'UCL news', url: 'https://www.ucl.ac.uk/bartlett/news/2025/jun/award-inaugural-pumarino-prize-best-mplanmres-dissertation-2023-24' },
  },
  {
    title: 'RTPI Awards for Research Excellence — shortlisted',
    place: 'Student Dissertation Award, Royal Town Planning Institute',
    link: { title: 'RTPI', url: 'https://www.rtpi.org.uk/events-training-and-awards/awards/rtpi-awards-for-research-excellence/adiya-karsybek-ucl/' },
  },
  { title: 'Bolashak scholarship', place: 'Government of Kazakhstan', year: '2022–2024' },
  { title: 'Steppe Award for creative industries', place: '“Urban Studies” category' },
  { title: 'Letters of appreciation', place: 'Mayor of Almaty; Almaty Development Centre; Minister of Industry and Infrastructure Development of Kazakhstan' },
];

export const teaching = [
  { title: 'Guest lecture “Post-Socialist Cities”', place: 'UCL, London' },
  { title: '“Women & Planning: From Theory to Practice”', place: 'Leeds', year: '2024' },
  { title: 'City Transformation Intensive', place: 'Lecturer', year: '2025–' },
  { title: 'Commonwealth Association of Planners', place: 'Mentee — “Headway” and “Women in Planning” programmes' },
];

/* MEDIA — publications, interviews and talks (from the list of links). */
export const media = [
  {
    id: 'analysis',
    title: 'Analysis & media commentary',
    titleRu: 'Аналитика и комментарии в СМИ',
    items: [
      { kind: 'article', outlet: 'Taj Report', title: 'Analysis of the development of Kazakhstan’s cities', titleRu: 'Аналитический материал о развитии городов Казахстана', url: 'https://taj.report/kzcities' },
      { kind: 'article', outlet: 'Time.kz', year: '2022', title: '“Why do we need urbanists?” — on building human capital in urban development', titleRu: '«Зачем нам урбанисты?» — о развитии человеческого потенциала в сфере городского развития', url: 'https://time.kz/articles/reporter/2022/04/26/zachem-nam-urbanisty' },
      { kind: 'article', outlet: 'Astana TV', title: 'Commentary on urban development', titleRu: 'Комментарии о развитии городов', url: 'https://astanatv.kz/ru/news/82879/' },
      { kind: 'article', outlet: 'Kaztag', title: 'On the transformation of Almaty’s transport and pedestrian infrastructure', titleRu: 'О трансформации транспортно-пешеходной инфраструктуры Алматы', url: 'https://kaztag.kz/ru/news/rezultaty-transformatsii-transportno-peshekhodnoy-infrastruktury-almaty-budut-zametny-k-kontsu-goda-akimat' },
      { kind: 'article', outlet: 'CMN.kz', title: 'Commentary on the design of public transport stops in Almaty', titleRu: 'Аналитический комментарий о проектировании остановок общественного транспорта', url: 'https://cmn.kz/novye-ostanovki-v-almaty-vyzvali-shkval-vozmushhenij/' },
      { kind: 'article', outlet: 'Bes.media', title: 'Commentary on icy pavements in Astana', titleRu: 'Комментарий о гололёде на тротуарах Астаны', url: 'https://bes.media/news/perelomi-ushibi-i-vivihi-kak-ledyanie-trotuari-astani-kalechat-gorozhan/' },
    ],
  },
  {
    id: 'road-safety',
    title: 'Road safety & transport policy',
    titleRu: 'Безопасность дорожного движения и транспортная политика',
    items: [
      { kind: 'article', outlet: 'Kazinform', title: '“Road safety: Vision Zero proposed for Kazakhstan”', titleRu: '«Безопасность на дорогах: концепцию Vision Zero предлагают внедрить в РК»', url: 'https://www.inform.kz/ru/bezopasnost-na-dorogah-koncepciyu-vision-zero-predlagayut-vnedrit-v-rk_a3920716' },
      { kind: 'article', outlet: 'Exclusive.kz', title: 'Deadly streets: how Vision Zero could change Kazakhstan’s roads', titleRu: 'Смертельно опасные улицы: как Vision Zero может изменить дороги в Казахстане', url: 'https://exclusive.kz/smertelno-opasnye-ulicy-kak-vision-zero-mozhet-izmenit-dorogi-v-kazakhstane/' },
    ],
  },
  {
    id: 'play',
    title: 'Children’s play spaces — with the Ministry of Labour and UNICEF',
    titleRu: 'Игровые пространства для детей — с МТСЗН РК и UNICEF',
    items: [
      { kind: 'article', outlet: 'UNICEF Kazakhstan', title: 'UNICEF and Kazakh urbanists on what inclusive playgrounds should be like', titleRu: 'ЮНИСЕФ и казахстанские урбанисты рассказали, какими должны быть инклюзивные детские площадки', url: 'https://www.unicef.org/kazakhstan/Пресс-релизы/юнисеф-и-казахстанские-урбанисты-рассказали-какими-должны-быть-инклюзивные-детские' },
      { kind: 'article', outlet: 'Zakon.kz', title: 'Playgrounds in Kazakhstan don’t interest children over 10 — study', titleRu: 'Детские площадки в Казахстане неинтересны ребёнку старше 10 лет — исследование', url: 'https://www.zakon.kz/sobytiia/6007989-detskie-ploshchadki-v-kazakhstane-ne-interesny-rebenku-starshe-10-let-issledovanie.html' },
      { kind: 'article', outlet: 'Kazinform', title: '“Urbanists: a comfortable city for all”', titleRu: '«Урбанисты: комфортный город для всех»', url: 'https://www.inform.kz/ru/urbanisty-komfortnyy-gorod-dlya-vseh_a3909889' },
    ],
  },
  {
    id: 'regional',
    title: 'Regional case: Pavlodar',
    titleRu: 'Региональный кейс: Павлодар',
    items: [
      { kind: 'article', outlet: 'Pavon.kz', title: 'On the Pavlodar development concept', titleRu: 'О концепции развития Павлодара', url: 'https://pavon.kz/post/view/72064' },
      { kind: 'article', outlet: 'Pavon.kz', title: 'Pavlodar urban development', titleRu: 'Развитие Павлодара', url: 'https://pavon.kz/post/view/72057' },
    ],
  },
  {
    id: 'video',
    title: 'Video interviews',
    titleRu: 'Видеоинтервью',
    items: [
      { kind: 'video', outlet: 'KTK', year: '2022', title: 'Interview on the development of Konaev and Alatau', titleRu: 'Интервью о развитии городов Конаев и Алатау', url: 'https://www.ktk.kz/ru/news/video/2022/03/19/206931/' },
      { kind: 'video', outlet: 'YouTube', title: 'Interview on the development of Pavlodar', titleRu: 'Интервью о развитии Павлодара', url: 'https://www.youtube.com/watch?v=l-qercBzrJM' },
      { kind: 'video', outlet: 'YouTube', title: 'Interview on urban development', titleRu: 'Интервью о городском развитии', url: 'https://www.youtube.com/watch?v=rtEunkiEq_Q' },
      { kind: 'video', outlet: 'YouTube', title: 'Commentary on dense development and the urban environment', titleRu: 'Комментарии о плотной застройке и городской среде', url: 'https://www.youtube.com/watch?v=zI-80YhTN8o' },
    ],
  },
  {
    id: 'talks',
    title: 'Conferences & talks',
    titleRu: 'Конференции и выступления',
    items: [
      { kind: 'talk', outlet: 'Academy of Urbanism (UK)', title: 'Dissertation presentation at an Academy of Urbanism webinar', titleRu: 'Презентация диссертационного исследования на вебинаре Академии урбанизма (Великобритания)', url: 'https://www.theaou.org/events/december-coffee-break' },
      { kind: 'talk', outlet: 'Town Planning Review · Leeds', year: '2024', title: 'Dissertation findings at a practice–academic conference in Leeds', titleRu: 'Результаты диссертации на практико-академической конференции, Лидс', url: 'https://www.liverpooluniversitypress.co.uk/doi/full/10.3828/tpr.2024.49' },
      { kind: 'talk', outlet: 'UN Tourism · Almaty', year: '2025', title: 'Regional conference “Women in Tourism”', titleRu: 'Региональная конференция Women in Tourism (UN Tourism), Алматы, октябрь 2025', url: 'https://daz.asia/blog/frauen-im-mittelpunkt-des-wandels-un-tourism-veranstaltet-regionalkonferenz-zur-staerkung-von-frauen-im-tourismus/' },
      { kind: 'talk', outlet: 'ISSAI · Nazarbayev University', year: '2025', title: 'AI and circular construction conference', titleRu: 'Конференция ISSAI по ИИ и циркулярному строительству, Назарбаев Университет', url: 'https://issai.nu.edu.kz/2025/11/28/issai-hosts-ai-circular-construction-conference-at-nazarbayev-university/' },
      { kind: 'talk', outlet: 'British Council', title: '“MyAlmaty visiting Nur-Sultan” — integrated transport development in Almaty (programme, PDF)', titleRu: '«MyAlmaty в гостях в Нур-Султане» — подходы к комплексному развитию транспорта Алматы (программа, PDF)', url: 'https://kazakhstan.britishcouncil.org/sites/default/files/programma_konferencii_myalmaty_v_gostyah_v_nur-sultane_rus_1.pdf' },
      { kind: 'talk', outlet: 'British Council', title: '“MyAlmaty visiting Shymkent” — conference programme (PDF)', titleRu: '«MyAlmaty в гостях в Шымкенте» — программа конференции (PDF)', url: 'https://kazakhstan.britishcouncil.org/sites/default/files/rus_for_website_and_print_programma_konferencii_myalmaty_v_gostyah_v_shymkente_rus.pdf' },
      { kind: 'talk', outlet: 'Aktobe Law Institute', year: '2022', title: 'International conference on road traffic law enforcement, Aktobe', titleRu: 'Международная научно-практическая конференция «Актуальные вопросы правоприменительной практики в области дорожного движения», Актобе, 29 апреля 2022', url: 'https://www.instagram.com/p/CdGNhOcssIc/?img_index=2' },
      { kind: 'social', outlet: 'Q88 · Telegram', title: 'Q88 channel post', titleRu: 'Публикация в канале Q88', url: 'https://kaz.tgstat.com/channel/@Association_q88/3142' },
    ],
  },
  {
    id: 'awards',
    title: 'Awards & nominations',
    titleRu: 'Награды и номинации',
    items: [
      { kind: 'award', outlet: 'UCL Bartlett', year: '2025', title: 'Inaugural Pumarino Prize for the best MPlan/MRes dissertation 2023/24', titleRu: 'Премия Pumarino за лучшую диссертацию по городскому планированию (UCL Bartlett)', url: 'https://www.ucl.ac.uk/bartlett/news/2025/jun/award-inaugural-pumarino-prize-best-mplanmres-dissertation-2023-24' },
      { kind: 'award', outlet: 'X · @UCL_BSP', title: 'The Bartlett School of Planning announcement', titleRu: 'Объявление Бартлеттской школы планирования', url: 'https://x.com/UCL_BSP/status/1942965006821191981' },
      { kind: 'award', outlet: 'RTPI', title: 'RTPI Awards for Research Excellence — Student Dissertation Award shortlist', titleRu: 'Номинация RTPI Awards for Research Excellence, категория Student Dissertation Award', url: 'https://www.rtpi.org.uk/events-training-and-awards/awards/rtpi-awards-for-research-excellence/adiya-karsybek-ucl/' },
    ],
  },
];
