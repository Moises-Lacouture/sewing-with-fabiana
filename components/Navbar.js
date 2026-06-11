'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: 'Patterns', href: '/patterns' },
    { label: 'About', href: '/about' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'FAQ', href: '/faq' },
  ];

  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <nav
      style={{ backgroundColor: '#E8E4DFee', backdropFilter: 'blur(20px)', borderBottom: '1px solid #2D2D2D10' }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Sewing with Fabiana"
            style={{ height: 40, width: 'auto' }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: isActive(item.href) ? '#2D2D2D' : '#2D2D2D99',
                fontSize: 13,
                fontWeight: isActive(item.href) ? 600 : 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
              className="hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ color: '#2D2D2D', background: 'none', border: 'none', cursor: 'pointer' }}
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
        <div style={{ backgroundColor: '#E8E4DF', borderTop: '1px solid #2D2D2D10' }} className="md:hidden px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#2D2D2D',
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
