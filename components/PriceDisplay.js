// Price display, with or without a sale. Shared so the catalog card and the
// product page can never drift apart on how a discount is shown.
//
// `size` scales the whole block: the product page needs a larger figure than a
// catalog card, but the proportions between the three parts stay the same.

export function SaleBadge({ percentOff, style }) {
  return (
    <span
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: '#6B2C32',
        color: '#E8E4DF',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '4px 10px',
        borderRadius: 100,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {percentOff}% off
    </span>
  );
}

export default function PriceDisplay({ pattern, size = 'sm' }) {
  const big = size === 'lg';
  const { sale } = pattern;

  if (!sale) {
    return (
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          color: big ? '#2D2D2D' : '#6B2C32',
          fontSize: big ? 26 : 18,
          fontWeight: 500,
          margin: 0,
        }}
      >
        {pattern.priceLabel}
      </p>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: big ? 12 : 8, flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#6B2C32',
            fontSize: big ? 32 : 19,
            fontWeight: 500,
          }}
        >
          {sale.salePriceLabel}
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2D2D2D66',
            fontSize: big ? 20 : 15,
            fontWeight: 400,
            textDecoration: 'line-through',
            // Keep the strike on the brand ink rather than the browser default,
            // which renders it at full black against the cream.
            textDecorationColor: '#2D2D2D66',
          }}
        >
          {pattern.priceLabel}
        </span>
        <SaleBadge percentOff={sale.percentOff} style={{ alignSelf: 'center' }} />
      </div>

      {sale.note && (
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#2D2D2D77',
            fontSize: big ? 12 : 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
            margin: big ? '10px 0 0' : '6px 0 0',
          }}
        >
          {sale.note}
        </p>
      )}
    </div>
  );
}
