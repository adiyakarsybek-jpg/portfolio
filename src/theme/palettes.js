/* Colour palettes. The tokens for each live in src/index.css under
   [data-palette="…"]. To finalise one palette, set DEFAULT_PALETTE and
   remove the switcher (<PaletteSwitch/> in App.jsx). */
export const PALETTES = [
  { id: 'a', letter: 'A', name: { en: 'Electric Pink', ru: 'Электрический розовый' }, swatch: ['#F5F2EC', '#161616', '#F50087'] },
  { id: 'b', letter: 'B', name: { en: 'Dusty Rose', ru: 'Пыльная роза' }, swatch: ['#F8F3F0', '#482D39', '#C66A86'] },
  { id: 'c', letter: 'C', name: { en: 'Pink & Burgundy', ru: 'Розовый и бордо' }, swatch: ['#FAF5ED', '#650D32', '#FFB5D2'] },
  { id: 'v1', letter: 'V1', name: { en: 'Original cobalt (V1)', ru: 'Исходный кобальт (V1)' }, swatch: ['#EDEDE8', '#111214', '#2A3CF5'] },
];
export const DEFAULT_PALETTE = 'a';
