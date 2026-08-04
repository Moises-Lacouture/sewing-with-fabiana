export const communityPosts = [
  { handle: "@sewthriftyhannah", image: "/community/sewthriftyhannah.jpg" },
  { handle: "@ali_behindtheseams", image: "/community/ali_behindtheseams.jpg" },
  { handle: "@the.sewcialite", image: "/community/the_sewcialite.jpg" },
  { handle: "@caityburdash", image: "/community/caityburdash.jpg" },
  { handle: "@hausmu", image: "/community/hausmu.jpg" },
  { handle: "@_lululucyy", image: "/community/lululucyy.jpg" },
];

export const cardBgs = ["#D8D3CC", "#DDD8D1", "#D5D0C9", "#DAD5CE", "#D3CEC7", "#DFD9D2"];

export const supportEmail = "Patternsbyfabiana@gmail.com";

export const faqs = [
  {
    category: "Ordering & Payment",
    questions: [
      {
        q: "What happens after I purchase a pattern?",
        a: "You'll receive your pattern files via email right after your payment is confirmed. The email will include your PDF pattern in A4, US Letter, and A0 formats.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept PayPal and all major credit and debit cards (Visa, Mastercard, American Express) through our secure checkout. You don't need a PayPal account to pay with a card.",
      },
      {
        q: "Can I buy from outside the US?",
        a: "Yes! We sell and deliver digitally worldwide. You can pay in your local currency through PayPal.",
      },
      {
        q: "Do you offer refunds?",
        a: "Due to the digital nature of our products, we generally don't offer refunds once a pattern has been delivered. If you experience any issues with your files, please contact us and we'll make it right.",
      },
    ],
  },
  {
    category: "Patterns & Printing",
    questions: [
      {
        q: "What format are the patterns in?",
        a: "All patterns are delivered as PDF files in A4, US Letter, and A0 formats. They include the pattern pieces and step-by-step sewing instructions with sketches. A comprehensive video tutorial is also available for free on our YouTube channel — it's not included with your purchase, but it's publicly available for anyone to follow along.",
      },
      {
        q: "How do I print the patterns?",
        a: "You can print at home on standard A4 or US Letter paper — each pattern includes alignment marks so you can tape the pages together easily. Prefer to skip the taping? Take the A0 file to a local print shop or copy center for a single large-format print.",
      },
      {
        q: "Are the patterns in English?",
        a: "Yes, all patterns and instructions are in English.",
      },
    ],
  },
  {
    category: "Sewing & Skill Level",
    questions: [
      {
        q: "I'm a complete beginner — can I use these patterns?",
        a: "Our patterns are recommended for advanced beginners. Each one includes detailed step-by-step instructions with sketches, and you can find a comprehensive tutorial on our YouTube channel that walks you through the entire process. The video isn't included with your purchase, but it's publicly available for free.",
      },
      {
        q: "Do you have video tutorials?",
        a: "Yes — you can find a comprehensive tutorial for the pattern on our YouTube channel that walks you through the entire sewing process step by step. The video is not included with your purchase, but it's publicly available for free so anyone can follow along.",
      },
      {
        q: "What kind of fabric should I use?",
        a: "Each pattern includes specific fabric recommendations suited to that particular garment.",
      },
      {
        q: "What sewing machine do I need?",
        a: "You'll need a sewing machine with straight and zigzag stitches. An overlocker (serger) machine is always good to have for finishing seams, but it's not necessary.",
      },
    ],
  },
  {
    category: "Other",
    questions: [
      {
        q: "Is this a physical product?",
        a: "No — all patterns are digital PDF downloads. You will not receive any physical copy.",
      },
      {
        q: "Can I share or resell the pattern files?",
        a: "This pattern is intended for personal use only. Redistribution or reproduction of any kind is not permitted.",
      },
      {
        q: "How can I contact you?",
        a: "You can reach us via email at Patternsbyfabiana@gmail.com. We typically respond within 24-48 hours.",
      },
    ],
  },
];

// Centralized Lemon Squeezy checkout URLs — update in one place
export const checkoutUrls = {
  alessandra: "https://sewingwithfabiana.lemonsqueezy.com/checkout/buy/53c6f6e1-9973-408e-a918-c1b612f12bb7",
};

export const socialLinks = {
  instagram: "https://instagram.com/sewingwithfabiana",
  youtube: "https://youtube.com/@sewingwithfabiana",
};

