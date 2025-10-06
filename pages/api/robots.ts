import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://skillify.ca/api/sitemap

# Disallow admin and private areas
Disallow: /studentPortal/admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow blog and public content
Allow: /blog/
Allow: /resources/
Allow: /successStories/

# Crawl delay
Crawl-delay: 1`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.status(200).send(robots);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}


