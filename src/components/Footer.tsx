import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 py-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-navy-900 text-sm">
          
          {/* Brand Info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-white font-bold text-lg tracking-tight">
              {profileData.fullName}
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Business Analyst • Product & Operations Analyst • Software Developer • Entrepreneur
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-navy-700">•</span>
            <a
              href={`tel:${profileData.phone}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>{profileData.phone}</span>
            </a>
            <span className="text-navy-700">•</span>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {profileData.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with precision in React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
