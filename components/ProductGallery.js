'use client';

import { useState, useRef } from 'react';

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

// The array order is the display order — filenames have no say in it.
export default function ProductGallery({ photos }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const list = photos || [];
  const lastIndex = list.length - 1;
  const windowStart = Math.min(
    Math.max(0, activeIndex - 1),
    Math.max(0, list.length - THUMBS_VISIBLE)
  );
  const visibleThumbs = list.slice(windowStart, windowStart + THUMBS_VISIBLE);

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

  // A draft can exist before its photos do; show the frame rather than crash.
  if (list.length === 0) {
    return (
      <div
        className="aspect-[4/5] w-full flex items-center justify-center"
        style={{ borderRadius: 12, backgroundColor: '#2D2D2D0d' }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#2D2D2D66',
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Photos not added yet
        </p>
      </div>
    );
  }

  const active = list[activeIndex] || list[0];

  return (
    <div>
      <div
        style={{ position: 'relative' }}
        className="mb-3"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={active.src}
          alt={active.alt}
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
        {activeIndex + 1} / {list.length}
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
  );
}
