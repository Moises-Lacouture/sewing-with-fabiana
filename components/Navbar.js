'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const LINKS = [
  { href: '/patterns',  label: 'Patterns'  },
  { href: '/about',     label: 'About'     },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/faq',       label: 'FAQ'       },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href));

  const linkStyle = (active) => ({
    fontFamily: "var(--pbf-font-body)",
    color: active ? 'var(--pbf-ink-100)' : 'var(--pbf-ink-55)',
    fontSize: 13,
    fontWeight: active ? 600 : 500,
    letterSpacing: 'var(--pbf-tracking-nav)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 200ms ease',
  });

  return (
    <nav
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: '#E8E4DFee',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--pbf-hairline)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--pbf-max-w-page)',
          margin: '0 auto',
          padding: '18px var(--pbf-gutter)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Link href="/" aria-label="Home" onClick={() => setMenuOpen(false)} style={{ display: 'inline-flex' }}>
          <img src="/images/logo.png" alt="Sewing with Fabiana" style={{ height: 40, width: 'auto', display: 'block' }} />
        </Link>

        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 32 }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={linkStyle(isActive(l.href))}>
              {l.label}
            </Link>
          ))}
          <span style={{ width: 1, height: 18, background: 'var(--pbf-ink-15)' }} />
          <Link
            href="/patterns"
            style={{
              fontFamily: "var(--pbf-font-body)",
              color: 'var(--pbf-burgundy)',
              fontSize: 13, fontWeight: 600,
              letterSpacing: 'var(--pbf-tracking-nav)',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Shop
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden"
          style={{ color: '#2D2D2D', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="17" y2="17" />
                <line x1="17" y1="5" x2="5" y2="17" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#E8E4DF', borderTop: '1px solid var(--pbf-hairline)', padding: '20px var(--pbf-gutter)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--pbf-font-body)",
                  color: 'var(--pbf-ink-100)', fontSize: 15, fontWeight: 500,
                  letterSpacing: 'var(--pbf-tracking-nav)', textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/patterns"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--pbf-font-body)",
                color: 'var(--pbf-burgundy)', fontSize: 15, fontWeight: 600,
                letterSpacing: 'var(--pbf-tracking-nav)', textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Shop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
