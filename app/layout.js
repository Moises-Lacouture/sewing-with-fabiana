import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: {
    default: 'Sewing with Fabiana',
    template: '%s | Sewing with Fabiana',
  },
  description: 'Easy-to-follow sewing patterns with step-by-step instructions for every skill level. Digital PDF patterns delivered straight to your inbox.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Sewing with Fabiana',
    description: 'Easy-to-follow sewing patterns with step-by-step instructions for every skill level.',
    url: 'https://sewingwithfabiana.com',
    siteName: 'Sewing with Fabiana',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
