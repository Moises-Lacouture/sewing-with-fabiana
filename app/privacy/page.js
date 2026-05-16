import { supportEmail } from '@/lib/data';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>Legal</p>
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 38, fontWeight: 500, lineHeight: 1.3, marginBottom: 12 }}>Privacy Policy</h1>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D66', fontSize: 13, marginBottom: 48 }}>Last updated: May 2026</p>
      <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D99', fontSize: 15, lineHeight: 1.8 }} className="space-y-8">

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>1. Data Controller</h2>
          <p>Sewing with Fabiana, operated by Fabiana, based in Colombia. Contact: <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>. We are the data controller for personal data collected through sewingwithfabiana.com. For data collected during the checkout and payment process, <a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#6B2C32', textDecoration: 'underline' }}>Lemon Squeezy</a> acts as an independent data controller.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>2. What We Collect</h2>
          <p className="mb-4">We collect minimal personal data, and only what is necessary to process your purchase and deliver your digital products.</p>
          <p className="mb-2"><span style={{ color: '#2D2D2D' }}>Data collected during checkout (processed by Lemon Squeezy):</span></p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Country (for tax calculation)</li>
            <li>Payment information (processed securely by Lemon Squeezy — we never see or store your card details)</li>
          </ul>
          <p className="mb-2"><span style={{ color: '#2D2D2D' }}>Data collected by our website:</span></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Basic server logs (IP address, browser type, pages visited) — collected automatically by our hosting provider, Cloudflare, for security and performance purposes</li>
          </ul>
          <p className="mt-4">We do not collect phone numbers, physical addresses, or any biometric data. We do not sell, rent, or trade your personal data to third parties.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>3. Legal Basis for Processing (GDPR)</h2>
          <p className="mb-4">Under the EU General Data Protection Regulation (GDPR), we process your personal data on the following legal bases:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span style={{ color: '#2D2D2D' }}>Contract performance</span> (Art. 6(1)(b)) — to fulfill your purchase and deliver your pattern files</li>
            <li><span style={{ color: '#2D2D2D' }}>Legal obligation</span> (Art. 6(1)(c)) — to comply with tax and accounting requirements</li>
            <li><span style={{ color: '#2D2D2D' }}>Legitimate interest</span> (Art. 6(1)(f)) — to maintain website security and prevent fraud</li>
          </ul>
          <p className="mt-4">We do not process your data for marketing purposes unless you explicitly opt in.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>4. Third-Party Services</h2>
          <p className="mb-4">We share data with the following services, each of which has its own privacy policy:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span style={{ color: '#2D2D2D' }}>Lemon Squeezy</span> — payment processing, tax collection, and digital product delivery (<a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#6B2C32', textDecoration: 'underline' }}>Privacy Policy</a>)</li>
            <li><span style={{ color: '#2D2D2D' }}>Cloudflare</span> — website hosting, CDN, and security (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: '#6B2C32', textDecoration: 'underline' }}>Privacy Policy</a>)</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>5. International Data Transfers</h2>
          <p>Your data may be transferred to and processed in the United States (where Lemon Squeezy and Cloudflare operate). Lemon Squeezy is a US-incorporated company owned by Stripe, Inc. These transfers are necessary to fulfill your purchase. Where required by law, appropriate safeguards are in place to protect your data.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>6. Cookies & Tracking</h2>
          <p className="mb-4">Our website uses only <span style={{ color: '#2D2D2D' }}>strictly necessary cookies</span> set by Cloudflare for security and performance purposes (such as DDoS protection and bot management). These cookies do not track your personal browsing activity and do not require your consent under the ePrivacy Directive.</p>
          <p>We do not use advertising cookies, analytics cookies, or any third-party tracking pixels. We do not use Google Analytics or any similar service.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>7. Data Retention</h2>
          <p>We retain purchase-related data (name, email, order details) for as long as necessary to comply with legal and tax obligations (typically 5-7 years depending on jurisdiction). Cloudflare server logs are retained according to <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: '#6B2C32', textDecoration: 'underline' }}>their retention policy</a>.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>8. Your Rights</h2>
          <p className="mb-4">Depending on your location, you have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span style={{ color: '#2D2D2D' }}>Access</span> — request a copy of the data we hold about you</li>
            <li><span style={{ color: '#2D2D2D' }}>Rectification</span> — request correction of inaccurate data</li>
            <li><span style={{ color: '#2D2D2D' }}>Erasure</span> — request deletion of your personal data</li>
            <li><span style={{ color: '#2D2D2D' }}>Portability</span> — request your data in a structured, machine-readable format</li>
            <li><span style={{ color: '#2D2D2D' }}>Object/Restrict</span> — object to or restrict certain processing of your data</li>
          </ul>
          <p className="mt-4">To exercise any of these rights, email us at <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>. We will respond within 15 days.</p>
          <p className="mt-4"><span style={{ color: '#2D2D2D' }}>EU/UK residents:</span> You have the right to lodge a complaint with your local data protection authority.</p>
          <p className="mt-4"><span style={{ color: '#2D2D2D' }}>California residents:</span> Under the CCPA/CPRA, you have the right to know what data we collect, request deletion, and opt out of the sale of personal information. We do not sell your personal information.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>{"9. Children's Privacy"}</h2>
          <p>Our website and products are not directed at children under the age of 13 (or 16 in the EU). We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will take steps to delete it.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this page periodically.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>11. Contact</h2>
          <p>For any questions about this Privacy Policy or to exercise your data rights, contact us at <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>.</p>
        </div>

      </div>
    </section>
  );
}
