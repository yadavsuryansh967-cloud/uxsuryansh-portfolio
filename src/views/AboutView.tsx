import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Download, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Award,
  Layers,
  Sparkles,
  Eye,
  X
} from 'lucide-react';
import { designerProfile, credibilityList, capabilities } from '../data/portfolioData';
import { NavTab } from '../components/Navbar';

interface AboutViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* 1. Header & Identity */}
      <section className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{designerProfile.availability}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-editorial font-normal tracking-tight text-white">
          About & Design Background
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 font-sans leading-relaxed font-normal">
          {designerProfile.heroHeadline}
        </p>
      </section>

      {/* 2. Professional Introduction & Philosophy */}
      <section className="space-y-6 text-base text-zinc-400 leading-relaxed border-t border-white/10 pt-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">Professional Focus</span>
        <div className="space-y-4 font-sans">
          {designerProfile.aboutFull.map((paragraph, index) => (
            <p key={index} className="text-zinc-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Core Principles Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#111216] border border-white/10 space-y-6 pt-6">
          <h2 className="text-sm font-mono uppercase tracking-wider text-white">
            Design Principles I Work By
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {designerProfile.designPhilosophy.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-white/20 transition-colors">
                <span className="font-editorial text-2xl text-[#3899E8] block">0{idx + 1}</span>
                <div className="space-y-1.5">
                  <h3 className="text-white text-sm sm:text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Credentials, Experience & Education */}
      <section className="space-y-6 border-t border-white/10 pt-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">Track Record</span>
          <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white tracking-tight mt-1">
            Experience & Education
          </h2>
        </div>

        <div className="space-y-4">
          {credibilityList.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-2 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="font-editorial text-lg text-white font-normal">{item.role}</span>
                  <span className="text-zinc-600 font-mono">•</span>
                  <span className="text-zinc-400 font-mono">{item.organization}</span>
                </div>
                <span className="text-zinc-500 font-mono text-[11px]">{item.period}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.summary}
                </p>
                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#3899E8] hover:text-white transition-colors font-medium shrink-0 self-start sm:self-auto"
                  >
                    <span>View Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete Tooling & Competencies */}
      <section className="space-y-6 border-t border-white/10 pt-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">Toolkit & Software</span>
        <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white tracking-tight">
          Tools & Design Workflow
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {designerProfile.tools.map((group, index) => (
            <div key={index} className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">{group.category}</h3>
              <ul className="space-y-2 text-xs text-zinc-400">
                {group.items.map((tool, tIdx) => (
                  <li key={tIdx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#16171E] to-[#0E0F13] border border-white/10 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white tracking-tight">
          Interested in collaborating or discussing an opportunity?
        </h2>
        <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          I’m currently looking for <strong className="text-white font-semibold">Product Design and UI/UX opportunities</strong> where I can contribute to real product challenges, learn from experienced teams, and continue growing as a designer.
        </p>
        <div className="pt-2 flex justify-center space-x-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* Printable / Clean Resume Preview Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#14151B] text-zinc-200 rounded-3xl border border-white/15 max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-editorial text-white">{designerProfile.name} — Resume Overview</h3>
                <p className="text-xs text-zinc-400">{designerProfile.title} · {designerProfile.location}</p>
              </div>
              <button 
                onClick={() => setShowResumeModal(false)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Summary Body */}
            <div className="space-y-5 text-xs text-zinc-300">
              <div>
                <span className="font-mono uppercase tracking-wider text-zinc-500 block mb-1 text-[10px]">Profile Summary</span>
                <p className="leading-relaxed text-zinc-300">{designerProfile.aboutShort}</p>
              </div>

              <div>
                <span className="font-mono uppercase tracking-wider text-zinc-500 block mb-2 text-[10px]">Experience & Education</span>
                <div className="space-y-3">
                  {credibilityList.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-white/[0.03] rounded-xl border border-white/5 space-y-1">
                      <div className="flex justify-between font-medium">
                        <span className="font-semibold text-white">{item.role}</span>
                        <span className="font-mono text-zinc-400 text-[11px]">{item.period}</span>
                      </div>
                      <div className="text-zinc-400 text-[11px]">{item.organization} ({item.type})</div>
                      <p className="text-zinc-400 pt-1 text-[11px]">{item.summary}</p>
                      {item.credentialUrl && (
                        <a
                          href={item.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 text-[11px] text-[#3899E8] hover:underline pt-0.5"
                        >
                          <span>View Credential</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono uppercase tracking-wider text-zinc-500 block mb-1 text-[10px]">Contact Info</span>
                <p className="font-mono text-zinc-300">{designerProfile.email} · {designerProfile.location}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={() => setShowResumeModal(false)}
                className="px-5 py-2 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
