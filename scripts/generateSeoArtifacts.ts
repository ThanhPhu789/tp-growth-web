import fs from 'node:fs';
import ts from 'typescript';
import {
  buildAbsoluteSiteUrl,
  CASE_STUDY_ROUTES,
  STATIC_PUBLIC_ROUTES,
} from '../src/config/site';

function readGrowthNoteSlugs(blogPostsFile: string) {
  const sourceText = fs.readFileSync(blogPostsFile, 'utf8');
  const sourceFile = ts.createSourceFile(
    blogPostsFile,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const slugs: string[] = [];

  function visit(node: ts.Node) {
    if (
      ts.isPropertyAssignment(node)
      && ((ts.isIdentifier(node.name) && node.name.text === 'slug')
        || (ts.isStringLiteral(node.name) && node.name.text === 'slug'))
      && ts.isStringLiteralLike(node.initializer)
    ) {
      slugs.push(node.initializer.text);
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  const uniqueSlugs = new Set(slugs);
  if (slugs.length === 0 || uniqueSlugs.size !== slugs.length) {
    throw new Error('Growth Note slugs are missing or duplicated; sitemap was not generated.');
  }

  for (const slug of slugs) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      throw new Error(`Invalid Growth Note slug in sitemap source: ${slug}`);
    }
  }

  return slugs;
}
function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function generateSeoArtifacts(siteUrl: string, blogPostsFile: string) {
  const growthNoteRoutes = readGrowthNoteSlugs(blogPostsFile).map(
    (slug) => `/growth-notes/${slug}`,
  );
  const routes = [
    ...STATIC_PUBLIC_ROUTES,
    ...CASE_STUDY_ROUTES,
    ...growthNoteRoutes,
  ];
  const uniqueRoutes = new Set(routes);

  if (uniqueRoutes.size !== routes.length) {
    throw new Error('Duplicate routes detected; sitemap was not generated.');
  }

  const urls = routes.map((route) => buildAbsoluteSiteUrl(siteUrl, route));
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');
  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${buildAbsoluteSiteUrl(siteUrl, '/sitemap.xml')}`,
    '',
  ].join('\n');

  return {
    sitemap,
    robots,
    routeCount: routes.length,
    growthNoteCount: growthNoteRoutes.length,
    caseStudyCount: CASE_STUDY_ROUTES.length,
  };
}
