/* Project covers — art direction V2 (study, not yet used on the site).

   Conceptual diagrams for an architecture / urban-research publication:
   mostly ivory paper, fine ink linework (0.5–1.2 units), grey for context,
   and the site pink only where the project's point is.
   Drawn on a 400 × 300 board; every composition keeps its subject inside
   x 90–310 / y 30–270 so it reads in both 16:10 and 4:5 card crops.
   These are concepts, not maps or data: no real geometry or statistics. */

const INK = 'rgb(var(--ink))';
const PINK = 'rgb(var(--accent))';
const PAPER = 'rgb(var(--sheet))';
const MONO = 'var(--font-mono)';

const Label = ({ x, y, children, anchor = 'start', fill = INK, opacity = 0.55 }) => (
  <text x={x} y={y} textAnchor={anchor} fontFamily={MONO} fontSize="7" letterSpacing="0.6" fill={fill} opacity={opacity}>
    {children}
  </text>
);

const LABELS = {
  en: { river: 'RIVER', floodplain: 'FLOODPLAIN', risk: 'RISK ZONE', boundary: 'URBAN BOUNDARY', akimat: 'AKIMAT', bc: 'BRITISH COUNCIL', kbtu: 'KBTU', adc: 'DEVELOPMENT CENTRE', eu: 'EU GRANT', citizens: 'CITIZENS', entrance: 'ENTRANCE' },
  ru: { river: 'РЕКА', floodplain: 'ПОЙМА', risk: 'ЗОНА РИСКА', boundary: 'ГРАНИЦА ГОРОДА', akimat: 'АКИМАТ', bc: 'БРИТАНСКИЙ СОВЕТ', kbtu: 'КБТУ', adc: 'ЦЕНТР РАЗВИТИЯ', eu: 'ГРАНТ ЕС', citizens: 'ЖИТЕЛИ', entrance: 'ВХОД' },
};

/* 01 — UNDP / Petropavlovsk: flood-risk cartography.
   River banks, two floodplain lines, a dashed urban edge with a few blocks,
   and two small hatched risk zones where the city meets the floodplain. */
function Flood({ id, L }) {
  const river = 'M-10 236 C 70 240, 120 206, 200 218 S 330 240, 410 200';
  const blocks = [
    [118, 62, 34, 22], [160, 62, 46, 22], [214, 62, 30, 22], [252, 70, 40, 22],
    [124, 94, 28, 26], [160, 94, 38, 26], [206, 98, 44, 20], [258, 102, 30, 26],
    [138, 128, 40, 18], [186, 126, 34, 20],
  ];
  return (
    <>
      <defs>
        <pattern id={`${id}-hatch`} width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke={PINK} strokeWidth="0.9" />
        </pattern>
      </defs>
      {/* floodplain */}
      <path d={river} transform="translate(0 -30)" fill="none" stroke={INK} strokeWidth="0.6" strokeDasharray="2 4" opacity="0.45" />
      <path d={river} transform="translate(0 -52)" fill="none" stroke={INK} strokeWidth="0.6" strokeDasharray="2 4" opacity="0.3" />
      <path d={river} transform="translate(0 26)" fill="none" stroke={INK} strokeWidth="0.6" strokeDasharray="2 4" opacity="0.45" />
      {/* river banks */}
      <path d={river} transform="translate(0 -6)" fill="none" stroke={INK} strokeWidth="0.9" opacity="0.8" />
      <path d={river} transform="translate(0 6)" fill="none" stroke={INK} strokeWidth="0.9" opacity="0.8" />
      {/* urban edge and blocks */}
      <path d="M104 46 L304 46 L318 150 L262 176 L196 168 L112 158 Z" fill="none" stroke={INK} strokeWidth="0.8" strokeDasharray="6 4" opacity="0.6" />
      {blocks.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth="0.6" opacity="0.5" />
      ))}
      {/* risk zones */}
      <path d="M196 168 L262 176 L272 186 L210 190 Z" fill={`url(#${id}-hatch)`} stroke={PINK} strokeWidth="1" />
      <path d="M112 158 L150 162 L146 176 L116 172 Z" fill={`url(#${id}-hatch)`} stroke={PINK} strokeWidth="1" />
      {/* legend */}
      <g transform="translate(22 252)">
        <line x1="0" y1="-2" x2="14" y2="-2" stroke={INK} strokeWidth="0.9" opacity="0.8" />
        <Label x={20} y={0}>{L.river}</Label>
        <line x1="70" y1="-2" x2="84" y2="-2" stroke={INK} strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
        <Label x={90} y={0}>{L.floodplain}</Label>
        <rect x="158" y="-6" width="10" height="7" fill={`url(#${id}-hatch)`} stroke={PINK} strokeWidth="0.8" />
        <Label x={174} y={0}>{L.risk}</Label>
      </g>
      {/* north */}
      <g transform="translate(372 40)" opacity="0.6">
        <line x1="0" y1="10" x2="0" y2="-10" stroke={INK} strokeWidth="0.8" />
        <path d="M0 -12 L3 -5 L-3 -5 Z" fill={INK} />
        <Label x={0} y={22} anchor="middle">N</Label>
      </g>
    </>
  );
}

