'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Vertical photos, scrolled horizontally. One card width is used both for the
// track sizing and for how far an arrow click travels, so a click always lands
// a card flush against the left edge rather than mid-photo.
const CARD_W = 220;
const CARD_W_SM = 150;
const GAP = 16;

function instagramUrl(handle) {
  return `https://instagram.com/${handle.replace(/^@/, '')}`;
}

function ScrollArrow({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Scroll photos left' : 'Scroll photos right'}
      style={{
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
        opacity: disabled ? 0.25 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        transition: 'all 0.25s ease',
        flexShrink: 0,
      }}
      className="hover:bg-[#6B2C32]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {direction === 'prev' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

export default function CustomerGallery({ photos, patternName }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    // Rounding in the browser can leave a sub-pixel gap at the far end.
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [sync]);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const step = (el.clientWidth < 640 ? CARD_W_SM : CARD_W) + GAP;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  if (!photos || photos.length === 0) return null;

  return (
    <section style={{ borderTop: '1px solid #2D2D2D15', marginTop: 64, paddingTop: 56 }}>
      <div className="flex items-end justify-between gap-6 mb-8">
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2D2D2D',
            fontSize: 28,
            fontWeight: 500,
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {patternName} <span style={{ color: '#6B2C32', fontStyle: 'italic' }}>by you</span>
        </h2>

        {/* Arrows are a desktop affordance; touch devices just swipe the track. */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <ScrollArrow direction="prev" onClick={() => scrollBy(-1)} disabled={atStart} />
          <ScrollArrow direction="next" onClick={() => scrollBy(1)} disabled={atEnd} />
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={sync}
        role="region"
        aria-label={`${patternName} photos from makers`}
        tabIndex={0}
        className="pbf-scroll-x flex overflow-x-auto"
        style={{ gap: GAP, scrollSnapType: 'x mandatory', paddingBottom: 4 }}
      >
        {photos.map((photo) => {
          // A handle is optional — without one the tile is a plain photo
          // rather than a link to a profile that may not exist.
          const Tile = photo.handle ? 'a' : 'div';
          const linkProps = photo.handle
            ? {
                href: instagramUrl(photo.handle),
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {};

          return (
            <Tile
              key={photo.image}
              {...linkProps}
              className="group shrink-0"
              style={{ scrollSnapAlign: 'start', textDecoration: 'none' }}
            >
              <div
                className="w-[150px] sm:w-[220px] group-hover:shadow-lg group-hover:-translate-y-1"
                style={{
                  aspectRatio: '3/4',
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginBottom: photo.handle ? 10 : 0,
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
                }}
              >
                <img
                  src={photo.image}
                  alt={photo.alt || `${patternName} sewn by the community`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {photo.handle && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#6B2C32',
                    fontSize: 13,
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {photo.handle}
                </p>
              )}
            </Tile>
          );
        })}
      </div>
    </section>
  );
}
