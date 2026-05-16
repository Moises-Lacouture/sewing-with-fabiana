import { supportEmail } from '@/lib/data';

export const metadata = { title: 'Refund Policy' };

export default function RefundPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>Legal</p>
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 38, fontWeight: 500, lineHeight: 1.3, marginBottom: 12 }}>Refund Policy</h1>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D66', fontSize: 13, marginBottom: 48 }}>Last updated: May 2026</p>
      <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D99', fontSize: 15, lineHeight: 1.8 }} className="space-y-8">

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>Digital Products</h2>
          <p>All products sold on sewingwithfabiana.com are digital downloads (PDF sewing patterns). Due to the nature of digital products, <span style={{ color: '#2D2D2D' }}>all sales are final once the download link has been accessed or the file has been downloaded</span>.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>EU/UK Consumers — Right of Withdrawal</h2>
          <p className="mb-4">Under the EU Consumer Rights Directive and UK Consumer Contracts Regulations, you have a 14-day right to withdraw from your purchase and receive a full refund — <span style={{ color: '#2D2D2D' }}>unless you have already accessed or begun downloading your pattern files</span>.</p>
          <p className="mb-4">At the time of purchase, you are asked to give your express consent to immediate delivery and to acknowledge that you lose your right of withdrawal once the download begins. This is in accordance with Article 16(m) of the EU Consumer Rights Directive.</p>
          <p><span style={{ color: '#2D2D2D' }}>If you have NOT yet downloaded your files</span>, you may request a full refund within 14 days of purchase by contacting us at <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>When We Will Issue a Refund</h2>
          <p className="mb-4">Regardless of whether you have downloaded the files, we will always provide a replacement or refund in the following situations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span style={{ color: '#2D2D2D' }}>Corrupted or faulty files</span> — the PDF files are damaged and cannot be opened, and we are unable to provide a working replacement</li>
            <li><span style={{ color: '#2D2D2D' }}>File delivery failure</span> — you did not receive your pattern files after purchase and we cannot resolve the issue</li>
            <li><span style={{ color: '#2D2D2D' }}>Product not as described</span> — the pattern files are materially different from the product description on our website</li>
            <li><span style={{ color: '#2D2D2D' }}>Duplicate purchase</span> — you accidentally purchased the same pattern twice</li>
          </ul>
          <p className="mt-4">These rights apply to all customers worldwide, including under the UK Consumer Rights Act 2015 and the Australian Consumer Law, which guarantee that digital content must be of satisfactory quality, fit for purpose, and as described.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>What Is Not Eligible for a Refund</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Change of mind after downloading the files</li>
            <li>Difficulty level or skill mismatch</li>
            <li>Dissatisfaction with the final sewn result (outcomes depend on individual fabric choices, skill level, and sewing technique)</li>
            <li>Failure to read the product description before purchasing</li>
            <li>Printer or software compatibility issues (all patterns are provided in standard PDF format in A4, US Letter, and A0 sizes)</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>How to Request a Refund</h2>
          <p className="mb-4">Contact us at <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a> within <span style={{ color: '#2D2D2D' }}>14 days</span> of your purchase. Please include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your order number</li>
            <li>The email address used at checkout</li>
            <li>A description of the issue</li>
          </ul>
          <p className="mt-4">We will review your request and respond within 48 hours.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>Processing</h2>
          <p>Approved refunds will be processed through Lemon Squeezy (our Merchant of Record) to the original payment method. Refunds may take 5-10 business days to appear on your statement, depending on your bank or payment provider.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>Dispute Resolution</h2>
          <p>If you are an EU consumer and are unsatisfied with our response, you may submit a complaint through the EU Online Dispute Resolution platform: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#6B2C32', textDecoration: 'underline' }}>https://ec.europa.eu/consumers/odr/</a></p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>Contact</h2>
          <p>For any questions about our refund policy, please reach out to <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>.</p>
        </div>

      </div>
    </section>
  );
}
