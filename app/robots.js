export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://sewingwithfabiana.com/sitemap.xml',
    host: 'https://sewingwithfabiana.com',
  };
}
