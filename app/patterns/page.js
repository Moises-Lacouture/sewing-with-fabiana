'use client';

import { useState } from 'react';
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
];

export default function PatternsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
        {/* GALLERY */}
        <div>
          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            style={{ borderRadius: 12 }}
            className="aspect-[4/5] w-full object-cover mb-4"
          />
          <div className="grid grid-cols-4 gap-3">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  borderRadius: 8,
                  border: activeIndex === i ? '2px solid #6B2C32' : '2px solid transparent',
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
            ))}
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
