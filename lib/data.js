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
  bianca: "https://sewingwithfabiana.lemonsqueezy.com/checkout/buy/44f4b2d8-1381-4c66-b566-104a10697855",
};

export const socialLinks = {
  instagram: "https://instagram.com/sewingwithfabiana",
  youtube: "https://youtube.com/@sewingwithfabiana",
};

// Pattern catalog. Every entry here becomes a card on /patterns and its own
// product page at /patterns/<slug>, plus a sitemap entry and Product schema.
// Nothing else needs touching to add one.
//
// To add the next pattern:
//   1. Drop its photos in public/images/ (e.g. bianca-1.jpg … bianca-9.jpg).
//   2. Create its Lemon Squeezy product and copy the checkout URL into
//      checkoutUrls above.
//   3. Copy the Alessandra block below and fill in every field.
//
// The first photo doubles as the catalog card image unless heroImage says
// otherwise, and `photos` drives the gallery in the order listed.
export const patterns = [
  {
    slug: 'alessandra',
    name: 'Alessandra',
    subtitle: 'Dress or top · With or without sleeves',
    category: 'Digital PDF Pattern · 4-in-1',
    priceLabel: '$12.99',
    priceValue: '12.99',
    priceCurrency: 'USD',
    // To run a promotion, add a `sale` block here and delete it to end one.
    // priceLabel/priceValue above stay the regular price — they become the
    // struck-through "was" figure while a sale is on.
    //
    //   sale: {
    //     percentOff: 50,
    //     salePriceLabel: '$6.49',
    //     salePriceValue: '6.49',
    //     note: 'Weekend sale',
    //   },
    //
    // IMPORTANT: salePriceValue must match what Lemon Squeezy actually charges.
    // If the site advertises one price and checkout charges another, that is a
    // broken promise to the buyer (and the Terms page says prices are shown
    // before purchase). Start a sale in Lemon Squeezy first, then here; end it
    // here first, then in Lemon Squeezy — so a mismatch can only ever favour
    // the buyer.
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
    // Customer photos and clips for the horizontal strip under this pattern —
    // vertical shots from people who made it. Exclusive to this pattern; every
    // pattern keeps its own list, and the section is hidden while this is empty.
    //
    // Each entry: { image | video, handle?, alt? }
    //   image  — path under public/, e.g. '/community/alessandra/yellow.jpg'
    //   video  — path to an MP4 instead; it plays muted and looping while on
    //            screen, and shows controls for reduced-motion viewers
    //   handle — optional Instagram handle; when present the tile credits the
    //            maker and links to their profile
    //   alt    — optional; falls back to a generic description
    madeByYou: [
      { image: '/community/alessandra/pink-gingham.jpg',      alt: 'Alessandra top in pink gingham' },
      { image: '/community/alessandra/white-linen-dress.jpg', alt: 'Alessandra dress in white linen' },
      { video: '/community/alessandra/community-video.mp4',   alt: 'Alessandra top being worn, filmed by a maker' },
      { image: '/community/alessandra/magenta-gingham.jpg',   alt: 'Alessandra top in magenta gingham' },
      { image: '/community/alessandra/yellow.jpg',            alt: 'Alessandra top in yellow cotton' },
      { image: '/community/alessandra/chambray.jpg',          alt: 'Alessandra top in chambray' },
    ],
    seo: {
      title: 'Alessandra Pattern — Dress or Top',
      description: 'Alessandra: a 4-in-1 digital PDF sewing pattern. Dress or top, with or without sleeves, featuring a signature keyhole neckline. Recommended for advanced beginners.',
      ogImage: 'https://sewingwithfabiana.com/images/alessandra-1.jpg',
    },
  },
  {
    slug: 'bianca',
    name: 'Bianca',
    // Subtitle and category are my wording, drawn from the description —
    // change them to whatever you'd actually call her.
    subtitle: 'Halter-neck top · Open back with adjustable straps',
    category: 'Digital PDF Pattern · Halter top',
    // Still a draft: remove the `draft` flag above to launch her.
    priceLabel: '$12.99',
    priceValue: '12.99',
    priceCurrency: 'USD',
    checkoutUrl: checkoutUrls.bianca,
    heroImage: '/images/bianca-1.jpg',
    heroAlt: 'Bianca halter top in cream embroidered cotton',
    // Array order is display order, independent of filenames. Every image is
    // 4:5, the gallery's own ratio, so nothing crops — the chart tables stay
    // readable. Running order: the garment, then the specs, then real makes.
    photos: [
      { src: '/images/bianca-1.jpg', alt: 'Bianca halter top in cream embroidered cotton — front, with technical drawings' },
      { src: '/images/bianca-2.jpg', alt: 'Bianca halter top — open back with neck and waist ties' },
      { src: '/images/bianca-3.jpg', alt: 'Bianca halter top in brown linen — front view' },
      { src: '/images/bianca-4.jpg', alt: 'Bianca halter top in brown linen — back view' },
      { src: '/images/bianca-5.png', alt: 'Bianca size chart in centimeters and inches, sizes A to J' },
      { src: '/images/bianca-6.png', alt: 'Bianca final top measurements — bust, waist, hip and length, sizes A to J' },
      { src: '/images/bianca-7.png', alt: 'Bianca materials and recommended fabrics' },
      { src: '/images/bianca-8.jpg',  alt: 'Bianca halter top in grey pinstripe, worn with matching trousers' },
      { src: '/images/bianca-9.jpg',  alt: 'Bianca halter top in black eyelet cotton — front view' },
      { src: '/images/bianca-10.jpg', alt: 'Bianca halter top in black eyelet cotton — back view with waist tie' },
      { src: '/images/bianca-11.jpg', alt: 'Bianca halter top in a red and pink cut-out print' },
      { src: '/images/bianca-12.jpg', alt: 'Bianca halter top in navy and cream plaid' },
      { src: '/images/bianca-13.jpg', alt: 'Bianca halter top in black cotton' },
      { src: '/images/bianca-14.jpg', alt: 'Bianca halter top in navy floral print — front view' },
      { src: '/images/bianca-15.jpg', alt: 'Bianca halter top in navy floral print — back view with waist tie' },
      { src: '/images/bianca-16.jpg', alt: 'Bianca halter top in navy and white polka dot' },
      { src: '/images/bianca-17.jpg', alt: 'Bianca halter top in a pink and rust floral print' },
      { src: '/images/bianca-18.jpg', alt: 'Bianca halter top in pale blue' },
      { src: '/images/bianca-19.jpg', alt: 'Bianca halter top in black tonal polka dot' },
      { src: '/images/bianca-20.jpg', alt: 'Bianca halter top in cream linen — front view' },
      { src: '/images/bianca-21.jpg', alt: 'Bianca halter top in cream linen — back view with waist tie' },
      { src: '/images/bianca-22.jpg', alt: 'Bianca halter top in cornflower blue linen' },
      { src: '/images/bianca-23.jpg', alt: 'Bianca halter top in red' },
    ],
    description: [
      'Meet Bianca, a gorgeous halter-neck top with adjustable straps. I’ve been obsessed with keyhole-like necklines lately, so I obviously had to incorporate one into Bianca!',
      'Bianca features two pairs of bust darts and a pair of shaping darts on the bodice, creating a beautifully shaped fit around the bust. Her open-back design, with straps at the neck and back, allows you to adjust the fit to your liking.',
    ],
    skillLevel: 'Recommended for Advanced Beginners.',
    included: [
      'PDF pattern in A4, US Letter, and A0 formats',
      'Step-by-step sewing instructions with sketches',
      'Step-by-step video tutorial',
    ],
    sizes: 'A, B, C, D, E, F, G, H, I, J (measurements chart included)',
    please: [
      'This pattern is in English',
      'This is a digital pattern — no physical copy will be shipped',
      'For personal use only — redistribution or reproduction is not permitted',
    ],
    madeByYou: [],
    seo: {
      title: 'Bianca Pattern — Halter-Neck Top',
      description:
        'Bianca: a digital PDF sewing pattern for a halter-neck top with an open back and adjustable straps, shaped with bust and waist darts. Recommended for advanced beginners.',
      ogImage: 'https://sewingwithfabiana.com/images/bianca-1.jpg',
    },
  },
  {
    slug: 'sister-duo',
    name: 'Sister Duo',
    draft: true,
    // Subtitle and category are my wording — change them to whatever you'd
    // actually call the bundle.
    subtitle: 'Alessandra + Bianca · Two patterns, one bundle',
    category: 'Digital PDF Patterns · Bundle',
    // No price and no checkout yet, so the page shows "Not on sale yet"
    // instead of a dead Buy button, and no price is claimed to Google.
    priceLabel: 'Price coming soon',
    heroImage: '/images/duo-1.jpg',
    heroAlt: 'Alessandra and Bianca tops worn side by side, with their technical drawings',
    // Array order is display order, independent of filenames. All 12 images
    // are 4:5, the gallery's own ratio, so nothing crops.
    photos: [
      { src: '/images/duo-1.jpg', alt: 'Alessandra and Bianca tops worn side by side, with their technical drawings' },
      { src: '/images/duo-2.jpg', alt: 'Bianca halter top in cream embroidered cotton — front view' },
      { src: '/images/duo-3.jpg', alt: 'Bianca halter top in cream embroidered cotton — open back with neck and waist ties' },
      { src: '/images/duo-4.jpg', alt: 'Alessandra top in blue linen on a hanger, showing the back opening' },
      { src: '/images/duo-5.jpg', alt: 'Alessandra dress in dusty pink linen — sleeveless, front view' },
      { src: '/images/duo-6.jpg', alt: 'Alessandra top in blue linen — back view' },
      { src: '/images/duo-7.jpg', alt: 'Alessandra top in rust linen with keyhole neckline, worn in the street' },
      { src: '/images/duo-8.jpg', alt: 'Alessandra top in a blue and green plaid seersucker' },
      { src: '/images/duo-9.jpg', alt: 'Alessandra top in rust linen with a tie at the keyhole' },
      { src: '/images/duo-10.jpg', alt: 'Bianca halter top in black, worn outdoors' },
      { src: '/images/duo-11.jpg', alt: 'Bianca halter top in a navy and cream floral print' },
      { src: '/images/duo-12.jpg', alt: 'Bianca halter top in black textured cotton, worn outdoors' },
    ],
    description: [
      'Meet the Sister Duo! Alessandra and Bianca, two sisters with their own personalities.',
      'Alessandra is the classy sister with the cutest little keyhole. You can make it into a top or a dress, with or without sleeves.',
      'Bianca is her sexier sister, with a halter neckline, of course a keyhole neckline, and an open back. A little more daring, but still classy.',
    ],
    skillLevel: 'Both patterns are recommended for Advanced Beginners.',
    included: [
      'Both patterns — Alessandra and Bianca',
      'PDF patterns in A4, US Letter, and A0 formats',
      'Step-by-step sewing instructions with sketches',
      'Step-by-step video tutorials',
    ],
    // The two patterns use different size systems, so both are named rather
    // than merged into one misleading range.
    sizes: 'Alessandra: XXS–XXL · Bianca: A–J (measurements charts included for both)',
    please: [
      'These patterns are in English',
      'These are digital patterns — no physical copy will be shipped',
      'For personal use only — redistribution or reproduction is not permitted',
    ],
    madeByYou: [],
    seo: {
      title: 'Sister Duo — Alessandra + Bianca Pattern Bundle',
      description:
        'The Sister Duo: the Alessandra and Bianca digital PDF sewing patterns together. A keyhole top or dress and a halter-neck top with an open back. Recommended for advanced beginners.',
      ogImage: 'https://sewingwithfabiana.com/images/duo-1.jpg',
    },
  },
];

// A pattern marked `draft: true` is built and reachable at its own URL so it
// can be reviewed on the real site, but it is kept out of the catalog and the
// sitemap and is marked noindex, so nothing links to it and search engines are
// told to skip it. Remove the flag to launch.
//
// It is unlisted rather than private: anyone who guesses the URL can open it.
// Fine for a page still being written; don't put anything confidential on one.
export const publishedPatterns = patterns.filter((p) => !p.draft);

export function getPatternBySlug(slug) {
  return patterns.find((p) => p.slug === slug);
}
