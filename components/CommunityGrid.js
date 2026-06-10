'use client';

import { useState } from 'react';
import { communityPosts } from '@/lib/data';

const SPANS = [5, 3, 4, 4, 3, 5];

function Tile({ post, span }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{ gridColumn: `span ${span}`, cursor: 'pointer' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          borderRadius: 'var(--pbf-radius-sm)',
          overflow: 'hidden',
          aspectRatio: '3/4',
          marginBottom: 12,
          transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1), box-shadow 400ms ease',
          transform: hover ? 'translateY(-4px)' : 'none',
          boxShadow: hover ? 'var(--pbf-shadow-tile-hover)' : 'none',
        }}
      >
        <img
          src={post.image}
          alt={`${post.handle} wearing a Sewing with Fabiana pattern`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2px' }}>
        <p style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-burgundy)', fontSize: 13, fontWeight: 500, margin: 0 }}>
          {post.handle}
        </p>
        <span style={{ fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic', fontSize: 13, color: 'var(--pbf-ink-44)' }}>
          Alessandra
        </span>
      </div>
    </div>
  );
}

export default function CommunityGrid() {
  return (
    <section style={{ borderBottom: '1px solid var(--pbf-hairline)' }}>
      <div style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '96px var(--pbf-gutter)' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ alignItems: 'end', gap: 32, marginBottom: 56, paddingBottom: 28, borderBottom: '1px solid var(--pbf-hairline)' }}
        >
          <div>
            <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pbf-ink-80)', margin: '0 0 18px' }}>
              Made by You
            </p>
            <h2 style={{ fontFamily: 'var(--pbf-font-display)', fontSize: 'clamp(40px, 4.5vw, 56px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--pbf-ink-100)', margin: 0 }}>
              Our <span style={{ color: 'var(--pbf-burgundy)', fontStyle: 'italic' }}>community</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--pbf-ink-66)', margin: '0 0 10px', maxWidth: 340, marginLeft: 'auto' }}>
              Real people making real clothes with our patterns.
            </p>
            <p style={{ fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic', fontSize: 15, color: 'var(--pbf-burgundy)', margin: 0 }}>
              Tag @sewingwithfabiana to be featured.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 md:grid-cols-12" style={{ gap: 20, rowGap: 40 }}>
          {communityPosts.map((post, i) => (
            <Tile key={post.handle} post={post} span={SPANS[i % SPANS.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
