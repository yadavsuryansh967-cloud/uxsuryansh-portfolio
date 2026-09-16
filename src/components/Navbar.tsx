import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Clock } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

export type NavTab = 'home' | 'work' | 'about' | 'contact';

interface NavbarProps {
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }).format(new Date());
        setCurrentTime(timeString);
      } catch {
        setCurrentTime('SF (PST)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (tab: NavTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const initials = designerProfile.name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 bg-[#0B0C0E]/85 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Designer Identity */}
        <button 
          id="nav-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 text-left group focus:outline-hidden rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/15 text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-md group-hover:border-white/30 transition-colors">
            {initials}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-white text-sm tracking-tight group-hover:text-zinc-200 transition-colors font-sans">
                {designerProfile.name}
              </span>
              <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                Open for roles
              </span>
            </div>
            <p className="text-zinc-400 text-xs font-normal">
              {designerProfile.title}
            </p>
          </div>
        </button>

        {/* Primary Desktop Navigation (strictly Home, Work, About, Contact) */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
          <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center space-x-1 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-white/15 shadow-2xs font-semibold' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Time indicator for subtle polish */}
          {currentTime && (
            <div className="hidden lg:flex items-center space-x-1.5 text-[11px] font-mono text-zinc-500 ml-4 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
              <span>SF {currentTime}</span>
            </div>
          )}

          {/* Persistent CTA */}
          <button
            id="nav-cta-contact"
            onClick={() => handleNavClick('contact')}
            className="ml-4 inline-flex items-center space-x-1 px-4 py-2 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0F1014] px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="flex items-center px-3 py-2 bg-emerald-500/10 rounded-lg text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
            Available for full-time UX/UI designer roles
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeTab === item.id 
                  ? 'bg-white/10 text-white font-semibold' 
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button
            id="mobile-nav-cta"
            onClick={() => handleNavClick('contact')}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-white text-zinc-950 text-xs font-semibold flex items-center justify-center space-x-2"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
