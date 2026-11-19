import React, { useState } from 'react';
import { ExternalLink, Download, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';

export const FeaturedProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = [
    'All',
    'WordPress Plugins',
    'Chrome Extensions',
    'Automation & Python',
    'Mobile & Systems',
    'Client Web Platforms'
  ];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Engineered Tools & Systems
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
            Featured Projects, Plugins & Extensions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            High-utility software spanning WordPress plugins, Chrome extensions, anti-blocking scrapers, and automated client web systems.
          </p>
        </div>

        {/* Category Filters (Mobile Scrollable) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                filter === cat
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              {/* Card Top */}
              <div className="space-y-3 sm:space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Source on GitHub"
                        className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Live Project"
                        className="p-1.5 text-slate-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <ul className="space-y-1.5 pt-2 text-xs text-slate-600">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Tech Pills & Action Links */}
              <div className="pt-5 mt-5 border-t border-slate-100 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1 text-xs font-semibold">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800"
                    >
                      <span>GitHub Source</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800"
                    >
                      <span>Explore Live Tool</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-slate-400 font-normal">Internal Tooling</span>
                  )}

                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>Get APK</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
