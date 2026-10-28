/* Project covers — art direction V2.

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
  en: {
    river: 'RIVER', floodplain: 'FLOODPLAIN', risk: 'RISK ZONE', akimat: 'AKIMAT', bc: 'BRITISH COUNCIL', kbtu: 'KBTU',
    adc: 'DEVELOPMENT CENTRE', eu: 'EU GRANT', citizens: 'CITIZENS', entrance: 'ENTRANCE',
    courtyard: 'COURTYARD', corridor: 'GREEN CORRIDOR', standard: 'STANDARD MODULE',
    embankment: 'EMBANKMENT', streets: 'CENTRAL STREETS', publicSpace: 'PUBLIC SPACE',
    sidewalk: 'SIDEWALK', brt: 'BRT LANE', trees: 'TREES', car: 'TRAFFIC',
    community: 'COMMUNITY', network: 'NETWORK', leadership: 'LEADERSHIP',
    interviews: 'INTERVIEWS', representation: 'REPRESENTATION', leading: 'LEADERSHIP', decisions: 'DECISION-MAKING',
  },
  ru: {
    river: 'РЕКА', floodplain: 'ПОЙМА', risk: 'ЗОНА РИСКА', akimat: 'АКИМАТ', bc: 'БРИТАНСКИЙ СОВЕТ', kbtu: 'КБТУ',
    adc: 'ЦЕНТР РАЗВИТИЯ', eu: 'ГРАНТ ЕС', citizens: 'ЖИТЕЛИ', entrance: 'ВХОД',
    courtyard: 'ДВОР', corridor: 'ЗЕЛЁНЫЙ КОРИДОР', standard: 'ТИПОВОЙ МОДУЛЬ',
    embankment: 'НАБЕРЕЖНАЯ', streets: 'ЦЕНТРАЛЬНЫЕ УЛИЦЫ', publicSpace: 'ОБЩЕСТВЕННОЕ ПРОСТРАНСТВО',
    sidewalk: 'ТРОТУАР', brt: 'BRT', trees: 'ДЕРЕВЬЯ', car: 'ПРОЕЗЖАЯ ЧАСТЬ',
    community: 'СООБЩЕСТВО', network: 'СЕТЬ', leadership: 'ЛИДЕРСТВО',
    interviews: 'ИНТЕРВЬЮ', representation: 'ПРЕДСТАВЛЕННОСТЬ', leading: 'ЛИДЕРСТВО', decisions: 'ПРИНЯТИЕ РЕШЕНИЙ',
  },
};

/* double line that reads as a path or corridor; draw edges, then surface */
function Pathway({ ds, width = 6, opacity = 0.5 }) {
  return (
    <>
      <g opacity={opacity}>
        {ds.map((d, i) => <path key={i} d={d} fill="none" stroke={INK} strokeWidth={width + 1.5} strokeLinecap="round" />)}
      </g>
      {ds.map((d, i) => <path key={`s${i}`} d={d} fill="none" stroke={PAPER} strokeWidth={width} strokeLinecap="round" />)}
    </>
  );
}

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

/* 02 — BI Group: landscape master-plan module.
   Six residential blocks with courtyards, linked by one green corridor;
   one courtyard is the standard module, outlined in pink. */
function Landscape({ id, L }) {
  const mods = [];
  for (let c = 0; c < 2; c++)
    for (let r = 0; r < 3; r++) mods.push([112 + c * 104, 44 + r * 74, c === 1 && r === 1]);
  const trees = [[200, 70], [200, 104], [200, 150], [200, 196], [200, 232]];
  return (
    <>
      <defs>
        <pattern id={`${id}-dots`} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.7" fill={INK} opacity="0.35" />
        </pattern>
      </defs>
      {mods.map(([x, y, hit], i) => (
        <g key={i}>
          <rect x={x} y={y} width="72" height="58" fill="none" stroke={INK} strokeWidth="0.8" opacity="0.6" />
          <rect x={x + 12} y={y + 11} width="48" height="36" fill={`url(#${id}-dots)`} stroke={hit ? PINK : INK} strokeWidth={hit ? 1.3 : 0.5} opacity={hit ? 1 : 0.6} />
        </g>
      ))}
      <Pathway ds={['M200 30 L200 270']} width={6} opacity={0.4} />
      {trees.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="none" stroke={INK} strokeWidth="0.6" opacity="0.55" />)}
      <Label x={112} y={36}>{L.courtyard}</Label>
      <Label x={206} y={282}>{L.corridor}</Label>
      <Label x={216} y={186} fill={PINK} opacity={1}>{L.standard}</Label>
    </>
  );
}

/* 05 — Q88: urban strategy diagram.
   Sparse blocks, a river embankment, two strategic corridors and three
   pink intervention points where they meet the public realm. */
