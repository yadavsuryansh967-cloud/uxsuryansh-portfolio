import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Calendar, 
  Clock, 
  DollarSign, 
  CreditCard, 
  AlertCircle, 
  CheckCircle2, 
  Filter, 
  Bell, 
  Plus, 
  Sliders, 
  Sparkles, 
  MessageSquare, 
  Search, 
  Layers, 
  ArrowUpRight,
  User,
  Users,
  Building2,
  FileText,
  Smartphone,
  Play
} from 'lucide-react';
import { ServotixResidentPrototypePlayer } from './ServotixResidentPrototypePlayer';
import { ServotixProviderPrototypePlayer } from './ServotixProviderPrototypePlayer';
import { getAssetPath } from '../utils/assets';

export { ServotixResidentPrototypePlayer, ServotixProviderPrototypePlayer };

/**
 * Standardized Project Asset Placeholder
 * Strictly adheres to user rule: Never generate or simulate unprovided project media.
 * Clean, honest, typography-driven placeholder container.
 */
export function ProjectAssetPlaceholder({
  title,
  assetName,
  note,
  filePath,
  aspectRatio = 'aspect-[9/18]',
  maxW = 'max-w-[320px]',
  className = ''
}: {
  title: string;
  assetName?: string;
  note?: string;
  filePath?: string;
  aspectRatio?: string;
  maxW?: string;
  className?: string;
}) {
  return (
    <div className={`w-full ${maxW} ${aspectRatio} rounded-3xl border-2 border-dashed border-white/20 bg-[#0C0D12] flex flex-col items-center justify-center p-6 text-center space-y-3.5 select-none ${className}`}>
      <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-500">
        <Smartphone className="w-6 h-6 text-zinc-400" />
      </div>

      <div className="space-y-1.5">
        <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] uppercase tracking-widest text-[#48A1EA] font-semibold">
          Asset to be added
        </div>
        <h4 className="font-editorial text-lg text-white font-normal leading-snug">
          {title}
        </h4>
        {assetName && (
          <span className="text-[11px] text-zinc-500 block">
            {assetName}
          </span>
        )}
      </div>

      {note && (
        <p className="text-xs text-zinc-400 max-w-[240px] leading-relaxed font-sans pt-2 border-t border-white/5">
          {note}
        </p>
      )}

      {filePath && (
        <span className="text-[10px] text-zinc-600 block">
          Expected file: {filePath}
        </span>
      )}
    </div>
  );
}

/**
 * 1. Visual for Section 02: Scattered Records vs Shared Record Need
 */
