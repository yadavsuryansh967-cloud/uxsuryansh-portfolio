import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  FileText, 
  Layers, 
  Sparkles, 
  Clock, 
  Send, 
  CreditCard, 
  Sliders, 
  UploadCloud, 
  FileSpreadsheet, 
  Eye, 
  Download, 
  Share2, 
  Save, 
  AlertCircle,
  Palette,
  Type,
  LayoutTemplate,
  XCircle,
  CheckCircle2,
  Play
} from 'lucide-react';

/**
 * Placeholder Card Component for Visual Assets
 */
export function InvotixPlaceholderBox({
  type = 'image',
  title,
  subtitle,
  spec,
  badge
}: {
  type?: 'image' | 'video';
  title: string;
  subtitle: string;
  spec: string;
  badge?: string;
}) {
  return (
    <div className="relative rounded-2xl border border-dashed border-[#3899E8]/40 bg-[#10141D]/90 p-6 sm:p-8 overflow-hidden group hover:border-[#3899E8] transition-all">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#3899E8]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
      
      <div className="flex flex-col items-center justify-center text-center space-y-3 relative z-10 max-w-xl mx-auto py-4">
        <div className="w-12 h-12 rounded-2xl bg-[#3899E8]/10 border border-[#3899E8]/30 flex items-center justify-center text-[#3899E8] shadow-inner">
          {type === 'video' ? <Play className="w-6 h-6 ml-0.5 fill-[#3899E8]/20" /> : <FileText className="w-6 h-6" />}
        </div>

        {badge && (
          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#3899E8]/10 text-[#3899E8] border border-[#3899E8]/20">
            {badge}
          </span>
        )}

        <div className="space-y-1">
          <h4 className="font-editorial text-lg text-white font-normal tracking-tight">
            {title}
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="pt-2">
          <span className="inline-block px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 font-mono text-[11px]">
            {spec}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * 01. Product Direction Flow (Section 01)
 */
export function InvotixProductDirectionFlow() {
  const steps = [
    { num: '01', title: 'Create', desc: 'Fast single or bulk creation without form fatigue', icon: FileText },
    { num: '02', title: 'Send', desc: 'Direct multi-channel sharing to clients', icon: Send },
    { num: '03', title: 'Track', desc: 'Real-time payment status and reminders', icon: Clock },
    { num: '04', title: 'Get Paid', desc: 'Closing the loop and marking invoices paid', icon: CreditCard },
  ];

  return (
    <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#3899E8] font-semibold">
          Core Product Direction
        </span>
        <span className="text-[10px] font-mono text-zinc-500">From creation to settlement</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        {steps.map((st, i) => {
          const Icon = st.icon;
          return (
            <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-[#3899E8]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#3899E8] font-semibold">{st.num}</span>
                <Icon className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="font-editorial text-base text-white">{st.title}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * 02. Research Insights Priorities (Section 02)
 */
export function InvotixResearchPriorities() {
  const priorities = [
    {
      num: '01',
      title: 'Invoice management & payment tracking',
      detail: 'Invoices should remain manageable after they are created.'
    },
    {
      num: '02',
      title: 'Reduce manual effort',
      detail: 'The creation and management process should not depend on unnecessary manual steps.'
    },
    {
      num: '03',
      title: 'Easy professional invoice creation',
      detail: 'Creating a professional invoice should remain straightforward.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {priorities.map((item, idx) => (
        <div key={idx} className="p-5 rounded-2xl bg-[#11141A] border border-white/10 space-y-2">
          <span className="text-xs font-mono text-[#3899E8] uppercase tracking-wider font-semibold">
            Priority {item.num}
          </span>
          <h4 className="text-sm font-medium text-white">
            {item.title}
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * 03. Invoice Payment Journey Pipeline (Section 03)
 */
export function InvotixPaymentJourneyDiagram() {
  const stages = [
    { stage: 'Created', state: 'Invoice generated and finalized in system', color: 'border-zinc-700 bg-zinc-900 text-zinc-300' },
    { stage: 'Sent', state: 'Delivered to client via email or shared link', color: 'border-zinc-700 bg-zinc-900 text-zinc-300' },
    { stage: 'Reminder 1', state: 'Gentle notification before or near due date', color: 'border-zinc-700 bg-zinc-900 text-zinc-300' },
    { stage: 'Reminder 2', state: 'Follow-up alert for overdue or pending balance', color: 'border-zinc-700 bg-zinc-900 text-zinc-300' },
    { stage: 'Paid', state: 'Payment reconciled and ledger settled', color: 'border-zinc-700 bg-zinc-900 text-zinc-300' },
  ];

  return (
    <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#3899E8] font-semibold">
          Invoice Payment Journey
        </span>
        <span className="text-xs text-zinc-400">Opening an invoice exposes its full lifecycle progression</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
        {stages.map((st, i) => (
          <div key={i} className={`p-3.5 rounded-xl border ${st.color} space-y-1`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider">{st.stage}</span>
              <span className="text-[10px] opacity-70">0{i + 1}</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug pt-0.5">{st.state}</p>
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-300">
        <span className="font-mono text-[11px] text-zinc-500 uppercase">Supported States in Invoices Area:</span>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800 text-zinc-300">Draft</span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Paid</span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">Unpaid</span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-rose-500/10 text-rose-400 border border-rose-500/30">Overdue</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 04. Quick Invoice Decision Comparison (Section 04)
 */
export function InvotixQuickInvoiceComparison() {
  const revisedFlow = [
    { title: 'Invoice Type', desc: 'Select one-off standard, freelance or recurring format' },
    { title: 'Client & Line Items', desc: 'Grouped client contacts, billable items & pricing' },
    { title: 'Invoice Details', desc: 'Dates, terms, notes, and payment instructions' },
    { title: 'Share / Download / Save Draft', desc: 'Instant multi-action dispatch or draft storage' },
  ];

  return (
    <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Initial Structure */}
        <div className="p-5 rounded-xl bg-rose-950/10 border border-rose-500/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-semibold">
              Initial Direction (Rejected)
            </span>
            <span className="text-xs text-rose-400/80 font-mono">6–8 Separate Steps</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Moved each major section into its own isolated step. The structure required users to repeatedly tap "Next" across 6–8 distinct screens for basic information, turning what should feel quick into another exhausting long form.
          </p>
        </div>

        {/* Revised Consolidated Structure */}
        <div className="p-5 rounded-xl bg-emerald-950/10 border border-emerald-500/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Revised Direction (Chosen)
            </span>
            <span className="text-xs text-emerald-400/80 font-mono">4 Grouped Steps</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Consolidated related inputs into 4 coherent sections. Kept major information groups together while reducing screen-switching friction without removing essential fields.
          </p>
        </div>
      </div>

      {/* Revised Step Flow */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
          The Simplified 4-Step Journey:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {revisedFlow.map((rf, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-[#3899E8] font-bold">0{idx + 1}</span>
              <h5 className="text-xs font-medium text-white">{rf.title}</h5>
              <p className="text-[11px] text-zinc-400 leading-snug">{rf.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 05. Bulk Invoice Decision Flow (Section 05)
 */
export function InvotixBulkInvoiceDecisionFlow() {
  const bulkFlow = [
    { step: '01', title: 'Bulk Invoice', desc: 'Select bulk generator mode' },
    { step: '02', title: 'Maximum Line Items', desc: 'Set line items limit upfront to shape sheet structure' },
    { step: '03', title: 'Fill/Download Sheet', desc: 'Download tailored pre-formatted template sheet' },
    { step: '04', title: 'Upload', desc: 'Upload prepared spreadsheet into validator' },
    { step: '05', title: 'Preview', desc: 'Review batch-generated invoices before final actions' },
    { step: '06', title: 'Share / Download / Save Draft', desc: 'Batch export, email dispatches, or draft saving' },
  ];

  return (
    <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
            Initial Flow:
          </span>
          <p className="text-xs text-zinc-400 leading-relaxed font-mono">
            Select Template → Upload Sheet → Preview & Download → Send Invoices
          </p>
          <p className="text-[11px] text-zinc-500 pt-1 leading-relaxed">
            Friction: Uploading blind required users to guess the spreadsheet layout, while preview and sending became crowded. Mistakes in primary fields cascaded into broken invoices.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#3899E8]/10 border border-[#3899E8]/25 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#3899E8] font-semibold">
            Revised Flow:
          </span>
          <p className="text-xs text-white leading-relaxed font-mono">
            Bulk Invoice → Maximum Line Items → Fill/Download Sheet → Upload → Preview → Share / Download / Save Draft
          </p>
          <p className="text-[11px] text-zinc-300 pt-1 leading-relaxed">
            Data preparation happens with clear schema constraints upfront before uploading and reviewing.
          </p>
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
          Complete Final Bulk Journey:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {bulkFlow.map((bf, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-[#3899E8] font-bold">{bf.step}</span>
              <h5 className="text-xs font-medium text-white">{bf.title}</h5>
              <p className="text-[11px] text-zinc-400 leading-snug">{bf.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 06. Home Architecture Evolution (Section 06)
 */
export function InvotixHomeEvolutionComparison() {
  const initialHomeItems = [
    'Invoice', 'Dashboard', 'Create Invoice', 'Reports', 
    'Tools', 'Blog', 'Invoice status', 'Recent invoices', 'Notifications / Profile'
  ];

  const revisedHomeAreas = [
    { name: 'Invoice', desc: 'Create Quick/Bulk invoices, manage list, track status lifecycles' },
    { name: 'Reports', desc: 'Monthly billings, income/expense analytics, pending totals' },
    { name: 'Settings', desc: 'Template color/font preferences, business profile, tax/GST' }
  ];

  return (
    <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Initial Feature-Heavy Wireframe */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
              Initial Home (Crowded)
            </span>
            <span className="text-[10px] font-mono text-zinc-500">9 Competing Entry Points</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {initialHomeItems.map((item, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-400 text-xs line-through opacity-70">
                {item}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed pt-2">
            The screen attempted to expose every capability simultaneously, creating decision paralysis.
          </p>
        </div>

        {/* Focused 3-Area Structure */}
        <div className="p-5 rounded-xl bg-[#3899E8]/10 border border-[#3899E8]/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#3899E8] font-semibold">
              Revised Home (Focused)
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">3 Core Pillars</span>
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {revisedHomeAreas.map((area, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex flex-col space-y-1.5 text-xs">
                <span className="font-editorial text-white text-sm font-medium tracking-wide">{area.name}</span>
                <span className="text-[11px] text-zinc-400 leading-relaxed">{area.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-zinc-400">
        <strong className="text-white">Annotation:</strong> 5–6 major competing entry points → <span className="text-[#3899E8] font-semibold">3 core areas (Invoice | Reports | Settings)</span>
      </div>
    </div>
  );
}

/**
 * 07. Template Settings Customization (Section 07)
 */
export function InvotixTemplateSettingsVisual() {
  const [selectedColor, setSelectedColor] = useState('#3899E8');
  const [selectedFont, setSelectedFont] = useState('Inter');

  const brandColors = [
    { name: 'Primary Blue', hex: '#3899E8' },
    { name: 'Vibrant Red', hex: '#EF4444' },
    { name: 'Onyx Black', hex: '#18181B' },
    { name: 'Emerald Green', hex: '#10B981' }
  ];

  const fonts = [
    { name: 'Inter', className: 'font-inter', label: 'Inter' },
    { name: 'Anton', className: 'font-anton', label: 'Anton' },
    { name: 'Roboto', className: 'font-roboto', label: 'Roboto' }
  ];

  const activeFontObj = fonts.find(f => f.name === selectedFont) || fonts[0];

  return (
    <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#3899E8] font-semibold block">
              Focused Customization Controls
            </span>
            <h4 className="font-editorial text-base text-white">
              Color & Font Selection
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Instead of an overwhelming graphic design editor, users configure brand color (Blue, Red, Black, Green) and typography preferences (Inter, Anton, Roboto) once to apply consistently to all generated invoices.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-zinc-400 uppercase">Brand Color Palette:</label>
              <div className="flex flex-wrap gap-2">
                {brandColors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(c.hex)}
                    className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === c.hex ? 'border-white scale-110 shadow-lg' : 'border-white/20 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColor === c.hex && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <label className="text-[11px] font-mono text-zinc-400 uppercase">Typography Selection:</label>
              <div className="flex flex-wrap gap-2">
                {fonts.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedFont(f.name)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${f.className} ${
                      selectedFont === f.name ? 'bg-white text-zinc-950 shadow-md' : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Invoice Preview Mini-Card */}
        <div className={`lg:col-span-6 p-5 rounded-2xl bg-[#090A0E] border border-white/10 shadow-2xl space-y-3 ${activeFontObj.className}`}>
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedColor }} />
              <span className="font-semibold text-white tracking-wide">INVOTIX INVOICE #INV-2026-084</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Paid
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs py-2 text-zinc-400">
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-500 block">Billed To</span>
              <span className="text-white font-medium text-sm">Acme Studios Inc.</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block">Amount Due</span>
              <span className="text-white font-bold text-base" style={{ color: selectedColor }}>$3,450.00</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
            <span>Applied Font: <strong className="text-white">{selectedFont}</strong></span>
            <span>Accent: <code className="text-xs font-bold" style={{ color: selectedColor }}>{selectedColor}</code></span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 10. Design System Specifications (Section 10)
 */
export function InvotixDesignSystemMatrix() {
  const colors = [
    { name: 'Primary Blue', hex: '#3899E8', usage: 'Primary brand accent, active interactive states, primary CTAs' },
    { name: 'Success Green', hex: '#059669', usage: 'Paid statuses, positive reconciliations, verified states' },
    { name: 'Error Red', hex: '#F35555', usage: 'Overdue invoices, critical alerts, validation errors' },
    { name: 'Warning Yellow', hex: '#F2CA55', usage: 'Pending reminders, upcoming due notices, draft states' },
  ];

  const typography = [
    { style: 'H1', weight: '700 (Bold)', size: '26px', lineHeight: '31px' },
    { style: 'H2', weight: '600 (Semi-Bold)', size: '21.67px', lineHeight: '26px' },
    { style: 'H3', weight: '600 (Semi-Bold)', size: '18.06px', lineHeight: '22px' },
    { style: 'H4', weight: '600 (Semi-Bold)', size: '15.05px', lineHeight: '18px' },
    { style: 'Body', weight: '500 (Medium)', size: '15px', lineHeight: '18px' },
    { style: 'Body Secondary', weight: '500 (Medium)', size: '14px', lineHeight: '17px' },
    { style: 'Button Large', weight: '500 (Medium)', size: '20px', lineHeight: '24px' },
    { style: 'Button Medium', weight: '500 (Medium)', size: '16px', lineHeight: '19px' },
    { style: 'Button Small', weight: '500 (Medium)', size: '14px', lineHeight: '17px' },
    { style: 'Label Large', weight: '400 (Regular)', size: '20px', lineHeight: '24px' },
    { style: 'Label Medium', weight: '400 (Regular)', size: '16px', lineHeight: '19px' },
    { style: 'Label Small', weight: '400 (Regular)', size: '12px', lineHeight: '15px' },
  ];

  const componentsList = [
    'Checkboxes', 'Toggles', 'Counters', 'Filters', 
    'Listboxes', 'Table rows', 'Invoice cards', 'Labels', 'Invoice-related components'
  ];

  const interactionStates = [
    'Selected / Unselected', 'Active / Inactive', 'Checked / Unchecked', 'Expanded / Collapsed'
  ];

  return (
    <div className="space-y-6">
      {/* Colors */}
      <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#3899E8] font-semibold">
            Color Palette & Semantic Tokens
          </span>
          <span className="text-xs text-zinc-400">WCAG AA accessible contrast</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {colors.map((c, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded-lg border border-white/10" style={{ backgroundColor: c.hex }} />
                <div>
                  <span className="text-xs font-semibold text-white block">{c.name}</span>
                  <span className="text-[11px] font-mono text-zinc-400">{c.hex}</span>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug">{c.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Scale Table */}
      <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#3899E8] font-semibold">
            Typography Tokens (Inter)
          </span>
          <span className="text-xs text-zinc-400">Strict typographic step scale</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-zinc-500 font-mono text-[10px] uppercase">
                <th className="py-2.5 px-3">Style</th>
                <th className="py-2.5 px-3">Weight</th>
                <th className="py-2.5 px-3">Size</th>
                <th className="py-2.5 px-3">Line Height</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {typography.map((t, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="py-2 px-3 font-semibold text-white">{t.style}</td>
                  <td className="py-2 px-3 text-zinc-400 font-mono">{t.weight}</td>
                  <td className="py-2 px-3 text-zinc-300 font-mono">{t.size}</td>
                  <td className="py-2 px-3 text-zinc-400 font-mono">{t.lineHeight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reusable Components & States */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-[#11141A] border border-white/10 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block">
            Component Library
          </span>
          <div className="flex flex-wrap gap-2">
            {componentsList.map((item, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#11141A] border border-white/10 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#3899E8] font-semibold block">
            Interaction States
          </span>
          <div className="grid grid-cols-2 gap-2">
            {interactionStates.map((st, i) => (
              <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-zinc-300 font-mono">
                {st}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 11. What I Rejected 4-Card Visual Matrix (Section 11)
 */
export function InvotixRejectedMatrix() {
  const rejectedCards = [
    {
      title: '01 — Feature-Heavy Home',
      rejected: 'A Home screen with 9 competing entry points and secondary blog/tools content.',
      chosen: 'Invoice | Reports | Settings — 3 focused core areas.'
    },
    {
      title: '02 — Long Quick Invoice Flow',
      rejected: 'A separate screen for almost every invoice section (6–8 steps).',
      chosen: 'A 4-step consolidated flow grouping related fields together.'
    },
    {
      title: '03 — Spreadsheet-Based Bulk Upload',
      rejected: 'Upload sheet directly without line-item constraints, causing parsing errors.',
      chosen: 'Structured: Max Line Items → Fill/Download Sheet → Upload → Preview → Dispatch.'
    },
    {
      title: '04 — Extensive Template Customization',
      rejected: 'Giving users broad graphic design controls and layout tweaking.',
      chosen: 'A focused invoice template with color and font customization.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {rejectedCards.map((rc, idx) => (
        <div key={idx} className="p-5 rounded-2xl bg-[#11141A] border border-white/10 space-y-3">
          <h4 className="font-editorial text-base text-white">{rc.title}</h4>
          
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-1">
              <span className="text-[10px] font-mono uppercase text-rose-400 font-semibold block">
                Rejected Direction
              </span>
              <p className="text-zinc-300 leading-relaxed">{rc.rejected}</p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
                Chosen Direction
              </span>
              <p className="text-zinc-200 font-medium leading-relaxed">{rc.chosen}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
