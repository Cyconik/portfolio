import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Layers, 
  Code2, 
  BarChart3, 
  TrendingUp, 
  Server
} from 'lucide-react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-xs font-semibold text-slate-800 uppercase tracking-wider">
            Verified Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Skills & Technical Expertise
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Strictly based on documented professional experience, enterprise client projects, and built products.
          </p>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto mb-10">
          {skillsData.map((category, index) => {
            const isSelected = selectedCategory === index;
            return (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-navy-900 text-white shadow-card'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                }`}
              >
                <span className={isSelected ? 'text-blue-400' : 'text-slate-500'}>
                  {getIcon(category.iconName)}
                </span>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-subtle">
            
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
              <div>
                <h3 className="text-xl font-bold text-navy-900">
                  {skillsData[selectedCategory].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {skillsData[selectedCategory].subtitle}
                </p>
              </div>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                {skillsData[selectedCategory].skills.length} Capabilities
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsData[selectedCategory].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-colors flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 text-sm">
                        {skill.name}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-500 leading-normal">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  {skill.level && (
                    <span
                      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${
                        skill.level === 'Expert'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : skill.level === 'Proficient'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
