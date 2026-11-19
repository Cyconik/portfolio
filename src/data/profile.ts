export interface ProfileData {
  name: string;
  fullName: string;
  handle: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  portfolioUrl: string;
  avatarUrl: string;
  shortBio: string;
  fullStory: string[];
  philosophy: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Nikhil Singh",
  fullName: "Nikhil Kumar Singh",
  handle: "Cyconik",
  title: "Business Analyst & Digital Product Builder",
  tagline: "Software Developer | Business Analyst | Product Builder | Entrepreneur",
  location: "Noida, Uttar Pradesh, India",
  phone: "+91 6388693276",
  email: "contact@cyconik.com", // [Phase 2 placeholder: Replace with primary professional email address if desired]
  github: "https://github.com/Cyconik",
  linkedin: "https://linkedin.com/in/nikhil-singh", // [Phase 2 placeholder: Verify vanity LinkedIn username]
  portfolioUrl: "https://cyconik.github.io",
  avatarUrl: "https://avatars.githubusercontent.com/u/110342938?v=4",
  shortBio: "Business Analyst and Product Builder with 4 years of experience across requirement engineering, digital product delivery, workflow improvement, cross-functional vendor coordination, and web architectures.",
  fullStory: [
    "My journey began at the intersection of engineering discipline and hands-on systems thinking. Having trained in Aircraft Maintenance Engineering with an 80% distinction, I developed a meticulous attention to detail, protocol safety, and complex system architectures before completing my B.Tech in Computer Science and Engineering at Dr. APJ Abdul Kalam Technical University (AKTU).",
    "Over the past 4 years, I have operated across the entire product lifecycle—from conducting deep stakeholder interviews, authoring BRD/FRD artifacts, and mapping user journeys, to rolling up my sleeves in code, managing MySQL relational databases, custom CRM modules, and high-converting web systems.",
    "At Creative Tura, I led digital strategy and technical SEO for Turbo Auto Parts, driving organic monthly sessions from ~1,570 to 17,700 in just four months (+1,027% organic growth). Today at Opalspace, I bridge operational requirements and technical execution, optimizing Perfex CRM workflows and cross-functional delivery.",
    "As an entrepreneur, I believe the best solutions solve acute, real-world friction. Whether building ScanSecure (an offline QR-enabled emergency card ecosystem), QuickChat (a 100% offline BLE mesh network messenger for zero-connectivity scenarios), or Galigram (a hyper-local 30-second video discovery platform), I focus on building technology that delivers tangible human utility."
  ],
  philosophy: [
    "Requirements Before Code: Technology without a validated user problem is waste. Clear functional specifications, acceptance criteria, and stakeholder alignment form the foundation of successful software.",
    "Measurable Business Impact: Technical sophistication is only as valuable as the revenue, operational efficiency, or organic traffic it accelerates.",
    "Resilience & Decentralization: Real-world problems occur at the edge. Building systems that can function offline or under extreme network constraints produces cleaner, more fault-tolerant software."
  ],
  metrics: [
    {
      label: "Years of Experience",
      value: "4+",
      description: "Across BA, CRM systems, web delivery & SEO"
    },
    {
      label: "Organic Traffic Growth",
      value: "+1,027%",
      description: "Scaled from ~1,570 to 17,700 monthly sessions in 4 months"
    },
    {
      label: "Products Founded & Built",
      value: "6+",
      description: "Including ScanSecure, QuickChat, SpillX & Galigram"
    },
    {
      label: "Client Industries Served",
      value: "8+",
      description: "Healthcare, e-commerce, logistics, travel & tech"
    }
  ]
};
