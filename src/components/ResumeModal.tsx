import React from 'react';
import { X, Printer } from 'lucide-react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { educationData } from '../data/achievements';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="font-bold text-navy-900 text-sm sm:text-base">
              Nikhil Kumar Singh — Official Curriculum Vitae
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
              Verified 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-subtle"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-800 text-sm leading-relaxed font-sans">
          
          {/* Header */}
          <div className="text-center border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              {profileData.fullName.toUpperCase()}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-blue-800 tracking-wide">
              BUSINESS ANALYST | PRODUCT & OPERATIONS ANALYST | SOFTWARE DEVELOPER
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium pt-1">
              <span>{profileData.phone}</span>
              <span>•</span>
              <span>{profileData.email}</span>
              <span>•</span>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                github.com/{profileData.handle}
              </a>
              <span>•</span>
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-normal">
              {profileData.shortBio} Skilled in requirement gathering, BRD/FRD, user stories, acceptance criteria, process flows, gap analysis, RTM, and UAT. Experienced in coordinating with vendors and cross-functional teams, administering CRM workflows, and translating operational needs into clear functional requirements. Combines business analysis capabilities with technical knowledge of WordPress, PHP, MySQL, APIs, Flutter, and Python. Contributed to increasing Turbo Auto Parts' organic traffic from approximately 1,570 to 17,700 monthly sessions in four months (+1,027% organic scale).
            </p>
          </div>

          {/* Core Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
              Core Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900 block font-semibold">Business Analysis:</strong>
                <span className="text-slate-600">Requirement Gathering, Stakeholder Management, BRD, FRD, User Stories, Acceptance Criteria, RTM, Gap Analysis, Process Flows, Wireframes, UAT, Change Requests, SDLC, Agile/Scrum</span>
              </div>
              <div>
                <strong className="text-slate-900 block font-semibold">Operations & Delivery:</strong>
                <span className="text-slate-600">Vendor Management, Cross-functional Coordination, Workflow Optimization, Process Improvement, Issue Tracking, Dependency Management, Documentation</span>
              </div>
              <div>
                <strong className="text-slate-900 block font-semibold">Data & Reporting:</strong>
                <span className="text-slate-600">Microsoft Excel (Advanced), Power BI, KPI Tracking, Data Analysis, Google Analytics, Search Console</span>
              </div>
              <div>
                <strong className="text-slate-900 block font-semibold">CRM & Technical:</strong>
                <span className="text-slate-600">Perfex CRM, WordPress, WooCommerce, PHP, CodeIgniter, MySQL, REST API Integration, Database Design, JavaScript, HTML5, CSS3, Python, Flutter/Dart</span>
              </div>
              <div>
                <strong className="text-slate-900 block font-semibold">Digital Growth & SEO:</strong>
                <span className="text-slate-600">Technical SEO, On-Page SEO, Keyword Research, Competitor Analysis, Content Gap Analysis, Schema Markup, Core Web Vitals, SEMrush, Ahrefs</span>
              </div>
              <div>
                <strong className="text-slate-900 block font-semibold">Tools & Platforms:</strong>
                <span className="text-slate-600">Git, GitHub, Asana, Notion, Google Ads, Meta Ads Manager, GoDaddy, Hostinger, AWS, cPanel, Domain/DNS, SSL, Website Migration</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
              Professional Experience
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex flex-wrap items-center justify-between font-bold text-navy-900">
                  <span>{exp.role} | {exp.company} {exp.client && `(Client: ${exp.client})`}</span>
                  <span className="text-slate-500 font-mono text-xs">{exp.period}</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700 pl-4 list-disc">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx} className="leading-snug">{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Products & Independent Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
              Products & Independent Projects
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <strong className="text-slate-900 font-semibold">ScanSecure (scansecure.in) — Founder:</strong>
                <span className="text-slate-700 ml-1">Emergency smart-card platform using a QR-enabled PVC card to make vital emergency information and contacts accessible from any phone without an app or login.</span>
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">SpillX (spillx.in) — Founder:</strong>
                <span className="text-slate-700 ml-1">Anonymous social platform for text confessions, emotional reactions, and anonymous one-to-one conversations.</span>
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">Galigram (galigram.com) — Product Builder:</strong>
                <span className="text-slate-700 ml-1">Location-aware social information platform for concise 30-second video reports and hyper-local discovery (scheduled global launch Jan 2027).</span>
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">QuickChat (github.com/Cyconik/QuickChat) — Developer:</strong>
                <span className="text-slate-700 ml-1">Open-source offline Android messenger using Bluetooth Low Energy mesh communication and multi-hop message relaying.</span>
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">WebPConverter.tech — Creator:</strong>
                <span className="text-slate-700 ml-1">Client-side batch image conversion/compression platform, REST API, and WordPress/WooCommerce plugin.</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-1.5 text-xs">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <strong className="text-slate-900 font-semibold">{edu.degree}</strong>
                    <div className="text-slate-600">{edu.institution}</div>
                  </div>
                  <div className="text-right font-mono text-slate-500">
                    <div>{edu.period}</div>
                    <div>{edu.scoreType}: {edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
              Awards & Recognition
            </h2>
            <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
              <li><strong>Mahindra All India Talent Scholarship</strong> — recognized for academic excellence and technical potential.</li>
              <li><strong>Appreciation Letter, Krinvi Technologies</strong> — received within two months of joining for high performance.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
