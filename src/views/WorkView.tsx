import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Filter, 
  LayoutGrid, 
  Rows3, 
  Sparkles,
  Layers
} from 'lucide-react';
import { caseStudies } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';

interface WorkViewProps {
  onSelectProject: (id: string) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'showcase' | 'grid'>('showcase');

  // Filter projects according to category
  const filteredProjects = caseStudies.filter((project) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'mobile' && (project.category.toLowerCase().includes('mobile') || project.category.toLowerCase().includes('service') || project.quickFacts.projectType.toLowerCase().includes('mobile'))) return true;
    if (selectedCategory === 'web' && (project.category.toLowerCase().includes('web') || project.category.toLowerCase().includes('invoicing') || project.quickFacts.projectType.toLowerCase().includes('digital product') || project.quickFacts.projectType.toLowerCase().includes('web'))) return true;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
      {/* 1. Header & Controls */}
      <div className="space-y-8 pb-6 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 text-zinc-300 text-xs font-mono border border-white/10">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Work Archive · {caseStudies.length} Documented Case Studies</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-editorial font-normal text-white tracking-tight">
              Selected Works
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed font-sans">
              Deep, comprehensive case studies spanning synchronized local services and invoice-to-payment lifecycle workflows. Documented with authentic discovery heuristics, architectural trade-offs, and interactive UI systems.
            </p>
          </div>

          {/* Layout Mode Switcher */}
          <div className="flex items-center space-x-1 bg-white/5 p-1 rounded-xl border border-white/10 self-start sm:self-auto text-xs">
            <button
              onClick={() => setViewMode('showcase')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 font-medium transition-all ${
                viewMode === 'showcase'
                  ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Rows3 className="w-3.5 h-3.5" />
              <span>Showcase</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Compact Grid</span>
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                selectedCategory === 'all'
                  ? 'bg-white text-zinc-950 border-white font-semibold shadow-sm'
                  : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              All Projects ({caseStudies.length})
            </button>
            <button
              onClick={() => setSelectedCategory('mobile')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                selectedCategory === 'mobile'
                  ? 'bg-white text-zinc-950 border-white font-semibold shadow-sm'
                  : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              Two-Sided Service Platform (1)
            </button>
            <button
              onClick={() => setSelectedCategory('web')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                selectedCategory === 'web'
                  ? 'bg-white text-zinc-950 border-white font-semibold shadow-sm'
                  : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              Invoicing & Payment Lifecycle (1)
            </button>
          </div>

          <div className="text-[11px] text-zinc-500 font-mono hidden md:block">
            {filteredProjects.length} of {caseStudies.length} case studies
          </div>
        </div>
      </div>

      {/* 2. Project List / Grid Rendering */}
      {viewMode === 'showcase' ? (
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHeroEmphasis={index === 0}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              compactMode={true}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      )}
    </div>
  );
};
