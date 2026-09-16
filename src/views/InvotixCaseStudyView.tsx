import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Share2, 
  Sliders, 
  ShieldAlert, 
  Check, 
  CreditCard, 
  FileText, 
  Users, 
  Layers, 
  CornerDownRight, 
  HelpCircle,
  ExternalLink,
  Send,
  AlertCircle,
  Download,
  Save
} from 'lucide-react';
import { 
  InvotixPlaceholderBox,
  InvotixProductDirectionFlow,
  InvotixResearchPriorities,
  InvotixPaymentJourneyDiagram,
  InvotixQuickInvoiceComparison,
  InvotixBulkInvoiceDecisionFlow,
  InvotixHomeEvolutionComparison,
  InvotixTemplateSettingsVisual,
  InvotixDesignSystemMatrix,
  InvotixRejectedMatrix
} from '../components/InvotixArtifacts';
import { InvotixPrototypePlayer } from '../components/InvotixPrototypePlayer';
import { InvotixWireframeCarousel } from '../components/InvotixWireframeCarousel';

interface InvotixCaseStudyViewProps {
  onBackToWork: () => void;
  onSelectProject?: (id: string) => void;
}

export const InvotixCaseStudyView: React.FC<InvotixCaseStudyViewProps> = ({
  onBackToWork,
  onSelectProject
}) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'section-01', label: '01 Problem' },
    { id: 'section-02', label: '02 Discovery' },
    { id: 'section-03', label: '03 Invoice Management' },
    { id: 'section-04', label: '04 Quick Invoice' },
    { id: 'section-05', label: '05 Bulk Invoice' },
    { id: 'section-06', label: '06 Home Evolution' },
    { id: 'section-07', label: '07 Template Settings' },
    { id: 'section-08', label: '08 Rough to Final' },
    { id: 'section-09', label: '09 Prototype' },
    { id: 'section-10', label: '10 Design System' },
    { id: 'section-11', label: '11 What I Rejected' },
    { id: 'section-12', label: '12 Learnings' },
    { id: 'section-13', label: '13 Limitations' },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-zinc-100 selection:bg-[#3899E8] selection:text-white font-sans pb-24">
      {/* 1. Persistent Top Breadcrumb & Quick Actions */}
      <header className="sticky top-0 z-40 bg-[#0B0C0E]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBackToWork}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Work Archive</span>
          </button>
          <span className="text-zinc-600 hidden sm:inline">/</span>
          <span className="text-xs text-zinc-400 hidden sm:inline truncate max-w-xs font-medium">
            From Creating Invoices to Managing the Journey — INVOTIX
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 rounded-full bg-[#3899E8]/10 border border-[#3899E8]/30 text-[#3899E8] text-[11px] font-medium tracking-wide">
            Case Study 2 · In Progress
          </span>
        </div>
      </header>

      {/* 2. Recruiter Sticky Section Bar */}
      <nav aria-label="Case Study Sections" className="bg-[#11141A] border-b border-white/10 px-4 sm:px-8 py-2 overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto flex items-center space-x-1 sm:space-x-2 text-xs min-w-max">
          <span className="text-zinc-500 mr-2 text-[11px] uppercase tracking-wider font-semibold font-mono">Jump to:</span>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 rounded-full transition-all text-xs font-medium ${
                activeSection === item.id
                  ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Main Case Study Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-20">
        
        {/* HERO SECTION */}
        <section id="hero" className="space-y-8 scroll-mt-20">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#3899E8]/10 border border-[#3899E8]/30 text-[#3899E8] text-xs font-mono font-medium">
              <span>Case Study 02</span>
              <span>·</span>
              <span>UX/UI Case Study</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-normal tracking-tight text-white leading-tight">
              From Creating Invoices to Managing the Journey — <span className="text-[#3899E8]">INVOTIX</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
              Simplifying the journey from creating an invoice to managing its payment
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#11141A] border border-white/10 text-xs">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-1">Role</span>
              <span className="text-white font-medium">UI/UX Designer</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-1">Product</span>
              <span className="text-white font-medium">Invotix</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-1">Platform</span>
              <span className="text-white font-medium">Mobile app + Website</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-1">Project Type</span>
              <span className="text-white font-medium">Digital Product Design</span>
            </div>
          </div>
        </section>

        {/* 01 — THE PROBLEM I STARTED WITH */}
        <section id="section-01" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              01
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              The problem I started with
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p className="text-base text-white">
              Invotix started with a simple idea: <strong>make invoice creation easier.</strong>
            </p>
            <p>
              The product was designed for <strong>freelancers, small business owners, shopkeepers, and startups</strong> who need to create professional invoices without making the process unnecessarily difficult.
            </p>
            <p>
              The initial direction focused mainly on creating an invoice. But as I explored the problem through research, I realized that creating an invoice is only one part of the overall journey.
            </p>

            <div className="p-5 rounded-2xl bg-[#11141A] border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                Once an invoice is created, it still needs to be:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3899E8]" />
                  <span>Organized</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3899E8]" />
                  <span>Tracked</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3899E8]" />
                  <span>Followed up</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3899E8]" />
                  <span>And eventually marked as paid</span>
                </li>
              </ul>
            </div>

            <p>
              This shifted the direction of Invotix from simply being an invoice creation tool toward a product that supports the journey from <strong>creating an invoice to managing its payment status</strong>.
            </p>
          </div>

          {/* Product Direction Pipeline */}
          <InvotixProductDirectionFlow />

          <p className="text-xs text-zinc-400">
            The goal became to make the invoice journey easier to manage while reducing unnecessary manual effort.
          </p>

          {/* Final Invotix Hero Mockup Showcase */}
          <div className="pt-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0C0E14] shadow-2xl">
              <img
                src="/assets/invotix-hero-cover.png"
                alt="Invotix Product Hero — Home screen, invoice creation, and journey management interfaces"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 02 — WHAT I FOUND */}
        <section id="section-02" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              02
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              What I found
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              I used a combination of survey research (with a small number of responses, treated as exploratory rather than representative), secondary research, informal conversations/observations, and AI-assisted exploratory inquiry.
            </p>

            <div className="space-y-2">
              <h3 className="font-editorial text-lg text-white font-normal">A recurring pattern</h3>
              <p>
                The research pointed toward a broader problem than simply creating an invoice.
              </p>
              <p>
                People managing invoices manually can spend time creating documents, saving records, and following up on payments. Payment status can also become difficult to keep track of when records are spread across different tools or handled manually.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#11141A] border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                The research highlighted expectations around:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-zinc-300">
                <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">Easier invoice creation</span>
                <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">Professional invoice templates</span>
                <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">Payment tracking</span>
                <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">Reminders</span>
                <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">Client management</span>
                <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">Expense/income tracking</span>
                <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">Tax/GST support</span>
                <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">Mobile access</span>
              </div>
            </div>

            <p className="italic text-zinc-400">
              But I did not want to turn every research finding into a feature.
            </p>
          </div>

          {/* Research Priorities */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
              From research to product direction
            </span>
            <InvotixResearchPriorities />
          </div>

          {/* Central Question Callout */}
          <div className="p-6 rounded-2xl bg-[#3899E8]/10 border border-[#3899E8]/30 space-y-2 text-center sm:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#3899E8] font-bold block">
              Central Design Question
            </span>
            <p className="font-editorial text-lg sm:text-xl text-white font-normal leading-snug">
              How might we simplify the process of creating, managing, and tracking invoices from creation to payment?
            </p>
          </div>
        </section>

        {/* 03 — INVOICE MANAGEMENT DECISION */}
        <section id="section-03" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              03
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              From Invoice Creation to Invoice Management
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              One of the biggest changes in the product direction was recognizing that <strong>invoice creation should not be the end of the journey.</strong>
            </p>
            <p>
              If users generate multiple invoices, they also need a place to manage them afterward.
            </p>
            <p>
              I therefore introduced a dedicated <strong>Invoices</strong> area inside Settings.
            </p>
          </div>

          {/* Decision Statement */}
          <div className="p-5 rounded-2xl bg-[#11141A] border border-white/10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3899E8] font-semibold block">
              The Decision
            </span>
            <p className="text-zinc-200 text-sm leading-relaxed font-medium">
              Instead of treating generated invoices as something that disappears after creation, the product gives users a central place to view and manage them. Search and filtering were also included in the invoice-management experience.
            </p>
          </div>

          {/* Payment Journey Diagram */}
          <InvotixPaymentJourneyDiagram />

          <p className="text-xs text-zinc-400">
            This helped connect invoice creation with what happens afterward.
          </p>

          {/* Interactive Visual Asset: Invoice Management & Journey */}
          <div className="space-y-4">
            <div className="bg-[#090A0D] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#3899E8]" />
                  <span className="font-mono text-white text-xs font-medium">Invoice Management Journey Flow</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#3899E8]/10 text-[#3899E8] border border-[#3899E8]/30 text-[10px] font-mono uppercase font-semibold">
                  Final UI Workflow
                </span>
              </div>
              
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d1117] flex justify-center">
                <img 
                  src="/assets/invotix-invoice-journey.png" 
                  alt="Invotix User Journey: Account Preferences → Invoices list → Invoice Details (Paid & Draft states)" 
                  className="w-full h-auto object-contain rounded-xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full mt-4 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">1. Dedicated Access Point</span>
                  <p className="text-[11px] text-zinc-400">Inside Account Preferences, users tap "Invoice (Manage your Invoices)".</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">2. Filtered Central List</span>
                  <p className="text-[11px] text-zinc-400">Search invoices with status tabs (All, Active, Paid, Overdue, Draft).</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">3. Lifecycle & Payment Tracking</span>
                  <p className="text-[11px] text-zinc-400">View progress steps (Sent → Reminders → Paid) with live document preview.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — QUICK INVOICE DECISION */}
        <section id="section-04" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              04
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Quick Invoice Decision
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              The purpose of Quick Invoice was to make invoice creation fast.
            </p>
            <p>
              My first structure moved each major section into its own step. This resulted in approximately <strong>6–8 separate steps</strong>.
            </p>
            <p className="text-white font-medium">
              For something called Quick Invoice, the flow felt unnecessarily long.
            </p>
          </div>

          {/* Comparison Artifact */}
          <InvotixQuickInvoiceComparison />

          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
              Final Actions:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-300 flex items-center space-x-2">
                <Share2 className="w-4 h-4 text-[#3899E8]" />
                <span>Share the invoice</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-300 flex items-center space-x-2">
                <Download className="w-4 h-4 text-[#3899E8]" />
                <span>Download PDF</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-300 flex items-center space-x-2">
                <Save className="w-4 h-4 text-[#3899E8]" />
                <span>Save it as a draft</span>
              </div>
            </div>
          </div>

          {/* Decision Statement */}
          <div className="p-5 rounded-2xl bg-[#3899E8]/10 border border-[#3899E8]/30 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3899E8] font-semibold block">
              The Decision
            </span>
            <p className="text-white text-sm font-medium leading-relaxed">
              Quick Invoice should reduce the number of steps needed to create an invoice without removing the information required to complete it.
            </p>
          </div>

          {/* Interactive Visual Asset: Quick Invoice Real Screen Flow */}
          <div className="space-y-4">
            <div className="bg-[#090A0D] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#3899E8]" />
                  <span className="font-mono text-white text-xs font-medium">Quick Invoice Creation Flow</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#3899E8]/10 text-[#3899E8] border border-[#3899E8]/30 text-[10px] font-mono uppercase font-semibold">
                  Final Screen Flow
                </span>
              </div>
              
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d1117] flex justify-center">
                <img 
                  src="/assets/quick-invoice-journey.png" 
                  alt="Quick Invoice User Flow: Select Type → Quick Invoice Setup (Client & Item Selection) → Detailed Invoice Editor" 
                  className="w-full h-auto object-contain rounded-xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full mt-4 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">1. Select Invoice Type</span>
                  <p className="text-[11px] text-zinc-400">User selects Quick Invoice from the streamlined type selection screen.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">2. Client & Item Selection</span>
                  <p className="text-[11px] text-zinc-400">Pick client, add line item or service with live total calculation.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">3. Invoice Details & Actions</span>
                  <p className="text-[11px] text-zinc-400">Review metadata, billing, tax breakdown, digital signature, and Save/Send.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — BULK INVOICE DECISION */}
        <section id="section-05" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              05
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Bulk Invoice Decision
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              Bulk invoicing needed a different approach because users had to prepare invoice information for multiple invoices at once.
            </p>
          </div>

          {/* Bulk Invoice Flow Comparison */}
          <InvotixBulkInvoiceDecisionFlow />

          <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
            <p>
              The user first selects the maximum number of line items, then fills or downloads the required sheet. After uploading it, the generated invoices can be reviewed in the preview before the user chooses what to do next.
            </p>
          </div>

          {/* Decision Statement */}
          <div className="p-5 rounded-2xl bg-[#3899E8]/10 border border-[#3899E8]/30 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3899E8] font-semibold block">
              The Decision
            </span>
            <p className="text-white text-sm font-medium leading-relaxed">
              Instead of making the bulk flow primarily about uploading a sheet, I structured it around preparing the invoice data first, then uploading and reviewing it before the final action.
            </p>
          </div>

          {/* Interactive Visual Asset: Bulk Invoice (Explore Wireframe vs Final UI) */}
          <div className="space-y-4">
            <div className="bg-[#090A0D] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#3899E8]" />
                  <span className="font-mono text-white text-xs font-medium">Bulk Invoicing Architecture</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#3899E8]/10 text-[#3899E8] border border-[#3899E8]/30 text-[10px] font-mono uppercase font-semibold">
                  Exploration → Final UI
                </span>
              </div>

              {/* Wireframe Exploration Phase */}
              <div className="w-full space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                    01. Explore Stage — 4-Step Wireframe Structure
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
                    Initial Concept
                  </span>
                </div>
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#595959] p-3 sm:p-4 flex justify-center">
                  <img 
                    src="/assets/bulk-invoice-wireframe-explore.png" 
                    alt="Bulk Invoice 4-Step Exploration Wireframe (Select Template, Upload Sheet, Preview & Download, Send Invoice)" 
                    className="w-full h-auto object-contain select-none max-h-[420px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Final UI Flow */}
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#3899E8] font-semibold tracking-wider">
                    02. Final UI — In-Product Preparation, Dual Previews & Actions
                  </span>
                  <span className="text-[10px] font-mono text-[#3899E8] bg-[#3899E8]/10 px-2 py-0.5 rounded border border-[#3899E8]/20">
                    Final Direction
                  </span>
                </div>
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d1117] flex justify-center">
                  <img 
                    src="/assets/bulk-invoice-final-flow.png" 
                    alt="Bulk Invoice Final UI Flow: Select Type → Select Line Items → Fill/Upload Sheet with Template Download → Card & Tabular Dual Previews → Send Invoices" 
                    className="w-full h-auto object-contain rounded-xl select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="w-full mt-5 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">1. Item Scope First</span>
                  <p className="text-[11px] text-zinc-400">Select line item count so the sheet template dynamically matches the batch size.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">2. In-App or Downloaded Sheet</span>
                  <p className="text-[11px] text-zinc-400">Fill directly in the app or download the standardized .XLSX/.CSV template.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">3. Card & Tabular Previews</span>
                  <p className="text-[11px] text-zinc-400">Toggle between Card and Table views to verify totals before saving or sending.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — HOME: FEATURE-HEAVY → FOCUSED */}
        <section id="section-06" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              06
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Home: Feature-heavy → Focused
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              The Home screen went through one of the biggest structural changes.
            </p>
            <p>
              The initial Home explored many competing entry points. As I reviewed the structure, it became difficult to communicate what Invotix actually needed users to do from the Home screen.
            </p>
            <p className="text-white font-medium">
              Instead of continuing to refine the crowded high-fidelity direction, I returned to wireframing and reconsidered the product structure.
            </p>
          </div>

          {/* Home Evolution Comparison */}
          <InvotixHomeEvolutionComparison />

          {/* Decision Statement */}
          <div className="p-5 rounded-2xl bg-[#3899E8]/10 border border-[#3899E8]/30 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3899E8] font-semibold block">
              The Decision
            </span>
            <p className="text-white text-sm font-medium leading-relaxed">
              The Home screen did not need to expose every capability. It needed to provide clear access to the product's main areas.
            </p>
          </div>

          {/* Interactive Visual Asset: Home Screen Evolution (Wireframe vs Final UI) */}
          <div className="space-y-4">
            <div className="bg-[#090A0D] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#3899E8]" />
                  <span className="font-mono text-white text-xs font-medium">Home Screen Evolution Comparison</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#3899E8]/10 text-[#3899E8] border border-[#3899E8]/30 text-[10px] font-mono uppercase font-semibold">
                  Wireframe → Final UI
                </span>
              </div>
              
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#ffffff] p-2 sm:p-4 flex justify-center">
                <img 
                  src="/assets/home-screen-evolution.png" 
                  alt="Home Screen Evolution: Initial Wireframe (multiple entry points) vs Structured & Final UI (focused around Invoices, Reports & Settings)" 
                  className="w-full h-auto object-contain rounded-xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full mt-5 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">Before (Initial Wireframe)</span>
                  <p className="text-[11px] text-zinc-400">Multiple competing banners, disjointed payment boxes, and scattered secondary actions created visual noise.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-[#3899E8] font-medium text-[11px] block">After (Structured & Final UI)</span>
                  <p className="text-[11px] text-zinc-400">Focused primary metric (Monthly Revenue), prominent Create CTA, clear daily payment statuses, and recent activity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — TEMPLATE SETTINGS DECISION */}
        <section id="section-07" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              07
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Template Settings Decision
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              Invoice customization created another design decision.
            </p>
            <p>
              The initial direction explored giving users more control over the visual design of their invoices. But this introduced a larger question:
            </p>
            <blockquote className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-[#3899E8] text-white font-editorial text-base">
              "How much customization does an invoice product actually need?"
            </blockquote>
            <p className="text-white font-medium">
              Invotix is primarily an invoice product, not a graphic-design tool.
            </p>
          </div>

          {/* Template Settings Visualizer */}
          <InvotixTemplateSettingsVisual />

          {/* Decision Statement */}
          <div className="p-5 rounded-2xl bg-[#3899E8]/10 border border-[#3899E8]/30 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3899E8] font-semibold block">
              The Decision
            </span>
            <p className="text-white text-sm font-medium leading-relaxed">
              Give users useful control over their invoice appearance without turning invoice creation into a design task.
            </p>
          </div>

          {/* Interactive Visual Asset: Customize Invoice Templates Flow */}
          <div className="space-y-4">
            <div className="bg-[#090A0D] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#3899E8]" />
                  <span className="font-mono text-white text-xs font-medium">Customize Invoice Templates</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#3899E8]/10 text-[#3899E8] border border-[#3899E8]/30 text-[10px] font-mono uppercase font-semibold">
                  Color & Typography Options
                </span>
              </div>
              
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#ffffff] p-2 sm:p-4 flex justify-center">
                <img 
                  src="/assets/template-settings-flow.png" 
                  alt="Customize Invoice Templates: Palette icon provides Red, Black, Green, Blue options; Typography icon provides Anton, Roboto, Inter options; Carousel navigation to explore templates and Save & Apply" 
                  className="w-full h-auto object-contain rounded-xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full mt-5 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">1. Color Palette Customization</span>
                  <p className="text-[11px] text-zinc-400">Palette icon surfaces focused color choices (Red, Black, Green, Blue) to apply brand identity instantly.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">2. Curated Typography</span>
                  <p className="text-[11px] text-zinc-400">Text icon toggles proven typefaces (Anton, Roboto, Inter) ensuring high readability on invoices.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-white font-medium text-[11px] block">3. Carousel & One-Click Apply</span>
                  <p className="text-[11px] text-zinc-400">Arrow controls enable cycling through layout templates before finalizing with "Save & Apply".</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — ROUGH STRUCTURE → FINAL UI */}
        <section id="section-08" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              08
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Rough Structure → Final UI
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              The high-fidelity screens were not where the main structural decisions happened.
            </p>
            <p>
              I initially started designing directly, but when the direction became too feature-heavy and unclear, I returned to <strong>paper wireframing</strong>.
            </p>
            <p>
              This became an important part of the project. I explored different versions of:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              <li className="p-2 rounded-lg bg-white/[0.02] border border-white/5">• The Home structure</li>
              <li className="p-2 rounded-lg bg-white/[0.02] border border-white/5">• Invoice creation</li>
              <li className="p-2 rounded-lg bg-white/[0.02] border border-white/5">• Bulk invoicing</li>
              <li className="p-2 rounded-lg bg-white/[0.02] border border-white/5">• Invoice management</li>
              <li className="p-2 rounded-lg bg-white/[0.02] border border-white/5">• And template settings</li>
            </ul>
            <p>
              The goal was to solve the structure before investing further in visual design. Once the structure was refined, I translated the selected direction into high-fidelity screens and applied the visual system across the product.
            </p>
          </div>

          {/* Progression Step Bar */}
          <div className="p-5 rounded-2xl bg-[#11141A] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
              Iterative Progression:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-white/5 text-zinc-300 font-mono">Explore</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
              <span className="px-3 py-1 rounded-lg bg-white/5 text-zinc-300 font-mono">Remove</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
              <span className="px-3 py-1 rounded-lg bg-white/5 text-zinc-300 font-mono">Restructure</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
              <span className="px-3 py-1 rounded-lg bg-white/5 text-zinc-300 font-mono">Refine</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
              <span className="px-3.5 py-1 rounded-lg bg-[#3899E8]/20 border border-[#3899E8]/40 text-[#3899E8] font-mono font-bold">Build Hi-Fi</span>
            </div>
          </div>

          {/* Interactive Wireframe to Final UI Carousel */}
          <div className="pt-2">
            <InvotixWireframeCarousel />
          </div>
        </section>

        {/* 09 — GUIDED FINAL EXPERIENCE */}
        <section id="section-09" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              09
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Guided Final Experience
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              After completing the high-fidelity screens, I connected them into an interactive prototype to demonstrate the main product flows and interactions.
            </p>
            <p>
              The prototype brings together the key parts of the Invotix experience, from entering the product and creating invoices to managing generated invoices and their payment journey.
            </p>
          </div>

          {/* Interactive Prototype Video Player */}
          <div className="pt-2">
            <InvotixPrototypePlayer />
          </div>
        </section>

        {/* 10 — SYSTEM BEHIND THE SCREENS */}
        <section id="section-10" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              10
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              System Behind the Screens
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              Once the structure was established, I created a visual system to keep the final screens consistent.
            </p>
            <p>
              I chose a clear and professional visual direction for Invotix, focusing on making the interface easy to understand while maintaining a professional appearance suitable for an invoicing product.
            </p>
          </div>

          {/* Complete Design System Matrix */}
          <InvotixDesignSystemMatrix />
        </section>

        {/* 11 — WHAT I REJECTED */}
        <section id="section-11" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              11
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              What I Rejected
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p className="text-base text-white font-medium">
              The final product was shaped as much by what I removed as by what I added.
            </p>
            <p>
              These decisions helped keep the product focused on its primary purpose rather than allowing every possible feature to become part of the core experience.
            </p>
          </div>

          {/* 4-Card Rejected Visual Matrix */}
          <InvotixRejectedMatrix />
        </section>

        {/* 12 — WHAT I LEARNED */}
        <section id="section-012" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              12
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              What I Learned
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#3899E8] font-bold">
                01 — Lesson
              </span>
              <h3 className="font-editorial text-base text-white">
                More features do not automatically create a better product
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                My first direction tried to bring many research findings into the product. The result was a more complicated experience. I learned to separate what could be a feature from what needed to be part of the core experience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#3899E8] font-bold">
                02 — Lesson
              </span>
              <h3 className="font-editorial text-base text-white">
                Wireframing helped me solve product structure
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                The biggest improvements did not come from visual styling. They came from going back to wireframes and reconsidering: what belongs on Home, how invoice creation should work, how bulk invoicing should work, and where invoice management belongs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#3899E8] font-bold">
                03 — Lesson
              </span>
              <h3 className="font-editorial text-base text-white">
                The problem became broader than invoice creation
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Invotix started around invoice generation. Research and exploration pushed the product toward a broader journey: <strong className="text-white">Create → Send → Track → Get Paid</strong>. This changed the role of invoice management within the product.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#11141A] border border-white/10 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#3899E8] font-bold">
                04 — Lesson
              </span>
              <h3 className="font-editorial text-base text-white">
                Research needs prioritization
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Research can produce a long list of possible features. The challenge is deciding which findings should influence the core product. For Invotix, invoice management, payment tracking, reduced manual effort, and easy professional invoice creation became more important than trying to include every possible feature.
              </p>
            </div>
          </div>
        </section>

        {/* 13 — LIMITATIONS */}
        <section id="section-13" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#3899E8] uppercase tracking-wider font-semibold font-mono">
              13
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Limitations
            </h2>
          </div>

          <p className="text-sm text-zinc-300">
            This project has several limitations that are important to acknowledge.
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <h4 className="text-xs font-semibold text-white">Limited primary research</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The survey had a small number of responses. The findings were therefore useful for exploration and direction-setting, but they cannot be treated as representative of the wider target audience.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <h4 className="text-xs font-semibold text-white">No usability validation</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The final design was not validated through formal usability testing with real users. Therefore, I cannot claim that the final flows were proven easier, faster, or more effective through user testing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <h4 className="text-xs font-semibold text-white">AI-assisted research</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Some exploratory research/interview-style material was AI-assisted. It was used to explore possible pain points and expectations, but it was not real-user validation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <h4 className="text-xs font-semibold text-white">Product scope</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The app was developed to a substantial level, but some features still required changes or updates, while the website focused on the main product features.
              </p>
            </div>
          </div>

          {/* FINAL TAKEAWAY */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#11141A] to-[#090A0E] border border-white/10 space-y-4 text-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#3899E8] font-bold block">
              Final Takeaway
            </span>
            <p className="font-editorial text-xl sm:text-2xl text-white font-normal leading-relaxed max-w-xl mx-auto">
              Invotix started as a project about creating invoices. Through research and design exploration, the focus expanded toward a more complete invoice journey:
            </p>
            <div className="pt-2">
              <span className="inline-block px-6 py-2.5 rounded-full bg-[#3899E8]/15 border border-[#3899E8]/40 text-[#3899E8] font-editorial text-lg text-white">
                Create the invoice. Manage the invoice. Track the journey.
              </span>
            </div>
          </div>
        </section>

        {/* Footer Navigation Back & Project Switcher */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onSelectProject && onSelectProject('shared-record-local-services')}
            className="w-full sm:w-auto p-4 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-left space-y-1 group"
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center">
              <ArrowLeft className="w-3 h-3 mr-1" /> Case Study 01
            </span>
            <div className="font-editorial text-sm text-white group-hover:text-zinc-200 transition-colors">
              Building a shared record for recurring local services
            </div>
          </button>

          <button
            onClick={onBackToWork}
            className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
          >
            Back to All Projects
          </button>
        </div>

      </main>
    </div>
  );
};
