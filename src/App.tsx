/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { WorkView } from './views/WorkView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { CaseStudyView } from './views/CaseStudyView';
import { caseStudies } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);

  // Sync with browser hash for recruiter deep-linking and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setActiveTab('home');
        setSelectedCaseStudyId(null);
        return;
      }

      if (hash.startsWith('case-study/')) {
        const projectId = hash.replace('case-study/', '');
        const exists = caseStudies.some((p) => p.id === projectId);
        if (exists) {
          setSelectedCaseStudyId(projectId);
          setActiveTab('work');
          return;
        }
      }

      if (['home', 'work', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash as NavTab);
        setSelectedCaseStudyId(null);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: NavTab) => {
    setActiveTab(tab);
    setSelectedCaseStudyId(null);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (id: string) => {
    setSelectedCaseStudyId(id);
    setActiveTab('work');
    window.location.hash = `case-study/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWork = () => {
    setSelectedCaseStudyId(null);
    setActiveTab('work');
    window.location.hash = 'work';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0C0E] text-zinc-100 selection:bg-white selection:text-zinc-950 font-sans">
      {/* Top persistent navigation */}
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedCaseStudyId ? (
          <CaseStudyView 
            projectId={selectedCaseStudyId}
            onBackToWork={handleBackToWork}
            onSelectProject={handleSelectProject}
          />
        ) : (
          <>
            {activeTab === 'home' && (
              <HomeView 
                onNavigate={handleNavigate} 
                onSelectProject={handleSelectProject} 
              />
            )}
            {activeTab === 'work' && (
              <WorkView 
                onSelectProject={handleSelectProject} 
              />
            )}
            {activeTab === 'about' && (
              <AboutView 
                onNavigate={handleNavigate} 
              />
            )}
            {activeTab === 'contact' && (
              <ContactView />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
