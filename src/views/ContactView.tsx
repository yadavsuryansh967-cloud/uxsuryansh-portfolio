import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send
} from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designerProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* 1. Header & Direct Invitation */}
      <div className="max-w-2xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 text-zinc-300 text-xs font-mono border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Response time: typically within 24 hours</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-editorial font-normal tracking-tight text-white">
          Get in Touch
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-sans">
          Whether you are a design director discussing a senior product design role, a recruiter evaluating case study depth, or exploring a design systems contract, I'd love to connect.
        </p>
      </div>

      {/* 2. Primary Direct Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left column: Direct channels */}
        <div className="md:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="p-6 rounded-3xl bg-[#111216] border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Direct Email</span>
              <Mail className="w-4 h-4 text-zinc-400" />
            </div>

            <div>
              <a 
                href={`mailto:${designerProfile.email}`}
                className="text-base font-semibold text-white hover:text-blue-400 transition-colors block font-mono"
              >
                {designerProfile.email}
              </a>
              <p className="text-xs text-zinc-400 mt-1">Best channel for role discussions & portfolio deep dives.</p>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center justify-center space-x-2 border border-white/10"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social & Professional Links */}
          <div className="p-6 rounded-3xl bg-[#111216] border border-white/10 shadow-xl space-y-3 text-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
              Professional Profile
            </span>

            <a
              href={designerProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors border border-white/5"
            >
              <span className="font-medium text-sm">LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Right column: Lightweight, frictionless message form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111216] border border-white/10 shadow-xl space-y-6">
            <div>
              <h2 className="text-xl font-editorial font-normal text-white tracking-tight">Send a Direct Message</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Have an inquiry or role description? Drop a note directly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-lg text-white">Message Recorded</h3>
                <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. I will review your message and reply to <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="text-xs font-semibold text-emerald-400 underline underline-offset-4 pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="font-medium text-zinc-300 block">
                    Your Name / Recruiter Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/[0.03] text-white focus:outline-hidden focus:border-white/40 focus:ring-1 focus:ring-white/40 text-xs placeholder:text-zinc-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="font-medium text-zinc-300 block">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/[0.03] text-white focus:outline-hidden focus:border-white/40 focus:ring-1 focus:ring-white/40 text-xs placeholder:text-zinc-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="font-medium text-zinc-300 block">
                    Opportunity or Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Share role requirements, team details, or project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/[0.03] text-white focus:outline-hidden focus:border-white/40 focus:ring-1 focus:ring-white/40 text-xs placeholder:text-zinc-600 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
