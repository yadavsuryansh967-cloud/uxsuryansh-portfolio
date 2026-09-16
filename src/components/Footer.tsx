import React, { useState } from 'react';
import { ArrowUp, Copy, Check, ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';
import { NavTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designerProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080A] text-zinc-300 pt-20 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Large Editorial Invitation Statement */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Based in {designerProfile.location} · Open for opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-white leading-[1.15]">
            Driven by <span className="italic font-editorial text-zinc-200">visual craft</span>, <span className="italic font-editorial text-zinc-200">systems thinking</span> & human experience.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
            Whether you're looking for a product design partner for complex enterprise platforms, high-polish consumer apps, or design system infrastructure, I'd love to connect.
          </p>
        </div>

        {/* Contact Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Direct Email</span>
            <div className="flex items-center space-x-3">
              <a 
                href={`mailto:${designerProfile.email}`}
                className="text-lg sm:text-xl font-mono text-white hover:text-blue-400 transition-colors"
              >
                {designerProfile.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-300 text-xs font-medium transition-colors flex items-center space-x-1.5"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a 
              href={designerProfile.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors flex items-center space-x-1.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-zinc-400">{designerProfile.name}</span>
            <span>•</span>
            <span>© {new Date().getFullYear()}</span>
            <span>•</span>
            <span className="font-mono text-[11px]">Strict Truthful UX Standard</span>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
