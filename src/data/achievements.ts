export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "Academic & Scholarship" | "Corporate Recognition" | "Measurable Impact" | "SEO Milestone";
  description: string;
  badge?: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  location: string;
  highlights: string[];
}

export const achievementsData: AchievementItem[] = [
  {
    id: "mahindra-scholarship",
    title: "Mahindra All India Talent Scholarship",
    issuer: "K. C. Mahindra Education Trust",
    date: "Merit Award",
    category: "Academic & Scholarship",
    description: "Awarded the prestigious nationwide scholarship recognizing outstanding academic excellence, technical promise, and potential in engineering disciplines.",
    badge: "National Merit",
    iconName: "Award"
  },
  {
    id: "krinvi-appreciation",
    title: "Official Letter of Appreciation",
    issuer: "Krinvi Technologies Pvt. Ltd.",
    date: "June 2023",
    category: "Corporate Recognition",
    description: "Formally recognized by corporate leadership within two months of tenure for exceptional delivery speed, proactive problem solving, and valuable client project contributions.",
    badge: "Early Recognition",
    iconName: "Star"
  },
  {
    id: "turbo-traffic-growth",
    title: "1,027% Organic Search Growth (1.5k ➔ 17.7k/mo)",
    issuer: "Turbo Auto Parts / Creative Tura",
    date: "Jul 2024 – Nov 2024",
    category: "Measurable Impact",
    description: "Architected and executed an end-to-end technical SEO overhaul, competitor content gap strategy, and Core Web Vitals optimization that scaled monthly organic sessions from ~1,570 to 17,700 within 4 months.",
    badge: "10x Organic Scale",
    iconName: "TrendingUp"
  },
  {
    id: "careerguide-top3-ranking",
    title: "Top-3 Google Organic SERP Rankings",
    issuer: "Careerguide.com",
    date: "2023",
    category: "SEO Milestone",
    description: "Conducted exhaustive keyword discovery, semantic search mapping, and on-page structured schema implementations that elevated multiple competitive assets to top-three rankings on Google organic search.",
    badge: "Page 1 Dominance",
    iconName: "Search"
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) — Computer Science and Engineering",
    institution: "Dr. APJ Abdul Kalam Technical University (AKTU)",
    period: "2022 – 2025",
    score: "7.03",
    scoreType: "CGPA",
    location: "Lucknow, Uttar Pradesh, India",
    highlights: [
      "Rigorous foundations in Data Structures, Relational Database Management Systems (RDBMS), Operating Systems, Software Engineering, and Object-Oriented Analysis & Design (OOAD).",
      "Applied computer science principles to build real-world software products, decentralized BLE mesh networks, and automated web systems."
    ]
  },
  {
    degree: "Diploma — Aircraft Maintenance Engineering (AME)",
    institution: "Board of Technical Education, Uttar Pradesh (BTEUP)",
    period: "2018 – 2021",
    score: "80%",
    scoreType: "Percentage",
    location: "Uttar Pradesh, India",
    highlights: [
      "Graduated with First Class with Distinction (80%).",
      "Deeply trained in mission-critical system diagnostics, regulatory documentation standards, root cause analysis, and rigorous fail-safe protocols that now inform my engineering and business analysis rigor."
    ]
  }
];