function Strategy({ L }) {
  const blocks = [
    [70, 40, 50, 34], [130, 40, 60, 34], [200, 40, 44, 34], [254, 40, 60, 34],
    [70, 84, 50, 40], [254, 84, 60, 40], [130, 134, 60, 36], [254, 134, 44, 36],
    [70, 180, 50, 30], [200, 180, 44, 30],
  ];
  return (
    <>
      {blocks.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth="0.6" opacity="0.45" />
      ))}
      {/* embankment */}
      <path d="M30 238 C 120 226, 220 248, 370 224" fill="none" stroke={INK} strokeWidth="0.9" opacity="0.75" />
      <path d="M30 250 C 120 238, 220 260, 370 236" fill="none" stroke={INK} strokeWidth="0.6" strokeDasharray="2 4" opacity="0.5" />
      {/* strategic corridors */}
      <line x1="196" y1="28" x2="196" y2="236" stroke={INK} strokeWidth="1.3" strokeDasharray="7 4" opacity="0.8" />
      <line x1="40" y1="128" x2="360" y2="128" stroke={INK} strokeWidth="1.3" strokeDasharray="7 4" opacity="0.8" />
      {/* interventions */}
      {[[196, 128], [196, 234], [312, 230]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill="none" stroke={PINK} strokeWidth="1.2" />
          <circle cx={x} cy={y} r="3" fill={PINK} />
        </g>
      ))}
      <Label x={40} y={268}>{L.embankment}</Label>
      <Label x={40} y={122}>{L.streets}</Label>
      <Label x={210} y={122} fill={PINK} opacity={1}>{L.publicSpace}</Label>
    </>
  );
}

/* 06 — Gehl × Almaty: one street section.
   Building edges, sidewalks, trees and traffic lanes in thin line; the
   pink intervention is the dedicated BRT lane. */
function Street({ id, L }) {
  const g = 220; // ground line
  return (
    <>
      <defs>
        <pattern id={`${id}-brt`} width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke={PINK} strokeWidth="0.9" />
        </pattern>
      </defs>
      {/* buildings */}
      {[[40, 60], [328, 80]].map(([x, top], i) => (
        <g key={i} opacity="0.6">
          <rect x={x} y={top} width="32" height={g - top} fill="none" stroke={INK} strokeWidth="0.8" />
          {Array.from({ length: Math.floor((g - top) / 26) }, (_, k) => (
            <line key={k} x1={x} y1={g - (k + 1) * 26} x2={x + 32} y2={g - (k + 1) * 26} stroke={INK} strokeWidth="0.4" />
          ))}
        </g>
      ))}
      <line x1="20" y1={g} x2="380" y2={g} stroke={INK} strokeWidth="1" />
      {/* sidewalks raised */}
      <path d={`M72 ${g} L72 ${g - 5} L120 ${g - 5} L120 ${g}`} fill="none" stroke={INK} strokeWidth="0.7" opacity="0.7" />
      <path d={`M280 ${g} L280 ${g - 5} L328 ${g - 5} L328 ${g}`} fill="none" stroke={INK} strokeWidth="0.7" opacity="0.7" />
      {/* trees */}
      {[100, 300].map((x) => (
        <g key={x} opacity="0.6">
          <line x1={x} y1={g - 5} x2={x} y2={g - 40} stroke={INK} strokeWidth="0.7" />
          <circle cx={x} cy={g - 56} r="18" fill="none" stroke={INK} strokeWidth="0.7" />
        </g>
      ))}
      {/* lanes */}
      {[146, 172, 228, 254].map((x) => (
        <line key={x} x1={x} y1={g + 4} x2={x} y2={g + 26} stroke={INK} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
      ))}
      <rect x="176" y={g - 3} width="48" height="3" fill={`url(#${id}-brt)`} stroke={PINK} strokeWidth="0.8" />
      <rect x="176" y={g + 4} width="48" height="22" fill={`url(#${id}-brt)`} stroke={PINK} strokeWidth="1" />
      {/* people */}
      {[86, 110, 292, 316].map((x, i) => (
        <g key={i} opacity="0.65">
          <circle cx={x} cy={g - 21} r="2" fill={INK} />
          <line x1={x} y1={g - 19} x2={x} y2={g - 7} stroke={INK} strokeWidth="1" />
        </g>
      ))}
      {/* dimension line */}
      <g opacity="0.5">
        <line x1="72" y1="40" x2="328" y2="40" stroke={INK} strokeWidth="0.5" />
        <line x1="72" y1="36" x2="72" y2="44" stroke={INK} strokeWidth="0.5" />
        <line x1="328" y1="36" x2="328" y2="44" stroke={INK} strokeWidth="0.5" />
      </g>
      <Label x={76} y={g + 18}>{L.sidewalk}</Label>
      <Label x={200} y={g + 40} anchor="middle" fill={PINK} opacity={1}>{L.brt}</Label>
      <Label x={120} y={g - 80}>{L.trees}</Label>
      <Label x={240} y={g + 40}>{L.car}</Label>
    </>
  );
}

