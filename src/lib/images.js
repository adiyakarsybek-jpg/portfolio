// Resolves "slug/file.jpg" strings from data files to bundled image URLs.
const files = import.meta.glob('../assets/projects/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function img(path) {
  if (!path) return null;
  return files[`../assets/projects/${path}`] || null;
}

// View-only document pages: src/assets/docs/<doc-id>/pNN.webp, loaded lazily by URL.
const pages = import.meta.glob('../assets/docs/*/*.webp', { eager: true, query: '?url', import: 'default' });

export function docPages(id) {
  return Object.keys(pages)
    .filter((k) => k.startsWith(`../assets/docs/${id}/`))
    .sort()
    .map((k) => pages[k]);
}
