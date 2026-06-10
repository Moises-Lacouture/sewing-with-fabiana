import Link from 'next/link';
import { socialLinks, supportEmail } from '@/lib/data';

const colTitle = {
  fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-100)',
  fontSize: 11, fontWeight: 600, letterSpacing: 'var(--pbf-tracking-eyebrow)',
  textTransform: 'uppercase', margin: '0 0 16px',
};
const linkStyle = {
  fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-55)',
  fontSize: 13, textDecoration: 'none', transition: 'color 200ms ease',
};

function Column({ title, items }) {
  return (
    <div>
      <h5 style={colTitle}>{title}</h5>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it, i) =>
          it.href ? (
            <a key={i} href={it.href} target="_blank" rel="noopener noreferrer" style={linkStyle} className="hover:text-[#2D2D2D]">
              {it.label}
            </a>
          ) : (
            <Link key={i} href={it.to} style={linkStyle} className="hover:text-[#2D2D2D]">
              {it.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--pbf-hairline)', background: 'var(--pbf-cream)' }}>
      <div style={{ maxWidth: 'var(--pbf-max-w-page)', margin: '0 auto', padding: '72px var(--pbf-gutter) 40px' }}>
        <div
          className="grid grid-cols-2 md:grid-cols-[1.4fr_repeat(4,1fr)]"
          style={{ gap: 48, alignItems: 'start' }}
        >
          <div className="col-span-2 md:col-span-1">
            <img src="/images/logo.png" alt="Sewing with Fabiana" style={{ height: 40, width: 'auto', display: 'block', marginBottom: 18 }} />
            <p style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-66)', fontSize: 13, lineHeight: 1.7, maxWidth: 280, margin: 0 }}>
              Easy-to-follow PDF sewing patterns — designed in Miami, sewn at home.
            </p>
          </div>

          <Column title="Shop" items={[
            { to: '/patterns', label: 'All patterns' },
            { to: '/patterns', label: 'Alessandra' },
          ]} />
          <Column title="Info" items={[
            { to: '/about',     label: 'About'     },
            { to: '/tutorials', label: 'Tutorials' },
            { to: '/faq',       label: 'FAQ'       },
          ]} />
          <Column title="Legal" items={[
            { to: '/terms',   label: 'Terms of service' },
            { to: '/privacy', label: 'Privacy policy'   },
            { to: '/refund',  label: 'Refund policy'    },
          ]} />
          <Column title="Connect" items={[
            { href: socialLinks.instagram, label: 'Instagram' },
            { href: socialLinks.youtube,   label: 'YouTube'   },
            { href: `mailto:${supportEmail}`, label: 'Email'  },
          ]} />
        </div>

        <div
          style={{
            borderTop: '1px solid var(--pbf-hairline)', marginTop: 56, paddingTop: 24,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap',
          }}
        >
          <p style={{ fontFamily: 'var(--pbf-font-body)', color: 'var(--pbf-ink-33)', fontSize: 12, margin: 0 }}>
            © 2026 Sewing With Fabiana · All rights reserved
          </p>
          <p style={{ fontFamily: 'var(--pbf-font-display)', fontStyle: 'italic', color: 'var(--pbf-ink-44)', fontSize: 13, margin: 0 }}>
            Made with love in Miami.
          </p>
        </div>
      </div>
    </footer>
  );
}
