/* =====================================================================
   SITE — identity, biography, education, recognition and contact.
   Text in [square brackets] renders as a visible placeholder.
   Set a contact value to null to show its placeholder instead.
   ===================================================================== */

export const site = {
  name: 'Adiya Karsybek',
  role: ['Urban Strategist', 'Planning & Development Consultant'],
  // Proposed positioning statement — not yet approved.
  tagline: 'Shaping cities through strategy, research, and collaboration.',
  intro:
    'I work at the intersection of urban planning, climate resilience, research, and strategic development, helping shape more inclusive and resilient cities.',
  base: 'Astana, Kazakhstan',
  coordinates: '51.1694° N  71.4491° E',
};

export const contact = {
  email: null, // e.g. 'name@domain.com'
  linkedin: null, // e.g. 'https://www.linkedin.com/in/…'
  location: 'Astana, Kazakhstan',
  cvUrl: null, // path to a PDF placed in /public, e.g. 'cv-adiya-karsybek.pdf'
};

export const bio = {
  lead:
    'Adiya Karsybek is a Kazakhstan-based urban planning and development professional working across urban strategy, research, policy, climate resilience, and collaborative initiatives.',
  paragraphs: [
    'My practice started on the city side. In Almaty I worked on the city’s public space guidelines alongside Gehl Architects and, at the Almaty Development Centre, managed WeAlmaty, a three-year programme that brought the Akimat, the British Council, a university and citizens to the same table.',
    'In Turkistan and then Astana I moved between design and policy: a co-designed pocket park, a national guide to inclusive play spaces for UNICEF, a Vision Zero road safety plan and concept plans for Pavlodar and Atyrau.',
    'A master’s at UCL’s Bartlett School of Planning, and an internship at Dar in London, added strategic plan-making, international benchmarking and research on gender and planning leadership. Since returning to Kazakhstan I have worked with UNDP Kazakhstan and BI Group, and lead initiatives including Ayel&Qala and YULA Creative City Lab.',
  ],
};

// A trajectory read like a transect: place, years, what happened there.
export const trajectory = [
  { place: 'Almaty', years: '2016–2020', note: 'Urbanist — public space guidelines with Gehl Architects; WeAlmaty programme management at the Almaty Development Centre' },
  { place: 'Turkistan', years: '2020', note: 'Urban planner and designer — Ush Tut pocket park, co-designed with residents' },
  { place: 'Astana', years: '2021–2022', note: 'Urban planner — UNICEF inclusive play spaces, Vision Zero Pavlodar, Q88 concept plans' },
  { place: 'London', years: '2022–2024', note: 'UCL, The Bartlett — MSc / MPlan City Planning; internship at Dar' },
  { place: 'Kazakhstan', years: '2025–', note: 'UNDP Kazakhstan, BI Group, Ayel&Qala, YULA Creative City Lab' },
];

export const education = [
  { title: 'MSc / MPlan City Planning, with Distinction', place: 'University College London, The Bartlett', year: '2024', note: '[Confirm exact degree title]' },
  { title: 'Bachelor of Architecture', place: 'Satbayev University', year: '2016' },
];

export const recognition = [
  { title: 'Pumarino-Orbeta Prize', year: '2025', note: '[Add awarding body and what it recognised]' },
  { title: '[RTPI academic recognition / shortlist — exact wording to be confirmed]', year: '2025' },
];

export const speaking = [
  { title: 'Opening address, WeAlmaty citizen workshop', place: 'Almaty', year: '2018' },
  { title: '[Publication or talk to be added]', place: '', year: '' },
  { title: '[Publication or talk to be added]', place: '', year: '' },
];
