import Link from 'next/link';
import { patterns, cardBgs } from '@/lib/data';

export const metadata = {
  title: 'Patterns',
  description:
    'Browse digital PDF sewing patterns from Sewing with Fabiana — step-by-step instructions in A4, US Letter, and A0 formats, delivered straight to your inbox.',
  alternates: { canonical: '/patterns' },
  openGraph: {
    title: 'Patterns | Sewing with Fabiana',
    description: 'Browse digital PDF sewing patterns with step-by-step instructions.',
    url: 'https://sewingwithfabiana.com/patterns',
    type: 'website',
    images: [{ url: 'https://sewingwithfabiana.com/images/alessandra-1.jpg', width: 1200, height: 1500, alt: 'Sewing with Fabiana patterns' }],
  },
};

const eyebrowStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  fontWeight: 500,
  marginBottom: 8,
};

const nameStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 24,
  fontWeight: 500,
  marginBottom: 6,
  lineHeight: 1.25,
};

const subtitleStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  lineHeight: 1.6,
  marginBottom: 10,
};

function AvailableCard({ pattern }) {
  return (
    <Link
      href={`/patterns/${pattern.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
      className="group"
    >
      <div
        style={{ borderRadius: 12, overflow: 'hidden', transition: 'all 0.4s ease' }}
        className="aspect-[4/5] mb-4 group-hover:shadow-lg group-hover:-translate-y-1"
      >
        <img src={pattern.heroImage} alt={pattern.heroAlt} className="w-full h-full object-cover" />
      </div>
      <p style={{ ...eyebrowStyle, color: '#2D2D2D88' }}>{pattern.category}</p>
      <h2 style={{ ...nameStyle, color: '#2D2D2D' }}>{pattern.name}</h2>
      <p style={{ ...subtitleStyle, color: '#2D2D2D66' }}>{pattern.subtitle}</p>
      <p style={{ fontFamily: "'Playfair Display', serif", color: '#6B2C32', fontSize: 18, fontWeight: 500 }}>
        {pattern.priceLabel}
      </p>
    </Link>
  );
}

// Quieter than a buyable card on purpose — it announces without competing.
// No image exists yet, so the tile is a brand tint carrying the initial.
function ComingSoonCard({ pattern, tint }) {
  return (
    <div>
      <div
        style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: tint }}
        className="aspect-[4/5] mb-4 flex items-center justify-center"
      >
        <span
          aria-hidden="true"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 96,
            lineHeight: 1,
            color: '#2D2D2D1f',
            userSelect: 'none',
          }}
        >
          {pattern.mark || pattern.name.charAt(0)}
        </span>
      </div>
      <p style={{ ...eyebrowStyle, color: '#6B2C32' }}>{pattern.teaser || 'Coming soon'}</p>
      <h2 style={{ ...nameStyle, color: '#2D2D2D99' }}>{pattern.name}</h2>
      <p style={{ ...subtitleStyle, color: '#2D2D2D66' }}>{pattern.subtitle}</p>
    </div>
  );
}

export default function PatternsCatalogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
      <div className="text-center mb-14">
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#2D2D2D88',
            fontSize: 12,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          Shop
        </p>
        <h1
          className="pbf-script-title"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2D2D2D',
            fontSize: 64,
            fontWeight: 500,
            lineHeight: 1.3,
            marginBottom: 14,
          }}
        >
          Patterns
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#2D2D2D77',
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: 420,
            margin: '0 auto',
          }}
        >
          Digital PDF sewing patterns with step-by-step instructions, delivered straight to your inbox.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {patterns.map((pattern, i) =>
          pattern.status === 'coming-soon' ? (
            <ComingSoonCard key={pattern.slug} pattern={pattern} tint={cardBgs[i % cardBgs.length]} />
          ) : (
            <AvailableCard key={pattern.slug} pattern={pattern} />
          )
        )}
      </div>
    </div>
  );
}
