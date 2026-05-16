import { supportEmail } from '@/lib/data';

export const metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>Legal</p>
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 38, fontWeight: 500, lineHeight: 1.3, marginBottom: 12 }}>Terms of Service</h1>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D66', fontSize: 13, marginBottom: 48 }}>Last updated: May 2026</p>
      <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D99', fontSize: 15, lineHeight: 1.8 }} className="space-y-8">

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>1. About Us</h2>
          <p>This website (sewingwithfabiana.com) is operated by Fabiana, a fashion designer based in Colombia. Contact: <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>. By visiting our site and/or purchasing a product, you agree to be bound by these Terms of Service.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>2. Products & Delivery</h2>
          <p className="mb-4">All products sold on this website are <span style={{ color: '#2D2D2D' }}>digital PDF sewing patterns</span>. No physical products are shipped. Upon purchase, you will receive your pattern files via email in A4, US Letter, and A0 formats.</p>
          <p className="mb-4"><span style={{ color: '#2D2D2D' }}>File format:</span> PDF. Compatible with Adobe Acrobat Reader, Preview (macOS), and most standard PDF viewers. Printable on standard home printers (A4 or US Letter) or at a copy center (A0 format).</p>
          <p>All transactions are processed by <span style={{ color: '#2D2D2D' }}>Lemon Squeezy</span> (Lemon Squeezy, LLC), which acts as the Merchant of Record for all purchases. This means your purchase contract is with Lemon Squeezy, and the digital pattern is licensed to you by Sewing with Fabiana.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>3. Pricing & Taxes</h2>
          <p>All prices are displayed in US Dollars (USD). Applicable taxes (VAT, GST, sales tax) are calculated and collected at checkout by Lemon Squeezy based on your location. The final price including taxes will be shown before you confirm your purchase.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>4. License & Permitted Use</h2>
          <p className="mb-4">When you purchase a pattern, you are granted a <span style={{ color: '#2D2D2D' }}>personal, non-transferable, non-exclusive license</span> to use the pattern for your own personal sewing projects.</p>
          <p className="mb-4"><span style={{ color: '#2D2D2D' }}>You may not:</span></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Redistribute, share, resell, or give away the pattern files in any form (digital or printed)</li>
            <li>Reproduce, copy, or modify the pattern files for distribution</li>
            <li>Use the pattern files for commercial production or mass manufacturing</li>
            <li>Use the patterns in paid sewing classes or workshops without a separate written license</li>
            <li>Claim the pattern designs as your own</li>
          </ul>
          <p className="mt-4">Violation of these terms may result in termination of your license and legal action.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>5. Right of Withdrawal (EU/UK Consumers)</h2>
          <p className="mb-4">Under the EU Consumer Rights Directive (2011/83/EU) and UK Consumer Contracts Regulations 2013, you normally have a 14-day right to withdraw from a distance purchase without giving a reason.</p>
          <p className="mb-4">However, for digital content that is not supplied on a tangible medium (such as our PDF sewing patterns), <span style={{ color: '#2D2D2D' }}>you lose your right of withdrawal once the download has begun</span>, provided that:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You gave your prior express consent to begin the download immediately</li>
            <li>You acknowledged that you would lose your right of withdrawal once the download began</li>
          </ul>
          <p className="mt-4">This consent is obtained at the time of purchase. A confirmation of your consent will be included in your order confirmation email.</p>
          <p className="mt-4">If you have not yet accessed or downloaded your files, you may request a full refund within 14 days of purchase by contacting us at <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>6. Refunds</h2>
          <p>Due to the digital nature of our products, all sales are final once the pattern files have been downloaded or the download link has been accessed. We will always provide a replacement or refund for corrupted or faulty files. For full details, please see our <a href="/refund" style={{ color: '#6B2C32', textDecoration: 'underline' }}>Refund Policy</a>.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>7. Intellectual Property</h2>
          <p>All content on this website — including text, images, logos, patterns, graphics, and design — is the property of Sewing with Fabiana and is protected by copyright and intellectual property laws. You may not use, reproduce, or distribute any content from this website without our express written permission.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>8. Payments</h2>
          <p>All payments are processed securely through Lemon Squeezy. We accept major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. You do not need to create an account to make a purchase.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>9. Product Quality (UK/Australia)</h2>
          <p>Under the UK Consumer Rights Act 2015 and the Australian Consumer Law, digital content must be of satisfactory quality, fit for a particular purpose, and as described. If you receive a pattern file that is corrupted, incomplete, or does not match the product description, please contact us and we will provide a replacement or, if we cannot resolve the issue, a full refund.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, Sewing with Fabiana shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability shall not exceed the amount you paid for the product in question. Nothing in these Terms excludes or limits liability for death, personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>11. Dispute Resolution</h2>
          <p className="mb-4">If you are an EU consumer, you may submit a complaint through the EU Online Dispute Resolution platform: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#6B2C32', textDecoration: 'underline' }}>https://ec.europa.eu/consumers/odr/</a></p>
          <p>For all other inquiries, please contact us directly at <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>. We will do our best to resolve any dispute within 30 days.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>12. Governing Law</h2>
          <p>These Terms are governed by the laws of Colombia. If you are an EU, UK, or Australian consumer, nothing in these Terms affects your rights under the mandatory consumer protection laws of your country of residence.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>13. Changes to Terms</h2>
          <p>We reserve the right to update these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the site after any changes constitutes your acceptance of the new terms.</p>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>14. Contact</h2>
          <p>If you have any questions, please contact us at <a href={`mailto:${supportEmail}`} style={{ color: '#6B2C32', textDecoration: 'underline' }}>{supportEmail}</a>.</p>
        </div>

      </div>
    </section>
  );
}
