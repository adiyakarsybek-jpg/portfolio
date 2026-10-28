import { useMemo } from 'react';

/* Generated project covers, drawn in the site's figure-ground language:
   ink linework on paper with one accent (the site's pink).
   Each project picks a motif in src/data/projects.js (`art`). */

const INK = 'rgb(var(--ink))';
const ACC = 'rgb(var(--accent))';
const PAPER = 'rgb(var(--paper))';

function rng(seed) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const path = (pts) => 'M' + pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L');

/* a field of rectangular blocks, skipping cells where skip(x, y) is true */
function blocks(r, { x0 = 0, y0 = 0, x1 = 400, y1 = 300, min = 22, max = 52, gap = 7, skip = () => false, fill = INK, hit = 0, accent = ACC, stroke = 'none', strokeWidth = 0 } = {}) {
  const out = [];
  for (let y = y0; y < y1; ) {
    const h = min + r() * (max - min) * 0.7;
    for (let x = x0; x < x1; ) {
      const w = min + r() * (max - min);
      if (!skip(x + w / 2, y + h / 2)) {
        const isHit = r() < hit;
        out.push(<rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill={isHit ? accent : fill} stroke={stroke} strokeWidth={strokeWidth} />);
      }
      x += w + gap;
    }
    y += h + gap;
  }
  return out;
}

