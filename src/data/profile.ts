export interface ProfileData {
  name: string;
  fullName: string;
  handle: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
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
  name: "Nikhil Kumar Singh",
  fullName: "Nikhil Kumar Singh",
  handle: "Cyconik",
  title: "Business Analyst | Product Owner | Digital Product Builder & Founder",
  tagline: "Business Analyst | Product Owner | Digital Product Builder & Founder",
  location: "Noida, Uttar Pradesh, India (Open to Relocate Anywhere • Remote & Onsite)",
  email: "cyco2052544@gmail.com",
  github: "https://github.com/Cyconik",
  portfolioUrl: "https://cyconik.github.io/portfolio/",
  avatarUrl: "https://avatars.githubusercontent.com/u/110342938?v=4",
  shortBio: "Business Analyst and Product Builder with 4 years of experience across requirement engineering, digital product delivery, workflow improvement, cross-functional vendor coordination, and web architectures. Founder of Bargenify (India's 1st online bargaining platform), ScanSecure, SpillX, and Galigram.",
  fullStory: [
    "My journey began at the intersection of engineering discipline and hands-on systems thinking. Having trained in Aircraft Maintenance Engineering with an 80% distinction, I developed a meticulous attention to detail, protocol safety, and complex system diagnostics before completing my B.Tech in Computer Science and Engineering at Dr. APJ Abdul Kalam Technical University (AKTU).",
    "Over the past 4 years, I have operated across the entire product lifecycle: from conducting deep stakeholder interviews, authoring BRD/FRD artifacts, and mapping user journeys, to managing MySQL relational databases, custom CRM modules, and high-converting web systems.",
    "At Creative Tura, I led digital strategy and technical SEO for Turbo Auto Parts, driving organic monthly sessions from ~1,570 to 17,700 in just four months (+1,027% organic growth). At Opalspace, I bridge operational requirements and technical execution, optimizing Perfex CRM workflows and cross-functional delivery.",
    "As a founder, I build technology that solves acute market friction: from founding ScanSecure (a QR-enabled emergency card ecosystem) and SpillX (an anonymous social sanctuary), to founding Galigram (a location-aware hyper-local micro-video platform). Currently, I am pioneering Bargenify (bargenify.com), India's 1st online bargaining platform, creating plugins and APIs for e-commerce merchants to enable digital price negotiations."
  ],
  philosophy: [
    "Requirements Before Code: Technology without a validated user problem is waste. Clear functional specifications, acceptance criteria, and stakeholder alignment form the foundation of successful software.",
    "Measurable Business Impact: Technical sophistication is only as valuable as the revenue, operational efficiency, or organic traffic it accelerates.",
    "Resilience & Practicality: Real-world problems occur at the edge. Building systems that can function offline or under extreme constraints produces cleaner, more fault-tolerant software."
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
      label: "Ventures Founded",
      value: "5+",
      description: "Bargenify, ScanSecure, SpillX, Galigram & WebPConverter"
    },
    {
      label: "Availability",
      value: "Ready",
      description: "Open to relocate anywhere for permanent hire or sponsorship"
    }
  ]
};
