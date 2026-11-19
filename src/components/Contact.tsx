import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-xs font-semibold text-slate-800 uppercase tracking-wider">
            Initiate Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Let's Discuss Business Impact & Products
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether for business analysis leadership, digital product engineering, or venture partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Verified Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-subtle space-y-6">
              <h3 className="text-lg font-bold text-navy-900">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                
                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Direct Phone</span>
                      <a href={`tel:${profileData.phone}`} className="text-sm font-semibold text-navy-900 hover:text-blue-600">
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    aria-label="Copy phone number"
                    className="p-1.5 rounded-md hover:bg-slate-200/60 text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Email Address</span>
                      <a href={`mailto:${profileData.email}`} className="text-sm font-semibold text-navy-900 hover:text-blue-600">
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-1.5 rounded-md hover:bg-slate-200/60 text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Work Location</span>
                    <span className="text-sm font-semibold text-navy-900">
                      {profileData.location}
                    </span>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">GitHub Profile</span>
                      <span className="text-sm font-semibold text-navy-900">
                        @{profileData.handle}
                      </span>
                    </div>
                  </div>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-blue-700 hover:text-blue-900"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-950 space-y-1">
                <span className="font-semibold block">Preferred Channels:</span>
                <p className="text-slate-600">
                  Phone and GitHub are immediately active. Additional handles and verified LinkedIn links will be updated in Phase 2.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-subtle">
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details below and I will respond within 24 business hours.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-950">
                    Message Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name || 'there'}. I have logged your message and will get in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-semibold text-emerald-900 underline underline-offset-2 hover:text-emerald-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Senior Business Analyst Opportunity / Product Discussion"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project scope, organization needs, or collaboration ideas..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-navy-900 hover:bg-slate-800 rounded-xl shadow-card hover:shadow-card-hover transition-all focus:ring-2 focus:ring-offset-2 focus:ring-navy-900"
                  >
                    <Send className="w-4 h-4 text-blue-400" />
                    <span>Send Message</span>
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
