import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  FileText, 
  Maximize2, 
  Check, 
  ArrowRight,
  Eye,
  SlidersHorizontal,
  LayoutGrid
} from 'lucide-react';
import { getAssetPath } from '../utils/assets';

interface CarouselSlide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  keyInsights: string[];
  views: {
    label: string;
    type: 'wireframe' | 'final' | 'comparison';
    imageSrc: string;
    caption: string;
  }[];
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'home-evolution',
    category: 'Home Screen Structure',
    title: '1. Home: Feature-heavy → Focused Evolution',
    subtitle: 'From a cluttered multi-widget dashboard to a prioritized financial cockpit',
    description: 'Initial iterations loaded the home screen with six dense analytics widgets, secondary toggles, and complex graph filters. By stripping away non-essential clutter on initial wireframes, the final home focuses purely on real-time receivables (Monthly Revenue, Paid, Overdue) and provides a prominent 1-tap button to create new invoices.',
    keyInsights: [
      'Removed secondary analytics clutter that caused cognitive overload on mobile.',
      'Promoted 1-tap "Create Invoice" CTA directly into the primary thumb zone.'
    ],
    views: [
      {
        label: 'Home Screen Evolution (Before vs After)',
        type: 'comparison',
        imageSrc: getAssetPath('assets/home-screen-evolution.png'),
        caption: 'Evolution comparison: The initial complex dashboard vs the finalized focused Invotix Home.'
      }
    ]
  },
  {
    id: 'quick-invoice',
    category: 'Quick Invoice Decision',
    title: '2. Quick Invoice: 8-Step Wireframe → 2-Tap Final Journey',
    subtitle: 'Simplifying an exhaustive 8-step wireframe flow into a fast modal workflow',
    description: 'The initial wireframes mapped an exhaustive 8-step wizard (Template → Customer → Metadata → Items → Summary → Payment → Reminder → Notes). The final design collapsed these 8 steps into a single responsive modal with smart catalog defaults and 2-tap line item addition.',
    keyInsights: [
      'Wireframes explored all 8 explicit configuration steps to isolate what was actually required.',
      'Collapsed 8 sequential pages into 1 consolidated modal with pre-filled business defaults.'
    ],
    views: [
      {
        label: 'Wireframe (8 Steps)',
        type: 'wireframe',
        imageSrc: getAssetPath('assets/quick-invoice-wireframes.png'),
        caption: '8-step wireframe flow: Template, Customer, Info, Items, Summary, Payment, Reminder, Notes & Preview.'
      },
      {
        label: 'Final High-Fidelity Flow',
        type: 'final',
        imageSrc: getAssetPath('assets/quick-invoice-journey.png'),
        caption: 'Final Quick Invoice journey: Streamlined 2-tap client selection and instant item attachment.'
      }
    ]
  },
  {
    id: 'bulk-invoice',
    category: 'Bulk Invoice Decision',
    title: '3. Bulk Invoice: Wireframe Exploration → Final Batch Flow',
    subtitle: 'Solving multi-client billing without repetitive individual form submission',
    description: 'Wireframing explored how service providers and agencies bill multiple clients at month-end. Early wireframe concepts tested multi-select pickers versus spreadsheet data inputs. The final design delivers an inline spreadsheet flow with automatic item multipliers and 1-tap batch dispatch.',
    keyInsights: [
      'Wireframe explored spreadsheet paste and multi-recipient row generation.',
      'Batch preview allows instant error detection before firing multi-client dispatches.'
    ],
    views: [
      {
        label: 'Wireframe Explorations',
        type: 'wireframe',
        imageSrc: getAssetPath('assets/bulk-invoice-wireframe-explore.png'),
        caption: 'Rough structure wireframe: Exploring client batching, item multipliers, and spreadsheet upload mechanics.'
      },
      {
        label: 'Final High-Fidelity Flow',
        type: 'final',
        imageSrc: getAssetPath('assets/bulk-invoice-final-flow.png'),
        caption: 'Final Bulk Invoice UI: Integrated spreadsheet data entry, batch validation, and multi-send.'
      }
    ]
  },
  {
    id: 'invoice-management',
    category: 'Journey & Lifecycle Tracking',
    title: '4. Invoice Lifecycle: Creation → Timeline Management',
    subtitle: 'Expanding beyond static invoice generation into full payment journey tracking',
    description: 'Early project iterations ended when the PDF was generated. Research revealed that the hardest part for freelancers is tracking receivables after dispatch. Structural wireframes evolved the product into a full payment lifecycle manager with automated reminder milestones and settlement verification.',
    keyInsights: [
      'Moved from isolated invoice generation to end-to-end status lifecycle tracking.',
      'Visual timeline: Sent → Viewed → Reminder 1 → Reminder 2 → Settled.'
    ],
    views: [
      {
        label: 'Invoice Journey & Tracking UI',
        type: 'final',
        imageSrc: getAssetPath('assets/invotix-invoice-journey.png'),
        caption: 'Final Invoice Journey: Real-time event tracking, reminder schedules, and payment verification.'
      }
    ]
  }
];

