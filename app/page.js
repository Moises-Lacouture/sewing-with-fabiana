import Link from 'next/link';
import { communityPosts, socialLinks } from '@/lib/data';
import HeroSlider from '@/components/HeroSlider';

const steps = [
  { step: '01', title: 'Browse', desc: 'Explore our collection and pick a pattern you love.' },
  { step: '02', title: 'Checkout', desc: 'Pay securely with PayPal or any major credit card — no account needed.' },
  { step: '03', title: 'Download', desc: 'Get your PDF pattern files in A4, US Letter, and A0 format via email.' },
  { step: '04', title: 'Sew & wear', desc: 'Follow the step-by-step guide and video tutorial to sew your garment.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* HOW TO BUY */}
      <section style={{ borderBottom: '1px solid #2D2D2D10' }}>
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
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
              Simple & Secure
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 32, fontWeight: 500 }}>
              How to buy a pattern
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-4xl mx-auto">
            {steps.map((item, i) => (
              <div key={i} className="text-center">
                <p style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D28', fontSize: 36, fontWeight: 400, marginBottom: 10 }}>
                  {item.step}
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 17, fontWeight: 600, marginBottom: 6 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D66', fontSize: 13, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE MAKER */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div
              style={{ borderRadius: 12, overflow: 'hidden' }}
              className="aspect-[4/5]"
            >
              <img
                src="/images/fabiana-portrait.jpg"
                alt="Fabiana, fashion designer and pattern creator"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
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
                Meet the Maker
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2D2D2D',
                  fontSize: 32,
                  fontWeight: 500,
                  marginBottom: 20,
                  lineHeight: 1.3,
                }}
              >
                Hi, I&apos;m <span style={{ color: '#6B2C32', fontStyle: 'italic' }}>Fabiana</span>
              </h2>
              <div
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 14, lineHeight: 1.8 }}
                className="space-y-4"
              >
                <p>
                  Fashion designer and the girl behind the Rectangle Series. I create sewing patterns designed to make you fall in love with the process, starting with my very first one: the Alessandra Dress &amp; Top.
                </p>
                <p>So happy you&apos;re here!</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  style={{
                    border: '1.5px solid #6B2C3233',
                    color: '#6B2C32',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                  className="px-6 py-2.5 rounded-full hover:bg-white/40 transition-all"
                >
                  Read My Story
                </Link>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: '1.5px solid #2D2D2D18',
                    color: '#2D2D2D88',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                  className="px-6 py-2.5 rounded-full hover:border-gray-400 transition-all inline-flex items-center gap-2"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: '1.5px solid #2D2D2D18',
                    color: '#2D2D2D88',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                  className="px-6 py-2.5 rounded-full hover:border-gray-400 transition-all inline-flex items-center gap-2"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section style={{ borderTop: '1px solid #2D2D2D10' }}>
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
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
              Made by You
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 32, fontWeight: 500 }}>
              Our community
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#2D2D2D66',
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 400,
                margin: '12px auto 0',
              }}
            >
              Real people making real clothes with our patterns. Tag us to be featured.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {communityPosts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div
                  style={{
                    borderRadius: 10,
                    overflow: 'hidden',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  }}
                  className="aspect-[3/4] mb-3 group-hover:shadow-lg group-hover:-translate-y-1"
                >
                  <img
                    src={post.image}
                    alt={`${post.handle} wearing a Sewing with Fabiana pattern`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B2C32', fontSize: 13, fontWeight: 500 }}>
                  {post.handle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW ALONG CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div style={{ backgroundColor: '#2D2D2D', borderRadius: 16 }} className="px-10 py-16 md:py-20 text-center">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#E8E4DF88',
              fontSize: 12,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Join the Community
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#E8E4DF', fontSize: 28, fontWeight: 500, marginBottom: 14 }}>
            Follow along
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#E8E4DF55',
              fontSize: 14,
              maxWidth: 380,
              margin: '0 auto',
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            Tutorials, behind-the-scenes, and sewing inspiration from our community.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#E8E4DF',
                color: '#2D2D2D',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
              className="px-6 py-2.5 rounded-full hover:bg-white transition-colors inline-flex items-center gap-2"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1.5px solid #E8E4DF33',
                color: '#E8E4DFcc',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
              className="px-6 py-2.5 rounded-full hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
