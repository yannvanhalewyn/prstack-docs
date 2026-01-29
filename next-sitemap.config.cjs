/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://prstack.dev',
  generateRobotsTxt: false, // We already have a custom robots.txt
  outDir: './out',
  exclude: ['/404', '/_not-found'],
  generateIndexSitemap: false, // For smaller sites, one sitemap file is enough
  transform: async (config, path) => {
    // Set priority and change frequency based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/docs')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
