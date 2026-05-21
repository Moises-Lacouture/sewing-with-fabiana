export const metadata = {
  title: 'Alessandra Pattern — Dress or Top',
  description:
    'Alessandra: a 4-in-1 digital PDF sewing pattern. Dress or top, with or without sleeves, featuring a signature keyhole neckline. Recommended for advanced beginners.',
  alternates: { canonical: '/patterns' },
  openGraph: {
    title: 'Alessandra Pattern — Dress or Top',
    description:
      'A 4-in-1 digital PDF sewing pattern: dress or top, with or without sleeves. Signature keyhole neckline.',
    url: 'https://sewingwithfabiana.com/patterns',
    type: 'website',
    images: [
      {
        url: 'https://sewingwithfabiana.com/images/alessandra-1.jpg',
        width: 1200,
        height: 1500,
        alt: 'Alessandra dress and top sewing pattern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alessandra Pattern — Dress or Top',
    description:
      'A 4-in-1 digital PDF sewing pattern: dress or top, with or without sleeves.',
    images: ['https://sewingwithfabiana.com/images/alessandra-1.jpg'],
  },
};

export default function PatternsLayout({ children }) {
  return children;
}