/* 03 — UNICEF: inclusive play environments.
   One step-free spine from the entrance into the main play space, with
   short branches to three smaller spaces — a clear hierarchy, no steps.
   Pink marks the entrance and the accessible centre of the main space. */
function Play({ L }) {
  const main = [200, 128, 44];
  const spaces = [
    [124, 206, 22],
    [278, 204, 26],
    [132, 66, 16],
  ];
  const routes = [
    'M200 286 L200 172', // spine: entrance → main space
    'M200 244 C 176 244, 158 236, 144 222', // branch → left space
    'M200 232 C 224 232, 242 226, 256 216', // branch → right space
    'M164 104 C 156 96, 148 88, 144 78', // main space → small space
  ];
  return (
    <>
      {/* edges first, then the path surface, so junctions merge cleanly */}
      <g opacity="0.5">
        {routes.map((d, i) => <path key={i} d={d} fill="none" stroke={INK} strokeWidth="7.5" strokeLinecap="round" />)}
      </g>
      {routes.map((d, i) => <path key={i} d={d} fill="none" stroke={PAPER} strokeWidth="6" strokeLinecap="round" />)}
      {spaces.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={PAPER} stroke={INK} strokeWidth="0.8" opacity="0.7" />
      ))}
      <circle cx={main[0]} cy={main[1]} r={main[2]} fill={PAPER} stroke={INK} strokeWidth="1.1" />
      <circle cx={main[0]} cy={main[1]} r={main[2] - 8} fill="none" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5" />
      <circle cx={main[0]} cy={main[1]} r="7" fill={PINK} />
      <path d="M193 294 L207 294 L200 282 Z" fill={PINK} />
      <Label x={212} y={292}>{L.entrance}</Label>
    </>
  );
}

/* 04 — WeAlmaty: stakeholder network.
   Four institutions (squares), the EU grant (dashed), and citizens (a field
   of points) all meet at one platform — the programme, in pink. */
function Network({ L }) {
  const c = [200, 148];
  const inst = [
    { k: 'akimat', x: 96, y: 78, a: 'start', dx: -6, dy: -10 },
    { k: 'bc', x: 304, y: 78, a: 'end', dx: 6, dy: -10 },
    { k: 'adc', x: 96, y: 214, a: 'start', dx: -6, dy: 20 },
    { k: 'kbtu', x: 304, y: 214, a: 'end', dx: 6, dy: 20 },
  ];
  const citizens = [];
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    const r = 10 + (i % 3) * 7;
    citizens.push([200 + Math.cos(a) * r * 1.5, 254 + Math.sin(a) * r * 0.6]);
  }
  return (
    <>
      {inst.map((n) => (
        <line key={`l-${n.k}`} x1={c[0]} y1={c[1]} x2={n.x} y2={n.y} stroke={INK} strokeWidth="0.7" opacity="0.5" />
      ))}
      <line x1={c[0]} y1={c[1]} x2="200" y2="52" stroke={INK} strokeWidth="0.7" strokeDasharray="3 3" opacity="0.5" />
      <line x1={c[0]} y1={c[1]} x2="200" y2="238" stroke={INK} strokeWidth="0.7" opacity="0.5" />
      {/* peer links between institutions, very faint */}
      <path d="M96 78 L304 78 L304 214 L96 214 Z" fill="none" stroke={INK} strokeWidth="0.5" strokeDasharray="1 4" opacity="0.35" />
      {inst.map((n) => (
        <g key={n.k}>
          <rect x={n.x - 4} y={n.y - 4} width="8" height="8" fill={PAPER} stroke={INK} strokeWidth="0.9" />
          <Label x={n.x + n.dx * (n.a === 'start' ? 0 : 0)} y={n.y + n.dy} anchor={n.a === 'start' ? 'start' : 'end'}>{L[n.k]}</Label>
        </g>
      ))}
      <rect x="196" y="44" width="8" height="8" fill={PAPER} stroke={INK} strokeWidth="0.8" strokeDasharray="2 1.5" />
      <Label x={210} y={51}>{L.eu}</Label>
      {citizens.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.4" fill={INK} opacity="0.55" />
      ))}
      <Label x={244} y={258}>{L.citizens}</Label>
      <circle cx={c[0]} cy={c[1]} r="14" fill={PAPER} stroke={PINK} strokeWidth="1.4" />
      <circle cx={c[0]} cy={c[1]} r="5" fill={PINK} />
    </>
  );
}

const MOTIFS = { flood: Flood, play: Play, network: Network };

export function ProjectArtV2({ project, lang = 'en', className = '' }) {
  const Motif = MOTIFS[project.art];
  if (!Motif) return null;
  return (
    <div className={`overflow-hidden bg-sheet ${className || 'relative'}`}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label={project.title}>
        <rect width="400" height="300" fill={PAPER} />
        {/* drawing-board grid, barely visible: ties the series together */}
        <g stroke={INK} strokeWidth="0.4" opacity="0.07">
          {Array.from({ length: 15 }, (_, i) => <line key={`v${i}`} x1={i * 28 + 4} y1="0" x2={i * 28 + 4} y2="300" />)}
          {Array.from({ length: 11 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 28 + 10} x2="400" y2={i * 28 + 10} />)}
        </g>
        <Motif id={project.slug} L={LABELS[lang] || LABELS.en} />
      </svg>
    </div>
  );
}
