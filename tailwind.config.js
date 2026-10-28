/** Colour tokens live in src/index.css as RGB triplets, one set per palette. */
const tokens = [
  'paper', 'sheet', 'ink', 'graphite', 'mute', 'strong', 'accent', 'accent-ink', 'on-accent',
  'band', 'on-band', 'band-head', 'feature', 'on-feature', 'contact', 'on-contact', 'contact-head',
  'sel', 'on-sel', 'mark', 'hl', 'line',
];
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ...Object.fromEntries(tokens.map((t) => [t, `rgb(var(--${t}) / <alpha-value>)`])),
        rule: 'var(--rule)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      maxWidth: { sheet: '1440px' },
    },
  },
  plugins: [],
};
