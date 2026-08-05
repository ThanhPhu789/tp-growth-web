import { useEffect } from 'react';
import {
  buildAbsoluteSiteUrl,
  normalizeRoutePath,
  normalizeSiteUrl,
} from '../config/site';

type RouteMetadataProps = {
  canonicalPath?: string;
  noindex?: boolean;
  pageTitle?: string;
};

const siteUrl = normalizeSiteUrl(import.meta.env.VITE_SITE_URL);

type ApplyRouteMetadataOptions = RouteMetadataProps & {
  siteUrl: string | null;
};

export function applyRouteMetadata(
  documentRef: Document,
  {canonicalPath, noindex = false, pageTitle, siteUrl: canonicalSiteUrl}: ApplyRouteMetadataOptions,
) {
  const existingCanonicalLinks = Array.from(
    documentRef.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'),
  );
  let canonicalLink: HTMLLinkElement | null = null;

  if (canonicalPath && canonicalSiteUrl) {
    canonicalLink = existingCanonicalLinks.shift() ?? documentRef.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = buildAbsoluteSiteUrl(canonicalSiteUrl, normalizeRoutePath(canonicalPath));
    canonicalLink.dataset.tpManaged = 'canonical';

    if (!canonicalLink.isConnected) {
      documentRef.head.appendChild(canonicalLink);
    }
  }

  existingCanonicalLinks.forEach((link) => link.remove());

  let robotsMeta = documentRef.head.querySelector<HTMLMetaElement>(
    'meta[name="robots"][data-tp-managed="robots"]',
  );

  if (noindex) {
    robotsMeta ??= documentRef.createElement('meta');
    robotsMeta.name = 'robots';
    robotsMeta.content = 'noindex,follow';
    robotsMeta.dataset.tpManaged = 'robots';

    if (!robotsMeta.isConnected) {
      documentRef.head.appendChild(robotsMeta);
    }
  } else {
    robotsMeta?.remove();
    robotsMeta = null;
  }

  const previousTitle = documentRef.title;
  if (pageTitle) {
    documentRef.title = pageTitle;
  }

  return () => {
    canonicalLink?.remove();
    robotsMeta?.remove();

    if (pageTitle) {
      documentRef.title = previousTitle;
    }
  };
}

export default function RouteMetadata({
  canonicalPath,
  noindex = false,
  pageTitle,
}: RouteMetadataProps) {
  useEffect(
    () => applyRouteMetadata(document, {canonicalPath, noindex, pageTitle, siteUrl}),
    [canonicalPath, noindex, pageTitle],
  );

  return null;
}
