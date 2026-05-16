'use client';

import { useState } from 'react';

export default function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ borderBottom: '1px solid #2D2D2D10' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D', fontSize: 15, fontWeight: 500, transition: 'color 0.2s ease' }}>
          {q}
        </span>
        <span
          style={{
            color: '#2D2D2D66',
            fontSize: 18,
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
            display: 'inline-block',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 14, lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>
          {a}
        </p>
      )}
    </div>
  );
}
