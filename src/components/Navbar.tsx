import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Projects & Tools', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Recognition', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none rounded-lg p-0.5 flex-shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-sm group-hover:bg-blue-700 transition-colors flex-shrink-0">
              NKS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                {profileData.fullName}
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
                @{profileData.handle} • Founder
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Clean and Spacious */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-slate-600 hover:text-navy-900 hover:bg-slate-100/80 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200/60"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white bg-navy-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-navy-900"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-bold text-white bg-navy-900 rounded-md sm:hidden"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50/80 px-3 py-2 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>{profileData.email}</span>
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5"
            >
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4" />
                <span>github.com/{profileData.handle}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
