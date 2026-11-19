import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
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
    { label: 'Journey', href: '#journey' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Products', href: '#products' },
    { label: 'Recognition', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-blue-700 transition-colors">
              NS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 tracking-tight text-base group-hover:text-blue-600 transition-colors">
                {profileData.name}
              </span>
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                @{profileData.handle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium text-white bg-navy-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-navy-900"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="px-3 py-1 text-xs font-medium text-navy-900 border border-slate-300 rounded-md sm:hidden"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/{profileData.handle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
