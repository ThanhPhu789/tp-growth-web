export const STATIC_PUBLIC_ROUTES = [
  '/',
  '/Growth-System-Framework',
  '/ai-growth',
  '/case-study',
  '/growth-notes',
  '/lam-viec-voi-phu',
] as const;

export const CASE_STUDY_ROUTES = [
  '/case-study/paint-and-more-growth-system',
  '/case-study/blackvue-dr750-lte-growth-system',
  '/case-study/gnet-g-on-x-growth-system',
  '/case-study/fnb-tiktok-sales-system',
] as const;

export function normalizeSiteUrl(value: string | undefined) {
  if (!value?.trim()) {
    return null;
  }

  try {
    const url = new URL(value.trim());
    const hasRootPath = url.pathname === '/' || url.pathname === '';

    if (
      url.protocol !== 'https:'
      || url.username
      || url.password
      || url.search
      || url.hash
      || !hasRootPath
    ) {
      return null;
    }

    return url.origin;
  } catch {
    return null;
  }
}
export function normalizeRoutePath(path: string) {
  const url = new URL(path, 'https://site.invalid');
  return url.pathname.replace(/\/+$/, '') || '/';
}

export function buildAbsoluteSiteUrl(siteUrl: string, path: string) {
  return `${siteUrl}${normalizeRoutePath(path) === '/' ? '/' : normalizeRoutePath(path)}`;
}
