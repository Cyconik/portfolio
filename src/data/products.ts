export interface ProductItem {
  id: string;
  name: string;
  role: "Founder" | "Product Builder" | "Creator & Architect";
  tagline: string;
  description: string;
  liveUrl?: string;
  domain: string;
  status: "Live & Active" | "In Development" | "Production Ready";
  targetMarket: string;
  keyFeatures: string[];
  businessValue: string;
  technologies: string[];
  metricsOrLaunch?: string;
}

export const productsData: ProductItem[] = [
  {
    id: "scansecure",
    name: "ScanSecure",
    role: "Founder",
    tagline: "QR-Enabled Emergency Medical & Contact Smart-Card Ecosystem",
    description: "An emergency smart-card platform utilizing QR-enabled PVC cards to make vital medical profile details and emergency contacts immediately accessible from any modern smartphone—without requiring an app download, user login, or unlocked device.",
    domain: "scansecure.in",
    liveUrl: "https://scansecure.in",
    status: "Live & Active",
    targetMarket: "Individuals, elder care, students, and corporate workforce safety programs",
    keyFeatures: [
      "Zero-App Accessibility: Operates instantly via any native camera QR scanner on iOS or Android.",
      "Multi-Segment Workflows: Custom-tailored profile schemes for students, corporate employees, and individuals.",
      "Physical-to-Digital Pairing: Encrypted dynamic QR codes permanently mapped to secure, user-managed medical and emergency contact profiles.",
      "Instant Emergency Contacts: Direct 1-tap calling for primary contacts and blood group verification."
    ],
    businessValue: "Solves the critical 'golden hour' information gap for first responders, emergency medical personnel, and bystanders during accidents or medical crises.",
    technologies: ["QR Infrastructure", "Web Architecture", "User Journey Engineering", "Security Protocols", "Physical Card Logistics"],
    metricsOrLaunch: "Active Platform across individual and institutional use cases"
  },
  {
    id: "spillx",
    name: "SpillX",
    role: "Founder",
    tagline: "Anonymous Social Expression & Private Community Platform",
    description: "A digital social sanctuary engineered for candid text confessions, peer emotional reactions, and secure, anonymous one-to-one interactions without identity disclosure.",
    domain: "spillx.in",
    liveUrl: "https://spillx.in",
    status: "Live & Active",
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
  },
  {
    id: "galigram",
    name: "Galigram",
    role: "Product Builder",
    tagline: "Location-Aware Hyper-Local Social Video Network",
    description: "A next-generation hyper-local social platform designed around concise 30-second video reports, local community discovery, real-time neighborhood updates, and localized conversations.",
    domain: "galigram.com",
    liveUrl: "https://galigram.com",
    status: "In Development",
    targetMarket: "Local communities, neighborhood organizers, citizen journalists, and local businesses",
    keyFeatures: [
      "30-Second Micro-Video Reports: High-signal, low-noise localized updates focused on immediate events.",
      "Geographic Discovery: Intuitive location-anchored feeds matching users with proximate local activity.",
      "Community Conversations: Threaded discussions tied directly to regional landmarks and neighborhoods.",
      "Global Scalability: Architecture built for localized content indexing and planetary scale."
    ],
    businessValue: "Restores local community awareness by replacing global algorithmic outrage feeds with geographically relevant, high-utility neighborhood intelligence.",
    technologies: ["Location-Based Services", "Video Streaming Architecture", "Mobile UX", "Distributed Backend", "Content Discovery"],
    metricsOrLaunch: "Planned Worldwide Launch: January 2027"
  },
  {
    id: "webpconverter",
    name: "WebPConverter.tech",
    role: "Creator & Architect",
    tagline: "High-Performance Batch Image Compression & Developer API",
    description: "A fast, privacy-conscious image optimization web platform that performs client-side batch conversions to WebP format, supplemented by a developer REST API and automated CMS plugins.",
    domain: "webpconverter.tech",
    liveUrl: "https://webpconverter.tech",
    status: "Production Ready",
    targetMarket: "Web developers, e-commerce store operators, media agencies, and content publishers",
    keyFeatures: [
      "Zero-Upload Client Processing: Batch conversions run directly in the client browser using WebAssembly.",
      "Developer REST API: Programmatic endpoint enabling automated CI/CD and backend asset compression.",
      "WordPress / WooCommerce Plugin: Intercepts media uploads to automatically compress images before storage.",
      "Significant Payload Reduction: Consistently achieves 60%–85% file size reductions with minimal visual degradation."
    ],
    businessValue: "Dramatically accelerates Google Core Web Vitals (LCP), slashes server storage costs, and boosts SEO organic rankings for media-heavy websites.",
    technologies: ["JavaScript / WebAssembly", "Canvas API", "REST API", "PHP", "WordPress Plugin Ecosystem"],
    metricsOrLaunch: "Used across client sites and public web utility"
  }
];
