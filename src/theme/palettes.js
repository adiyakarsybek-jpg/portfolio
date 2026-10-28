/* Colour palettes. The tokens for each live in src/index.css under
   [data-palette="…"]. To finalise one palette, set DEFAULT_PALETTE and
   remove the switcher (<PaletteSwitch/> in App.jsx). */
export const PALETTES = [
  { id: 'a', letter: 'A', name: { en: 'Electric Lemon', ru: 'Электрический лимонный' }, swatch: ['#F5F2EC', '#161616', '#FFEB00'] },
  { id: 'b', letter: 'B', name: { en: 'Citron & Plum', ru: 'Цитрон и слива' }, swatch: ['#F8F3F0', '#482D39', '#DCCB45'] },
  { id: 'c', letter: 'C', name: { en: 'Lemon & Burgundy', ru: 'Лимонный и бордо' }, swatch: ['#FAF5ED', '#650D32', '#FFF07A'] },
  { id: 'v1', letter: 'V1', name: { en: 'Original cobalt (V1)', ru: 'Исходный кобальт (V1)' }, swatch: ['#EDEDE8', '#111214', '#2A3CF5'] },
];
export const DEFAULT_PALETTE = 'a';
