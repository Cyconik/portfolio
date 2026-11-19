export interface ProjectItem {
  id: string;
  title: string;
  category: "Mobile & Systems" | "Automation & Python" | "Web Tools" | "WordPress Plugins";
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  isFeatured: boolean;
  status: "Completed" | "Active" | "Open Source";
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "quickchat",
    title: "QuickChat — 100% Offline BLE Mesh Messenger",
    category: "Mobile & Systems",
    description: "Decentralized, 100% offline group messenger for Android using multi-hop Bluetooth Low Energy (BLE) phone-to-phone relaying with zero internet or cellular towers.",
    longDescription: "QuickChat transforms nearby smartphones into an autonomous, decentralized communication mesh. With zero mobile data, SIM cards, or Wi-Fi required, messages broadcast across multi-hop peer nodes (Phone A -> Phone B -> Phone C -> Phone D) with local IndexedDB storage, real-time unread alerts, and group channels.",
    technologies: ["Dart", "Flutter", "Android BLE", "P2P Mesh Networking", "IndexedDB", "Packet Chunking"],
    githubUrl: "https://github.com/Cyconik/QuickChat",
    downloadUrl: "https://github.com/Cyconik/QuickChat/raw/main/QuickChat-Mesh-Offline.apk",
    isFeatured: true,
    status: "Open Source",
    highlights: [
      "Zero internet, zero cellular towers, zero SIM card requirements.",
      "Multi-hop Bluetooth Low Energy (BLE) mesh relaying across physical devices.",
      "Persistent public and emergency broadcast channels (#Nearby-Public-Mesh, #Trek-Emergency-SOS).",
      "Direct compiled APK available for immediate deployment."
    ]
  },
  {
    id: "job-auto-apply",
    title: "Job Auto Apply — Multi-Platform Automation Engine",
    category: "Automation & Python",
    description: "Automated job hunting and screening system that applies to filtered listings on LinkedIn, Indeed, Remotive, and Naukri with resume parsing, match scoring, and audit reports.",
    longDescription: "A Python and Streamlit automation platform designed to streamline high-volume job applications. It parses PDF/DOCX resumes, calculates match scores against job descriptions, automates form submissions using Selenium WebDriver with full screenshot audit logging, and generates automated HTML email reports with Excel exports.",
    technologies: ["Python", "Streamlit", "Selenium WebDriver", "pdfplumber", "PyMuPDF", "pandas", "SMTP"],
    githubUrl: "https://github.com/Cyconik/job-auto-apply",
    isFeatured: true,
    status: "Open Source",
    highlights: [
      "Automates submissions across LinkedIn Easy Apply, Indeed, Remotive, and Naukri.",
      "Extracts candidate skills and experience automatically from PDF and DOCX files.",
      "Captures visual screenshot proof at every application stage (before, during, and after submission).",
      "Sends automated HTML email summaries with success/failure metrics and downloadable spreadsheets."
    ]
  },
  {
    id: "webpconverter-tech",
    title: "WebPConverter.tech — Image Compression Platform",
    category: "Web Tools",
    description: "Online image conversion and compression platform offering client-side batch processing, a dedicated REST API, and WordPress/WooCommerce plugin integrations.",
    longDescription: "Engineered to solve Core Web Vitals image bloat across large web properties. Combines browser-level WebAssembly batch conversion to modern .webp format with automated lossless compression, developer REST endpoints, and CMS automation plugins.",
    technologies: ["JavaScript", "WebAssembly", "REST API", "PHP", "WordPress Plugin Architecture", "Canvas API"],
    liveUrl: "https://webpconverter.tech",
    isFeatured: true,
    status: "Completed",
    highlights: [
      "Client-side batch image processing minimizing server overhead and upload latencies.",
      "Dedicated REST API supporting automated programmatic image optimization pipelines.",
      "Integrated WordPress and WooCommerce companion plugin for on-upload asset compression."
    ]
  },
  {
    id: "cyberzip-mailer",
    title: "CyberZip Bulk Mailer",
    category: "Automation & Python",
    description: "High-efficiency bulk email dispatch and campaign workflow engine designed for outreach automation, tracking, and delivery reliability.",
    longDescription: "A streamlined email campaign delivery system tailored for high-deliverability corporate outreach, featuring personalized mail merging, scheduled delivery queues, and bounce/success tracking.",
    technologies: ["Python", "SMTP / IMAP", "Workflow Automation", "HTML Email Templates"],
    isFeatured: false,
    status: "Completed",
    highlights: [
      "Campaign delivery queues with custom throttles to protect domain reputation.",
      "Automated merge-tag personalization and delivery status logging."
    ]
  },
  {
    id: "leads-scraper",
    title: "Leads Scraper — B2B Prospect Workflow",
    category: "Automation & Python",
    description: "Targeted lead-generation scraping pipeline that extracts and structures business prospect intelligence from verified public directories.",
    longDescription: "Built to automate manual market research and B2B sales prospect generation. Features target-based collection workflows, anti-blocking measures, and structured data exports.",
    technologies: ["Python", "Web Scraping", "Data Normalization", "pandas", "CSV/Excel Pipelines"],
    isFeatured: false,
    status: "Completed",
    highlights: [
      "Targeted domain-specific collection algorithms for business intelligence.",
      "Automated data cleansing, deduplication, and structured export formatting."
    ]
  },
  {
    id: "custom-wp-plugins",
    title: "WordPress & WooCommerce Custom Tool Suite",
    category: "WordPress Plugins",
    description: "Suite of production plugins including WooCommerce Product Bargaining, an automated SEO Blog Writer, and dynamic asset optimizers.",
    longDescription: "A collection of purpose-built WordPress extensions engineered to enhance e-commerce conversion rates and streamline digital publishing operations.",
    technologies: ["PHP", "WordPress Hook System", "WooCommerce API", "MySQL", "JavaScript", "REST APIs"],
    isFeatured: false,
    status: "Active",
    highlights: [
      "WooCommerce Product Bargaining Plugin allowing dynamic customer price negotiations.",
      "SEO Blog Writer tool facilitating automated content schema drafting and optimization.",
      "Custom asset compression and database query optimizations."
    ]
  }
];
