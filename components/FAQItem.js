'use client';

import { useState } from 'react';

export default function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid var(--pbf-hairline)' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: '100%', padding: '24px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: 'var(--pbf-font-display)', color: 'var(--pbf-ink-100)', fontSize: 21, fontWeight: 400, lineHeight: 1.3 }}>
          {q}
        </span>
        <span
          aria-hidden
          style={{
            color: 'var(--pbf-burgundy)', fontSize: 24, flexShrink: 0,
            fontFamily: 'var(--pbf-font-display)',
            display: 'inline-block', lineHeight: 1,
            transition: 'transform 300ms ease',
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-66)', fontSize: 15, lineHeight: 1.75, padding: '0 0 24px', margin: 0, maxWidth: 620 }}>
          {a}
        </p>
      )}
    </div>
  );
}
