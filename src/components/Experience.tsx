import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experienceData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A verified record of business analysis, operational improvements, CRM implementations, and digital growth.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl mx-auto space-y-6">
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
                  className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {exp.type}
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Current Role
                        </span>
                      )}
                      {exp.client && (
                        <span className="text-xs font-medium text-slate-500">
                          Client: <strong className="text-slate-700">{exp.client}</strong>
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-navy-900">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 font-medium">
                      <span className="flex items-center gap-1 text-blue-700 font-semibold">
                        <Building2 className="w-4 h-4 text-blue-500" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/60">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <div className="p-1 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-50">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-6 animate-in slide-in-from-top-1">
                    
                    {/* Summary */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Key Verified Achievements */}
                    {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 space-y-2">
                        <div className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          Key Impact & Milestone
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-blue-950">
                          {exp.keyAchievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2 font-medium">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Core Responsibilities & Technical Deliverables
                      </h4>
                      <ul className="space-y-2.5 text-sm text-slate-600">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-normal">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Domain Skills & Tools
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
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
