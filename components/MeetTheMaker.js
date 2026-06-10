import Link from 'next/link';
import { socialLinks } from '@/lib/data';

const outlineBurgundy = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--pbf-font-body)', fontWeight: 500,
  fontSize: 12, letterSpacing: 'var(--pbf-tracking-button)',
  textTransform: 'uppercase', textDecoration: 'none',
  border: '1.5px solid #6B2C3233', color: '#6B2C32',
  backgroundColor: 'transparent', borderRadius: 100, padding: '10px 24px',
  transition: 'background-color 250ms ease',
};

const outlineCharcoal = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--pbf-font-body)', fontWeight: 500,
  fontSize: 12, letterSpacing: 'var(--pbf-tracking-button)',
  textTransform: 'uppercase', textDecoration: 'none',
  border: '1.5px solid #2D2D2D18', color: '#2D2D2D8c',
  backgroundColor: 'transparent', borderRadius: 100, padding: '10px 24px',
  transition: 'border-color 250ms ease, color 250ms ease',
};

const InstagramGlyph = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const YouTubeGlyph = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function MeetTheMaker() {
  return (
    <section style={{ borderBottom: '1px solid var(--pbf-hairline)', background: 'var(--pbf-cream)' }}>
      <div style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '96px var(--pbf-gutter)' }}>
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr]" style={{ gap: 72, alignItems: 'stretch' }}>
          <div>
            <div style={{ borderRadius: 'var(--pbf-radius-md)', overflow: 'hidden', aspectRatio: '4/5', marginBottom: 16 }}>
              <img src="/images/fabiana-portrait.jpg" alt="Fabiana, fashion designer" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
              <span style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pbf-ink-55)' }}>
                Portrait · Miami, 2026
              </span>
              <span style={{ fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--pbf-burgundy)' }}>F.</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pbf-ink-80)', margin: '0 0 28px' }}>
                Meet the Maker
              </p>
              <h2 style={{ fontFamily: 'var(--pbf-font-display)', fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--pbf-ink-100)', margin: '0 0 40px' }}>
                Hi, I&rsquo;m{' '}
                <span style={{ color: 'var(--pbf-burgundy)', fontStyle: 'italic', fontWeight: 500 }}>Fabiana.</span>
              </h2>

              <blockquote style={{ margin: '0 0 36px', borderLeft: '2px solid var(--pbf-burgundy)', paddingLeft: 24 }}>
                <p style={{ fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic', fontSize: 24, lineHeight: 1.35, fontWeight: 400, color: 'var(--pbf-ink-90)', margin: 0, letterSpacing: '-0.005em' }}>
                  &ldquo;I create sewing patterns designed to make you fall in love with the process.&rdquo;
                </p>
              </blockquote>

              <div style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--pbf-ink-66)', display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 520 }}>
                <p style={{ margin: 0 }}>
                  Starting with my very first one: the Alessandra Dress & Top. So happy you're here!
                </p>
                <p style={{ margin: 0 }}>So happy you&rsquo;re here.</p>
              </div>
            </div>

            <div
              className="flex-col md:flex-row"
              style={{ marginTop: 56, paddingTop: 28, borderTop: '1px solid var(--pbf-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}
            >
              <p style={{ fontFamily: 'var(--pbf-font-script)', fontSize: 44, lineHeight: 1, margin: 0, color: 'var(--pbf-burgundy)' }}>
                With love, Fabiana
                <span style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 18, marginLeft: 6 }}>🤍</span>
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link href="/about" style={outlineBurgundy} className="hover:!bg-[#ffffff66]">Read my story</Link>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={outlineCharcoal} className="hover:!border-[#2D2D2D55] hover:!text-[#2D2D2D]">
                  <InstagramGlyph /> Instagram
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={outlineCharcoal} className="hover:!border-[#2D2D2D55] hover:!text-[#2D2D2D]">
                  <YouTubeGlyph /> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
