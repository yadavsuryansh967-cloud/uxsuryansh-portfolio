import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Clock, 
  Eye
} from 'lucide-react';
import { CaseStudy } from '../types';
import { ClinicalDashboardMockup, FintechMobileMockup, DesignSystemSpecMockup, UserFlowDiagram } from './UIArtifacts';
import { ServotixServiceLogMockup } from './ServotixArtifacts';
import { InvotixPaymentJourneyDiagram } from './InvotixArtifacts';

interface ProjectCardProps {
  project: CaseStudy;
  isHeroEmphasis?: boolean;
  onSelectProject: (id: string) => void;
  compactMode?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isHeroEmphasis = false,
  onSelectProject,
  compactMode = false,
}) => {
  const [activePreviewTab, setActivePreviewTab] = useState<'ui' | 'flow' | 'problem'>('ui');

  // Background styling tailored to project theme
  const getProjectBackdrop = () => {
    switch (project.id) {
      case 'shared-record-local-services':
        return {
          canvas: 'bg-gradient-to-b from-[#0C1527] via-[#0A0F1D] to-[#070B14]',
          border: 'border-[#48A1EA]/30',
          badge: 'bg-blue-950/40 text-[#48A1EA] border-[#48A1EA]/40',
          glow: 'group-hover:border-[#48A1EA]/40',
          number: '01'
        };
      case 'invotix':
        return {
          canvas: 'bg-gradient-to-b from-[#0B1526] via-[#09101D] to-[#070B14]',
          border: 'border-[#3899E8]/30',
          badge: 'bg-blue-950/40 text-[#3899E8] border-[#3899E8]/40',
          glow: 'group-hover:border-[#3899E8]/40',
          number: '02'
        };
      case 'medflow-clinical-handoff':
        return {
          canvas: 'bg-gradient-to-b from-[#0C1527] via-[#0A0F1D] to-[#070B14]',
          border: 'border-cyan-500/20',
          badge: 'bg-cyan-950/40 text-cyan-300 border-cyan-800/50',
          glow: 'group-hover:border-cyan-500/30',
          number: '02'
        };
      case 'lumina-fintech':
        return {
          canvas: 'bg-gradient-to-b from-[#091F18] via-[#071712] to-[#050E0B]',
          border: 'border-emerald-500/20',
          badge: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50',
          glow: 'group-hover:border-emerald-500/30',
          number: '02'
        };
      case 'stride-design-system':
        return {
          canvas: 'bg-gradient-to-b from-[#141226] via-[#0E0C1A] to-[#090812]',
          border: 'border-indigo-500/20',
          badge: 'bg-indigo-950/40 text-indigo-300 border-indigo-800/50',
          glow: 'group-hover:border-indigo-500/30',
          number: '03'
        };
      default:
        return {
          canvas: 'bg-[#14161C]',
          border: 'border-white/10',
          badge: 'bg-white/10 text-zinc-300 border-white/15',
          glow: 'group-hover:border-white/25',
          number: '01'
        };
    }
  };

  const backdrop = getProjectBackdrop();

  // Render preview artifact according to active tab
  const renderInteractivePreview = () => {
    if (activePreviewTab === 'flow') {
      return (
        <div className="p-4 bg-[#0F1015]/95 rounded-xl border border-white/10 shadow-lg text-zinc-200">
          <UserFlowDiagram flowNodes={project.informationArchitecture.flowNodes} />
        </div>
      );
    }

    if (activePreviewTab === 'problem') {
      return (
        <div className="p-6 bg-[#0F1015]/95 rounded-xl border border-white/10 shadow-lg space-y-4 text-xs">
          <div className="flex items-center space-x-2 text-white font-semibold">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span className="text-sm font-editorial tracking-wide">Core Usability Challenge & Breakdown</span>
          </div>
          <p className="text-zinc-300 text-xs leading-relaxed font-sans">
            {project.problem.summary}
          </p>
          <div className="space-y-2 pt-2 border-t border-white/10">
            {project.problem.coreChallenges.map((challenge, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 text-zinc-400">
                <span className="w-4 h-4 rounded-full bg-white/10 text-zinc-300 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Default: Final UI Mockup
    switch (project.id) {
      case 'shared-record-local-services':
        return (
          <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#0C0E14] shadow-2xl">
            <img
              src="/assets/servotix-hero-cover.png"
              alt="Servotix — One place shared by residents and providers"
              className="w-full h-auto object-cover select-none"
              loading="lazy"
            />
          </div>
        );
      case 'invotix':
        return (
          <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#0C0E14] shadow-2xl">
            <img
              src="/assets/invotix-hero-cover.png"
              alt="Invotix Invoicing Platform Hero Showcase"
              className="w-full h-auto object-cover select-none"
              loading="lazy"
            />
          </div>
        );
      case 'medflow-clinical-handoff':
        return <ClinicalDashboardMockup compact={!isHeroEmphasis} />;
      case 'lumina-fintech':
        return <FintechMobileMockup compact={!isHeroEmphasis} />;
      case 'stride-design-system':
        return <DesignSystemSpecMockup compact={!isHeroEmphasis} />;
      default:
        return <ClinicalDashboardMockup compact={true} />;
    }
  };

  // Compact Grid Mode (used when user toggles grid in Work view)
  if (compactMode) {
    return (
      <article
        id={`project-${project.id}`}
        className={`group bg-[#111216] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between ${backdrop.glow}`}
      >
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-editorial text-lg text-zinc-500">{backdrop.number}</span>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase border ${backdrop.badge}`}>
              {project.category}
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl font-editorial font-normal text-white group-hover:text-zinc-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <div 
            onClick={() => onSelectProject(project.id)}
            className="cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-[#0B0C0E] p-2 transform group-hover:scale-[1.01] transition-transform"
          >
            {project.id === 'shared-record-local-services' ? (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/assets/servotix-hero-cover.png" 
                  alt="Servotix Connected Experience" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            ) : project.id === 'invotix' ? (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/assets/invotix-hero-cover.png" 
                  alt="Invotix Invoicing Platform" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            ) : project.id === 'lumina-fintech' ? (
              <FintechMobileMockup compact={true} />
            ) : project.id === 'stride-design-system' ? (
              <DesignSystemSpecMockup compact={true} />
            ) : (
              <ClinicalDashboardMockup compact={true} />
            )}
          </div>
        </div>

        <div className="p-5 pt-0">
          <button
            onClick={() => onSelectProject(project.id)}
            className="w-full py-2.5 px-4 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </article>
    );
  }

  // Showcase / Detailed Mode
  return (
    <article 
      id={`project-${project.id}`}
      className={`group bg-[#111216] rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden shadow-2xl ${backdrop.glow}`}
    >
      {/* Top Meta Strip */}
      <div className="px-6 sm:px-8 pt-6 sm:pt-7 pb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <span className="font-editorial text-xl sm:text-2xl text-zinc-500 font-normal">
            {backdrop.number}
          </span>
          <span className="text-zinc-600 font-mono">/</span>
          <span className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border ${backdrop.badge}`}>
            {project.category}
          </span>
          <span className="hidden sm:inline-flex items-center text-xs text-zinc-400 font-mono">
            <Clock className="w-3 h-3 mr-1.5 text-zinc-500" />
            {project.quickFacts.duration}
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs text-zinc-400 font-mono">
          <span className="hidden sm:inline">Role: {project.quickFacts.role}</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Title and Problem Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-2">
            <h3 className={`font-editorial font-normal tracking-tight text-white ${
              isHeroEmphasis ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
            }`}>
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              {project.tagline}
            </p>
          </div>

          <div className="lg:col-span-5 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5 text-xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
              The Problem Scope
            </span>
            <p className="text-zinc-300 leading-relaxed">
              {project.problem.summary}
            </p>
          </div>
        </div>

        {/* Visual Preview Canvas */}
        <div>
          {/* Device / Artifact Canvas */}
          <div 
            onClick={() => onSelectProject(project.id)}
            className={`cursor-pointer relative rounded-2xl overflow-hidden border p-3 sm:p-6 transition-all duration-300 shadow-2xl ${backdrop.canvas} ${backdrop.border}`}
          >
            {renderInteractivePreview()}

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none backdrop-blur-[2px]">
              <span className="bg-white text-zinc-950 text-xs font-semibold px-5 py-2.5 rounded-full shadow-2xl flex items-center space-x-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <Eye className="w-3.5 h-3.5" />
                <span>Read Full Case Study</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Meta & Action Button */}
        <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.quickFacts.tools.map((tool, idx) => (
              <span 
                key={idx}
                className="text-[11px] font-mono text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg text-nowrap"
              >
                {tool}
              </span>
            ))}
          </div>

          <button
            id={`btn-view-${project.id}`}
            onClick={() => onSelectProject(project.id)}
            className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-md group-hover:shadow-lg self-start sm:self-auto"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};
