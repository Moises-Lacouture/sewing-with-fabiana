'use client';

import { useEffect, useState } from 'react';
import { checkoutUrls, socialLinks } from '@/lib/data';

const SLIDES = [
  '/images/alessandra-1.jpg',
  '/images/alessandra-3.jpg',
  '/images/alessandra-8.jpg',
  '/images/alessandra-11.jpg',
];

export default function HomeHero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ borderBottom: '1px solid var(--pbf-hairline)' }}>
      <div style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '64px var(--pbf-gutter) 80px' }}>
        <div className="grid grid-cols-1 md:grid-cols-[1.18fr_1fr]" style={{ gap: 56, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h1
                className="pbf-script-title"
                style={{
                  color: 'var(--pbf-ink-100)',
                  fontSize: 'clamp(96px, 12vw, 184px)',
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                Patterns
                <br />
                by <span style={{ color: 'var(--pbf-burgundy)' }}>Fabiana.</span>
              </h1>

              <p
                style={{
                  fontFamily: 'var(--pbf-font-body)',
                  color: 'var(--pbf-ink-66)',
                  fontSize: 16, lineHeight: 1.65,
                  margin: '32px 0 0', maxWidth: 460,
                }}
              >
                Easy-to-follow sewing patterns with step-by-step instructions — designed by a fashion designer, made for the way real people sew at home.
              </p>
            </div>

            <div
              className="flex-col md:flex-row"
              style={{
                marginTop: 56, paddingTop: 24,
                borderTop: '1px solid var(--pbf-hairline)',
                display: 'flex', alignItems: 'flex-end',
                justifyContent: 'space-between', gap: 24,
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pbf-ink-55)', margin: '0 0 8px' }}>
                  Featured this issue
                </p>
                <p style={{ fontFamily: 'var(--pbf-font-display)', fontSize: 22, fontWeight: 500, color: 'var(--pbf-ink-100)', margin: 0 }}>
                  Alessandra — <span style={{ color: 'var(--pbf-ink-55)', fontStyle: 'italic', fontWeight: 400 }}>dress or top</span>
                </p>
                <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 13, color: 'var(--pbf-ink-66)', margin: '6px 0 0' }}>
                  4-in-1 · with or without sleeves · advanced beginner
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
                <a
                  href={checkoutUrls.alessandra}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    fontFamily: 'var(--pbf-font-body)', fontWeight: 500,
                    fontSize: 12, letterSpacing: 'var(--pbf-tracking-button)',
                    textTransform: 'uppercase', textDecoration: 'none',
                    backgroundColor: '#2D2D2D', color: '#E8E4DF',
                    border: 'none', borderRadius: 100, padding: '12px 26px',
                    transition: 'background-color 300ms ease',
                  }}
                  className="hover:!bg-[#6B2C32]"
                >
                  Shop now — $12.99
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    fontFamily: 'var(--pbf-font-body)', fontWeight: 500,
                    fontSize: 12, letterSpacing: 'var(--pbf-tracking-button)',
                    textTransform: 'uppercase', textDecoration: 'none',
                    border: '1.5px solid #6B2C3233', color: '#6B2C32',
                    backgroundColor: 'transparent', borderRadius: 100, padding: '10px 24px',
                    transition: 'background-color 250ms ease',
                  }}
                  className="hover:!bg-[#ffffff66]"
                >
                  Watch the tutorial
                </a>
              </div>
            </div>
          </div>

          <div>
            <div style={{ position: 'relative', borderRadius: 'var(--pbf-radius-md)', overflow: 'hidden', aspectRatio: '4/5' }}>
              {SLIDES.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt="Alessandra by Fabiana"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    opacity: i === idx ? 1 : 0,
                    transition: 'opacity 1500ms ease-in-out',
                  }}
                />
              ))}
              <div style={{ position: 'absolute', bottom: 16, left: 16, display: 'flex', gap: 6 }}>
                {SLIDES.map((_, idx) => (
                  <span
                    key={idx}
                    aria-hidden
                    style={{
                      width: i === idx ? 24 : 6, height: 6,
                      borderRadius: 4,
                      background: i === idx ? '#E8E4DF' : '#E8E4DF66',
                      transition: 'all 400ms ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
