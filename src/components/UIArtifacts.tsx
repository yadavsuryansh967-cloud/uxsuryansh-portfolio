import React, { useState } from 'react';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  CreditCard, 
  ArrowRight,
  Sliders,
  Check,
  Zap,
  Layers,
  ChevronRight,
  Eye
} from 'lucide-react';

/**
 * Visual Mockup 1: MedFlow Clinical Dashboard (Desktop/Tablet)
 */
export function ClinicalDashboardMockup({ compact = false }: { compact?: boolean }) {
  const [selectedPatient, setSelectedPatient] = useState('RM-304');
  const [activeTab, setActiveTab] = useState<'sbar' | 'vitals' | 'meds'>('sbar');

  const patients = [
    { id: 'RM-304', name: 'James Vance, 68', acuity: 'Acute', hr: '118 bpm', bp: '142/92', spO2: '94%', delta: '+2 urgent flags', deltaType: 'urgent' },
    { id: 'RM-305', name: 'Elena Rostova, 44', acuity: 'Stable', hr: '74 bpm', bp: '118/76', spO2: '99%', delta: 'Vitals normalized', deltaType: 'normal' },
    { id: 'RM-308', name: 'Marcus Brody, 56', acuity: 'Observation', hr: '82 bpm', bp: '130/84', spO2: '97%', delta: 'Pending lab results', deltaType: 'pending' },
  ];

  return (
    <div className="w-full bg-[#111827] text-zinc-100 rounded-xl overflow-hidden border border-zinc-800 shadow-xl font-sans text-xs select-none">
      {/* OS App Bar */}
      <div className="bg-zinc-900/90 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
          </div>
          <span className="text-zinc-400 font-medium ml-2 text-[11px] tracking-wide">MedFlow EHR · Inpatient Ward 4B · Shift 07:00–19:00</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
            Sync Active
          </span>
          <span className="text-zinc-400 text-[11px]">Nurse R. Taylor, RN</span>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-12'} divide-y md:divide-y-0 md:divide-x divide-zinc-800 bg-[#0F172A]`}>
        {/* Left: Patient Triage Roster */}
        <div className={`${compact ? 'col-span-1' : 'col-span-5'} p-3.5 space-y-2.5`}>
          <div className="flex items-center justify-between pb-1 border-b border-zinc-800">
            <span className="font-semibold text-zinc-300 uppercase tracking-wider text-[10px]">Assigned Patients (3)</span>
            <span className="text-zinc-500 text-[10px]">Sort: Acuity Score</span>
          </div>

          <div className="space-y-2">
            {patients.map((p) => {
              const isSelected = selectedPatient === p.id;
              return (
                <div 
                  key={p.id}
                  onClick={() => setSelectedPatient(p.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-150 ${
                    isSelected 
                      ? 'bg-zinc-800/90 border-blue-500/60 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/20' 
                      : 'bg-zinc-900/60 border-zinc-800/80 hover:bg-zinc-800/40'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono font-semibold text-zinc-200 text-xs">{p.id}</span>
                        <span className="text-zinc-300 font-medium text-xs">{p.name}</span>
                      </div>
                      <div className="mt-1 flex items-center space-x-3 text-[11px] text-zinc-400">
                        <span>HR: <strong className="text-zinc-200 font-mono">{p.hr}</strong></span>
                        <span>BP: <strong className="text-zinc-200 font-mono">{p.bp}</strong></span>
                        <span>SpO2: <strong className="text-zinc-200 font-mono">{p.spO2}</strong></span>
                      </div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                      p.acuity === 'Acute' 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                        : p.acuity === 'Stable'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {p.acuity}
                    </span>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px]">
                    <span className="text-zinc-400 flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-zinc-500" />
                      {p.delta}
                    </span>
                    <span className="text-blue-400 font-medium flex items-center">
                      Review SBAR <ChevronRight className="w-3 h-3 ml-0.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: SBAR Shift Handoff Workspace */}
        <div className={`${compact ? 'col-span-1' : 'col-span-7'} p-3.5 bg-zinc-950/70 space-y-3`}>
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-blue-400 font-semibold">{selectedPatient}</span>
                <span className="font-medium text-zinc-200">Shift Transfer Protocol</span>
                <span className="text-[10px] bg-blue-900/40 text-blue-300 px-1.5 py-0.5 rounded border border-blue-700/50">Handoff Mode</span>
              </div>
            </div>
            
            {/* Tab switch */}
            <div className="flex bg-zinc-900 p-0.5 rounded border border-zinc-800">
              <button 
                onClick={() => setActiveTab('sbar')}
                className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${activeTab === 'sbar' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                SBAR Summary
              </button>
              <button 
                onClick={() => setActiveTab('vitals')}
                className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${activeTab === 'vitals' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                12h Trend
              </button>
              <button 
                onClick={() => setActiveTab('meds')}
                className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${activeTab === 'meds' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                Orders (3)
              </button>
            </div>
          </div>

          {/* SBAR structured sections */}
          {activeTab === 'sbar' && (
            <div className="space-y-2">
              <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 uppercase tracking-wider text-[10px] font-bold">Situation (S)</span>
                  <span className="text-zinc-500 text-[10px]">Admitted 14:20 Post-Op</span>
                </div>
                <p className="text-zinc-300 text-[11px] mt-1">Post-op telemetry monitoring following laparoscopic cholecystectomy. Currently experiencing episodic tachycardia.</p>
              </div>

              <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 uppercase tracking-wider text-[10px] font-bold">Background (B)</span>
                  <span className="text-zinc-500 text-[10px]">Allergies: Penicillin</span>
                </div>
                <p className="text-zinc-300 text-[11px] mt-1">History of Stage 1 HTN. IV saline running at 75 mL/hr. Foley removed at 05:00.</p>
              </div>

              <div className="p-2.5 rounded bg-zinc-900/80 border border-amber-500/30 bg-amber-950/10">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 uppercase tracking-wider text-[10px] font-bold">Assessment & Delta (A)</span>
                  <span className="text-amber-400 text-[10px] flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> Requires Monitoring</span>
                </div>
                <p className="text-zinc-200 text-[11px] mt-1 font-medium">SpO2 dropped to 92% at 03:30; stabilized with 2L NC. Pain reported at 6/10 at 06:15; PRN analgesic administered.</p>
              </div>

              <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800/80">
                <span className="text-zinc-400 uppercase tracking-wider text-[10px] font-bold">Recommendation (R)</span>
                <p className="text-zinc-300 text-[11px] mt-1">Recheck SpO2 at 08:00 post-shift handover. Awaiting AM potassium lab panel.</p>
              </div>
            </div>
          )}

          {activeTab === 'vitals' && (
            <div className="p-3 bg-zinc-900/80 rounded border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-300 text-xs">12-Hour Continuous Vitals Trend</span>
                <span className="text-[10px] text-zinc-400">Sampled every 30m</span>
              </div>
              {/* SVG Sparkline visualization */}
              <div className="h-20 w-full bg-zinc-950 rounded p-2 flex flex-col justify-between">
                <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                  <span>19:00</span>
                  <span>23:00</span>
                  <span>03:00</span>
                  <span>07:00 (Handover)</span>
                </div>
                <svg className="w-full h-10 overflow-visible" viewBox="0 0 300 40">
                  <path 
                    d="M 0,25 Q 40,28 75,20 T 150,34 T 225,10 T 300,16" 
                    fill="none" 
                    stroke="#38BDF8" 
                    strokeWidth="2" 
                  />
                  <circle cx="225" cy="10" r="3.5" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
                  <circle cx="300" cy="16" r="3" fill="#38BDF8" />
                </svg>
                <div className="flex items-center justify-between text-[10px] text-zinc-400">
                  <span className="flex items-center"><span className="w-2 h-0.5 bg-sky-400 mr-1"></span> HR (Heart Rate)</span>
                  <span className="text-rose-400 text-[9px]">Peak 126 bpm at 03:30</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'meds' && (
            <div className="space-y-1.5">
              <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="font-medium text-zinc-200">Acetaminophen 650mg PO</div>
                  <div className="text-[10px] text-zinc-400">Given 06:15 · Next available: 12:15</div>
                </div>
                <span className="text-emerald-400 text-[10px] font-medium bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">Administered</span>
              </div>
              <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="font-medium text-zinc-200">Normal Saline 0.9% IV</div>
                  <div className="text-[10px] text-zinc-400">75 mL/hr Continuous · Bag 2 of 3</div>
                </div>
                <span className="text-blue-400 text-[10px] font-medium bg-blue-950/40 px-2 py-0.5 rounded border border-blue-800/40">Infusing</span>
              </div>
              <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="font-medium text-zinc-200">Cefazolin 1g IVPB</div>
                  <div className="text-[10px] text-zinc-400">Scheduled 08:30 · Incoming Shift Task</div>
                </div>
                <span className="text-amber-400 text-[10px] font-medium bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">Due in 1h</span>
              </div>
            </div>
          )}

          {/* Verification Bar */}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-[10px] text-zinc-400">Audit Status: Pending Incoming Sign-off</span>
            <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-[11px] font-medium transition-colors flex items-center space-x-1 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
              <span>Sign Off Patient</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Visual Mockup 2: Lumina Fintech Mobile App
 */
export function FintechMobileMockup({ compact = false }: { compact?: boolean }) {
  const [activeEnvelope, setActiveEnvelope] = useState('dining');

  return (
    <div className="w-full flex justify-center items-center py-2">
      <div className="w-full max-w-[320px] bg-white text-zinc-900 rounded-[2rem] border-4 border-zinc-900 shadow-2xl p-4 font-sans select-none overflow-hidden relative">
        {/* Dynamic Island / Speaker Notch */}
        <div className="w-24 h-4 bg-zinc-900 rounded-full mx-auto mb-3"></div>

        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Daily Allowance</span>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-zinc-900 tracking-tight">$42.50</span>
              <span className="text-[10px] font-medium text-emerald-600">Safe to spend</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 text-xs font-semibold border border-zinc-200">
            AM
          </div>
        </div>

        {/* Pacing progress bar */}
        <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/80 mb-3 space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-zinc-600 font-medium">September Runway</span>
            <span className="text-zinc-800 font-semibold">19 days left</span>
          </div>
          <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden flex">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '68%' }}></div>
          </div>
          <div className="flex justify-between text-[10px] text-zinc-400">
            <span>Spent $820</span>
            <span>$1,240 Target</span>
          </div>
        </div>

        {/* Envelopes list */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Active Envelopes</span>
            <span className="text-[10px] text-zinc-500">Tap to Rebalance</span>
          </div>

          <div 
            onClick={() => setActiveEnvelope('dining')}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              activeEnvelope === 'dining'
                ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600/20'
                : 'border-zinc-200 bg-white hover:bg-zinc-50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <span className="text-base">☕</span>
                <span className="text-xs font-semibold text-zinc-800">Dining & Coffee</span>
              </div>
              <span className="text-xs font-bold text-zinc-900">$84.20</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="mt-1 flex justify-between text-[9px] text-zinc-400">
              <span>Remaining: 55%</span>
              <span className="text-emerald-700 font-medium">On Track</span>
            </div>
          </div>

          <div 
            onClick={() => setActiveEnvelope('groceries')}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              activeEnvelope === 'groceries'
                ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600/20'
                : 'border-zinc-200 bg-white hover:bg-zinc-50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <span className="text-base">🛒</span>
                <span className="text-xs font-semibold text-zinc-800">Groceries & Home</span>
              </div>
              <span className="text-xs font-bold text-zinc-900">$165.00</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <div className="mt-1 flex justify-between text-[9px] text-zinc-400">
              <span>Remaining: 22%</span>
              <span className="text-amber-700 font-medium">High Pacing</span>
            </div>
          </div>
        </div>

        {/* Quick Thumb-Zone CTA */}
        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
          <div className="text-[10px] text-zinc-500">Auto-Rebalance active</div>
          <button className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-[11px] font-medium hover:bg-zinc-800 transition-colors shadow-sm">
            + Log Expense
          </button>
        </div>

        {/* Home Indicator bar */}
        <div className="w-28 h-1 bg-zinc-300 rounded-full mx-auto mt-3"></div>
      </div>
    </div>
  );
}

/**
 * Visual Mockup 3: Stride Design System Specs & Token Architecture
 */
export function DesignSystemSpecMockup({ compact = false }: { compact?: boolean }) {
  const [activeTokenTab, setActiveTokenTab] = useState<'tokens' | 'components' | 'contrast'>('tokens');

  return (
    <div className="w-full bg-white text-zinc-900 rounded-xl overflow-hidden border border-zinc-200 shadow-xl font-sans text-xs select-none">
      {/* Spec header */}
      <div className="bg-zinc-50 px-4 py-3 border-b border-zinc-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-[10px]">
            S
          </div>
          <span className="font-semibold text-zinc-900 text-xs">Stride UI Core Spec</span>
          <span className="text-zinc-400 text-[10px]">v2.4.0 · Production Ready</span>
        </div>

        <div className="flex space-x-1 bg-zinc-200/60 p-0.5 rounded-lg text-[10px]">
          <button 
            onClick={() => setActiveTokenTab('tokens')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${activeTokenTab === 'tokens' ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-600'}`}
          >
            Design Tokens
          </button>
          <button 
            onClick={() => setActiveTokenTab('components')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${activeTokenTab === 'components' ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-600'}`}
          >
            Atomic Buttons
          </button>
          <button 
            onClick={() => setActiveTokenTab('contrast')}
            className={`px-2.5 py-1 rounded font-medium transition-colors ${activeTokenTab === 'contrast' ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-600'}`}
          >
            WCAG Matrix
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {activeTokenTab === 'tokens' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Color Tokens */}
            <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50/50 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Color Tokens</span>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center"><span className="w-3 h-3 rounded bg-indigo-600 mr-1.5 border border-indigo-700"></span> color.brand.primary</span>
                  <span className="font-mono text-zinc-500 text-[10px]">#4F46E5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center"><span className="w-3 h-3 rounded bg-zinc-900 mr-1.5 border border-zinc-950"></span> color.surface.dark</span>
                  <span className="font-mono text-zinc-500 text-[10px]">#18181B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center"><span className="w-3 h-3 rounded bg-emerald-600 mr-1.5 border border-emerald-700"></span> color.status.success</span>
                  <span className="font-mono text-zinc-500 text-[10px]">#059669</span>
                </div>
              </div>
            </div>

            {/* Spatial Tokens */}
            <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50/50 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">8pt Spatial System</span>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span>space.xs (4px)</span>
                  <span className="w-8 h-2 bg-zinc-300 rounded-xs"></span>
                </div>
                <div className="flex items-center justify-between">
                  <span>space.sm (8px)</span>
                  <span className="w-12 h-2 bg-zinc-300 rounded-xs"></span>
                </div>
                <div className="flex items-center justify-between">
                  <span>space.md (16px)</span>
                  <span className="w-16 h-2 bg-zinc-300 rounded-xs"></span>
                </div>
              </div>
            </div>

            {/* Radius Math */}
            <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50/50 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Concentric Radius Math</span>
              <div className="text-[11px] text-zinc-600 space-y-1">
                <p className="font-mono text-[10px] bg-white p-1 rounded border border-zinc-200">
                  R_inner = R_outer - Padding
                </p>
                <div className="p-2 bg-white rounded-xl border border-zinc-300 flex items-center justify-center">
                  <div className="p-2 bg-zinc-100 rounded-lg text-[9px] text-zinc-500 font-mono">
                    Nested 8px inside 16px
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTokenTab === 'components' && (
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Button Variant Matrix (Figma Master Specs)</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              <div className="p-2.5 rounded-lg border border-zinc-200 text-center space-y-1 bg-white">
                <span className="text-[9px] text-zinc-400 uppercase font-semibold">Primary Default</span>
                <button className="w-full py-1.5 px-3 bg-zinc-900 text-white rounded-md text-[11px] font-medium shadow-xs">
                  Continue
                </button>
              </div>

              <div className="p-2.5 rounded-lg border border-zinc-200 text-center space-y-1 bg-white">
                <span className="text-[9px] text-zinc-400 uppercase font-semibold">Primary Focused</span>
                <button className="w-full py-1.5 px-3 bg-zinc-900 text-white rounded-md text-[11px] font-medium ring-2 ring-indigo-500 ring-offset-1">
                  Focused
                </button>
              </div>

              <div className="p-2.5 rounded-lg border border-zinc-200 text-center space-y-1 bg-white">
                <span className="text-[9px] text-zinc-400 uppercase font-semibold">Secondary Neutral</span>
                <button className="w-full py-1.5 px-3 bg-white text-zinc-800 border border-zinc-300 rounded-md text-[11px] font-medium shadow-2xs">
                  Secondary
                </button>
              </div>

              <div className="p-2.5 rounded-lg border border-zinc-200 text-center space-y-1 bg-white">
                <span className="text-[9px] text-zinc-400 uppercase font-semibold">Disabled State</span>
                <button disabled className="w-full py-1.5 px-3 bg-zinc-100 text-zinc-400 border border-zinc-200 rounded-md text-[11px] font-medium cursor-not-allowed">
                  Unavailable
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTokenTab === 'contrast' && (
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Automated Contrast Verification (WCAG 2.1 AA)</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-zinc-900 text-white flex items-center justify-between">
                <div>
                  <span className="font-semibold block">Zinc-900 / White</span>
                  <span className="text-zinc-400 text-[10px]">Ratio: 16.2 : 1</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold">
                  PASS AAA
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-600 text-white flex items-center justify-between">
                <div>
                  <span className="font-semibold block">Indigo-600 / White</span>
                  <span className="text-indigo-200 text-[10px]">Ratio: 5.8 : 1</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold">
                  PASS AA
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-between border border-zinc-300">
                <div>
                  <span className="font-semibold block">Zinc-600 / Zinc-100</span>
                  <span className="text-zinc-500 text-[10px]">Ratio: 4.9 : 1</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-800 text-[9px] font-mono font-bold">
                  PASS AA
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Interactive User Flow Artifact
 */
export function UserFlowDiagram({ flowNodes }: { flowNodes: { step: string; action: string; systemResponse: string }[] }) {
  return (
    <div className="w-full bg-zinc-50 rounded-xl border border-zinc-200 p-4 font-sans text-xs">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-200">
        <span className="font-semibold text-zinc-800 text-xs">Primary User Task Flow</span>
        <span className="text-[10px] text-zinc-500 font-mono">End-to-End System Handshake</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {flowNodes.map((node, i) => (
          <div key={i} className="relative p-3.5 bg-white rounded-lg border border-zinc-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded font-mono">
                {node.step}
              </span>
              {i < flowNodes.length - 1 && (
                <span className="hidden md:inline-block text-zinc-400">→</span>
              )}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">User Action</span>
              <p className="text-zinc-800 font-medium text-[11px] leading-relaxed">{node.action}</p>
            </div>
            <div className="pt-2 border-t border-zinc-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-0.5">System Response</span>
              <p className="text-zinc-600 text-[11px] leading-relaxed">{node.systemResponse}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