// Pattern catalog. Each pattern gets its own product page at /patterns/[slug].
// To add a new pattern later: append another object here with its own slug.
//
// status: 'available'   — buyable; gets a product page, a sitemap entry, and a
//                         clickable catalog card.
// status: 'coming-soon' — teaser only; shows a quiet catalog card and nothing
//                         else. Needs just slug, name, subtitle and teaser.
export const patterns = [
  {
    slug: 'alessandra',
    status: 'available',
    name: 'Alessandra',
    subtitle: 'Dress or top · With or without sleeves',
    category: 'Digital PDF Pattern · 4-in-1',
    priceLabel: '$12.99',
    priceValue: '12.99',
    priceCurrency: 'USD',
    checkoutUrl: checkoutUrls.alessandra,
    heroImage: '/images/alessandra-1.jpg',
    heroAlt: 'Alessandra top — front view',
    photos: [
      { src: '/images/alessandra-1.jpg',  alt: 'Alessandra top — front view' },
      { src: '/images/alessandra-2.jpg',  alt: 'Alessandra top on a hanger' },
      { src: '/images/alessandra-3.jpg',  alt: 'Alessandra top — front detail' },
      { src: '/images/alessandra-4.jpg',  alt: 'Alessandra top — back view' },
      { src: '/images/alessandra-5.jpg',  alt: 'Alessandra top — side view' },
      { src: '/images/alessandra-6.jpg',  alt: 'Alessandra dress in pink' },
      { src: '/images/alessandra-7.jpg',  alt: 'Alessandra size chart and materials' },
      { src: '/images/alessandra-8.png',  alt: 'Alessandra final garment measurements size chart in centimeters and inches' },
      { src: '/images/alessandra-9.jpg',  alt: 'Alessandra top in plaid — front view' },
      { src: '/images/alessandra-10.jpg', alt: 'Alessandra top in plaid — back view' },
      { src: '/images/alessandra-11.jpg', alt: 'Alessandra top in rust linen' },
      { src: '/images/alessandra-12.jpg', alt: 'Alessandra dress in blue toile print' },
      { src: '/images/alessandra-13.jpg', alt: 'Alessandra dress in pink floral print' },
      { src: '/images/alessandra-14.jpg', alt: 'Alessandra top in blue hydrangea print' },
      { src: '/images/alessandra-15.jpg', alt: 'Alessandra top in teal gingham' },
      { src: '/images/alessandra-16.jpg', alt: 'Alessandra top in pink polka dot' },
      { src: '/images/alessandra-17.jpg', alt: 'Alessandra top in rust linen' },
    ],
    description: [
      "Meet Alessandra, the prettiest 4-in-1 pattern. I wanted to design something that felt cute and chic at the same time. That fit just right, not too tight, but still gave a beautiful silhouette. And my favorite detail? The keyhole neckline.",
      "The best part is the versatility. Make it as a dress or a top, with or without sleeves. Dress it up or down depending on your fabric choice, and you have a completely different look every time. This is your everyday dress, for every season.",
      "This pattern features bust darts and back darts for a comfortable, flattering fit, an invisible zipper on the back, and that signature keyhole neckline that makes the whole look.",
    ],
    skillLevel: 'Recommended for Advanced Beginners.',
    included: [
      'PDF pattern in A4, US Letter, and A0 formats',
      'Step-by-step sewing instructions with sketches',
    ],
    sizes: 'XXS, XS, S, M, L, XL, XXL (measurements chart included)',
    please: [
      'This pattern is in English',
      'This is a digital pattern — no physical copy will be shipped',
      'For personal use only — redistribution or reproduction is not permitted',
    ],
    seo: {
      title: 'Alessandra Pattern — Dress or Top',
      description: 'Alessandra: a 4-in-1 digital PDF sewing pattern. Dress or top, with or without sleeves, featuring a signature keyhole neckline. Recommended for advanced beginners.',
      ogImage: 'https://sewingwithfabiana.com/images/alessandra-1.jpg',
    },
  },
  // To tease an upcoming pattern, add an entry with only these fields:
  //   { slug, status: 'coming-soon', name, subtitle, teaser }
  // It renders as a quiet catalog card and nothing else. Fill in the remaining
  // fields and flip status to 'available' when it goes on sale.
];

// Only 'available' patterns are buyable, so only they get a product page and a
// sitemap entry. Coming-soon entries exist purely as catalog teasers.
export const availablePatterns = patterns.filter((p) => p.status !== 'coming-soon');

export function getPatternBySlug(slug) {
  return availablePatterns.find((p) => p.slug === slug);
}
