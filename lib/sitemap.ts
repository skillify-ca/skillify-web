import fs from 'fs';
import { getAllBlogSlugs } from './mdx';

const SITE_URL = 'https://skillify.ca';

export function generateSitemap(): string {
  const blogSlugs = getAllBlogSlugs();
  
  const staticPages = [
    '',
    '/blog',
    '/resources',
    '/successStories',
    '/studentPortal',
    '/welcome',
  ];

  const blogPages = blogSlugs.map(slug => `/blog/${slug}`);
  
  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => {
    const path = page === '' ? '' : page;
    const route = path === '' ? '' : path;
    const priority = path === '' ? '1.0' : path.startsWith('/blog/') ? '0.8' : '0.7';
    const changefreq = path === '' ? 'daily' : path.startsWith('/blog/') ? 'weekly' : 'monthly';
    
    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return sitemap;
}

export function writeSitemap(): void {
  const sitemap = generateSitemap();
  fs.writeFileSync('public/sitemap.xml', sitemap);
}

