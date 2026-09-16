/**
 * Resolves an asset path to work with the configured Vite BASE_URL.
 * This ensures proper asset loading on GitHub Pages (e.g. /uxsuryansh-portfolio/assets/...)
 * as well as in local/preview environments (e.g. /assets/...).
 *
 * @param path - Asset path (e.g. '/assets/servotix-hero-cover.png' or 'assets/servotix-hero-cover.png')
 * @returns Fully resolved asset URL respecting import.meta.env.BASE_URL
 */
export function getAssetPath(path: string): string {
  if (!path) return '';

  // Return absolute or data/blob URLs as-is
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL || '/';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  // If path already starts with the baseUrl, return it
  if (path.startsWith(normalizedBase)) {
    return path;
  }

  // Normalize path by stripping leading './', '/', or 'public/'
  let cleanPath = path.trim();
  cleanPath = cleanPath.replace(/^\.?\//, '');
  cleanPath = cleanPath.replace(/^public\//, '');

  return `${normalizedBase}${cleanPath}`;
}
