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