/* 07 — Ayel&Qala: participation and women's leadership.
   Three rings — community, network, leadership — with members as points;
   pink points are women stepping into leadership, linked outward as mentors. */
function Rings({ L }) {
  const c = [200, 150];
  const ring = (r, n, phase = 0) => Array.from({ length: n }, (_, i) => {
    const a = phase + (i / n) * Math.PI * 2;
    return [c[0] + Math.cos(a) * r * 1.35, c[1] + Math.sin(a) * r];
  });
  const outer = ring(104, 26, 0.1);
  const mid = ring(64, 14, 0.4);
  const inner = ring(26, 5, 0.9);
  return (
    <>
      {[104, 64, 26].map((r, i) => (
        <ellipse key={r} cx={c[0]} cy={c[1]} rx={r * 1.35} ry={r} fill="none" stroke={INK} strokeWidth={i === 2 ? 0.9 : 0.6} strokeDasharray={i === 0 ? '2 4' : 'none'} opacity={0.45 + i * 0.15} />
      ))}
      {[0, 2, 4].map((k) => (
        <line key={k} x1={inner[k][0]} y1={inner[k][1]} x2={mid[k * 3][0]} y2={mid[k * 3][1]} stroke={INK} strokeWidth="0.5" opacity="0.45" />
      ))}
      {outer.map(([x, y], i) => <circle key={`o${i}`} cx={x} cy={y} r="1.6" fill={INK} opacity="0.45" />)}
      {mid.map(([x, y], i) => <circle key={`m${i}`} cx={x} cy={y} r="2.2" fill={INK} opacity="0.6" />)}
      {inner.map(([x, y], i) => <circle key={`i${i}`} cx={x} cy={y} r="3.6" fill={PINK} />)}
      <Label x={c[0] + 104 * 1.35 - 4} y={c[1] - 92} anchor="end">{L.community}</Label>
      <Label x={c[0] + 64 * 1.35 + 6} y={c[1] - 40}>{L.network}</Label>
      <Label x={c[0]} y={c[1] + 44} anchor="middle" fill={PINK} opacity={1}>{L.leadership}</Label>
    </>
  );
}

/* 08 — UCL research: from interviews to themes.
   Transcript lines with a few coded passages in pink, routed to three
   themes of the dissertation. A method diagram, not results. */
function Research({ L }) {
  const lines = [70, 58, 76, 64, 72, 50, 68, 74, 60];
  const coded = { 1: [30, 22], 4: [12, 30], 7: [40, 20] };
  const themes = [[120, L.representation], [200, L.leading], [280, L.decisions]];
  return (
    <>
      <Label x={120} y={40}>{L.interviews}</Label>
      {lines.map((w, i) => {
        const y = 52 + i * 11;
        return (
          <g key={i}>
            <line x1="120" y1={y} x2={120 + w * 2.2} y2={y} stroke={INK} strokeWidth="1.6" opacity="0.28" />
            {coded[i] && <line x1={120 + coded[i][0] * 2} y1={y} x2={120 + (coded[i][0] + coded[i][1]) * 2} y2={y} stroke={PINK} strokeWidth="2.2" />}
          </g>
        );
      })}
      {Object.entries(coded).map(([i, [x0, w]], k) => {
        const sx = 120 + (x0 + w / 2) * 2, sy = 52 + Number(i) * 11 + 3;
        const [tx] = themes[[1, 0, 2][k]]; // route each passage to the nearest theme so lines don't cross
        return <path key={i} d={`M${sx} ${sy} C ${sx} ${sy + 50}, ${tx} 180, ${tx} 206`} fill="none" stroke={INK} strokeWidth="0.6" opacity="0.5" />;
      })}
      {themes.map(([x, label], i) => (
        <g key={i}>
          <circle cx={x} cy="214" r="8" fill={PAPER} stroke={INK} strokeWidth="0.9" />
          <circle cx={x} cy="214" r="2.4" fill={INK} />
          <Label x={x} y={238 + (i % 2) * 12} anchor="middle">{label}</Label>
        </g>
      ))}
    </>
  );
}

