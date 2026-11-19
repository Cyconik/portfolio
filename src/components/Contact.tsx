import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/cyco2052544@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject || 'New Inquiry'}`,
          message: formData.message,
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        // Fallback to mailto
        window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setFormSubmitted(true);
      }
    } catch {
      // In case of network error, launch mailto
      window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-xs font-semibold text-slate-800 uppercase tracking-wider">
            Initiate Contact
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
            Let's Discuss Business Impact, Product Roles & Collaboration
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            Available for permanent hire, leadership sponsorship, or strategic roles as Business Analyst, Product Owner, or Technical Product Lead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Verified Contacts */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-subtle space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-navy-900">
                Direct Contact Channels
              </h3>

              <div className="space-y-3 sm:space-y-4">
                
                {/* Email (Primary) */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block">
                        Direct Email (Fast Response)
                      </span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-xs sm:text-sm font-bold text-navy-900 hover:text-blue-700 truncate block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-2 rounded-lg hover:bg-blue-100 text-blue-700 transition-colors flex-shrink-0"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location with Open to Relocate */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="w-10 h-10 rounded-lg bg-slate-200/80 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Location & Relocation
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-navy-900 block">
                      Noida, Uttar Pradesh, India
                    </span>
                    <span className="inline-block mt-1 text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Open to Relocate Anywhere (Remote & Onsite)
                    </span>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center flex-shrink-0">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-navy-900">
                        @{profileData.handle}
                      </span>
                    </div>
                  </div>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-blue-600"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Recruiter / Founder Notice */}
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <span className="font-bold block">For Founders, Executives & Recruiters:</span>
                <p className="text-emerald-900/90 leading-relaxed">
                  Looking to hire or sponsor a high-ownership Business Analyst, Product Owner, or Senior Technical Specialist? Messages submitted here arrive directly in my primary inbox: <strong>{profileData.email}</strong>.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Direct-to-Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 shadow-subtle">
              <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">
                Send a Message Directly to My Inbox
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6">
                All submissions are delivered in real time to <strong>{profileData.email}</strong>.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-950">
                    Message Delivered Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-sm mx-auto">
                    Thank you, {formData.name || 'there'}. Your inquiry has been sent directly to my inbox at {profileData.email}. I will reply shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-bold text-emerald-900 underline underline-offset-2 hover:text-emerald-700"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject / Hiring Opportunity *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Business Analyst / Product Owner Opportunity or Sponsorship"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share role scope, sponsorship details, or collaboration inquiry..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 resize-y"
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 text-xs text-red-700 bg-red-50 rounded-xl border border-red-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-slate-800 disabled:opacity-70 rounded-xl shadow-card hover:shadow-card-hover transition-all focus:ring-2 focus:ring-offset-2 focus:ring-navy-900"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                        <span>Transmitting to cyco2052544@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-blue-400" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
