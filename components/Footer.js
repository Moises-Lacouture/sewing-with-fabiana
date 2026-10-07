import Link from 'next/link';
import { socialLinks, supportEmail } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #2D2D2D10' }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/images/logo.png"
                alt="Sewing with Fabiana"
                style={{ height: 36, width: 'auto' }}
              />
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, lineHeight: 1.6, maxWidth: 260 }}>
              Easy-to-follow sewing patterns with step-by-step instructions for every skill level.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
            <div>
              <h5 style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Shop</h5>
              <div className="flex flex-col gap-2">
                <Link href="/patterns" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">All Patterns</Link>
                <Link href="/patterns/alessandra" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">Alessandra</Link>
              </div>
            </div>
            <div>
              <h5 style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Info</h5>
              <div className="flex flex-col gap-2">
                <Link href="/about" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">About</Link>
                <Link href="/faq" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">FAQ</Link>
                <Link href="/tutorials" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">Tutorials</Link>
              </div>
            </div>
            <div>
              <h5 style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Legal</h5>
              <div className="flex flex-col gap-2">
                <Link href="/terms" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">Terms of Service</Link>
                <Link href="/privacy" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
                <Link href="/refund" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">Refund Policy</Link>
              </div>
            </div>
            <div>
              <h5 style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Connect</h5>
              <div className="flex flex-col gap-2">
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">Instagram</a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">YouTube</a>
                <a href={`mailto:${supportEmail}`} style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D55', fontSize: 13, textDecoration: 'none' }} className="hover:text-gray-700 transition-colors">Email</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2D2D2D10', marginTop: 40, paddingTop: 24 }} className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D33', fontSize: 12 }}>© 2026 Sewing With Fabiana. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D33', fontSize: 12, textDecoration: 'none' }} className="hover:text-gray-500 transition-colors">Terms</Link>
            <Link href="/privacy" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D33', fontSize: 12, textDecoration: 'none' }} className="hover:text-gray-500 transition-colors">Privacy</Link>
            <Link href="/refund" style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D33', fontSize: 12, textDecoration: 'none' }} className="hover:text-gray-500 transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
