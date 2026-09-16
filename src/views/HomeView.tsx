import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  Activity,
  CreditCard,
  Cpu,
  Clock,
  Eye,
  Check,
  Copy
} from 'lucide-react';
import { designerProfile, caseStudies, capabilities, credibilityList } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { NavTab } from '../components/Navbar';

interface HomeViewProps {
  onNavigate: (tab: NavTab) => void;
  onSelectProject: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectProject }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const initials = designerProfile.name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designerProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-24 sm:space-y-32 py-8 sm:py-16">
      {/* 1. HERO SECTION (Inspired by Perry Wang: Atmospheric, Editorial Typography, Visual Craft) */}
      <section id="hero-section" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Ambient Radial Glow for atmosphere without slop */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Big Editorial Headline & Positioning */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{designerProfile.availability}</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                {designerProfile.name} — {designerProfile.title}
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-normal tracking-tight text-white leading-[1.08]">
                Driven by <span className="italic font-editorial text-zinc-200">visual craft</span>, <span className="italic font-editorial text-zinc-200">systems thinking</span> & human experience.
              </h1>
            </div>

            {/* Narrative Value Proposition */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-sans font-normal">
              {designerProfile.valueProposition}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-cta-work"
                onClick={() => {
                  const el = document.getElementById('selected-works-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg flex items-center space-x-2"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-full bg-white/5 text-white border border-white/15 text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Fast 30-Second Recruiter Case Study Jump */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-zinc-500 font-mono text-[11px]">Direct Case Study Jump:</span>
              <button
                onClick={() => onSelectProject('shared-record-local-services')}
                className="px-3 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-[#48A1EA] font-mono text-xs transition-colors border border-[#48A1EA]/30 flex items-center space-x-1"
              >
                <span>01 Servotix (Shared Record)</span>
                <ChevronRight className="w-3 h-3 text-[#48A1EA]" />
              </button>
              <button
                onClick={() => onSelectProject('invotix')}
                className="px-3 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-[#3899E8] font-mono text-xs transition-colors border border-[#3899E8]/30 flex items-center space-x-1"
              >
                <span>02 Invotix (Invoice Journey)</span>
                <ChevronRight className="w-3 h-3 text-[#3899E8]" />
              </button>
            </div>
          </div>

          {/* Right Column: "Designer at a Glance" Glass Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#121318] rounded-3xl border border-white/10 p-6 sm:p-7 space-y-5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#3899E8] block font-semibold">
                    Product Designer
                  </span>
                  <h3 className="font-editorial text-2xl font-normal text-white">
                    Suryansh Yadav
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#3899E8]/10 border border-[#3899E8]/30 text-[#48A1EA] flex items-center justify-center font-bold font-mono text-sm tracking-wide">
                  SY
                </div>
              </div>

              {/* Areas of Focus */}
              <div className="space-y-2.5 text-xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                  Areas of Focus
                </span>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                    <div className="text-white font-medium flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48A1EA]" />
                      <span>Product & UX Design</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] pl-3">
                      Research • User Flows • Information Architecture • Prototyping
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                    <div className="text-white font-medium flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3899E8]" />
                      <span>UI & Visual Design</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] pl-3">
                      Visual Hierarchy • Typography • Layout • Interaction
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                    <div className="text-white font-medium flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>Design Systems</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] pl-3">
                      Components • Auto Layout • Consistency • Documentation
                    </p>
                  </div>
                </div>
              </div>

              {/* Design Approach */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                  Design Approach
                </span>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  I focus on understanding the problem before designing the interface — combining research, structured thinking, and visual design to create clear and purposeful digital experiences.
                </p>
              </div>

              {/* Direct Reach */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-400 text-[11px]">Reach:</span>
                <a
                  href={`mailto:${designerProfile.email}`}
                  className="text-xs font-mono text-[#48A1EA] hover:text-white transition-colors flex items-center space-x-1.5 bg-blue-500/10 px-2.5 py-1.5 rounded-lg border border-[#48A1EA]/30"
                >
                  <span>{designerProfile.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quick Recruiter Metric Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#111216] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#3899E8] font-semibold block">Selected Work</span>
            <span className="font-editorial text-lg text-white block">2 Product Design Case Studies</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#111216] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#3899E8] font-semibold block">Design Focus</span>
            <span className="font-sans text-xs text-zinc-200 block font-medium">Research → Structure → Interaction → Visual Design</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#111216] border border-white/10 space-y-1 lg:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Currently Looking For</span>
            </span>
            <p className="text-zinc-300 text-xs leading-relaxed">
              UI/UX & Product Design opportunities where I can contribute, learn, and grow through real product challenges.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORKS SECTION (Showcase with Deep Cards) */}
      <section id="selected-works-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-white tracking-tight mt-1">
              Work
            </h2>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center space-x-1.5 transition-colors"
          >
            <span>View All Projects Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHeroEmphasis={index === 0}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </section>

      {/* 3. ABOUT / PHILOSOPHY PREVIEW */}
      <section id="about-preview-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111216] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3899E8] block font-semibold">
              UI/UX Design & Visual Craft
            </span>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white tracking-tight leading-snug">
              Designing clear, purposeful interfaces by combining user needs, visual thinking, and practical problem-solving.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              I’m a UI/UX designer focused on turning real user problems into simple, usable digital experiences. I combine UX thinking with visual design to create interfaces that are clear, accessible, and easy to understand — from early research and user flows to wireframes, prototypes, and refined UI.
            </p>
            <div className="pt-2">
              <button
                id="btn-about-more"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#48A1EA] hover:text-white transition-colors group"
              >
                <span>Read more about my background, process & philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/[0.02] p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 block font-semibold">
              Core Principles
            </h3>
            <ul className="space-y-3.5 text-xs text-zinc-300">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#48A1EA] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white font-medium">Purpose before decoration</strong> — Every design element should have a reason to exist.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#48A1EA] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white font-medium">Evidence over assumptions</strong> — Use research, observation, and usability findings to guide decisions.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#48A1EA] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white font-medium">Clarity over complexity</strong> — Make information easy to understand through hierarchy, spacing, and structure.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#48A1EA] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white font-medium">Consistency by design</strong> — Use reusable patterns, components, and design systems to create coherent experiences.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES BENTO */}
      <section id="capabilities-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="pb-4 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#3899E8] block font-semibold">
            Craft Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial font-normal text-white tracking-tight mt-1">
            Capabilities & Product Design Methodology
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            A practical product design approach that combines research, problem framing, information architecture, interaction design, and visual design to turn user needs into clear and usable digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((group, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-4 hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-editorial text-2xl text-zinc-300 font-normal">
                    0{index + 1}
                  </div>
                  <span className="text-[10px] font-mono text-[#3899E8] uppercase font-semibold tracking-wider">Specialty</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-editorial font-normal text-white leading-snug">{group.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{group.description}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-[11px] font-mono text-zinc-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool Stack Row */}
        <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-zinc-300">
            <Layers className="w-4 h-4 text-[#3899E8] shrink-0" />
            <span className="font-semibold text-white">Design Toolkit:</span>
            <span>Figma, FigJam, Miro, Stitch, Notion</span>
          </div>
          <div className="text-zinc-400 font-mono text-[11px] flex items-center gap-1.5">
            <span className="text-white font-medium">Design Focus:</span>
            <span>Clarity • Accessibility Fundamentals • Consistency • Purposeful Visual Design</span>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE & TRACK RECORD (Editorial Table) */}
      <section id="credibility-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="pb-4 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#3899E8] block font-semibold">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial font-normal text-white tracking-tight mt-1">
            Experience & Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credibilityList.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-4 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-300 font-medium">{item.period}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#3899E8] text-[10px] uppercase font-semibold">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-lg font-editorial font-normal text-white mt-1 leading-snug">{item.role}</h3>
                <p className="text-xs font-mono text-zinc-400 font-medium">{item.organization}</p>
              </div>
              <div className="pt-3 border-t border-white/10 space-y-2">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.summary}
                </p>
                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#3899E8] hover:text-white transition-colors font-medium pt-1"
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

      {/* 6. FINAL INVITATION */}
      <section id="final-cta-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#16171E] to-[#0E0F13] border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 text-emerald-400 text-xs font-mono border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{designerProfile.availability}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Have an ambitious project or role in mind?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            I am available for {designerProfile.title} roles, product design collaborations, and portfolio walkthroughs.
          </p>
          
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              id="cta-contact-bottom"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg"
            >
              Get in Touch
            </button>
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3 rounded-full bg-white/10 text-zinc-200 border border-white/10 text-xs sm:text-sm font-medium hover:bg-white/15 transition-colors flex items-center space-x-2"
            >
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Direct Email'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
