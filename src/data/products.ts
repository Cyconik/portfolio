export interface ProductItem {
  id: string;
  name: string;
  role: "Founder" | "Founder & Lead Architect" | "Creator & Architect";
  tagline: string;
  description: string;
  liveUrl?: string;
  domain: string;
  status: "Live & Active" | "In Development (Under Process)" | "Production Ready" | "Active Development (Flagship)";
  targetMarket: string;
  keyFeatures: string[];
  businessValue: string;
  technologies: string[];
  logo: string;
  isFlagship?: boolean;
  metricsOrLaunch?: string;
}

export const productsData: ProductItem[] = [
  {
    id: "bargenify",
    name: "Bargenify",
    role: "Founder & Lead Architect",
    tagline: "India's 1st Online Bargaining Platform — Digital Price Negotiation Plugin & API",
    description: "India's pioneering digital bargaining ecosystem. Building dedicated plugins and developer APIs for e-commerce shop owners that empower customers to negotiate and bargain product prices in real-time—digitizing India's retail bargaining culture to dramatically reduce cart abandonment.",
    domain: "bargenify.com",
    liveUrl: "https://bargenify.com",
    status: "Active Development (Flagship)",
    isFlagship: true,
    logo: "assets/logos/bargenify.svg",
    targetMarket: "E-commerce merchants, D2C brands, WooCommerce / Shopify store owners, and millions of Indian digital shoppers",
    keyFeatures: [
      "India's 1st Online Bargaining Platform: Translates the psychology of physical market bargaining into e-commerce.",
      "Merchant Plugin & API Integration: Lightweight plug-and-play SDK for store owners with configurable margin safety thresholds.",
      "Automated Counter-Offer Engine: Algorithmic real-time negotiation that protects seller profits while rewarding buyers.",
      "Cart Abandonment Conversion: Captures high-intent users on the fence by providing immediate interactive price discovery."
    ],
    businessValue: "Transforms static checkout friction into interactive gamified negotiation, boosting store conversion rates by an estimated 25%–40% and slashing ad spend waste.",
    technologies: ["Custom Plugin Architecture", "RESTful API Engine", "E-Commerce Integrations", "Real-Time Negotiation Logic", "WooCommerce/Shopify APIs"],
    metricsOrLaunch: "Flagship Venture in active development"
  },
  {
    id: "scansecure",
    name: "ScanSecure",
    role: "Founder",
    tagline: "India's #1 Emergency Smart Card with Dynamic Medical QR & Instant Contacts",
    description: "An emergency smart-card platform utilizing QR-enabled PVC cards to make vital medical profile details and emergency contacts immediately accessible from any modern smartphone—without requiring an app download, user login, or unlocked device.",
    domain: "scansecure.in",
    liveUrl: "https://scansecure.in",
    status: "Live & Active",
    logo: "assets/logos/scansecure.png",
    targetMarket: "Individuals, senior citizens, students, schools, and corporate workforce safety programs",
    keyFeatures: [
      "Zero-App Accessibility: Operates instantly via any native camera QR scanner on iOS or Android.",
      "Multi-Segment Workflows: Custom-tailored profile schemes for students, corporate employees, and individuals.",
      "Physical-to-Digital Pairing: Encrypted dynamic QR codes permanently mapped to secure, user-managed medical profiles.",
      "Instant Emergency Contacts: Direct 1-tap calling for primary emergency contacts and blood group verification."
    ],
    businessValue: "Solves the critical 'golden hour' information gap for first responders, emergency medical personnel, and bystanders during accidents or medical crises.",
    technologies: ["Dynamic QR Infrastructure", "Web Architecture", "User Journey Engineering", "Security Protocols", "Physical Card Logistics"],
    metricsOrLaunch: "Live Platform across individual and institutional use cases"
  },
  {
    id: "galigram",
    name: "Galigram",
    role: "Founder",
    tagline: "Location-Aware Hyper-Local Social Micro-Video Platform (30s Reports)",
    description: "A location-aware social information platform designed around concise 30-second hyper-local video reports, neighborhood discovery, community updates, and localized conversations. Founded and architected by Nikhil Kumar Singh.",
    domain: "galigram.com",
    liveUrl: "https://galigram.com",
    status: "In Development (Under Process)",
    logo: "assets/logos/galigram.png",
    targetMarket: "Local communities, neighborhood organizers, citizen reporters, and localized local businesses",
    keyFeatures: [
      "30-Second Micro-Video Reports: High-signal, low-noise localized updates focused on immediate events.",
      "Geographic Discovery: Intuitive location-anchored feeds matching users with proximate local activity.",
      "Community Conversations: Threaded discussions tied directly to regional landmarks and neighborhoods.",
      "Global Scalability: Architecture built for localized content indexing and planetary scale."
    ],
    businessValue: "Restores local community awareness by replacing global algorithmic outrage feeds with geographically relevant, high-utility neighborhood intelligence.",
    technologies: ["Location-Based Services", "Video Streaming Architecture", "Mobile UX", "Distributed Backend", "Content Discovery"],
    metricsOrLaunch: "Active Development by Founder"
  },
  {
    id: "webpconverter",
    name: "WebPConverter.tech",
    role: "Creator & Architect",
    tagline: "Real-Time Image Compression — Reduces Up to 90% File Size with Zero Quality Loss",
    description: "A high-performance image optimization platform that converts images to modern WebP format and reduces file size by up to 90% without compromising visual quality, complete with developer REST APIs and WordPress plugins.",
    domain: "webpconverter.tech",
    liveUrl: "https://webpconverter.tech",
    status: "Production Ready",
    logo: "assets/logos/webpconverter.png",
    targetMarket: "Web developers, e-commerce store operators, media agencies, and content publishers",
    keyFeatures: [
      "Up to 90% File Reduction: Advanced compression algorithms eliminate bulk while retaining pristine sharpness.",
      "Zero-Upload Client Processing: Batch conversions run directly in the browser via WebAssembly for maximum privacy.",
      "Developer REST API: Programmatic endpoint enabling automated CI/CD and backend asset compression.",
      "WordPress / WooCommerce Plugin: Intercepts media uploads to automatically compress images before storage."
    ],
    businessValue: "Dramatically accelerates Google Core Web Vitals (LCP), slashes server storage and CDN bills, and boosts SEO organic rankings for media-heavy websites.",
    technologies: ["JavaScript / WebAssembly", "Canvas API", "REST API", "PHP", "WordPress Plugin Ecosystem"],
    metricsOrLaunch: "Live public web utility & client plugin"
  },
  {
    id: "spillx",
    name: "SpillX",
    role: "Founder",
    tagline: "Anonymous Confessions App & Safe Expression Community",
    description: "A digital social sanctuary engineered for candid text confessions, peer emotional reactions, and secure, anonymous one-to-one interactions without identity disclosure.",
    domain: "spillx.in",
    liveUrl: "https://spillx.in",
    status: "Live & Active",
    logo: "assets/logos/spillx.webp",
    targetMarket: "Youth, students, and online communities seeking safe psychological expression",
    keyFeatures: [
      "Anonymous Confession Feeds: Chronological and trending streams of user-submitted reflections.",
      "Empathy-Driven Reactions: Curated emotional reaction indicators rather than toxic social vanity metrics.",
      "Anonymous 1-to-1 Conversations: Real-time peer discussions shielded by privacy-preserving message flows.",
      "Automated Safety & Moderation: Strict community reporting, content filtering, and regulatory policy pages."
    ],
    businessValue: "Eliminates the performance anxiety and algorithmic judgment of conventional social media, delivering a high-engagement space for genuine emotional expression.",
    technologies: ["WordPress CMS Engine", "PHP Custom Architecture", "Relational Database", "SEO Content Architecture", "Community Moderation"],
    metricsOrLaunch: "Live digital community platform"
  }
];
