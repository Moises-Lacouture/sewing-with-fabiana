const STEPS = [
  { step: '01', title: 'Browse',     desc: 'Explore the collection and pick the pattern you love.' },
  { step: '02', title: 'Checkout',   desc: 'Pay with PayPal or any major card. No account needed.' },
  { step: '03', title: 'Download',   desc: 'Your PDF arrives in your inbox — A4, US Letter, and A0.' },
  { step: '04', title: 'Sew & wear', desc: 'Follow the step-by-step guide and free YouTube tutorial.' },
];

export default function HowToBuy() {
  return (
    <section style={{ borderBottom: '1px solid var(--pbf-hairline)' }}>
      <div style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '96px var(--pbf-gutter)' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]"
          style={{ alignItems: 'baseline', gap: 24, marginBottom: 64 }}
        >
          <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pbf-ink-80)', margin: 0 }}>
            Simple &amp; Secure
          </p>
          <h2
            style={{
              fontFamily: 'var(--pbf-font-display)',
              fontSize: 40, fontWeight: 400, lineHeight: 1.1,
              color: 'var(--pbf-ink-100)', margin: 0, textAlign: 'center',
              letterSpacing: '-0.01em',
            }}
          >
            How to buy a <span style={{ color: 'var(--pbf-burgundy)', fontStyle: 'italic' }}>pattern</span>
          </h2>
          <p style={{ fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--pbf-ink-55)', margin: 0, textAlign: 'right' }}>
            four steps
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {STEPS.map((s, idx) => (
            <div
              key={s.step}
              style={{
                padding: '8px 28px',
                borderLeft: idx === 0 ? 'none' : '1px solid var(--pbf-hairline)',
              }}
            >
              <p style={{ fontFamily: 'var(--pbf-font-display)', fontSize: 84, fontWeight: 400, lineHeight: 0.9, color: 'var(--pbf-ink-28)', margin: '0 0 18px', letterSpacing: '-0.04em' }}>
                {s.step}
              </p>
              <h3 style={{ fontFamily: 'var(--pbf-font-display)', fontSize: 22, fontWeight: 500, lineHeight: 1.2, color: 'var(--pbf-ink-100)', margin: '0 0 10px' }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 13.5, lineHeight: 1.7, color: 'var(--pbf-ink-66)', margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
