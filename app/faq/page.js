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
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#2D2D2D88',
            fontSize: 12,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          Help
        </p>
        <h1
          className="pbf-script-title"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2D2D2D',
            fontSize: 64,
            fontWeight: 500,
            lineHeight: 1.3,
            marginBottom: 14,
          }}
        >
          Frequently asked <span style={{ color: '#6B2C32' }}>questions</span>
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#2D2D2D77',
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: 420,
            margin: '0 auto',
          }}
        >
          Everything you need to know about our patterns, ordering, and sewing.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-24">
        {faqs.map((section, si) => (
          <div key={si} style={{ marginBottom: si < faqs.length - 1 ? 48 : 0 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#2D2D2D',
                fontSize: 22,
                fontWeight: 500,
                marginBottom: 8,
                paddingBottom: 16,
                borderBottom: '1px solid #2D2D2D15',
              }}
            >
              {section.category}
            </h2>
            {section.questions.map((faq, fi) => (
              <FAQItem
                key={fi}
                q={faq.q}
                a={faq.a}
                defaultOpen={si === 0 && fi === 0}
              />
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
