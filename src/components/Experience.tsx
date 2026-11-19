import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experienceData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Work History
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            A verified record of business analysis, operational improvements, CRM implementations, and digital growth.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
          {experienceData.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`bg-white border transition-all duration-200 rounded-2xl overflow-hidden ${
                  isExpanded
                    ? 'border-blue-300 shadow-card ring-1 ring-blue-100'
                    : 'border-slate-200/90 shadow-subtle hover:border-slate-300'
                }`}
              >
                {/* Header Row (Clickable) */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full p-4 sm:p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 focus:outline-none"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {exp.type}
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Current Role
                        </span>
                      )}
                      {exp.client && (
                        <span className="text-xs font-medium text-slate-500 truncate">
                          Client: <strong className="text-slate-700">{exp.client}</strong>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-navy-900 leading-snug">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-600 font-medium">
                      <span className="flex items-center gap-1 text-blue-700 font-bold">
                        <Building2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex-shrink-0">
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {exp.period}
                    </span>
                    <div className="p-1 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-50">
                      {isExpanded ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-slate-100 space-y-5 animate-in slide-in-from-top-1">
                    
                    {/* Summary */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Key Verified Achievements */}
                    {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1.5">
                        <div className="text-[11px] sm:text-xs font-extrabold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          Key Impact & Milestone
                        </div>
                        <ul className="space-y-1 text-xs sm:text-sm text-blue-950">
                          {exp.keyAchievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2 font-medium">
                              <span className="text-blue-500 mt-0.5">•</span>
                              <span className="leading-snug">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Responsibilities */}
                    <div className="space-y-2.5">
                      <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                        Core Responsibilities & Technical Deliverables
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Domain Skills & Tools
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
