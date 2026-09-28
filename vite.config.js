import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Emits robots.txt and sitemap.xml at build time using the configured site URL,
// so the canonical domain only has to be set once (VITE_SITE_URL in .env).
function seoFiles(siteUrl) {
  const url = siteUrl.replace(/\/$/, '');
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Fall back to Netlify's primary site URL (set during Netlify builds) when
  // VITE_SITE_URL isn't configured, so canonical/OG tags are never left blank.
  const siteUrl = (env.VITE_SITE_URL || process.env.URL || 'http://localhost:4173').replace(/\/$/, '');
  process.env.VITE_SITE_URL = siteUrl;

  return {
    plugins: [react(), tailwindcss(), seoFiles(siteUrl)],
  };
});
