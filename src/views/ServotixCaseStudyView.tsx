import React, { useState, useEffect } from 'react';
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
  ExternalLink
} from 'lucide-react';
import { 
  ScatteredRecordsVisual,
  ShiftInThinkingVisual,
  ServotixServiceLogMockup,
  ServotixPaymentEvolution,
  ServotixAddServiceEvolution,
  ServotixProviderExperienceMockup,
  ServotixDesignSystemSpecs,
  ServotixFinalExperienceJourneys,
  ServotixSystemRelationshipDiagram,
  ServotixRejectedDirectionsVisual
} from '../components/ServotixArtifacts';

interface ServotixCaseStudyViewProps {
  onBackToWork: () => void;
  onSelectProject?: (id: string) => void;
}

export const ServotixCaseStudyView: React.FC<ServotixCaseStudyViewProps> = ({
  onBackToWork,
  onSelectProject
}) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'section-01', label: '01 Problem' },
    { id: 'section-02', label: '02 Discovery' },
    { id: 'section-03', label: '03 Service Log' },
    { id: 'section-04', label: '04 Payment Iterations' },
    { id: 'section-05', label: '05 Add Service' },
    { id: 'section-06', label: '06 Provider Side' },
    { id: 'section-07', label: '07 Design System' },
    { id: 'section-08', label: '08 Final Journeys' },
    { id: 'section-09', label: '09 System Architecture' },
    { id: 'section-10', label: '10 Rejected Ideas' },
    { id: 'section-11', label: '11 Learnings' },
    { id: 'section-12', label: '12 Limitations' },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-zinc-100 selection:bg-[#48A1EA] selection:text-white font-sans pb-24">
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
            Building a shared record for recurring local services
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 rounded-full bg-[#48A1EA]/10 border border-[#48A1EA]/30 text-[#48A1EA] text-[11px] font-medium tracking-wide">
            Personal Project · Mobile
          </span>
        </div>
      </header>

      {/* 2. Recruiter Sticky Section Bar */}
      <nav aria-label="Case Study Sections" className="bg-[#111216] border-b border-white/10 px-4 sm:px-8 py-2 overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto flex items-center space-x-1 sm:space-x-2 text-xs min-w-max">
          <span className="text-zinc-500 mr-2 text-[11px] uppercase tracking-wider font-semibold">Jump to:</span>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-2.5 py-1 rounded-md transition-colors text-[11px] whitespace-nowrap ${
                activeSection === item.id
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5 font-medium'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Case Study Article Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 space-y-20">

        {/* HERO */}
        <section id="hero" className="space-y-8 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#48A1EA]"></span>
              <span>Case study 01</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-editorial font-normal text-white tracking-tight leading-[1.1]">
              Building a shared record for recurring local services
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-sans leading-relaxed max-w-3xl">
              What started as a payment-management problem became a problem of keeping residents and service providers on the same page.
            </p>
          </div>

          {/* Project Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-[#111216] border border-white/10 text-xs font-sans">
            <div>
              <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold block">Role</span>
              <span className="font-semibold text-white text-sm">UI/UX Designer</span>
            </div>
            <div>
              <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold block">Project</span>
              <span className="font-semibold text-white text-sm">Personal Project</span>
            </div>
            <div>
              <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold block">Platform</span>
              <span className="font-semibold text-white text-sm">Mobile</span>
            </div>
            <div>
              <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold block">Users</span>
              <span className="font-semibold text-[#48A1EA] text-sm">Residents & Providers</span>
            </div>
          </div>

          {/* Summary Digest Banner */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] font-semibold block">
              Summary
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              This case study documents how discovery observations pivoted the product from a basic recurring bill-pay tool into an interconnected, tabular verification system between residents and local service providers. It highlights 3 major decision stories, payment card reductions, scoping of Add Service, and honest reflection on research limitations.
            </p>
          </div>

          {/* Hero Showcase Image */}
          <div className="pt-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0C0E14] shadow-2xl">
              <img
                src="/assets/servotix-hero-cover.png"
                alt="Servotix Hero Showcase — One place. Shared by residents and providers"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 01 — THE PROBLEM I STARTED WITH */}
        <section id="section-01" className="space-y-6 scroll-mt-20">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              01
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              The problem I started with
            </h2>
          </div>

          <div className="prose prose-invert max-w-none space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              Recurring services like milk delivery, newspapers, garbage collection, maid services and car washing are often managed through a mix of notebooks, receipts, screenshots, WhatsApp messages and memory.
            </p>

            <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 my-4 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
                Core Inquiry
              </span>
              <p className="text-white text-base sm:text-lg italic font-medium leading-snug">
                “What happens when the resident and the service provider are both managing the same service, but keeping separate records?”
              </p>
            </div>

            <p>
              The initial direction was around managing recurring payments.
            </p>
            <p>
              But as I started researching, I realized the problem was broader.
            </p>
            <p className="text-white font-medium">
              The payment was only one part of the relationship.
            </p>
            <p>
              The service itself, whether it happened, what was paid, and what happened previously were all connected.
            </p>
          </div>
        </section>

        {/* 02 — WHAT I FOUND */}
        <section id="section-02" className="space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              02
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              What I found
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              I used secondary research, observations and informal conversations, and a small resident survey to understand the existing behaviour.
            </p>
            <p className="text-zinc-400 text-xs italic">
              The survey had small usable resident responses, so I treated it as directional rather than representative.
            </p>
          </div>

          {/* Visual: Scattered Records */}
          <div className="space-y-3">
            <h3 className="font-editorial text-lg text-white font-normal">Records were scattered</h3>
            <ScatteredRecordsVisual />
            <p className="text-xs text-zinc-400 pt-1 italic">
              There wasn't a shared record connecting the two sides.
            </p>
          </div>

          {/* The Secondary Problem */}
          <div className="p-6 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
            <h3 className="font-editorial text-lg text-white font-normal">And that created another problem</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              A payment could be difficult to verify.
            </p>
            <p className="text-white font-medium text-sm leading-relaxed">
              But more importantly, the service itself could affect the payment.
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed">
              For example, if a recurring milk service wasn't delivered as expected on a particular day, the record of that service mattered when calculating or verifying the payment.
            </p>
          </div>

          {/* Visual: The Shift in Thinking */}
          <div className="space-y-3">
            <h3 className="font-editorial text-lg text-white font-normal">This changed my direction</h3>
            <ShiftInThinkingVisual />
            <p className="text-xs text-zinc-400 pt-1 italic">
              That became the core direction of the product.
            </p>
          </div>
        </section>

        {/* 03 — DECISION STORY #1: SERVICE LOG */}
        <section id="section-03" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              03 — Decision Story #1
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              I made the Service Log the record, not just another screen
            </h2>
          </div>

          {/* Structural Breakdown: The Problem */}
          <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] font-semibold block">
              The Problem
            </span>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              If service delivery affects what someone should pay, users need to know which days the service actually happened.
            </p>
            <p className="text-zinc-400 text-xs">
              I explored different ways to represent the Service Log.
            </p>
          </div>

          {/* Interactive Service Log Visual (Exploration + Final UI) */}
          <ServotixServiceLogMockup />

          {/* Rationale & Decision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold block">
                What I Chose
              </span>
              <p className="text-white text-sm leading-relaxed font-medium">
                I used a tabular checkbox-based structure.
              </p>
              <p className="text-xs text-[#48A1EA] pt-1 font-semibold">
                Date / Day → Service provided / not provided
              </p>
              <p className="text-zinc-400 text-xs pt-1">
                The reason was simple: I wanted the record itself to be easy to scan and verify.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block">
                Result & System Impact
              </span>
              <p className="text-zinc-300 text-sm leading-relaxed">
                This turned the Service Log into more than a history screen.
              </p>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-white font-medium text-xs">
                Service delivery → Payment verification
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-950/20 border border-[#48A1EA]/20 text-xs text-zinc-300 space-y-1">
            <span className="text-[#48A1EA] font-semibold block uppercase text-[10px] tracking-wider">What I Learned</span>
            <p className="text-white font-medium">
              When recurring activity affects payment, the activity itself needs to be easy to verify.
            </p>
            <p className="text-zinc-400">
              This is one of the places where the research directly changed the UI.
            </p>
          </div>
        </section>

        {/* 04 — DECISION STORY #2: PAYMENT EVOLUTION */}
        <section id="section-04" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              04 — Decision Story #2
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Early Explorations & First Attempts → Final Design
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              This was one of the areas where I had to reject my earlier designs.
            </p>
          </div>

          {/* Interactive Payment Evolution Comparison */}
          <ServotixPaymentEvolution />

          {/* Decision Summary */}
          <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] font-semibold">
                The Decision
              </span>
            </div>
            <p className="text-lg font-medium text-white leading-snug">
              Show the status, then provide the action where it is needed.
            </p>
            <p className="text-zinc-300 text-xs leading-relaxed">
              This wasn't about making the card visually smaller just for aesthetics. It was about making the main task of the Payment screen more direct.
            </p>
          </div>
        </section>

        {/* 05 — DECISION STORY #3: ADD SERVICE */}
        <section id="section-05" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              05 — Decision Story #3
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              I didn't put every possible field into Add Service
            </h2>
          </div>

          <div className="prose prose-invert max-w-none space-y-3 text-zinc-300 text-sm leading-relaxed">
            <p>
              Adding a service could require a lot of information.
            </p>
            <p>
              I initially had many possible things that could be collected.
            </p>
            <p className="text-white font-medium">
              Instead of treating the form as a place to capture everything, I narrowed it to the information required to establish the service.
            </p>
          </div>

          {/* Visual Add Service Screen */}
          <ServotixAddServiceEvolution />

          <div className="p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-2 text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] font-semibold block">
              Core Takeaway
            </span>
            <p className="text-white font-medium text-sm leading-relaxed">
              The important decision here was not adding more fields. It was deciding what information actually belonged in the initial service setup.
            </p>
          </div>
        </section>

        {/* 06 — THE PROVIDER SIDE CHANGED THE PRODUCT */}
        <section id="section-06" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              06
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              The provider side changed the product
            </h2>
          </div>

          <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
            <p>
              The resident wasn't the only person I had to design for.
            </p>
            <p className="text-white font-medium">
              A provider has a different job.
            </p>
            <p>
              Instead of managing their own services, they may need to manage multiple customers and their service relationships.
            </p>
          </div>

          {/* Provider Artifacts */}
          <ServotixProviderExperienceMockup />
        </section>

        {/* 07 — FROM ROUGH STRUCTURE TO FINAL UI */}
        <section id="section-07" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              07
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              From rough structure to final UI
            </h2>
          </div>

          <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
            <p>
              Once the core structures were established, I moved into high-fidelity design.
            </p>
            <p>
              I used Miro to explore ideas and layouts, then continued iterating and built my own structures in Figma.
            </p>
          </div>

          {/* Design System Presentation */}
          <ServotixDesignSystemSpecs />
        </section>

        {/* 08 — THE FINAL EXPERIENCE */}
        <section id="section-08" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              08
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              The final experience
            </h2>
            <p className="text-zinc-400 text-xs">
              Instead of showing every final screen in a large grid, I would present the product as two guided journeys.
            </p>
          </div>

          {/* Guided Journeys & Prototype Video Placeholder */}
          <ServotixFinalExperienceJourneys />
        </section>

        {/* 09 — THE SYSTEM BEHIND THE SCREENS */}
        <section id="section-09" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              09
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              The system behind the screens
            </h2>
          </div>

          {/* Visual System Diagram */}
          <ServotixSystemRelationshipDiagram />
        </section>

        {/* 10 — WHAT I REJECTED ALONG THE WAY */}
        <section id="section-10" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              10
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              What I rejected along the way
            </h2>
            <p className="text-zinc-400 text-xs">
              I don't want the case study to show only the polished outcome. Some of the earlier ideas were intentionally discarded.
            </p>
          </div>

          {/* Rejected Directions Visual Cards */}
          <ServotixRejectedDirectionsVisual />

          <p className="text-xs text-zinc-400 italic">
            These discarded directions are important because they show how the final design was reached.
          </p>
        </section>

        {/* 11 — WHAT I LEARNED */}
        <section id="section-11" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              11
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              What I learned
            </h2>
          </div>

          {/* The Central Learning Display */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12131A] via-[#101116] to-[#0A0B0E] border border-white/15 shadow-xl space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] font-semibold block">
              The Central Shift in Thinking
            </span>

            <div className="space-y-4">
              <div className="text-zinc-400 text-sm font-medium">
                The biggest shift in my thinking was moving from:
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-zinc-300 text-base sm:text-lg font-medium italic">
                “This is a recurring payment problem.”
              </div>
              <div className="text-zinc-400 text-sm font-medium">
                to:
              </div>
              <div className="p-5 rounded-2xl bg-blue-950/20 border border-[#48A1EA]/40 text-white text-lg sm:text-xl font-semibold leading-snug">
                “This is a shared-record problem between two sides of the same service relationship.”
              </div>
            </div>

            <p className="text-zinc-300 text-xs">
              That changed how I thought about the entire product.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Connected Verification</span>
                <p className="text-zinc-400">The Service Log became connected to payment.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Status-Driven Payments</span>
                <p className="text-zinc-400">Payment became connected to service status.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Unified System</span>
                <p className="text-zinc-400">Provider management became part of the same system instead of a separate experience.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Direct UI Clarity</span>
                <p className="text-zinc-400">UI became focused on showing current state and history clearly rather than trying to display every piece of information at once.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — LIMITATIONS */}
        <section id="section-12" className="space-y-8 scroll-mt-20 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="inline-block text-xs text-[#48A1EA] uppercase tracking-wider font-semibold">
              12
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
              Limitations
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#111216] border border-white/10 space-y-6 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Honest Evaluative Scope</span>
            </div>

            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                This project wasn't fully validated.
              </p>
              <p>
                The survey sample was small, and the provider response couldn't be used as meaningful provider evidence.
              </p>
              <p>
                The observations were organized observations and informal conversations rather than formal participant interviews.
              </p>
            </div>

            {/* Clear Evaluative Definition */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
                Product Definition
              </span>
              <p className="text-base sm:text-lg text-white font-medium leading-snug">
                So I would describe the final product as: <br />
                <strong className="text-[#48A1EA] font-semibold">
                  A research-informed design exploration, not a fully validated production solution.
                </strong>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 space-y-1">
              <span className="text-zinc-300 font-semibold block uppercase text-[10px] tracking-wider">
                Immediate Next Useful Step:
              </span>
              <p className="text-zinc-300">
                The next useful step would be testing the Service Log, payment states, and provider workflows with actual residents and service providers.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Case Study Navigation Footer */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToWork}
            className="flex items-center space-x-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/15 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Selected Works Archive</span>
          </button>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-zinc-400 hover:text-white transition-colors font-medium"
          >
            ↑ Back to Top
          </button>
        </div>

      </main>
    </div>
  );
};