const MOTIFS = {
  /* UNDP — flood plain: river, flood contours and the city above it */
  flood(r) {
    const river = (x) => 205 + Math.sin(x / 70) * 26 + x * -0.12;
    const rings = [18, 34, 52, 72].map((d, i) => (
      <path key={i} d={path(Array.from({ length: 42 }, (_, k) => [k * 10 - 5, river(k * 10 - 5) - d]))} fill="none" stroke={INK} strokeWidth="0.8" strokeDasharray={i % 2 ? '3 4' : 'none'} opacity={0.6} />
    ));
    return (
      <>
        {blocks(r, { y1: 120, skip: (x, y) => y > river(x) - 80 })}
        {rings}
        <path d={path(Array.from({ length: 42 }, (_, k) => [k * 10 - 5, river(k * 10 - 5)])) + ' L405,310 L-5,310 Z'} fill={ACC} opacity="0.18" />
        <path d={path(Array.from({ length: 42 }, (_, k) => [k * 10 - 5, river(k * 10 - 5)]))} fill="none" stroke={ACC} strokeWidth="9" />
        <circle cx="300" cy="150" r="6" fill={INK} />
        <circle cx="300" cy="150" r="16" fill="none" stroke={INK} />
      </>
    );
  },

  /* Quiet covers (02–05): thin linework, no heavy fills, one small accent. */

  /* BI Group — courtyards with trees */
  landscape(r) {
    const out = [];
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 3; j++) {
        const x = 18 + i * 96, y = 18 + j * 92, w = 84, h = 80;
        const hit = i === 2 && j === 1;
        out.push(<rect key={`b${i}${j}`} x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth="1" opacity="0.55" />);
        out.push(<rect key={`c${i}${j}`} x={x + 12} y={y + 12} width={w - 24} height={h - 24} fill={hit ? ACC : 'none'} fillOpacity={hit ? 0.18 : 0} stroke={INK} strokeWidth="0.6" opacity="0.4" />);
        for (let t = 0; t < 3; t++)
          out.push(<circle key={`t${i}${j}${t}`} cx={x + 22 + r() * (w - 44)} cy={y + 22 + r() * (h - 44)} r={3 + r() * 4} fill="none" stroke={INK} strokeWidth="0.6" opacity="0.45" />);
      }
    return <>{out}</>;
  },

  /* UNICEF — play elements around an accessible loop path */
  play(r) {
    const items = [];
    for (let i = 0; i < 12; i++) {
      const cx = 40 + r() * 320, cy = 40 + r() * 220, rad = 6 + r() * 18;
      items.push(<circle key={i} cx={cx} cy={cy} r={rad} fill="none" stroke={INK} strokeWidth="0.8" opacity="0.45" />);
    }
    return (
      <>
        <ellipse cx="200" cy="150" rx="150" ry="95" fill="none" stroke={INK} strokeWidth="1" strokeDasharray="4 5" opacity="0.6" />
        {items}
        <circle cx="200" cy="150" r="9" fill={ACC} />
      </>
    );
  },

  /* WeAlmaty — a participation network */
  network(r) {
    const nodes = Array.from({ length: 22 }, () => [30 + r() * 340, 30 + r() * 240]);
    const c = [200, 150];
    return (
      <>
        {nodes.map(([x, y], i) => (
          <line key={`l${i}`} x1={c[0]} y1={c[1]} x2={x} y2={y} stroke={INK} strokeWidth="0.5" opacity="0.3" />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={`n${i}`} cx={x} cy={y} r="2.5" fill={INK} opacity="0.6" />
        ))}
        <circle cx={c[0]} cy={c[1]} r="7" fill={ACC} />
        <circle cx={c[0]} cy={c[1]} r="18" fill="none" stroke={INK} strokeWidth="0.6" opacity="0.5" />
      </>
    );
  },

  /* Q88 — two cities side by side (Pavlodar · Atyrau), each on its river */
  twin(r) {
    const half = (ox, label, curve) => (
      <g key={label}>
        <g opacity="0.45">
          {blocks(r, { x0: ox + 10, x1: ox + 190, y0: 10, y1: 290, min: 14, max: 34, gap: 6, skip: (x, y) => Math.abs(x - ox - curve(y)) < 16, fill: 'none', stroke: INK, strokeWidth: 0.7 })}
        </g>
        <path d={path(Array.from({ length: 31 }, (_, k) => [ox + curve(k * 10), k * 10]))} fill="none" stroke={ACC} strokeWidth="2" opacity="0.85" />
        <text x={ox + 14} y="284" fontFamily="var(--font-mono)" fontSize="11" fill={INK} opacity="0.7">{label}</text>
      </g>
    );
    return (
      <>
        {half(0, 'PAVLODAR', (y) => 40 + y * 0.12 + Math.sin(y / 60) * 10)}
        <line x1="200" y1="10" x2="200" y2="290" stroke={INK} strokeWidth="0.6" opacity="0.5" />
        {half(200, 'ATYRAU', (y) => 120 + Math.sin(y / 45) * 30)}
      </>
    );
  },

  /* Gehl / Almaty — seven street cross-sections */
  streets() {
    const rows = [];
    for (let i = 0; i < 7; i++) {
      const y = 16 + i * 40;
      const lanes = 2 + (i % 4);
      rows.push(<rect key={`a${i}`} x="12" y={y} width="22" height="26" fill={INK} />);
      rows.push(<rect key={`b${i}`} x="366" y={y} width="22" height="26" fill={INK} />);
      const w = 300 / (lanes + 2);
      for (let l = 0; l < lanes + 2; l++) {
        const x = 46 + l * w;
        const side = l === 0 || l === lanes + 1;
        rows.push(<rect key={`l${i}${l}`} x={x} y={y + 4} width={w - 6} height="18" fill={side ? 'none' : i === 3 && l === 1 ? ACC : 'none'} stroke={INK} strokeWidth={side ? 0.8 : 1.2} strokeDasharray={side ? '2 3' : 'none'} />);
        if (side) rows.push(<circle key={`t${i}${l}`} cx={x + (w - 6) / 2} cy={y + 13} r="5" fill={i === 3 ? ACC : INK} />);
      }
    }
    return <>{rows}</>;
  },

  /* Ayel&Qala — a field of people, a growing cluster of women leaders */
  women(r) {
    const out = [];
    for (let y = 22; y < 290; y += 22)
      for (let x = 22; x < 390; x += 22) {
        const d = Math.hypot(x - 250, y - 140);
        const hit = d < 70 && r() > 0.25;
        out.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={hit ? 6 : 2.2} fill={hit ? ACC : INK} opacity={hit ? 1 : 0.55} />);
      }
    return (
      <>
        {out}
        <circle cx="250" cy="140" r="86" fill="none" stroke={INK} strokeWidth="1.2" />
      </>
    );
  },

  /* UCL research — interview transcript bars with highlighted findings */
  research(r) {
    const out = [];
    for (let i = 0, y = 20; y < 285; y += 13, i++) {
      const w = 60 + r() * 280;
      out.push(<rect key={i} x="24" y={y} width={w} height="5" fill={INK} opacity="0.8" />);
      if (r() > 0.78) out.push(<rect key={`h${i}`} x={24 + r() * (w - 60)} y={y - 3} width={40 + r() * 60} height="11" fill={ACC} opacity="0.85" />);
    }
    return (
      <>
        {out}
        <line x1="370" y1="16" x2="370" y2="284" stroke={INK} />
        <circle cx="370" cy="110" r="8" fill={ACC} />
      </>
    );
  },

  /* Vision Zero — an intersection with zebra crossings */
  crossing(r) {
    const z = [];
    for (let i = 0; i < 8; i++) {
      z.push(<rect key={`n${i}`} x={160 + i * 10} y="84" width="6" height="26" fill={INK} />);
      z.push(<rect key={`s${i}`} x={160 + i * 10} y="190" width="6" height="26" fill={INK} />);
      z.push(<rect key={`w${i}`} x="116" y={124 + i * 7} width="26" height="4" fill={INK} />);
      z.push(<rect key={`e${i}`} x="258" y={124 + i * 7} width="26" height="4" fill={INK} />);
    }
    return (
      <>
        {blocks(r, { skip: (x, y) => (x > 140 && x < 260) || (y > 110 && y < 190), min: 20, max: 48 })}
        {z}
        <circle cx="200" cy="150" r="30" fill="none" stroke={ACC} strokeWidth="8" />
        <line x1="0" y1="150" x2="400" y2="150" stroke={INK} strokeDasharray="8 8" />
        <line x1="200" y1="0" x2="200" y2="300" stroke={INK} strokeDasharray="8 8" />
      </>
    );
  },

  /* Ush Tut — three mulberry trees */
  trees(r) {
    const trees = [[120, 140, 60], [230, 110, 48], [270, 200, 54]];
    return (
      <>
        {trees.map(([x, y, rad], i) => (
          <g key={i}>
            {[1, 0.72, 0.45].map((k) => (
              <circle key={k} cx={x} cy={y} r={rad * k} fill="none" stroke={INK} strokeWidth="1" />
            ))}
            <circle cx={x} cy={y} r={rad * 0.2} fill={i === 1 ? ACC : INK} />
          </g>
        ))}
        <rect x="40" y="255" width="320" height="12" fill={ACC} />
        {Array.from({ length: 24 }, (_, i) => (
          <circle key={`d${i}`} cx={20 + r() * 360} cy={20 + r() * 260} r="1.6" fill={INK} opacity="0.5" />
        ))}
      </>
    );
  },

  contours(r) {
    const cx = 120 + r() * 160, cy = 110 + r() * 80;
    return (
      <>
        {Array.from({ length: 13 }, (_, i) => {
          const base = 14 + i * 17;
          const pts = Array.from({ length: 40 }, (_, k) => {
            const a = (k / 40) * Math.PI * 2;
            const rr = base * (1 + 0.16 * Math.sin(a * 3 + i * 0.4) + 0.07 * Math.sin(a * 5));
            return `${(cx + Math.cos(a) * rr * 1.25).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`;
          });
          return <polygon key={i} points={pts.join(' ')} fill={i === 2 ? ACC : 'none'} fillOpacity={i === 2 ? 0.9 : 0} stroke={INK} strokeOpacity={0.55} strokeWidth={0.8} />;
        })}
      </>
    );
  },

  blocks(r) {
    return <>{blocks(r, { hit: 0.06 })}</>;
  },

  /* Biophilic — water and planting waves */
  leaves(r) {
    return (
      <>
        {Array.from({ length: 18 }, (_, i) => (
          <path key={i} d={path(Array.from({ length: 41 }, (_, k) => [k * 10, 18 + i * 16 + Math.sin(k / 3 + i * 0.7) * 6]))} fill="none" stroke={i === 9 ? ACC : INK} strokeWidth={i === 9 ? 8 : 1} opacity={i === 9 ? 1 : 0.6} />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <circle key={`c${i}`} cx={30 + r() * 340} cy={30 + r() * 240} r={6 + r() * 10} fill={INK} />
        ))}
      </>
    );
  },

  /* Wembley — the stadium bowl in a figure-ground */
  stadium(r) {
    return (
      <>
        {blocks(r, { skip: (x, y) => ((x - 200) / 130) ** 2 + ((y - 150) / 95) ** 2 < 1, min: 16, max: 36, gap: 5 })}
        <ellipse cx="200" cy="150" rx="110" ry="76" fill={INK} />
        <ellipse cx="200" cy="150" rx="70" ry="44" fill={ACC} />
        <line x1="60" y1="290" x2="200" y2="226" stroke={INK} strokeWidth="6" />
      </>
    );
  },

  /* South Poplar — a dock edge and new blocks */
  river(r) {
    return (
      <>
        {blocks(r, { y1: 190, hit: 0.04 })}
        <rect x="0" y="200" width="400" height="100" fill={ACC} opacity="0.2" />
        <line x1="0" y1="200" x2="400" y2="200" stroke={INK} strokeWidth="2" />
        <path d={path(Array.from({ length: 41 }, (_, k) => [k * 10, 245 + Math.sin(k / 4) * 8]))} fill="none" stroke={ACC} strokeWidth="6" />
      </>
    );
  },

  /* Dar — a transit line with stations and their catchments */
  transit() {
    const st = [[60, 220], [140, 170], [220, 160], [300, 110], [360, 70]];
    return (
      <>
        {st.map(([x, y], i) => (
          <circle key={`r${i}`} cx={x} cy={y} r="52" fill="none" stroke={INK} strokeDasharray="3 4" opacity="0.6" />
        ))}
        <path d={path(st)} fill="none" stroke={ACC} strokeWidth="8" />
        {st.map(([x, y], i) => (
          <circle key={`s${i}`} cx={x} cy={y} r="9" fill={PAPER} stroke={INK} strokeWidth="3" />
        ))}
      </>
    );
  },

  /* Converted homes — a building section with flats */
  homes(r) {
    const out = [];
    for (let f = 0; f < 6; f++)
      for (let u = 0; u < 5; u++) {
        const hit = r() < 0.08;
        out.push(<rect key={`${f}-${u}`} x={70 + u * 54} y={36 + f * 40} width="48" height="34" fill={hit ? ACC : 'none'} stroke={INK} strokeWidth="1.2" />);
      }
    return (
      <>
        <rect x="62" y="28" width="284" height="252" fill="none" stroke={INK} strokeWidth="3" />
        {out}
        <line x1="20" y1="282" x2="380" y2="282" stroke={INK} strokeWidth="2" />
      </>
    );
  },
};

export function ProjectArt({ project, className = '' }) {
  const art = MOTIFS[project.art] ? project.art : 'blocks';
  const drawing = useMemo(() => MOTIFS[art](rng(project.slug)), [art, project.slug]);
  return (
    <div className={`overflow-hidden bg-sheet ${className || 'relative'}`}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label={project.title}>
        {drawing}
      </svg>
    </div>
  );
}
