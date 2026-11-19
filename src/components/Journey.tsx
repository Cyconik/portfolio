import React from 'react';
import { Calendar, Briefcase, GraduationCap, Rocket, CheckCircle2 } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  organization: string;
  location?: string;
  type: 'education' | 'career' | 'venture';
  highlights: string[];
}

export const Journey: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '2025 – Present',
      title: 'Founder & Architect: Bargenify.com',
      subtitle: "India's 1st Online Bargaining Platform for E-Commerce Merchants",
      organization: 'Bargenify',
      type: 'venture',
      highlights: [
        'Architecting digital negotiation plugins and APIs for online shop owners.',
        'Digitizing retail price bargaining to increase e-commerce conversion rates.',
        'Protecting merchant profit margins through automated algorithmic threshold controls.'
      ]
    },
    {
      year: 'Dec 2024 – Present',
      title: 'Business Analyst',
      subtitle: 'Operational requirements, Perfex CRM customization & vendor management',
      organization: 'Opalspace',
      location: 'Noida, Uttar Pradesh',
      type: 'career',
      highlights: [
        'Directly supporting leadership with BRD/FRD notes and delivery backlog prioritization.',
        'Customizing Perfex CRM workflows and database entities to streamline lead pipelines.',
        'Building executive reporting dashboards using advanced Excel and Power BI.'
      ]
    },
    {
      year: 'Jul 2024 – Nov 2024',
      title: 'Business Analyst / WordPress Developer',
      subtitle: 'Client: Turbo Auto Parts — Scaled organic traffic by +1,027%',
      organization: 'Creative Tura Pvt. Ltd.',
      location: 'India',
      type: 'career',
      highlights: [
        'Authored complete BA artifacts: Project Charter, BRD, FRD, User Stories, RTM, and UAT test plans.',
        'Specified and mapped user journeys for online used engine & transmission bidding feature.',
        'Drove organic traffic from ~1,570 to 17,700 monthly sessions in 4 months (+1,027% organic scale).'
      ]
    },
    {
      year: '2023 – 2024',
      title: 'Ventures: ScanSecure, SpillX & Galigram',
      subtitle: 'Founder of independent digital products & emergency card ecosystem',
      organization: 'Founder / Product Architect',
      type: 'venture',
      highlights: [
        'Founded ScanSecure: QR-enabled PVC emergency medical card ecosystem with zero-app access.',
        'Founded Galigram: Location-aware hyper-local micro-video social platform (under process).',
        'Founded SpillX: Anonymous social confession and emotional expression community.',
        'Created WebPConverter.tech: Slashes image payloads up to 90% without quality loss.'
      ]
    },
    {
      year: 'Oct 2023 – May 2024',
      title: 'WordPress Developer & SEO Strategist',
      subtitle: 'Client web platforms across 8+ vertical industries',
      organization: 'Prodemy India Pvt. Ltd.',
      location: 'India',
      type: 'career',
      highlights: [
        'Delivered responsive web builds for logistics, pharmacy, e-commerce, fitness, and travel clients.',
        'Implemented technical SEO audits, site speed caching layers, and structured metadata schemas.'
      ]
    },
    {
      year: 'Apr 2023 – Sep 2023',
      title: 'WordPress Developer Intern',
      subtitle: 'Web builds, e-commerce marketplace feeds & rapid recognition',
      organization: 'Krinvi Technologies Pvt. Ltd.',
      location: 'India',
      type: 'career',
      highlights: [
        'Built client websites in construction and finance domains.',
        'Managed Amazon and Flipkart e-commerce product catalogs and search tags.',
        'Received an official Appreciation Letter within two months for exceptional contributions.'
      ]
    },
    {
      year: 'Nov 2022 – Apr 2023',
      title: 'Frontend Developer Intern',
      subtitle: 'Responsive frontend components & search rankings',
      organization: 'Careerguide.com',
      location: 'India',
      type: 'career',
      highlights: [
        'Developed frontend UI components with HTML5, CSS3, and modern JavaScript.',
        'Achieved Top-3 Google organic rankings for core career advisory guides using SEMrush.'
      ]
    },
    {
      year: '2022 – 2025',
      title: 'B.Tech in Computer Science and Engineering',
      subtitle: 'Software engineering, database architecture & algorithms',
      organization: 'Dr. APJ Abdul Kalam Technical University (AKTU)',
      location: 'Lucknow, UP',
      type: 'education',
      highlights: [
        'Graduated with CGPA 7.03.',
        'Recipient of the prestigious Mahindra All India Talent Scholarship.'
      ]
    },
    {
      year: '2018 – 2021',
      title: 'Diploma in Aircraft Maintenance Engineering',
      subtitle: 'Mission-critical systems, diagnostic rigor & compliance protocols',
      organization: 'Board of Technical Education, Uttar Pradesh (BTEUP)',
      type: 'education',
      highlights: [
        'Graduated with First Class with Distinction (80%).',
        'Trained in rigorous system diagnostics, preventive maintenance, and strict procedural compliance.'
      ]
    }
  ];

  return (
    <section id="journey" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-xs font-semibold text-slate-800 uppercase tracking-wider">
            Career Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
            My Professional Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            A continuous trajectory of engineering discipline, technical execution, and business analysis impact.
          </p>
        </div>

        {/* Timeline Component - Fully Mobile Responsive */}
        <div className="max-w-4xl mx-auto relative px-2 sm:px-0">
          
          {/* Vertical Spine: Left on mobile, center on sm+ */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-6 sm:space-y-12">
            {events.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Icon */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-sm z-10">
                    {event.type === 'career' ? (
                      <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    ) : event.type === 'education' ? (
                      <GraduationCap className="w-3.5 h-3.5 text-navy-900" />
                    ) : (
                      <Rocket className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>

                  {/* Content Card with proper padding on mobile */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-6 w-full">
                    <div className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-subtle hover:shadow-card transition-all group">
                      
                      {/* Event Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 text-slate-700">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {event.year}
                        </span>
                        <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                          {event.organization}
                          {event.location && ` • ${event.location}`}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-blue-700 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5 leading-snug">
                        {event.subtitle}
                      </p>

                      {/* Highlights */}
                      <ul className="mt-3 space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                        {event.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
