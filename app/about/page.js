export const metadata = {
  title: 'About',
  description:
    'Meet Fabiana — fashion designer and creator of the Rectangle Series. Learn the story behind Sewing with Fabiana and the patterns designed to make you fall in love with sewing.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
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
          About
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#2D2D2D',
            fontSize: 38,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          The story behind <span style={{ color: '#6B2C32', fontStyle: 'italic' }}>me</span>
        </h1>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div
          style={{ borderRadius: 16, overflow: 'hidden' }}
          className="aspect-[16/7]"
        >
          <img
            src="/images/hero-1.jpg"
            alt="Fabiana sewing at her workspace"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* STORY */}
      <section style={{ borderTop: '1px solid #2D2D2D10' }}>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2D2D2D',
                  fontSize: 26,
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                Hi, I&apos;m <span style={{ color: '#6B2C32', fontStyle: 'italic' }}>Fabiana</span>
              </h2>
            </div>
            <div
              className="md:col-span-3 space-y-5"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D2D2D88', fontSize: 15, lineHeight: 1.8 }}
            >
              <p>
                Hi! My name is Fabiana, and you might know me from my &ldquo;Rectangle Series&rdquo;, where I show you how to make real clothes using just simple rectangles of fabric.
              </p>
              <p>
                But here&apos;s a little more about me.
              </p>
              <p>
                I&apos;m a fashion designer. And I almost wasn&apos;t. I was about to start business school (even with a scholarship), when I made the decision to follow what I actually wanted: design, like my mom. I started sewing one month before fashion school began, and I never looked back.
              </p>
              <p>
                After years studying and working in the industry, I know patternmaking, design, and conceptualization from a professional standpoint. I&apos;m not just someone who loves to sew, this is my craft. This is what I have been doing everyday for the past 7 years.
              </p>
              <p>
                I started sharing my ideas online with the lowest expectations possible (didn&apos;t want to jinx it, lol), and now it feels completely surreal to say that in less than a year, we&apos;re almost at 60k. I still can&apos;t believe it sometimes.
              </p>
              <p>
                What fills my heart the most is when someone tags me wearing something they made with my patterns. Every. Single. Time. Knowing that someone made something I created, put it on, and loved it? That&apos;s everything to me.
              </p>
              <p>
                I truly believe sewing can be joyful, creative, and way easier than people think, and I hope this little corner of the internet makes you feel that way too.
              </p>
              <p>
                If you read all of this, thank you, from the bottom of my heart. You are such a big part of this journey.
              </p>
              <p style={{ color: '#2D2D2D' }}>
                With love, Fabiana 🤍
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 gap-4">
          <div
            style={{ borderRadius: 12, overflow: 'hidden' }}
            className="aspect-[4/5]"
          >
            <img
              src="/images/about-1.jpg"
              alt="Fabric store with rolls of colorful fabric"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div
            style={{ borderRadius: 12, overflow: 'hidden' }}
            className="aspect-[4/5]"
          >
            <img
              src="/images/about-2.jpg"
              alt="Fabiana draping fabric on a dress form"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
