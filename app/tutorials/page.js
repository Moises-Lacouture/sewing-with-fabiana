import { socialLinks } from '@/lib/data';

export const metadata = {
  title: 'Tutorials',
  description:
    'Sew along on YouTube — comprehensive video tutorials for every Sewing with Fabiana pattern, free to follow at home.',
  alternates: { canonical: '/tutorials' },
};

const YouTubeGlyph = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function TutorialsPage() {
  return (
    <section style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '72px var(--pbf-gutter) 96px' }}>
      <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr]" style={{ gap: 64, alignItems: 'center' }}>
        <div>
          <h1
            className="pbf-script-title"
            style={{
              color: 'var(--pbf-ink-100)',
              fontSize: 'clamp(48px, 6vw, 88px)',
              fontWeight: 400,
              margin: '0 0 28px',
            }}
          >
            Sew along on <span style={{ color: 'var(--pbf-burgundy)' }}>YouTube.</span>
          </h1>
          <p style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-66)', fontSize: 16.5, lineHeight: 1.8, margin: '0 0 36px', maxWidth: 460 }}>
            Every pattern comes with a comprehensive video tutorial on my channel — free to follow along, start to finish. Watch a full make before you buy, or stitch in real time beside me.
          </p>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              fontFamily: 'var(--pbf-font-body)', fontWeight: 600,
              textTransform: 'uppercase', textDecoration: 'none',
              fontSize: 13, letterSpacing: 'var(--pbf-tracking-button)',
              color: '#FFFFFF', backgroundColor: '#FF0000',
              border: 'none', borderRadius: 100, padding: '14px 28px',
              transition: 'background-color 250ms ease',
            }}
            className="hover:!bg-[#C00000]"
          >
            <YouTubeGlyph /> Watch on YouTube
          </a>
        </div>

        <a
          href={socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', position: 'relative', borderRadius: 'var(--pbf-radius-lg)', overflow: 'hidden', aspectRatio: '4/3' }}
        >
          <img src="/images/alessandra-3.jpg" alt="Alessandra sewing tutorial" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <span aria-hidden style={{ position: 'absolute', inset: 0, background: 'var(--pbf-photo-scrim)' }} />
          <span
            aria-hidden
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: 76, height: 76, borderRadius: 100,
              background: '#E8E4DFee', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <span style={{ width: 0, height: 0, marginLeft: 5, borderTop: '13px solid transparent', borderBottom: '13px solid transparent', borderLeft: '21px solid var(--pbf-charcoal)' }} />
          </span>
          <span
            style={{
              position: 'absolute', bottom: 18, left: 20,
              fontFamily: 'var(--pbf-font-body)', fontSize: 11,
              letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase',
              color: 'var(--pbf-cream)',
            }}
          >
            The Alessandra · full make
          </span>
        </a>
      </div>
    </section>
  );
}
