'use client';

import { useState } from 'react';
import { checkoutUrls } from '@/lib/data';

const PHOTOS = [
  { src: '/images/alessandra-1.jpg',  alt: 'Alessandra top — front view' },
  { src: '/images/alessandra-2.jpg',  alt: 'Alessandra top on a hanger' },
  { src: '/images/alessandra-3.jpg',  alt: 'Alessandra top — front detail' },
  { src: '/images/alessandra-6.jpg',  alt: 'Alessandra dress in pink' },
  { src: '/images/alessandra-8.jpg',  alt: 'Alessandra top in plaid — front view' },
  { src: '/images/alessandra-11.jpg', alt: 'Alessandra dress in blue toile print' },
  { src: '/images/alessandra-13.jpg', alt: 'Alessandra top in blue hydrangea print' },
];

const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Alessandra — Dress or Top Sewing Pattern',
  description:
    'A 4-in-1 digital PDF sewing pattern. Dress or top, with or without sleeves, featuring a signature keyhole neckline. Includes A4, US Letter, and A0 formats and step-by-step instructions.',
  image: [
    'https://sewingwithfabiana.com/images/alessandra-1.jpg',
    'https://sewingwithfabiana.com/images/alessandra-2.jpg',
    'https://sewingwithfabiana.com/images/alessandra-6.jpg',
  ],
  brand: { '@type': 'Brand', name: 'Sewing with Fabiana' },
  category: 'Sewing Patterns',
  offers: {
    '@type': 'Offer',
    url: 'https://sewingwithfabiana.com/patterns',
    priceCurrency: 'USD',
    price: '12.99',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
};

function GalleryArrow({ direction, onClick, disabled }) {
  const side = direction === 'left' ? { left: 14 } : { right: 14 };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Previous photo' : 'Next photo'}
      style={{
        position: 'absolute', top: '50%', transform: 'translateY(-50%)',
        ...side,
        width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#2D2D2Dcc', color: 'var(--pbf-cream)',
        borderRadius: 100, border: 'none',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.3 : 1,
        transition: 'all 250ms ease',
      }}
      className="hover:!bg-[#6B2C32]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {direction === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

function ProductBlock({ title, items, copy }) {
  return (
    <div>
      <h4 style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-100)', fontSize: 11, fontWeight: 600, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', margin: '0 0 10px' }}>
        {title}
      </h4>
      {copy && (
        <p style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-66)', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
          {copy}
        </p>
      )}
      {items && (
        <ul style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-66)', fontSize: 13.5, lineHeight: 1.9, margin: 0, paddingLeft: 18 }}>
          {items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      )}
    </div>
  );
}

export default function PatternsPage() {
  const [active, setActive] = useState(0);
  const last = PHOTOS.length - 1;

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <div style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '48px var(--pbf-gutter) 96px' }}>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]" style={{ gap: 64, alignItems: 'flex-start' }}>
          <div>
            <div style={{ position: 'relative', marginBottom: 12 }}>
              <img
                src={PHOTOS[active].src}
                alt={PHOTOS[active].alt}
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 'var(--pbf-radius-md)', display: 'block' }}
              />
              <GalleryArrow direction="left"  onClick={() => setActive((i) => Math.max(0, i - 1))}    disabled={active === 0} />
              <GalleryArrow direction="right" onClick={() => setActive((i) => Math.min(last, i + 1))} disabled={active === last} />
              <span
                style={{
                  position: 'absolute', top: 14, left: 14,
                  fontFamily: 'var(--pbf-font-body)', fontSize: 11,
                  letterSpacing: '0.1em', color: 'var(--pbf-cream)',
                  background: '#2D2D2D99', padding: '5px 12px', borderRadius: 100,
                }}
              >
                {String(active + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}
              </span>
            </div>
            <div className="grid grid-cols-7" style={{ gap: 8 }}>
              {PHOTOS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    aspectRatio: '1/1', borderRadius: 'var(--pbf-radius-xs)',
                    border: i === active ? '2px solid var(--pbf-burgundy)' : '2px solid transparent',
                    cursor: 'pointer', padding: 0, overflow: 'hidden',
                    background: 'transparent', opacity: i === active ? 1 : 0.7,
                    transition: 'all 250ms ease',
                  }}
                >
                  <img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </button>
              ))}
            </div>
          </div>

          <div className="md:sticky" style={{ top: 96 }}>
            <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pbf-burgundy)', margin: '0 0 18px' }}>
              Digital PDF Pattern · 4-in-1
            </p>

            <h1
              className="pbf-script-title"
              style={{
                color: 'var(--pbf-ink-100)',
                fontSize: 'clamp(64px, 7vw, 100px)',
                fontWeight: 400,
                margin: '0 0 16px',
              }}
            >
              Alessandra
            </h1>
            <p style={{ fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic', color: 'var(--pbf-ink-55)', fontSize: 19, margin: '0 0 28px' }}>
              Dress or top · with or without sleeves
            </p>

            <div
              className="flex-col md:flex-row"
              style={{
                display: 'flex', alignItems: 'baseline', gap: 14,
                paddingBottom: 28, marginBottom: 28,
                borderBottom: '1px solid var(--pbf-hairline)',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontFamily: 'var(--pbf-font-display)', color: 'var(--pbf-ink-100)', fontSize: 36, fontWeight: 500 }}>
                $12.99
              </span>
              <span style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--pbf-ink-44)' }}>
                Recommended for advanced beginners
              </span>
            </div>

            <div style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-66)', fontSize: 14.5, lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              <p style={{ margin: 0 }}>
                Meet Alessandra, the prettiest 4-in-1 pattern. I wanted to design something that felt cute and chic at the same time — that fit just right, not too tight, but still gave a beautiful silhouette. And my favorite detail? The keyhole neckline.
              </p>
              <p style={{ margin: 0 }}>
                The best part is the versatility. Make it as a dress or a top, with or without sleeves. Dress it up or down depending on your fabric, and you have a completely different look every time.
              </p>
            </div>

            <a
              href={checkoutUrls.alessandra}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '100%',
                fontFamily: 'var(--pbf-font-body)', fontWeight: 500,
                fontSize: 13, letterSpacing: 'var(--pbf-tracking-cta)',
                textTransform: 'uppercase', textDecoration: 'none',
                backgroundColor: '#2D2D2D', color: '#E8E4DF',
                border: 'none', borderRadius: 100, padding: '18px 32px',
                transition: 'background-color 300ms ease',
              }}
              className="hover:!bg-[#6B2C32]"
            >
              Buy Now — $12.99
            </a>
            <p style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-55)', fontSize: 12, textAlign: 'center', margin: '14px 0 36px', letterSpacing: '0.04em' }}>
              Instant download · Delivered to your email
            </p>

            <div style={{ borderTop: '1px solid var(--pbf-hairline)', paddingTop: 28, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <ProductBlock
                title="What's included"
                items={[
                  'PDF pattern in A4, US Letter, and A0 formats',
                  'Step-by-step sewing instructions with sketches',
                ]}
              />
              <ProductBlock title="Sizes" copy="XXS, XS, S, M, L, XL, XXL (measurements chart included)" />
              <ProductBlock
                title="Please note"
                items={[
                  'This pattern is in English',
                  'Digital pattern — no physical copy is shipped',
                  'For personal use only — redistribution is not permitted',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
