export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  type: "Full-time" | "Contract" | "Internship";
  summary: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "opalspace-ba",
    role: "Business Analyst",
    company: "Opalspace",
    location: "Noida, Uttar Pradesh, India",
    period: "Dec 2024 – Present",
    startDate: "2024-12",
    endDate: "Present",
    isCurrent: true,
    type: "Full-time",
    summary: "Lead business analysis, operational requirements gathering, Perfex CRM customization, and cross-functional technical delivery.",
    responsibilities: [
      "Collaborate directly with internal leadership and departmental stakeholders to clarify operational pain points, formalize business scope, and define actionable delivery priorities.",
      "Coordinate with external technology vendors and cross-functional engineering teams to track deliverables, monitor dependencies, and eliminate operational roadblocks.",
      "Administer and customize Perfex CRM modules, workflows, and database structures to streamline lead management, client communications, and operational service lifecycles.",
      "Perform continuous root cause analysis on production workflow snags; engineer process optimizations that improve record fidelity and data reliability.",
      "Author and maintain detailed requirement notes, standard operating workflows, and technical handoff documentation for development teams.",
      "Build actionable reporting pipelines in Excel and Power BI, translating operational data into high-level KPI dashboards for executive decision-makers.",
      "Leverage technical proficiency in WordPress, PHP, CodeIgniter, MySQL, APIs, and hosting infrastructures to facilitate seamless communication between business and developers."
    ],
    keyAchievements: [
      "Streamlined end-to-end lead management and service delivery processes through customized Perfex CRM workflows.",
      "Established standard requirements documentation and vendor coordination workflows that reduced cross-functional delivery cycle times."
    ],
    technologies: [
      "Perfex CRM",
      "Business Analysis (BRD/FRD)",
      "Process Flows",
      "Power BI",
      "Advanced Excel",
      "PHP & CodeIgniter",
      "MySQL",
      "REST APIs",
      "Agile/Scrum"
    ]
  },
  {
    id: "creative-tura-ba-wp",
    role: "Business Analyst / WordPress Developer",
    company: "Creative Tura Pvt. Ltd.",
    client: "Turbo Auto Parts",
    location: "India",
    period: "Jul 2024 – Nov 2024",
    startDate: "2024-07",
    endDate: "2024-11",
    isCurrent: false,
    type: "Full-time",
    summary: "Authored end-to-end BA documentation and spearheaded technical SEO strategy, scaling client organic traffic by 10x in four months.",
    responsibilities: [
      "Authored end-to-end business analysis documentation including Project Charter, Stakeholder Register, BRD, FRD, User Stories, Acceptance Criteria, RTM, Process Flows, Wireframes, UI Specifications, UAT Test Cases, Change Request Log, and Go-Live Sign-offs.",
      "Gathered functional requirements and mapped end-to-end user journeys for an online bidding feature for used automotive engines and transmissions, coordinating implementation with developers.",
      "Conducted extensive competitor intelligence, content-gap audits, technical SEO overhauls, schema markup implementations, and Core Web Vitals optimizations.",
      "Configured high-converting WordPress/WooCommerce websites and landing pages, supporting Google Ads and Meta Ads campaign optimization."
    ],
    keyAchievements: [
      "Increased Turbo Auto Parts organic traffic from ~1,570 to 17,700 monthly sessions in four months (+1,027% organic growth).",
      "Delivered complete BA specification package for complex used automotive bidding engine with 100% requirements traceability."
    ],
    technologies: [
      "BRD / FRD / RTM",
      "User Stories & UAT",
      "WordPress & WooCommerce",
      "Technical SEO",
      "SEMrush & Ahrefs",
      "Google Search Console",
      "Google Analytics (GA4)",
      "Schema Markup",
      "PHP/MySQL"
    ]
  },
  {
    id: "prodemy-india-wp-seo",
    role: "WordPress Developer & SEO Strategist",
    company: "Prodemy India Pvt. Ltd.",
    location: "India",
    period: "Oct 2023 – May 2024",
    startDate: "2023-10",
    endDate: "2024-05",
    isCurrent: false,
    type: "Full-time",
    summary: "Architected custom WordPress solutions and organic search strategies for diverse enterprise clients across 8+ vertical industries.",
    responsibilities: [
      "Delivered full-cycle WordPress websites and SEO improvements for clients across 8+ industries including logistics, pharmacy, e-commerce, education, fitness, pet care, and travel.",
      "Engineered mobile-first, responsive layouts adhering to modern UX standards and WCAG accessibility guidelines.",
      "Executed technical SEO audits, site speed caching configurations, image optimization pipelines, and metadata structured schemas.",
      "Translated client business objectives into tangible landing page architectures, sprint tasks, and measurable SERP ranking priorities."
    ],
    keyAchievements: [
      "Successfully launched client web solutions across 8 distinct business domains on schedule and within budget.",
      "Consistently achieved top-tier Core Web Vitals performance scores across client web properties."
    ],
    technologies: [
      "WordPress Core",
      "PHP & JavaScript",
      "Technical SEO",
      "Page Speed & Caching",
      "Schema Markup",
      "HTML5 / CSS3 / Bootstrap",
      "Google Analytics",
      "cPanel & DNS Management"
    ]
  },
  {
    id: "krinvi-technologies-intern",
    role: "WordPress Developer Intern",
    company: "Krinvi Technologies Pvt. Ltd.",
    location: "India",
    period: "Apr 2023 – Sep 2023",
    startDate: "2023-04",
    endDate: "2023-09",
    isCurrent: false,
    type: "Internship",
    summary: "Built websites for construction, finance, and e-commerce clients; managed marketplace catalog feeds.",
    responsibilities: [
      "Developed responsive WordPress websites for client accounts in the construction, financial services, and retail sectors.",
      "Optimized on-page content structures, header hierarchies, and meta architectures for maximum search visibility.",
      "Managed Amazon and Flipkart e-commerce product listings, ensuring accurate taxonomy, descriptions, and inventory data."
    ],
    keyAchievements: [
      "Awarded an official Appreciation Letter within two months of joining for rapid execution and exceptional project contributions."
    ],
    technologies: [
      "WordPress",
      "E-commerce Marketplace Management",
      "Amazon & Flipkart Cataloging",
      "HTML & CSS",
      "On-Page SEO"
    ]
  },
  {
    id: "careerguide-frontend-intern",
    role: "Frontend Developer Intern",
    company: "Careerguide.com",
    location: "India",
    period: "Nov 2022 – Apr 2023",
    startDate: "2022-11",
    endDate: "2023-04",
    isCurrent: false,
    type: "Internship",
    summary: "Developed responsive web components and published SEO-optimized educational content that achieved top-three Google rankings.",
    responsibilities: [
      "Engineered clean, responsive frontend web components using HTML5, CSS3, and JavaScript.",
      "Published search-optimized, structured WordPress content designed to capture high-intent career guidance queries.",
      "Conducted extensive keyword discovery and competitive gap analysis using SEMrush, Google Analytics, and Search Console."
    ],
    keyAchievements: [
      "Achieved Top-3 Google organic rankings for multiple high-volume informational search queries."
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "SEMrush",
      "Google Search Console",
      "Google Analytics",
      "Content SEO"
    ]
  }
];
