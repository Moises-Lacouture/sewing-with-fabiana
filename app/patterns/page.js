'use client';

import { useState, useRef } from 'react';
import { checkoutUrls } from '@/lib/data';

const photos = [
  { src: '/images/alessandra-1.jpg', alt: 'Alessandra top — front view' },
  { src: '/images/alessandra-2.jpg', alt: 'Alessandra top on a hanger' },
  { src: '/images/alessandra-3.jpg', alt: 'Alessandra top — front detail' },
  { src: '/images/alessandra-4.jpg', alt: 'Alessandra top — back view' },
  { src: '/images/alessandra-5.jpg', alt: 'Alessandra top — side view' },
  { src: '/images/alessandra-6.jpg', alt: 'Alessandra dress in pink' },
  { src: '/images/alessandra-7.jpg', alt: 'Alessandra size chart and materials' },
  { src: '/images/alessandra-8.jpg', alt: 'Alessandra top in plaid — front view' },
  { src: '/images/alessandra-9.jpg', alt: 'Alessandra top in plaid — back view' },
  { src: '/images/alessandra-10.jpg', alt: 'Alessandra top in rust linen' },
  { src: '/images/alessandra-11.jpg', alt: 'Alessandra dress in blue toile print' },
  { src: '/images/alessandra-12.jpg', alt: 'Alessandra dress in pink floral print' },
  { src: '/images/alessandra-13.jpg', alt: 'Alessandra top in blue hydrangea print' },
  { src: '/images/alessandra-14.jpg', alt: 'Alessandra top in teal gingham' },
  { src: '/images/alessandra-15.jpg', alt: 'Alessandra top in pink polka dot' },
  { src: '/images/alessandra-16.jpg', alt: 'Alessandra top in rust linen' },
];

const THUMBS_VISIBLE = 4;
const SWIPE_THRESHOLD = 40;

function Arrow({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous photo' : 'Next photo'}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction === 'prev' ? 'left' : 'right']: 12,
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2D2D2DCC',
        color: '#E8E4DF',
        borderRadius: 100,
        border: 'none',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        transition: 'all 0.25s ease',
      }}
      className="hover:bg-[#6B2C32]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {direction === 'prev' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

export default function PatternsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const lastIndex = photos.length - 1;
  const windowStart = Math.min(
    Math.max(0, activeIndex - 1),
    Math.max(0, photos.length - THUMBS_VISIBLE)
  );
  const visibleThumbs = photos.slice(windowStart, windowStart + THUMBS_VISIBLE);

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(lastIndex, i + 1));

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
    touchStartX.current = null;
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
        {/* GALLERY */}
        <div>
          <div
            style={{ position: 'relative' }}
            className="mb-3"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              style={{ borderRadius: 12 }}
              className="aspect-[4/5] w-full object-cover"
            />
            <Arrow direction="prev" onClick={goPrev} disabled={activeIndex === 0} />
            <Arrow direction="next" onClick={goNext} disabled={activeIndex === lastIndex} />
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#2D2D2D66',
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            {activeIndex + 1} / {photos.length}
          </p>
          <div className="grid grid-cols-4 gap-3">
            {visibleThumbs.map((photo, i) => {
              const realIndex = windowStart + i;
              return (
                <button
                  key={realIndex}
                  onClick={() => setActiveIndex(realIndex)}
                  style={{
                    borderRadius: 8,
                    border: activeIndex === realIndex ? '2px solid #6B2C32' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    padding: 0,
                    overflow: 'hidden',
                  }}
                  className="aspect-square hover:opacity-85"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

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
            Digital PDF Pattern · 4-in-1
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#2D2D2D',
              fontSize: 38,
              fontWeight: 500,
              marginBottom: 8,
              lineHeight: 1.25,
            }}
          >
            Alessandra
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#2D2D2D66',
              fontSize: 14,
              marginBottom: 20,
            }}
          >
            Dress or top · With or without sleeves
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
            $11.99
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
            <p>
              Meet Alessandra, the prettiest 4-in-1 pattern. I wanted to design something that felt cute and chic at the same time. That fit just right, not too tight, but still gave a beautiful silhouette. And my favorite detail? The keyhole neckline.
            </p>
            <p>
              The best part is the versatility. Make it as a dress or a top, with or without sleeves. Dress it up or down depending on your fabric choice, and you have a completely different look every time. This is your everyday dress, for every season.
            </p>
            <p>
              This pattern features bust darts and back darts for a comfortable, flattering fit, an invisible zipper on the back, and that signature keyhole neckline that makes the whole look.
            </p>
            <p style={{ color: '#2D2D2D', fontWeight: 500 }}>
              Recommended for Advanced Beginners.
            </p>
          </div>

          <a
            href={checkoutUrls.alessandra}
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
            Buy Now — $11.99
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
            All sales final once downloaded · <a href="/refund" style={{ color: '#6B2C3266', textDecoration: 'underline' }}>Refund Policy</a> · <a href="/terms" style={{ color: '#6B2C3266', textDecoration: 'underline' }}>Terms</a>
          </p>

          <div style={{ borderTop: '1px solid #2D2D2D15', paddingTop: 24 }}>
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
                What&apos;s included
              </h4>
              <ul
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#2D2D2D88',
                  fontSize: 13,
                  lineHeight: 1.9,
                  margin: 0,
                  paddingLeft: 16,
                }}
              >
                <li>PDF pattern in A4, US Letter, and A0 formats</li>
                <li>Step-by-step sewing instructions with sketches</li>
                <li>Comprehensive YouTube tutorial</li>
              </ul>
            </div>

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
                Sizes
              </h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                XXS, XS, S, M, L, XL, XXL (measurements chart included)
              </p>
            </div>

            <div>
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
                Please note
              </h4>
              <ul
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#2D2D2D88',
                  fontSize: 13,
                  lineHeight: 1.9,
                  margin: 0,
                  paddingLeft: 16,
                }}
              >
                <li>This pattern is in English</li>
                <li>This is a digital pattern — no physical copy will be shipped</li>
                <li>For personal use only — redistribution or reproduction is not permitted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
