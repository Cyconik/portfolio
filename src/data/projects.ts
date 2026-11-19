export interface ProjectItem {
  id: string;
  title: string;
  category: "WordPress Plugins" | "Chrome Extensions" | "Automation & Python" | "Mobile & Systems";
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  isFeatured: boolean;
  status: "Completed" | "Active" | "Open Source" | "Live Tool";
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "universal-reblog",
    title: "Universal Reblog & Republish: WordPress Plugin",
    category: "WordPress Plugins",
    description: "Empowers website visitors to reblog, share, and republish articles across 9+ platforms in 1-click with automated canonical backlink attribution.",
    longDescription: "A zero-dependency WordPress plugin engineered to maximize viral content distribution. Allows readers to cross-publish articles while preserving the publisher's SEO equity through automated canonical headers and structured attribution links.",
    technologies: ["PHP", "WordPress Hook System", "JavaScript", "SEO Canonical Architecture", "Social Graph APIs"],
    liveUrl: "https://cyberzip.in/universal-reblog-republish/",
    isFeatured: true,
    status: "Live Tool",
    highlights: [
      "1-Click Social Sharing and multi-platform reblogging across 9+ networks.",
      "Automated canonical attribution backlink injection to preserve SEO authority.",
      "Zero third-party library dependencies for ultra-fast, lightweight page loads."
    ]
  },
  {
    id: "element-inspector",
    title: "Element Inspector: Chrome Extension",
    category: "Chrome Extensions",
    description: "Lightweight browser extension for web developers and UI designers to inspect DOM elements, download high-res images, and copy text/CSS in 1-click.",
    longDescription: "Engineered to eliminate friction during frontend development, UI auditing, and design recreation. Allows developers and designers to hover over any DOM element, inspect computed styles, download asset images directly, and extract clean text or URLs.",
    technologies: ["Chrome Extensions API (Manifest V3)", "JavaScript (ES6+)", "CSS3", "DOM Mutation Observer"],
    liveUrl: "https://cyberzip.in/element-inspector/",
    isFeatured: true,
    status: "Live Tool",
    highlights: [
      "Instant 1-click DOM inspection and computed style visualization.",
      "Direct asset and image downloading from any webpage.",
      "Zero data tracking and completely client-side browser execution."
    ]
  },
  {
    id: "bulk-mailer",
    title: "Bulk Mailer: 100% Free & Spam-Free Outreach Tool",
    category: "Automation & Python",
    description: "Cold email outreach and campaign platform with 1-click Google Sheet sync, Gmail 16-character App Password support, and merge tags with zero limits.",
    longDescription: "A high-deliverability outreach engine designed to help founders and sales professionals launch personalized cold campaigns with zero arbitrary paywalls. Features automated mail merge, custom SMTP endpoints, Gmail App Password integration, and bounce-safe throttling.",
    technologies: ["Python", "SMTP / IMAP", "Google Sheets API", "HTML Email Engine", "Delivery Throttling"],
    liveUrl: "https://cyberzip.in/bulk-mailer/",
    isFeatured: true,
    status: "Live Tool",
    highlights: [
      "100% lifetime free cold outreach with zero artificial limits.",
      "1-Click Google Sheet synchronization and dynamic merge tags.",
      "Built-in Gmail App Password authentication and spam-safe delivery delays."
    ]
  },
  {
    id: "leads-scraper",
    title: "B2B Leads Scraper: 100% Block-Free Prospecting Tool",
    category: "Automation & Python",
    description: "High-speed B2B and Google Maps lead generation scraper with anti-blocking request workflows and structured data extraction.",
    longDescription: "Built to automate lead intelligence gathering without triggering anti-bot IP blocks. Uses randomized fingerprinting, intelligent request delays, and multi-field extraction to harvest verified business prospect records directly into clean spreadsheets.",
    technologies: ["Python", "Web Scraping", "Anti-Bot Evasion", "pandas", "Google Maps Intelligence"],
    liveUrl: "https://cyberzip.in/leads-scraper.php",
    isFeatured: true,
    status: "Live Tool",
    highlights: [
      "100% block-free scraping architecture designed for enterprise B2B lead generation.",
      "Extracts phone numbers, business names, addresses, ratings, and websites.",
      "Automated spreadsheet formatting with zero duplicates."
    ]
  },
  {
    id: "quickchat",
    title: "QuickChat: 100% Offline BLE Mesh Messenger",
    category: "Mobile & Systems",
    description: "Decentralized, 100% offline group messenger for Android using multi-hop Bluetooth Low Energy (BLE) phone-to-phone relaying with zero internet or SIM card required.",
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
    title: "Job Auto Apply: Multi-Platform Automation Engine",
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
      "Captures visual screenshot proof at every application stage.",
      "Sends automated HTML email summaries with success/failure metrics."
    ]
  }
];
