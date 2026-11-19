import React from 'react';
import { Award, Star, TrendingUp, Search, GraduationCap, CheckCircle2 } from 'lucide-react';
import { achievementsData, educationData } from '../data/achievements';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'Star': return <Star className="w-5 h-5 text-blue-500" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 'Search': return <Search className="w-5 h-5 text-indigo-500" />;
      default: return <Award className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-white border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Recognition & Academic Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
            Awards, Milestones & Formal Education
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            Documented honors and rigorous academic foundations behind my technical execution.
          </p>
        </div>

        {/* Top Grid: Honors & Awards */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-5 sm:mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Honors & Key Milestones</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-subtle hover:bg-white hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-subtle flex-shrink-0">
                        {getIcon(item.iconName)}
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    {item.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 flex-shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-navy-900 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Issued by: <strong className="text-slate-700">{item.issuer}</strong></span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Grid: Formal Education */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-5 sm:mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span>Formal Academic Education</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-subtle hover:border-slate-300 transition-all space-y-3 sm:space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-900 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-700 font-semibold mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 self-start sm:self-auto flex-shrink-0">
                    {edu.scoreType}: {edu.score}
                  </span>
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-2 sm:gap-3">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