export function InvotixWireframeCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [activeSubViewIndex, setActiveSubViewIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const slide = CAROUSEL_SLIDES[currentSlideIndex];
  const activeView = slide.views[activeSubViewIndex] || slide.views[0];

  const handleNext = () => {
    const nextIdx = (currentSlideIndex + 1) % CAROUSEL_SLIDES.length;
    setCurrentSlideIndex(nextIdx);
    setActiveSubViewIndex(0);
  };

  const handlePrev = () => {
    const prevIdx = (currentSlideIndex - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length;
    setCurrentSlideIndex(prevIdx);
    setActiveSubViewIndex(0);
  };

  const goToSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
    setActiveSubViewIndex(0);
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Header Card */}
      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#3899E8] animate-pulse" />
            <h3 className="text-white text-base font-medium">
              Structural Evolution Carousel · Wireframes → Final UI
            </h3>
          </div>
          <p className="text-xs text-zinc-400">
            Compare the wireframe explorations with high-fidelity screens across the 4 key product decisions.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-xs font-mono text-zinc-400 mr-2">
            {currentSlideIndex + 1} / {CAROUSEL_SLIDES.length}
          </span>
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Previous decision slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Next decision slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {CAROUSEL_SLIDES.map((s, idx) => {
          const isActive = currentSlideIndex === idx;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              className={`p-3 rounded-xl text-left border transition-all ${
                isActive 
                  ? 'bg-[#3899E8]/15 border-[#3899E8]/60 shadow-lg text-white scale-[1.01]' 
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-[#3899E8] text-white' : 'bg-white/10 text-zinc-500'
                }`}>
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[80px]">
                  {s.category.split(' ')[0]}
                </span>
              </div>
              <h4 className={`text-xs font-semibold line-clamp-1 ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                {s.title.replace(/^\d+\.\s*/, '')}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Carousel Stage Container */}
      <div className="rounded-3xl border border-white/10 bg-[#0E1015] overflow-hidden shadow-2xl space-y-0">
        {/* Slide Header & Subview Switcher */}
        <div className="px-5 sm:px-8 py-4 bg-[#141720] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#3899E8]/10 text-[#3899E8] border border-[#3899E8]/30 text-[10px] font-mono uppercase font-semibold">
                {slide.category}
              </span>
              <span className="text-zinc-500 font-mono text-xs hidden sm:inline">
                Decision 0{currentSlideIndex + 1} of 04
              </span>
            </div>
            <h4 className="text-white text-base sm:text-lg font-semibold tracking-tight">
              {slide.title}
            </h4>
          </div>

          {/* Subview Toggle Tabs (Wireframe vs Final UI) */}
          {slide.views.length > 1 && (
            <div className="flex items-center p-1 rounded-xl bg-black/60 border border-white/10 shrink-0">
              {slide.views.map((v, vIdx) => {
                const isSubActive = activeSubViewIndex === vIdx;
                return (
                  <button
                    key={vIdx}
                    onClick={() => setActiveSubViewIndex(vIdx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isSubActive 
                        ? 'bg-[#3899E8] text-white shadow-sm' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {v.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* High Resolution Image Stage Canvas */}
        <div className="relative w-full bg-[#050608] flex items-center justify-center p-3 sm:p-6 md:p-8 min-h-[380px] sm:min-h-[480px]">
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-[#0C0D11] shadow-2xl flex items-center justify-center group">
            <img
              src={activeView.imageSrc}
              alt={activeView.caption}
              className="w-full h-auto max-h-[640px] object-contain select-none cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
              onClick={() => setIsLightboxOpen(true)}
              loading="lazy"
            />

            {/* Click to expand lightbox badge */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono flex items-center space-x-1.5 opacity-90 hover:opacity-100 hover:bg-black transition-all shadow-lg"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#3899E8]" />
              <span>Click to Expand</span>
            </button>
          </div>
        </div>

        {/* Caption & Key Insights Details Bar */}
        <div className="p-5 sm:p-7 bg-[#12151D] border-t border-white/10 space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#3899E8] font-semibold">
              Current View: {activeView.label}
            </span>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* Key Design Changes Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {slide.keyInsights.map((insight, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center space-x-1.5 text-xs text-[#3899E8] font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Key Change 0{i + 1}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {insight}
                </p>
              </div>
            ))}
          </div>

          {/* Caption text */}
          <p className="text-[11px] text-zinc-500 font-mono italic pt-1 border-t border-white/5">
            Note: {activeView.caption}
          </p>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="absolute top-4 right-4 flex items-center space-x-3 z-50">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
            >
              Close (ESC)
            </button>
          </div>

          <div className="max-w-6xl w-full max-h-[88vh] flex flex-col items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeView.imageSrc}
              alt={activeView.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-white/20 shadow-2xl"
            />
            <p className="text-center text-xs font-mono text-zinc-400 mt-3">
              {activeView.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
