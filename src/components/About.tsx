import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            About Nikhil Singh
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Bridging Business Strategy & Technical Execution
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A methodical approach forged across Aircraft Maintenance discipline, Computer Science foundations, and 4 years of hands-on digital delivery.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Full Career Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-600" />
              <span>Professional Narrative</span>
            </h3>

            {profileData.fullStory.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600">
                {paragraph}
              </p>
            ))}

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 mt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Verified Career Snapshot
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block">Current Organization</span>
                  <strong className="text-slate-800">Opalspace</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Current Role</span>
                  <strong className="text-slate-800">Business Analyst</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Education</span>
                  <strong className="text-slate-800">B.Tech CSE + AME Diploma</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Philosophy & Core Principles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-subtle">
              <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span>Operating Philosophy</span>
              </h3>

              <div className="space-y-4">
                {profileData.philosophy.map((item, idx) => {
                  const [principle, description] = item.split(': ');
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">
                          {principle}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-normal">
                          {description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pillars Box */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Core Disciplines
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>BRD / FRD & User Stories</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Perfex CRM Customization</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Technical SEO & Speed</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Python & Web Systems</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
