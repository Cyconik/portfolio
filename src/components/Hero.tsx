import React from 'react';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[300px] bg-gradient-to-tr from-blue-100/40 via-emerald-100/30 to-indigo-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          
          {/* Top Status & Location Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 shadow-subtle hover:border-slate-300 transition-colors max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="font-semibold text-navy-900">Open for Strategic Roles:</span>
            <span>Business Analyst • Product Owner • Tech Lead</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-500 hidden sm:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 inline text-slate-400" /> Noida, India
            </span>
          </div>

          {/* Main Name */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-900 leading-[1.1] break-words">
            {profileData.fullName}
          </h1>

          {/* Positioning Headline */}
          <p className="text-base sm:text-xl md:text-2xl font-bold text-slate-700 max-w-3xl mx-auto leading-snug">
            <span className="text-blue-700">Business Analyst</span>
            <span className="text-slate-300 mx-1.5 sm:mx-2 font-light">|</span>
            <span className="text-navy-900">Product Owner</span>
            <span className="text-slate-300 mx-1.5 sm:mx-2 font-light">|</span>
            <span className="text-emerald-700">Digital Product Builder & Founder</span>
          </p>

          {/* Compelling Value Proposition */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            4 years of experience translating business problems into high-impact products. 
            Bridging stakeholder requirements (BRD/FRD/User Stories), CRM workflow optimization, 
            and scalable web systems. Contributed to scaling client organic search sessions by{' '}
            <strong className="text-navy-900 font-bold underline decoration-blue-400 decoration-2 underline-offset-2">
              +1,027% in 4 months
            </strong>.
          </p>

          {/* FLAGSHIP INNOVATION SPOTLIGHT: BARGENIFY */}
          <div className="pt-2 pb-1 max-w-2xl mx-auto">
            <a
              href="#products"
              className="group block p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/80 hover:border-emerald-300 shadow-sm hover:shadow-card transition-all text-left"
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white p-1.5 border border-emerald-200 shadow-subtle flex-shrink-0 flex items-center justify-center">
                    <img src="./assets/logos/bargenify.svg" alt="Bargenify Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-600 text-white">
                        Flagship Innovation
                      </span>
                      <strong className="text-sm sm:text-base font-extrabold text-navy-900">
                        Bargenify.com
                      </strong>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      <strong>India's 1st Online Bargaining Platform</strong> — Building custom plugins & APIs for shop owners to enable real-time digital price negotiations.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform flex-shrink-0">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-white bg-navy-900 hover:bg-slate-800 rounded-xl shadow-card hover:shadow-card-hover transition-all focus:ring-2 focus:ring-offset-2 focus:ring-navy-900 group"
            >
              <span>Explore My Products & Works</span>
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl shadow-subtle transition-all"
            >
              <GithubIcon className="w-4 h-4 text-slate-900" />
              <span>GitHub (@{profileData.handle})</span>
            </a>

            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl shadow-subtle transition-all"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Curriculum Vitae</span>
            </button>
          </div>

          {/* Verified Highlight Metrics Bar */}
          <div className="pt-6 sm:pt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-left">
              {profileData.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-xl p-3 sm:p-4 shadow-subtle hover:border-slate-300 transition-colors"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5 leading-snug">
                    {metric.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-1 line-clamp-2">
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
