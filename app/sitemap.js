const SITE_URL = 'https://sewingwithfabiana.com';

export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/patterns', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/tutorials', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/refund', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
