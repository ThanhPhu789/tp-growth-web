import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import {generateSeoArtifacts} from './scripts/generateSeoArtifacts';
import {normalizeSiteUrl} from './src/config/site';

function createSeoPlugin(rawSiteUrl: string | undefined, isProductionBuild: boolean): Plugin {
  const siteUrl = normalizeSiteUrl(rawSiteUrl);
  const blogPostsFile = path.resolve(__dirname, 'src/data/blogPosts.ts');

  return {
    name: 'tp-growth-seo-assets',
    buildStart() {
      if (isProductionBuild && !siteUrl) {
        this.error(
          'VITE_SITE_URL is required for production builds and must be an HTTPS origin without a path, query, or hash.',
        );
      }
    },
    generateBundle() {
      if (!siteUrl) {
        return;
      }

      const {sitemap, robots} = generateSeoArtifacts(siteUrl, blogPostsFile);
      this.emitFile({type: 'asset', fileName: 'sitemap.xml', source: sitemap});
      this.emitFile({type: 'asset', fileName: 'robots.txt', source: robots});
    },
  };
}

export default defineConfig(({mode, command}) => {
  const env = loadEnv(mode, '.', '');
  const gtmId = env.VITE_GTM_ID?.trim();
  const hasValidGtmId = Boolean(gtmId && /^GTM-[A-Z0-9]+$/.test(gtmId));

  if (gtmId && !hasValidGtmId) {
    console.warn('VITE_GTM_ID is set but does not match the expected GTM-XXXXXXX format. GTM will not be injected.');
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      createSeoPlugin(env.VITE_SITE_URL, command === 'build'),
      {
        name: 'tp-growth-gtm-html',
        transformIndexHtml() {
          if (!hasValidGtmId || !gtmId) {
            return [];
          }

          return [
            {
              tag: 'script',
              children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
              injectTo: 'head-prepend' as const,
            },
            {
              tag: 'noscript',
              children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              injectTo: 'body-prepend' as const,
            },
          ];
        },
      },
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
