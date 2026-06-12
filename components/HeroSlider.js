'use client';

import { useState, useEffect } from 'react';

const heroImages = ['/images/hero-1.jpg', '/images/hero-2.jpg'];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {heroImages.map((src, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: current === i ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        >
          <img
            src={src}
            alt="Fabiana sewing at her workspace"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#2D2D2D44' }} />
      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <h1
          className="pbf-script-title"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#E8E4DF',
            fontSize: 80,
            fontWeight: 500,
            lineHeight: 1.25,
          }}
        >
          Patterns by Fabiana
        </h1>
      </div>
    </section>
  );
}
