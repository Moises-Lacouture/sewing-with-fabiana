export const metadata = {
  title: 'About',
  description:
    'Meet Fabiana — fashion designer and creator of the Rectangle Series. Learn the story behind Sewing with Fabiana and the patterns designed to make you fall in love with sewing.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '72px var(--pbf-gutter) 56px' }}>
        <h1
          className="pbf-script-title"
          style={{
            color: 'var(--pbf-ink-100)',
            fontSize: 'clamp(56px, 8vw, 116px)',
            fontWeight: 400,
            margin: 0, maxWidth: 900,
          }}
        >
          The story <span style={{ color: 'var(--pbf-burgundy)' }}>behind me.</span>
        </h1>
      </section>

      <section style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '0 var(--pbf-gutter) 80px' }}>
        <div style={{ borderRadius: 'var(--pbf-radius-lg)', overflow: 'hidden', aspectRatio: '16/7' }}>
          <img src="/images/hero-1.jpg" alt="Fabiana sewing at her workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--pbf-hairline)', background: 'var(--pbf-cream)' }}>
        <div style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '88px var(--pbf-gutter)' }}>
          <div className="grid grid-cols-1 md:grid-cols-[4fr_7fr]" style={{ gap: 72, alignItems: 'start' }}>
            <div className="md:sticky" style={{ top: 96 }}>
              <h2 style={{ fontFamily: 'var(--pbf-font-display)', color: 'var(--pbf-ink-100)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em', margin: 0 }}>
                Hi, I&rsquo;m <span style={{ color: 'var(--pbf-burgundy)', fontStyle: 'italic', fontWeight: 500 }}>Fabiana.</span>
              </h2>
            </div>

            <div style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-66)', fontSize: 16.5, lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 600 }}>
              <p style={{ margin: 0 }}>
                You might know me from my &ldquo;Rectangle Series&rdquo;, where I show you how to make real clothes using just simple rectangles of fabric.
              </p>

              <blockquote style={{ margin: '12px 0', borderLeft: '2px solid var(--pbf-burgundy)', paddingLeft: 28 }}>
                <p style={{ fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic', fontSize: 28, lineHeight: 1.3, color: 'var(--pbf-ink-90)', margin: 0, letterSpacing: '-0.005em' }}>
                  &ldquo;I started sewing one month before fashion school began, and I never looked back.&rdquo;
                </p>
              </blockquote>

              <p style={{ margin: 0 }}>
                I&rsquo;m a fashion designer. And I almost wasn&rsquo;t. I was about to start business school (even with a scholarship), when I made the decision to follow what I actually wanted: design, like my mom.
              </p>
              <p style={{ margin: 0 }}>
                I truly believe sewing can be joyful, creative, and way easier than people think — and I hope this little corner of the internet makes you feel that way too.
              </p>

              <p style={{ fontFamily: 'var(--pbf-font-script)', color: 'var(--pbf-burgundy)', fontSize: 48, lineHeight: 1, margin: '12px 0 0' }}>
                With love, Fabiana <span style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 20 }}>🤍</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '88px var(--pbf-gutter) 96px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
          <div style={{ borderRadius: 'var(--pbf-radius-md)', overflow: 'hidden', aspectRatio: '4/5' }}>
            <img src="/images/about-1.jpg" alt="Fabric store with rolls of colorful fabric" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: 'var(--pbf-radius-md)', overflow: 'hidden', aspectRatio: '4/5' }}>
            <img src="/images/about-2.jpg" alt="Fabiana draping fabric on a dress form" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>
    </>
  );
}
