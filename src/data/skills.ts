export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    level?: "Expert" | "Proficient" | "Working Knowledge";
    description?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Business Analysis & Product Strategy",
    subtitle: "Requirements engineering, lifecycle governance, and user journey definition",
    iconName: "FileSpreadsheet",
    skills: [
      { name: "Requirement Gathering", level: "Expert", description: "Eliciting stakeholder needs via deep discovery" },
      { name: "BRD & FRD Authoring", level: "Expert", description: "Comprehensive business and functional specifications" },
      { name: "User Stories & Acceptance Criteria", level: "Expert", description: "Gherkin / Given-When-Then format standards" },
      { name: "RTM (Traceability Matrix)", level: "Expert", description: "End-to-end requirement mapping to test cases" },
      { name: "Gap Analysis & Process Flows", level: "Expert", description: "As-Is vs. To-Be process mapping (BPMN)" },
      { name: "Wireframes & UI Specs", level: "Proficient", description: "Low-fidelity wireframing and user journeys" },
      { name: "UAT & Sign-off Governance", level: "Expert", description: "Test scenario design, defect triage, go-live sign-offs" },
      { name: "Agile/Scrum & SDLC", level: "Proficient", description: "Sprint planning, backlog grooming, release cycles" }
    ]
  },
  {
    title: "Operations, CRM & Delivery",
    subtitle: "Cross-functional synchronization, CRM workflow architecture, and issue resolution",
    iconName: "Layers",
    skills: [
      { name: "Perfex CRM Administration", level: "Expert", description: "Module customization, custom fields, automation triggers" },
      { name: "Vendor Management", level: "Proficient", description: "Engineering dependencies, milestone SLA tracking" },
      { name: "Cross-functional Coordination", level: "Expert", description: "Aligning product, ops, business, and engineering" },
      { name: "Workflow Optimization", level: "Expert", description: "Streamlining operational handoffs and lead cycles" },
      { name: "Root Cause Analysis (RCA)", level: "Expert", description: "Diagnosing production snags and edge-case exceptions" },
      { name: "Documentation & SOPs", level: "Expert", description: "Standard operating procedures and technical guides" }
    ]
  },
  {
    title: "Software Development & Web Systems",
    subtitle: "Full-stack languages, relational databases, APIs, and mobile mesh systems",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Proficient", description: "Automation scripts, Selenium, data parsing, APIs" },
      { name: "Dart & Flutter", level: "Proficient", description: "Cross-platform Android applications, offline BLE systems" },
      { name: "PHP & CodeIgniter", level: "Proficient", description: "Backend web systems, CRM extensions, custom plugins" },
      { name: "MySQL & Relational Design", level: "Proficient", description: "Normalized database schemas, indexing, complex queries" },
      { name: "REST API Integration", level: "Proficient", description: "Webhook ingestion, third-party platform endpoints" },
      { name: "WordPress & WooCommerce", level: "Expert", description: "Theme/plugin architecture, custom hooks, e-commerce" },
      { name: "JavaScript (ES6+) & HTML5/CSS3", level: "Proficient", description: "Modern responsive web interfaces, DOM APIs, Bootstrap" }
    ]
  },
  {
    title: "Data Analysis & Reporting",
    subtitle: "Executive KPI tracking, business intelligence, and performance monitoring",
    iconName: "BarChart3",
    skills: [
      { name: "Microsoft Excel (Advanced)", level: "Expert", description: "VLOOKUP/XLOOKUP, Pivot Tables, data modeling" },
      { name: "Power BI", level: "Proficient", description: "Interactive dashboards, business reporting, KPI monitoring" },
      { name: "Google Analytics (GA4)", level: "Proficient", description: "Event tracking, funnel drop-off analysis, user metrics" },
      { name: "Google Search Console", level: "Expert", description: "Crawl diagnostics, click-through rates, indexation analysis" },
      { name: "pandas & openpyxl", level: "Proficient", description: "Python data processing, automated Excel reporting" }
    ]
  },
  {
    title: "Digital Growth & Technical SEO",
    subtitle: "Organic traffic acceleration, Core Web Vitals, and competitor intelligence",
    iconName: "TrendingUp",
    skills: [
      { name: "Technical SEO Audits", level: "Expert", description: "Crawl budget, schema markup, site speed, robots/sitemaps" },
      { name: "Core Web Vitals Optimization", level: "Expert", description: "LCP, FID/INP, and CLS performance tuning" },
      { name: "Competitor & Content Gap Analysis", level: "Expert", description: "Identifying high-intent organic market share gaps" },
      { name: "SEMrush & Ahrefs", level: "Proficient", description: "Keyword clustering, backlink audits, SERP rank tracking" },
      { name: "Schema.org Structured Data", level: "Expert", description: "JSON-LD entity markup for rich Google search snippets" },
      { name: "Google Ads & Meta Ads Support", level: "Proficient", description: "Conversion landing pages and campaign alignment" }
    ]
  },
  {
    title: "Tools, Platforms & Cloud Hosting",
    subtitle: "Infrastructure deployment, version control, and collaboration toolkits",
    iconName: "Server",
    skills: [
      { name: "Git & GitHub", level: "Proficient", description: "Version control, branching workflows, GitHub Actions" },
      { name: "AWS & Cloud Basics", level: "Working Knowledge", description: "S3, basic EC2, cloud asset delivery" },
      { name: "cPanel & Web Hosting", level: "Expert", description: "GoDaddy, Hostinger, DNS records, SSL certification" },
      { name: "Website Migration & Deployment", level: "Expert", description: "Zero-downtime database and asset migrations" },
      { name: "Asana & Notion", level: "Expert", description: "Sprint management, roadmap governance, documentation" }
    ]
  }
];
