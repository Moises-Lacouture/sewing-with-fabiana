import { socialLinks, supportEmail } from '@/lib/data';

const onDarkSolid = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--pbf-font-body)', fontWeight: 500,
  fontSize: 12, letterSpacing: 'var(--pbf-tracking-button)',
  textTransform: 'uppercase', textDecoration: 'none',
  backgroundColor: '#E8E4DF', color: '#2D2D2D',
  border: 'none', borderRadius: 100, padding: '10px 24px',
  transition: 'background-color 250ms ease',
};
const onDarkOutline = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--pbf-font-body)', fontWeight: 500,
  fontSize: 12, letterSpacing: 'var(--pbf-tracking-button)',
  textTransform: 'uppercase', textDecoration: 'none',
  border: '1.5px solid #E8E4DF33', color: '#E8E4DFcc',
  backgroundColor: 'transparent', borderRadius: 100, padding: '10px 24px',
  transition: 'border-color 250ms ease, background-color 250ms ease',
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

export default function DarkCTA() {
  return (
    <section>
      <div style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '96px var(--pbf-gutter)' }}>
        <div
          style={{
            backgroundColor: 'var(--pbf-charcoal)',
            borderRadius: 'var(--pbf-radius-lg)',
            padding: '88px 56px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: 'absolute', right: -40, bottom: -120,
              fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic',
              fontSize: 540, lineHeight: 1, fontWeight: 400,
              color: '#E8E4DF0a', pointerEvents: 'none', userSelect: 'none',
            }}
          >
            F
          </span>

          <div
            className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]"
            style={{ gap: 64, alignItems: 'center', position: 'relative' }}
          >
            <div>
              <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pbf-cream-55)', margin: '0 0 24px' }}>
                Join the community · 60k+ sewists
              </p>
              <h2 style={{ fontFamily: 'var(--pbf-font-display)', fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--pbf-cream)', margin: 0 }}>
                Follow <span style={{ fontStyle: 'italic', color: 'var(--pbf-cream)' }}>along.</span>
              </h2>
              <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--pbf-cream-55)', margin: '24px 0 0', maxWidth: 460 }}>
                Tutorials, behind-the-scenes from the studio, and an evolving feed of what the community is sewing. New patterns drop here first.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={onDarkSolid} className="hover:!bg-white">
                <InstagramGlyph /> Follow on Instagram
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={onDarkOutline} className="hover:!bg-white/10 hover:!border-[#E8E4DF66]">
                <YouTubeGlyph /> Subscribe on YouTube
              </a>
              <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--pbf-cream-33)', margin: '10px 0 0', textAlign: 'center' }}>
                Or write me ·{' '}
                <a href={`mailto:${supportEmail}`} style={{ color: 'var(--pbf-cream-55)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  email
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
