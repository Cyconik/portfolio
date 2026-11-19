import React from 'react';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-100/40 via-indigo-100/30 to-slate-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 shadow-subtle hover:border-slate-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Strategic Business Analyst & Digital Product Roles</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-500 hidden sm:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 inline text-slate-400" /> Noida, India
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-900 leading-[1.1]">
            Nikhil Singh
          </h1>

          {/* Positioning Headline */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 max-w-3xl mx-auto leading-relaxed">
            <span className="text-blue-700">Business Analyst</span>
            <span className="text-slate-300 mx-2 font-light">|</span>
            <span className="text-navy-900">Product & Operations Analyst</span>
            <span className="text-slate-300 mx-2 font-light">|</span>
            <span className="text-slate-700">Software Developer</span>
          </p>

          {/* Compelling Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            4 years of experience translating business vision into high-impact digital delivery. 
            Bridging stakeholder requirements (BRD/FRD/User Stories), operational CRM workflows, 
            and technical systems. Contributed to scaling client organic traffic by{' '}
            <strong className="text-navy-900 font-semibold underline decoration-blue-300 decoration-2 underline-offset-2">
              +1,027% in 4 months
            </strong>.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-navy-900 hover:bg-slate-800 rounded-xl shadow-card hover:shadow-card-hover transition-all focus:ring-2 focus:ring-offset-2 focus:ring-navy-900 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl shadow-subtle transition-all"
            >
              <GithubIcon className="w-4 h-4 text-slate-900" />
              <span>GitHub Profile</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl shadow-subtle transition-all"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>View / Download Resume</span>
            </button>
          </div>

          {/* Verified Highlight Metrics Bar */}
          <div className="pt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
              {profileData.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl p-4 shadow-subtle hover:border-slate-300 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
