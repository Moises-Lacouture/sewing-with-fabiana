import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import { availablePatterns, getPatternBySlug } from '@/lib/data';

const SITE_URL = 'https://sewingwithfabiana.com';

export function generateStaticParams() {
  return availablePatterns.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const pattern = getPatternBySlug(params.slug);
  if (!pattern) return {};

  const url = `${SITE_URL}/patterns/${pattern.slug}`;
  return {
    title: pattern.seo.title,
    description: pattern.seo.description,
    alternates: { canonical: `/patterns/${pattern.slug}` },
    openGraph: {
      title: pattern.seo.title,
      description: pattern.seo.description,
      url,
      type: 'website',
      images: [{ url: pattern.seo.ogImage, width: 1200, height: 1500, alt: `${pattern.name} sewing pattern` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pattern.seo.title,
      description: pattern.seo.description,
      images: [pattern.seo.ogImage],
    },
  };
}

function InfoBlock({ title, items, copy }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <h4
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: '#2D2D2D',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}
      >
        {title}
      </h4>
      {copy && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 13, lineHeight: 1.7, margin: 0 }}>
          {copy}
        </p>
      )}
      {items && (
        <ul style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 13, lineHeight: 1.9, margin: 0, paddingLeft: 16 }}>
          {items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      )}
    </div>
  );
}

export default function PatternProductPage({ params }) {
  const pattern = getPatternBySlug(params.slug);
  if (!pattern) notFound();

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${pattern.name} — ${pattern.subtitle}`,
    description: pattern.seo.description,
    image: pattern.photos.slice(0, 3).map((p) => `${SITE_URL}${p.src}`),
    brand: { '@type': 'Brand', name: 'Sewing with Fabiana' },
    category: 'Sewing Patterns',
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/patterns/${pattern.slug}`,
      priceCurrency: pattern.priceCurrency,
      price: pattern.priceValue,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />

      <Link
        href="/patterns"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: '#2D2D2D77',
          fontSize: 12,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: 24,
        }}
        className="hover:text-[#6B2C32] transition-colors"
      >
        ← All patterns
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
        <ProductGallery photos={pattern.photos} />

        {/* INFO */}
        <div className="pt-2">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#2D2D2D88',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginBottom: 14,
            }}
          >
            {pattern.category}
          </p>
          <h1
            className="pbf-script-title"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#2D2D2D',
              fontSize: 72,
              fontWeight: 500,
              marginBottom: 8,
              lineHeight: 1.25,
            }}
          >
            {pattern.name}
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#2D2D2D66',
              fontSize: 14,
              marginBottom: 20,
            }}
          >
            {pattern.subtitle}
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#2D2D2D',
              fontSize: 26,
              fontWeight: 500,
              marginBottom: 28,
            }}
          >
            {pattern.priceLabel}
          </p>

          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#2D2D2D99',
              fontSize: 14,
              lineHeight: 1.8,
              marginBottom: 32,
            }}
            className="space-y-4"
          >
            {pattern.description.map((para, i) => <p key={i}>{para}</p>)}
            {pattern.skillLevel && (
              <p style={{ color: '#2D2D2D', fontWeight: 500 }}>{pattern.skillLevel}</p>
            )}
          </div>

          <a
            href={pattern.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              backgroundColor: '#2D2D2D',
              color: '#E8E4DF',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '18px 32px',
              borderRadius: 100,
              border: 'none',
              marginBottom: 14,
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center',
              transition: 'all 0.3s ease',
            }}
            className="hover:bg-[#6B2C32]"
          >
            Buy Now — {pattern.priceLabel}
          </a>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#2D2D2D66',
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 36,
              lineHeight: 1.6,
            }}
          >
            Instant download · Delivered to your email
          </p>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#2D2D2D55',
              fontSize: 11,
              textAlign: 'center',
              marginBottom: 12,
              lineHeight: 1.6,
            }}
          >
            By purchasing, you consent to immediate delivery of this digital product and acknowledge that you lose your right of withdrawal once the download begins.
          </p>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#2D2D2D44',
              fontSize: 11,
              textAlign: 'center',
              marginBottom: 36,
              lineHeight: 1.6,
            }}
          >
            All sales final once downloaded · <Link href="/refund" style={{ color: '#6B2C3266', textDecoration: 'underline' }}>Refund Policy</Link> · <Link href="/terms" style={{ color: '#6B2C3266', textDecoration: 'underline' }}>Terms</Link>
          </p>

          <div style={{ borderTop: '1px solid #2D2D2D15', paddingTop: 24 }}>
            <InfoBlock title="What's included" items={pattern.included} />
            <InfoBlock title="Sizes" copy={pattern.sizes} />
            <InfoBlock title="Please note" items={pattern.please} />
          </div>
        </div>
      </div>
    </div>
  );
}
