import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { socialLinks } from '@/lib/data';
import './globals.css';

const SITE_URL = 'https://sewingwithfabiana.com';
const SITE_NAME = 'Sewing with Fabiana';
const SITE_DESCRIPTION =
  'Easy-to-follow sewing patterns with step-by-step instructions for every skill level. Digital PDF patterns delivered straight to your inbox.';
const OG_IMAGE = `${SITE_URL}/images/hero-1.jpg`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.png?v=2', type: 'image/png' }],
    apple: '/favicon.png?v=2',
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  sameAs: [socialLinks.instagram, socialLinks.youtube],
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
