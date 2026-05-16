import { socialLinks } from '@/lib/data';

export default function TutorialsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>Learn</p>
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#2D2D2D', fontSize: 38, fontWeight: 500, marginBottom: 20 }}>Tutorials</h1>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D66', fontSize: 15, maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>
        Video tutorials for each pattern will be available here. In the meantime, visit our YouTube channel.
      </p>
      <div className="mt-10">
        <a
          href={socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          style={{ border: '1.5px solid #2D2D2D22', color: '#2D2D2D88', fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
          className="px-6 py-2.5 rounded-full hover:border-gray-400 transition-all inline-flex items-center gap-2"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Visit YouTube Channel
        </a>
      </div>
    </section>
  );
}
