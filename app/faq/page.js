import FAQItem from '@/components/FAQItem';
import { faqs } from '@/lib/data';

export const metadata = {
  title: 'FAQ',
  description:
    'Answers about ordering, payment, printing, sizing, and using Sewing with Fabiana digital PDF sewing patterns.',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return (
    <>
      <section style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '72px var(--pbf-gutter) 56px' }}>
        <h1
          className="pbf-script-title"
          style={{
            color: 'var(--pbf-ink-100)',
            fontSize: 'clamp(48px, 6.5vw, 96px)',
            fontWeight: 400,
            margin: 0, maxWidth: 900,
          }}
        >
          Frequently asked <span style={{ color: 'var(--pbf-burgundy)' }}>questions.</span>
        </h1>
      </section>

      <section style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '0 var(--pbf-gutter) 96px' }}>
        {faqs.map((sec, si) => (
          <div
            key={sec.category}
            className="grid grid-cols-1 md:grid-cols-[4fr_8fr]"
            style={{
              gap: 56,
              paddingTop: si === 0 ? 0 : 56,
              marginTop: si === 0 ? 0 : 56,
              borderTop: si === 0 ? 'none' : '1px solid var(--pbf-hairline)',
              alignItems: 'start',
            }}
          >
            <div className="md:sticky" style={{ top: 96 }}>
              <p style={{ fontFamily: 'var(--pbf-font-body)', fontSize: 11, letterSpacing: 'var(--pbf-tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--pbf-ink-44)', margin: '0 0 10px' }}>
                {String(si + 1).padStart(2, '0')}
              </p>
              <h2 style={{ fontFamily: 'var(--pbf-font-display)', color: 'var(--pbf-ink-100)', fontSize: 30, fontWeight: 400, lineHeight: 1.1, margin: 0, letterSpacing: '-0.01em' }}>
                {sec.category}
              </h2>
            </div>
            <div>
              {sec.questions.map((f, fi) => (
                <FAQItem key={fi} q={f.q} a={f.a} defaultOpen={si === 0 && fi === 0} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