/* ---- Archive covers: the same language, reduced to two or three elements ---- */
function Crossing() {
  return (
    <>
      <Pathway ds={['M60 150 L340 150', 'M200 40 L200 260']} width={44} opacity={0.35} />
      {Array.from({ length: 6 }, (_, i) => <line key={i} x1={182 + i * 7} y1="118" x2={182 + i * 7} y2="126" stroke={PINK} strokeWidth="2" />)}
      {Array.from({ length: 6 }, (_, i) => <line key={`b${i}`} x1={182 + i * 7} y1="174" x2={182 + i * 7} y2="182" stroke={INK} strokeWidth="2" opacity="0.4" />)}
    </>
  );
}
function Trees() {
  return (
    <>
      {[[150, 140, 44], [240, 118, 34], [262, 196, 38]].map(([x, y, r], i) => (
        <g key={i} opacity="0.65">
          <circle cx={x} cy={y} r={r} fill="none" stroke={INK} strokeWidth="0.8" />
          <circle cx={x} cy={y} r={r * 0.55} fill="none" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" />
        </g>
      ))}
      <circle cx="240" cy="118" r="5" fill={PINK} />
      <line x1="110" y1="250" x2="300" y2="250" stroke={INK} strokeWidth="0.8" opacity="0.5" />
    </>
  );
}
function Homes() {
  return (
    <>
      <rect x="120" y="50" width="160" height="200" fill="none" stroke={INK} strokeWidth="1" opacity="0.7" />
      {Array.from({ length: 4 }, (_, f) => <line key={f} x1="120" y1={90 + f * 40} x2="280" y2={90 + f * 40} stroke={INK} strokeWidth="0.5" opacity="0.5" />)}
      {[160, 200, 240].map((x) => <line key={x} x1={x} y1="50" x2={x} y2="250" stroke={INK} strokeWidth="0.5" opacity="0.35" />)}
      <rect x="200" y="130" width="40" height="40" fill="none" stroke={PINK} strokeWidth="1.3" />
    </>
  );
}
function Contours() {
  return (
    <>
      {[30, 54, 80, 108].map((r, i) => (
        <ellipse key={r} cx="200" cy="150" rx={r * 1.4} ry={r} fill="none" stroke={i === 1 ? PINK : INK} strokeWidth={i === 1 ? 1.2 : 0.6} opacity={i === 1 ? 1 : 0.5} transform={`rotate(${-8 + i * 4} 200 150)`} />
      ))}
    </>
  );
}
function Blocks() {
  const b = [[110, 70, 60, 50], [180, 70, 50, 50], [240, 70, 50, 70], [110, 130, 60, 60], [180, 130, 50, 40], [180, 180, 110, 40]];
  return (
    <>
      {b.map(([x, y, w, h], i) => <rect key={i} x={x} y={y} width={w} height={h} fill="none" stroke={i === 4 ? PINK : INK} strokeWidth={i === 4 ? 1.3 : 0.7} opacity={i === 4 ? 1 : 0.55} />)}
    </>
  );
}
function Leaves() {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M60 ${110 + i * 22} C 140 ${96 + i * 22}, 240 ${128 + i * 22}, 340 ${108 + i * 22}`} fill="none" stroke={i === 2 ? PINK : INK} strokeWidth={i === 2 ? 1.3 : 0.6} opacity={i === 2 ? 1 : 0.5} />
      ))}
    </>
  );
}
function Stadium() {
  return (
    <>
      <ellipse cx="200" cy="150" rx="90" ry="58" fill="none" stroke={INK} strokeWidth="0.9" opacity="0.7" />
      <ellipse cx="200" cy="150" rx="56" ry="34" fill="none" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.6" />
      <line x1="120" y1="252" x2="182" y2="206" stroke={PINK} strokeWidth="1.4" />
    </>
  );
}
function RiverEdge() {
  return (
    <>
      {[[110, 70, 50, 60], [170, 70, 60, 60], [240, 70, 50, 60], [110, 140, 80, 40], [200, 140, 90, 40]].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth="0.7" opacity="0.55" />
      ))}
      <line x1="60" y1="204" x2="340" y2="204" stroke={INK} strokeWidth="1" opacity="0.7" />
      <path d="M60 226 C 140 218, 240 236, 340 222" fill="none" stroke={PINK} strokeWidth="1.3" />
    </>
  );
}
function Transit() {
  const st = [[100, 210], [160, 170], [220, 160], [290, 110]];
  return (
    <>
      {st.map(([x, y], i) => <circle key={`r${i}`} cx={x} cy={y} r="34" fill="none" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5" />)}
      <path d={'M' + st.map(([x, y]) => `${x},${y}`).join(' L')} fill="none" stroke={INK} strokeWidth="1" opacity="0.75" />
      {st.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill={i === 2 ? PINK : PAPER} stroke={i === 2 ? PINK : INK} strokeWidth="1" />)}
    </>
  );
}

const MOTIFS = {
  flood: Flood, landscape: Landscape, play: Play, network: Network, twin: Strategy, streets: Street, women: Rings, research: Research,
  crossing: Crossing, trees: Trees, homes: Homes, contours: Contours, blocks: Blocks, leaves: Leaves, stadium: Stadium, river: RiverEdge, transit: Transit,
};

export function ProjectArtV2({ project, lang = 'en', className = '' }) {
  const Motif = MOTIFS[project.art] || Blocks;
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
