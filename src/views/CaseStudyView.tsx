import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Lightbulb,
  ChevronRight
} from 'lucide-react';
import { CaseStudy } from '../types';
import { caseStudies } from '../data/portfolioData';
import { 
  ClinicalDashboardMockup, 
  FintechMobileMockup, 
  DesignSystemSpecMockup, 
  UserFlowDiagram 
} from '../components/UIArtifacts';
import { ServotixCaseStudyView } from './ServotixCaseStudyView';
import { InvotixCaseStudyView } from './InvotixCaseStudyView';

interface CaseStudyViewProps {
  projectId: string;
  onBackToWork: () => void;
  onSelectProject: (id: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  projectId,
  onBackToWork,
  onSelectProject,
}) => {
  const project = caseStudies.find((p) => p.id === projectId) || caseStudies[0];

  if (project.id === 'shared-record-local-services') {
    return (
      <ServotixCaseStudyView 
        onBackToWork={onBackToWork} 
        onSelectProject={onSelectProject} 
      />
    );
  }

  if (project.id === 'invotix') {
    return (
      <InvotixCaseStudyView 
        onBackToWork={onBackToWork} 
        onSelectProject={onSelectProject} 
      />
    );
  }

  const currentIndex = caseStudies.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextProject = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const [activeWireframeTab, setActiveWireframeTab] = useState<number>(0);

  const renderVisualMockup = () => {
    switch (project.id) {
      case 'medflow-clinical-handoff':
        return <ClinicalDashboardMockup compact={false} />;
      case 'lumina-fintech':
        return <FintechMobileMockup compact={false} />;
      case 'stride-design-system':
        return <DesignSystemSpecMockup compact={false} />;
      default:
        return <ClinicalDashboardMockup compact={false} />;
    }
  };

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'research', label: 'Research' },
    { id: 'insights', label: 'Insights & HMW' },
    { id: 'user-flows', label: 'Architecture' },
    { id: 'wireframes', label: 'Wireframes' },
    { id: 'final-ui', label: 'Final UI' },
    { id: 'learnings', label: 'Learnings' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="pb-24">
      {/* Sticky Subnav Bar */}
      <div className="bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-white/10 sticky top-18 sm:top-20 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBackToWork}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Work Index</span>
          </button>

          {/* Quick jump menu for fast scanning */}
          <div className="hidden md:flex items-center space-x-1 text-xs">
            <span className="text-zinc-600 mr-1 text-[11px] font-mono">Jump to:</span>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="px-2.5 py-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-16 sm:space-y-20">
        {/* 1. CASE STUDY HEADER */}
        <header className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/10 text-white border border-white/15">
                {project.category}
              </span>
              <span className="text-zinc-600 font-mono text-xs">•</span>
              <span className="text-zinc-400 font-mono text-xs">{project.year}</span>
              <span className="text-zinc-600 font-mono text-xs">•</span>
              <span className="text-zinc-400 font-mono text-xs">{project.status}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-editorial font-normal tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-3xl font-sans">
              {project.tagline}
            </p>
          </div>

          {/* Quick Facts Grid (Optimized for 30-second recruiter scans) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#111216] border border-white/10 shadow-xl text-xs">
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-mono block mb-1">
                My Role
              </span>
              <span className="font-medium text-white block">{project.quickFacts.role}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-mono block mb-1">
                Timeline
              </span>
              <span className="font-medium text-white block">{project.quickFacts.duration}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-mono block mb-1">
                Project Type
              </span>
              <span className="font-medium text-white block">{project.quickFacts.projectType}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-mono block mb-1">
                Core Tools
              </span>
              <span className="font-medium text-white block">{project.quickFacts.tools.join(', ')}</span>
            </div>
          </div>

          {/* Key Responsibility Callout */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-zinc-300 flex items-start space-x-2">
            <span className="font-mono text-white shrink-0 font-medium">Key Focus:</span>
            <span className="text-zinc-400">{project.quickFacts.keyResponsibility}</span>
          </div>

          {/* Large Hero Mockup Visual */}
          <div className="pt-2">
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#090A0E] p-3 sm:p-6">
              {renderVisualMockup()}
            </div>
          </div>
        </header>

        {/* 2. OVERVIEW */}
        <section id="overview" className="space-y-4 pt-6 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">01 / Context</span>
          <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">Project Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-400 leading-relaxed font-sans">
            <div className="space-y-2 p-6 rounded-2xl bg-[#111216] border border-white/10 shadow-lg">
              <h3 className="font-mono text-white text-xs uppercase tracking-wider font-semibold">What it is & Who it is for</h3>
              <p>{project.overview.product}</p>
              <p className="pt-1 text-xs text-zinc-500">{project.overview.targetUsers}</p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-[#111216] border border-white/10 shadow-lg">
              <h3 className="font-mono text-white text-xs uppercase tracking-wider font-semibold">Context & My Specific Scope</h3>
              <p>{project.overview.context}</p>
              <p className="pt-1 text-xs text-zinc-500">{project.overview.roleDescription}</p>
            </div>
          </div>
        </section>

        {/* 3. PROBLEM */}
        <section id="problem" className="space-y-4 pt-6 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400">02 / The Challenge</span>
          <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">The Problem</h2>
          
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111216] border border-white/10 shadow-lg space-y-4">
            <p className="text-base text-zinc-200 leading-relaxed font-sans">
              {project.problem.summary}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block font-semibold">Core Friction Points Identified:</span>
              <div className="grid grid-cols-1 gap-2.5 text-xs">
                {project.problem.coreChallenges.map((challenge, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-zinc-300 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. RESEARCH (Honest methods only, zero fabricated metrics) */}
        <section id="research" className="space-y-4 pt-6 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">03 / Discovery</span>
          <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">Research & Groundwork</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.research.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.research.methods.map((m, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#111216] border border-white/10 shadow-lg space-y-2.5">
                <span className="text-[10px] font-mono text-zinc-500">Method 0{i + 1}</span>
                <h3 className="font-editorial text-base text-white font-normal">{m.method}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{m.description}</p>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 block">Artifact</span>
                  <span className="text-[11px] text-zinc-300 font-mono">{m.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. INSIGHTS & HOW MIGHT WE */}
        <section id="insights" className="space-y-6 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">04 / Synthesis</span>
            <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">Key Insights & Design Actions</h2>
            <p className="text-zinc-400 text-sm">
              Bridging observations directly to actionable architectural decisions.
            </p>
          </div>

          <div className="space-y-3">
            {project.insights.map((insight) => (
              <div key={insight.id} className="p-5 sm:p-6 rounded-2xl bg-[#111216] border border-white/10 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-400 font-bold">{insight.id}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-300 px-2 py-0.5 rounded">
                    Observation → Action
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="font-mono text-zinc-500 uppercase text-[10px] block">Observation</span>
                    <p className="text-zinc-300 leading-relaxed">{insight.observation}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-amber-400 uppercase text-[10px] block">Implication</span>
                    <p className="text-zinc-400 leading-relaxed">{insight.implication}</p>
                  </div>
                  <div className="space-y-1 md:border-l md:border-white/10 md:pl-4">
                    <span className="font-mono text-blue-400 uppercase text-[10px] block">Design Action</span>
                    <p className="text-white font-medium leading-relaxed">{insight.designAction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How Might We Framing */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-white">
                How Might We (HMW) Framing
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              {project.howMightWe.map((hmw, i) => (
                <li key={i} className="flex items-start space-x-2.5">
                  <span className="font-mono text-zinc-500 shrink-0">HMW 0{i + 1}:</span>
                  <span className="text-white leading-relaxed">{hmw}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. INFORMATION ARCHITECTURE & USER FLOWS */}
        <section id="user-flows" className="space-y-4 pt-6 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">05 / System Structure</span>
          <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">Information Architecture & Flow</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.informationArchitecture.description}
          </p>

          <div className="p-4 sm:p-6 bg-[#111216] rounded-2xl border border-white/10 shadow-lg">
            <UserFlowDiagram flowNodes={project.informationArchitecture.flowNodes} />
          </div>
        </section>

        {/* 7. IDEATION & TRADE-OFF DECISIONS */}
        <section id="ideation" className="space-y-4 pt-6 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">06 / Exploration</span>
          <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">Ideation & Architectural Trade-offs</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.ideation.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {project.ideation.decisions.map((dec, i) => (
              <div 
                key={i} 
                className={`p-5 rounded-2xl border ${
                  dec.chosen 
                    ? 'bg-emerald-950/20 border-emerald-500/30' 
                    : 'bg-white/[0.02] border-white/10'
                } space-y-2.5`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-sm text-white font-normal">{dec.option}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                    dec.chosen ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-zinc-500'
                  }`}>
                    {dec.chosen ? 'Selected Path' : 'Rejected'}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed">{dec.reasoning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. WIREFRAME ITERATIONS */}
        <section id="wireframes" className="space-y-4 pt-6 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">07 / Prototyping</span>
          <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">Low-Fidelity Iterations</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.wireframes.summary}
          </p>

          <div className="bg-[#111216] rounded-2xl border border-white/10 p-6 space-y-5">
            <div className="flex flex-wrap gap-2 pb-4 border-b border-white/10">
              {project.wireframes.iterations.map((iter, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWireframeTab(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeWireframeTab === idx 
                      ? 'bg-white text-zinc-950 font-semibold shadow-xs' 
                      : 'bg-white/5 text-zinc-400 hover:text-white'
                  }`}
                >
                  {iter.step}
                </button>
              ))}
            </div>

            {/* Active Iteration Explanation */}
            {project.wireframes.iterations[activeWireframeTab] && (
              <div className="space-y-4 text-xs">
                <h3 className="text-base font-editorial text-white">
                  {project.wireframes.iterations[activeWireframeTab].title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 space-y-1">
                    <span className="font-mono text-zinc-500 uppercase text-[10px] block">What Changed</span>
                    <p className="text-zinc-300 leading-relaxed">{project.wireframes.iterations[activeWireframeTab].changes}</p>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 space-y-1">
                    <span className="font-mono text-zinc-500 uppercase text-[10px] block">Design Rationale</span>
                    <p className="text-zinc-300 leading-relaxed">{project.wireframes.iterations[activeWireframeTab].rationale}</p>
                  </div>
                  <div className="p-4 bg-blue-950/30 rounded-xl border border-blue-500/20 space-y-1">
                    <span className="font-mono text-blue-400 uppercase text-[10px] block">What was Learned</span>
                    <p className="text-zinc-200 font-medium leading-relaxed">{project.wireframes.iterations[activeWireframeTab].learning}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 9. FINAL UI SCREENS */}
        <section id="final-ui" className="space-y-6 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">08 / Visual Polish</span>
            <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">Final UI & Design Decisions</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {project.finalUI.summary}
            </p>
          </div>

          <div className="space-y-6">
            {project.finalUI.screens.map((screen, idx) => (
              <div key={idx} className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#090A0E] p-3 sm:p-6">
                  {renderVisualMockup()}
                </div>

                <div className="p-6 rounded-2xl bg-[#111216] border border-white/10 shadow-lg space-y-3">
                  <h3 className="text-base font-editorial text-white">{screen.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{screen.description}</p>
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                      Key Ergonomic Decisions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {screen.keyDecisions.map((decision, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. HONEST OUTCOME & LEARNINGS */}
        <section id="learnings" className="space-y-4 pt-6 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">09 / Retrospective</span>
          <h2 className="text-3xl font-editorial font-normal text-white tracking-tight">Outcome & Honest Learnings</h2>
          <p className="text-zinc-400 text-xs leading-relaxed">
            In adherence to truthful UX documentation, no fabricated corporate statistics are shown. Instead, here is an objective reflection on constraints, usability friction, and prospective next iterations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.learnings.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#111216] border border-white/10 shadow-lg space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                  {item.category}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. CASE STUDY NAVIGATION */}
        <nav className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <button
              onClick={() => {
                onSelectProject(prevProject.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto p-4 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-left space-y-1 group"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center">
                <ArrowLeft className="w-3 h-3 mr-1" /> Previous Project
              </span>
              <div className="font-editorial text-base text-white group-hover:text-zinc-200 transition-colors">
                {prevProject.title}
              </div>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          <button
            onClick={onBackToWork}
            className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
          >
            Back to All Projects
          </button>

          {nextProject ? (
            <button
              onClick={() => {
                onSelectProject(nextProject.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto p-4 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-right space-y-1 group"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center justify-end">
                Next Project <ArrowRight className="w-3 h-3 ml-1" />
              </span>
              <div className="font-editorial text-base text-white group-hover:text-zinc-200 transition-colors">
                {nextProject.title}
              </div>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>
      </div>
    </article>
  );
};
