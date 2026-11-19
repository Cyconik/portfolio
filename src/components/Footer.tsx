import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 py-10 sm:py-12 border-t border-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-navy-900 text-sm text-center md:text-left">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <div className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
              {profileData.fullName}
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Business Analyst • Product Owner • Software Developer • Tech Entrepreneur
            </p>
          </div>

          {/* Social / Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (@{profileData.handle})</span>
            </a>
            <span className="text-navy-700 hidden sm:inline">•</span>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{profileData.email}</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-navy-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {profileData.fullName}. All rights reserved.
          </div>
          <div className="text-slate-400">
            Founder of <span className="text-emerald-400 font-medium">Bargenify</span>, <span className="text-blue-400 font-medium">ScanSecure</span>, <span className="text-purple-400 font-medium">Galigram</span> & <span className="text-pink-400 font-medium">SpillX</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