export function ScatteredRecordsVisual() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
      {/* Resident Side */}
      <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-white uppercase text-[11px] tracking-wider">
              Resident Records (Scattered)
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 font-medium">Self-Managed</span>
        </div>
        <p className="text-zinc-400 text-xs leading-relaxed">
          Relying on fragmented personal channels to track what occurred:
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {['Receipt photos', 'Google Drive', 'WhatsApp chats', 'Paper notebooks', 'Calendars', 'Memory'].map((item, i) => (
            <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-[11px] font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Provider Side */}
      <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold text-white uppercase text-[11px] tracking-wider">
              Provider Records (Scattered)
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 font-medium">Business-Side</span>
        </div>
        <p className="text-zinc-400 text-xs leading-relaxed">
          Similarly managing customer relationships through makeshift tools:
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {['Receipt books', 'Paper notebooks', 'Phone notes', 'Mental memory'].map((item, i) => (
            <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-[11px] font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Visual for Section 02: The Shift in Direction
 */
export function ShiftInThinkingVisual() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12131A] via-[#101116] to-[#0A0B0E] border border-white/15 shadow-xl relative overflow-hidden">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#48A1EA] text-[11px] font-medium">
          <Sparkles className="w-3 h-3" />
          <span>Fundamental Direction Change</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 block font-semibold">
              Initial Thinking
            </span>
            <p className="text-zinc-400 font-editorial text-lg italic text-zinc-300 leading-snug">
              “How can I help users manage payments?”
            </p>
            <p className="text-zinc-500 text-xs pt-1">
              Assumed recurring payment friction was the root problem.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-950/20 border border-[#48A1EA]/40 space-y-2 relative">
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-[#48A1EA]/20 text-[#48A1EA] font-semibold">
                Core Direction
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] block font-semibold">
              Research-Informed Direction
            </span>
            <p className="text-white font-editorial text-lg italic leading-snug">
              “How can both sides maintain a reliable understanding of the same service relationship?”
            </p>
            <p className="text-zinc-300 text-xs pt-1">
              Connected service occurrence directly to payment calculation and mutual trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Decision Story #1: Service Log Mockup (Early Miro Explorations vs Final Tabular Checkbox)
 */
export function ServotixServiceLogMockup() {
  const [activeTab, setActiveTab] = useState<'final' | 'overlay' | 'wireframes'>('final');

  const sampleDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const sampleServices = [
    { name: 'Water Filter', checks: [true, true, true, true, true, false, true, true, true, true, true, false, true, true, true] },
    { name: 'Trash Collection', checks: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true] },
    { name: 'Newspaper', checks: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true] },
    { name: 'Cleaning', checks: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true] },
    { name: 'Water Delivery', checks: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true] },
  ];

  return (
    <div className="space-y-4">
      {/* View Switcher */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
        <span className="text-xs text-zinc-400 font-medium">
          Interactive Artifact Showcase:
        </span>
        <div className="flex items-center space-x-1.5 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('final')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'final'
                ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Final Service Log (Tabular)
          </button>
          <button
            onClick={() => setActiveTab('overlay')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'overlay'
                ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Step-by-Step Filter Flow
          </button>
          <button
            onClick={() => setActiveTab('wireframes')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'wireframes'
                ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Miro Wireframe Explorations
          </button>
        </div>
      </div>

      {/* Screen Frame */}
      <div className={`bg-[#090A0D] border border-white/15 rounded-3xl p-4 ${activeTab === 'overlay' ? 'sm:p-4' : 'sm:p-8'} shadow-2xl overflow-hidden flex justify-center`}>
        {activeTab === 'final' && (
          <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black flex flex-col items-center">
            <img 
              src={getAssetPath('assets/DS1IMAGE1.png')} 
              alt="Real Screenshot: Decision Story #1 — Final Service Log Tabular View"
              className="w-full h-auto object-contain rounded-2xl select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {activeTab === 'overlay' && (
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black flex flex-col items-center">
            <img 
              src={getAssetPath('assets/decision-story-1-flow.png')} 
              alt="Decision Story #1: Step-by-Step Filter & AI Flow"
              className="w-full h-auto object-contain rounded-xl select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {activeTab === 'wireframes' && (
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#0d1117] flex flex-col items-center">
            <img 
              src={getAssetPath('assets/service-log-wireframes.png')} 
              alt="Decision Story #1: Miro Wireframe Explorations"
              className="w-full h-auto object-contain rounded-xl select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>

      <div className="text-center">
        <span className="text-xs text-zinc-500 font-medium">
          Visual Artifact: Servotix Service Log & Tabular Delivery Matrix
        </span>
      </div>
    </div>
  );
}

/**
 * 4. Decision Story #2: Explorations & First Attempts → Final Design Interactive Comparison
 */
export function ServotixPaymentEvolution() {
  const [selectedVersion, setSelectedVersion] = useState<'explorations' | 'final'>('explorations');

  return (
    <div className="space-y-6">
      {/* Interactive Version Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-zinc-400 font-medium">Compare Iterations:</span>
          <div className="flex items-center space-x-1.5 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setSelectedVersion('explorations')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedVersion === 'explorations'
                  ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              First Attempts & Explorations
            </button>
            <button
              onClick={() => setSelectedVersion('final')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedVersion === 'final'
                  ? 'bg-[#48A1EA] text-white font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Final Chosen Direction
            </button>
          </div>
        </div>
      </div>

      {/* Evolution Display Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Screen Visual */}
        <div className="lg:col-span-6 flex justify-center bg-[#090A0D] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl">
          {selectedVersion === 'explorations' && (
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#0d1117] flex flex-col items-center">
              <img 
                src={getAssetPath('assets/decision-story-2-explorations.png')} 
                alt="Decision Story #2: First Attempts & Payment Explorations"
                className="w-full h-auto object-contain rounded-xl select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {selectedVersion === 'final' && (
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#0d1117] flex flex-col items-center">
              <img 
                src={getAssetPath('assets/decision-story-2-final.png')} 
                alt="Decision Story #2: Final Chosen Direction"
                className="w-full h-auto object-contain rounded-xl select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>

        {/* Documented Rationale Breakdown */}
        <div className="lg:col-span-6 space-y-4 text-xs">
          <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
              The Evolution Rationale
            </span>
            <p className="text-zinc-300 leading-relaxed">
              The earlier exploration versions made the payment section feel heavy. The cards took up excessive vertical space and required more scrolling than needed for the core intent of the screen.
            </p>
            <div className="p-3 bg-white/[0.03] rounded-xl border border-white/5 space-y-1 text-[11px]">
              <span className="text-zinc-400 block">Desired Priority Hierarchy:</span>
              <span className="text-white font-semibold">Payment → Auto Pay → Payment History</span>
              <span className="text-zinc-500 block text-[10px]">rather than making everything equally prominent.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
              <span className="text-rose-400 text-[10px] uppercase block font-semibold tracking-wider">Before (Early Attempts)</span>
              <p className="text-zinc-300 text-[11px] leading-relaxed">
                Large cards & carousel → more space → excessive scrolling
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
              <span className="text-emerald-400 text-[10px] uppercase block font-semibold tracking-wider">After (Final UI)</span>
              <p className="text-zinc-200 text-[11px] leading-relaxed">
                Compact cards → important states visible → direct contextual actions
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-950/20 border border-[#48A1EA]/30 text-zinc-300 space-y-1">
            <span className="text-[#48A1EA] text-[10px] uppercase block font-semibold tracking-wider">Contextual Action Placement</span>
            <p className="text-xs text-white font-medium leading-relaxed">
              Instead of making the user first understand the status and then find an action somewhere else, the action sits with the relevant state.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Decision Story #3: Add Service Wireframe vs Final UI
 */
export function ServotixAddServiceEvolution() {
  const [activeTab, setActiveTab] = useState<'compare' | 'fields'>('compare');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
        <span className="text-xs text-zinc-400 font-medium">
          Form Information Reduction:
        </span>
        <div className="flex items-center space-x-1.5 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'compare'
                ? 'bg-white text-zinc-950 font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Wireframe vs Final Screen
          </button>
          <button
            onClick={() => setActiveTab('fields')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'fields'
                ? 'bg-white text-zinc-950 font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Required Information Rationale
          </button>
        </div>
      </div>

      <div className="bg-[#090A0D] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {activeTab === 'compare' ? (
          <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#0d1117] flex flex-col items-center">
              <img 
                src={getAssetPath('assets/decision-story-3-compare.png')} 
                alt="Decision Story #3: Add Service Wireframe vs Final UI"
                className="w-full h-auto object-contain rounded-xl select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto space-y-4 text-xs">
            <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
              <h4 className="font-editorial text-base text-white">The Required Information Rationale</h4>
              <p className="text-zinc-300 leading-relaxed">
                Instead of treating the form as a place to capture everything, I narrowed it to the information required to establish the service:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                {[
                  'Service name',
                  'Provider name',
                  'Usage',
                  'Amount',
                  'Payment frequency',
                  'Autopay'
                ].map((f, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-zinc-200 text-[11px] font-medium flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#48A1EA] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-zinc-400 text-xs italic pt-2 border-t border-white/10">
                Service days were added later during iteration as a calendar picker to allow recurring daily vs selective scheduling.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 6. Provider Experience Artifact (Section 06)
 */
export function ServotixProviderExperienceMockup() {
  const providerFeatures = [
    'Customer management',
    'Customer information',
    'Service delivery tracking',
    'Payment management',
    'Customer history',
    'Add Customer',
    'Add Service'
  ];

  const addCustomerWorkflowSteps = [
    {
      step: '01',
      title: 'Customer Details',
      field: 'Name, Phone No., Address',
      desc: 'Add customer personal details including full name, contact phone number, and society delivery address.'
    },
    {
      step: '02',
      title: 'Service Details',
      field: 'Service Name, Qty, Status & Usage Start Date',
      desc: 'Specify the service name, delivered quantity/units, active service status, and initial usage start date.'
    },
    {
      step: '03',
      title: 'Service Days',
      field: 'How often do you use this service?',
      desc: 'Define the recurring service delivery pattern (Daily, Alternate Days, or Custom weekly schedule).'
    },
    {
      step: '04',
      title: 'Payment Details',
      field: 'Payment Amount & Payment Frequency',
      desc: 'Set the payment billing amount and settlement frequency (Monthly settlement or Per-delivery billing).'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Grid: Provider Experience Scope + Add Customer Screen & Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Scope & Primary Workflow */}
        <div className="lg:col-span-6 space-y-5">
          {/* Provider Features */}
          <div className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-4">
            <h4 className="font-editorial text-base text-white font-normal">
              That led to a provider experience with:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {providerFeatures.map((item, i) => (
                <div key={i} className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#48A1EA] shrink-0"></div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Workflow Card */}
          <div className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] font-mono font-semibold block">
                Primary Workflow
              </span>
              <h4 className="font-editorial text-base text-white font-normal">
                The goal was intentionally simple:
              </h4>
              <p className="text-xs text-zinc-300 font-medium">
                Add a customer with their address for the service.
              </p>
            </div>

            <div className="pt-2 space-y-2.5 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono block">
                Add Customer Form Breakdown
              </span>
              <div className="space-y-2 text-xs">
                {addCustomerWorkflowSteps.map((wf, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-md bg-[#48A1EA]/10 border border-[#48A1EA]/30 text-[#48A1EA] text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                          {wf.step}
                        </span>
                        <span className="text-white font-medium text-xs">{wf.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                        {wf.field}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-[11px] leading-relaxed pl-7">
                      {wf.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Add Customer Mockup */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex justify-center bg-[#090A0D] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#0d1117] flex flex-col items-center">
              <div className="w-full px-4 py-3 bg-[#11141a] border-b border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="font-mono text-zinc-500 text-[10px] uppercase tracking-wider">Provider Screen</span>
                <span className="text-white font-medium">Add Customer Flow</span>
              </div>
              <img 
                src={getAssetPath('assets/provider-add-customer.png')} 
                alt="Servotix Provider Experience: Add Customer Screen"
                className="w-full h-auto object-contain select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 text-center font-mono">
            Provider flow: capturing customer identity, society address, service assignment, and recurring schedule.
          </p>
        </div>
      </div>

      {/* Bottom Summary Banner */}
      <div className="p-4 rounded-xl bg-[#48A1EA]/10 border border-[#48A1EA]/25 text-zinc-300 text-xs leading-relaxed">
        <strong className="text-white font-semibold">Shared Design System:</strong> The Resident and Provider experiences use the same visual system, but the content and actions change according to the role.
      </div>
    </div>
  );
}

/**
 * 7. Design System Specifications (Section 07)
 */
export function ServotixDesignSystemSpecs() {
  const componentsList = [
    'Buttons',
    'Service cards',
    'Customer cards',
    'Payment cards',
    'Text fields',
    'Listboxes',
    'Toggles',
    'Checkboxes',
    'Filters',
    'Notifications',
    'Chat',
    'Navigation'
  ];

  return (
    <div className="space-y-6">
      {/* Core Tokens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Primary Color */}
        <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Primary Brand</span>
            <span className="text-xs text-white font-medium">#48A1EA</span>
          </div>
          <div className="h-12 rounded-xl bg-[#48A1EA] shadow-lg flex items-end p-2">
            <span className="text-[10px] text-white font-bold tracking-wide">Servotix Blue</span>
          </div>
          <p className="text-zinc-400 text-[11px]">Neutral foundation with blue as primary accent.</p>
        </div>

        {/* Semantic Green */}
        <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Semantic Success</span>
            <span className="text-xs text-emerald-400 font-medium">#22C55E</span>
          </div>
          <div className="h-12 rounded-xl bg-emerald-500 shadow-lg flex items-end p-2">
            <span className="text-[10px] text-white font-bold tracking-wide">Green — success / paid</span>
          </div>
          <p className="text-zinc-400 text-[11px]">Clear payment verification and active states.</p>
        </div>

        {/* Semantic Red */}
        <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Semantic Alert</span>
            <span className="text-xs text-rose-400 font-medium">#EF4444</span>
          </div>
          <div className="h-12 rounded-xl bg-rose-500 shadow-lg flex items-end p-2">
            <span className="text-[10px] text-white font-bold tracking-wide">Red — error / overdue</span>
          </div>
          <p className="text-zinc-400 text-[11px]">Overdue payments and delivery failure states.</p>
        </div>

        {/* Semantic Yellow */}
        <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Semantic Warning</span>
            <span className="text-xs text-amber-400 font-medium">#EAB308</span>
          </div>
          <div className="h-12 rounded-xl bg-amber-500 shadow-lg flex items-end p-2">
            <span className="text-[10px] text-white font-bold tracking-wide">Yellow — warning / upcoming</span>
          </div>
          <p className="text-zinc-400 text-[11px]">Upcoming bills, scheduled payments, and alerts.</p>
        </div>
      </div>

      {/* Typography & Aesthetic Note */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-2">
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
            Typography Architecture (Inter)
          </span>
          <p className="text-zinc-300 leading-relaxed">
            I used Inter because I was already comfortable working with it. I kept the typography system simple and created hierarchy through size and weight.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-zinc-400 text-[11px]">
            <span className="px-2.5 py-1 bg-white/5 rounded text-zinc-400 font-normal">Regular 400</span>
            <span className="px-2.5 py-1 bg-white/5 rounded font-medium text-zinc-200">Medium 500</span>
            <span className="px-2.5 py-1 bg-white/5 rounded font-semibold text-white">SemiBold 600</span>
            <span className="px-2.5 py-1 bg-white/5 rounded font-bold text-white">Bold 700</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
            Visual Direction & Notion Influence
          </span>
          <p className="text-zinc-300 leading-relaxed">
            I wanted the interface to feel:
          </p>
          <ul className="space-y-1.5 pl-0.5">
            {['Simple', 'Neutral', 'Calm', 'Easy to scan'].map((point, i) => (
              <li key={i} className="flex items-center space-x-2 text-zinc-200 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#48A1EA] shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-zinc-400 text-[11px] leading-relaxed pt-1 border-t border-white/5">
            I took inspiration from the neutral visual approach of Notion, but developed the visual system for this product independently.
          </p>
        </div>
      </div>

      {/* Reusable Components Grid */}
      <div className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
        <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
          12 Reusable System Components
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
          {componentsList.map((comp, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-300 text-[11px] font-medium flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48A1EA]"></span>
              <span>{comp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 8. Final Experience Guided Journeys (Section 08)
 */
export function ServotixFinalExperienceJourneys() {
  const [activeJourney, setActiveJourney] = useState<'resident' | 'provider'>('resident');

  const residentJourney = [
    { title: 'Home', desc: 'Overview of active daily services, fast access to pending actions.' },
    { title: 'My Services', desc: 'Full roster of subscribed household services and statuses.' },
    { title: 'Service Log', desc: 'Tabular checkbox grid tracking daily deliveries and exceptions.' },
    { title: 'Service Information', desc: 'Detailed provider terms, billing cycle, and delivery days.' },
    { title: 'Payment', desc: 'Clean breakdown of due amount and autopay status.' },
    { title: 'Payment Status / Action', desc: 'Direct contextual payment execution (Overdue → Pay, Upcoming → Schedule).' },
    { title: 'History / Proof', desc: 'Past receipts, completed cycles, and verified timestamps.' },
    { title: 'Chat with Provider', desc: 'Direct in-app channel to resolve missed delivery or billing queries.' },
  ];

  const providerJourney = [
    { title: 'Home', desc: 'Daily delivery dashboard and pending collection summary.' },
    { title: 'Customers', desc: 'Directory of all residential accounts and subscription terms.' },
    { title: 'Customer Information', desc: 'Address, phone number, specific delivery preferences.' },
    { title: 'Service Delivery', desc: 'Daily confirmation mark (provided / not provided).' },
    { title: 'Payment', desc: 'Collection tracking and overdue alerts by customer.' },
    { title: 'Customer History', desc: 'Historical record of deliveries and settled balances.' },
    { title: 'Chat with Resident', desc: 'Direct communication to clarify absences or answer questions.' },
  ];

  const currentSteps = activeJourney === 'resident' ? residentJourney : providerJourney;

  return (
    <div className="space-y-6">
      {/* Journey Mode Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-zinc-400 font-medium">Guided Flow:</span>
          <div className="flex items-center space-x-1.5 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setActiveJourney('resident')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                activeJourney === 'resident'
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Resident Journey ({residentJourney.length} Stages)
            </button>
            <button
              onClick={() => setActiveJourney('provider')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                activeJourney === 'provider'
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Provider Journey ({providerJourney.length} Stages)
            </button>
          </div>
        </div>
      </div>

      {/* Connected Visual Journey Map (Horizontal & Responsive) */}
      <div className="p-6 rounded-3xl bg-[#111216] border border-white/10 space-y-4">
        <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
          Sequential User Flow Architecture
        </span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {currentSteps.map((step, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors space-y-2 relative"
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-full bg-white/10 text-zinc-300 flex items-center justify-center text-[10px] font-bold">
                  {idx + 1}
                </span>
                {idx < currentSteps.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 hidden lg:block" />
                )}
              </div>
              <h5 className="font-editorial text-sm text-white font-normal">{step.title}</h5>
              <p className="text-[11px] text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prototype Video Player Switcher (Resident vs Service Provider) */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between flex-wrap gap-3 p-3 rounded-2xl bg-[#111216] border border-white/10">
          <div className="flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs text-zinc-300 font-medium">Select Prototype Experience:</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setActiveJourney('resident')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                activeJourney === 'resident'
                  ? 'bg-[#48A1EA] text-white font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Resident Prototype
            </button>
            <button
              onClick={() => setActiveJourney('provider')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                activeJourney === 'provider'
                  ? 'bg-amber-500 text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Service Provider Prototype
            </button>
          </div>
        </div>

        {activeJourney === 'resident' ? (
          <ServotixResidentPrototypePlayer />
        ) : (
          <ServotixProviderPrototypePlayer />
        )}
      </div>
    </div>
  );
}

/**
 * 9. The System Behind the Screens (Section 09)
 */
export function ServotixSystemRelationshipDiagram() {
  const systemNodes = [
    {
      step: '01',
      title: 'Service',
      question: 'What service exists?',
      color: 'border-blue-500/40 text-blue-300'
    },
    {
      step: '02',
      title: 'Service activity',
      question: 'Was it provided?',
      color: 'border-emerald-500/40 text-emerald-300'
    },
    {
      step: '03',
      title: 'Payment',
      question: 'What needs to be paid?',
      color: 'border-amber-500/40 text-amber-300'
    },
    {
      step: '04',
      title: 'History / proof',
      question: 'What happened before?',
      color: 'border-purple-500/40 text-purple-300'
    },
    {
      step: '05',
      title: 'Communication',
      question: 'Can both sides discuss or resolve something?',
      color: 'border-cyan-500/40 text-cyan-300'
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#111216] border border-white/10 space-y-6">
      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] block font-semibold">
          Relational Product Core
        </span>
        <h4 className="text-xl font-editorial text-white font-normal">
          The Interconnected Service Relationship
        </h4>
        <p className="text-xs text-zinc-400">
          The final product isn't just a collection of screens. That connection is what shaped the product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
        {systemNodes.map((node, i) => (
          <div 
            key={i} 
            className={`p-4 rounded-2xl bg-white/[0.02] border ${node.color} space-y-2 relative flex flex-col justify-between`}
          >
            <div>
              <span className="text-[10px] text-zinc-500 font-semibold block mb-1">
                Node {node.step}
              </span>
              <h5 className="font-editorial text-base text-white font-normal">
                {node.title}
              </h5>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-2 border-t border-white/5">
              {node.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 10. Rejected Directions Visual (Section 10)
 */
export function ServotixRejectedDirectionsVisual() {
  const rejectedItems = [
    {
      area: 'Payment',
      progression: 'Payment 1 → Payment 2 → Payment 3',
      rationale: "The earlier versions were too heavy for the screen's main purpose. Required too much vertical scrolling before the primary action was visible."
    },
    {
      area: 'Service Log',
      progression: 'Multiple structures → tabular checkbox approach',
      rationale: 'I moved toward the structure that made recurring activity easier to scan and verify at a single monthly glance.'
    },
    {
      area: 'Add Service',
      progression: 'Many possible fields → focused required information',
      rationale: 'I reduced the form to the information needed to establish the service rather than capturing extraneous details upfront.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
      {rejectedItems.map((item, idx) => (
        <div key={idx} className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-rose-400 font-semibold">
              Discarded Direction
            </span>
            <span className="text-[10px] text-zinc-500 font-medium">0{idx + 1}</span>
          </div>
          <h4 className="font-editorial text-base text-white">{item.area}</h4>
          <div className="p-2 bg-white/[0.03] rounded-lg text-[11px] text-zinc-300 font-medium">
            {item.progression}
          </div>
          <p className="text-zinc-400 leading-relaxed text-[11px]">
            {item.rationale}
          </p>
        </div>
      ))}
    </div>
  );
}
